import requests
import json
from datetime import datetime, timedelta

def main():
    url = f'https://api.polygon.io/v2/reference/news'
    start_date = (datetime.now() - timedelta(days=7)).strftime("%Y-%m-%d")
    
    parameters = {
        "published_tc.gt": start_date,
        "apiKey": "2l9fU3gWdJnW7F6TlhRzVpKwm0NzzFJD"
    }

    data = requests.get(url, parameters).json()
    for i, article in enumerate(data):
        print(f"Article {i}: {article['sentiment']}")

# Takes in content of news article
# Output: Max of 400 string length of strings
def summarize_news(max_length=400):
    # load news content
    articles = get_news()
    res = []
    # Load pre-trained model and tokenizer
    save_directory = "summarize_model"
    if not os.path.exists(save_directory):
        summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
        summarizer.save_pretrained(save_directory)
    else:
        summarizer = pipeline("summarization", model=save_directory, tokenizer=save_directory, max_length=3000)
    for article in articles:
        summary = summarizer(article, truncation=True, max_length=max_length)
        res.append(summary)

    return articles   

# Summarize one long article through chunks
def bigger_summarize(max_length=100):
    article = get_news()[0]
    
    model_name = "facebook/bart-large-cnn"
    model = BartForConditionalGeneration.from_pretrained(model_name)
    tokenizer = BartTokenizer.from_pretrained(model_name)

    # tokenize without truncation
    inputs_no_trunc = tokenizer(article, max_length=None, return_tensors='pt', truncation=False)

    # get batches of tokens corresponding to the exact model_max_length
    chunk_start = 0
    chunk_end = tokenizer.model_max_length  # == 1024 for Bart
    inputs_batch_lst = []
    while chunk_start <= len(inputs_no_trunc['input_ids'][0]):
        inputs_batch = inputs_no_trunc['input_ids'][0][chunk_start:chunk_end]  # get batch of n tokens
        inputs_batch = torch.unsqueeze(inputs_batch, 0)
        inputs_batch_lst.append(inputs_batch)
        chunk_start += tokenizer.model_max_length  # == 1024 for Bart
        chunk_end += tokenizer.model_max_length  # == 1024 for Bart
    # generate a summary on each batch
    summary_ids_lst = [model.generate(
            inputs, num_beams=4, max_length=max_length, early_stopping=True
        ) for inputs in inputs_batch_lst]
    # decode the output and join into one string with one paragraph per summary batch
    summary_batch_lst = []
    for summary_id in summary_ids_lst:
        summary_batch = [tokenizer.decode(g, skip_special_tokens=True, clean_up_tokenization_spaces=False) for g in summary_id]
        summary_batch_lst.append(summary_batch[0])
    summary_all = '\n'.join(summary_batch_lst)

    print(summary_all)
    return summary_all

# Input: Model's tokenizer
# Output: returns a dictionary containing the encoded representations of input text
def truncate_news(tokenizer):
    articles = summarize_news()

    # Truncate the text if it exceeds the maximum sequence length of 512 tokens
    inputs = []
    for article in articles:
        tokenized_article = tokenizer.encode_plus(
            article,
            add_special_tokens=True,
            max_length=512,
            return_tensors="pt",
            truncation=True
        )
        inputs.append(tokenizer.decode(tokenized_article))
    return inputs

if __name__ == "__main__":
    main()
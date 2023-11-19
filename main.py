from transformers import pipeline
from transformers import AutoTokenizer, AutoModelForSequenceClassification
from data import get_news
import csv

def main():
    save_directory = "Jean-Baptiste/roberta-large-financial-news-sentiment-en"
    model = AutoModelForSequenceClassification.from_pretrained(save_directory)
    tokenizer = AutoTokenizer.from_pretrained(save_directory)

    data = get_news()
    
    ticker_results = {}

    for i, article in data.items():
        tickers = article['tickers']
        description = article['description']
        tokens = tokenizer(description, return_tensors='pt')
        outputs = model(**tokens)
        logits = outputs.logits
        probabilities = logits.softmax(dim=-1)
        negative_prob = probabilities[0][0].item()
        neutral_prob = probabilities[0][1].item()
        positive_prob = probabilities[0][2].item()

        for ticker in tickers:
            if ticker in ticker_results:
                ticker_results[ticker]["negative_prob"] += negative_prob
                ticker_results[ticker]["neutral_prob"] += neutral_prob
                ticker_results[ticker]["positive_prob"] += positive_prob
                ticker_results[ticker]["mentions"] += 1
            else:
                sentiment_data = {
                    "negative_prob": negative_prob,
                    "neutral_prob": neutral_prob,
                    "positive_prob": positive_prob,
                    "mentions": 1
                }
                ticker_results[ticker] = sentiment_data
    csv_filename = "/home/zenstock/out_old.csv"
    with open(csv_filename, mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(["Ticker", "Strategy", "Probability", "Mentions"])
        for ticker, results in ticker_results.items():
            strategy = "nothing"
            probability = max(max(results["negative_prob"], results["neutral_prob"]), results["positive_prob"])
            for potential_strategy, potential_prob in results.items():
                if probability == potential_prob:
                    strategy = potential_strategy
            probability /= results['mentions']
            if results['mentions'] >= 5:
                writer.writerow([ticker, strategy, probability, results['mentions']])

    return ticker_results

    
    # data = get_news()
    # print(data)
    # res = classifier(data)
    # print("Results:")
    # for i in range(len(res)):
    #     print(f"Article {i}: {res[i]}")

if __name__ == "__main__":
    main()
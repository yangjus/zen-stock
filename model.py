from transformers import pipeline
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import torch.nn.functional as F
import requests
from data import truncate_news

save_directory = "model"
if not os.path.exists(save_directory):
    model_name = "mrm8488/distilroberta-finetuned-financial-news-sentiment-analysis"
    model = AutoModelForSequenceClassification.from_pretrained(model_name)
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    tokenizer.save_pretrained(save_directory)
    model.save_pretrained(save_directory)
else:    
    model = AutoModelForSequenceClassification.from_pretrained(save_directory)
    tokenizer = AutoTokenizer.from_pretrained(save_directory)

classifier = pipeline("sentiment-analysis", model=model, tokenizer=tokenizer)

# batch = tokenizer(X_train, padding=True, truncation=True, max_length=512, return_tensors="pt")
# print(batch)

# with torch.no_grad():
#     outputs = model( ** batch)
#     print (outputs)
#     predictions = F.softmax(outputs.logits, dim=1)
#     print (predictions)
#     labels = torch.argmax(predictions, dim=1)
#     print(labels)
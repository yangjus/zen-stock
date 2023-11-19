import requests
import json
from datetime import datetime, timedelta

# Gets list of objects in format of:
# date: string, title: string, content: string, link: string, symbols: string[]
# outputs content strings
# 512 tokens is around 2500 chars
def get_news():
    url = f'https://api.polygon.io/v2/reference/news'
    end_date = datetime.now()
    start_date = (end_date - timedelta(days=7)).strftime("%Y-%m-%d")
    end_date = end_date.strftime("%Y-%m-%d")
    parameters = {
        "published_tc.gte": start_date,
        "published_tc.lte": end_date,
        "limit": 1000,
        "apiKey": "2l9fU3gWdJnW7F6TlhRzVpKwm0NzzFJD"
    }

    results = requests.get(url, parameters).json()['results']
    # data_str = json.dumps(data, indent=2)
    articles = {}
    for i, result in enumerate(results):
        try:
            article = {
                "title": result['title'],
                "description": result['description'],
                "tickers": result['tickers']
            }
            articles[i] = article
        except KeyError:
            continue
    return articles
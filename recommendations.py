import pandas as pd

file_path = 'out.csv'

# Read the CSV file into a Pandas DataFrame
column_names = ['ticker', 'strategy', 'probability', 'mentions']
df = pd.read_csv(file_path, names=column_names)

positive_score = df[df['strategy'] == 'positive_prob']
invest = positive_score.nlargest(5, 'probability')

negative_score = df[df['strategy'] == 'negative_prob']
not_invest = negative_score.nlargest(5, 'probability')

neutral_score = df[df['strategy'] == 'neutral_prob']
if invest.shape[0] < 5:
    invest.append(neutral_score.nlargest(5-invest.shape[0],'probability'))
if not_invest.shape[0] < 5:
    not_invest.append(neutral_score.nlargest(5-not_invest.shape[0], 'probability'))

print(invest)
print(not_invest)
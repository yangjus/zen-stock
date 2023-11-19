from datasets import load_dataset, Features, Value
from transformers import Trainer, TrainingArguments
from transformers import AutoTokenizer, AutoModelForSequenceClassification
from transformers import DataCollatorForLanguageModeling
import numpy as np
from sklearn.metrics import accuracy_score

model_name = "mrm8488/distilroberta-finetuned-financial-news-sentiment-analysis"
trainer_data = "zeroshot/twitter-financial-news-sentiment"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name)


def tokenize_function(data):
    """Return tokenized data."""
    inputs = tokenizer(data["text"], padding="max_length", truncation=True)
    return inputs


def compute_metrics(eval_pred):
    """Compute metrics."""
    logits = eval_pred.predictions
    labels = eval_pred.label_ids
    predictions = np.argmax(logits, axis=-1)
    return {"accuracy": accuracy_score(y_true=labels, y_pred=predictions)}  


#Prepare and tokenize dataset
features = Features({
    'text': Value('string')
})
dataset = load_dataset(trainer_data, features=features)
tokenized_datasets = dataset.map(tokenize_function, batched=True)

training_args = TrainingArguments(
    output_dir="./output",
    evaluation_strategy="epoch",
)

data_collator = DataCollatorForLanguageModeling(
    tokenizer=tokenizer,
    mlm=False,  # Masked Language Modeling
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_datasets["train"],
    eval_dataset=tokenized_datasets["validation"],
    data_collator=data_collator,
    tokenizer=tokenizer,
    compute_metrics=compute_metrics
)

trainer.train()

#Save fine tuned model
model.save_pretrained("./fine_tuned_model")
tokenizer.save_pretrained("./fine_tuned_model")

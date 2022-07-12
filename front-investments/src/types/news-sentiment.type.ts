export interface NewsSentiment {
  title: string;
  url: string;
  time_published: string;
  authors: string[];
  summary: string;
  banner_image: string | null;
  source: string;
  source_domain: string;
  category_within_source: string;
  topics: Topics[];
  overall_sentiment_score: number;
  overall_sentiment_label: string;
  ticker_sentiment: TickerSentiment[];
}

interface Topics {
  topic: string;
  relevance_score: string;
}

interface TickerSentiment {
  ticker: string;
  relevance_score: string;
  ticker_sentiment_score: string;
  ticker_sentiment_label: string;
}

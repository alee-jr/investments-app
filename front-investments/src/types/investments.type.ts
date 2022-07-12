import { Daily } from "./daily.type";
import { NewsSentiment } from "./news-sentiment.type";

export interface Investments {
  daily: Daily[];
  newsSentiment: NewsSentiment[];
}

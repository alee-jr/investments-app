import PageTags from "../components/PageTags";
import { gql } from "@apollo/client";
import client from "../../apollo-client";

const pageTagsProps = {
  title: "Teste Front-End",
  description: "Teste técnico VELT",
};

export default function Home(investments: any) {
  const { daily, newsSentiment } = investments;

  return (
    <>
      <PageTags {...pageTagsProps} />
      <div></div>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Investments {
        daily(symbol: "GOOG", outputsize: "compact") {
          open
          high
          low
          close
          volume
          date
        }
        newsSentiment(tickers: "GOOG", topics: "technology") {
          title
          url
          time_published
          authors
          summary
          banner_image
          source
          source_domain
          category_within_source
          topics {
            topic
            relevance_score
          }
          overall_sentiment_score
          overall_sentiment_label
          ticker_sentiment {
            ticker
            relevance_score
            ticker_sentiment_score
            ticker_sentiment_label
          }
        }
      }
    `,
  });

  return {
    props: {
      ...data,
    },
  };
}

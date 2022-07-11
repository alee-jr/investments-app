import Head from "next/head";

type Props = {
  title?: string;
  description?: string;
};

const PageTags = ({ title, description }: Props) => {
  const pageTagsProps = {
    title: "Default title",
    description: "Default description",
  };

  return (
    <Head>
      <title>{title ?? pageTagsProps.title}</title>
      <meta name="robots" content="follow, index" />
      <meta
        name="description"
        content={description ?? pageTagsProps.description}
      />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta name="author" content="Alexandre Junior - github.com/alee-jr" />
      <meta property="og:site_name" content={title} />
    </Head>
  );
};

export default PageTags;

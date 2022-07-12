import PageTags from "../components/PageTags";
import PagesContent from "../components/PageContent";

const pageTagsProps = {
  title: "Teste Front-End",
  description: "Teste técnico VELT",
};

export default function Home() {
  return (
    <>
      <PageTags {...pageTagsProps} />
      <PagesContent />
    </>
  );
}

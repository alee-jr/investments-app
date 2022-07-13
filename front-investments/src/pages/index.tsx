import PageTags from "../components/PageTags";
import PagesContent from "../components/PageContent";
import Header from "../components/Header";

const pageTagsProps = {
  title: "Teste Front-End",
  description: "Teste técnico VELT",
};

export default function Home() {
  return (
    <>
      <PageTags {...pageTagsProps} />
      <Header />
      <PagesContent />
    </>
  );
}

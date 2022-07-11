import PageTags from "../components/PageTags";

const pageTagsProps = {
  title: "Teste Front-End",
  description: "Teste técnico VELT",
};

export default function Home() {
  return (
    <>
      <PageTags {...pageTagsProps} />
      <div></div>
    </>
  );
}

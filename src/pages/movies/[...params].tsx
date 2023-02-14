import Seo from "@/components/Seo";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

function Detail({ params }: { params: string[] }) {
  // SCR의 경우
  // const router = useRouter();
  // const [title, id] = (router.query.params as string[]) || [];
  const [title, id] = params;

  return (
    <>
      <Seo title={title} />
      <h4>{title}</h4>
    </>
  );
}

export default Detail;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: { params: ctx.params?.params },
  };
};

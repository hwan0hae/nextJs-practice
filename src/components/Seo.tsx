import Head from "next/head";
import { useRouter } from "next/router";

export default function Seo({ title }: { title: string }) {
  const titleMsg = `${title} | Next Movies `;
  return (
    <Head>
      <title>{titleMsg}</title>
    </Head>
  );
}

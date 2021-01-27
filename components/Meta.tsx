import Head from "next/head";

type Props = {
  title: string;
};

const Meta: React.FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="Description" content={""}></meta>
    </Head>
  );
};

// export async function getStaticProps() {
//     const siteData = await import(`../config.json`);

//     return {
//       props: {
//         title: siteData.default.title,
//         description: siteData.default.description,
//       },
//     };
//   }

export default Meta;

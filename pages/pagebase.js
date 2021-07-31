import Head from "next/head";
import Header from "../components/Header";

function PageBase({ children }) {
  return (
    <div>
      <Head>
        <title>Covid19 Tracker App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className="p-5">{children}</div>
      </main>
    </div>
  );
}

export default PageBase;

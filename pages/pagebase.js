import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

function PageBase({ children }) {
  return (
    <div>
      <Head>
        <title>Statistik Covid19 Indonesia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className="p-5">{children}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default PageBase;

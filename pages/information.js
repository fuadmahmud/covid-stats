import { firestore } from "../utils/firebase";
import Card from "../components/Card";

function Detail({ data }) {
  return (
    <div>
      <span className="font-bold text-3xl">Rangkuman Informasi Covid-19 di Indonesia</span>
      {data.map((item, index) => {
        return (
          <Card key={index}>
            <article className="flex flex-col">
              <strong className="font-bold text-xl my-4">{item.title}</strong>
              <img src={item.image} alt={item.title} />
              <span className="my-2">Diupdate pertanggal {item.date}</span>
              <span className="text-justify">{item.body}</span>
              <cite className="my-2 overflow-auto">
                <span>Sumber: {" "}</span>
                <a className="text-blue" href={item.source} target="_blank">{item.source}</a>
              </cite>
            </article>
          </Card>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const snapshot = await firestore.collection("news").get();
  const data = snapshot.docs.map(doc => doc.data());

  return { props: { data } }
}

export default Detail;

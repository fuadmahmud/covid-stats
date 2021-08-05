import Card from "../components/Card";

export default function Vaccination(props) {
  const { data } = props;
  const latestData = data?.monitoring?.[data.monitoring.length - 1];
  return (
    <div>
      <span className="font-bold mb-8">
        Status vaksinasi saat ini di Indonesia
      </span>
      <Card>
        <span></span>
      </Card>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://cekdiri.id/vaksinasi/");
  const data = await res.json();
  return { props: { data } };
}

import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";
import { formatNumber } from "../utils/helper";

export default function Vaccination({ data }) {
  const latestData = data?.monitoring?.[data.monitoring.length - 1];
  const cakupan = latestData.cakupan || {};

  return (
    <div className="flex flex-col">
      <span className="font-bold mb-8 text-3xl">
        Status vaksinasi saat ini di Indonesia
      </span>
      <span className="my-4">
        Status diperbaharui pertanggal {latestData.date}
      </span>
      <Card>
        <span className="font-bold text-lg my-4">Sasaran Vaksinasi</span>
        <div className="bg-purple-400 p-4 rounded-lg text-white flex flex-col mb-4">
          <span className="font-bold">Total Sasaran Vaksinasi</span>
          <span>{formatNumber(latestData.total_sasaran_vaksinasi)}</span>
        </div>
        <div className="bg-purple-400 p-4 rounded-lg text-white flex flex-col mb-4">
          <span className="font-bold">Total Vaksinasi Pertama</span>
          <span>{formatNumber(latestData.vaksinasi1)}</span>
        </div>
        <div className="bg-purple-400 p-4 rounded-lg text-white flex flex-col mb-4">
          <span className="font-bold">Total Vaksinasi Kedua</span>
          <span>{formatNumber(latestData.vaksinasi2)}</span>
        </div>
      </Card>
      <Card>
        <span className="font-bold text-lg my-4">Cakupan Persentase</span>
        {Object.keys(cakupan).map((key, index) => (
          <ProgressBar key={index} data={cakupan[key]} title={key} />
        ))}
      </Card>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://cekdiri.id/vaksinasi/");
  const data = await res.json();
  return { props: { data } };
}

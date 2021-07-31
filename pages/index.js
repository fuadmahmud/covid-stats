import React from "react";
import Card from "../components/Card";
import { formatNumber, parseValue } from "../utils/helper";
import dynamic from "next/dynamic";

const PieChart = dynamic(() => import("../components/Pie"), { ssr: false });
const BarChart = dynamic(() => import("../components/Bar"), { ssr: false });

export default function Home(props) {
  const { data, provinceData } = props;
  const stats = data?.[0];
  const pieData = [
    { name: "confirmed", value: parseValue(stats.positif) || 0 },
    { name: "hospitalized", value: parseValue(stats.dirawat) || 0 },
    { name: "recovered", value: parseValue(stats.sembuh) || 0 },
    { name: "deaths", value: parseValue(stats.meninggal) || 0 },
  ];
  const barData = provinceData?.map((item) => {
    const { attributes } = item;
    const newData = {
      Provinsi: attributes.Provinsi,
      "Kasus Positif": attributes.Kasus_Posi,
      "Kasus Sembuh": attributes.Kasus_Semb,
      "Kasus Meninggal": attributes.Kasus_Meni,
    };

    return newData;
  });
  return (
    <div>
      <Card>
        <span className="font-bold">Total Kasus di Indonesia</span>
        <div className="flex justify-between items-center">
          <PieChart data={pieData} />
          <div>
            <div className="flex flex-col my-3">
              <span>{formatNumber(stats.positif)}</span>
              <span className="text-primary font-bold">Positif</span>
            </div>
            <div className="flex flex-col my-3">
              <span>{formatNumber(stats.dirawat)}</span>
              <span className="text-purple-200 font-bold">Dirawat</span>
            </div>
            <div className="flex flex-col my-3">
              <span>{formatNumber(stats.sembuh)}</span>
              <span className="text-purple-100 font-bold">Sembuh</span>
            </div>
            <div className="flex flex-col my-3">
              <span>{formatNumber(stats.meninggal)}</span>
              <span className="font-bold">Meninggal</span>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <span className="font-bold mb-3">Total Kasus Per-Provinsi</span>
        <BarChart data={barData} />
      </Card>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.kawalcorona.com/indonesia");
  const data = await res.json();
  const resProvince = await fetch(
    "https://api.kawalcorona.com/indonesia/provinsi"
  );
  const provinceData = await resProvince.json();

  return { props: { data, provinceData } };
}

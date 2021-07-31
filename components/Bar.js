import {
  BarChart,
  Bar as BarRC,
  CartesianGrid,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export default function Bar({ data }) {
  return (
    <ResponsiveContainer height="100%" aspect={2}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Provinsi" />
        <YAxis />
        <Tooltip />
        <Legend />
        <BarRC dataKey="Kasus Positif" fill="#855CF8" />
        <BarRC dataKey="Kasus Sembuh" fill="#E289F2" />
        <BarRC dataKey="Kasus Meninggal" fill="#263238" />
      </BarChart>
    </ResponsiveContainer>
  );
}

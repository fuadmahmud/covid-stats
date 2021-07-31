import { PieChart, Pie as PieRC, Cell } from "recharts";

export default function Pie({ data }) {
  return (
    <PieChart width={200} height={200}>
      <PieRC
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
      >
        {data.map((item, index) => {
          const color =
            item.name === "confirmed"
              ? "#855CF8"
              : item.name === "recovered"
              ? "#E289F2"
              : item.name === "deaths"
              ? "#263238"
              : "#513795";

          return <Cell fill={color} key={`cell-${index}`} />;
        })}
      </PieRC>
    </PieChart>
  );
}

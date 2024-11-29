import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const MyComposedChart = ({ data }) => {
  return (
    <div className="bg-white p-10 rounded-2xl">
      <ComposedChart
        width={1024}
        height={600}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="product_title" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="price" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="price" stroke="#ff7300" />
        <Scatter dataKey="rating" fill="red" />
      </ComposedChart>
    </div>
  );
};

export default MyComposedChart;

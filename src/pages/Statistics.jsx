import { useContext } from "react";
import MyComposedChart from "../components/MyComposedChart";
import PageTitle from "../components/PageTitle";
import { DataContext } from "../providers/DataProvider";

const Statistics = () => {
  const { products } = useContext(DataContext);
  const data = [
    {
      name: "Page A",
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490,
    },
    {
      name: "Page B",
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590,
    },
    {
      name: "Page C",
      uv: 1397,
      pv: 1098,
      amt: 989,
      cnt: 350,
    },
    {
      name: "Page D",
      uv: 1480,
      pv: 1200,
      amt: 1228,
      cnt: 480,
    },
    {
      name: "Page E",
      uv: 1520,
      pv: 1108,
      amt: 1100,
      cnt: 460,
    },
    {
      name: "Page F",
      uv: 1400,
      pv: 680,
      amt: 1700,
      cnt: 380,
    },
  ];
  return (
    <div>
      <PageTitle
        title={"Statistics"}
        subTitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      />
      <div>
        <div className="container mx-auto py-10">
          <h2 className="text-2xl font-bold">Statistics</h2>
          <div>
            <MyComposedChart data={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

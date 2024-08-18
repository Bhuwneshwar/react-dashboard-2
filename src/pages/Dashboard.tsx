import React from "react";
import AdminSideBar from "../components/AdminSideBar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/user.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { categories, transaction } from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import Table from "../components/DashboardTable";

const Dashboard = () => {
  return (
    <div className="admin-container">
      <AdminSideBar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder=" Search for data, users, docs " />
          <FaRegBell />
          <img src={userImg} alt="user img" />
        </div>

        <section className="widget-container">
          <WidgetItem
            color="pink"
            heading="Revenue"
            percent={70}
            value="450000"
            amount={true}
          />
          <WidgetItem
            color="rgb(0,198,202)"
            heading="User"
            percent={-14}
            value="400"
            amount={false}
          />
          <WidgetItem
            color="rgb(255,196,0)"
            heading="Transaction"
            percent={80}
            value="23000"
          />
          <WidgetItem
            color="blue"
            heading="Product"
            percent={40}
            value="450000"
          />
        </section>

        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
            {/* Graph here */}
            <BarChart
              data1={[300, 878, 546, 869, 979, 87, 790]}
              data2={[579, 246, 446, 457, 876, 245, 867]}
              bgColor_1="rgba(0, 115, 255,1)"
              bgColor_2="rgba(56,162,235,0.8)"
              title_1="Revenue"
              title_2="Transaction"
            />
          </div>
          <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div>
              {categories.map((category) => {
                // console.log(`hsl(${category.value}), ${category.value}%,50%)`);

                return (
                  <CategotyItem
                    key={category.heading}
                    color={`hsl(${category.value}, ${category.value}%,50%)`}
                    heading={category.heading}
                    value={category.value}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section className="transaction-container">
          <div className="gender-chart">
            <h2>Gender Ratio</h2>
            {/* Graph here */}
            <DoughnutChart
              labels={["Female", "Male"]}
              data={[12, 19]}
              cutout={90}
              backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
            />

            <p>
              <BiMaleFemale />
            </p>
          </div>
          {/* table */}

          <Table data={transaction} />
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: string;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  color,
  heading,
  percent,
  value,
  amount,
}: WidgetItemProps) => {
  return (
    <article className="widget">
      <div className="widgetInfo">
        <p>{heading}</p>
        <h4>{amount ? `$${value}` : value}</h4>
        {percent > 0 ? (
          <span className="green">
            <HiTrendingUp />+{percent}%
          </span>
        ) : (
          <span className="red">
            <HiTrendingDown />
            {percent}%
          </span>
        )}
      </div>
      <div
        style={{
          background: `conic-gradient(
          ${color} ${(Math.abs(percent) / 100) * 360}deg, rgba(0, 0, 0,0.05) 0
        )`,
        }}
        className="widgetCircle"
      >
        <span style={{ color }}>{percent}%</span>
      </div>
    </article>
  );
};

interface CategotyItemProps {
  color: string;
  value: number;
  heading: string;
}
const CategotyItem = ({ color, heading, value }: CategotyItemProps) => {
  return (
    <div className="category-item">
      <h5>{heading} </h5>
      <div>
        <div style={{ backgroundColor: color, width: `${value}%` }}></div>
      </div>
      <span>{value}%</span>
    </div>
  );
};

export default Dashboard;

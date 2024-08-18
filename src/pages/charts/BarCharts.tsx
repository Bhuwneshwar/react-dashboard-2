import React from "react";
import AdminSideBar from "../../components/AdminSideBar";
import { BarChart } from "../../components/Charts";

const BarCharts = () => {
  // months name of array

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="admin-container">
      <AdminSideBar />
      <main className="chart-container">
        <h1>Bar Charts</h1>
        <section>
          <BarChart
            data1={[578, 887, 100, 100, 868, 468, 989]}
            data2={[567, 875, 975, 346, 865, 152, 554]}
            title_1="Products"
            title_2="Users"
            bgColor_1="hsl(260,50%,30%)"
            bgColor_2="hsl(360,90%,90%)"
          />

          <h2>TOP SELLING PRODUCTS & TOP CUSTOMERS</h2>
        </section>
        <section>
          <BarChart
            horizontal={true}
            data1={[578, 887, 100, 100, 868, 468, 989, 789, 986, 986, 345]}
            data2={[]}
            title_1="Products"
            title_2=""
            bgColor_1="hsl(180,40%,50%)"
            bgColor_2=""
            labels={months}
          />

          <h2>Orders throughout the year</h2>
        </section>
      </main>
    </div>
  );
};

export default BarCharts;

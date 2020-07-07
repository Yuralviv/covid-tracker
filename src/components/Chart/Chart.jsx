import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
const Chart = () => {
  const [dailyData, setDailydata] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailydata(await fetchDailyData());
    };
    fetchAPI();
  });

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          // {
          //   data: dailyData.map((data) => data.recovered),
          //   label: "recovered",
          //   borderColor: "rgba(0, 255, 0, 0.5)",
          //   backgroundColor: "rgba(0, 255, 0, 0.5)",
          //   fill: true,
          // },
          {
            data: dailyData.map((data) => data.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;

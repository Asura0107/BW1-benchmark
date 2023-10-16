const charData = {
  //   labels: ["correct", "wrong"],
  data: [70, 30]
};

const myChart = document.querySelector(".my-chart");
// const doughnutLabel = {
//   id: "doughnutLabel",
//   beforeDatasetsDraw(chart, args, pluginOptions) {
//     const { ctx, data } = chart;

//     ctx.save();
//     const xCoor = chart.getDatasetMeta(0).data[0].x;
//     const yCoor = chart.getDatasetMeta(0).data[0].y;
//     ctx.font = "bold 30px sans-serif ";
//     ctx.fillStyle = "rgba(54,162,235,1)";
//     ctx.fillText("text", xCorr, yCoor);
//   }
// };
new Chart(myChart, {
  type: "doughnut",

  data: {
    labels: charData.labels,
    // plugins: [doughnutLabel],
    datasets: [
      {
        label: "correct",
        data: charData.data
      }
    ]
  }
  //   option: {
  //     borderWidth: 10,
  //     borderRadius: 2,
  //     hoverBorderWidth: 0,
  //     plugins: {
  //       legend: {
  //         display: false
  //       }
  //     }
  //   }
});

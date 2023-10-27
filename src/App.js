import React from "react"
import ReactECharts from "echarts-for-react"

const option = {
  color: ["#8F07CF", "#E8B8FA"],
  xAxis: [
    {
      type: "value",
      interval: 3 // Цена деления по оси X равна 3
    }
  ],
  yAxis: [
    {
      type: "value",
      interval: 250 // Цена деления по оси Y равна 250
    }
  ],
  title: {
    text: "Количество входящих, выходящих",
    subtext: "чел"
  },
  legend: {
    type: "plain",
    show: true
  },
  series: [
    {
      type: "line",
      data: generateData(9, 1000), // Генерируем 9 значений в диапазоне от 0 до 1000
      symbolSize: 10,
      itemStyle: {
        borderType: "solid",
        borderColor: "#fff",
        borderWidth: 10
      },
      lineStyle: {
        width: 4,
        border: "10px solid red",
        shadowBlur: 10, // Shadow blur for the white border
        shadowColor: "white" // White color for the border
      }
    },
    {
      type: "bar",
      data: generateData(9, 1000), // Генерируем 9 значений в диапазоне от 0 до 1000
      itemStyle: {
        color: "#E8B8FA"
      },
      label: {
        show: true,
        position: "insideTop",
        color: "black",
        align: "center"
      }
    }
  ]
}

function generateData(count, max) {
  const data = []
  for (let i = 0; i < count; i++) {
    const x = i * 3
    const y = Math.floor(Math.random() * (max + 1))
    const value = Math.floor(Math.random() * (max + 1))
    data.push([x, y, value])
  }
  return data
}

const App = () => {
  return (
    <div>
      <ReactECharts
        option={option}
        style={{ height: "400px", width: "500px" }}
      />
    </div>
  )
}

export default App

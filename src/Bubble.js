import React from "react"
import ReactECharts from "echarts-for-react"
import * as echarts from "echarts"
import { graphic } from "echarts"

const DiamondSymbolPath =
  "path://M 93 29 C 102 20.3333 104 20.6667 111 28 C 134 52 157 76 173 92 C 182 100 177.3333 105.3333 173 110 L 110 173 C 103 180 100 185 92 176 L 27 103 C 22.3333 95.6667 24.6667 91.3333 32 85 Z"

const formatData = (data, from, to) => {
  return data.map((item) => {
    const [x, y, value] = item
    return {
      value: [x, y, value],
      label: {
        show: true,
        fontSize: 12,
        formatter: value.toString(),
        color: "#262626",
        fontWeight: "700"
      },
      itemStyle: {
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: from
          },
          {
            offset: 1,
            color: to
          }
        ])
      }
    }
  })
}

const option = {
  xAxis: [
    {
      type: "value",
      interval: 3 // Вертикальное деление каждые 250
    }
  ],
  yAxis: [
    {
      type: "value",
      interval: 250 // Горизонтальное деление каждые 3
    }
  ],
  series: [
    // Первая серия Scatter Chart с градиентом #C86FEC
    {
      type: "scatter",
      symbolSize: 50,
      symbol: DiamondSymbolPath,
      data: formatData(generateData(), "#E8B8FA", "#FFF")
    },
    // Вторая серия Scatter Chart с градиентом #E8B8FA
    {
      type: "scatter",
      symbolSize: 50,
      symbol: DiamondSymbolPath,
      data: formatData(generateData(), "#C86FEC", "#FFF")
    }
  ]
}

function generateData(gradientColor) {
  const data = []
  for (let i = 0; i < 10; i++) {
    // Генерируем случайные координаты X и Y
    const x = Math.random() * 1000
    const y = Math.random() * 24
    const value = Math.floor(Math.random() * 1001) // случайное число от 0 до 1000
    data.push([y, x, value])
  }
  return data
}

export const Bubble = () => {
  return (
    <div>
      <ReactECharts
        option={option}
        style={{ height: "400px", width: "400px" }}
      />
    </div>
  )
}

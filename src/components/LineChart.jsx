import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockLineData as data } from "../data/mockData";

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Custom Y-axis tick formatter
  const formatYAxis = (value) => {
    if (value >= 1000000) return `${(value/1000000).toFixed(0)}M`;
    if (value >= 1000) return `${(value/1000).toFixed(0)}K`;
    return value;
  };

  // Calculate appropriate tick values based on data range
  const getYTickValues = (data) => {
    const maxValue = Math.max(...data.flatMap(series => 
      series.data.map(item => item.y)
    ));
    const interval = maxValue <= 100000 ? 20000 : 
                    maxValue <= 300000 ? 50000 : 
                    100000;
    const tickValues = [];
    for (let i = 0; i <= maxValue + interval; i += interval) {
      tickValues.push(i);
    }
    return tickValues;
  };

  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
              fontSize: 11,
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            background: colors.primary[400],
            color: colors.grey[100],
            fontSize: 12,
            borderRadius: "4px",
            boxShadow: theme.shadows[2],
          },
        },
      }}
      colors={isCustomLineColors ? { datum: "color" } : { scheme: "nivo" }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: 0,
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat={(value) =>
        new Intl.NumberFormat("en-KE", {
          style: "currency",
          currency: "KES",
          minimumFractionDigits: 0,
        }).format(value)
      }
      curve="monotoneX"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Month",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        tickValues: getYTickValues(data), // Custom tick values
        format: formatYAxis, // Simplified formatting
        legend: isDashboard ? undefined : "Revenue (KES)",
        legendOffset: -50,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={true}
      gridYValues={getYTickValues(data)} // Align grid with ticks
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      tooltip={({ point }) => (
        <div
          style={{
            background: colors.primary[400],
            padding: "8px 12px",
            border: `1px solid ${colors.grey[100]}`,
            borderRadius: "4px",
            boxShadow: theme.shadows[3],
          }}
        >
          <strong>{point.serieId}</strong>
          <br />
          {point.data.x}:{" "}
          {new Intl.NumberFormat("en-KE", {
            style: "currency",
            currency: "KES",
            minimumFractionDigits: 0,
          }).format(point.data.y)}
        </div>
      )}
    />
  );
};

export default LineChart;
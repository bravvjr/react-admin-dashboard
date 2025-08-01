import { Box, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../../theme";

// import Header from "../../components/Header";
// import PieChart from "../../components/PieChart";

const Pie = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      gridColumn="span 4"
      gridRow="span 2"
      backgroundColor={colors.primary[400]}
      p="30px"
      borderRadius="8px"
    >
      <Typography
        variant="h5"
        fontWeight="600"
        sx={{ color: colors.grey[100] }}
      >
        Sales by Category
      </Typography>
      <Box height="800px">
        <ResponsivePie
          data={[
            {
              id: "Gaming",
              label: "Gaming Laptops",
              value: 35,
              color: "hsl(12, 70%, 50%)",
            },
            {
              id: "Office",
              label: "Office/Work",
              value: 25,
              color: "hsl(229, 70%, 50%)",
            },
            {
              id: "Student",
              label: "Student Laptops",
              value: 20,
              color: "hsl(340, 70%, 50%)",
            },
            {
              id: "Content",
              label: "Content Creation",
              value: 15,
              color: "hsl(97, 70%, 50%)",
            },
            {
              id: "Budget",
              label: "Budget Models",
              value: 5,
              color: "hsl(296, 70%, 50%)",
            },
          ]}
          theme={{
            tooltip: {
              container: {
                background: colors.primary[500],
                color: colors.grey[100],
                fontSize: 12,
              },
            },
            legends: {
              text: {
                fill: colors.grey[100],
              },
            },
          }}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.45}
          padAngle={1}
          cornerRadius={5}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={colors.grey[100]}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 60,
              itemsSpacing: 10,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: colors.grey[100],
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: colors.greenAccent[500],
                  },
                },
              ],
            },
          ]}
          tooltip={({ datum }) => (
            <Box
              sx={{
                background: colors.primary[500],
                padding: "8px 12px",
                borderRadius: "4px",
                boxShadow: theme.shadows[3],
              }}
            >
              <strong>{datum.label}</strong>
              <br />
              {datum.value}% of total sales
              <br />
              KES {Math.round(datum.value * 25000).toLocaleString()} revenue
            </Box>
          )}
        />
      </Box>
    </Box>
  );
};

export default Pie;

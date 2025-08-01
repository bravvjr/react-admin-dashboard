import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { ResponsivePie } from "@nivo/pie";

// import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import EmailIcon from "@mui/icons-material/Email";
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import TrafficIcon from "@mui/icons-material/Traffic";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import MemoryIcon from "@mui/icons-material/Memory";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BuildIcon from "@mui/icons-material/Build";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
// import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
// import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
        >
          <StatBox
            title="24"
            subtitle="Low Stock Items"
            progress="0.65"
            increase="+8% this month"
            icon={
              <Inventory2Icon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
        >
          <StatBox
            title="42"
            subtitle="8GB RAM Sticks"
            progress="0.40"
            increase="+15% restocked"
            icon={
              <MemoryIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
        >
          <StatBox
            title="KES 1.2M"
            subtitle="Monthly Revenue"
            progress="0.75"
            increase="+22% from last month"
            icon={
              <AttachMoneyIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="8px"
        >
          <StatBox
            title="87"
            subtitle="Refurbished Units"
            progress="0.55"
            increase="+12% this quarter"
            icon={
              <BuildIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Profit by Brand
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                KES 280,000
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          borderRadius="4px"
          boxShadow={theme.shadows[2]}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {[
            {
              txId: "TX-KE-78901",
              user: "Wanjiku Mwangi",
              date: "15 Jul 2023",
              cost: 24500,
              product: "HP EliteBook",
            },
            {
              txId: "TX-KE-78902",
              user: "Kamau Otieno",
              date: "14 Jul 2023",
              cost: 187000,
              product: "MacBook Pro M2",
            },
            {
              txId: "TX-KE-78903",
              user: "Amina Hassan",
              date: "14 Jul 2023",
              cost: 62500,
              product: "Dell XPS 13",
            },
            {
              txId: "TX-KE-78904",
              user: "Juma Wanyama",
              date: "13 Jul 2023",
              cost: 42000,
              product: "Lenovo ThinkPad",
            },
            {
              txId: "TX-KE-78905",
              user: "Nyambura Kariuki",
              date: "12 Jul 2023",
              cost: 83500,
              product: "Asus ZenBook",
            },
            {
              txId: "TX-KE-78906",
              user: "Omondi Okoth",
              date: "11 Jul 2023",
              cost: 112000,
              product: "HP Spectre x360",
            },
          ].map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`1px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box width="30%">
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                  fontSize="0.9rem"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]} fontSize="0.8rem">
                  {transaction.user}
                </Typography>
              </Box>
              <Box width="30%" color={colors.grey[100]} fontSize="0.8rem">
                {transaction.product}
              </Box>
              <Box width="20%" color={colors.grey[100]} fontSize="0.8rem">
                {transaction.date}
              </Box>
              <Box
                width="20%"
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
                textAlign="center"
                fontSize="0.9rem"
                fontWeight="600"
              >
                {new Intl.NumberFormat("en-KE", {
                  style: "currency",
                  currency: "KES",
                  minimumFractionDigits: 0,
                }).format(transaction.cost)}
              </Box>
            </Box>
          ))}
        </Box>
        {/* ROW 3 */}
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
          <Box height="230px">
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
        </Box>{" "}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          {/* <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

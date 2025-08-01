import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
// import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "Invoice ID", width: 100 },
    {
      field: "customerName",
      headerName: "Customer Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "items",
      headerName: "Items Purchased",
      flex: 1,
      renderCell: (params) => (
        <Typography>
          {params.row.items.join(", ")}
        </Typography>
      ),
    },
    {
      field: "total",
      headerName: "Total (KSh)",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          KSh {params.row.total.toLocaleString()}
        </Typography>
      ),
    },
    {
      field: "paymentStatus",
      headerName: "Payment Status",
      flex: 1,
      renderCell: (params) => (
        <Typography color={params.row.paymentStatus === "Paid" ? colors.greenAccent[400] : "#f44336"}>
          {params.row.paymentStatus}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
<Box
  m="40px 0 0 0"
  height="75vh"
  sx={{
    "& .MuiDataGrid-root": {
      border: "none",
    },
    "& .MuiDataGrid-cell": {
      borderBottom: "none",
    },
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: colors.blueAccent[700],
      borderBottom: "none",
    },
    "& .MuiDataGrid-virtualScroller": {
      backgroundColor: colors.primary[400],
    },
    "& .MuiDataGrid-footerContainer": {
      borderTop: "none",
      backgroundColor: colors.blueAccent[700],
    },
    "& .MuiCheckbox-root": {
      color: `${colors.greenAccent[200]} !important`,
    },
    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
      color: `${colors.grey[100]} !important`,
    },
  }}
>
  <DataGrid
    checkboxSelection
    rows={mockDataInvoices}
    columns={columns}
    components={{ Toolbar: GridToolbar }}
    componentsProps={{
      toolbar: {
        showQuickFilter: true,
        quickFilterProps: { debounceMs: 500 },
      },
    }}
  />
</Box>  );
};

export default Invoices;

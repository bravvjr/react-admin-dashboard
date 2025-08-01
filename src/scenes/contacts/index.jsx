// suppliers.jsx
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataSuppliers } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Suppliers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "supplierCode", headerName: "Supplier Code", flex: 1 },
    {
      field: "name",
      headerName: "Supplier Name",
      flex: 1.5,
      cellClassName: "name-column--cell",
    },
    {
      field: "type",
      headerName: "Type",
      flex: 1,
      renderCell: (params) => (
        <Box
          sx={{
            p: "5px 10px",
            borderRadius: "4px",
            backgroundColor:
              params.value === "Local"
                ? colors.greenAccent[600] + "40" // 40% opacity
                : colors.blueAccent[600] + "40",
            color:
              params.value === "Local"
                ? colors.greenAccent[500]
                : colors.blueAccent[500],
          }}
        >
          {params.value}
        </Box>
      ),
    },
    {
      field: "contactPerson",
      headerName: "Contact Person",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1.5,
    },
    {
      field: "leadTime",
      headerName: "Lead Time",
      flex: 1,
      valueFormatter: (params) => `${params.value} days`,
    },
    {
      field: "rating",
      headerName: "Rating",
      flex: 1,
      type: "number",
      renderCell: (params) => (
        <Box sx={{ color: colors.greenAccent[500] }}>
          {params.value}/5
        </Box>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="SUPPLIERS"
        subtitle="List of Our Trusted Suppliers"
      />
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
          "& .name-column--cell": {
            color: colors.greenAccent[300],
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
          rows={mockDataSuppliers}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Suppliers;
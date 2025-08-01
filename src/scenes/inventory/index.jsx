import { Box, Button, IconButton, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useState } from "react";
import { mockLaptops as initialData } from "../../data/mockData";

const LaptopInventory = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [laptops, setLaptops] = useState(initialData);
  const [selectionModel, setSelectionModel] = useState([]);

  const handleDeleteSelected = () => {
    const updatedRows = laptops.filter((row) => !selectionModel.includes(row.id));
    setLaptops(updatedRows);
  };


 const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "brand", headerName: "Brand", flex: 1 },
    { field: "model", headerName: "Model", flex: 1.5 },
    { field: "quantity", headerName: "Qty", type: "number", flex: 1 },
    { field: "condition", headerName: "Condition", flex: 1 },
    { field: "processor", headerName: "CPU", flex: 1.5 },
    { field: "ram", headerName: "RAM", flex: 1 },
    { field: "storage", headerName: "Storage", flex: 1 },
    { field: "gpu", headerName: "GPU", flex: 1.5 },
    { field: "screenSize", headerName: "Screen", flex: 1 },
    {
      field: "price",
      headerName: "Price (Kshs)",
      type: "number",
      flex: 1,
      valueFormatter: (params) => `${params.value.toLocaleString()}`,
    },
    { field: "hasBattery", headerName: "Battery", flex: 0.8 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.8,
      renderCell: (params) => (
        <IconButton
          color="error"
          onClick={() => {
            setLaptops((prev) => prev.filter((row) => row.id !== params.id));
          }}
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="LAPTOP INVENTORY" subtitle="Manage Your Laptop Stock" />

      <Box display="flex" justifyContent="flex-end" mb={1}>
        <Button
          variant="contained"
          color="error"
          onClick={handleDeleteSelected}
          disabled={selectionModel.length === 0}
        >
          Delete Selected
        </Button>
      </Box>

      <Box
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
          rows={laptops}
          columns={columns}
          checkboxSelection
          onRowSelectionModelChange={(newSelection) => {
            setSelectionModel(newSelection);
          }}
          selectionModel={selectionModel}
          components={{ Toolbar: GridToolbar }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default LaptopInventory;

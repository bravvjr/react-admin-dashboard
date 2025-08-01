import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const LaptopInventory = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Mock data - replace with your actual data
 const mockLaptops = [
  {
    id: 1,
    brand: "Dell",
    model: "XPS 15",
    quantity: 5,
    condition: "New",
    processor: "i7 11th Gen",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "NVIDIA RTX 3050",
    screenSize: "15.6",
    resolution: "1920x1080",
    price: 169900,
    hasBattery: "Yes"
  },
  {
    id: 2,
    brand: "HP",
    model: "Spectre x360",
    quantity: 3,
    condition: "Refurbished",
    processor: "i5 10th Gen",
    ram: "8GB",
    storage: "256GB SSD",
    gpu: "Intel Iris Xe",
    screenSize: "13.5",
    resolution: "3000x2000",
    price: 109900,
    hasBattery: "Yes"
  },
  {
    id: 3,
    brand: "Lenovo",
    model: "Legion 5",
    quantity: 4,
    condition: "New",
    processor: "Ryzen 7 5800H",
    ram: "16GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 3060",
    screenSize: "15.6",
    resolution: "1920x1080",
    price: 179999,
    hasBattery: "Yes"
  },
  {
    id: 4,
    brand: "Acer",
    model: "Aspire 5",
    quantity: 6,
    condition: "Used",
    processor: "i5 8th Gen",
    ram: "8GB",
    storage: "256GB SSD",
    gpu: "Intel UHD",
    screenSize: "15.6",
    resolution: "1920x1080",
    price: 48999,
    hasBattery: "No"
  },
  {
    id: 5,
    brand: "Asus",
    model: "ROG Zephyrus G14",
    quantity: 2,
    condition: "New",
    processor: "Ryzen 9 6900HS",
    ram: "32GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 3070 Ti",
    screenSize: "14.0",
    resolution: "2560x1440",
    price: 239999,
    hasBattery: "Yes"
  },
  {
    id: 6,
    brand: "HP",
    model: "Pavilion 14",
    quantity: 7,
    condition: "Refurbished",
    processor: "i5 11th Gen",
    ram: "8GB",
    storage: "512GB SSD",
    gpu: "Intel Iris Xe",
    screenSize: "14.0",
    resolution: "1920x1080",
    price: 74999,
    hasBattery: "Yes"
  },
  {
    id: 7,
    brand: "Apple",
    model: "MacBook Air M1",
    quantity: 4,
    condition: "New",
    processor: "Apple M1",
    ram: "8GB",
    storage: "256GB SSD",
    gpu: "Integrated",
    screenSize: "13.3",
    resolution: "2560x1600",
    price: 124999,
    hasBattery: "Yes"
  },
  {
    id: 8,
    brand: "Dell",
    model: "Inspiron 15",
    quantity: 5,
    condition: "Used",
    processor: "i3 10th Gen",
    ram: "4GB",
    storage: "1TB HDD",
    gpu: "Intel UHD",
    screenSize: "15.6",
    resolution: "1366x768",
    price: 39999,
    hasBattery: "Yes"
  },
  {
    id: 9,
    brand: "MSI",
    model: "Katana GF66",
    quantity: 3,
    condition: "New",
    processor: "i7 12th Gen",
    ram: "16GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 3060",
    screenSize: "15.6",
    resolution: "1920x1080",
    price: 189999,
    hasBattery: "Yes"
  },
  {
    id: 10,
    brand: "Lenovo",
    model: "ThinkPad X1 Carbon",
    quantity: 2,
    condition: "Refurbished",
    processor: "i7 10th Gen",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "Intel UHD",
    screenSize: "14.0",
    resolution: "1920x1080",
    price: 99999,
    hasBattery: "No"
  },
  {
    id: 11,
    brand: "Asus",
    model: "VivoBook 15",
    quantity: 5,
    condition: "Used",
    processor: "Ryzen 5 3500U",
    ram: "8GB",
    storage: "256GB SSD",
    gpu: "Radeon Vega 8",
    screenSize: "15.6",
    resolution: "1920x1080",
    price: 57999,
    hasBattery: "No"
  },
  {
    id: 12,
    brand: "HP",
    model: "Omen 16",
    quantity: 2,
    condition: "New",
    processor: "i7 12th Gen",
    ram: "32GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 3070",
    screenSize: "16.1",
    resolution: "2560x1440",
    price: 229999,
    hasBattery: "Yes"
  },
  {
    id: 13,
    brand: "Acer",
    model: "Predator Helios 300",
    quantity: 3,
    condition: "New",
    processor: "i7 11th Gen",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "NVIDIA RTX 3060",
    screenSize: "15.6",
    resolution: "1920x1080",
    price: 174999,
    hasBattery: "Yes"
  },
  {
    id: 14,
    brand: "Microsoft",
    model: "Surface Laptop 4",
    quantity: 2,
    condition: "Refurbished",
    processor: "Ryzen 5 4680U",
    ram: "8GB",
    storage: "256GB SSD",
    gpu: "Integrated",
    screenSize: "13.5",
    resolution: "2256x1504",
    price: 89999,
    hasBattery: "No"
  },
  {
    id: 15,
    brand: "Dell",
    model: "G15 5520",
    quantity: 4,
    condition: "New",
    processor: "i5 12th Gen",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "NVIDIA RTX 3050",
    screenSize: "15.6",
    resolution: "1920x1080",
    price: 149999,
    hasBattery: "Yes"
  },
  {
    id: 16,
    brand: "Lenovo",
    model: "IdeaPad 3",
    quantity: 6,
    condition: "Used",
    processor: "i3 10th Gen",
    ram: "4GB",
    storage: "1TB HDD",
    gpu: "Intel UHD",
    screenSize: "15.6",
    resolution: "1366x768",
    price: 39999,
    hasBattery: "Yes"
  },
  {
    id: 17,
    brand: "HP",
    model: "Envy 13",
    quantity: 3,
    condition: "New",
    processor: "i7 11th Gen",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "Intel Iris Xe",
    screenSize: "13.3",
    resolution: "1920x1080",
    price: 114999,
    hasBattery: "Yes"
  },
  {
    id: 18,
    brand: "Apple",
    model: "MacBook Pro M2",
    quantity: 2,
    condition: "New",
    processor: "Apple M2",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "Integrated",
    screenSize: "13.6",
    resolution: "2560x1664",
    price: 229999,
    hasBattery: "Yes"
  },
  {
    id: 19,
    brand: "MSI",
    model: "GF63 Thin",
    quantity: 4,
    condition: "Refurbished",
    processor: "i5 10th Gen",
    ram: "8GB",
    storage: "512GB SSD",
    gpu: "NVIDIA GTX 1650",
    screenSize: "15.6",
    resolution: "1920x1080",
    price: 99999,
    hasBattery: "Yes"
  },
  {
    id: 20,
    brand: "Asus",
    model: "TUF Gaming F15",
    quantity: 3,
    condition: "New",
    processor: "i7 12th Gen",
    ram: "16GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 3060",
    screenSize: "15.6",
    resolution: "1920x1080",
    price: 184999,
    hasBattery: "Yes"
  },
  {
    id: 21,
    brand: "Acer",
    model: "Swift 3",
    quantity: 5,
    condition: "New",
    processor: "Ryzen 5 5500U",
    ram: "8GB",
    storage: "512GB SSD",
    gpu: "Radeon Graphics",
    screenSize: "14.0",
    resolution: "1920x1080",
    price: 77999,
    hasBattery: "Yes"
  },
  {
    id: 22,
    brand: "Lenovo",
    model: "Yoga 7i",
    quantity: 2,
    condition: "Refurbished",
    processor: "i7 11th Gen",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "Intel Iris Xe",
    screenSize: "14.0",
    resolution: "1920x1080",
    price: 104999,
    hasBattery: "Yes"
  }
];


  const columns = [
    { 
      field: "id", 
      headerName: "ID", 
      flex: 0.5,
      filterable: false 
    },
    { 
      field: "brand", 
      headerName: "Brand", 
      flex: 1,
      filterOperators: [
        {
          label: "Contains",
          value: "contains",
          InputComponent: ({ applyValue, item }) => (
            <input
              type="text"
              onChange={(e) => applyValue({ ...item, value: e.target.value })}
            />
          ),
        },
      ]
    },
    { 
      field: "model", 
      headerName: "Model", 
      flex: 1.5 
    },
    { 
      field: "quantity", 
      headerName: "Qty", 
      type: "number",
      headerAlign: "left",
      align: "left",
      filterOperators: [
        {
          label: "Greater than",
          value: "gt",
          InputComponent: ({ applyValue, item }) => (
            <input
              type="number"
              onChange={(e) => applyValue({ ...item, value: e.target.value })}
            />
          ),
        },
        {
          label: "Less than",
          value: "lt",
          InputComponent: ({ applyValue, item }) => (
            <input
              type="number"
              onChange={(e) => applyValue({ ...item, value: e.target.value })}
            />
          ),
        },
      ]
    },
    { 
      field: "condition", 
      headerName: "Condition", 
      flex: 1,
      filterOperators: [
        {
          label: "Is",
          value: "is",
          InputComponent: ({ applyValue, item }) => (
            <select
              onChange={(e) => applyValue({ ...item, value: e.target.value })}
            >
              <option value="New">New</option>
              <option value="Refurbished">Refurbished</option>
              <option value="Used">Used</option>
            </select>
          ),
        },
      ]
    },
    { 
      field: "processor", 
      headerName: "CPU", 
      flex: 1.5,
      filterOperators: [
        {
          label: "Contains",
          value: "contains",
          InputComponent: ({ applyValue, item }) => (
            <input
              type="text"
              onChange={(e) => applyValue({ ...item, value: e.target.value })}
              placeholder="Search CPU (e.g., i7, Ryzen)"
            />
          ),
        },
      ]
    },
    { 
      field: "ram", 
      headerName: "RAM", 
      flex: 1,
      filterOperators: [
        {
          label: "Is",
          value: "is",
          InputComponent: ({ applyValue, item }) => (
            <select
              onChange={(e) => applyValue({ ...item, value: e.target.value })}
            >
              <option value="4GB">4GB</option>
              <option value="8GB">8GB</option>
              <option value="16GB">16GB</option>
              <option value="32GB">32GB</option>
            </select>
          ),
        },
      ]
    },
    { 
      field: "storage", 
      headerName: "Storage", 
      flex: 1,
      filterOperators: [
        {
          label: "Is",
          value: "is",
          InputComponent: ({ applyValue, item }) => (
            <select
              onChange={(e) => applyValue({ ...item, value: e.target.value })}
            >
              <option value="128GB SSD">128GB SSD</option>
              <option value="256GB SSD">256GB SSD</option>
              <option value="512GB SSD">512GB SSD</option>
              <option value="1TB SSD">1TB SSD</option>
            </select>
          ),
        },
      ]
    },
    { 
      field: "gpu", 
      headerName: "GPU", 
      flex: 1.5,
      filterOperators: [
        {
          label: "Contains",
          value: "contains",
          InputComponent: ({ applyValue, item }) => (
            <input
              type="text"
              onChange={(e) => applyValue({ ...item, value: e.target.value })}
              placeholder="Search GPU (e.g., RTX, Iris)"
            />
          ),
        },
      ]
    },
    { 
      field: "screenSize", 
      headerName: "Screen", 
      flex: 1,
      filterOperators: [
        {
          label: "Is",
          value: "is",
          InputComponent: ({ applyValue, item }) => (
            <select
              onChange={(e) => applyValue({ ...item, value: e.target.value })}
            >
              <option value="13.3">13.3</option>
              <option value="14">14</option>
              <option value="15.6">15.6</option>
              <option value="17">17</option>
            </select>
          ),
        },
      ]
    },
    { 
      field: "price", 
      headerName: "Price (kshs)", 
      type: "number",
      flex: 1,
      valueFormatter: (params) => `${params.value.toLocaleString()}`,
      filterOperators: [
        {
          label: "Greater than",
          value: "gt",
          InputComponent: ({ applyValue, item }) => (
            <input
              type="number"
              onChange={(e) => applyValue({ ...item, value: e.target.value })}
              placeholder="Min price"
            />
          ),
        },
        {
          label: "Less than",
          value: "lt",
          InputComponent: ({ applyValue, item }) => (
            <input
              type="number"
              onChange={(e) => applyValue({ ...item, value: e.target.value })}
              placeholder="Max price"
            />
          ),
        },
      ]
    },
    { 
      field: "hasBattery", 
      headerName: "Battery", 
      flex: 0.8,
      filterOperators: [
        {
          label: "Is",
          value: "is",
          InputComponent: ({ applyValue, item }) => (
            <select
              onChange={(e) => applyValue({ ...item, value: e.target.value })}
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          ),
        },
      ]
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="LAPTOP INVENTORY"
        subtitle="Manage Your Laptop Stock"
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
          "& .MuiDataGrid-filterForm": {
            backgroundColor: colors.primary[500],
          },
        }}
      >
        <DataGrid
          rows={mockLaptops}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
              printOptions: { disableToolbarButton: true },
              csvOptions: { disableToolbarButton: true },
            },
          }}
          initialState={{
            filter: {
              filterModel: {
                items: [],
                quickFilterValues: [],
              },
            },
          }}
          density="comfortable"
        />
      </Box>
    </Box>
  );
};

export default LaptopInventory;
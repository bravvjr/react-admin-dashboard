import { Box, Button, TextField, MenuItem, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl, Divider } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const AddLaptop = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  // Mock data - will be replaced with your actual data source later
  const brands = ["Dell", "HP", "Lenovo", "Asus", "Acer", "Apple", "MSI", "Razer"];
  const processorNames = ["i3", "i5", "i7", "i9", "Ryzen 3", "Ryzen 5", "Ryzen 7", "Ryzen 9", "M1", "M2"];
  const processorGenerations = ["7th Gen", "8th Gen", "9th Gen", "10th Gen", "11th Gen", "12th Gen"];
  const ramOptions = ["4GB", "8GB", "16GB", "32GB", "64GB"];
  const storageOptions = ["128GB SSD", "256GB SSD", "512GB SSD", "1TB SSD", "2TB SSD", "1TB HDD", "2TB HDD"];
  const conditions = ["New", "Refurbished", "Used - Like New", "Used - Good", "Used - Fair"];

  const handleFormSubmit = (values) => {
    console.log(values);
    // Format GPU data before submission if needed
    const formattedValues = {
      ...values,
      gpu: values.gpuType === "integrated" 
        ? "Integrated Graphics" 
        : `${values.gpuManufacturer} ${values.gpuModel}`
    };
    console.log(formattedValues);
  };

  return (
    <Box m="20px">
      <Header title="ADD LAPTOP" subtitle="Add New Laptop to Inventory" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              {/* Basic Information Section */}
              <TextField
                select
                fullWidth
                variant="filled"
                label="Brand"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.brand}
                name="brand"
                error={!!touched.brand && !!errors.brand}
                helperText={touched.brand && errors.brand}
                sx={{ gridColumn: "span 2" }}
              >
                {brands.map((brand) => (
                  <MenuItem key={brand} value={brand}>
                    {brand}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Model"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.model}
                name="model"
                error={!!touched.model && !!errors.model}
                helperText={touched.model && errors.model}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                select
                fullWidth
                variant="filled"
                label="Condition"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.condition}
                name="condition"
                error={!!touched.condition && !!errors.condition}
                helperText={touched.condition && errors.condition}
                sx={{ gridColumn: "span 2" }}
              >
                {conditions.map((condition) => (
                  <MenuItem key={condition} value={condition}>
                    {condition}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Quantity"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.quantity}
                name="quantity"
                error={!!touched.quantity && !!errors.quantity}
                helperText={touched.quantity && errors.quantity}
                sx={{ gridColumn: "span 2" }}
                inputProps={{ min: 1 }}
              />

              {/* Processor Section */}
              <Divider sx={{ gridColumn: "span 4", my: 2 }}>Processor</Divider>
              
              <TextField
                select
                fullWidth
                variant="filled"
                label="Processor Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.processorName}
                name="processorName"
                error={!!touched.processorName && !!errors.processorName}
                helperText={touched.processorName && errors.processorName}
                sx={{ gridColumn: "span 2" }}
              >
                {processorNames.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                fullWidth
                variant="filled"
                label="Generation"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.processorGeneration}
                name="processorGeneration"
                error={!!touched.processorGeneration && !!errors.processorGeneration}
                helperText={touched.processorGeneration && errors.processorGeneration}
                sx={{ gridColumn: "span 2" }}
              >
                {processorGenerations.map((gen) => (
                  <MenuItem key={gen} value={gen}>
                    {gen}
                  </MenuItem>
                ))}
              </TextField>

              {/* Memory & Storage */}
              <Divider sx={{ gridColumn: "span 4", my: 2 }}>Memory & Storage</Divider>
              
              <TextField
                select
                fullWidth
                variant="filled"
                label="RAM"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ram}
                name="ram"
                error={!!touched.ram && !!errors.ram}
                helperText={touched.ram && errors.ram}
                sx={{ gridColumn: "span 2" }}
              >
                {ramOptions.map((ram) => (
                  <MenuItem key={ram} value={ram}>
                    {ram}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                fullWidth
                variant="filled"
                label="Storage"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.storage}
                name="storage"
                error={!!touched.storage && !!errors.storage}
                helperText={touched.storage && errors.storage}
                sx={{ gridColumn: "span 2" }}
              >
                {storageOptions.map((storage) => (
                  <MenuItem key={storage} value={storage}>
                    {storage}
                  </MenuItem>
                ))}
              </TextField>

              {/* GPU Section */}
              <Divider sx={{ gridColumn: "span 4", my: 2 }}>Graphics</Divider>
              
              <FormControl component="fieldset" sx={{ gridColumn: "span 4" }}>
                <FormLabel component="legend">GPU Type</FormLabel>
                <RadioGroup
                  row
                  name="gpuType"
                  value={values.gpuType}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="integrated"
                    control={<Radio />}
                    label="Integrated"
                  />
                  <FormControlLabel
                    value="dedicated"
                    control={<Radio />}
                    label="Dedicated"
                  />
                </RadioGroup>
              </FormControl>

              {values.gpuType === "dedicated" && (
                <>
                  <TextField
                    select
                    fullWidth
                    variant="filled"
                    label="GPU Manufacturer"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.gpuManufacturer}
                    name="gpuManufacturer"
                    error={!!touched.gpuManufacturer && !!errors.gpuManufacturer}
                    helperText={touched.gpuManufacturer && errors.gpuManufacturer}
                    sx={{ gridColumn: "span 2" }}
                  >
                    <MenuItem value="Nvidia">Nvidia</MenuItem>
                    <MenuItem value="Radeon">Radeon</MenuItem>
                    <MenuItem value="Intel Arc">Intel Arc</MenuItem>
                  </TextField>

                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="GPU Model"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.gpuModel}
                    name="gpuModel"
                    error={!!touched.gpuModel && !!errors.gpuModel}
                    helperText={touched.gpuModel && errors.gpuModel}
                    sx={{ gridColumn: "span 2" }}
                    placeholder="e.g., RTX 3060, RX 6700M"
                  />
                </>
              )}

              {/* Battery & Additional Info */}
              <Divider sx={{ gridColumn: "span 4", my: 2 }}>Additional Information</Divider>
              
              <FormControl component="fieldset" sx={{ gridColumn: "span 4" }}>
                <FormLabel component="legend">Includes Battery?</FormLabel>
                <RadioGroup
                  row
                  name="hasBattery"
                  value={values.hasBattery}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Screen Size"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.screenSize}
                name="screenSize"
                error={!!touched.screenSize && !!errors.screenSize}
                helperText={touched.screenSize && errors.screenSize}
                sx={{ gridColumn: "span 2" }}
                placeholder="e.g., 15.6 inches"
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Resolution"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.resolution}
                name="resolution"
                error={!!touched.resolution && !!errors.resolution}
                helperText={touched.resolution && errors.resolution}
                sx={{ gridColumn: "span 2" }}
                placeholder="e.g., 1920x1080"
              />

              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Price (Kshs)"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
                name="price"
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: "span 2" }}
                inputProps={{ step: "1000" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Serial Numbers (comma separated)"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.serialNumbers}
                name="serialNumbers"
                error={!!touched.serialNumbers && !!errors.serialNumbers}
                helperText={touched.serialNumbers && errors.serialNumbers}
                sx={{ gridColumn: "span 2" }}
                placeholder="SN123, SN456, SN789"
              />
            </Box>

            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained" size="large">
                Add Laptop(s) to Inventory
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  brand: yup.string().required("Brand is required"),
  model: yup.string().required("Model is required"),
  condition: yup.string().required("Condition is required"),
  quantity: yup.number().required("Quantity is required").min(1, "Must be at least 1"),
  processorName: yup.string().required("Processor name is required"),
  processorGeneration: yup.string().required("Processor generation is required"),
  ram: yup.string().required("RAM specification is required"),
  storage: yup.string().required("Storage specification is required"),
  gpuType: yup.string().required("GPU type is required"),
  gpuManufacturer: yup.string().when("gpuType", {
    is: "dedicated",
    then: yup.string().required("GPU manufacturer is required for dedicated graphics"),
  }),
  gpuModel: yup.string().when("gpuType", {
    is: "dedicated",
    then: yup.string().required("GPU model is required for dedicated graphics"),
  }),
  hasBattery: yup.string().required("Please specify battery status"),
  screenSize: yup.string().required("Screen size is required"),
  resolution: yup.string().required("Resolution is required"),
  price: yup.number().required("Price is required").min(0, "Price cannot be negative"),
  serialNumbers: yup.string().when("quantity", {
    is: (quantity) => quantity > 1,
    then: yup.string().required("Please enter serial numbers for all units"),
  }),
});

const initialValues = {
  brand: "",
  model: "",
  condition: "",
  quantity: 1,
  processorName: "",
  processorGeneration: "",
  ram: "",
  storage: "",
  gpuType: "integrated",
  gpuManufacturer: "",
  gpuModel: "",
  hasBattery: "yes",
  screenSize: "",
  resolution: "",
  price: "",
  serialNumbers: "",
};

export default AddLaptop;
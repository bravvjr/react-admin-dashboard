import React, { useState } from "react";
import { 
  Box, 
  Button, 
  TextField, 
  Typography, 
  Stepper, 
  Step, 
  StepLabel, 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  FormLabel, 
  FormControl, 
  Divider, 
  Card, 
  CardContent,
  MenuItem 
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const steps = ['Device Information', 'Condition Assessment', 'Valuation & Offer'];

const TradeInForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [activeStep, setActiveStep] = useState(0);
  const [valuation, setValuation] = useState(null);

  // ... rest of your component code remains the same ...

  const brands = ["Apple", "Dell", "HP", "Lenovo", "Asus", "Acer", "MSI", "Razer", "Microsoft", "Other"];
  const processorNames = ["Intel i3", "Intel i5", "Intel i7", "Intel i9", "AMD Ryzen 3", "AMD Ryzen 5", "AMD Ryzen 7", "AMD Ryzen 9", "Apple M1", "Apple M2"];
  const ramOptions = ["4GB", "8GB", "16GB", "32GB", "64GB"];
  const storageOptions = ["128GB SSD", "256GB SSD", "512GB SSD", "1TB SSD", "2TB SSD", "1TB HDD", "2TB HDD"];
  const screenSizes = ["11\"", "12\"", "13\"", "14\"", "15\"", "16\"", "17\""];

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const calculateValuation = (values) => {
    // This is a mock calculation - replace with your actual valuation logic
    let baseValue = 0;
    
    // Brand valuation
    if (values.brand === "Apple") baseValue = 500;
    else if (["Dell", "HP", "Lenovo"].includes(values.brand)) baseValue = 300;
    else baseValue = 200;
    
    // Processor adjustment
    if (values.processorName.includes("i7") || values.processorName.includes("Ryzen 7")) baseValue += 150;
    if (values.processorName.includes("i9") || values.processorName.includes("Ryzen 9")) baseValue += 300;
    
    // RAM adjustment
    if (values.ram === "16GB") baseValue += 100;
    if (values.ram === "32GB") baseValue += 200;
    
    // Storage adjustment
    if (values.storage.includes("512GB")) baseValue += 50;
    if (values.storage.includes("1TB")) baseValue += 100;
    
    // Condition multiplier
    const conditionMultiplier = {
      "Excellent": 0.9,
      "Good": 0.7,
      "Fair": 0.5,
      "Poor": 0.3
    };
    
    const finalValue = baseValue * conditionMultiplier[values.overallCondition];
    setValuation(finalValue.toFixed(2));
    return finalValue.toFixed(2);
  };

  const handleFormSubmit = (values) => {
    const finalValuation = calculateValuation(values);
    console.log("Trade-in submitted:", { ...values, valuation: finalValuation });
    // Here you would typically send to your backend
    handleNext();
  };

  return (
    <Box m="20px">
      <Header title="TRADE-IN YOUR LAPTOP" subtitle="Get an instant valuation for your used device" />
      
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
      {activeStep === 0 && (
        <Formik
          onSubmit={handleNext}
          initialValues={deviceInfoInitialValues}
          validationSchema={deviceInfoSchema}
        >
          {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
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
                  label="Processor"
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

                <TextField
                  select
                  fullWidth
                  variant="filled"
                  label="Screen Size"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.screenSize}
                  name="screenSize"
                  error={!!touched.screenSize && !!errors.screenSize}
                  helperText={touched.screenSize && errors.screenSize}
                  sx={{ gridColumn: "span 2" }}
                >
                  {screenSizes.map((size) => (
                    <MenuItem key={size} value={size}>
                      {size}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Year Purchased"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.yearPurchased}
                  name="yearPurchased"
                  error={!!touched.yearPurchased && !!errors.yearPurchased}
                  helperText={touched.yearPurchased && errors.yearPurchased}
                  sx={{ gridColumn: "span 2" }}
                  inputProps={{ min: 2000, max: new Date().getFullYear() }}
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Serial Number (optional)"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.serialNumber}
                  name="serialNumber"
                  sx={{ gridColumn: "span 4" }}
                />
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Next: Condition Assessment
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      )}

      {activeStep === 1 && (
        <Formik
          onSubmit={handleNext}
          initialValues={conditionInitialValues}
          validationSchema={conditionSchema}
        >
          {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <FormControl component="fieldset" sx={{ gridColumn: "span 4" }}>
                  <FormLabel component="legend">Overall Condition</FormLabel>
                  <RadioGroup
                    row
                    name="overallCondition"
                    value={values.overallCondition}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="Excellent" control={<Radio />} label="Excellent" />
                    <FormControlLabel value="Good" control={<Radio />} label="Good" />
                    <FormControlLabel value="Fair" control={<Radio />} label="Fair" />
                    <FormControlLabel value="Poor" control={<Radio />} label="Poor" />
                  </RadioGroup>
                </FormControl>

                <Divider sx={{ gridColumn: "span 4", my: 2 }}>Detailed Condition</Divider>

                <FormControl component="fieldset" sx={{ gridColumn: "span 4" }}>
                  <FormLabel component="legend">Screen Condition</FormLabel>
                  <RadioGroup
                    row
                    name="screenCondition"
                    value={values.screenCondition}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="Perfect" control={<Radio />} label="Perfect" />
                    <FormControlLabel value="Minor Scratches" control={<Radio />} label="Minor Scratches" />
                    <FormControlLabel value="Visible Damage" control={<Radio />} label="Visible Damage" />
                    <FormControlLabel value="Cracked" control={<Radio />} label="Cracked" />
                  </RadioGroup>
                </FormControl>

                <FormControl component="fieldset" sx={{ gridColumn: "span 4" }}>
                  <FormLabel component="legend">Body Condition</FormLabel>
                  <RadioGroup
                    row
                    name="bodyCondition"
                    value={values.bodyCondition}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="Like New" control={<Radio />} label="Like New" />
                    <FormControlLabel value="Minor Wear" control={<Radio />} label="Minor Wear" />
                    <FormControlLabel value="Dents/Scratches" control={<Radio />} label="Dents/Scratches" />
                    <FormControlLabel value="Major Damage" control={<Radio />} label="Major Damage" />
                  </RadioGroup>
                </FormControl>

                <FormControl component="fieldset" sx={{ gridColumn: "span 4" }}>
                  <FormLabel component="legend">Battery Health</FormLabel>
                  <RadioGroup
                    row
                    name="batteryHealth"
                    value={values.batteryHealth}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="Excellent (80%+)" control={<Radio />} label="Excellent (80%+)" />
                    <FormControlLabel value="Good (60-79%)" control={<Radio />} label="Good (60-79%)" />
                    <FormControlLabel value="Fair (40-59%)" control={<Radio />} label="Fair (40-59%)" />
                    <FormControlLabel value="Poor (<40%)" control={<Radio />} label="Poor (<40%)" />
                  </RadioGroup>
                </FormControl>

                <FormControl component="fieldset" sx={{ gridColumn: "span 4" }}>
                  <FormLabel component="legend">Functional Issues</FormLabel>
                  <RadioGroup
                    row
                    name="functionalIssues"
                    value={values.functionalIssues}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="None" control={<Radio />} label="None" />
                    <FormControlLabel value="Minor" control={<Radio />} label="Minor" />
                    <FormControlLabel value="Moderate" control={<Radio />} label="Moderate" />
                    <FormControlLabel value="Severe" control={<Radio />} label="Severe" />
                  </RadioGroup>
                </FormControl>

                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Additional Notes"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.additionalNotes}
                  name="additionalNotes"
                  multiline
                  rows={4}
                  sx={{ gridColumn: "span 4" }}
                />
              </Box>
              <Box display="flex" justifyContent="space-between" mt="20px">
                <Button onClick={handleBack} color="secondary" variant="outlined">
                  Back
                </Button>
                <Button type="submit" color="secondary" variant="contained">
                  Next: Get Valuation
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      )}

      {activeStep === 2 && (
        <Box>
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Your Trade-In Valuation
              </Typography>
              <Typography variant="h3" color="secondary" gutterBottom>
                ${valuation || "0.00"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is an estimated value based on the information provided. Final value may vary after physical inspection.
              </Typography>
            </CardContent>
          </Card>

          <Typography variant="h6" gutterBottom>
            Next Steps
          </Typography>
          <Typography variant="body1" paragraph>
            1. Review your valuation offer above
          </Typography>
          <Typography variant="body1" paragraph>
            2. If you accept, we'll arrange for device inspection
          </Typography>
          <Typography variant="body1" paragraph>
            3. After verification, you'll receive payment via your preferred method
          </Typography>

          <Formik
            onSubmit={handleFormSubmit}
            initialValues={contactInitialValues}
            validationSchema={contactSchema}
          >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                    mt: 4
                  }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Full Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.fullName}
                    name="fullName"
                    error={!!touched.fullName && !!errors.fullName}
                    helperText={touched.fullName && errors.fullName}
                    sx={{ gridColumn: "span 2" }}
                  />

                  <TextField
                    fullWidth
                    variant="filled"
                    type="email"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 2" }}
                  />

                  <TextField
                    fullWidth
                    variant="filled"
                    type="tel"
                    label="Phone Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                    name="phone"
                    error={!!touched.phone && !!errors.phone}
                    helperText={touched.phone && errors.phone}
                    sx={{ gridColumn: "span 2" }}
                  />

                  <TextField
                    select
                    fullWidth
                    variant="filled"
                    label="Preferred Contact Method"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.contactMethod}
                    name="contactMethod"
                    sx={{ gridColumn: "span 2" }}
                  >
                    <MenuItem value="Email">Email</MenuItem>
                    <MenuItem value="Phone">Phone</MenuItem>
                    <MenuItem value="Text">Text Message</MenuItem>
                  </TextField>
                </Box>

                <Box display="flex" justifyContent="space-between" mt="20px">
                  <Button onClick={handleBack} color="secondary" variant="outlined">
                    Back
                  </Button>
                  <Button type="submit" color="secondary" variant="contained">
                    Submit Trade-In Request
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      )}

      {activeStep === 3 && (
        <Box textAlign="center" py={10}>
          <Typography variant="h3" color="secondary" gutterBottom>
            Thank You!
          </Typography>
          <Typography variant="h5" gutterBottom>
            Your trade-in request has been submitted.
          </Typography>
          <Typography variant="body1" paragraph>
            We'll contact you within 24 hours to arrange the next steps.
          </Typography>
          <Typography variant="body1" paragraph>
            Your reference number is: <strong>TN-{Math.floor(Math.random() * 1000000)}</strong>
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            sx={{ mt: 4 }}
            onClick={() => {
              setActiveStep(0);
              setValuation(null);
            }}
          >
            Start New Trade-In
          </Button>
        </Box>
      )}
    </Box>
  );
};

// Validation Schemas
const deviceInfoSchema = yup.object().shape({
  brand: yup.string().required("Brand is required"),
  model: yup.string().required("Model is required"),
  processorName: yup.string().required("Processor is required"),
  ram: yup.string().required("RAM is required"),
  storage: yup.string().required("Storage is required"),
  screenSize: yup.string().required("Screen size is required"),
  yearPurchased: yup
    .number()
    .required("Year purchased is required")
    .min(2000, "Must be 2000 or later")
    .max(new Date().getFullYear(), `Cannot be in the future`),
});

const conditionSchema = yup.object().shape({
  overallCondition: yup.string().required("Please select overall condition"),
  screenCondition: yup.string().required("Please select screen condition"),
  bodyCondition: yup.string().required("Please select body condition"),
  batteryHealth: yup.string().required("Please select battery health"),
  functionalIssues: yup.string().required("Please select functional issues"),
});

const contactSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
});

// Initial Values
const deviceInfoInitialValues = {
  brand: "",
  model: "",
  processorName: "",
  ram: "",
  storage: "",
  screenSize: "",
  yearPurchased: "",
  serialNumber: "",
};

const conditionInitialValues = {
  overallCondition: "",
  screenCondition: "",
  bodyCondition: "",
  batteryHealth: "",
  functionalIssues: "",
  additionalNotes: "",
};

const contactInitialValues = {
  fullName: "",
  email: "",
  phone: "",
  contactMethod: "Email",
};

export default TradeInForm;
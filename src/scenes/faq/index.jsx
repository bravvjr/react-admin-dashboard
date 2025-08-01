import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I check laptop availability in your inventory?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can view our current laptop inventory directly in the system dashboard. 
            The inventory page shows all available models with specifications, quantities, 
            and prices in KES. For real-time updates, refresh the page or contact our sales team.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What warranty do you provide on laptops?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer a standard 1-year warranty on all new laptops, covering manufacturer defects. 
            Refurbished models come with a 6-month warranty. Warranty details for each product 
            are displayed in the inventory system. All warranties are valid at our Nairobi service center.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How does the trade-in program work?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our trade-in program allows you to exchange your old laptop for credit toward a new purchase:
            1. Submit your laptop details in the Trade-In module
            2. Receive a valuation within 24 hours
            3. Bring the laptop to our shop for inspection
            4. Get instant credit applied to your new purchase
            Note: Laptops must power on and have no liquid damage to qualify.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I update stock quantities in the system?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Authorized staff can update stock by:
            1. Navigating to Inventory Management
            2. Selecting the laptop model
            3. Clicking "Edit Quantity"
            4. Entering the new stock count
            5. Saving changes
            All quantity changes are logged in the system audit trail.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What payment methods do you accept for bulk purchases?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We accept multiple payment options for business customers:
            - M-Pesa (Buy Goods Till: 123456)
            - Bank transfers (KCB, Equity, Standard Chartered)
            - Credit cards (Visa, Mastercard)
            - Cash (for in-store purchases)
            Invoice payments are available for registered businesses with 7-day terms.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I generate sales reports?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sales reports can be generated in the Analytics section:
            1. Select date range and report type
            2. Choose to filter by product category, brand, or salesperson
            3. Click "Generate Report"
            4. Export as PDF or Excel
            Managers can schedule automatic weekly reports to be emailed.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
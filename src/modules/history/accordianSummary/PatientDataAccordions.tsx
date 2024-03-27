import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  top: 20,
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
  margin: "16px 30%", // Add left and right margins here
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Timestamp: Tue, 03 Mar 2024 00:28:07</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Name: Blood Pressure, <br />
            Reading: 120, <br />
            Unit: mmHg
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Timestamp: Wed, 28 Mar 2024 05:35:53</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Name: Heart Rate, <br />
            Reading: 60, <br />
            Unit: bpm
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Timestamp: Thu, 29 Mar 2024 07:15:16</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Name: O2, <br />
            Reading: 90, <br />
            Unit: %
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Timestamp: Fri, 01 Mar 2024 13:20:12</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Name: Blood Pressure, <br />
            Reading: 120, <br />
            Unit: mmHg
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Timestamp: Sat, 02 Mar 2024 16:19:03</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Name: Heart Rate, <br />
            Reading: 60, <br />
            Unit: bpm
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Timestamp: Sun, 03 Mar 2024 04:24:37</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Name: O2, <br />
            Reading: 90, <br />
            Unit: %
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

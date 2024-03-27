import CircularProgress, {
  CircularProgressProps,
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import { DigicareCircularLoaderProps } from "../interface/DigicareCicularLoader";
import { Fade, Grid } from "@mui/material";
import React from "react";

export const DigicareCircularLoader = ({
  loading,
  props,
}: DigicareCircularLoaderProps) => {
  return (
    <Fade
      in={loading}
      style={{
        transitionDelay: loading ? "800ms" : "0ms",
      }}
      unmountOnExit
    >
      <Grid width="100%">
        <svg width={0} height={0}>
          <defs>
            <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e01cd5" />
              <stop offset="100%" stopColor="#1CB5E0" />
            </linearGradient>
          </defs>
        </svg>
        <CircularProgress
          variant="indeterminate"
          disableShrink
          sx={{
            "svg circle": { stroke: "url(#my_gradient)" },
            animationDuration: "550ms",
          }}
          size={40}
          thickness={4}
          {...props}
        />
      </Grid>
    </Fade>
  );
};

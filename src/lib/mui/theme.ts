import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    background: {
      default: "#f5f6fa",
      paper: "#FFFFFF",
    },
  },
  shadows: [
    "none",
    "rgba(0, 0, 0, 0.08) 0px 4px 12px",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
  ],
  components: {
    MuiTextField: {
      defaultProps: {
        size: "small",
        fullWidth: true,
      },
      styleOverrides: {
        root: () => ({
          "& .MuiFormLabel-root": {
            fontSize: "12px",
            lineHeight: "1.7375em",
            textTransform: "uppercase",
          },

          "& .MuiInputBase-root": {
            borderRadius: 16,
            fontSize: "14px",
          },
        }),
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: "14px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});

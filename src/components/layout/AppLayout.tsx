import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import Title from "../shared/Title";

const AppLayout = () => (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    return (
      <>
        <Title />
        <Header />

        <Box
          sx={{
            display: "flex",
            width: "100vw",
            height: "calc(100vh - 4rem)",
            overflow: "hidden",
          }}
        >
          {/* LEFT PANEL */}
          <Box
            sx={{
              flex: { xs: "0 0 0%", sm: "0 0 0%", md: "0 0 50%", lg: "0 0 33.333%" },
              width: { xs: "0%", sm: "0%", md: "50%", lg: "33.333%" },
              display: { xs: "none", sm: "none", md: "flex" },
              bgcolor: "#f0f0f0",
              borderRight: "1px solid #ccc",
              alignItems: "center",
              justifyContent: "center",
              overflow: "auto",
            }}
          >
            Left Panel
          </Box>

          {/* CENTER PANEL */}
          <Box
            sx={{
              flex: { xs: "0 0 100%", sm: "0 0 100%", md: "0 0 50%", lg: "0 0 33.333%" },
              width: { xs: "100%", sm: "100%", md: "50%", lg: "33.333%" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#fafafa",
              borderRight: { lg: "1px solid #ccc" },
              overflow: "auto",
            }}
          >
            <WrappedComponent {...props} />
          </Box>

          {/* RIGHT PANEL */}
          <Box
            sx={{
              flex: { xs: "0 0 0%", sm: "0 0 0%", md: "0 0 0%", lg: "0 0 33.333%" },
              width: { xs: "0%", sm: "0%", md: "0%", lg: "33.333%" },
              display: { xs: "none", sm: "none", md: "none", lg: "flex" },
              bgcolor: "#dcdcdc",
              alignItems: "center",
              justifyContent: "center",
              overflow: "auto",
            }}
          >
            Right Panel
          </Box>
        </Box>
      </>
    );
  };
};

export default AppLayout;
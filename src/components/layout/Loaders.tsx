import React from "react";
import { Grid, Skeleton, Stack, Box } from "@mui/material";
import { BouncingSkeleton } from "../designs/StyledComponents";

const LayoutLoader = () => {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        m: 0,
        p: 0,
        bgcolor: "background.default",
      }}
    >
      {/* Left Sidebar */}
      <Grid
        item
        xs={0}
        sm={4}
        md={3}
        sx={{
          display: { xs: "none", sm: "block" },
          height: "100%",
        }}
      >
        <Skeleton
          variant="rectangular"
          height="100%"
          width="100%"
          sx={{ borderRadius: 0 }}
        />
      </Grid>

      {/* Middle Section */}
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        lg={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          width: "100%",
          px: 2,
          py: 1,
        }}
      >
        <Stack spacing={2} sx={{ flex: 1, overflowY: "auto" }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <Skeleton
              key={i}
              variant="rounded"
              height="4.5rem"
              sx={{
                borderRadius: 2,
                mx: i % 2 === 0 ? "auto" : "2rem",
                width: i % 2 === 0 ? "85%" : "70%",
              }}
            />
          ))}
        </Stack>

        {/* Typing loader */}
        <Box sx={{ mt: 2 }}>
          <TypingLoader />
        </Box>
      </Grid>

      {/* Right Sidebar */}
      <Grid
        item
        xs={0}
        md={3}
        lg={3}
        sx={{
          display: { xs: "none", md: "block" },
          height: "100%",
        }}
      >
        <Skeleton
          variant="rectangular"
          height="100%"
          width="100%"
          sx={{ borderRadius: 0 }}
        />
      </Grid>
    </Grid>
  );
};

const TypingLoader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={0.7}
      sx={{ pb: 1 }}
    >
      {[0.1, 0.2, 0.4, 0.6].map((delay, index) => (
        <BouncingSkeleton
          key={index}
          variant="circular"
          width={12}
          height={12}
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </Stack>
  );
};

export { LayoutLoader, TypingLoader };

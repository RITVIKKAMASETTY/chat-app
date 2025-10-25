import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Typography,Box} from "@mui/material";

function Home() {
  return <Box bgcolor={"#e5db1e8b"}><Typography p={"2rem"}  textAlign={"center"}>select a friend to chat</Typography></Box>;
}

// ✅ Correct: directly pass Home to AppLayout
const WrappedHome = AppLayout(Home);

export default WrappedHome;

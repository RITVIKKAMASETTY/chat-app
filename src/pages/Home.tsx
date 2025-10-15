import React from "react";
import AppLayout from "../components/layout/AppLayout";

function Home() {
  return <div>home</div>;
}

// ✅ Correct: directly pass Home to AppLayout
const WrappedHome = AppLayout(Home);

export default WrappedHome;

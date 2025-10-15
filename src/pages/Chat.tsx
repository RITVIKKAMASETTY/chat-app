import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { useParams } from "react-router-dom";

function Chat() {
  const { chatId } = useParams();
  return <div>Now chatting in Chat ID: {chatId}</div>;
}

export default AppLayout(Chat);

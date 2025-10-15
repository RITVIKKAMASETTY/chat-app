import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import Title from "../shared/Title";
import ChatList from "../specific/ChatList";
import { useParams } from "react-router-dom";

const AppLayout = (WrappedComponent: React.ComponentType<any>) => {
  // ✅ Return a new functional component that can safely use hooks
  const HOC = (props: any) => {
    const { chatId } = useParams(); // ✅ Valid hook usage

    const sampleChats = [
      {
        _id: 1,
        name: "Chat 1",
        avatar: [],
        groupChat: false,
        members: [{ _id: 1 }, { _id: 2 }],
      },
      {
        _id: 2,
        name: "Chat 2",
        avatar: [],
        groupChat: true,
        members: [{ _id: 2 }, { _id: 3 }],
      },
      {
        _id: 3,
        name: "Chat 3",
        avatar: [],
        groupChat: false,
        members: [{ _id: 1 }, { _id: 3 }],
      },
    ];

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
            <ChatList
              chats={sampleChats}
              chatId={Number(chatId) || 1}
              newMessagesAlert={[
                { chatId: 1, count: 1 },
                { chatId: 2, count: 2 },
              ]}
              onlineUsers={[1, 3]}
              handleDeleteChat={() => {}}
            />
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

  return HOC;
};

export default AppLayout;

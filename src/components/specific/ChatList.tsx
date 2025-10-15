import { Stack } from "@mui/material";
import React from "react";
import ChatItem from "../shared/ChatItem";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [],
  handleDeleteChat = () => {},
}) => {
  return (
    <Stack width={w} direction="column" overflow="auto" height="100%">
      {chats?.map((data, index) => {
        const { avatar, _id, name, groupChat, members } = data;

        // ✅ Correctly find alerts
        const newMessageAlert = newMessagesAlert.find(
          (alert) => alert.chatId === _id
        );

        // ✅ Correctly check online status
        const isOnline = members?.some((member) =>
          onlineUsers.includes(member._id)
        );

        return (
          <ChatItem
            key={_id}
            index={index}
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            _id={_id}
            groupChat={groupChat}
            sameSender={chatId === _id}
            handleDeleteChat={handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
};

export default ChatList;

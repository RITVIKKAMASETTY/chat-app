import React, { memo } from "react";
import { Link } from "../designs/StyledComponents";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const ChatItem = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChat = () => {},
}) => {
  return (
    <Link
      sx={{
        padding: 0,
        textDecoration: "none",
      }}
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}
    >
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index }}
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "white" : "unset",
          position: "relative",
          padding: "1rem",
          borderBottom: "1px solid #ddd",
          cursor: "pointer",
        }}
      >
        {/* You can add avatar here later if needed */}
        {/* <AvatarCard avatar={avatar} /> */}

        <Stack>
          <Typography fontWeight={600}>{name}</Typography>
          {newMessageAlert?.count > 0 && (
            <Typography variant="body2" color="green">
              {newMessageAlert.count} New Message
            </Typography>
          )}
        </Stack>

        {isOnline && (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </motion.div>
    </Link>
  );
};

export default memo(ChatItem);

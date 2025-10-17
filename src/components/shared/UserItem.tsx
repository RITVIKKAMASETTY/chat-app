import { Add } from '@mui/icons-material';
import { IconButton, Stack, Avatar, ListItem, Typography } from '@mui/material';
import React,{memo} from 'react'
function UserItem({user,handler,handlerIsLoading}) {
    const {name,_id,avatar}=user;
  return (
      <ListItem >
        <Stack direction={"row"} spacing={"1rem"} alignItems={"center"} width={"100%"}>
            <Avatar src={user?.avatar[0]} />
            <Typography variant="body1"
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",}}>{user?.name}</Typography>
           <IconButton  size="small"
          sx={{
            bgcolor: isAdded ? "error.main" : "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: isAdded ? "error.dark" : "primary.dark",
            },
          }}
          onClick={()=>handler(user._id)} disabled={handlerIsLoading}>
            <AddIcon />
           </IconButton>
        </Stack>
      </ListItem>
  )
}
export default memo(UserItem);
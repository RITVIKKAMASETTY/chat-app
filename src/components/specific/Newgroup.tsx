// import React from 'react'

// export default function Newgroup() {
//   return (
//     <div>
//       <h2>Create a New Group</h2>
//       <form>
//         <input type="text" placeholder="Group Name" />
//         <button type="submit">Create Group</button>
//       </form>
//     </div>
//   )
// }
import { useInputValidation } from "6pp";
import {
  Button,
  Dialog,
  DialogTitle,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import UserItem from "../shared/UserItem";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   useAvailableFriendsQuery,
//   useNewGroupMutation,
// } from "../../redux/api/api";
// import { useAsyncMutation, useErrors } from "../../hooks/hook";
// import { setIsNewGroup } from "../../redux/reducers/misc";
// import toast from "react-hot-toast";
export const sampleUsers = [
  {
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "John Doe",
    _id: "1",
  },
  {
    avatar: "https://www.w3schools.com/howto/img_avatar.png",
    name: "John Boi",
    _id: "2",
  },
];
const NewGroup = () => {
  // const { isNewGroup } = useSelector((state) => state.misc);
  // const dispatch = useDispatch();

  // const { isError, isLoading, error, data } = useAvailableFriendsQuery();
  // const [newGroup, isLoadingNewGroup] = useAsyncMutation(useNewGroupMutation);

  // const groupName = useInputValidation("");
const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);
function setselectedmembershandler(id){
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );console.log(selectedMembers);
}
  // const errors = [
  //   {
  //     isError,
  //     error,
  //   },
  // ];

  // useErrors(errors);

  // const selectMemberHandler = (id) => {
  //   setSelectedMembers((prev) =>
  //     prev.includes(id)
  //       ? prev.filter((currElement) => currElement !== id)
  //       : [...prev, id]
  //   );
  // };

  // const submitHandler = () => {
  //   if (!groupName.value) return toast.error("Group name is required");

  //   if (selectedMembers.length < 2)
  //     return toast.error("Please Select Atleast 3 Members");

  //   newGroup("Creating New Group...", {
  //     name: groupName.value,
  //     members: selectedMembers,
  //   });

  //   closeHandler();
  // };

  // const closeHandler = () => {
  //   dispatch(setIsNewGroup(false));
  // };

  return (
    <Dialog open onClose={() => {}}>
      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle>

        <TextField
          label="Group Name"
          // value={groupName.value}
          // onChange={groupName.changeHandler}
        />

        <Typography variant="body1">Members</Typography>

        {/* <Stack>
          {isLoading ? (
            <Skeleton />
          ) : (
            data?.friends?.map((i) => (
              <UserItem
                user={i}
                key={i._id}
                handler={selectMemberHandler}
                isAdded={selectedMembers.includes(i._id)}
              />
            ))
          )}
        </Stack> */}
<Stack>
          {members.map((i) => (
            <UserItem
              user={i}
              key={i._id}
              handler={()=> setselectedmembershandler(i._id)}
              isAdded={selectedMembers.includes(i._id)}
            />
          ))}
</Stack>
        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button
            variant="text"
            color="error"
            size="large"
            // onClick={closeHandler}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            size="large"
          //   onClick={submitHandler}
          //   disabled={isLoadingNewGroup}
          >
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
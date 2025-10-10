// import React from 'react'
// import {Button, Container,Paper, TextField, Typography} from "@mui/material";
// import {useFileHandler, useInputValidation,useStrongPassword} from '6pp';
// import {usernameValidator} from '../utils/validator';
// export default function Login() {
//     const [isLogin,setIsLogin]=React.useState(true);
//     const toggleLogin=()=>setIsLogin(!isLogin);
//     const name=useInputValidation("");
//     const bio=useInputValidation("");
//     const username=useInputValidation("",usernameValidator);
//     const password=useStrongPassword();
//     const avatar=useFileHandler("single");

//     return (
//  <Container component={"main"} maxWidth="xs">
//    <Paper elevation={3} sx={{padding:"20px",marginTop:"30px", flexDirection:"column",display:"flex",alignItems:"center"}}>
//      login
//    </Paper>
//    {
//     isLogin ?<><Typography>
//         <form>
//             <TextField  required fullWidth label="Username" margin="normal" value={username.value} onChange={username.changeHandler}/>
//             <TextField  required fullWidth label="Password" margin="normal" type="password" value={password.value} onChange={password.changeHandler}/>
//             <Button type="submit" fullWidth variant="contained" sx={{marginTop:"20px"}}>Login</Button>
//             <Typography> or </Typography>
//             <Button onClick={toggleLogin}>Sign Insted</Button>
//         </form>
//         </Typography></>: <>
//         <form>
//             <image src={avatar.file?URL.createObjectURL(avatar.file):""} alt="avatar" style={{width:"100px",height:"100px",borderRadius:"50%"}}/>
//             {avatar.error&& <Typography color="red">{avatar.error}</Typography>}
//             <input type="file" accept="image/*" onChange={avatar.changeHandler}/>
//         <TextField  required fullWidth label="Name" margin="normal" value={name.value} onChange={name.changeHandler}/>
//         <TextField  required fullWidth label="Bio" margin="normal" value={bio.value} onChange={bio.changeHandler}/>
//           <TextField  required fullWidth label="Username" margin="normal" value={username.value} onChange={username.changeHandler}/>
//           {username.error&& <Typography color="red">{username.error}</Typography>}
//             <TextField  required fullWidth label="Password" margin="normal" type="password" value={password.value} onChange={password.changeHandler}/>
//             {password.error&& <Typography color="red">{password.error}</Typography>}
//             <Button type="submit" fullWidth variant="contained" sx={{marginTop:"20px"}}>Login</Button>
//             <Typography> or </Typography>
//             <Button onClick={toggleLogin}>Sign Insted</Button>
//         </form>
//         </>
//    }
//  </Container>
//   )
// }
import React, { useRef } from 'react';
import { Button, Container, Paper, TextField, Typography, Avatar, Box } from "@mui/material";
import { useFileHandler, useInputValidation, useStrongPassword } from '6pp';
import { usernameValidator } from '../utils/validator';

export default function Login() {
  const [isLogin, setIsLogin] = React.useState(true);
  const toggleLogin = () => setIsLogin(!isLogin);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useStrongPassword();
  const avatar = useFileHandler("single");

  // Hidden file input ref
  const fileInputRef = useRef(null);

  // Function to open file picker when avatar clicked
  const handleAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  //handle form submission
  const handleSubmit=(e:React.FormEvent)=>{
    e.preventDefault();
    if(isLogin){
      //login logic
      console.log("Logging in with:", {username:username.value,password:password.value});
    }else{
      //signup logic
      if(!username.error && !password.error && !avatar.error){
        console.log("Signing up with:", {name:name.value,bio:bio.value,username:username.value,password:password.value,avatar:avatar.file});
      }else{
        console.log("Fix errors before submitting.");
      }
    }
  }
  return (
    <div style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"linear-gradient(135deg, #667eea 0%, #1cc830ff 100%)",zIndex:-1}}>
    <Container component="main" maxWidth="xs" sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Paper
        elevation={3}
        sx={{
          padding: "30px",
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "15px",
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          {isLogin ? "Login" : "Sign Up"}
        </Typography>

        {isLogin ? (
          <form style={{ width: "100%", textAlign: "center" }}>
            <TextField
              required
              fullWidth
              label="Username"
              margin="normal"
              value={username.value}
              onChange={username.changeHandler}
            />
            <TextField
              required
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              value={password.value}
              onChange={password.changeHandler}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ marginTop: "20px" }}
              onSubmit={(e)=>handleSubmit(e)}
            >
              Login
            </Button>

            <Typography sx={{ mt: 2 }}>or</Typography>
            <Button onClick={toggleLogin}>Sign Up Instead</Button>
          </form>
        ) : (
          <form style={{ width: "100%", textAlign: "center" }}>
            {/* Avatar Upload Section */}
            <Box
              sx={{
                position: "relative",
                width: "fit-content",
                margin: "auto",
                cursor: "pointer",
              }}
              onClick={handleAvatarClick}
            >
              <Avatar
                src={avatar.file ? URL.createObjectURL(avatar.file) : ""}
                alt="avatar"
                sx={{
                  width: 100,
                  height: 100,
                  margin: "10px auto",
                  border: "2px solid #1976d2",
                  transition: "0.3s",
                  "&:hover": {
                    opacity: 0.8,
                    boxShadow: "0 0 10px #1976d2",
                  },
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  position: "absolute",
                  bottom: -20,
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  color: "gray",
                  fontSize: "0.8rem",
                }}
              >
                Click to upload
              </Typography>
            </Box>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={avatar.changeHandler}
              style={{ display: "none" }} // Hides the ugly input
            />

            {avatar.error && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {avatar.error}
              </Typography>
            )}

            <TextField
              required
              fullWidth
              label="Name"
              margin="normal"
              value={name.value}
              onChange={name.changeHandler}
            />
            <TextField
              required
              fullWidth
              label="Bio"
              margin="normal"
              value={bio.value}
              onChange={bio.changeHandler}
            />
            <TextField
              required
              fullWidth
              label="Username"
              margin="normal"
              value={username.value}
              onChange={username.changeHandler}
            />
            {username.error && (
              <Typography color="error" variant="body2">
                {username.error}
              </Typography>
            )}
            <TextField
              required
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              value={password.value}
              onChange={password.changeHandler}
            />
            {password.error && (
              <Typography color="error" variant="body2">
                {password.error}
              </Typography>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ marginTop: "20px" }}
              onSubmit={(e)=>handleSubmit(e)}
            >
              Sign Up
            </Button>

            <Typography sx={{ mt: 2 }}>or</Typography>
            <Button onClick={toggleLogin}>Login Instead</Button>
          </form>
        )}
      </Paper>
    </Container>
    </div>
  );
}
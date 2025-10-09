import React from 'react'
import {Button, Container,Paper, TextField, Typography} from "@mui/material";
import {useFileHandler, useInputValidation,useStrongPassword} from '6pp';
import {usernameValidator} from '../utils/validator';
export default function Login() {
    const [isLogin,setIsLogin]=React.useState(true);
    const toggleLogin=()=>setIsLogin(!isLogin);
    const name=useInputValidation("");
    const bio=useInputValidation("");
    const username=useInputValidation("",usernameValidator);
    const password=useStrongPassword();
    const avatar=useFileHandler("single");

    return (
 <Container component={"main"} maxWidth="xs">
   <Paper elevation={3} sx={{padding:"20px",marginTop:"30px", flexDirection:"column",display:"flex",alignItems:"center"}}>
     login
   </Paper>
   {
    isLogin ?<><Typography>
        <form>
            <TextField  required fullWidth label="Username" margin="normal" value={username.value} onChange={username.changeHandler}/>
            <TextField  required fullWidth label="Password" margin="normal" type="password" value={password.value} onChange={password.changeHandler}/>
            <Button type="submit" fullWidth variant="contained" sx={{marginTop:"20px"}}>Login</Button>
            <Typography> or </Typography>
            <Button onClick={toggleLogin}>Sign Insted</Button>
        </form>
        </Typography></>: <>
        <form>
            <image src={avatar.file?URL.createObjectURL(avatar.file):""} alt="avatar" style={{width:"100px",height:"100px",borderRadius:"50%"}}/>
            {avatar.error&& <Typography color="red">{avatar.error}</Typography>}
            <input type="file" accept="image/*" onChange={avatar.changeHandler}/>
        <TextField  required fullWidth label="Name" margin="normal" value={name.value} onChange={name.changeHandler}/>
        <TextField  required fullWidth label="Bio" margin="normal" value={bio.value} onChange={bio.changeHandler}/>
          <TextField  required fullWidth label="Username" margin="normal" value={username.value} onChange={username.changeHandler}/>
          {username.error&& <Typography color="red">{username.error}</Typography>}
            <TextField  required fullWidth label="Password" margin="normal" type="password" value={password.value} onChange={password.changeHandler}/>
            {password.error&& <Typography color="red">{password.error}</Typography>}
            <Button type="submit" fullWidth variant="contained" sx={{marginTop:"20px"}}>Login</Button>
            <Typography> or </Typography>
            <Button onClick={toggleLogin}>Sign Insted</Button>
        </form>
        </>
   }
 </Container>
  )
}

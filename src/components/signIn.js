import * as React from 'react';
import { useState } from "react"
import Button from '@mui/material/Button';
import './design/signIn.css';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';




export const SignIn = () => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const check = () => {
       if(email=='' || password =='')
       alert("נא למלא את כל השדות")
    }
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };


    return <div className="signInPage"> 
    <TextField id="outlined-basic" type="email" label="אימייל" variant="outlined" onBlur={(e) => setEmail(e.target.value)} className="emailFeild"/>
    <br></br>


    <Box  className="passwordFeild" onBlur={(e) => setPassword(e.target.value)}>
        <FormControl  variant="outlined">
          <InputLabel htmlFor="outlined-basic">סיסמה</InputLabel>
          <OutlinedInput
            id="outlined-basic"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        </Box>




    {/* <TextField id="outlined-basic" type="password" label="סיסמה" variant="outlined" onBlur={(e) => setPassword(e.target.value)} className="field"/> */}
    
    <br></br>
    <Button variant="outlined"  onClick={() => check()} className="confirmButton">כניסה</Button>
    </div>
}
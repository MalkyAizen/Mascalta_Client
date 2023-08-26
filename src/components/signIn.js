import { useState } from "react"
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import '../design/signIn.css';
export const SignIn = () => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const check = () => {
       if(email=='' || password =='')
       alert("נא למלא את כל השדות")
    }
    return <div className="signInPage"> 
        <br></br>
    <TextField id="outlined-basic" label="אימייל" variant="outlined" onBlur={(e) => setEmail(e.target.value)} />
    <br></br>
    <TextField id="outlined-basic" label="סיסמה" variant="outlined" onBlur={(e) => setPassword(e.target.value)}/>
    <br></br>
    <Button variant="outlined" onClick={() => check()} >כניסה</Button>
    </div>
}
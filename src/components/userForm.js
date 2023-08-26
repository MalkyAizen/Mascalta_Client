import { FormControl, MenuItem, Select, TextField } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import React from 'react';
import '../design/userForm.css';


export const UserForm = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (<>
        <div className="divForm"> 
        <h2 className='userForm'>user form</h2>
            <FormControl>
                <TextField required margin="normal" className="custom-textfield" id="lname" label="שם משפחה" variant="outlined" />
                <TextField required margin="normal" className="custom-textfield" id="fname1" label="שם פרטי 1" variant="outlined" />
                <TextField margin="normal" className="custom-textfield" id="outlined-basic" label="שם פרטי 2" variant="outlined" />
                <TextField required margin="normal" className="custom-textfield" id="outlined-basic" label="תעודת זהות 1" variant="outlined" />
                <TextField margin="normal" className="custom-textfield" id="outlined-basic" label="תהודת זהות 2" variant="outlined" />
                <TextField margin="normal" className="custom-textfield" id="outlined-basic" label="מייל נוסף" variant="outlined" />
                <TextField required margin="normal" className="custom-textfield" id="outlined-basic" label="טלפון 1" variant="outlined" />
                <TextField margin="normal" className="custom-textfield" id="outlined-basic" label="טלפון 2" variant="outlined" />
                <TextField required margin="normal" className="custom-textfield" id="outlined-basic" label="כתובת" variant="outlined" />
                <Select required margin="normal" className="custom-textfield"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    </>)
}



{/* 
        <div>
            <label for="fname">שם משפחה</label>
            <input type="text" id="lname" name="fname"></input><br />
            <label for="lname">שם פרטי 1</label>
            <input type="text" id="fname1" name="lname"></input><br />
            <label for="fname">תעודת זהות 1</label>
            <input type="text" id="tz1" name="fname"></input><br />
            <label for="lname">שם פרטי 2</label>
            <input type="text" id="fname2" name="lname"></input><br />
            <label for="fname">תעודת זהות 2</label>
            <input type="text" id="tz2" name="fname"></input><br />
            <label for="fname">מייל נוסף</label>
            <input type="text" id="lname" name="fname"></input><br />
            <label for="lname">טלפון 1</label>
            <input type="text" id="fname1" name="lname"></input><br />
            <label for="fname">טלפון 2</label>
            <input type="text" id="tz1" name="fname"></input><br />
            <label for="lname">כתובת</label>
            <input type="text" id="fname2" name="lname"></input><br />
            <label for="fname">תעודת זהות 2</label>
            <select></select>

            <input type="submit" value="Submit"></input>
        </div> */}
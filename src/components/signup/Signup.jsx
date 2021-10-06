
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import validator from 'validator';


const style = {
    signupContainer: {
        display: 'flex',
        minHeight: "90vh",
        alignItems: "center"
    },
    paper: {
        padding: "25px",
        width: "240px",
        margin: "0 auto",

    },
    field: {
        marginBottom: "1rem"
    }
}


const Signup = () => {

    const [name, setName] = useState({ name: '', err: false, errMsg: '' })
    const [email, setEmail] = useState({ email: '', err: false, errMsg: '' })
    const [password, setPassword] = useState({ password: '', err: false, errMsg: '' })


    const handleOnChange = (key, value) => {
        if (key === 'name') {
            setName({ name: value, err: false, errMsg: '' })
        } else if (key === 'email') {
            setEmail({ email: value, err: false, errMsg: '' })
        } else {
            setPassword({ password: value, err: false, errMsg: '' })
        }
    }

    const onSubmit = ()=>{
        let formValidated = true;
        let userName = name.name.trim()
        let userPassword = password.password.trim();
        if(!validator.isEmail(email.email)){
           formValidated= false
           setEmail({...email,err:true,errMsg:'Email is not valid'})
        } 
        if(userName.length===0){
            formValidated= false
            setName({...name,err:true,errMsg:'Name is required.'})
        } 
        if(userPassword.length<8){
            formValidated = false
            setPassword({...password,err:true,errMsg:'Password must be atleat of 8 character.'})
        } 
    }

    return (
        <Box sx={style.signupContainer}>
            <Paper elevation={5} sx={style.paper}>

                <Typography align="center" variant="h4" sx={style.field} >Signup</Typography>
                <Box>
                    <TextField sx={style.field} type="text" variant="standard" placeholder="Enter name" fullWidth onChange={(e) => { handleOnChange('name', e.target.value) }} />
                </Box>
                <Box>
                    <TextField sx={style.field} type="text" variant="standard" placeholder="Enter email" fullWidth onChange={(e) => { handleOnChange('email', e.target.value) }} />
                </Box>
                <Box>
                    <TextField sx={style.field} type="password" variant="standard" placeholder="Enter password" fullWidth onChange={(e) => { handleOnChange('password', e.target.value) }} />
                </Box>
                <Grid align="center">
                    <Button type="submit" sx={{ marginBottom: "0.5rem" }} variant="contained" size="large" >Signup</Button>
                </Grid>
                <Typography align="center" variant="subtitle1">Already have an account ?<Link to="/login" >Login</Link></Typography>
            </Paper>

        </Box>
    );
}

export default Signup
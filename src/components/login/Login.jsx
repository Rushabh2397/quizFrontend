
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import {Link} from 'react-router-dom'


const style = {
    loginContainer:{
        display:'flex',
        minHeight:"90vh",
        alignItems:"center"
    },
    paper: {
        padding: "25px",
        width: "240px",
        margin: "0 auto",

    },
    field:{
        marginBottom:"1rem"
    }
}


const Login = () => {

    return (
        <Box sx={style.loginContainer}>
            <Paper elevation={5} sx={style.paper}>

                <Typography align="center" variant="h4" sx={style.field} >Login</Typography>

                <TextField sx={style.field} type="text" variant="standard" placeholder="Enter email" fullWidth />
                <TextField sx={style.field} type="password" variant="standard" placeholder="Enter password" fullWidth />
                <Grid align="center">
                    <Button sx={{marginBottom:"0.5rem"}} variant="contained" size="large" >Login</Button>
                </Grid>
                <Typography align="center" variant="subtitle1">Don't have an account ?<Link to="/signup" >Signup</Link></Typography>
            </Paper>

        </Box>
    );
}

export default Login
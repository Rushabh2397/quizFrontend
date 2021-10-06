import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import { CardContent, Typography, Box } from '@mui/material';
import Sports from './sports.jpg'
import { Link } from 'react-router-dom';

const style = {
    category: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: "3rem"
    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: "200px",
        height: "200px",
        padding: "20px",
        border: "1px solid black",
        borderRadius: "10px"
    },
    color1: {
        background: "#5DFDCB"
    },
    color2: {
        background: "#CE84AD"
    },
    color3: {
        background: "#D1D646"
    }

}

const Home = () => {

    return (
        <Box>
            <Typography align="center" variant="h3" sx={{ marginTop: "2rem" }}>Welcome To Quiz Master</Typography>

            <Box sx={{
                display: 'flex', flexDirection: 'column', minHeight: '70vh', justifyContent: 'center',
                alignItems: 'center'}}>
                <Typography sx={{marginBottom:"1.5rem"}} align="center" variant="h4" >Categories</Typography>
                <Box sx={style.category}>

                    <Box sx={style.card}>
                        <Link to="/rules?category=General-Knowledge">  <Typography variant="h6">General Knowledge</Typography> </Link>
                    </Box>
                    <Box sx={style.card}>

                        <Link to="/rules?category=Computers"> <Typography variant="h6">Computer Science</Typography></Link>
                    </Box>
                    <Box sx={style.card}>
                        <Link to="/rules?category=Books"> <Typography variant="h6">Books</Typography></Link>
                    </Box>

                </Box>
            </Box>
        </Box>

    );
}

export default Home
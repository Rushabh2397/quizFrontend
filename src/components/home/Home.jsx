import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import { CardContent, Typography, Box } from '@mui/material';
import Sports from './sports.jpg'
import { Link, NavLink } from 'react-router-dom';

const style = {
    // category: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     flexWrap: 'wrap',
    //     gap: "3rem"
    // },
    // card: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: "200px",
    //     height: "200px",
    //     padding: "20px",
    //     border: "1px solid black",
    //     borderRadius: "10px"
    // },
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: {
            xs:"300px",
            lg:"400px"
        },
        height: "200px",
        padding: "20px",
        // border: "1px solid black",
        borderRadius: "15px",
        background: "#FFCAB1",
    }

}

const Home = () => {

    return (
        <Box>
            <Typography align="center" variant="h3" sx={{ marginTop: "2rem" }}>Welcome To Quiz Master</Typography>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '70vh',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography sx={{ marginBottom: "1.5rem" }} align="center" variant="h4" >Categories</Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: "3rem",

                }}>

                    <Box sx={style.card} style={{background:'#AE70FA'}}>
                        <NavLink to="/rules?category=General-Knowledge" style={{ textDecoration: "none", listStyle: "none", color: 'black', fontSize: '1.8rem', letterSpacing: '0.2rem' }} to="/rules?category=Books">General Knowledge</NavLink>
                    </Box>
                    <Box sx={style.card} style={{background:'#69A2B0'}}>

                        <NavLink to="/rules?category=Computer" style={{ textDecoration: "none", listStyle: "none", color: 'black', fontSize: '1.8rem', letterSpacing: '0.2rem' }} to="/rules?category=Books"> Computer Science</NavLink>
                    </Box>
                    <Box sx={style.card}>
                        <NavLink to="/rules?category=Books" style={{ textDecoration: "none", listStyle: "none", color: 'black', fontSize: '2rem', letterSpacing: '0.2rem' }} to="/rules?category=Books"> Books</NavLink>
                    </Box>

                </Box>
            </Box>
        </Box>

    );
}

export default Home
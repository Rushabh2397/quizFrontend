import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import { CardContent, Typography } from '@mui/material';
import Sports from './sports.jpg'

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: "90vh",
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
      marginBottom:'1.5rem'
    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${Sports})`,
        width: "250px",
        height: "280px",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginBottom: '1.5rem'
    },
    content: {

        color: 'black',
        fontSize: "3rem"
    }
}

const Home = () => {

    return (
        <Container sx={style.container} >
            <Typography sx={style.title} align="center" variant="h4">Categories</Typography>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', width: "95%" }}>


                <Card sx={style.card}>
                    <CardContent sx={style.content}>
                        Sports
                    </CardContent>
                </Card>

                <Card sx={style.card}>
                    <CardContent sx={style.content}>
                        Sports
                    </CardContent>
                </Card>
                <Card sx={style.card}>
                    <CardContent sx={style.content}>
                        Sports
                    </CardContent>
                </Card>
                <Card sx={style.card}>
                    <CardContent sx={style.content}>
                        Sports
                    </CardContent>
                </Card>
            </div>
        </Container>
    );
}

export default Home
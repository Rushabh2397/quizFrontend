import { Box, Chip, Paper, Typography } from "@mui/material";
import { useState } from "react";

const style = {
    rulesContainer: {
        display: 'flex',
        minHeight: "90vh",
        alignItems: "center"
    },
    paper: {
        padding: "20px",
        // width: "300px",
        margin: "0 auto",

    },
}


const Rules = () => {
    const [diffculty,setDiffculty] = useState()

    return (
        <Box sx={style.rulesContainer}>
            <Paper sx={style.paper} eleveation={5}>
                <Typography variant="h6">Instructions</Typography>
                <Box sx={{ marginBottom: "0.8rem" }}>1. For every right answer 4 marks will be awarded.</Box>
                <Box sx={{ marginBottom: "0.8rem" }}>2. For every wrong answer 1 mark will be dedcucted.</Box>
                <Box sx={{display:'flex',justifyContent:'space-around'}}>
                    <Chip color="primary" label="Easy" variant="outlined" />
                    <Chip color="secondary"  label="Medium" variant="outlined" />
                    <Chip color="warning" label="Diffcult" variant="outlined" />
                </Box>


            </Paper>
        </Box>
    );
}

export default Rules
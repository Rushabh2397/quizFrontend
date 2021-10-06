import { Box, Button, Chip, Paper, Typography } from "@mui/material";
import { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import useMediaQuery from '@mui/material/useMediaQuery';










const Quiz = () => {
    const matches = useMediaQuery('(min-width:1000px)');

    const style = {
        rulesContainer: {
            display: 'flex',
            minHeight: "90vh",
            alignItems: "center"
        },
        paper: {
            padding: "20px",
            width: `${matches ? "50%" :"300px"}`,
            margin: "0 auto",
    
        },
    }

    return (
        <div>
            <Box sx={style.rulesContainer}>

                <Paper sx={style.paper} elevation={5}>
                    <Box></Box>
                    <Typography variant="h6">Q.The novel Of Mice And Men was written by what author ? </Typography>
                    <FormControl component="fieldset">

                        <RadioGroup sx={{ display: "flex", flexDirection:`${matches ? "row":"column"}` }} row aria-label="gender" name="row-radio-buttons-group">
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                          
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                            <FormControlLabel
                                value="disabled"
                                control={<Radio />}
                                label="other"
                            />
                        </RadioGroup>
                    </FormControl>
                    <Box sx={{width:"100%",display:'flex',justifyContent:'flex-end'}}>
                        <Button color="secondary" variant="contained">Next</Button>
                    </Box>

                </Paper>
            </Box>
        </div>

    );
}

export default Quiz
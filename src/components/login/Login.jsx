
import { Box } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';



const Login = () => {

    return (
        <div>
            <Box
             component="form"
            >
                <FormControl>
                    <InputLabel htmlFor="component-simple">Name</InputLabel>
                    <Input id="component-simple" />
                </FormControl>

            </Box>
        </div>
    );
}

export default Login
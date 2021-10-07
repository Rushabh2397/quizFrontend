import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom'



const Navbar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const profileMenu = () => {
        return <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            {/* <MenuItem onClick={handleClose}>Play As Guest</MenuItem> */}
            <Link to="/"><MenuItem onClick={handleClose}>World Leader Board</MenuItem></Link>
            <Link to="/signup"><MenuItem onClick={handleClose}>Signup</MenuItem></Link>
            <Link to="/login"><MenuItem onClick={handleClose}>Login</MenuItem></Link>
        </Menu>
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: 400 }}>
                        Quiz Master
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        onClick={handleClick}
                    >
                        <AccountCircleOutlinedIcon sx={{ fontSize: "2.3rem" }} />
                    </IconButton>

                </Toolbar>
            </AppBar>
            {open && profileMenu()}
        </Box>
    );
}

export default Navbar
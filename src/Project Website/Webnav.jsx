import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

const drawerWidth = 240;
const navItems = [
    { Name: "Home", URL: "Homepage" },
    { Name: "Page", URL: "ShousHome" },
    { Name: "Data", URL: "Data/jsn" },
    { Name: "Color", URL: "Color/Change" },
    { Name: "Taliwind", URL: "Taliwind" },
    { Name: "HomeApi", URL: "HomeApi" },
    { Name: "Weather", URL: "Weather/app" },
    { Name: "Sign In", URL: "sign in" },
    { Name: "Signup", URL: "Signup" },
];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
              
                <strong><span style={{ color: 'black' }}>Your</span> Logo</strong>
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <Link to={item.URL} key={item.Name} style={{ textDecoration: 'none' }}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item.Name} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const ImgDiv = styled(Box)({
        color: "red",
        fontSize: "30px",
        marginLeft: "100px",
    });

    return (
        <Box sx={{ width: "100%", height: "11vh", display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{
                backgroundColor: '#C7C7C7',
                height: "11vh",
                boxShadow: "0px 0px 5px 5px gray",
            }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <ImgDiv
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <strong><span style={{ color: 'black' }}>Your</span> <span style={{ color: 'red' }}> Logo</span></strong>
                    </ImgDiv>
                    <Box sx={{
                        display: { xs: 'none', sm: 'flex' },
                        justifyContent: "center",
                        alignItems: "center",
                        width: "65%",
                        height: "11vh",
                    }}>
                        {navItems.map((item) => (
                            <Link to={item.URL} key={item.Name} style={{ textDecoration: 'none' }}>
                                <Button className='text-black font-black'>
                                    {item.Name}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    <div className='nav-icons-btn'>
                        <Link className='nav-icons-btn-link' to="./Weather/app"><SearchIcon /></Link>
                        <Link className='nav-icons-btn-link' to="./Signup"><PersonIcon /></Link>
                        <Link className='nav-icons-btn-link' to="#"><ShoppingCartIcon /></Link>
                    </div>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;








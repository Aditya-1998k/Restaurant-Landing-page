import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import {
    Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { ShoppingCartRounded } from '@mui/icons-material';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const menuOptions = [
        { text: "Home", path: "/", icon: <HomeIcon /> },
        { text: "About", path: "/about", icon: <InfoIcon /> },
        { text: "Work", path: "/work", icon: <HomeIcon /> },
        { text: "Testimonials", path: "/testimonials", icon: <CommentRoundedIcon /> },
        { text: "Contact", path: "/contact", icon: <PhoneRoundedIcon /> },
        { text: "Cart", path: "/cart", icon: <ShoppingCartRounded /> }
    ];

    return (
        <nav>
            <div className='nav-logo-container'>
                <Link to="/">
                    <img src={Logo} alt='Logo' />
                </Link>
            </div>
            <div className='navbar-links-container'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/work">Work</Link>
                <Link to="/testimonials">Testimonials</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cart">
                    <BsCart2 className='navbar-cart-icon' />
                </Link>
                <button className='primary-button'>Bookings Now</button>
            </div>
            <div className='navbar-menu-container'>
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
                <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpenMenu(false)} onKeyDown={() => setOpenMenu(false)}>
                    <List>
                        {menuOptions.map((item) => (
                            <ListItemButton key={item.text} component={Link} to={item.path}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </nav>
    );
};

export default Navbar;
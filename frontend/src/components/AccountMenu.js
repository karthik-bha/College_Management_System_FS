import React, { useState } from 'react';
import { Box, Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton, Tooltip } from '@mui/material';
import { Settings, Logout } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AccountMenu = () => {
    // State to manage the anchor element for the menu
    const [anchorEl, setAnchorEl] = useState(null);

    // Determine if the menu is open
    const open = Boolean(anchorEl);

    // Retrieve user information from Redux store
    const { currentRole, currentUser } = useSelector(state => state.user);

    // Function to handle opening the menu
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Function to handle closing the menu
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {/* Avatar icon wrapped in a tooltip */}
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        {/* Display user avatar with the first character of their name */}
                        <Avatar sx={{ width: 32, height: 32 }}>
                            {String(currentUser.name).charAt(0)}
                        </Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            {/* Menu component for account settings */}
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: styles.styledPaper, // Apply custom styling to the menu paper
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {/* Menu items */}
                <MenuItem>
                    <Avatar />
                    {/* Link to user profile page */}
                    <Link to={`/${currentRole}/profile`}>
                        Profile
                    </Link>
                </MenuItem>
                {/* Divider to separate profile link from settings and logout */}
                <Divider />
                {/* Settings menu item */}
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    {/* Placeholder link for settings */}
                    <Link to="/settings">
                        Settings
                    </Link>
                </MenuItem>
                {/* Logout menu item */}
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    {/* Link to logout page */}
                    <Link to="/logout">
                        Logout
                    </Link>
                </MenuItem>
            </Menu>
        </>
    );
}

export default AccountMenu;

const styles = {
    styledPaper: {
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        mt: 1.5,
        '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
        },
        '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
        },
    }
}
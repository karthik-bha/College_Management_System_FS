import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button, Typography } from '@mui/material';
import styled from 'styled-components';
import { LightPurpleButton } from '../components/buttonStyles';

//Define the Homepage functional component.
const Homepage = () => {
    return (
        //Render UI elements within a styled container (StyledContainer) with a specified maximum width.
        <StyledContainer maxWidth="100vh">
            {/* Use a Grid container to center its content horizontally and vertically. */}
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} md={8} lg={6}>
                {/* Inside the grid, use a Paper component (StyledPaper) for the main content. */}
                    <StyledPaper elevation={3}>
                    {/* Display a logo (StyledLogo) and a title (StyledTitle) for the homepage. */}
                        <StyledLogo src='https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/1200px-Vellore_Institute_of_Technology_seal_2017.svg.png' 
                            height='80px' width='80px' />
                        <StyledTitle>
                            Welcome to the VIT Portal
                        </StyledTitle>
                        <Typography variant="body1" paragraph alignItems={'center'}>
                            Simplify college management, class organization, add students and faculty.
                            Track attendance, assess performance, and provide feedback, marks, notices, and communicate effortlessly.
                        </Typography>
                        {/* Render login and signup buttons (LightPurpleButton) wrapped 
                        with Link components from React Router DOM. */}
                        <StyledButtonWrapper>
                            <Link to="/choose" style={{ textDecoration: 'none' }}>
                                <LightPurpleButton variant="contained" fullWidth>
                                    Login
                                </LightPurpleButton>
                            </Link>
                            <StyledSignupText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{ color: "#550080", textDecoration: 'none'}}>
                                    Sign up
                                </Link>
                            </StyledSignupText>
                        </StyledButtonWrapper>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

// Define a styled container component (StyledContainer) using 
// styled-components, setting the height to 100vh (viewport height) and adding padding and background image.
const StyledContainer = styled(Container)`
  height: 100vh;
  padding-left: 60px; 
  padding-right: 60px; 
  background-image: url('https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
//   background-size: cover;
`;

const StyledPaper = styled(Box)`
  padding: 35px;
  background-color: rgba(249, 249, 249, 1); /* Adjust the opacity by changing the fourth value */
  border-radius: 20px;
  margin-top: 150px;
  text-align:center;
`;

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  font-family: calibri;
  color: #2c2143;
  margin-bottom: 20px;
  text-align: center; /* Center the title */
`;

const StyledLogo = styled.img`
  margin: 0 auto; /* Center the image horizontally */
  display: block; /* Ensure the image is treated as a block element */
`;

const StyledButtonWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content horizontally */
  gap: 20px;
  margin-top: 20px;
`;

const StyledSignupText = styled(Typography)`
  color: black;
  text-align: center; /* Center the text */
`;

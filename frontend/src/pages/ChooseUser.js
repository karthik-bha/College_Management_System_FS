import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Paper,
  Box,
  Container,
  CircularProgress,
  Backdrop,
  Typography,
} from '@mui/material';
import { AccountCircle, School, Group } from '@mui/icons-material';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/userRelated/userHandle';
import Popup from '../components/Popup';
import { LightPurpleButton } from '../components/buttonStyles';

const ChooseUser = () => {
  const dispatch = useDispatch()
  //Use React Router DOM's useNavigate hook to enable navigation within the application.
  const navigate = useNavigate()
  const password = "zxc"
//Initialize Redux variables using the useSelector hook to extract status, currentUser, and currentRole 
//from the Redux store.
  const { status, currentUser, currentRole } = useSelector(state => state.user);


//Set up state variables using the useState hook for loader, popup visibility, and popup message.
  const [loader, setLoader] = useState(false)
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  //Define a function navigateHandler to navigate to the appropriate login page based on the user's choice.
  const navigateHandler = (user) => {
    
    if (user === "Admin") {
      navigate('/Adminlogin');
    }
    else if (user === "Student") {
      navigate('/Studentlogin');
    }
    else if (user === "Teacher") {
      navigate('/Teacherlogin');
    }
  }
  
//Use the useEffect hook to handle navigation based on the authentication status and current user's role.
  useEffect(() => {
    if (status === 'success' || currentUser !== null) {
      if (currentRole === 'Admin') {
        navigate('/Admin/dashboard');
      }
      else if (currentRole === 'Student') {
        navigate('/Student/dashboard');
      } else if (currentRole === 'Teacher') {
        navigate('/Teacher/dashboard');
      }
    }
    else if (status === 'error') {
      setLoader(false)
      setMessage("Network Error")
      setShowPopup(true)
    }
  }, [status, currentRole, navigate, currentUser]);


  return (
    //Render the UI components within a styled container (StyledContainer) which includes a background image and content.
    <StyledContainer>
      <StyledBackground />
      <StyledContent>
        <StyledLogo src='https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/1200px-Vellore_Institute_of_Technology_seal_2017.svg.png' />
        <StyledSubTitle>
          Choose User:
        </StyledSubTitle>
        {/* Display options for choosing user roles (Admin, Student, Teacher) using styled components (StyledPaper). */}
        <StyledGrid container spacing={3}>
          <Grid item xs={12} md={4}>
          {/* On clicking each option, call navigateHandler to navigate to the respective login page. */}
            <StyledPaper onClick={() => navigateHandler("Admin")}>
              <AccountCircle fontSize="large" />
              <StyledTypography>
                Admin
              </StyledTypography>
              Login as an administrator to access the dashboard to manage app data.
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledPaper onClick={() => navigateHandler("Student")}>
              <School fontSize="large" />
              <StyledTypography>
                Student
              </StyledTypography>
              Login as a student to explore course materials and assignments.
            </StyledPaper>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledPaper onClick={() => navigateHandler("Teacher")}>
              <Group fontSize="large" />
              <StyledTypography>
                Teacher
              </StyledTypography>
              Login as a teacher to create courses, assignments, and track student progress.
            </StyledPaper>
          </Grid>
        </StyledGrid>
      </StyledContent>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        {/* Render a loader (CircularProgress) while waiting for authentication. */}
        <CircularProgress color="inherit" />
        Please Wait
      </Backdrop>
      {/* Display a popup (Popup) in case of a network error. */}
      <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
    </StyledContainer>
  );
};

export default ChooseUser;

//CSS elements for the UI of the page.
const StyledContainer = styled.div`
  position: relative;
  min-height: 100vh;
  
`;

const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.pexels.com/photos/2449364/pexels-photo-2449364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  background-color:rgba(249,249,249,0.9);
  background-size: cover;
  filter: brightness(0.8); /* Adjust brightness to your preference */
`;

const StyledContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 2rem;
`;

const StyledGrid = styled(Grid)`
  margin-top: 2rem;
`;

const StyledPaper = styled(Paper)`
  padding: 2rem;
  text-align: center;
  background-color: #1f1f38;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: #2c2c6c;
    color: white;
    transform: translateY(-10px);
    border-radius:20px;
  }
`;

const StyledTypography = styled.h2`
  margin-bottom: 1rem;
`;

const StyledSubTitle = styled.h2`
  margin-bottom: 2rem;
  font-size: 2rem;
  color: black;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: normal;
  text-align:center;
`;

const StyledLogo = styled.img`
  margin: 0 auto;
  display: block;
  width: 150px; /* Adjust width to your preference */
  height: auto;
  margin-bottom: 2rem;
`;

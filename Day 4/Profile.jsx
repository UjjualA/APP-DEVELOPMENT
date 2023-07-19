import React from 'react';
import { Button } from '@mui/material';
import './Profile.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import image from './3.gif';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const Profile = () => {
  const goBack = () => {
    window.history.back();
  };
  const handleButtonClick = () => {
    alert('Profile Updated');
  };
  return (
    <div>
      <Box
      sx={{
        width: 380,
        height: 380,
        backgroundColor: 'white',
        marginLeft:'540px',
        marginTop:'-360px'
      }}
    >
    <img src={image} alt='jeff' style={{ width: '100%', height: '100%'}}/>
    </Box>
    <br></br>
    <Box
      sx={{
        width: 570,
        height: 300,
        backgroundColor: 'rgb(82, 5, 77)',
        marginBottom:'-320px',
        marginLeft:'435px'
      }}
    ><br></br>
        <AccountCircle sx={{marginLeft:'150px',fontSize:'xxx-large',color: 'white'}} />
        <TextField id="input-with-sx" variant="standard" value={'Ujjual'} label='Name'  InputProps={{sx: {color: 'white',},}}/><br></br><br></br>
        <Badge color="primary" sx={{ backgroundColor: 'white',marginLeft: '160px',marginRight:'10px',width:'28px',marginTop:'12px'}} >
        <MailIcon color="action" />
        </Badge>
        <TextField id="input-with-sx" variant="standard" value={'ujjual18@gmail.com'} label='Email-Id'  InputProps={{sx: {color: 'white',},}}/><br></br><br></br>
        <AddIcCallIcon sx={{marginLeft:'155px',marginRight:'17px',marginTop:'10px',fontSize:'xx-large',color: 'white'}}/>
        <TextField id="input-with-sx" variant="standard" value={'9677655535'} InputProps={{sx: {color: 'white',marginLeft:'-7px'},}}/><br></br><br></br>
        <Button className='button' variant="contained" sx={{ backgroundColor: 'green'}} onClick={handleButtonClick}>Save Changes</Button>
      </Box>
      <div className='but'>
        <Button variant="text" onClick={goBack}>
          <ArrowBackIcon color='primary' />
          Go Back 
        </Button>
      </div>
    </div>
  );
};

export default Profile;
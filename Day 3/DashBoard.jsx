import React from 'react'
import './DashBoard.css';
import { Box } from '@mui/system';
import { Slider, TextField } from '@mui/material';
import { Translate } from '@mui/icons-material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import imagef from './f1.jpg';
import imageff from './f2.avif';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import imagefff from './f3.jpg';
import Typography from "@mui/material/Typography";
import InstagramIcon from '@mui/icons-material/Instagram';
const DashBoard = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
        <div class="leftnav">
        <a class="active" href="#home">Home Page</a>
        <a href="/Profile">Profile</a>
        <a href="/Restaurant">Restaurant</a>
        <a href="/">Logout</a>
        </div>
        <div className='hom'> 
        </div>
        <div>
        <Box className='far1'
      sx={{
        width: 1480,
        height: 280,
        marginLeft:'-20px',
        marginTop:'-110px',

      }}
      >
        <div className='hea'>
          <h1>Find your table for any occasion</h1><br></br>
          <TextField id="input-with-sx" className='dat' variant="standard" type={'date'}  InputProps={{sx: {color: 'black',fontSize:'3.5rem',marginLeft:'2rem'}}}/>
          <Box className='sr'>
      <FormControl className='formss'>
        <InputLabel id="demo-simple-select-label" sx={{backgroundColor:'white',color:'red'}}>Time</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Time"
          onChange={handleChange}
        >
          <MenuItem value={1}>9:00AM - 10:00AM</MenuItem>
          <MenuItem value={2}>10:00AM - 11:00AM</MenuItem>
          <MenuItem value={3}>11:00AM - 12:00AM</MenuItem>
          <MenuItem value={4}>12:00AM - 1:00PM</MenuItem>
          <MenuItem value={5}>1:00PM - 2:00PM</MenuItem>
          <MenuItem value={6}>2:00PM - 3:00PM</MenuItem>
          <MenuItem value={7}>3:00PM - 4:00PM</MenuItem>
          <MenuItem value={8}>4:00PM - 5:00PM</MenuItem>
          <MenuItem value={9}>5:00PM - 6:00PM</MenuItem>
        </Select>
      </FormControl>
        <TextField id="input-with-sx" className='memb' variant="standard" sx={{backgroundColor:'whitesmoke'}} type={'number'} label={'No.Of.Members'} required/>
    </Box>
        </div><br></br><br></br>
        <div className='boxe1'>
        <input type='text' className='box1' style={{width:'200px',height:'30px',color:"white",borderRadius:'20px'}}></input>
        <Button variant="contained" className='but2' >
          <SearchIcon/>
          Search
          </Button>
          </div>
      </Box><br></br><br></br>
      </div><br></br>
      <div>
      <h2 style={{ textShadow: '2px 2px 4px #000000',marginLeft:'-10px'}} className="heads">OFFERS</h2><br></br>
      <Box
      sx={{
        width: 1460,
        height: 440,
      }}  
      >
      <img src={imagef} style={{ width: '390px', height: '440px',marginLeft:'70px'}}/>
      <img src={imageff} style={{ width: '390px', height: '440px',marginLeft:'70px'}}/>
      <img src={imagefff} style={{ width: '390px', height: '440px',marginLeft:'70px'}}/>

      </Box>
      </div><br></br><br></br>
      <div>
      <footer class="footer">
  <div class="footer-content">
    <p>© 2023 Your Company. All rights reserved.</p>
    <ul class="footer-links">
      <li><a href="#"></a><TwitterIcon/></li>
      <li><a href="#"></a><InstagramIcon/></li>
      <li><a href="#"></a><LinkedInIcon/></li>
      <li><a href="#"></a><FacebookIcon/></li>
    </ul>
  </div>
</footer>

      </div>
      </div>
      
  )
};

export default DashBoard;

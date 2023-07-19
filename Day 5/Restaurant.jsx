import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import './Restaurant.css';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import image from './mc.webp';
import image1 from './kfcc.jpg';
import image2 from './dominos.jpg';
import image3 from './taco.jpg';
import image4 from './burger.webp';
import image5 from './star.jpeg';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

 const Restaurant = () => {
        const goBack = () => {
          window.history.back();
};
  return (
    <div>
    <div className='pics'>
    <Card variant="outlined" sx={{ width:'400px',height:'550px',marginLeft:'70px'}} className='card'>
      <Typography level="h1">McDonald's</Typography>
      <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
        Banglore 
      </Typography>
      <img src={image} style={{ width: '390px', height: '390px',marginLeft:'7px'}}/>
      <Link to='/Reservation'>
      <Button className='button' variant="contained" sx={{ backgroundColor: 'green',width:'100px',marginLeft:'-50px'}}>CHECK</Button><br></br><VerifiedOutlinedIcon/>
      </Link>
    </Card>
    
      <Card variant="outlined" sx={{ width:'400px',height:'550px',marginLeft:'150px'}} className='card'>
      <Typography level="h1">K F C</Typography>
      <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
        Banglore 
      </Typography>
      <img src={image1} style={{ width: '390px', height: '390px',marginLeft:'7px'}}/>
      <Link to='/Reservation'>
      <Button className='button' variant="contained" sx={{ backgroundColor: 'green',width:'100px',marginLeft:'-50px'}}>CHECK</Button><br></br><VerifiedOutlinedIcon/>
      </Link>
    </Card>

      {/* <Button className='button' variant="contained" sx={{ backgroundColor: 'green',marginTop:'-30px',marginLeft:'10px'}}>Reserve</Button>   */}
      <Card variant="outlined" sx={{ width:'400px',height:'550px',marginLeft:'150px'}} className='card'>
      <Typography level="h1">Domino's Pizza</Typography>
      <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
        Banglore 
      </Typography>
      <img src={image2} style={{ width: '390px', height: '390px',marginLeft:'7px'}}/>
      <Link to='/Reservation'>
      <Button className='button' variant="contained" sx={{ backgroundColor: 'green',width:'100px',marginLeft:'-50px'}}>CHECK</Button><br></br><VerifiedOutlinedIcon/>
      </Link>
    </Card>

    <Card variant="outlined" sx={{ width:'400px',height:'550px',marginLeft:'150px'}} className='card'>
      <Typography level="h1">Taco Bell</Typography>
      <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
        Banglore 
      </Typography>
      <img src={image3} style={{ width: '390px', height: '360px',marginLeft:'7px'}}/>
      <Link to='/Reservation'>
      <Button className='button' variant="contained" sx={{ backgroundColor: 'green',width:'100px',marginLeft:'-50px'}}>CHECK</Button><br></br><VerifiedOutlinedIcon/>
      </Link>
    </Card>

    <Card variant="outlined" sx={{ width:'400px',height:'550px',marginLeft:'150px'}} className='card'>
      <Typography level="h1">Burger King</Typography>
      <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
        Banglore 
      </Typography>
      <img src={image4} style={{ width: '390px', height: '390px',marginLeft:'7px'}}/>
      <Link to='/Reservation'>
      <Button className='button' variant="contained" sx={{ backgroundColor: 'green',width:'100px',marginLeft:'-50px'}}>CHECK</Button><br></br><VerifiedOutlinedIcon/>
      </Link>
    </Card>

    <Card variant="outlined" sx={{ width:'400px',height:'550px',marginLeft:'150px'}} className='card'>
      <Typography level="h1">StarBucks</Typography>
      <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
        Banglore 
      </Typography>
      <img src={image5} style={{ width: '390px', height: '420px',marginLeft:'7px'}}/>
      <Link to='/Reservation'>
      <Button className='button' variant="contained" sx={{ backgroundColor: 'green',width:'100px',marginLeft:'-50px'}}>CHECK</Button><br></br><VerifiedOutlinedIcon/>
      </Link>
    </Card>
    </div>
    <div className='bubt'>
    <Button variant="text" onClick={goBack}>
    <ArrowBackIcon color='primary' />
          Go Back
    </Button>
    </div>
    
    </div>

  );
};

export default Restaurant;
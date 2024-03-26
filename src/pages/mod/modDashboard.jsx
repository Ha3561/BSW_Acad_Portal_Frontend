import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Querylist from '../../components/querylist';
import Attendancelist from '../../components/attendancelist';
import Oppurtunitylist from '../../components/opplist';
import PrimarySearchAppBar from '../../components/appbar';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function ModDashboard() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div style={{width:"100vw",height:"max-Content"}}>
      <PrimarySearchAppBar/>
    <Box sx={{ bgcolor: 'background.paper', width: "100%" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Mod action awaited" {...a11yProps(0)} />
          <Tab label="Ongoing activities" {...a11yProps(1)} />
          <Tab label="Past activities" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <Box display="flex" flexDirection={"column"}  width="100%"  sx={{borderRadius:"20px",bgcolor:"#f2f0f5",py:"30px",mb:"30px"}}>
       
        <Querylist mode={"moderator"}/>
     </Box>
        <Box display="flex" flexDirection={"column"}  width="100%"  sx={{borderRadius:"20px",bgcolor:"#f2f0f5",py:"30px",mb:"30px"}}>
       
        <Attendancelist mode={"moderator"}/>
     </Box>
         
         
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <Box display="flex" flexDirection={"column"}  width="100%"  sx={{borderRadius:"20px",bgcolor:"#f2f0f5",py:"30px",mb:"30px"}}>
       
       <Querylist mode={"moderator"}/>
    </Box>
    <Box display="flex" flexDirection={"column"}  width="100%"  sx={{borderRadius:"20px",bgcolor:"#f2f0f5",py:"30px",mb:"30px"}}>
       
    <Oppurtunitylist mode={"moderator"}/>
    </Box>
       
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <Box display="flex" flexDirection={"column"}  width="100%"  sx={{borderRadius:"20px",bgcolor:"#f2f0f5",py:"30px",mb:"30px"}}>
       
       <Querylist mode={"moderator"}/>
    </Box>
    <Box display="flex" flexDirection={"column"}  width="100%"  sx={{borderRadius:"20px",bgcolor:"#f2f0f5",py:"30px",mb:"30px"}}>
       
    <Oppurtunitylist mode={"moderator"}/>
    </Box>
    <Box display="flex" flexDirection={"column"}  width="100%"  sx={{borderRadius:"20px",bgcolor:"#f2f0f5",py:"30px",mb:"30px"}}>
       
    <Attendancelist mode={"moderator"}/>
    </Box>
        
        </TabPanel>
      </SwipeableViews>
    </Box></div>
  );
}




import React, {useEffect} from 'react';
import {Box, useMediaQuery, useTheme} from "@material-ui/core"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Sections from "./components/Sections"
import BottomSection from "./components/BottomSection"

import HeaderSmall from "./Responsive/HeaderSmall"
import HeroSmall from "./Responsive/HeroSmall"
import SmallBottomSection from "./Responsive/SmallBottomSection"
import SectionSmall from "./Responsive/SectionSmall"


function App() {  
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  useEffect(() => console.log(matches), [matches])

  return (
    <Box style={{
      display: 'flex',
      flexDirection: "column",
      alignItems: "center",
      width: '100%',
    }}>
      {matches ? 
      <Box>
        <HeaderSmall />
        <HeroSmall />
        <SectionSmall />
        <SmallBottomSection />
      </Box> : (
        <Box>
          <Header />
          <Hero />
          <Sections />
          <BottomSection />
        </Box>
      )
      
    }
    </Box>
  );
}

export default App;

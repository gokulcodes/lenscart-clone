import React from  "react";
import {Box, Typography, Accordion, AccordionSummary, AccordionDetails} from "@material-ui/core"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function BottomSection(){
    return (
        <Box style={{backgroundColor: '#27394e', color: '#18cfa8'}}>
            <Box style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: '95%',
                marginLeft: '2%'
            }}>
                <Typography variant="h6" style={{fontWeight: 'bold', marginTop: 40}}>Eyeglasses, Sunglasses and Contact Lenses.</Typography>
            </Box>

            <Box style={{display: 'flex', flexDirection: 'row', alignItems: "flex-start", justifyContent:'space-around', width: '80%'}}>
            <Accordion>
        <AccordionSummary
        style={{background: 'transparent'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>More about </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Sunglasses help protect the eyes from the damaging UV rays of the sun and, today, they have become an essential fashion accessory too. The classic styles of shades never go out of fashion as they are reiterated with each passing trend to suit one’s contemporary style sensibility. With different combinations of frame and lens colours, sunglasses appeal to all ages irrespective of gender. Luxury eyewear brands such as Linda Farrow and Tom Ford, among others have an excellent collection of aviator-shaped and cat-eye goggles that go an extra mile to create style and provide luxury. Vogue, Tommy Hilfiger, French Connection, Ray-Ban, John Jacobs and Vincent Chase, on the other hand, have plenty of sunglasses for women as well in various elegant colours and chic styles.
Ray-Ban goggles are popular for their timeless frame designs such as the aviator-shaped, wayfarer-shaped and browline styles. These shades are available in plenty of colours on the frames and lenses that would go with any modern outfit effortlessly. Brands such as Carrera and Calvin Klein, among several others have excellent variations of the classic aviator-shaped and wayfarer-shaped goggles with sporty and suave lens colours. Sunglasses for men are available from the best brands such as Hugo Boss, Oakley and John Jacobs, among others, and are ideal for various occasions.

Popular Sunglasses Brands- Ray Ban Sunglasses, Oakley Sunglasses, Carrera Sunglasses, IDEE Sunglasses
          </Typography>
        </AccordionDetails>
      </Accordion>
            </Box>


            <Box style={{display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: 'center', width: '100%'}}>
                <Typography variant="h6" style={{margin: 40}}>FOLLOW US</Typography>
                <Box style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <FacebookIcon />
                    <PinterestIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                </Box>
            </Box>

            <Box style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                padding: 20,
                border: '1px solid lightgrey',
                marginBottom: 20,
            }}>
                   
                    <Typography variant="h2" style={{fontSize: 20}}>All Rights Reserved</Typography>
            </Box>
        </Box>
    )
}

export default BottomSection
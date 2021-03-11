import React from  "react";
import {Box, Typography, Accordion, AccordionSummary, AccordionDetails} from "@material-ui/core"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function BottomSection(){
    return (
        <Box>
            <Box style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                width: '95%',
                marginLeft: '2%'
            }}>
                <Typography variant="h6" style={{fontWeight: 'bold', marginTop: 40}}>Buy The Best Eyewear From Lenskart</Typography>
                <Typography variant="h6" style={{marginTop: 20}}>
                Lenskart is the leading e-commerce portal for eyewear in India. It has revolutionised the eyewear industry in the country with its omni-channel approach. From an ever-growing number of offline stores across major cities in the country to innovative integration of technology while purchasing online, Lenskart caters to every customer with several deals and offers.
                </Typography>
                <Typography variant="h6" style={{marginTop: 20}}>
                A one-stop online solution for purchasing eyewear and its accessories, Lenskart delivers them right at your doorstep with convenient methods of payment. Sunglasses as well as eyeglasses are available for men and women in a diverse array of styles and trendy colours. If you want to try out contact lenses, pick the ones of your choice from the extensive variety of coloured contact lenses from our online store.
                </Typography>
            </Box>

            <Box style={{display: 'flex', flexDirection: 'row', alignItems: "flex-start", justifyContent:'space-around'}}>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>SUNGLASSES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Sunglasses help protect the eyes from the damaging UV rays of the sun and, today, they have become an essential fashion accessory too. The classic styles of shades never go out of fashion as they are reiterated with each passing trend to suit one’s contemporary style sensibility. With different combinations of frame and lens colours, sunglasses appeal to all ages irrespective of gender. Luxury eyewear brands such as Linda Farrow and Tom Ford, among others have an excellent collection of aviator-shaped and cat-eye goggles that go an extra mile to create style and provide luxury. Vogue, Tommy Hilfiger, French Connection, Ray-Ban, John Jacobs and Vincent Chase, on the other hand, have plenty of sunglasses for women as well in various elegant colours and chic styles.
Ray-Ban goggles are popular for their timeless frame designs such as the aviator-shaped, wayfarer-shaped and browline styles. These shades are available in plenty of colours on the frames and lenses that would go with any modern outfit effortlessly. Brands such as Carrera and Calvin Klein, among several others have excellent variations of the classic aviator-shaped and wayfarer-shaped goggles with sporty and suave lens colours. Sunglasses for men are available from the best brands such as Hugo Boss, Oakley and John Jacobs, among others, and are ideal for various occasions.

Popular Sunglasses Brands- Ray Ban Sunglasses, Oakley Sunglasses, Carrera Sunglasses, IDEE Sunglasses
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>EYEGLASSES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Sunglasses help protect the eyes from the damaging UV rays of the sun and, today, they have become an essential fashion accessory too. The classic styles of shades never go out of fashion as they are reiterated with each passing trend to suit one’s contemporary style sensibility. With different combinations of frame and lens colours, sunglasses appeal to all ages irrespective of gender. Luxury eyewear brands such as Linda Farrow and Tom Ford, among others have an excellent collection of aviator-shaped and cat-eye goggles that go an extra mile to create style and provide luxury. Vogue, Tommy Hilfiger, French Connection, Ray-Ban, John Jacobs and Vincent Chase, on the other hand, have plenty of sunglasses for women as well in various elegant colours and chic styles.
Ray-Ban goggles are popular for their timeless frame designs such as the aviator-shaped, wayfarer-shaped and browline styles. These shades are available in plenty of colours on the frames and lenses that would go with any modern outfit effortlessly. Brands such as Carrera and Calvin Klein, among several others have excellent variations of the classic aviator-shaped and wayfarer-shaped goggles with sporty and suave lens colours. Sunglasses for men are available from the best brands such as Hugo Boss, Oakley and John Jacobs, among others, and are ideal for various occasions.

Popular Sunglasses Brands- Ray Ban Sunglasses, Oakley Sunglasses, Carrera Sunglasses, IDEE Sunglasses
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>CONTACT LENSES</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lenskart has various types of contact lenses. Brands such as Aqualens, Bausch & Lomb, Johnson & Johnson, Acuvue, Alcon, and Purevision, among others have yearly, monthly, 2-weekly, and daily disposable contact lenses. Specially designed toric contact lenses are also available from these brands.
Coloured contact lenses are available with and without power, and some of them have UV protection as well. The unique colours that you could try are amethyst, hazel, green, turquoise, blue, brown, and grey, which look quite stylish. Made from the best materials that allow ample oxygen supply to the eyes, these contact lenses sit perfectly on the eyes and can be worn anywhere.

Lenskart also offers a wide range of contact lens accessories. To clean your contacts, you can get the best contact lens solutions from our online store, which are easy to use and effective in keeping your eyes healthy.

Popular Contact Lenses Brands- Bausch & Lomb Contact Lenses, Ciba Vision Contact Lenses, Johnson & Johnson Contact Lenses

Contact Lenses by Type- Monthly Disposable, Daily Disposable, Toric Contact Lenses

Lenses Directory
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
                <Typography variant="h6" style={{margin: 40}}>Download Lenskart App to buy Eyeglasses, Sunglasses and Contact Lenses.</Typography>
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
                   
                    <Typography variant="h2" style={{fontSize: 20}}>STORE LOCATOR</Typography>
                    <Typography variant="h2" style={{fontSize: 20}}>FAQ</Typography>
                    <Typography variant="h2" style={{fontSize: 20}}>ENTER MY POWER</Typography>
                    <Typography variant="h2" style={{fontSize: 20}}>BUYING GUIDE</Typography>
                    <Typography variant="h2" style={{fontSize: 20}}>FRAME SIZE</Typography>
            </Box>
            <Box style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                padding: 20,
                marginBottom: 20,
            }}>
                   
                    <Typography variant="h2" style={{fontSize: 20}}>We are Hiring</Typography>
                    <Typography variant="h2" style={{fontSize: 20}}>Refer & Earn</Typography>
                    <Typography variant="h2" style={{fontSize: 20}}>About Us</Typography>
                    <Typography variant="h2" style={{fontSize: 20}}>T&C</Typography>
                    <Typography variant="h2" style={{fontSize: 20}}>Site Map</Typography>
                    <Typography variant="h2" style={{fontSize: 20}}>Disclaimer</Typography>
                    <Typography variant="h2" style={{fontSize: 20}}>Privacy</Typography>
                    <Typography variant="h2" style={{fontSize: 20}}>Lenskart Coupons</Typography>
            </Box>

            <Box style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginLeft: 30,
                marginBottom: 10,
            }}>
                   
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20, fontWeight: 'bold'}}>Eyeglasses</Typography>
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20}}>Free Frame</Typography>
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20}}>Ray-Ban</Typography>
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20}}>Vincent</Typography>
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20}}>ChaseJohn</Typography>
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20}}>JacobsFull</Typography>
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20}}>RimHalf</Typography>
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20}}>RimRim</Typography>
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20}}>LessCat</Typography>
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20}}>EyeEye</Typography>
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20}}>Ray BanOakleyJohn</Typography>
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20}}>ChaseVogueAviator</Typography>
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20}}>StyleWayfarer</Typography>
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20}}>StyleEyewear</Typography>
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20}}>StyleEyewear</Typography>
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20}}>Accessories</Typography>
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20}}>Sunglasses</Typography>
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20}}>Goggles</Typography>
            </Box>

            <Box style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginLeft: 30,
                marginBottom: 20,
            }}>
                   
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20, fontWeight: 'bold'}}>Contact Lenses</Typography>
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20}}>LensesBausch  and lombColour</Typography>
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20}}>lensesDaily</Typography>
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20}}>disposableMonthly</Typography>
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20}}>disposableToric</Typography>
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20}}>lensesJohnson</Typography>
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20}}>johnsonCooper</Typography>
                    <Typography variant="h5" style={{fontSize: 12, marginRight: 20}}>Sitemap XML</Typography>
            </Box>
        </Box>
    )
}

export default BottomSection
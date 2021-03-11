import React from "react";
import {Box, Typography, Button} from '@material-ui/core'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import {Carousel} from "react-responsive-carousel"

function Hero (){
    return (
        <Box>
                <Box style={{height: '20vh'}}>
            <Carousel autoPlay infiniteLoop>
                <div>
                    <img src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Spring50Cashback_Appbanner_14thMarch_10thMARCH.jpg" alt="banner1" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/BESTSELLEREYEGLASSES_Mobileapp_HPSliderBanner_20thFEB21.jpg" alt="banner1" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/HP_App_Slider_600X357_24thFeb21.jpg" alt="banner1" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                </Carousel>
            </Box>


            <Box style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: '50%',
                padding: 10,
                background: '#fff5e4',
                marginBottom: 20,
            }}>
                   
                    <Typography variant="h2" style={{fontSize: 20}}>We are here to serve</Typography>
                    <Typography variant="h2" style={{fontSize: 20}}>Lenskart is now delivering across India</Typography>
                <Button>Know more</Button>
            </Box>
            <Box>
                <img src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/RevBannDesktopSliderBanner_1stMaarrch21.jpg" alt="banner1" />
            </Box>
            <Box style={{marginBottom: 20}}>
                <img src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/SpringStyles_TrendingShape_Desk_belowsl_8thMar21.jpg" alt="banner1" />
            </Box>
            <Box style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: '5%'}}>
                <Typography variant="h1" style={{fontSize: 36, margin: 20, fontWeight: 500}}>Style Guides</Typography>
                <Box style={{
                    display: "flex",
                    flexDirection: 'column',
                    alignItems: "center",
                    marginBottom: 20
                }}>
                    <img src="https://static1.lenskart.com/media/desktop/img/Feb21/blu.jpg" alt="banner1" style={{marginTop: 20}}/>
                    <img src="https://static1.lenskart.com/media/desktop/img/Feb21/cl.jpg" alt="banner1" />
                </Box>
                <Box style={{
                    display: "flex",
                    flexDirection: 'column',
                    alignItems: "center",
                    marginBottom: 20

                }}>
                    <img src="https://static1.lenskart.com/media/desktop/img/Feb21/blu.jpg" alt="banner1" style={{marginTop: 20}}/>
                    <img src="https://static1.lenskart.com/media/desktop/img/Feb21/cl.jpg" alt="banner1" />
                </Box>
            </Box>
            <Box style={{marginBottom: 20}}>
                <img src="https://static1.lenskart.com/media/desktop/img/Mar21/Hall-of-Fame_1912x3601.jpg" alt="banner1" />
            </Box>
        </Box>
    )
}

export default Hero
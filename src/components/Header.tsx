import React from "react";
import { Box, Typography, TextField } from "@material-ui/core"

function Header(){
    return (
        <Box style={{width: "94%", marginLeft: "4%"}}>
            <Box style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
                marginTop: 20,
            }}>
                <Box style={{
                    display: 'flex',
                    flexDirection: "row"
                }}>
                    <Typography variant="h6" style={{marginRight: 20, fontSize: 14, textTransform: "uppercase"}}>Try in 3D</Typography>
                    <Typography variant="h6" style={{marginRight: 20, fontSize: 14, textTransform: "uppercase"}}>Store Locator</Typography>
                    <Typography variant="h6" style={{marginRight: 20, fontSize: 14, textTransform: "uppercase"}}>Quality</Typography>
                    <Typography variant="h6" style={{marginRight: 20, fontSize: 14, textTransform: "uppercase"}}>USA</Typography>
                    <Typography variant="h6" style={{marginRight: 20, fontSize: 14, textTransform: "uppercase"}}>Singapore</Typography>
                    <Typography variant="h6" style={{marginRight: 20, fontSize: 14, textTransform: "uppercase"}}>UAE</Typography>
                    <Typography variant="h6" style={{marginRight: 20, fontSize: 14, textTransform: "uppercase"}}>John Jacobs</Typography>
                    <Typography variant="h6" style={{marginRight: 20, fontSize: 14, textTransform: "uppercase"}}>Franchise Enquire</Typography>
                    <Typography variant="h6" style={{marginRight: 20, fontSize: 14, textTransform: "uppercase"}}>Cobrowsing</Typography>
                </Box>
                <Box style={{
                    display: 'flex',
                    flexDirection: "row"
                }}>
                    <Typography variant="h6" style={{fontSize: 14}}>Contact us</Typography>

                </Box>
            </Box>


            <Box style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10
            }}>
                    <img src="https://static.lenskart.com/media/mobile/images/lkLogo.svg" alt="logo"/>
                    <TextField 
                    id="standard-basic" 
                    InputLabelProps={{
                        shrink: true,
                        style: {
                            marginTop: 20,
                            marginLeft: 20
                        }
                      }}
                    label="What are you looking for?" 
                    disabled
                    InputProps={{disableUnderline: true}}
                    style={{
                        width: "60%",
                        border: '1px solid grey'
                    }}
                    />
                    <Box style={{
                    display: 'flex',
                    flexDirection: "row"
                }}>
                    <Typography variant="h6" style={{marginRight: 20, fontSize: 14, textTransform: "uppercase"}}>Signup/Signin</Typography>
                    <Typography variant="h6" style={{marginRight: 20, fontSize: 14, textTransform: "uppercase"}}>Track Order</Typography>
                    <Typography variant="h6" style={{marginRight: 20, fontSize: 14, textTransform: "uppercase"}}>Shortlist</Typography>
                    <Typography variant="h6" style={{marginRight: 20, fontSize: 14, textTransform: "uppercase"}}>Cart</Typography>
                </Box>
            </Box>

            
            <Box style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
                background: '#ededed',
                marginBottom: 20,
            }}>
                    <Box style={{
                    display: 'flex',
                    flexDirection: "row"
                }}>
                    <Typography variant="h6" style={{marginRight: 40, fontSize: 14, textTransform: "uppercase"}}>Eyeglass</Typography>
                    <Typography variant="h6" style={{marginRight: 40, fontSize: 14, textTransform: "uppercase"}}>Computer glasses</Typography>
                    <Typography variant="h6" style={{marginRight: 40, fontSize: 14, textTransform: "uppercase"}}>Kids Glass</Typography>
                    <Typography variant="h6" style={{marginRight: 40, fontSize: 14, textTransform: "uppercase"}}>Contact lenses</Typography>
                    <Typography variant="h6" style={{marginRight: 40, fontSize: 14, textTransform: "uppercase"}}>Sunglasses</Typography>
                    <Typography variant="h6" style={{marginRight: 40, fontSize: 14, textTransform: "uppercase"}}>Home eye-test with total</Typography>
                    <Typography variant="h6" style={{fontSize: 14, textTransform: "uppercase"}}>Store Locator</Typography>
                </Box>
                <Box style={{
                    display: 'flex',
                    flexDirection: "row",
                    alignItems: 'center',
                    marginRight: 200
                }}>
                    <img src="https://static.lenskart.com/media/desktop/img/menu/icon_try_on.svg" alt="logo"/>
                    <img src="https://static.lenskart.com/media/desktop/img/menu/blu-icon.svg" alt="logo"/>
                    <img src="https://static.lenskart.com/media/mobile/images/lkLogo.svg" alt="logo"/>

                </Box>
            </Box>
            <Box style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10
            }}>
               <Box style={{
                   display: 'flex',
                   flexDirection: "column",
                   justifyContent: "center",
                   alignItems: "center",
                   padding: 40,
                   marginRight: 10,
                   background: '#fafafa',
               }}>
               <img src="https://static1.lenskart.com/media/desktop/img/14-June-20/eyeicon.jpg" alt="logo" width={300} />
               <Typography variant="h6" style={{marginTop: 20}}>Computer glasses</Typography>
                   
                </Box> 
                <Box style={{
                   display: 'flex',
                   flexDirection: "column",
                   justifyContent: "center",
                   alignItems: "center",
                   padding: 40,
                   marginRight: 10,
                   background: '#fafafa',
               }}>
               <img src="https://static1.lenskart.com/media/desktop/img/14-June-20/sunicon.jpg" alt="logo" width={300} />
               <Typography variant="h6" style={{marginTop: 20}}>Sunglasses</Typography>
                   
                </Box> 
                
                <Box style={{
                   display: 'flex',
                   flexDirection: "column",
                   justifyContent: "center",
                   alignItems: "center",
                   padding: 40,
                   marginRight: 10,
                   background: '#fafafa',
               }}>
               <img src="https://static1.lenskart.com/media/desktop/img/14-June-20/phonepcicon.jpg" alt="logo" width={300} />
               <Typography variant="h6" style={{marginTop: 20}}>Blue O computer glasses</Typography>
                   
                </Box> 
                <Box style={{
                   display: 'flex',
                   flexDirection: "column",
                   justifyContent: "center",
                   alignItems: "center",
                   padding: 40,
                   marginRight: 10,
                   background: '#fafafa',
               }}>
               <img src="https://static1.lenskart.com/media/desktop/img/14-June-20/clicon.jpg" alt="logo" width={300} />
               <Typography variant="h6" style={{marginTop: 20}}>Contact Glasses</Typography>
                   
                </Box> 
                <Box style={{
                   display: 'flex',
                   flexDirection: "column",
                   justifyContent: "center",
                   alignItems: "center",
                   padding: 40,
                   marginRight: 10,
                   background: '#fafafa',
               }}>
               <img src="https://static1.lenskart.com/media/desktop/img/14-June-20/thinoptics-icon.jpg" alt="logo" width={300} />
               <Typography variant="h6" style={{marginTop: 20}}>Reading  glasses</Typography>
                   
                </Box> 
            </Box>

        </Box>
    )
}

export default Header

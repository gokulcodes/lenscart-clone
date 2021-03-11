import React from "react";
import {Box} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function HeaderSmall(){
    const classes = useStyles();

    return (
        <Box style={{width: "100%"}}>
            <AppBar position="fixed" style={{width: '100%', background: 'white'}}>
            <Toolbar>
                <Box style={{display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', width: "100%"}}>
                    <Box style={{display: 'flex', flexDirection:'row', alignItems: 'center'}}>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon style={{color: 'black'}} />
                        </IconButton>
                        <img src="https://static.lenskart.com/media/mobile/images/lkLogo.svg" alt="logo"/>
                        <img src="https://static.lenskart.com/media/mobile/images/phone_number.svg" alt="logo"/>
                    </Box>
                    <Box style={{display: 'flex', flexDirection:'row', alignItems: 'center'}}>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <FavoriteIcon style={{color: 'black'}} />
                        </IconButton>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <SearchIcon style={{color: 'black'}} />
                        </IconButton>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <ShoppingCartIcon style={{color: 'black'}} />
                        </IconButton>
                    </Box>
                </Box>
            </Toolbar>
            </AppBar>
            {/* <Box style={{
                marginTop: '20%',
                width: '100%',
                display: "flex",
                flexDirection: 'row'
            }}>
                <Box style={{
                    backgroundColor: '#18cfa8',
                    paddingTop: 10,
                    paddingBottom: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: "center",
                    paddingLeft: 20,
                    paddingRight: 20,
                    width: '100%',
                    color: 'white',
                    marginRight: 20
                }}>
                    <Typography variant="h6">Book Eye-Test</Typography>
                </Box>
                <Box style={{
                    backgroundColor: '#18cfa8',
                    paddingTop: 10,
                    paddingBottom: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: "center",
                    paddingLeft: 20,
                    paddingRight: 20,
                    color: 'white'
                }}>
                    <Typography variant="h6">Loading</Typography>
                </Box>
            </Box> */}

            <Box style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: '100vw',
                marginLeft: '20%',
                marginBottom: 10,
                marginTop: '5%'
            }}>
               <Box style={{
                   display: 'flex',
                   flexDirection: "column",
                   justifyContent: "center",
                   alignItems: "center",
                   marginRight: 10,
                   background: '#fafafa',
               }}>
               <img src="https://static1.lenskart.com/media/mobile/img/frameSize.png" alt="logo" width={100} />
                   
                </Box> 
                <Box style={{
                   display: 'flex',
                   flexDirection: "column",
                   justifyContent: "center",
                   alignItems: "center",
                   marginRight: 10,
                   background: '#fafafa',
               }}>
               <img src="https://static1.lenskart.com/media/mobile/img/3DTryOn.png" alt="logo" width={100} />
                   
                </Box> 
                
                <Box style={{
                   display: 'flex',
                   flexDirection: "column",
                   justifyContent: "center",
                   marginRight: 10,
                   background: '#fafafa',
               }}>
               <img src="https://static5.lenskart.com/images/cust_mailer/May-26/HEC-2x.jpg" alt="logo" width={100} />
                   
                </Box> 
                <Box style={{
                   display: 'flex',
                   flexDirection: "column",
                   justifyContent: "center",
                   alignItems: "center",
                   marginRight: 10,
                   background: '#fafafa',
               }}>
               <img src="https://static1.lenskart.com/media/desktop/img/Sep20/computer.jpg" alt="logo" width={100} />
                   
                </Box> 
            </Box>
        </Box>
    )
}
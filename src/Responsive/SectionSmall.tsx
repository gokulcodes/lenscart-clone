import React from 'react';
import {Box, Typography} from "@material-ui/core"
import ReactPlayer from 'react-player'

function Sections(){
    return (
        <Box>
            <Box style={{
                display:'flex',
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: 'auto',
                backgroundColor: "#e5e5e5",
                marginBottom: 30
            }}>
                <img src="https://static1.lenskart.com/media/desktop/img/HP_Desktop_Blog-banner_2.jpg" alt="banner1" />
                <ReactPlayer 
                style={{
                    borderRadius: 30,
                    margin: 40,
                    width: 60
                }}
                url="https://youtu.be/OLhSi98BRSQ?list=TLGGuzzOf8PBH1YxMTAzMjAyMQ" 
                />
                <img src="https://static1.lenskart.com/media/desktop/img/HP_Desktop_Blog-banner_11.jpg" alt="banner1" />
            </Box>
            <Box style={{
                display:'flex',
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                height: 'auto',
                backgroundColor: "#f2f8ff"
            }}>
                <ReactPlayer 
                style={{
                    borderRadius: 30,
                    margin: 40,
                    width: 60
                }}
                url="https://youtu.be/RGlbM7CVSjQ?list=TLGG2rhosZmupkExMTAzMjAyMQ" 
                />
                <img src="https://static1.lenskart.com/media/desktop/img/Dec20/24-Dec/hec2.jpg" alt="banner1" width={600} />
            </Box>

            <Box style={{
                display: 'flex',
                border: '1px solid lightgrey',
                padding: 20,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%',
            }}>
                <Typography variant="h5">
                Need Assistance in Buying? Talk to our Eyewear Expert. Give us a Call at : 1800-111-111
                </Typography>
            </Box>

            {/* <Box>
                <Box style={{display: 'flex', flexDirection: 'column', alignItems: "center"}}>
                    <Typography variant="h5">COMPUTER EYEGLASSES STARTING AT ₹999</Typography>
                    <Typography variant="h6">Block 98% of harmful rays from Digital Devices</Typography>
                    <Typography variant="h6">A great collection of 200+ Eyeglasses</Typography>
                </Box>
            </Box> */}
            <Box style={{
                display:'flex',
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "spece-between",
                height: 'auto',
                backgroundColor: "#fff4e2",
                marginBottom: 30
            }}>
                <ReactPlayer 
                style={{
                    borderRadius: 30,
                    margin: 40,
                    width: 60
                }}
                url="https://youtu.be/pzGo1BLrLVM?list=TLGGq8C6NWz3cqUxMTAzMjAyMQ" 
                />
                <img src="https://static1.lenskart.com/media/desktop/img/tribe.jpg" alt="banner1" />
            </Box>
        </Box>
    )
}

export default Sections
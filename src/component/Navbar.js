import { Box, Button, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { logo } from "../assets/images"

export default function Navbar() {
    return (
        <MainBx>
            <NavbarBox>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex" }}>
                        <img src={logo} style={webStyle.logoImage} />
                        <Typography style={webStyle.logotitle}>Afforai</Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Typography style={webStyle.navHeading}>Affiliate</Typography>
                        <Typography style={webStyle.navHeading}>Pricing</Typography>
                        <Typography style={webStyle.navHeading}>Testimonials</Typography>
                        <Typography style={webStyle.navHeading}>Help Center</Typography>
                    </div>
                    <div>
                        <Button style={webStyle.loginbtn}>
                            Log in
                        </Button>
                        <Button style={webStyle.freebtn}>Try for free</Button>
                    </div>
                </div>
            </NavbarBox>
        </MainBx>
    )
}
const webStyle = {
    logoImage: {
        height: "24px",
        width: "24px",
        marginRight: "10px"
    },
    logotitle: {
        color: "rgb(17, 17, 17)",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "18px",
        textAlign: "center",
        height: "24px",
    },
    navHeading: {
        color: "rgb(17, 17, 17)",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "14px",
        marginRight: "20px"
    },
    loginbtn: {
        borderRadius: "8px",
        textTransform: "none",
        background: "#f5f5f",
        border: "1px solid #e6e6e6",
        color: "#525252",
        fontSize: "14px",
        fontWeight: 500,
        padding: "5px 14px",
        textAlign: "center",
        transitionDuration: ".2s",
        marginRight:"10px"
    },
    freebtn: {
        borderRadius: "8px",
        textTransform: "none",
        background: "linear-gradient(135deg,#6004ff,#7f35ff 23.95%,#370097 60.11%,#8d4aff)",
        border: "1px solid hsla(0,0%,100%,.2)",
        color: "#fff",
        fontSize: "14px",
        fontWeight: 500,
        padding: "5px 14px",
        textAlign: "center",
        transitionDuration: ".2s"
    }
}
const MainBx = styled(Box)({
    display:"flex",
    justifyContent:"center"
})
const NavbarBox = styled(Box)({
    marginTop:"15px",
    width: "1264px",
    padding: "8px 24px",
    borderWidth: "1px",
    position:"fixed",
    borderStyle: "solid",
    borderColor: "rgb(209, 213, 219)",
    borderRadius: "16px",
    backdropFilter: "blur(16px)",
    background: "rgba(250, 250, 250, 0.5)"
})
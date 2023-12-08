import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { smaillImage, background, mainImage } from "../assets/images"
import CheckIcon from '@mui/icons-material/Check';
import styled from "styled-components";
export default function HomeBox() {
    return (
        <>
            <Box style={webStyle.mainBox}>
                <Box style={webStyle.insideBox}>
                    <Box style={webStyle.mainTwo}>
                        <Box style={webStyle.yellowBox}>
                            <img src={smaillImage} />
                            <Typography style={webStyle.appSumo}>Now on appSumo</Typography>
                            <Button style={webStyle.dealbtn}>
                                Get Lifetime Deal
                            </Button>
                        </Box>

                    </Box>
                </Box>
            </Box>
            <Box style={{ maxWidth: "659px", margin: "auto" }}>
                <Typography style={webStyle.mainHeading}>
                    Your second brain for maximizing productivity
                </Typography>
            </Box>
            <Box style={{ maxWidth: "671px", margin: "auto" }}>
                <Typography style={webStyle.smallHeading}>
                    Afforai is an AI chatbot that searches, summarizes, and translates info from multiple sources to produce trustworthy research. Feed lengthy research documents to stacks of dry compliance requirements and extract the key findings you need.
                </Typography>
            </Box>
            <HomeMain>
                <Box style={{ margin: "auto", width: "816px" }}>
                    <Box style={{ display: "flex", justifyContent: "space-between", marginTop: "35px" }}>
                        <Box style={webStyle.tickBox}>
                            <CheckIcon style={{ width: "16px", height: "16px" }} />
                            Summarize Key Findings
                        </Box>
                        <Box style={webStyle.tickBox}>
                            <CheckIcon style={{ width: "16px", height: "16px" }} />
                            Compare Between Documents
                        </Box>
                        <Box style={webStyle.tickBox}>
                            <CheckIcon style={{ width: "16px", height: "16px" }} />
                            Search For Answers
                        </Box>
                        <Box style={webStyle.tickBox}>
                            <CheckIcon style={{ width: "16px", height: "16px" }} />
                            Ask in Any Language
                        </Box>
                    </Box>
                </Box>

                <Box style={{ display: "flex", marginTop: "35px", justifyContent: "center", alignItems: "center" }}>
                    <Button style={webStyle.tryfree}>
                        Try for free
                    </Button>
                    <Button style={webStyle.pricing}>
                        View pricing
                    </Button>

                </Box>

            </HomeMain>
            <Box style={{ marginTop: "70px", top: "591px", left: "336px" ,position:"absolute"}}>
                <Box style={{ margin: "auto", width: "1152px" }}>
                    <img src={mainImage} style={{ width: "100%" }} />
                </Box>
            </Box>
        </>
    )
}
const webStyle = {
    mainBox: {
        width: "340px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "50px",
        padding: "50px 60px"
    },
    insideBox: {
        gap: "100px",
        position: "relative",
        overflow: "hidden",
    },
    mainTwo: {
        gap: "32px",
        lineHeight: "100%",
        zIndex: 2,
        alignItems: "center"
    },
    yellowBox: {
        display: "flex",
        padding: "6px 6px 6px 10px",
        gap: "6px",
        borderRadius: "12px",
        border: "2px solid rgb(51, 51, 51)",
        background: "linear-gradient(269deg, rgb(255, 185, 1) 17.08%, rgb(255, 149, 1) 100%)",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 1px 0px, rgba(0, 0, 0, 0.09) 0px 2px 2px 0px, rgba(0, 0, 0, 0.05) 0px 5px 3px 0px, rgba(0, 0, 0, 0.01) 0px 9px 4px 0px, rgba(0, 0, 0, 0) 0px 14px 4px 0px",
        backdropFilter: "blur(28px)",
        color: "rgb(51, 51, 51)",
        fontSize: "13px",
        lineHeight: "100%",
        fontWeight: 600,
        justifyContent: "space-between"
    },
    dealbtn: {
        padding: "6px 2px 6px 6px",
        gap: "2px",
        borderRadius: "6px",
        border: "1px solid rgb(51, 51, 51)",
        color: "inherit",
        background: "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50.04%, rgba(255, 255, 255, 0.5) 50.85%)",
        textTransform: "none",

    },
    appSumo: {
        color: "rgb(51, 51, 51)",
        fontSize: "13px",
        lineHeight: "100%",
        fontWeight: 600,
        display: "flex",
        justifyContent: "spcae-between",
        alignItems: "center"
    },
    mainHeading: {
        color: "rgb(34, 34, 34)",
        fontWeight: 600,
        fontSize: "48px",
        lineHeight: "130%",
        textAlign: "center"
    },
    smallHeading: {
        color: "rgb(82, 82, 82)",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "150%",
        textAlign: "center",
        marginTop: "40px"
    },
    tickBox: {
        padding: "4px 6px",
        gap: "4px",
        borderRadius: "4px",
        border: "1px solid rgb(230, 230, 230)",
        background: "rgb(250, 250, 250)",
        display: "flex",
        fontSize: "13px",
        justifyContent: "space-between",
        alignItems: "center"
    },
    tryfree: {
        background: "linear-gradient(135deg,#6004ff,#7f35ff 23.95%,#370097 60.11%,#8d4aff)",
        border: "1px solid hsla(0,0%,100%,.2)",
        color: "#fff",
        fontSize: "16px",
        padding: "6px 28px",
        borderRadius: "12px",
        textTransform: "none",
        marginRight: "20px"
    },
    pricing: {
        backgroundColor: "#f5f5f5",
        borderColor: "#e6e6e6",
        color: "#525252",
        fontSize: "16px",
        padding: "6px 28px",
        borderRadius: "12px",
        textTransform: "none"
    }
}
const HomeMain = styled(Box)({
    marginLeft: "auto",
    marginRight: "auto",
    width: "1300px",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: 1,
    bottom: "280px",
    borderRadius: "28px",
    overflow: "hidden",
    height: "500px"
})
import { Box, Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { logo, purple, lastimage } from "../assets/assets"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function FAQ() {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenTwo, setIsOpenTwo] = useState(false)
    const [isOpenthree, setIsOpenthree] = useState(false)
    const [isOpenfour, setIsOpenfour] = useState(false)
    const [isOpenfive, setIsOpenfive] = useState(false)
    const [isOpensix, setIsOpensix] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
    const handleToggleTwo = () => {
        setIsOpenTwo(!isOpenTwo)
    }
    const handleTogglethree = () => {
        setIsOpenthree(!isOpenthree)
    }
    const handleTogglefour = () => {
        setIsOpenfour(!isOpenfour)
    }
    const handleTogglefive = () => {
        setIsOpenfive(!isOpenfive)
    }
    const handleTogglesix = () => {
        setIsOpensix(!isOpensix)
    }
    const svgicon = `<?xml version="1.0" encoding="UTF-8"?>
    <svg width="250" height="54" viewBox="0 0 250 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-130.000000, -73.000000)">
          <g transform="translate(130.000000, 73.000000)">
            <rect stroke="#FF6154" stroke-width="1" fill="#FFFFFF" x="0.5" y="0.5" width="249" height="53" rx="10"></rect>
            <text font-family="Helvetica-Bold, Helvetica" font-size="9" font-weight="bold" fill="#FF6154">
              <tspan x="53" y="20">PRODUCT HUNT</tspan>
            </text>
            <text font-family="Helvetica-Bold, Helvetica" font-size="16" font-weight="bold" fill="#FF6154">
              <tspan x="52" y="40">#4 Product of the Day</tspan>
            </text>
            
            <g transform="translate(17.000000, 13.000000)"><path d="M4.33,16.364 L0.328,24.9 C0.202,25.158 0.335,25.32 0.755,25.24 L4.013,24.532 C4.07755234,24.5094173 4.14861896,24.5149617 4.20888789,24.5472826 C4.26915683,24.5796035 4.31309537,24.6357337 4.33,24.702 L5.797,27.709 C5.937,28.033 6.099,28.099 6.225,27.842 L10.485,18.908 L4.33,16.364 Z M16.67,16.364 L20.672,24.9 C20.805,25.158 20.665,25.32 20.245,25.24 L16.987,24.532 C16.9224353,24.5100506 16.8516562,24.5158869 16.7915589,24.5481157 C16.7314616,24.5803445 16.687439,24.6360738 16.67,24.702 L15.203,27.709 C15.063,28.033 14.908,28.099 14.775,27.842 L10.515,18.908 L16.67,16.364 Z" fill="#DE7818" fill-rule="nonzero"></path><path d="M9.298,21.392 C9.298,21.399 9.284,21.392 9.269,21.392 C7.03578049,21.1442528 4.94208026,20.1826237 3.299,18.65 C3.291,18.642 3.269,18.635 3.276,18.627 L3.46,18.237 C3.468,18.222 3.482,18.259 3.49,18.267 C5.067,19.733 7.257,20.655 9.497,20.927 C9.505,20.927 9.52,20.927 9.52,20.935 L9.298,21.392 Z" fill="#B35454"></path><circle fill="#A54E24" cx="10.5" cy="10.489" r="10.489"></circle><circle fill="#A76236" cx="10.5" cy="10.489" r="9.045"></circle><circle fill="#BD6E3C" cx="10.75" cy="10.75" r="8.75"></circle><path d="M10.648,14.755 L10.648,13.384 L6.5,13.384 L6.5,11.585 C7.268,10.115 8.24,8.515 9.7,6.3 L12.682,6.3 L12.682,11.708 L13.736,11.708 L13.736,13.384 L12.682,13.384 L12.682,14.755 L10.648,14.755 Z M8.358,11.679 L8.358,11.784 L10.7,11.784 L10.7,7.835 L10.595,7.835 C9.874,8.948 9.305,9.909 8.356,11.679 L8.358,11.679 Z" fill="#FFC07A" fill-rule="nonzero"></path><path d="M12.97,3.089 C16.3260745,3.89113363 18.7213186,6.85251327 18.8041673,10.3021205 C18.8870161,13.7517278 16.6366978,16.8246793 13.323,17.787 C15.358,16.232 16.707,13.578 16.707,10.563 C16.707,7.379 15.203,4.6 12.969,3.089 L12.97,3.089 Z" fill-opacity="0.2" fill="#FFFFFF" opacity="0.618"></path><path d="M11.702,21.392 C11.709,21.399 11.724,21.392 11.731,21.392 C14.024,21.104 16.131,20.182 17.717,18.664 C17.724,18.657 17.746,18.65 17.739,18.642 L17.554,18.252 C17.547,18.237 17.532,18.274 17.524,18.281 C15.947,19.748 13.751,20.655 11.503,20.927 C11.495,20.927 11.48,20.927 11.48,20.935 L11.702,21.392 Z" fill="#B35454"></path></g>
          </g>
        </g>
      </g>
    </svg>`;
    return (
        <>
            <HomeMain>
                <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "250px", textAlign: "center" }}>
                    <Box>
                        <Typography style={{ ...webStyle.saveText, maxWidth: "660px" }}>
                            Start saving time today!
                        </Typography>
                        <Typography style={{ ...webStyle.average, maxWidth: "624px", marginTop: "15px" }}>
                            Join an ever-growing community, and get with Afforai started free of charge!
                        </Typography>
                        <button style={webStyle.btn}>
                            Get Started for Free
                        </button>
                    </Box>
                </Box>
            </HomeMain>
            <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "250px", textAlign: "center" }}>
                <Box>
                    <Typography style={{ ...webStyle.saveText, maxWidth: "660px" }}>
                        FAQs
                    </Typography>
                    <Typography style={{ ...webStyle.average, maxWidth: "624px", marginTop: "15px" }}>
                        For more information, check out our <span style={webStyle.help}>Help Center</span>.
                    </Typography>

                </Box>

            </Box>
            <Box style={webStyle.MainBox}>
                <div style={webStyle.dropBox} onClick={handleToggle}>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Typography>
                            Is Afforai free?
                        </Typography>
                        <KeyboardArrowDownIcon />
                    </Box>
                    {isOpen && (
                        <Typography style={{ marginTop: "20px" }}>
                            Yes, Afforai is free for all new users. Upon signing up, users are given 50 permanent credits
                        </Typography>
                    )}
                </div>
                <div style={webStyle.dropBox} onClick={handleToggleTwo}>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Typography>
                            What are subscription credits versus permanent credits?
                        </Typography>
                        <KeyboardArrowDownIcon />
                    </Box>
                    {isOpenTwo && (
                        <Typography style={{ marginTop: "20px" }}>
                            Subscription credits come from monthly payments, while permanent credits come from top ups. Subscription credits will be used before permanent credits, and subscription credits expire every month while permanent credits stay.
                        </Typography>
                    )}
                </div>
                <div style={webStyle.dropBox} onClick={handleTogglethree}>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Typography>
                            Does Afforai support documents storing on the cloud like Google Drive, One Drive, or Drop Box?
                        </Typography>
                        <KeyboardArrowDownIcon />
                    </Box>
                    {isOpenthree && (
                        <Typography style={{ marginTop: "20px" }}>
                            Currently Afforai only support uploading local documents and websites, in the near future we will integrate these cloud solutions. Sign up with us to get updated.
                        </Typography>
                    )}
                </div>
                <div style={webStyle.dropBox} onClick={handleTogglefour}>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Typography>
                            Does Afforai support uploading images and video?
                        </Typography>
                        <KeyboardArrowDownIcon />
                    </Box>
                    {isOpenfour && (
                        <Typography style={{ marginTop: "20px" }}>
                            Currently Afforai supports OCR for scanned PDF, but not via image file directly. Afforai currently working on working with video and audio transcript.
                        </Typography>
                    )}
                </div>
                <div style={webStyle.dropBox} onClick={handleTogglefive}>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Typography>
                            Does Afforai support collaboration between accounts?
                        </Typography>
                        <KeyboardArrowDownIcon />
                    </Box>
                    {isOpenfive && (
                        <Typography style={{ marginTop: "20px" }}>
                            Currently Afforai is working on a solution to allow users to share chatbots and files. Sign up with us to get updated when this feature roll out.
                        </Typography>
                    )}
                </div>
                <div style={webStyle.dropBox} onClick={handleTogglesix}>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Typography>
                            Is my data secured?
                        </Typography>
                        <KeyboardArrowDownIcon />
                    </Box>
                    {isOpensix && (
                        <Typography style={{ marginTop: "20px" }}>
                            Yes your data is secured with Afforai. We don't store your conversation with the AI, and the files you uploaded on the system is stored on the cloud using Microsoft Azure and MongoDB with their standard security. LLM calls are made using OpenAI Azure with their security measures.
                        </Typography>
                    )}
                </div>
            </Box>
            <Box style={{ ...webStyle.MainBox, marginTop: "160px", marginBottom: "60px" }}>
                <Grid container style={webStyle.lastBox}>
                    <Grid item xs={12} sm={4}>
                        <div style={{ display: "flex", height: "25px" }}>
                            <img src={logo} style={{ marginRight: "10px" }} />
                            <Typography style={webStyle.heading}>Afforai</Typography>
                        </div>
                        <Typography style={{ ...webStyle.subpoints, width: "330px" }}>
                            Afforai is your research tool in to damn near anything. Helping you summarise, translate, and withdraw data from documents.
                        </Typography>
                        <Typography style={webStyle.subpoints}>
                            Copyright © 2023 Afforai Inc. All rights reserved.
                        </Typography>
                        <div style={{ marginTop: "30px", width: "195px" }} dangerouslySetInnerHTML={{ __html: svgicon }} />
                        <Typography style={{ marginTop: "30px", color: "black", fontWeight: 500 }}>Backed by</Typography>
                        <Box style={{ width: "137px", marginTop: "20px" }}>
                            <img src={lastimage} style={{ width: "100%" }} />
                        </Box>
                    </Grid>
                    <Grid item sx={12} sm={2}>
                        <Typography style={webStyle.heading}>Company</Typography>
                        <Typography style={webStyle.subpoints}>Our Story</Typography>
                        <Typography style={webStyle.subpoints}>Affiliate</Typography>
                        <Typography style={webStyle.subpoints}>Security</Typography>
                        <Typography style={webStyle.subpoints}>Roadmap</Typography>
                        <Typography style={webStyle.subpoints}>Contact Us</Typography>
                    </Grid>
                    <Grid item sx={12} sm={2}>
                        <Typography style={webStyle.heading}>Resources</Typography>
                        <Typography style={webStyle.subpoints}>Help Center</Typography>
                        <Typography style={webStyle.subpoints}>API Docs</Typography>
                        <Typography style={webStyle.subpoints}>Terms of Use</Typography>
                        <Typography style={webStyle.subpoints}>Privacy Policy</Typography>
                    </Grid>
                    <Grid item sx={12} sm={2}>
                        <Typography style={webStyle.heading}>Follow Us</Typography>
                        <Typography style={webStyle.subpoints}>Facebook Group</Typography>
                        <Typography style={webStyle.subpoints}>LinkedIn</Typography>
                        <Typography style={webStyle.subpoints}>Twitter</Typography>
                        <Typography style={webStyle.subpoints}>Medium Blog</Typography>
                    </Grid>
                    <Grid item sx={12} sm={2}>
                        <Typography style={webStyle.heading}>Language</Typography>
                        <Typography style={{ ...webStyle.subpoints, color: 'rgb(96, 4, 255)' }}>English</Typography>
                        <Typography style={webStyle.subpoints}>Vietnamese</Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
const webStyle = {
    btn: {
        background: "linear-gradient(135deg,#6004ff,#7f35ff 23.95%,#370097 60.11%,#8d4aff)",
        border: "1px solid hsla(0,0%,100%,.2)",
        color: "#fff",
        fontsize: "16px",
        padding: "6px 28px",
        borderRadius: "12px",
        marginTop: "20px",
        textTransform: "none"
    },
    saveText: {
        maxWidth: "556px",
        color: "rgb(34, 34, 34)",
        fontWeight: 600,
        fontSize: "36px",
        lineHeight: "130%",
        marginTop: "30px"
    },
    average: {
        maxWidth: "556px",
        color: "rgb(82, 82, 82)",
        fontWeight: 400,
        fontSize: "16px",
        marginTop: "30px",
        lineHeight: "130%"
    },
    help: {
        color: "rgb(96, 4, 255)",
        textDecoration: "underline rgb(96, 4, 255)",
    },
    MainBox: {
        marginTop: "35px",
        paddingLeft: "264px",
        paddingRight: "264px"
    },
    dropBox: {
        padding: "25px",
        border: "1px solid rgb(230, 230, 230)",
        color: "rgb(82, 82, 82)",
        fontWeight: 400,
        fontSize: "16px",
        marginBottom: "15px",
        borderRadius: "8px",
        cursor: "pointer"
    },
    lastBox: {
        border: "1px solid rgb(230, 230, 230)",
        borderRadius: "10px",
        padding: "38px"
    },
    heading: {
        color: "rgb(17, 17, 17)",
        fontWeight: 500,
        fontSize: "16px"
    },
    subpoints: {
        color: "rgb(82, 82, 82)",
        fontSize: "13px",
        marginTop: "20px"
    }
}
const HomeMain = styled(Box)({
    marginTop: "250px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "1480px",
    backgroundImage: `url(${purple})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: 1,
    bottom: "280px",
    borderRadius: "28px",
    height: "400px",
    '@media (max-width: 1350px)': {
        width: "1088px"
    },
    '@media (max-width: 1134px)': {
        width: "953px"
    },
    '@media (max-width: 990px)': {
        width: "827px"
    },
    '@media (max-width: 890px)': {
        width: "769px",
        overflow: "hidden"
    },
    '@media (max-width: 822px)': {
        width: "676px",
        overflow: "hidden"
    },
})
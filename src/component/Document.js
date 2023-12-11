import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { check, documentImage, secondImage, flagImage, extension, imageOne, imageTwo, lockImage, imageThree } from "../assets/assets";

export default function Document() {

    return (
        <>
            <Box style={{ paddingLeft: "100px", paddingRight: "100px", marginTop: "200px" }}>
                <Grid container>
                    <Grid item xs={12} sm={6} style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "137px" }}>
                        <Box>
                            <Typography style={webStyle.goodbye}>
                                Say goodbye to long, tiresome documents
                            </Typography>
                            <Typography style={webStyle.subText}>
                                Afforai seamlessly translates documents, files, spreadsheets & websites, filtering out what you don’t need & answering your specific questions within seconds.
                            </Typography>
                            <Box style={webStyle.checkedBox}>
                                <img src={check} />
                                <Typography style={webStyle.checkedText}>
                                    A whip smart research assistant
                                </Typography>
                            </Box>
                            <Box style={webStyle.checkedBox}>
                                <img src={check} />
                                <Typography style={webStyle.checkedText}>
                                    We speak every language
                                </Typography>
                            </Box>
                            <Box style={webStyle.checkedBox}>
                                <img src={check} />
                                <Typography style={webStyle.checkedText}>
                                    Reliable data citation for answers
                                </Typography>
                            </Box>
                            <Box style={webStyle.checkedBox}>
                                <img src={check} />
                                <Typography style={webStyle.checkedText}>
                                    Fort-Knox level data security
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ padding: "50px" }}>
                        <img src={documentImage} style={{ width: "100%" }} />
                    </Grid>
                </Grid>
            </Box>
            <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "250px", textAlign: "center" }}>
                <Box>
                    <Button style={webStyle.tenx}>
                        10x your productivity
                    </Button>
                    <Typography style={webStyle.saveText}>
                        Save yourself from stress & streamline your workflow
                    </Typography>
                    <Typography style={webStyle.average}>
                        The average worker spends 9 hours per week looking through & gathering information from thick stacks of documents. With Afforai, you can save yourself 8 hours per week (plus a lot of headaches).
                    </Typography>
                </Box>
            </Box>
            <Box style={{ paddingLeft: "300px", paddingRight: "300px", marginTop: "80px" }}>
                <img src={secondImage} style={{ width: "100%" }} />
            </Box>
            <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "250px", textAlign: "center" }}>
                <Box>
                    <Button style={webStyle.tenx}>
                        Why choose us?
                    </Button>
                    <Typography style={webStyle.saveText}>
                        Built for the user
                    </Typography>
                    <Typography style={{ width: "450px", ...webStyle.average }}>
                        Afforai is where exceptional customer focus meets exceptional technology.
                    </Typography>
                </Box>
            </Box>
            <Box style={{ paddingLeft: "200px", marginTop: "80px", paddingRight: "8px" }}>
                <Grid container gap={2}>
                    <Grid item xs={12} sm={5} style={{ background: "rgb(245, 245, 245)", borderRadius: "12px", border: "2px solid rgb(245, 245, 245)" }}>
                        <img src={flagImage} style={{ width: "100%", height: "300px" }} />
                        <Box style={{ background: "white", borderTop: "1px solid rgb(245, 245, 245)", padding: "10px" }}>
                            <Typography style={webStyle.crossLan}>
                                Cross Language Querying
                            </Typography>
                            <Typography style={webStyle.crossSub}>
                                Afforai is able to translate your documents to more than 100 languages, meaning wherever you’re from, you can be assured we can help.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ background: "rgb(245, 245, 245)", borderRadius: "12px", border: "2px solid rgb(245, 245, 245)" }}>
                        <img src={extension} style={{ width: "100%" }} />
                        <Box style={{ background: "white", borderTop: "1px solid rgb(245, 245, 245)", padding: "10px" }}>
                            <Typography style={webStyle.crossLan}>
                                Multiple file types supported
                            </Typography>
                            <Typography style={webStyle.crossSub}>
                                Afforai can extract data from a multitude of formats, including; PDF, URL, DOCX, PPTX & XLSX, as well as your own text & links from Websites. The possibilities are limitless!                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box style={{ paddingLeft: "200px", marginTop: "10px", paddingRight: "8px" }}>
                <Grid container gap={2}>
                    <Grid item xs={12} sm={7} >
                        <Box style={{ background: "rgb(245, 245, 245)", borderRadius: "12px", border: "2px solid rgb(245, 245, 245)" }}>
                            <img src={imageOne} style={{ width: "100%", }} />
                            <Box style={{ background: "white", borderTop: "1px solid rgb(245, 245, 245)", padding: "10px" }}>
                                <Typography style={webStyle.crossLan}>
                                    Cross Language Querying
                                </Typography>
                                <Typography style={webStyle.crossSub}>
                                    Afforai is able to translate your documents to more than 100 languages, meaning wherever you’re from, you can be assured we can help.
                                </Typography>
                            </Box>
                        </Box>
                        <Box style={{ background: "rgb(245, 245, 245)", borderRadius: "12px", border: "2px solid rgb(245, 245, 245)", marginTop: "10px" }}>
                            <img src={imageTwo} style={{ width: "100%", }} />
                            <Box style={{ background: "white", borderTop: "1px solid rgb(245, 245, 245)", padding: "10px" }}>
                                <Typography style={webStyle.crossLan}>
                                    Cross Language Querying
                                </Typography>
                                <Typography style={webStyle.crossSub}>
                                    Afforai is able to translate your documents to more than 100 languages, meaning wherever you’re from, you can be assured we can help.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} style={{ background: "rgb(245, 245, 245)", borderRadius: "12px", border: "2px solid rgb(245, 245, 245)" }}>
                        <img src={lockImage} style={{ width: "100%", height: "90%" }} />
                        <Box style={{ background: "white", borderTop: "1px solid rgb(245, 245, 245)", padding: "10px" }}>
                            <Typography style={webStyle.crossLan}>
                                Multiple file types supported
                            </Typography>
                            <Typography style={webStyle.crossSub}>
                                Afforai can extract data from a multitude of formats, including; PDF, URL, DOCX, PPTX & XLSX, as well as your own text & links from Websites. The possibilities are limitless!                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Grid container style={{ paddingLeft: "100px", paddingRight: "100px", marginTop:"50px" }}>
                <Grid item xs={12} sm={6} style={{ display: "flex", justifyContent: "start", alignItems: "center", padding: "90px" }}>
                    <Box>
                        <Box style={webStyle.btnstyle}>
                            Most versatile
                        </Box>
                        <Typography style={webStyle.saveText}>Create multiple chatbots for different purposes</Typography>
                        <Typography style={webStyle.average}>
                            Legal documents? Summarising a book? Extracting data from a website? We allow you to create multiple chatbots at one time, so you can use Afforai for a whole range of purposes.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} style={{ padding: "100px" }}>
                    <img src={imageThree} style={{ width: "100%" }} />
                </Grid>
            </Grid>
        </>
    )
}
const webStyle = {
    goodbye: {
        color: "rgb(34, 34, 34)",
        fontWeight: 600,
        fontSize: "36px",
        lineHeight: "130%"
    },
    subText: {
        color: "rgb(82, 82, 82)",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "130%",
        marginTop: "25px"
    },
    checkedBox: {
        display: "flex",
        marginTop: "20px"
    },
    checkedText: {
        marginLeft: "20px",
        color: "rgb(3, 204, 59)",
        fontWeight: 500,
        fontSize: "16px",
    },
    tenx: {
        textTransform: "none",
        padding: "6px 16px",
        borderRadius: "8px",
        background: "rgb(250, 250, 250)",
        border: "2px solid rgb(128, 54, 255)",
        color: "rgb(128, 54, 255)",
        fontSize: "13px"
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
    crossLan: {
        fontSize: "16px",
        color: "rgb(34, 34, 34)",
        fontWeight: 500
    },
    crossSub: {
        fontSize: "12px",
        color: "rgb(82, 82, 82)"
    },
    btnstyle: {
        padding: "6px 16px",
        borderRadius: "8px",
        background: "rgb(250, 250, 250)",
        border: "2px solid rgb(128, 54, 255)",
        color: "rgb(128, 54, 255)",
        fontSize: "13px",
        width:"86px"
    }
}
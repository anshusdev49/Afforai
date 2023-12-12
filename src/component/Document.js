import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import {
    documentImage, secondImage, flagImage, extension, imageOne, imageTwo, lockImage, imageThree, imageFive, imagefour, imageSix, imageSeven,
    image8, image9, image10, rating, boyImage
} from "../assets/assets";

export default function Document() {
    const svgIcon = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path
        d="M12 1.25C6.072 1.25 1.25 6.073 1.25 12C1.25 17.927 6.072 22.75 12 22.75C17.928 22.75 22.75 17.927 22.75 12C22.75 6.073 17.928 1.25 12 1.25ZM12 21.25C6.899 21.25 2.75 17.101 2.75 12C2.75 6.899 6.899 2.75 12 2.75C17.101 2.75 21.25 6.899 21.25 12C21.25 17.101 17.101 21.25 12 21.25ZM16.03 9.13599C16.323 9.42899 16.323 9.90402 16.03 10.197L11.363 14.864C11.217 15.01 11.025 15.084 10.833 15.084C10.641 15.084 10.449 15.011 10.303 14.864L7.97 12.531C7.677 12.238 7.677 11.763 7.97 11.47C8.263 11.177 8.73801 11.177 9.03101 11.47L10.834 13.273L14.97 9.13702C15.263 8.84402 15.737 8.84399 16.03 9.13599Z"
        fill="#03CC3B"/>
    </svg> `;
    const fastforword = `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 5.75C20.586 5.75 20.25 6.086 20.25 6.5V9.99805L15.608 6.33203C14.793 5.68903 13.709 5.57097 12.774 6.02197C11.834 6.47797 11.25 7.41289 11.25 8.46289V9.99707L6.60803 6.33105C5.79303 5.68805 4.70905 5.57 3.77405 6.021C2.83405 6.477 2.25 7.41191 2.25 8.46191V16.5349C2.25 17.5849 2.83405 18.5201 3.77405 18.9761C4.15005 19.1581 4.55 19.2471 4.948 19.2471C5.538 19.2471 6.12103 19.05 6.60803 18.665L11.25 14.999V16.5339C11.25 17.5839 11.834 18.5191 12.774 18.9751C13.15 19.1571 13.55 19.2461 13.948 19.2461C14.538 19.2461 15.121 19.0491 15.608 18.6641L20.25 14.998V18.5C20.25 18.914 20.586 19.25 21 19.25C21.414 19.25 21.75 18.914 21.75 18.5V6.5C21.75 6.086 21.414 5.75 21 5.75ZM10.79 13.4541L5.67896 17.491C5.31396 17.78 4.84795 17.8309 4.42896 17.6289C4.00396 17.4229 3.75 17.0151 3.75 16.5381V8.46509C3.75 7.98709 4.00396 7.58002 4.42896 7.37402C4.59795 7.29202 4.77495 7.25195 4.94995 7.25195C5.20795 7.25195 5.46196 7.33999 5.67896 7.51099L10.79 11.5471C11.082 11.7781 11.25 12.126 11.25 12.501C11.25 12.876 11.082 13.2231 10.79 13.4541ZM19.79 13.4541L14.679 17.491C14.314 17.78 13.848 17.8309 13.429 17.6289C13.004 17.4229 12.75 17.0151 12.75 16.5381V8.46509C12.75 7.98709 13.004 7.58002 13.429 7.37402C13.598 7.29202 13.775 7.25195 13.95 7.25195C14.208 7.25195 14.462 7.33999 14.679 7.51099L19.79 11.5471C20.082 11.7781 20.25 12.126 20.25 12.501C20.25 12.876 20.082 13.2231 19.79 13.4541Z" fill="#3A0299"/>
  </svg>`;
    const power = `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 11.25C11.586 11.25 11.25 10.914 11.25 10.5V3.5C11.25 3.086 11.586 2.75 12 2.75C12.414 2.75 12.75 3.086 12.75 3.5V10.5C12.75 10.914 12.414 11.25 12 11.25ZM20.75 13.5C20.75 10.395 19.074 7.4909 16.377 5.9209C16.021 5.7139 15.5611 5.83489 15.3521 6.19189C15.1441 6.54989 15.265 7.00904 15.623 7.21704C17.86 8.51804 19.25 10.925 19.25 13.499C19.25 17.497 15.998 20.749 12 20.749C8.002 20.749 4.75 17.497 4.75 13.499C4.75 10.926 6.13995 8.51904 8.37695 7.21704C8.73495 7.00904 8.85595 6.54989 8.64795 6.19189C8.43995 5.83389 7.98105 5.7129 7.62305 5.9209C4.92605 7.4899 3.25 10.394 3.25 13.5C3.25 18.325 7.175 22.25 12 22.25C16.825 22.25 20.75 18.325 20.75 13.5Z" fill="#3A0299"/>
  </svg>`;
    const search = `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21.53 20.97L17.689 17.129C18.973 15.606 19.75 13.643 19.75 11.5C19.75 6.675 15.825 2.75 11 2.75C6.175 2.75 2.25 6.675 2.25 11.5C2.25 16.325 6.175 20.25 11 20.25C13.143 20.25 15.106 19.473 16.629 18.189L20.47 22.03C20.616 22.176 20.808 22.25 21 22.25C21.192 22.25 21.384 22.177 21.53 22.03C21.823 21.738 21.823 21.263 21.53 20.97ZM3.75 11.5C3.75 7.502 7.002 4.25 11 4.25C14.998 4.25 18.25 7.502 18.25 11.5C18.25 15.498 14.998 18.75 11 18.75C7.002 18.75 3.75 15.498 3.75 11.5ZM14 10.75H11.75V8.5C11.75 8.086 11.414 7.75 11 7.75C10.586 7.75 10.25 8.086 10.25 8.5V10.75H8C7.586 10.75 7.25 11.086 7.25 11.5C7.25 11.914 7.586 12.25 8 12.25H10.25V14.5C10.25 14.914 10.586 15.25 11 15.25C11.414 15.25 11.75 14.914 11.75 14.5V12.25H14C14.414 12.25 14.75 11.914 14.75 11.5C14.75 11.086 14.414 10.75 14 10.75Z" fill="#3A0299"/>
  </svg>`
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
                                <div dangerouslySetInnerHTML={{ __html: svgIcon }} />
                                <Typography style={webStyle.checkedText}>
                                    A whip smart research assistant
                                </Typography>
                            </Box>
                            <Box style={webStyle.checkedBox}>
                                <div dangerouslySetInnerHTML={{ __html: svgIcon }} />
                                <Typography style={webStyle.checkedText}>
                                    We speak every language
                                </Typography>
                            </Box>
                            <Box style={webStyle.checkedBox}>
                                <div dangerouslySetInnerHTML={{ __html: svgIcon }} />
                                <Typography style={webStyle.checkedText}>
                                    Reliable data citation for answers
                                </Typography>
                            </Box>
                            <Box style={webStyle.checkedBox}>
                                <div dangerouslySetInnerHTML={{ __html: svgIcon }} />
                                <Typography style={webStyle.checkedText}>
                                    Fort-Knox level data security
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ padding: "70px" }}>
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
            <Grid container style={{ paddingLeft: "100px", paddingRight: "100px", marginTop: "50px" }}>
                <Grid item xs={12} sm={6} style={{ display: "flex", justifyContent: "start", alignItems: "center", padding: "90px" }}>
                    <Box>
                        <Box style={webStyle.btnstyle}>
                            Most versatile
                        </Box>
                        <Typography style={webStyle.saveText}>Create multiple chatbots for different purposes</Typography>
                        <Typography style={webStyle.average}>
                            Legal documents? Summarising a book? Extracting data from a website? We allow you to create multiple chatbots at one time, so you can use Afforai for a whole range of purposes.
                        </Typography>
                        <Box style={{ display: "flex", marginTop: "20px" }}>
                            <Button style={webStyle.startBtn}>
                                Get started
                            </Button>
                            <Button style={webStyle.pricing}>
                                View pricing
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} style={{ padding: "100px" }}>
                    <img src={imageThree} style={{ width: "100%" }} />
                </Grid>
            </Grid>
            <Grid container style={{ paddingLeft: "100px", paddingRight: "100px", marginTop: "50px" }}>
                <Grid item xs={12} sm={6} style={{ padding: "100px" }}>
                    <img src={imageFive} style={{ width: "100%" }} />
                </Grid>
                <Grid item xs={12} sm={6} style={{ display: "flex", justifyContent: "start", alignItems: "center", padding: "90px" }}>
                    <Box>
                        <Box style={{ ...webStyle.btnstyle, width: "155px" }}>
                            Different Modes Available
                        </Box>
                        <Typography style={{ ...webStyle.saveText, maxWidth: "700px", width: "700px" }}>
                            Customize your assistant with a range of different modes
                        </Typography>
                        <Typography style={webStyle.average}>
                            Further power your questions with additional modes. Afforai allows you to switch between three different modes, each which have unique ways of utilising our AI tools to answer your question(s).
                        </Typography>
                        <Box style={{ display: "flex", marginTop: "10px" }}>
                            <div dangerouslySetInnerHTML={{ __html: fastforword }} />
                            <Typography style={webStyle.fastmode}>
                                Fast Mode (default)
                            </Typography>
                            <Box style={webStyle.credit}>
                                1 credit
                            </Box>
                        </Box>
                        <Typography style={webStyle.creditText}>
                            Quickly ask a question and receive an answer from the AI. This mode is most suited for applications that require only a small part of the documents to be scanned (ex. FAQ Chatbot, Search).
                        </Typography>
                        <Box style={{ display: "flex", marginTop: "10px" }}>
                            <div dangerouslySetInnerHTML={{ __html: power }} />
                            <Typography style={webStyle.fastmode}>
                                Powerful Mode
                            </Typography>
                            <Box style={webStyle.credit}>
                                4 credit
                            </Box>
                        </Box>
                        <Typography style={webStyle.creditText}>
                            Get answers of extra high quality from the AI. This mode is most suited for applications that require inferences as well as the full documents to be scanned (ex. Textual Data Analysis, Search with Inference, Report Generation).                        </Typography>
                        <Box style={{ display: "flex", marginTop: "10px" }}>
                            <div dangerouslySetInnerHTML={{ __html: search }} />
                            <Typography style={webStyle.fastmode}>
                                Google Mode
                            </Typography>
                            <Box style={webStyle.credit}>
                                5 credit
                            </Box>
                        </Box>
                        <Typography style={webStyle.creditText}>
                            Supplement your answers with the top 3 results from Google Search. This adds extra reliability to back up our already incredibly accurate answers.                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container style={{ paddingLeft: "100px", paddingRight: "100px", marginTop: "50px" }}>
                <Grid item xs={12} sm={6} style={{ display: "flex", justifyContent: "start", alignItems: "center", padding: "90px" }}>
                    <Box>
                        <Box style={{ ...webStyle.btnstyle, maxWidth: "176px", width: "176px" }}>
                            Multiple Language Supported
                        </Box>
                        <Typography style={webStyle.saveText}>
                            Regardless of where you are from, Afforai is for you
                        </Typography>
                        <Typography style={webStyle.average}>
                            We support more than 100 Languages, meaning you can seamlessly use our services regardless of where you are from. Our Cross Language Querying feature also allows flawless translation of documents.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} style={{ padding: "45px" }}>
                    <img src={imagefour} style={{ width: "100%" }} />
                </Grid>
            </Grid>
            <Grid container style={{ paddingLeft: "100px", paddingRight: "100px", marginTop: "50px" }}>
                <Grid item xs={12} sm={6} style={{ padding: "45px" }}>
                    <img src={imageSix} style={{ width: "100%" }} />
                </Grid>
                <Grid item xs={12} sm={6} style={{ display: "flex", justifyContent: "start", alignItems: "center", padding: "90px" }}>
                    <Box>
                        <Box style={{ ...webStyle.btnstyle, maxWidth: "157px", width: "157px" }}>
                            Get more out of your files
                        </Box>
                        <Typography style={{ ...webStyle.saveText, maxWidth: "397px" }}>
                            File Wizard - a game changing new feature
                        </Typography>
                        <Typography style={{ ...webStyle.average, maxWidth: "474px" }}>
                            Convert your files with less effort than ever. Afforai’s File Wizard feature allows you to transform your files, in limitless different ways. We can translate, summarize, or explain your upload in no time.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "250px", textAlign: "center" }}>
                <Box>
                    <Button style={webStyle.tenx}>
                        Seamless Integrations - Coming Soon
                    </Button>
                    <Typography style={{ ...webStyle.saveText, maxWidth: "592px" }}>
                        Upload Files directly from Google Drive, One Drive & Dropbox
                    </Typography>
                    <Typography style={{ ...webStyle.average, maxWidth: "596px" }}>
                        Afforai allows you to upload files directly from Google Drive, One Drive & Dropbox, meaning your experience will be smooth sailing regardless of your preferred
                    </Typography>
                </Box>
            </Box>
            <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "80px", textAlign: "center" }}>
                <img src={imageSeven} style={{ width: "35%" }} />
            </Box>
            <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "250px", textAlign: "center" }}>
                <Box>
                    <Typography style={{ ...webStyle.saveText, maxWidth: "660px" }}>
                        Unquestionable accuracy & reliability
                    </Typography>
                    <Typography style={{ ...webStyle.average, maxWidth: "624px" }}>
                        We pride ourselves on the quality of our chatbot’s responses, and go the extra mile to ensure the accuracy & reliability of our answers.
                    </Typography>
                </Box>
            </Box>
            <Grid container gap={5} style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "80px", textAlign: "center" }}>
                <Grid item xs={4} sm={3} style={{ width: "100px" }}>
                    <Box style={{ borderRadius: "12px", border: "1px solid rgb(230, 230, 230)", background: "rgb(230, 230, 230)" }}>
                        <img src={image8} style={{ width: "100%" }} />
                        <Box style={{ background: "white", borderTop: "1px solid rgb(245, 245, 245)", padding: "10px", textAlign: "initial" }}>
                            <Typography style={webStyle.crossLan}>
                                Trusted by users all over the World
                            </Typography>
                            <Typography style={webStyle.crossSub}>
                                Afforai is used all around the World, saving thousands of people time and money with our speed & accuracy.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={3} style={{ borderRadius: "12px", border: "1px solid rgb(230, 230, 230)", background: "rgb(230, 230, 230)" }}>
                    <img src={image9} style={{ width: "100%" }} />
                    <Box style={{ background: "white", borderTop: "1px solid rgb(245, 245, 245)", padding: "10px", textAlign: "initial" }}>
                        <Typography style={webStyle.crossLan}>
                            Information filtering
                        </Typography>
                        <Typography style={webStyle.crossSub}>
                            Afforai gives you the highest quality answers, and filters out any irrelevant information.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} sm={3} style={{ borderRadius: "12px", border: "1px solid rgb(230, 230, 230)", background: "rgb(230, 230, 230)" }}>
                    <img src={image10} style={{ width: "100%" }} />
                    <Box style={{ background: "white", borderTop: "1px solid rgb(245, 245, 245)", padding: "10px", textAlign: "initial" }}>
                        <Typography style={webStyle.crossLan}>
                            Built in Comprehension Model
                        </Typography>
                        <Typography style={webStyle.crossSub}>
                            Our powerful comprehension model increases the power of our data retrieval.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "250px", textAlign: "center" }}>
                <Box>
                    <img src={rating} style={{ width: "145px" }} />
                    <Typography style={{ ...webStyle.saveText, maxWidth: "660px", marginTop: "10px" }}>
                        See what our users say
                    </Typography>
                    <Typography style={{ ...webStyle.average, maxWidth: "624px", marginTop: "10px" }}>
                        Loved by thousands, all around the World
                    </Typography>
                </Box>
            </Box>
            <Grid container style={{ paddingLeft: "100px", paddingRight: "100px", marginTop: "50px" }}>
                <Grid item xs={12} sm={7} style={{ display: "flex", justifyContent: "start", alignItems: "center", padding: "90px" }}>
                    <Box>
                        <Box style={{...webStyle.btnstyle, maxWidth:"111px", width:"111px"}}>
                            My promise to you
                        </Box>
                        <Typography style={{...webStyle.saveText, maxWidth:"646px"}}>
                            100% money back guaranteed if you are not satisfied
                        </Typography>
                        <Typography style={{...webStyle.average,maxWidth:"680px"}}>
                            We crafted Afforai with total belief in our ability to make a chatbot that is not only powerful and reliable, but able to maximise your satisfaction as a user. This is why we have implemented a money back guarantee if you find yourself not satisfied with the capabilities of Afforai.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                    <img src={boyImage} style={{ width: "100%" }} />
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
        width: "86px"
    },
    startBtn: {
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
        textTransform: "none",
        borderRadius: "12px",
    },
    fastmode: {
        fontSize: "16px",
        color: "rgb(58, 2, 153)",
        fontWeight: 500,
        marginLeft: "10px",
        marginRight: "10px"
    },
    credit: {
        padding: "0.25rem 0.5rem",
        borderRadius: "20px",
        background: "rgb(239, 230, 255)",
        color: "rgb(96, 4, 255)",
        fontSize: "14px",
        fontWeight: 500,
        height: "18px",
    },
    creditText: {
        fontSize: "14px",
        color: "rgb(38, 2, 102)",
        paddingLeft: "34px",
        paddingTop: "5px"
    }
}
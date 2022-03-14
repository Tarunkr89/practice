// import React from "react";
// import styled from "styled-components";
// import { Box, Card, Grid, Heading, Title, Flex, Gradient } from "../../atoms";


// const GridStyle = styled(Grid)`
//  .gradient-primary{
//    background: linear-gradient(90deg, #fe3265 40%, #ffc774);
//    background: "linear-gradient(
//     90deg,#fe3265 0,#6629a3 80%)";
//    -webkit-background-clip: text;
//    -webkit-text-fill-color: transparent;
//     width: fit-content;
//  },
 

//  `;
// const aboutInfo = {
//     title: "About Us",
//     heading: "What is Jamsfy?",
//     heading1: "We are a top-notch and premium web development company which is disrupting the usual norms of the web development industry with Headless Architectute and Web 3.0",
//     journey: [
//         { id: "0", h: "2020", h1: "Our journey started amidst the struggling environment of the COVID-19 pandemic" },
//         { id: "1", h: "25+", h1: "Brands that have trusted Jamsfy to scale their ideas." },
//         { id: "2", h: "30+", h1: "years of combined experience in building trail-blazingly fast, SEO-optimized websites and mobile-friendly PWAs with advanced security" },
//         { id: "3", h: "20+", h1: "Team members of Diligient and Talented minds." },

//     ],
//     values: [

//         { id: "0", h: "Our Values" },
//         { id: "1", h: "What we believe in" },
//         { id: "2", h: "Accountability towards our deliverables." },
//         { id: "3", h: "Diversity in culture and ideas." },
//         { id: "4", h: "Veracity in our work and promises." },


//     ],

//     heading3: "Our Team",
//     heading4: "Meet our Jamsfy team",
//     heading5: "Our visions and mission is to scale the ideas of the company and the customers to fruition through the constant pursuit of excellence and providing 100% Customer satisfaction",





// };

// export const About = () => {
//     return (
//         <Box p="5rem" bg="#fefefe">
//             <Box >

//                 <Box>
//                     <Box
//                         fontWeight="600" fontSize="1.2rem" width="fit-content" position="relative" marginLeft="100px" marginRight="auto" minWidth="8em">
//                         <Gradient>{aboutInfo.title}</Gradient></Box>
//                 </Box>

//             </Box>
//             <Grid gridTemplateColumns="1fr 1fr" bg="transparent" m="100px" marginTop="75px">
//                 <Box
//                     fontWeight="bold"
//                     lineHeight="4rem"
//                     pr="15rem"
//                     mt="-2rem"
//                     ml="-1px"
//                     fontSize="3.5rem"
//                     color="#454545"

//                 >{aboutInfo.heading}</Box>
//                 <Box
//                     fontWeight="470"
//                     ml="-5.7rem"
//                     mr="-1.25em"
//                     fontSize="1.2rem"
//                     color="#454545"
//                 >{aboutInfo.heading1}</Box>
//             </Grid>
//             <Grid gridTemplateColumns="1fr 1fr 1fr 1fr" gridGap="4.5rem" pl="100px">
//                 {aboutInfo.journey.map((item)=>(<Box key={item.id} fontWeight="bold" fontSize="4rem" color="#454545"> {item.h}<Box lineHeight="1.7rem" pt="3rem" fontWeight="20" maxWidth="15rem" fontSize="1.3rem" color="#5d5757" >{item.h1}</Box></Box>))}
//             </Grid >
//             <Box mt="5rem" position="relative" borderRadius="15px" backgroundImage="url(/Image2.png)" borderRadius="10px" backgroundSize="cover" height="27rem" ml="100px" mr="100px">
//                 <Grid gridGap="2rem" gridTemplateColumns="1fr 1fr 1fr 1fr" pl="3rem" pr="3rem" pt="6rem">
                
//                     <Box className="gradient-primary" fontWeight="600"><Gradient>{aboutInfo.values[0].h}</Gradient><Box mt="3rem" color="white" lineHeight="4rem" fontSize="3rem">{aboutInfo.values[1].h}</Box></Box>
//                     <Box borderRadius="0.4rem" border="2px dashed rgb(30, 117, 249)" color="white" lineHeight="2.2rem" fontSize="1.5rem" pl="1rem" pr="2rem" pt="3rem">{aboutInfo.values[2].h}</Box>
//                     <Box borderRadius="0.4rem" border="2px dashed rgb(30, 117, 249)" color="white" lineHeight="2.2rem" fontSize="1.5rem" pl="1rem" pr="2rem" pt="3rem">{aboutInfo.values[3].h}</Box>
//                     <Box borderRadius="0.4rem" border="2px dashed rgb(30, 117, 249)" color="white" lineHeight="2.2rem" fontSize="1.5rem" pl="1rem" pr="2rem" pt="3rem">{aboutInfo.values[4].h}</Box>

//                 </Grid>
//             </Box>
//             <GridStyle>
//                 <Box className="gradient-primary" lineHeight="2.8rem" fontWeight="600" fontSize="1.4rem" width="fit-content" mr="auto" ml="auto" mt="5rem">{aboutInfo.heading3}</Box>
//             </GridStyle>
//             <Box color="#454545" fontWeight="500" position="relative" ml="auto" mr="auto" textAlign="center" lineHeight="6.5rem" fontSize="3.5rem" maxWidth="57.1rem" mt="0.5rem">
//                 {aboutInfo.heading4}
//             </Box>
//             <Box
//                 mt="1rem" fontSize="1.2rem" ml="13rem" mr="13rem" textAlign="center"
//             >
//                 {aboutInfo.heading5}
//             </Box>
//             <Box ml="10rem" mr="10rem" mt="5rem">
//                 <Grid gridTemplateColumns="auto auto auto auto" justifyContent="center" gridGap="3rem">
//                     <Card>
//                         <Box height="10.8rem" width="10.8rem" mt="3.7rem" mx="3.5rem" borderRadius="10rem" overflow="hidden">
//                             <img src="Shubham.png" width="100%" borderRadius="50%" />

//                         </Box>
//                         <Box ml="auto" mr="auto" mt="1rem" width="fit-content" fontSize="1.8rem" fontfamily="primaryBlack">
//                             Shubham Saurabh
//                         </Box>
//                         <Box ml="auto" mr="auto" mt="1rem" width="fit-content" fontSize="1.1rem" fontfamily="primaryBlack">Founder & CEO
//                         </Box>


//                     </Card>
//                     <Card>
//                         <Box height="10.8rem" width="10.8rem" mt="3.7rem" mx="3.5rem" borderRadius="10rem" overflow="hidden">
//                             <img src="Mayank.png" width="100%" borderRadius="50%" />
//                         </Box>
//                         <Box ml="auto" mr="auto" mt="1rem" width="fit-content" fontSize="1.8rem" fontfamily="primaryBlack">
//                             Mayank Joshi
//                         </Box>
//                         <Box ml="auto" mr="auto" mt="1rem" width="fit-content" fontSize="1.1rem" fontfamily="primaryBlack">
//                             Co-Founder & CTO

//                         </Box>
//                     </Card>
//                     <Card>
//                         <Box height="10.8rem" width="10.8rem" mt="3.7rem" mx="3.5rem" borderRadius="10rem" overflow="hidden">
//                             <img src="Dipanshu.png" width="100%" borderRadius="50%" />
//                         </Box>
//                         <Box ml="auto" mr="auto" mt="1rem" width="fit-content" fontSize="1.8rem" fontfamily="primaryBlack">
//                             Dipanshu Bisht
//                         </Box>
//                         <Box ml="auto" mr="auto" mt="1rem" width="fit-content" fontSize="1.1rem" fontfamily="primaryBlack" >
//                             Co-Founder & COO
//                         </Box>
//                     </Card>
//                     <Card>
//                         <Box height="10.8rem" width="10.8rem" mt="3.7rem" mx="3.5rem" borderRadius="10rem" overflow="hidden">
//                             <img src="Lokesh.png" width="100%" borderRadius="50%" />
//                         </Box>
//                         <Box ml="auto" mr="auto" mt="1rem" width="fit-content" fontSize="1.8rem" fontfamily="primaryBlack">
//                             Lokesh Manchanda
//                         </Box>
//                         <Box ml="auto" mr="auto" mt="1rem" width="fit-content" fontSize="1.1rem" fontfamily="primaryBlack">
//                             Co-Founder & CIO
//                         </Box>
//                     </Card>
//                     <Card>
//                         <Box height="10.8rem" width="10.8rem" mt="3.7rem" mx="3.5rem" borderRadius="10rem" overflow="hidden">
//                             <img src="Join.png" width="100%" borderRadius="50%" />
//                         </Box>
//                         <Box ml="auto" mr="auto" mt="1rem" width="fit-content" fontSize="1.8rem" fontfamily="primaryBlack">
//                             Join The Team
//                         </Box>
//                     </Card>

//                 </Grid>

//             </Box>


//         </Box>


//     )
// }

import {Container, Box, Heading, Image, Button} from '@chakra-ui/react'
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import NextLink from "next/link";
import {ChevronRightIcon} from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";

const About = () => {
    return (
        <Layout title={"About"}>
        <Container>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as={"h2"} variant={"page-title"}>
                        Thanh D. Nguyen
                    </Heading>
                    <p>Software Engineer | Blogger | Content Writer</p>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md: 0 }} ml={{md: 6}} align={"center"}>
                    <Image borderColor={"whiteAlpha.800"}
                           borderStyle={"solid"}
                           borderWidth={2}
                           maxWidth={"100px"}
                           display={"inline-block"}
                           borderRadius={"full"}
                           src={"/images/avatar.jpg"}
                           alt={"Profile Image"}>
                    </Image>

                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as={"h3"} variant={"section-title"}>
                    About
                </Heading>
                <Paragraph>From a child with enthusiasm for playing with numbers to being a software engineer. A detail-oriented person with the willingness to learn new things every day. Also, a blogger.</Paragraph>
                <Box align={"center"} my={4}>
                    <NextLink href={"/works"}>
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme={"teal"}>
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as={"h3"} variant={"section-title"}>
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Started working at <NextLink href={"https://www.opswat.com/"}>OPSWAT Vietnam</NextLink> as a Software Engineer
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Completed the Bachelor of Engineering in Computer Science at <NextLink href={"https://www.hcmut.edu.vn/"}>Ho Chi Minh City University of Technology</NextLink>
                </BioSection>
            </Section>
        </Container>
        </Layout>
    )
}

export default About
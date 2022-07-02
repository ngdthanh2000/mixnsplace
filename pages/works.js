import {Container, Heading, SimpleGrid} from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import chounbangThumb from '../public/images/works/Chounbang.png';
import Layout from "../components/layouts/article";

const Works = () => {
    return (
        <Layout title={"Works"}>
        <Container>
            <Heading as={"h3"} fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section delay={0.3}>
                    <WorkGridItem
                        href={"https://chounbang.com/"}
                        title={"Chounbang"}
                        thumbnail={chounbangThumb}
                    >
                        A house rental system with cross-platform and multi-language support
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works
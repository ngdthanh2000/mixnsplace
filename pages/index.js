import {Container, SimpleGrid} from "@chakra-ui/react";
import Section from "../components/section";
import {PostGridItem} from "../components/grid-item";
import Layout from "../components/layouts/article";

const Page = () => {
    return (
        <Layout>
        <Container>
            <SimpleGrid columns={1}>
                <Section delay={0.3}>
                    <PostGridItem
                        href={"https://chounbang.com/"}
                        title={"Chounbang"}
                    >
                        Với đa số nhà đầu tư cá nhân, thị trường chứng khoán năm nay không còn sôi động như năm trước nữa. Tài sản của họ bị “bốc hơi” quá nhanh, nó mang lại nhiều nỗi buồn, nhiều suy nghĩ tiêu cực ảnh hưởng lên không chỉ bản thân họ mà còn đến những thứ…
                    </PostGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Page
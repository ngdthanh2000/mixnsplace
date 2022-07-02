import Image from 'next/image';
import {Box, LinkBox, LinkOverlay, Text, Heading} from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const WorkGridItem = ({children, href, title, thumbnail}) => {
    return (
        <Box w={"100%"} align={"center"}>
            <LinkBox cursor={"pointer"}>
                <Image src={thumbnail} alt={title} className={"grid-item-thumbnail"} placeholder={"blur"} loading={"lazy"}>
                </Image>
                <LinkOverlay href={href} target={"_blank"}>
                    <Text mt={2}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </Box>
    )
}

export const PostGridItem = ({children, href, title, thumbnail}) => {
    return (
        <Box w={"100%"} align={"center"}>
            <LinkBox cursor={"pointer"}>
                <LinkOverlay href={href} target={"_blank"}>
                    <Heading as={"h2"} size={"lg"}>
                        {title}
                    </Heading>
                    {thumbnail && (<Image src={thumbnail} alt={title} className={"grid-item-thumbnail"} placeholder={"blur"} loading={"lazy"}>
                    </Image> )}
                </LinkOverlay>
            </LinkBox>
            <Text fontSize={16}>{children}</Text>
        </Box>
    )
}

export const GridItemStyle = () => {
    return (
    <Global styles={`
    .grid-item-thumbnail {
        border-radius: 12px;
     }`}>
    </Global>
    )
}
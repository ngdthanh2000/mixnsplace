import Link from "next/link";
import styled from "@emotion/styled";
import {Text, useColorModeValue} from "@chakra-ui/react";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
`

const Logo = () => {
    return (
        <Link href={"/"}>
            <a>
                <LogoBox>
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily={'M PLUS Rounded 1c", sans-serif'}
                        fontWeight={'bold'}
                        ml={3}
                    >
                        Mixn&apos;s Place
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo
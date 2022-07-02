import NextLink from 'next/link'
import {
    Box,
    Container,
    Flex,
    IconButton,
    Link,
    Menu,
    MenuButton, MenuItem, MenuList,
    Stack,
    useColorModeValue
} from "@chakra-ui/react"
import {HamburgerIcon} from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";
import Logo from "./layouts/logo";


const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

    return (
        <NextLink href={href}>
            <Link
                p={2}
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}>
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
    return (
        <Box position={"fixed"}
             as={"nav"}
             w={"100%"}
             bg={useColorModeValue("#ffffff40", '#20202380')}
             zIndex={2}
             css={{ backdropFilter: 'blur(10px)' }}
             {...props}>
            <Container display={"flex"}
                       p={2}
                       maxW={"container.md"}
                       wrap={"wrap"}
                       align={"center"}
                       jusity={"space-between"}>
                <Flex align={"center"} mr={5}>
                    <Logo />
                </Flex>
                <Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: "none", md: "flex" }}
                    width={{ base: "full", md: "auto" }}
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href={"/works"} path={path}>
                        Works
                    </LinkItem>
                    <LinkItem href={"/about"} path={path}>
                        About
                    </LinkItem>
                </Stack>

                <Box flex={1} align={"right"}>
                    <ThemeToggleButton/>
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant={'outline'} aria-label={"Options"}>
                            </MenuButton>
                            <MenuList>
                                <NextLink href={"/"} passHref>
                                    <MenuItem as={Link}>
                                        Home
                                    </MenuItem>
                                </NextLink>
                                <NextLink href={"/works"} passHref>
                                    <MenuItem as={Link}>
                                        Works
                                    </MenuItem>
                                </NextLink>
                                <NextLink href={"/about"} passHref>
                                    <MenuItem as={Link}>
                                        About
                                    </MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar
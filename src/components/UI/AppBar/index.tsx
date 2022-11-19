import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FiPower } from "react-icons/fi";
import { BiLogInCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../../services/auth";
import { useAppSelector } from "../../../types/store";
import { NAV_ITEMS, NavItem } from "./Links";
import { Link as RouterLink } from "react-router-dom";
import { FC } from "react";
import "./style.css";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  let navigate = useNavigate();
  const { isLoggedIn, displayName, photoURL } = useAppSelector(
    (state) => state.auth
  );

  const handleLogout = async () => {
    logoutUser();
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/signup");
  };

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "start", md: "start" }}>
          {isLoggedIn && <Avatar size={"md"} src={photoURL} />}
          <Text
            fontWeight={"bold"}
            ml={2}
            mt={useBreakpointValue({ lg: 2, sm: 2, xs: 2 })}
            color="pink.400"
          >
            {displayName}
          </Text>

          {!isLoggedIn && (
            <Text fontFamily={"heading"} fontSize={"xl"} color="pink.400">
              Logo
            </Text>
          )}

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {!isLoggedIn && (
            <Icon
              className="auth-icon"
              onClick={handleLogin}
              display={{ base: "end", md: "end" }}
              as={BiLogInCircle}
              w={7}
              h={7}
              color="pink.400"
            />
          )}
          {isLoggedIn && (
            <Icon
              className="auth-icon"
              onClick={handleLogout}
              display={{ base: "end", md: "end" }}
              as={FiPower}
              w={7}
              h={7}
              color="pink.400"
            />
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav onToggle={onToggle} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  return (
    <Stack mt={2} direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => {
        return navItem.protected && !isLoggedIn ? (
          <></>
        ) : (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <RouterLink to={navItem.link}>
                  <Text
                    p={2}
                    fontSize={"sm"}
                    fontWeight={500}
                    color={linkColor}
                    _hover={{
                      textDecoration: "none",
                      color: linkHoverColor,
                    }}
                  >
                    {navItem.label}
                  </Text>
                </RouterLink>
              </PopoverTrigger>
            </Popover>
          </Box>
        );
      })}
    </Stack>
  );
};

const MobileNav: FC<any> = ({ onToggle }) => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => {
        return navItem.protected && !isLoggedIn ? (
          <></>
        ) : (
          <MobileNavItem onToggle={onToggle} key={navItem.label} {...navItem} />
        );
      })}
    </Stack>
  );
};

const MobileNavItem: FC<any> = ({ label, link, onToggle }) => {
  const { isOpen } = useDisclosure();

  return (
    <Stack spacing={4}>
      <Flex
        onClick={onToggle}
        py={2}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <RouterLink to={link}>
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>
        </RouterLink>
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        ></Stack>
      </Collapse>
    </Stack>
  );
};

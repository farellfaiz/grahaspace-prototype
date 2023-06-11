import {
  Box,
  Button,
  Divider,
  HStack,
  IconButton,
  Input,
  Text,
  VStack,
  Badge
} from "@chakra-ui/react";
import React from "react";
import { IoHome } from "react-icons/io5";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <VStack bgColor="white" w="100%" h="auto" py="50px" px="100px">
      <Box w="100%" display={"flex"} justifyContent={"space-between"}>
        <Box w="20%">
          <VStack display="flex" alignItems="flex-start">
            <HStack fontSize={"3xl"} color="teal">
              <IoHome />
              <Text
                fontFamily={"Ubuntu"}
                fontWeight={"bold"}
                fontSize={"2xl"}
                fontStyle={"italic"}
              >
                Grahaspace
              </Text>
              <Badge variant={"solid"} colorScheme="teal">
                Prototype
              </Badge>
            </HStack>
            <Text color="gray.600" fontSize='md'>
              Pariatur dolor velit deserunt laboris laboris aliquip et velit nostrud magna nulla.
            </Text>
          </VStack>
        </Box>
        <Box w="50%">
          <HStack spacing="10%" display="flex" justifyContent={"center"}>
            <VStack display="flex" alignItems="flex-start" color="gray.700">
              <Text fontWeight={"bold"} color="gray.800">
                Fitur
              </Text>
              <Text>Peta Properti</Text>
              <Text>Kalkulator KPR</Text>
              <Text>360 Viewer</Text>
              <Text>Spatial Analysis</Text>
            </VStack>
            <VStack display="flex" alignItems="flex-start" color="gray.700">
              <Text fontWeight={"bold"} color="gray.800">
                Tentang Kami
              </Text>
              <Text>Profil Grahaspace</Text>
              <Text>Kerja Sama</Text>
              <Text>Bantuan Pengguna</Text>
              <Text>Syarat & Ketentuan</Text>
            </VStack>
          </HStack>
        </Box>
        <Box w="30%%">
          <Text fontWeight="bold" color="gray.800" mb="15px">
            Stay up to date
          </Text>
          <HStack>
            <Input placeholder="Masukkan email"></Input>
            <Button px="40px" colorScheme="teal" leftIcon={<FaEnvelope />}>
              Subscribe
            </Button>
          </HStack>
        </Box>
      </Box>
      <Divider my="30px" />
      <Box
        w="100%"
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text fontSize="sm" color="fg.subtle">
          &copy; {new Date().getFullYear()} Grahaspace. All rights reserved.
        </Text>
        <HStack>
          <IconButton variant="link" icon={<FaTiktok />}></IconButton>
          <IconButton variant="link" icon={<FaTwitter />}></IconButton>
          <IconButton variant="link" icon={<FaFacebook />}></IconButton>
          <IconButton variant="link" icon={<FaYoutube />}></IconButton>
          <IconButton variant="link" icon={<FaLinkedin />}></IconButton>
        </HStack>
      </Box>
    </VStack>
  );
};

export default Footer;

import {
  Box,
  Button,
  Divider,
  HStack,
  Input,
  Text,
  VStack,
  IconButton,
  
} from "@chakra-ui/react";
import React from "react";
import { Logo } from "./Logo";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <VStack bgColor="white" w="100%" h="auto" py="50px" px="100px">
      <Box w="100%" display={"flex"} justifyContent={"space-between"}>
        <Box w="20%">
          <VStack display="flex" alignItems="flex-start">
            <Logo />
            <Text color="gray.700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
      <Box display={"flex"} justifyContent={"space-between"}>
        <Text fontSize="sm" color="fg.subtle">
          &copy; {new Date().getFullYear()} Grahaspace. All rights
          reserved.
        </Text>
        <Box>
            <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
        </Box>
      </Box>
    </VStack>
  );
};

export default Footer;

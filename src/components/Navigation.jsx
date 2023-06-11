import { IoHome } from 'react-icons/io5'
import { Box, Text, HStack, Badge, Button } from "@chakra-ui/react";
import { FaHome, FaUser } from 'react-icons/fa';
import { BiHomeAlt2, BiSearch } from 'react-icons/bi';
import { CiMoneyBill } from 'react-icons/ci';
import { LuHeartHandshake } from 'react-icons/lu';

const Navigation = () => {
  return (
    <Box
      w="100%"
      h="70px"
      shadow="sm"
      backdropFilter="auto"
      backdropBlur="10px"
      position="fixed"
      top="0"
      left="0"
      bgColor="whiteAlpha.800"
      display="flex"
      justifyContent="space-between"
      alignItems={'center'}
      px='60px'
    >
      <Box>
        <HStack fontSize={"2xl"} color='teal'>
          <IoHome />
          <Text fontFamily={'Ubuntu'} fontWeight={"bold"} fontSize={'xl'} fontStyle={'italic'}>
            Grahaspace
          </Text>
          <Badge variant={'solid'} colorScheme='teal'>Prototype</Badge>
        </HStack>
      </Box>
      <Box>
        <Button variant={'ghost'} leftIcon={<BiHomeAlt2 />} colorScheme='teal'>Home</Button>
        <Button variant={'ghost'} leftIcon={<BiSearch />} colorScheme='teal'>Cari Rumah</Button>
        <Button variant={'ghost'} leftIcon={<CiMoneyBill fontSize={'19px'} />} colorScheme='teal'>KPR</Button>
        <Button variant={'ghost'} leftIcon={<LuHeartHandshake />} colorScheme='teal'>Bantuan</Button>
        <Button ml='20px' leftIcon={<FaUser fontSize={'13px'} />} colorScheme='teal'>Daftar/Masuk</Button>
      </Box>
    </Box>
  );
};

export default Navigation;

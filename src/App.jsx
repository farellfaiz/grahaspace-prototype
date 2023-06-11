import { Box, Image, Text } from "@chakra-ui/react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import KPR from "./components/KPR";

function App() {
  return (
    <Box bgColor="gray.50" w="100%" minH="1000px">
      <Box zIndex={'2'}>
        <Navigation />
      </Box>
      <Box zIndex={'1'} w='100%' h='auto' py='100px' display={'flex'} justifyContent={'center'}>
        <Image src='hero.png' w='90%' />
      </Box>
      <KPR />
      <Footer />
    </Box>
  );
}

export default App;

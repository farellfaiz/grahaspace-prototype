import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { IoHome } from 'react-icons/io5'

const Logo = () => {
  return (
    <Box>
        <HStack>
            <IoHome />
            <Text>Grahaspace</Text>
        </HStack>
    </Box>
  )
}

export default Logo
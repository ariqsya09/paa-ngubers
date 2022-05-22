import React from 'react';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import bike from './logo-bike.png';
import "./Login.css";

export default function Login() {
  // const [input, setInput] = useState('')
    return (
    <SimpleGrid columns={2} spacing={10}>
        <Box>
        <Flex width="full" align="center" justifyContent="center">
        <Box p={16}>
          <Box textAlign="center">
            <Heading>Login</Heading>
          </Box>
          <Box my={16} textAlign="left">
            <form>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="test@test.com" />
              </FormControl>
              <FormControl mt={10} isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder="*******" />
              </FormControl>
              <Button width="full" mt={4} type="submit" colorScheme="green">
                Sign In
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
        </Box>
        <Box >
        
            <Image m={20} boxSize='300px' src={bike}  />
        
        </Box>
    </SimpleGrid>
      
    );
  
  }
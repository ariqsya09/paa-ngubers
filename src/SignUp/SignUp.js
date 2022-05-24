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
import "./SignUp.css";

export default function SignUp() {
    return (
    <SimpleGrid columns={2} spacing={10}>
        <Box>
        <Flex width="full" align="center" justifyContent="center">
        <Box p={16}>
          <Box textAlign="center">
            <Heading>Sign Up</Heading>
            <h1>Gak Punya Akun? Yuk Daftar</h1>
          </Box>
          <Box my={16} textAlign="left">
            <form>
              <FormControl isRequired>
                <Input type="email" placeholder="Email" />
              </FormControl>
              <FormControl mt={3} isRequired>
                <Input type="text" placeholder="No. Telepon" />
              </FormControl>
              <FormControl mt={3} isRequired>
                <Input type="password" placeholder="Password" />
              </FormControl>
              <FormControl mt={3} isRequired>
                <Input type="password" placeholder="Re-Enter Password" />
              </FormControl>
              <Button width="full" mt={4} type="submit" colorScheme="green">
                Sign Up
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
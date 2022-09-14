import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
} from '@chakra-ui/react';
import { useContext } from 'react';




export default function Simple({item}) {

    const cartContex = useContext( CartContext );

    const {addToCart} = cartContex;


    return (
    <Container maxW={'7xl'}>
        <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
            <Image
            rounded={'md'}
            alt={'product image'}
            src={item.img}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
            <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {item.titulo}
            </Heading>
            <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                {item.precio}
            </Text>
            </Box>
            </Stack>

            <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
                <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                {item.descripcion}
                </Text>
            </VStack>
            </Stack>
        
        </SimpleGrid>
    </Container>)}
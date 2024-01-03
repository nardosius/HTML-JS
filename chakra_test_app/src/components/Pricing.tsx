
import { Box, Button, Flex, HStack, Heading, Icon, Text, StackProps, Stack } from "@chakra-ui/react"
import { checkIcon } from '../icons/Icon';

export const ListItem = (props: StackProps) => {//StackProps is a built-in Chakra element
    const {children, ...rest} = props;
    return (
        <HStack as='li' spacing='20px' {...rest}>
            <Icon as={checkIcon}  h='22px' w='22px'/>
            <Text>{children}</Text>
        </HStack>
    )
}

export function Pricing() {
    return (
        <Box maxW='994px' margin='auto' mt='-256px' borderRadius='12px' overflow='hidden'
        boxShadow='-moz-initial'>
            <Flex>
                <Box bg='#F0EAFB' p='60px'>
                    <Text fontSize='24px' fontWeight='800'>
                        Premium Pro
                    </Text>
                    <Heading as='h3' fontSize='60px' mt='16px'>
                        $329
                    </Heading>
                    <Text color='#171923' fontSize='18px' fontWeight='500' mt='8px'>
                        billed just once
                    </Text>
                    <Button colorScheme="purple" width='282px' mt='24px'>Get Started</Button>
                </Box>
                <Box p='60px' fontSize='18px' bg='white'>
                    <Text textAlign='left'>Access these features when you get this pricing package for your business.
                    </Text>
                    <Stack as='ul' spacing='20px' pt='24px'>
                        <ListItem>International calling and messaging API</ListItem>
                        <ListItem>Additional phone numbers</ListItem>
                        <ListItem>Automated messages via Zapier</ListItem>
                        <ListItem>24/7 support and consulting</ListItem>
                    </Stack>

                </Box>
            </Flex>            
        </Box>
    );
}
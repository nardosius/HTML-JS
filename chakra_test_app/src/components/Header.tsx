
import { Box, Heading, Text } from "@chakra-ui/react"

export function Header() {

    return (
    <Box pb='112px' as='section' width='1880px' overflow='hidden' margin='auto' alignSelf='center'>
        <Box color='#F7FAFC' bg='#6B46C1' pt='90' pb='198' px='32px'>
            <Heading fontWeight='800' fontSize='48px'>Simple Pricing for your Business</Heading>
            <Text fontWeight='500' fontSize='24px' pt='16px'>Plans that are carefully crafted to suit your business.</Text>

        </Box>
    </Box>
    )
}
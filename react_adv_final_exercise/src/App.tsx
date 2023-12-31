import './App.css'
import { Box, Text} from "@chakra-ui/react"
import { Stack} from '@chakra-ui/react'

function App() {
  
  return (
    <>
    <div className='App'>
      <Stack spacing='24px'>
      <Box bg='green' w='120px' h='150px'>item1</Box>
      <Box bg='blue' w='120px' h='150px'>item2</Box>
      <Box bg='red' w='120px' h='150px'>item3</Box>
      <Box bg='tomato' w='120px' h='150px'>item4</Box>
      </Stack>
    </div>
    <div>
      <Text as='i'>
        This is some ChakraUI text
      </Text>
    </div>
    </>
   )
}

export default App

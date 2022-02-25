import {
  ChakraProvider,
  Flex,
  theme
} from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Body from './features/NoteBody/Body'
import Sidebar from './features/Sidebar/Sidebar'

export const App = (): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <Flex minH='100vh' maxH='100vh' minW='100vw' maxW='100vw' p='1'>
        <Sidebar />
        <Routes>
          <Route path='/note/:noteId' element={<Body />} />
        </Routes>
      </Flex>
    </ChakraProvider>
  )
}

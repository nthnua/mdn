import {
  ChakraProvider,
  Flex,
  theme
} from '@chakra-ui/react'
import { MouseEventHandler } from 'react'
import { Route, Routes } from 'react-router-dom'
import Body from './features/NoteBody/Body'
import Sidebar from './features/Sidebar/Sidebar'

export const App = (): JSX.Element => {
  const handleNoteClick: MouseEventHandler = (e) => {
    console.log(e)
    // setCurrentNote()
  }
  return (
    <ChakraProvider theme={theme}>
      <Flex minH='100vh' minW='100vw' p='1'>
        <Sidebar notes={['1', '2', '3']} handleNoteClick={handleNoteClick} />
        <Routes>
          <Route path='/note/:noteId' element={<Body />} />
        </Routes>
      </Flex>
    </ChakraProvider>
  )
}

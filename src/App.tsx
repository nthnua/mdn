import {
  ChakraProvider,
  Flex,
  theme
} from '@chakra-ui/react'
import { MouseEventHandler } from 'react'
import { Route, Routes } from 'react-router-dom'
import MDArea from './features/NoteBody/MDArea'
import NoteBody from './features/NoteBody/NoteBody'
import Sidebar from './features/Sidebar/Sidebar'

export const App = (): JSX.Element => {
  const handleNoteClick: MouseEventHandler = (e) => {
    console.log(e)
    // setCurrentNote()
  }
  return (
    <ChakraProvider theme={theme}>
      <Flex minH='100vh' minW='100vw' p='3'>
        <Sidebar notes={['1', '2', '3']} handleNoteClick={handleNoteClick} />
        <Routes>
          <Route path='/note/:noteId' element={<><MDArea /><NoteBody /></>} />
        </Routes>
      </Flex>
    </ChakraProvider>
  )
}

import {
  ChakraProvider,
  Flex,
  theme
} from '@chakra-ui/react'
import { MouseEventHandler, useCallback, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Body from './features/NoteBody/Body'
import Sidebar from './features/Sidebar/Sidebar'
import { Note } from './types'

export const App = (): JSX.Element => {
  const handleNoteClick: MouseEventHandler = (e) => {
  }
  const [state, setState] = useState<{
    notes: Note[]
  }>(
    {
      notes: []
    }
  )
  const addNote: MouseEventHandler = useCallback((e): void => {
    const newNote: Note = {
      content: '',
      creationtime: Date.now(),
      name: `Note${state.notes.length + 1}`

    }
    const notes: Note[] = [...state.notes, newNote]
    setState({
      notes
    })
  }, [state.notes])
  return (
    <ChakraProvider theme={theme}>
      <Flex minH='100vh' minW='100vw' p='1'>
        <Sidebar notes={state?.notes} handleNoteClick={handleNoteClick} addNote={addNote} />
        <Routes>
          <Route path='/note/:noteId' element={<Body />} />
        </Routes>
      </Flex>
    </ChakraProvider>
  )
}

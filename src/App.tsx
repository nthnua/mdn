import {
  ChakraProvider,
  Flex,
  theme
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { RootState } from './app/store'
import Body from './features/NoteBody/Body'
import Sidebar from './features/Sidebar/Sidebar'
import { loadNotes } from './features/Sidebar/SidebarSlice'
import { Note } from './types'

export const App = (): JSX.Element => {
  const dispatch = useDispatch()
  const notes = useSelector((state: RootState) => state.sidebar.notes)
  useEffect(() => {
    try {
      const storedNotes: Note[] = JSON.parse(window.localStorage.getItem('notes') ?? '[{"name":"Welcome","content":"Welcome to mdn! \\n----\\n__*mdn* stands for mark down notes.__\\n\\nIts a simple app used to quickly take down notes, todo lists or anything text for that matter. or even images :)","creationtime":0}]')
      dispatch(loadNotes(storedNotes))
    } catch (e) {
      console.error(e)
    }
  }, [dispatch])

  useEffect(() => {
    window.localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])
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

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

export const App = (): JSX.Element => {
  const dispatch = useDispatch()
  const notes = useSelector((state: RootState) => state.sidebar.notes)
  useEffect(() => {
    let storedNotes
    try {
      storedNotes = JSON.parse(window.localStorage.getItem('notes') ?? '[]')
    } catch (e) {
      console.error(e)
    }
    dispatch(loadNotes(storedNotes))
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

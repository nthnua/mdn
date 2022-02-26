import { Box, Flex, HStack, IconButton, Input, useColorModeValue } from '@chakra-ui/react'
import { ChangeEventHandler, MouseEventHandler, useState } from 'react'
import { FaCog, FaPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import NoteEntry from './NoteEntry'
import { addNote, setSearchNotes } from './SidebarSlice'

export default function Sidebar (): JSX.Element {
  const notes = useSelector((state: RootState) => state.sidebar.notes)
  const searchNotes = useSelector((state: RootState) => state.sidebar.searchNotes)
  const [isSearch, setIsSearch] = useState<boolean>(false)
  const dispatch = useDispatch()
  const sideBarBg = useColorModeValue('orange.50', 'orange.800')
  const searchBg = useColorModeValue('orange.200', 'orange.900')

  const Notes = isSearch ? searchNotes.map((note, indx) => <NoteEntry key={indx} noteName={note.name} />) : notes.map((note, indx) => <NoteEntry key={indx} noteName={note.name} />)

  const handleAddNote: MouseEventHandler = () => {
    dispatch(addNote({ name: `Note${Math.floor(Math.random() * 999999999999999)}`, content: '' }))
  }
  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    const searchQ = e.target.value.toLowerCase()
    if (searchQ.length === 0) {
      setIsSearch(false)
    } else {
      setIsSearch(true)
      dispatch(setSearchNotes(notes.filter(note => note.name.toLowerCase().includes(searchQ))))
    }
  }
  return (
    <Flex
      maxW={{
        base: 'full',
        md: '20%'
      }} minH='full' flexDir='column' bg={sideBarBg} flexGrow='3' rounded='lg' p='2' m='0.5' boxShadow='base' overflowY='scroll'
    >
      <Box cursor='pointer' bg={searchBg} rounded='full' textAlign='center' shadow='md'>
        <Input placeholder='Search notes' py='2' px='4' textAlign='center' rounded='full' variant='unstyled' onChange={handleSearch} />
      </Box>
      <HStack py='3' alignSelf='center'>
        <IconButton size='sm' aria-label='Add new' variant='ghost' colorScheme='orange' icon={<FaPlus />} onClick={handleAddNote} />
        <IconButton size='sm' aria-label='Options' variant='ghost' colorScheme='orange' icon={<FaCog />} />
        <ColorModeSwitcher />
      </HStack>
      {Notes}
    </Flex>
  )
}

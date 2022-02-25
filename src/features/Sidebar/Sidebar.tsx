import { Box, Flex, HStack, IconButton, Input } from '@chakra-ui/react'
import { MouseEventHandler } from 'react'
import { FaCog, FaPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import NoteEntry from './NoteEntry'
import { addNote } from './SidebarSlice'

export default function Sidebar (): JSX.Element {
  const notes = useSelector((state: RootState) => state.sidebar.notes)
  const Notes = notes.map((note, indx) => <NoteEntry key={indx} noteName={note.name} />)
  const dispatch = useDispatch()
  const handleAddNote: MouseEventHandler = () => {
    dispatch(addNote({ name: `Note${Math.floor(Math.random() * 999999999999999)}`, content: '' }))
  }
  return (
    <Flex
      w={{
        base: 'full',
        md: '16%'
      }} minH='full' flexDir='column' bg='orange.100' rounded='lg' p='2' m='0.5' boxShadow='base' overflowY='scroll'
    >
      <Box cursor='pointer' bg='orange.200' rounded='full' textAlign='center' shadow='md'>
        <Input placeholder='Search notes' p='2' rounded='full' variant='unstyled' />
      </Box>
      <HStack py='3' alignSelf='center'>
        <IconButton size='sm' aria-label='Add new' colorScheme='orange' icon={<FaPlus />} onClick={handleAddNote} />
        <IconButton size='sm' aria-label='Options' colorScheme='orange' icon={<FaCog />} />
      </HStack>
      {Notes}
    </Flex>
  )
}

import { Box, Flex, HStack, IconButton, Input, useColorModeValue } from '@chakra-ui/react'
import { MouseEventHandler } from 'react'
import { FaCog, FaPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import NoteEntry from './NoteEntry'
import { addNote } from './SidebarSlice'

export default function Sidebar (): JSX.Element {
  const notes = useSelector((state: RootState) => state.sidebar.notes)
  const Notes = notes.map((note, indx) => <NoteEntry key={indx} noteName={note.name} />)
  const dispatch = useDispatch()
  const sideBarBg = useColorModeValue('orange.50', 'orange.800')
  const searchBg = useColorModeValue('orange.200', 'orange.900')
  const handleAddNote: MouseEventHandler = () => {
    dispatch(addNote({ name: `Note${Math.floor(Math.random() * 999999999999999)}`, content: '' }))
  }
  return (
    <Flex
      maxW={{
        base: 'full',
        md: '20%'
      }} minH='full' flexDir='column' bg={sideBarBg} flexGrow='3' rounded='lg' p='2' m='0.5' boxShadow='base' overflowY='scroll'
    >
      <Box cursor='pointer' bg={searchBg} rounded='full' textAlign='center' shadow='md'>
        <Input placeholder='Search notes' py='2' px='4' textAlign='center' rounded='full' variant='unstyled' />
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

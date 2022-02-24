import { Box, Flex, HStack, IconButton, Input } from '@chakra-ui/react'
import { FaPlus, FaRegSun } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import NoteEntry from './NoteEntry'

export default function Sidebar (): JSX.Element {
  const notes = useSelector((state: RootState) => state.sidebar.notes)
  const Notes = notes.map((note, indx) => <NoteEntry key={indx} noteName={note.name} />)
  return (
    <Flex
      w={{
        base: 'full',
        md: '16%'
      }} minH='full' flexDir='column' bg='orange.100' rounded='lg' p='2' overflowY='scroll'
    >
      <Box cursor='pointer' bg='orange.200' rounded='full' textAlign='center' shadow='md'>
        <Input placeholder='Search notes' p='2' rounded='full' variant='unstyled' />
      </Box>
      <HStack py='3' alignSelf='center'>
        <IconButton size='sm' aria-label='Add new' colorScheme='orange' icon={<FaPlus />} />
        <IconButton size='sm' aria-label='Options' colorScheme='orange' icon={<FaRegSun />} />
      </HStack>
      {Notes}
    </Flex>
  )
}

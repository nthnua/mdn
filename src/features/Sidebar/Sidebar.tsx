import { Box, Flex, HStack, IconButton, Input } from '@chakra-ui/react'
import { MouseEventHandler } from 'react'
import { FaPlus, FaRegSun } from 'react-icons/fa'
import { Note } from '../../types'
import NoteEntry from './NoteEntry'

export default function Sidebar ({ notes, handleNoteClick, addNote }: {notes: Note[], handleNoteClick: MouseEventHandler, addNote: MouseEventHandler}): JSX.Element {
  const Notes = notes.map((note, indx) => <NoteEntry key={indx} note={note} handleNoteClick={handleNoteClick} />)
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
        <IconButton size='sm' aria-label='Add new' colorScheme='orange' icon={<FaPlus />} onClick={addNote} />
        <IconButton size='sm' aria-label='Options' colorScheme='orange' icon={<FaRegSun />} />
      </HStack>
      {Notes}
    </Flex>
  )
}

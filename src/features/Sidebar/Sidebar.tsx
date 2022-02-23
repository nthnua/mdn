import { Box, Flex, HStack, IconButton, Input } from '@chakra-ui/react'
import { MouseEventHandler } from 'react'
import { FaPlus, FaRegSun, FaSketch } from 'react-icons/fa'
import Note from './Note'

export default function Sidebar ({ notes, handleNoteClick }: {notes: string[], handleNoteClick: MouseEventHandler}): JSX.Element {
  const Notes = notes.map((note, indx) => <Note key={indx} name={note} handleNoteClick={handleNoteClick} />)
  return (
    <Flex
      w={{
        base: 'full',
        md: '16%'
      }} minH='full' flexDir='column' bg='orange.100' rounded='lg' p='2'
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

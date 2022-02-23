import { Box, Flex, Input } from '@chakra-ui/react'
import { MouseEventHandler } from 'react'
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
        <Input placeholder='Search away!' p='2' rounded='full' variant='unstyled' />
      </Box>
      {Notes}
    </Flex>
  )
}

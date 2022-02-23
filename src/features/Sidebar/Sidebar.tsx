import { Box, Flex, Input } from '@chakra-ui/react'
import { MouseEventHandler } from 'react'
import Note from './Note'

export default function Sidebar ({ notes, handleNoteClick }: {notes: string[], handleNoteClick: MouseEventHandler}): JSX.Element {
  const Notes = notes.map((note, indx) => <Note key={indx} name={note} handleNoteClick={handleNoteClick} />)
  return (
    <Flex w={['full', null, '20%']} minH='fit-content' flexDir='column' bg='orange.100' rounded='lg'>
      <Box cursor='pointer' bg='orange.200' rounded='full' textAlign='center' m='1' p='2' shadow='md'>
        <Input placeholder='Search away!' p='2' rounded='full' variant='unstyled' />
      </Box>
      {Notes}
    </Flex>
  )
}

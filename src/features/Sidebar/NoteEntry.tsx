import { Box } from '@chakra-ui/react'
import { MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'
import { Note } from '../../types'

export default function NoteEntry ({ note, handleNoteClick }: {note: Note, handleNoteClick: MouseEventHandler}): JSX.Element {
  return (
    <Link to={`/note/${note.name}`}>
      <Box
        id='test'
        onClick={handleNoteClick}
        cursor='pointer' bg='orange.400' rounded='full' textAlign='center' m='1' p='2' shadow='sm' _hover={{
          bg: 'orange.500'
        }}
      >
        {note.name}
      </Box>
    </Link>
  )
}

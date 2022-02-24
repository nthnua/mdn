import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function NoteEntry ({ noteName }: {noteName: string}): JSX.Element {
  return (
    <Link to={`/note/${noteName}`}>
      <Box
        id='test'
        cursor='pointer' bg='orange.400' rounded='full' textAlign='center' m='1' p='2' shadow='sm' _hover={{
          bg: 'orange.500'
        }}
      >
        {noteName}
      </Box>
    </Link>
  )
}

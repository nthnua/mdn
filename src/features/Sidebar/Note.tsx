import { Box } from '@chakra-ui/react'
import { MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'

export default function Note ({ name, handleNoteClick }: {name: string, handleNoteClick: MouseEventHandler}): JSX.Element {
  return (
    <Link to='/note/1'>
      <Box
        id='test'
        onClick={handleNoteClick}
        cursor='pointer' bg='orange.400' rounded='full' textAlign='center' m='1' p='2' shadow='sm' _hover={{
          bg: 'orange.500'
        }}
      >
        {name}
      </Box>
    </Link>
  )
}

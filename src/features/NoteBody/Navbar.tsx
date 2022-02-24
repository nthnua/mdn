import { Flex, IconButton } from '@chakra-ui/react'
import { FaChevronLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function Navbar ({ noteId }: {noteId: string}): JSX.Element {
  const navigate = useNavigate()
  return (
    <Flex
      bg='white' rounded='lg' p='2' w={
        {
          md: '4%'
        }
    }
    >
      <IconButton size='sm' aria-label='Go back' onClick={() => navigate('/')} icon={<FaChevronLeft />} />
    </Flex>
  )
}

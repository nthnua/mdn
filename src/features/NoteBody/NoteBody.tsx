import { Flex } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

export default function NoteBody ({ zIndex, position, height }: React.CSSProperties): JSX.Element {
  const { noteId } = useParams()
  console.log(noteId)
  return (
    <Flex
      bg='blue.200' flexGrow='1' zIndex={zIndex} pos={position} minW={{
        base: 'full',
        md: '50%'
      }} rounded='lg' p='4'
    >
      body
    </Flex>
  )
}

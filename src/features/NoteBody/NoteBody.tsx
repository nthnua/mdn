import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

export default function NoteBody (): JSX.Element {
  const mq = useBreakpointValue({ md: { zIndex: 0, position: 'static' }, base: { zIndex: 2, position: 'fixed' } }) as React.CSSProperties
  const { noteId } = useParams()
  console.log(noteId)
  return (
    <Flex bg='blue.200' zIndex={mq.zIndex} pos={mq.position} w={['full', null, '40%']} minH='full' rounded='lg' p='4'>
      body
    </Flex>
  )
}

import { Flex } from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import ReactMarkdown from 'react-markdown'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'

export default function NoteBody ({ noteId }: {noteId: string}): JSX.Element {
  const noteContent = useSelector((state: RootState) => state.sidebar.currentNote.content)
  return (
    <Flex
      bg='blue.200' flexGrow='1' flexDir='column' minW={{
        base: 'full',
        md: '50%'
      }} rounded='lg' p='4'
    >
      <ReactMarkdown components={ChakraUIRenderer()}>{noteContent ?? ''}</ReactMarkdown>
    </Flex>
  )
}

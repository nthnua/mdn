import { Flex } from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import ReactMarkdown from 'react-markdown'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'

export default function NoteBody ({ noteId }: {noteId: string}): JSX.Element {
  const currentNote = useSelector((state: RootState) => state.sidebar.currentNote)
  const savedNoteContent = useSelector((state: RootState) => {
    return state.sidebar.notes.find(note => note.name === noteId)?.content
  })
  return (
    <Flex
      bg='blue.200' flexGrow='1' flexDir='column' minW={{
        base: 'full',
        md: '50%'
      }} rounded='lg' p='4' m='0.5' fontFamily='body' fontWeight='medium'
    >
      <ReactMarkdown components={ChakraUIRenderer()}>{(currentNote.name === noteId ? currentNote.content : savedNoteContent) ?? 'Your note will appear here.'}</ReactMarkdown>
    </Flex>
  )
}

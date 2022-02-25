import { Flex, Text } from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import { useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'

export default function NoteBody ({ noteId }: {noteId: string}): JSX.Element {
  const currentNote = useSelector((state: RootState) => state.sidebar.currentNote)
  const savedNoteContent = useSelector((state: RootState) => {
    return state.sidebar.notes.find(note => note.name === noteId)?.content
  })
  const scrollRef = useRef() as React.MutableRefObject<HTMLInputElement>
  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: 'auto' })
  }, [currentNote.content])
  const markdownContent = currentNote.name === noteId ? currentNote.content : savedNoteContent

  return (
    <Flex
      overflowY='scroll' overflowWrap='break-word' flexGrow='1'
      bg='blue.200' flexDir='column' minW={{
        base: 'full',
        md: '50%'
      }} maxH={{
        base: '48vh',
        md: 'full'
      }} rounded='lg' p='4' m='0.5' fontFamily='body' fontWeight='medium'
    >
      {typeof markdownContent !== 'undefined' && markdownContent !== ''
        ? <ReactMarkdown components={ChakraUIRenderer()}>{markdownContent}</ReactMarkdown>
        : <Text color='gray'>Your note's content will appear here :)</Text>}
      <div ref={scrollRef} />
    </Flex>
  )
}

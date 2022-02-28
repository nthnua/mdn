import { Flex, Text, useColorModeValue } from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
// import { useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import remarkGfm from 'remark-gfm'

export default function NoteBody ({ noteId }: {noteId: string}): JSX.Element {
  const currentNote = useSelector((state: RootState) => state.sidebar.currentNote)
  const bgColor = useColorModeValue('yellow.50', 'yellow.900')
  // const scrollRef = useRef() as React.MutableRefObject<HTMLInputElement>
  // useEffect(() => {
  //   scrollRef.current.scrollIntoView({ behavior: 'auto' })
  // }, [currentNote.content])

  return (
    <Flex
      overflowY='scroll' overflowWrap='break-word' flexGrow='5'
      bg={bgColor} flexDir='column' minW={{
        md: '48%'
      }} h={{
        base: '48vh',
        md: 'full'
      }} rounded='lg' p='4' fontFamily='body' fontWeight='normal' fontSize='md'
    >
      {currentNote.content !== ''
        ? <ReactMarkdown remarkPlugins={[remarkGfm]} components={ChakraUIRenderer()} skipHtml>{currentNote.content}</ReactMarkdown>
        : <Text color='gray'>Your note's content will appear here :)</Text>}
      {/* <div ref={scrollRef} /> */}
    </Flex>
  )
}

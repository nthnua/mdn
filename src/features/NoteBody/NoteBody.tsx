import { Flex, Heading } from '@chakra-ui/react'
import { marked } from 'marked'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'

export default function NoteBody ({ noteId }: {noteId: string}): JSX.Element {
  const noteContent = useSelector((state: RootState) => {
    return state.sidebar.notes.find(note => note.name === noteId)?.content
  })
  const markedContent = marked.parse(noteContent ?? '')
  console.log(markedContent)
  return (
    <Flex
      bg='blue.200' flexGrow='1' minW={{
        base: 'full',
        md: '50%'
      }} rounded='lg' p='4'
    >
      <div dangerouslySetInnerHTML={{ __html: markedContent }} />
    </Flex>
  )
}

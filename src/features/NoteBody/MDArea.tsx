import { Flex, Textarea } from '@chakra-ui/react'
import { ChangeEventHandler, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { editNote } from '../Sidebar/SidebarSlice'

export default function MDArea ({ noteId }: {noteId: string}): JSX.Element {
  const currentNote = useSelector((state: RootState) => state.sidebar.currentNote)
  const savedNoteContent = useSelector((state: RootState) => {
    return state.sidebar.notes.find(note => note.name === noteId)?.content
  })
  const dispatch = useDispatch()
  // create a new note here and add to current note
  // update notes array only on save
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    dispatch(editNote({ id: noteId, content: e.target.value }))
  }

  useEffect(() => {
    const clearCurrent = (): void => {
      dispatch(editNote({ id: '', content: '' }))
    }
    return clearCurrent
  }, [dispatch, noteId])
  return (
    <Flex
      bg='green.200' minW={{
        base: 'full',
        md: '50%'
      }} flexGrow='1' rounded='lg' p='4'
    >
      <Textarea minH='full' size='lg' display='flex' flexGrow='1' resize='none' maxW='full' variant='unstyled' placeholder='Write here :)' value={(currentNote.name === noteId ? currentNote.content : savedNoteContent)} onChange={handleChange} />
    </Flex>
  )
}

import { Flex, Textarea } from '@chakra-ui/react'
import { ChangeEventHandler } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { editNote } from '../Sidebar/SidebarSlice'

export default function MDArea ({ noteId }: {noteId: string}): JSX.Element {
  const content = useSelector((state: RootState) => {
    return state.sidebar.notes.find(note => note.name === noteId)?.content
  })
  const dispatch = useDispatch()
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    dispatch(editNote({ id: noteId, content: e.target.value }))
  }
  return (
    <Flex
      bg='green.200' minW={{
        base: 'full',
        md: '50%'
      }} flexGrow='1' rounded='lg' p='4'
    >
      <Textarea minH='full' size='lg' display='flex' flexGrow='1' resize='none' maxW='full' defaultValue={content} onChange={handleChange} />
    </Flex>
  )
}

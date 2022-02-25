import { Flex, IconButton } from '@chakra-ui/react'
import { FaChevronLeft, FaSave } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../app/store'
import { saveNote } from '../Sidebar/SidebarSlice'

export default function Navbar ({ noteId }: {noteId: string}): JSX.Element {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const currentNoteContent = useSelector((state: RootState) => state.sidebar.currentNote.content)
  const handleSave = (): void => {
    dispatch(saveNote({ content: currentNoteContent, id: noteId }))
  }
  return (
    <Flex
      bg='white' rounded='lg' p='2' flexDir='column'
    >
      <IconButton size='sm' aria-label='Go back' onClick={() => navigate('/')} variant='outline' icon={<FaChevronLeft />} my='2' />
      <IconButton size='sm' aria-label='Go back' onClick={handleSave} variant='outline' icon={<FaSave />} my='2' />
    </Flex>
  )
}

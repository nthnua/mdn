import { ChakraProps, Flex, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { FaSave, FaWindowClose } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../app/store'
import { saveNote } from '../Sidebar/SidebarSlice'

export default function Navbar ({ noteId }: {noteId: string}): JSX.Element {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const currentNote = useSelector((state: RootState) => state.sidebar.currentNote)
  const handleSave = (): void => {
    if (currentNote.name !== '') { dispatch(saveNote({ content: currentNote.content, id: noteId })) }
  }
  const mq = useBreakpointValue({ base: { flexDirection: 'row', my: '0', mx: '2' }, md: { flexDirection: 'column', my: '2', mx: '0' } }) as ChakraProps
  return (
    <Flex
      bg='white' rounded='lg' p='2' flexDir={mq?.flexDirection}
    >
      <IconButton size='sm' aria-label='Go back' onClick={() => navigate('/')} variant='outline' icon={<FaWindowClose />} my={mq.my} mx={mq.mx} />
      <IconButton size='sm' aria-label='Go back' onClick={handleSave} variant='outline' icon={<FaSave />} my={mq.my} mx={mq.mx} />
    </Flex>
  )
}

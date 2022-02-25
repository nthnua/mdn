import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Flex, FormControl, FormHelperText, HStack, IconButton, Input, Text } from '@chakra-ui/react'
import { FormEventHandler, MouseEventHandler, useState } from 'react'
import { FaPen, FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { RootState } from '../../app/store'
import { deleteNote, renameNote } from './SidebarSlice'

export default function NoteEntry ({ noteName }: {noteName: string}): JSX.Element {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isRenameAlertOpen, setRenameAlertIsOpen] = useState<boolean>(false)
  const currentNoteName = useSelector((state: RootState) => state.sidebar.currentNote.name)
  const [newName, setNewName] = useState<string>(noteName)
  const [newNameValid, setNewNameValid] = useState<boolean>(true)
  const noteNames = useSelector((state: RootState) => state.sidebar.notes.map(note => note.name))
  const handleRename: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (noteNames.some(name => name === newName)) {
      setNewNameValid(false)
    } else if (currentNoteName === noteName) {
      setRenameAlertIsOpen(false)
      dispatch(renameNote({ oldName: noteName, newName }))
      navigate(`/note/${newName}`)
    } else {
      setRenameAlertIsOpen(false)
      dispatch(renameNote({ oldName: noteName, newName }))
    }
  }
  const handleDelete: MouseEventHandler = (e) => {
    e.stopPropagation()
    e.preventDefault()
    if (currentNoteName === noteName) {
      dispatch(deleteNote({ name: noteName }))
      navigate('/')
    } else {
      dispatch(deleteNote({ name: noteName }))
    }
  }
  return (
    <Link to={`/note/${noteName}`}>
      <AlertDialog motionPreset='slideInBottom' isOpen={isRenameAlertOpen} onClose={() => setRenameAlertIsOpen(false)} leastDestructiveRef={undefined}>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <form onSubmit={handleRename}>
            <AlertDialogHeader>
              Rename note
            </AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              <FormControl isInvalid={!newNameValid}>
                <Input
                  isRequired pattern='[A-Za-z0-9_ ]+' name='name' type='text' value={newName} onChange={(e) => {
                    setNewName(e.target.value)
                    setNewNameValid(true)
                  }}
                />
                <FormHelperText>
                  Use a unique,alphanumeric name
                </FormHelperText>
              </FormControl>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button type='submit'>Rename</Button>
            </AlertDialogFooter>
          </form>
        </AlertDialogContent>
      </AlertDialog>
      <Flex
        id='test'
        cursor='pointer' bg='orange.400' rounded='full' m='1' p='2' shadow='sm' _hover={{
          bg: 'orange.500'
        }} justify='space-between'
      >
        <Text px='2' maxW='50%' overflow='hidden' textOverflow='ellipsis' whiteSpace='nowrap'>{noteName}</Text>
        <HStack alignSelf='flex-end'>
          <IconButton
            colorScheme='orange' size='xs' aria-label='Rename note' rounded='full' variant='outline' icon={<FaPen />} onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
              setRenameAlertIsOpen(true)
            }}
          />
          <IconButton
            colorScheme='orange' size='xs' aria-label='Delete note' rounded='full' variant='outline' icon={<FaTrash />} onClick={handleDelete}
          />
        </HStack>
      </Flex>
    </Link>
  )
}

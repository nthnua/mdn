import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Flex, HStack, IconButton, Input, Text } from '@chakra-ui/react'
import { FormEventHandler, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { renameNote } from './SidebarSlice'

export default function NoteEntry ({ noteName }: {noteName: string}): JSX.Element {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isRenameAlertOpen, setRenameAlertIsOpen] = useState<boolean>(false)
  const [newName, setNewName] = useState<string>(noteName)
  const handleRename: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setRenameAlertIsOpen(false)
    dispatch(renameNote({ oldName: noteName, newName }))
    navigate(`/note/${newName}`)
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
              <Input isRequired pattern='[A-Za-z0-9_]+' name='name' type='text' value={newName} onChange={(e) => setNewName(e.target.value)} />
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
        <Text px='2'>{noteName}</Text>
        <HStack alignSelf='flex-end'>
          <IconButton colorScheme='orange' size='xs' aria-label='rename note' rounded='full' variant='outline' icon={<FaEdit />} onClick={() => setRenameAlertIsOpen(true)} />
        </HStack>
      </Flex>
    </Link>
  )
}

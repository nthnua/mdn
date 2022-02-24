import { Flex } from '@chakra-ui/react'

export default function NoteBody (): JSX.Element {
  return (
    <Flex
      bg='blue.200' flexGrow='1' minW={{
        base: 'full',
        md: '50%'
      }} rounded='lg' p='4'
    >
      body
    </Flex>
  )
}

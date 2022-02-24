import { Flex, Textarea } from '@chakra-ui/react'

export default function MDArea (): JSX.Element {
  return (
    <Flex
      bg='green.200' minW={{
        base: 'full',
        md: '50%'
      }} flexGrow='1' rounded='lg' p='4'
    >
      <Textarea minH='full' size='lg' display='flex' flexGrow='1' resize='none' maxW='full' />
    </Flex>
  )
}

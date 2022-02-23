import { Flex, Textarea, useBreakpointValue } from '@chakra-ui/react'

export default function MDArea (): JSX.Element {
  const mq = useBreakpointValue({ md: { zIndex: 0, position: 'static' }, base: { zIndex: 2, position: 'fixed' } }) as React.CSSProperties
  return (
    <Flex bg='green.200' zIndex={mq.zIndex} pos={mq.position} w={['full', null, '40%']} minH='full' rounded='lg' p='4'>
      <Textarea defaultValue='hello md' minH='full' resize='none' />
    </Flex>
  )
}

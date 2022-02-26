import { Flex, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import MDArea from './MDArea'
import Navbar from './Navbar'
import NoteBody from './NoteBody'

export default function Body (): JSX.Element {
  const mq = useBreakpointValue({ md: { zIndex: 0, position: 'static', flexDirection: 'row' }, base: { zIndex: 3, position: 'absolute', flexDirection: 'column' } }) as React.CSSProperties
  const bgColor = useColorModeValue('white', 'gray.800')
  const { noteId } = useParams()
  return (
    <Flex
      minH='full' minW={{
        base: 'full',
        md: '70%'
      }} bg={bgColor} zIndex={mq.zIndex} position={mq.position} flexDirection={mq.flexDirection} flexGrow='7'
    >
      <NoteBody noteId={noteId ?? ''} />
      <MDArea noteId={noteId ?? ''} />
      <Navbar noteId={noteId ?? ''} />
    </Flex>
  )
}

import { Flex, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import MDArea from './MDArea'
import Navbar from './Navbar'
import NoteBody from './NoteBody'

export default function Body (): JSX.Element {
  const mq = useBreakpointValue({ md: { zIndex: 0, position: 'static', flexDirection: 'row' }, base: { zIndex: 3, position: 'absolute', flexDirection: 'column' } }) as React.CSSProperties
  const { noteId } = useParams()
  return (
    <Flex
      minH='full' w={{
        base: 'full',
        md: '80%'
      }} zIndex={mq.zIndex} position={mq.position} flexDirection={mq.flexDirection}
    >
      <Navbar noteId={noteId ?? ''} />
      <NoteBody noteId={noteId ?? ''} />
      <MDArea noteId={noteId ?? ''} />
    </Flex>
  )
}

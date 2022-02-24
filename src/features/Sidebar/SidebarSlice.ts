import { createSlice } from '@reduxjs/toolkit'
import { Note } from '../../types'

const initialState: {notes: Note[]} = {
  notes: []
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {}
})

export default sidebarSlice.reducer

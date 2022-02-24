import { createSlice } from '@reduxjs/toolkit'
import { Note } from '../../types'

const initialState: {notes: Note[]} = {
  notes: []
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    addNote: state => {
      const newNote: Note = {
        name: `Note${state.notes.length + 1}`,
        content: '',
        creationtime: Date.now()
      }
      state.notes.push(newNote)
    }
  }
})
export const { addNote } = sidebarSlice.actions
export default sidebarSlice.reducer

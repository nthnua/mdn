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
    },
    editNote: (state, action) => {
      console.log(action.payload)
      state.notes.forEach((note, indx) => {
        if (note.name === action.payload.id) {
          note.content = action.payload.content
        }
      })
    }
  }
})
export const { addNote, editNote } = sidebarSlice.actions
export default sidebarSlice.reducer

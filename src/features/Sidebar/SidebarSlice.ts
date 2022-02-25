import { createSlice } from '@reduxjs/toolkit'
import { Note } from '../../types'

const initialState: {notes: Note[], currentNote: Note} = {
  notes: [],
  currentNote: {
    name: '',
    content: '',
    creationtime: 0
  }
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    addNote: (state, action) => {
      const newNote: Note = {
        name: action.payload.name,
        content: action.payload.content,
        creationtime: Date.now()
      }
      state.notes.push(newNote)
    },
    saveNote: (state, action) => {
      state.notes.forEach((note, indx) => {
        if (note.name === action.payload.id) {
          note.content = action.payload.content
        }
      })
    },
    editNote: (state, action) => {
      state.currentNote.name = action.payload.id
      state.currentNote.content = action.payload.content
    }
  }
})
export const { addNote, saveNote, editNote } = sidebarSlice.actions
export default sidebarSlice.reducer

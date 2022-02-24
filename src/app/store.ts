import { configureStore } from '@reduxjs/toolkit'
import BodySlice from '../features/NoteBody/BodySlice'
import SidebarSlice from '../features/Sidebar/SidebarSlice'

export default configureStore({
  reducer: {
    sidebar: SidebarSlice,
    body: BodySlice
  }
})

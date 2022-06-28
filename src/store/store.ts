import { combineReducers, configureStore } from '@reduxjs/toolkit'
import getUserEmail from './Auth/getEmail'
import getUserPassword from './Auth/getPassword'
import getUserUsername from './Auth/getUsername'
import getAccountOpen from './Home/accountIsOpen'
import getNoteType from './Home/NoteInputType'
import getNewNotes from './Home/newNote'
import getNoteModal from './Home/noteModalOpen'
import getNewColor from './Home/chooseColor'

import checkForDataLoading from './Auth/checkforLoading'

export const store = configureStore({
  reducer: {
    getFormData: combineReducers( { 
      getUserEmail, 
      getUserPassword, 
      getUserUsername 
    } ),
    checkForDataLoading,
    getAccountOpen,
    getNoteType,
    getNewNotes,
    getNoteModal,
    getNewColor
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
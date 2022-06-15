import { combineReducers, configureStore } from '@reduxjs/toolkit'
import getUserEmail from './Auth/getEmail'
import getUserPassword from './Auth/getPassword'

export const store = configureStore({
  reducer: {
    getFormData: combineReducers( { getUserEmail, getUserPassword } )
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
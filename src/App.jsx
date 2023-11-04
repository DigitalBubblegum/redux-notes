import { useEffect } from 'react'
import { initializeNotes } from './reducers/noteReducer'
import React from 'react'
import NewNote from './components/NewNote'
import Notes from './components/Notes'
import VisibilityFilter from './components/VisibilityFilter'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
   useEffect(() => {
    dispatch(initializeNotes()) 
  }, []) 

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  )
}
export default App

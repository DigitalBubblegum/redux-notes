const initialState = [
  {
    content: 'reducer defines how redux store works',
    important: true,
    id: 1,
  },
  {
    content: 'state of store can contain any data',
    important: false,
    id: 2,
  },
]
console.log('test',initialState)
const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_NOTE":
      console.log(state)
      return [...state, action.payload]
    case "TOGGLE_IMPORTANCE": {
      console.log('toggling importance',state)
      const id = action.payload.id;
      console.log('id is',id)
      console.log('notes in state',state)
      const noteToChange = state.find(n=>n.id === id)
      console.log('note being changed',noteToChange)
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      }
      console.log('new  note is',changedNote)
      var notesList = state.map((note) =>
        note.id !== id ? note : changedNote
      )
      console.log('modded note list',notesList)
      return notesList
    }
    default:
      return state;
  }
}
const generateId = () => Number((Math.random() * 1000000).toFixed(0));

export const createNote = (content) => {
  return {
    type: "NEW_NOTE",
    payload: {
      content,
      important: false,
      id: generateId(),
    },
  };
};
export const toggleImportanceOf = (id) => {
  return {
    type: "TOGGLE_IMPORTANCE",
    payload: { id },
  };
};
export default noteReducer;

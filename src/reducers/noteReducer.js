const initialState = {
  notes: [
    {
      content: "reducer defines how redux store works",
      important: true,
      id: 1,
    },
    { content: "state of store can contain any data", important: false, id: 2 },
  ],
  filter: "IMPORTANT",
};
console.log('test',initialState)
const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_NOTE":
      console.log(state)
      return [...state, action.payload]
    case "TOGGLE_IMPORTANCE": {
      console.log(state)
      const id = action.payload.id;
      const noteToChange = state.notes.find(n=>n.id === id)
      console.log('vomit',noteToChange)
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      }
      console.log(changedNote)
      console.log('as',state.notes)
      // var notesList = state.notes.map((note) =>
      //   note.id !== id ? note : changedNote
      // );
      var notesList = state.notes.map((note)=>note)
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

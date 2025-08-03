1.install redux-toolkit & redux;

2.create store.js in app folder or anywhere;

3.import configureStore from redux-toolkit & 
  export const store= configureStore({})

4. create todoSlice in a feature/todo folder

5.import { createSlice,nanoid } from "@reduxjs/toolkit";

6. then create a slice with a variable name and inside it pass an object with properties: name ,initialState, reducer.

7. inside reducer add functions like :
         addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        }

8. then export the functions 

9. also export the reducer   (export default todoSlice.reducer)

10. to use any reducer functions use useDispatch.
    const dispatch=useDispatch()
    dispatch(addTodo(input))

11. to access the store data use useSelector:
    const todos= useSelector(state=>state.todos)

12. wrap the app with a provider and pass the store as props named store:
    <Provider store={store}>
      <App />
    </Provider>

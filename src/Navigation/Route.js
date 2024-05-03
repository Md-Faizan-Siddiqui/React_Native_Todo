import AddTodo from "../Screens/AddTodo";
import EditTodo from "../Screens/EditTodo";
import TodoList from "../Screens/TodoList";
import { Add_Todo, Edit_Todo, Todo_List } from "./Path";


export const Routes = [
    {
        component: TodoList,
        path: Todo_List,
    },
    {
        component: AddTodo,
        path: Add_Todo,
    },
    {
        component: EditTodo,
        path: Edit_Todo,
    },
]
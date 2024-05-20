import { Todo } from "@/lib/utils/types/todos";
import { Checkbox } from "./ui/checkbox";
import { completeTodo, fetchTodos, uncheckedTodo } from "@/lib/apis/todos/todosApi";


const Status = ({item, setTodoData, isdisable}:{item:Todo, setTodoData: (data: any) => void, isdisable:boolean }) => {
    const handleStatus = async () => {
        if(item.completed){
            uncheckedTodo(item._id)
        }else{
            completeTodo(item._id)
        }
        await fetchTodos().then((res) => setTodoData(res?.data.todos))
    }
  return (
    <Checkbox className="mt-2 w-6 h-6 rounded-full" checked={item.completed} disabled={isdisable} onCheckedChange={handleStatus} />
  );
};

export default Status;

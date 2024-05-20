import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import TodoForm from "./TodoForm";
import { DialogHeader } from "./ui/dialog";
import { FaPencilAlt } from "react-icons/fa";
import { Todo } from "@/lib/utils/types/todos";



function EditTodo ({ todos, setTodoData }: { todos: Todo, setTodoData: any }) {
    const propsObject = {
        isChange: true,
        todos: todos,
        setTodoData: setTodoData,
      };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <FaPencilAlt className="sm:mr-2" /> <span className="max-sm:hidden">Edit</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>Add a new task to your list</DialogDescription>
        </DialogHeader>
        <TodoForm {...propsObject}/>
      </DialogContent>
    </Dialog>
  );
};

export default EditTodo;

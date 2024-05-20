import { FaTrashRestore } from "react-icons/fa";
import { Button } from "./ui/button";
import { getDeletedTodos, restoreTodo } from "@/lib/apis/todos/todosApi";

const RestoreTodo = ({
    id,
    setTodoData,
  }: {
    id:string;
    setTodoData: (Data: any) => void;
  }) => {
    const handleRestore = async () => {
        const data = await restoreTodo(id);
        getDeletedTodos().then((res) => {
            setTodoData(res?.data.todos);
          });
      };
  return (
    <Button variant="default" className=" bg-green-500 hover:bg-green-400" onClick={handleRestore}>
      <FaTrashRestore className="mr-2" /> Restore
    </Button>
  );
};

export default RestoreTodo;

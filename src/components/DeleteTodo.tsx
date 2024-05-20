import { ImBin2 } from "react-icons/im";
import { Button } from "./ui/button";
import { deleteTodo, fetchTodos } from "@/lib/apis/todos/todosApi";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

const DeleteTodo = ({
  id,
  setTodoData,
}: {
  id: string;
  setTodoData: (data: any) => void;
}) => {
  const deleleTask = async () => {
    await deleteTodo({ id, isdeleteData: false });
    const data = await fetchTodos();
    setTodoData(data?.data.todos);
  };
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button variant="destructive">
            <ImBin2 className="sm:mr-2" /> <p className="max-sm:hidden">Remove</p>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
            This action moves your to-do task to the Dustbin for 30 days. If you make a mistake and need to retrieve a deleted to-do, you can find it in the trash and <b>restore it</b>. Deleted tasks remain in the Dustbin for 30 days before they are permanently removed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction asChild className=" bg-red-500 hover:bg-red-400">
              <Button onClick={deleleTask}>
                <ImBin2 className="mr-2" /> Remove
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DeleteTodo;

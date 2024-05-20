import { Todo } from "@/lib/utils/types/todos";
import Status from "./Status";
import RestoreTodo from "./RestoreTodo";
import { Button } from "./ui/button";
import { ImBin2 } from "react-icons/im";
import { deleteTodo, getDeletedTodos } from "@/lib/apis/todos/todosApi";
import Image from "next/image";
import { MdError } from "react-icons/md";
import { AspectRatio } from "./ui/aspect-ratio";
import { format } from "date-fns";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { BsThreeDotsVertical } from "react-icons/bs";
import DeleteTodo from "./DeleteTodo";
import EditTodo from "./EditTodo";

const DeletedTodos = ({
  todoData,
  setTodoData,
}: {
  todoData: Todo[];
  setTodoData: (Data: any) => void;
}) => {
  const deleleTask = async (id: string) => {
    await deleteTodo({ id, isdeleteData: true });
    const data = await getDeletedTodos();
    setTodoData(data?.data.todos);
  };
  console.log("dustbin", todoData);
  return (
    <div className="max-w-6xl mx-auto px-4 mb-5 overflow-x-hidden">
      {todoData.length == 0 ? (
        <>
          <div className="flex flex-col justify-center w-full">
            <div className="flex justify-center">
              <Image
                src="/empty_dustbin.png"
                alt="Image"
                width={450}
                height={300}
                className="rounded-md object-cover"
              />
            </div>
            <div>
              <h1 className="text-center text-xl font-semibold">
                No Deleted Todos
              </h1>
            </div>
          </div>
        </>
      ) : (
        <div>
          <div className=" inline-flex">
            <MdError className="text-red-500 text-2xl mr-2" />
            <p className="text-red-500">
              This Todo will remain for 30 days. After 30 days, each Todo will
              be removed. You can restore them using the restore button or
              delete them from the Dustbin. They will be permanently deleted
              from the Dustbin.
            </p>
          </div>
          <ul className="mt-12">
            {(todoData as Todo[]).map((item, idx) => (
              <li
                key={idx}
                className={`py-8 h-full rounded-xl flex items-start justify-between border-2 mt-3 p-6 border-gray-600 ${
                  item.completed ? `bg-gray-200` : ""
                }`}
              >
                <div className="flex gap-3 w-full h-full">
                  <Status
                    item={item}
                    setTodoData={setTodoData}
                    isdisable={true}
                  />
                  <div>
                    <span
                      className={`block text-sm text-gray-700 font-semibold ${
                        item.completed
                          ? "line-through decoration-gray-500 decoration-2 text-gray-500"
                          : ""
                      }`}
                    >
                      {item.title}
                    </span>
                    <span
                      className={`block text-sm text-gray-600 text-wrap ${
                        item.completed ? "text-gray-500" : ""
                      }`}
                    >
                      {item.description}
                    </span>
                    <span
                      className={`block text-sm text-gray-600 text-wrap ${
                        item.completed ? "text-gray-500" : ""
                      }`}
                    >
                      <label htmlFor="DataofTask">
                        <b>Date of Task: </b>
                      </label>
                      {format(item.alarmAt, "LLL dd, y")}
                    </span>
                  </div>
                </div>
                <div className="sm:hidden flex flex-row justify-evenly">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <BsThreeDotsVertical />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="sm:hidden">
                      <DropdownMenuLabel>Tools</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="flex flex-col space-y-2">
                        <Button
                          variant="destructive"
                          onClick={() => deleleTask(item._id)}
                        >
                          <ImBin2 className="mr-2" /> Remove
                        </Button>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <RestoreTodo id={item._id} setTodoData={setTodoData} />
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="flex gap-2 max-sm:flex-col max-sm:hidden">
                  <Button
                    variant="destructive"
                    onClick={() => deleleTask(item._id)}
                  >
                    <ImBin2 className="mr-2" /> Remove
                  </Button>
                  <RestoreTodo id={item._id} setTodoData={setTodoData} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DeletedTodos;

"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsThreeDotsVertical } from "react-icons/bs";
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";
import { format } from "date-fns";
import DeleteTodo from "./DeleteTodo";
import Status from "./Status";
import { Todo } from "@/lib/utils/types/todos";
import Filter from "./Filter";

const Todos = ({
  todoData,
  setTodoData,
}: {
  todoData: Todo[];
  setTodoData: (Data: any) => void;
}) => {
  console.log("todos", todoData.length);
  const checkData = todoData.map(item=>item.completed)
  console.log("checkData",checkData)
    return (
      <div className="max-w-6xl mx-auto px-4 mb-5 overflow-x-hidden">
        <div className="items-center justify-between sm:flex mt-2 ">
          <div>
            <h4 className="text-gray-800 text-xl font-semibold sm:text-nowrap mr-2">
              All Todos
            </h4>
          </div>
          <div className="flex w-full justify-between max-sm:space-x-2">
            <Filter setTodoData={setTodoData} />
            <AddTodo setTodoData={setTodoData} />
          </div>
        </div>
        {todoData.length !== 0 ?(<ul className="mt-12">
          {(todoData as Todo[]).map((item, idx) => (
            <li
              key={idx}
              className={`py-8 h-full rounded-xl flex items-start justify-between border-2 mt-3 p-6 border-gray-600 ${
                item.completed ? `bg-gray-200` : ""
              }`}
            >
              <div className="flex gap-3 w-full h-full">
                <Status
                  isdisable={false}
                  item={item}
                  setTodoData={setTodoData}
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
              <div className="sm:hidden flex flex-col gap-2 justify-evenly">
                <EditTodo todos={item} setTodoData={setTodoData} />
                <DeleteTodo id={item._id} setTodoData={setTodoData} />
              </div>
              <div className="flex gap-2 max-sm:flex-col max-sm:hidden">
                <DeleteTodo id={item._id} setTodoData={setTodoData} />
                <EditTodo todos={item} setTodoData={setTodoData} />
              </div>
            </li>
          ))}
        </ul>):(<div className="flex justify-center items-center h-96">
          <h1>No Data Available</h1>
        </div>)}
      </div>
    );
};

export default Todos;

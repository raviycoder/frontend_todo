import { fetchTodos, getCompletedTodo, getUncompletedTodo } from "@/lib/apis/todos/todosApi";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const Filter = ({setTodoData}:{setTodoData:(data: any) => void} ) => {
    // use switch case to create a function for this filter select
    const handleFilter = (value: string) => {
        switch (value) {
            case "all":
                return fetchTodos()
                .then((response) => {
                  if (response) {
                    // Check if response is not undefined
                    const todos = response.data.todos;
                    setTodoData(todos);
                     // Access the data property
                    // Further process todos...
                  } else {
                    console.error("Response is undefined");
                  }
                })
                .catch((error) => {
                  console.error("Error fetching todos:", error);
                });
            case "completed":
                return getCompletedTodo()
                .then((response) => {
                  if (response) {
                    // Check if response is not undefined
                    const todos = response.data.todos;
                    setTodoData(todos);
                     // Access the data property
                    // Further process todos...
                  } else {
                    console.error("Response is undefined");
                  }
                })
            case "uncompleted":
                return getUncompletedTodo()
                .then((response) => {
                  if (response) {
                    // Check if response is not undefined
                    const todos = response.data.todos;
                    setTodoData(todos);
                     // Access the data property
                    // Further process todos...
                  } else {
                    console.error("Response is undefined");
                  }
                })
        }
    }

    return (
        <Select onValueChange={(value) => handleFilter(value)} defaultValue="all" >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter Todo" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
          <SelectItem value="uncompleted">Uncompleted</SelectItem>
        </SelectContent>
      </Select>
    );
}

export default Filter;
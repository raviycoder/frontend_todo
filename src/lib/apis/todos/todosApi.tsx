import axios from "axios"; // Adjust URL according to your backend API
import { useCookies } from "react-cookie";

const todosApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, // Adjust URL according to your backend API
  withCredentials: true, // Include cookies in the request
});

export const fetchTodos = async () => {
  try {
    const res = await todosApi.get("/api/todo/get-todos");
    console.log("todos", res.data.todos);
    return res;
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};

export const deleteTodo = async ({
  id,
  isdeleteData,
}: {
  id: string;
  isdeleteData: boolean;
}) => {
  try {
    const res = await todosApi.delete(`/api/todo/delete-todo/${id}`, {
      data: { isdeleteData }, // Assuming the boolean value needs to be sent as data
    });
    console.log("delete", res);
    return res;
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};

export const completeTodo = async (id: string) => {
  try {
    const res = await todosApi.patch(`/api/todo/complete-todo/${id}`);
    console.log("complete", res);
    return res;
  } catch (error) {
    console.error("Error completing todo:", error);
  }
};

export const uncheckedTodo = async (id: string) => {
  try {
    const res = await todosApi.patch(`/api/todo/uncomplete-todo/${id}`);
    console.log("unchecked", res);
    return res;
  } catch (error) {
    console.error("Error unchecked todo:", error);
  }
};

export const getCompletedTodo = async () => {
  try {
    const res = await todosApi.get("/api/todo/completed-todos");
    console.log("completed", res);
    return res;
  } catch (error) {
    console.error("Error unchecked todo:", error);
  }
};

export const getUncompletedTodo = async () => {
  try {
    const res = await todosApi.get("/api/todo/uncompleted-todos");
    console.log("uncompletd", res);
    return res;
  } catch (error) {
    console.error("Error unchecked todo:", error);
  }
};

export const getDeletedTodos = async () => {
  try {
    const res = await todosApi.get("/api/todo/get-deleted-todos");
    console.log("deleted", res);
    return res;
  } catch (error) {
    console.error("Error unchecked todo:", error);
  }
};

export const restoreTodo = async (id:string) => {
  try {
      const res = await todosApi.patch(`/api/todo/restore-todo/${id}`);
      console.log("restore", res);
      return res;
  } catch (error) {
    console.error("Error unchecked todo:", error);
  }
};
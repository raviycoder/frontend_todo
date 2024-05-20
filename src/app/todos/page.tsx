"use client";
import AddTodo from "@/components/AddTodo";
import Navbar from "@/components/Navbar";
import Todos from "@/components/Todos";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchTodos } from "@/lib/apis/todos/todosApi";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { CheckAuth } from "@/lib/CheckAuth";
import { CookiesProvider } from "react-cookie";

const Page = () => {
  const [todoData, setTodoData] = useState(null);
  useEffect(() => {
    fetchTodos().then((res) => {
      setTodoData(res?.data.todos);
    });
  }, []);
  console.log(CookiesProvider)
  return (
    <>
      <Navbar />
      <CheckAuth/>
      {todoData != null ? (
        <>
          <Todos todoData={todoData} setTodoData={setTodoData} />
        </>
      ) : (
        <div className="max-w-6xl mx-auto px-4 mb-5 overflow-x-hidden">
          <div className="items-center justify-between sm:flex mt-2 mb-4">
            <div>
              <h4 className="text-gray-800 text-xl font-semibold sm:text-nowrap mr-2">
                All Todos
              </h4>
            </div>
            <div className="flex w-full justify-between max-sm:space-x-2">
              <Skeleton className="w-[140px] h-[40px] rounded-xl" />
              <Skeleton className="w-[140px] h-[40px] rounded-xl" />
            </div>
          </div>
          <Skeleton className="w-[1500px] h-[100px] rounded-xl" />
          <Skeleton className="w-[1500px] h-[100px] rounded-xl mt-4" />
          <Skeleton className="w-[1500px] h-[100px] rounded-xl mt-4" />
        </div>
      )}
      <Footer/>
    </>
  );
};

export default Page;

"use client";
import DeletedTodos from "@/components/DeletedTodos";
import Navbar from "@/components/Navbar";
import { Skeleton } from "@/components/ui/skeleton";
import { getDeletedTodos } from "@/lib/apis/todos/todosApi";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { CheckAuth } from "@/lib/CheckAuth";

const Page = () => {
  const [todoData, setTodoData] = useState(null);
  useEffect(() => {
    getDeletedTodos().then((res) => {
      setTodoData(res?.data.todos);
    });
  }, []);
  return (
    <>
      <Navbar />
      <CheckAuth/>
      {todoData == null ? (
        <div className="max-w-6xl mx-auto px-4 mb-5 overflow-x-hidden">
          <Skeleton className="w-[1500px] h-[100px] rounded-xl" />
          <Skeleton className="w-[1500px] h-[100px] rounded-xl mt-4" />
          <Skeleton className="w-[1500px] h-[100px] rounded-xl mt-4" />
        </div>
      ) : (
        <DeletedTodos todoData={todoData} setTodoData={setTodoData} />
      )}
      <Footer/>
    </>
  );
};

export default Page;

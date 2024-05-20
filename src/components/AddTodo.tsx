"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, useForm, useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "./ui/form";
import { toast } from "./ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import TodoForm from "./TodoForm";
import { useState } from "react";

interface Todo {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  userId: string;
  deletedAt: boolean;
  alarmAt: string;
  __v: number;
}
const emptyTodo: Todo = {
  _id: '',
  title: '',
  description: '',
  completed: false,
  userId: '',
  deletedAt: false,
  alarmAt: '',
  __v: 0,
};

interface Props {
  isChange: boolean;
  todos: Todo;
}
const AddTodo = ({setTodoData}:{setTodoData:(Data:any)=>void}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
          Add New Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>Add a new task to your list</DialogDescription>
        </DialogHeader>
        <TodoForm isChange={false} todos={emptyTodo} setTodoData={setTodoData} />
      </DialogContent>
    </Dialog>
  );
};

export default AddTodo;

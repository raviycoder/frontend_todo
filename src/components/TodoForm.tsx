"use client";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "./ui/textarea";
import axios from "axios";
import { withCookies } from "react-cookie";
import { DialogClose } from "./ui/dialog";
import { useEffect, useRef, useState } from "react";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { fetchTodos } from "@/lib/apis/todos/todosApi";
import { error } from "console";

const FormSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().optional(),
  alarmAt: z.date().optional(),
});

interface Todo {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  userId: string;
  deletedAt: boolean;
  alarmAt: string;
}

interface Props {
  isChange: boolean;
  todos: Todo;
  setTodoData:(Data:any)=>void;
}

const TodoForm: React.FC<Props> = ({ isChange, todos, setTodoData }) => {
  const { toast } = useToast();
  const [condition, setCondition] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const response = fetchTodos()

  // Effect to click the button when the condition becomes true
  useEffect(() => {
    if (condition && buttonRef.current) {
      buttonRef.current.click();
    }
  }, [condition]);
  // 1. Define your form.
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: isChange ? todos.title : "",
      description: isChange ? todos.description : "",
      alarmAt: isChange && todos.alarmAt ? new Date(todos.alarmAt) : new Date(),
    },
  });

async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (isChange) {
      axios
        .put(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/todo/update-todo/${todos._id}`,
          data,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.statusText == "OK") {
            toast({
              title: "Todo updated successfully",
              description: "Your todo has been updated successfully.",
            });
          }
          setCondition(!condition);
        })
        .catch((err) => {
          toast({
            title: "Todo updated failed",
            description: "Your todo has been updated failed.",
          });
        });
    } else {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/todo/create-todo`,
          data,
          {
            withCredentials: true,
          }
        )
        .then((res) => { console.log(res)
          if (res.statusText == "Created") {
            toast({
              title: "Todo added successfully",
              description: "Your todo has been added successfully.",
            });
          }
          setCondition(!condition);
        })
        .catch((err) => {
          toast({
            title: "Todo added failed",
            description: "Your todo has been added failed.",
          });
        });
    }
    form.reset();
    const datas = await fetchTodos();
    setTodoData(datas?.data.todos);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter the title of the task..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe the task in detail..."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="alarmAt"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of Task</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date: Date) =>
                      date.getTime() < new Date().getTime()
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
        <Button type="submit">Add Todo</Button>
      </form>
      <DialogClose>
        {" "}
        <button type="button" ref={buttonRef} style={{ display: "none" }}>
          Hidden Button
        </button>
      </DialogClose>
    </Form>
  );
};

export default TodoForm;

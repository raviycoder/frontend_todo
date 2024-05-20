"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Label } from "./ui/label";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { login } from "@/lib/apis/auth/userApi";

const formSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email is not valid",
    })
    .email({
      message: "Please add valid email",
    }),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password is not valid",
    })
    .min(8, { message: "atleast 8 charcater password" }),
});

const Login = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [cookies, setCookie] = useCookies();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  useEffect(() => {
    if (cookies.token && cookies.token !== 'undefined') {
      router.push("/");
    }
  }, [cookies.token, router]);

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    login(values)
      .then((res) => {
        if (res.status == 200) {
          router.push("/");
          toast({
            title: "Your Successfully Login",
          });
          if (!cookies.token || cookies.token === 'undefined') {
            setCookie("token", res.data.token, {
              // httpOnly: true, // Cookie is not accessible via JavaScript
              secure: false, // Only send over HTTPS in production
              maxAge: 21 * 24 * 60 * 60 * 1000, // Cookie expires in 21 days
              path: "/", // Cookie available for all routes
            });
          }
        }
      })
      .catch((err) => {
        toast({
          title: "Login Failed",
          description: "If your not signup then please first signup",
          variant: "destructive",
        });
      });
    // console.log(values);
    // axios
    //   .post("http://localhost:8080/api/auth/login", values, { withCredentials: true })
    //   .then((res) => {
    //     if (!cookies.token) {
    //       setCookie("token", res.data.token, {
    //        // httpOnly: true, // Cookie is not accessible via JavaScript
    //        secure: false, // Only send over HTTPS in production
    //        maxAge: 21 * 24 * 60 * 60 * 1000, // Cookie expires in 21 days
    //        path: '/', // Cookie available for all routes
    //       });
    //     }
    //     if (res.statusText == "OK") {
    //       router.push("/");
    //       toast({
    //         title: "Your Successfully Login",
    //       });
    //     }
    //     if (res.data.message == "Unauthorized") {
    //       toast({
    //         title: "Login Failed",
    //         description: "If your not signup then please first signup",
    //         variant: "destructive",
    //       });
    //     }
    //   })
    //   .catch((err) =>
    //     toast({
    //       title: "Login Failed",
    //       description: "If your not signup then please first signup",
    //       variant: "destructive",
    //     })
    //   );
  }
  return (
    <div className="h-screen w-full flex items-center">
      <Card className="mx-auto max-w-sm ">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/auth/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;

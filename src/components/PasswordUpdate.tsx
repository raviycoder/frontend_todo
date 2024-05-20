"use client";
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
} from "@/components/ui/alert-dialog";
import { MdEdit } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { updatePassword } from "@/lib/apis/auth/userApi";

const FormSchema = z.object({
  oldPassword: z.string().min(8, {
    message: "Password is required",
  }),
  newPassword: z.string().min(8, {
    message: "Minimum 8 length password is required",
  }),
});

const PasswordUpdate = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
    },
  });

  const [isOpen, setIsOpen] = useState(false); // State to control dialog visibility
  const [isError, setIsError] = useState("");

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data) {
      // Only close the dialog if the input is not empty
      updatePassword(data)
        .then((res) => {
          toast({
            title: "Your Password Updated Successfully",
          });
          setIsOpen(false);
          form.reset();
        })
        .catch((err) => {
          toast({
            title: "Password Not Updated",
            description: "Please enter a valid Password",
          });
          setIsError(err.response.data.message);
        });
    } else {
      toast({
        title: "Password Not Updated",
        description: "Please enter a valid Password",
      });
      form.reset();
    }
  }

  return (
    <>
      <AlertDialog open={isOpen} onOpenChange={() => setIsOpen(true)}>
        <AlertDialogTrigger className="p-3 px-4 rounded-md hover:bg-slate-200 bg-slate-100">
          <MdEdit className="text-xl" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Change Password</AlertDialogTitle>
            <AlertDialogDescription className="flex max-sm:justify-center">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-2/3 space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="oldPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel >Current Password</FormLabel>
                        <FormControl>
                          <Input placeholder="Current Password" {...field} />
                        </FormControl>
                        <FormMessage />
                        <p className="text-red-500 font-medium">{isError}</p>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>New Password</FormLabel>
                        <FormControl>
                          <Input placeholder="New Password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <AlertDialogAction>
                    <Button type="submit">Submit</Button>
                  </AlertDialogAction>
                  {isOpen && (
                    <Button
                      variant="secondary"
                      onClick={() => setIsOpen(false)}
                      className="ml-2"
                    >
                      Close
                    </Button>
                  )}
                </form>
              </Form>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default PasswordUpdate;

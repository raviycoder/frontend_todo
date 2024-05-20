import React from "react";
import { User } from "@/lib/utils/types/user";
import { Button } from "./ui/button";
import { updateUser } from "@/lib/apis/auth/userApi";
import { RxCrossCircled } from "react-icons/rx";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { set } from "date-fns";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
});

interface EditProfileProps {
  user: User;
  setIsInput: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  field: string; // Add field prop
}

const EditProfile: React.FC<EditProfileProps> = ({
  user,
  setIsInput,
  setUser,
  field, // Retrieve field prop
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: user.username,
      email: user.email, // Include email in default values
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      updateUser(data).then((res) =>  setUser(res.data.user))
      toast({
        title: "Profile updated"
      });
      setIsInput(false)
    } catch (error) {
      toast({
        title: "Error updating profile",
        description:
          "There was an error updating your profile. Please try again.",
      });
    }
  }

  return (
    <Form {...form}>
      <div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-row w-96">
          <div className="text-gray-700 sm:col-span-4">
            <FormField
              control={form.control}
              name={field as "username" | "email"}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={field.name === 'username' ? 'Username' : 'Email'} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="font-medium text-gray-900 inline-flex ml-5">
            <Button type="submit" variant="secondary">
              Update
            </Button>
            <Button
              type="button"
              onClick={() => setIsInput(false)}
              variant="destructive"
              className="ml-2"
            >
              <RxCrossCircled className="text-xl" />
            </Button>
          </div>
        </form>
      </div>
    </Form>
  );
  
};

export default EditProfile;

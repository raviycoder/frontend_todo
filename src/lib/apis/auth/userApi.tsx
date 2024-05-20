import { toast } from "@/components/ui/use-toast";
import { User } from "@/lib/utils/types/user";
import axios from "axios";
import { useRouter } from "next/navigation";

const userApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (values: { email: string; password: string }) => {
  const res = await userApi.post("/api/auth/login", values);
  return res;
};

export const signup = async (values: {username:string; email: string; password: string }) => {
  const res = await userApi.post("/api/auth/signup", values);
  return res;
};

export const getUser = async (): Promise<User> => {
    const res = await userApi.get<User>("/api/auth/user");
    return res.data.user;
}

export const updateUser = async (values: {username:string; email: string; }) => {
  const res = await userApi.patch("/api/auth/update-user", values);
  return res;
}

export const updatePassword = async (values: {oldPassword:string; newPassword: string}) => {
  const res = await userApi.patch("/api/auth/update-password", values);
  return res;
}
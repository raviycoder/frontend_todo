"use client";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const LogoutUser = ({
  cookies,
  removeCookie,
}: {
  cookies: any;
  removeCookie: any;
}) => {
  const router = useRouter();

  const handleLogout = () => {
    if (cookies.todo_token) {
      removeCookie("todo_token");
      router.push("/auth/login");
    }else{
      router.push("/auth/signup");
    }
  };
  // This component doesn't need to render anything
  return (
    <button onClick={handleLogout}>
      <span>Logout</span>
    </button>
  );
};

export default LogoutUser;

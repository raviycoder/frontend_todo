"use client ";
import { useCookies } from "react-cookie";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import Link from "next/link";
import LogoutUser from "./Logout";

const UserDropdown = () => {
  const [cookies, removeCookie] = useCookies()
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          {" "}
          <Avatar className=" ring-2 ring-inherit rounded-full ring-offset-2">
            <AvatarImage
              src="https://res.cloudinary.com/dccaxfmwv/image/upload/v1709016066/403017_avatar_default_head_person_unknown_icon_z9dacc.png"
              height={30}
              width={30}
              className=""
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {!cookies.token ? (
            <>
              <Link href="/auth/login">
                <DropdownMenuItem>Login</DropdownMenuItem>
              </Link>
              <Link href="/auth/signup">
                <DropdownMenuItem>Sign Up</DropdownMenuItem>
              </Link>
            </>
          ) : (
            <>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href="/profile">
                <DropdownMenuItem>Profile</DropdownMenuItem>
              </Link>
              <DropdownMenuItem><LogoutUser cookies={cookies} removeCookie={removeCookie} /></DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserDropdown;

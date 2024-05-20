import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import { CheckAuth } from "@/lib/CheckAuth";

const page = () => {
    return (
        <>
        <Navbar/>
        <CheckAuth/>
        <Profile/>
        </>
    );
}

export default page;
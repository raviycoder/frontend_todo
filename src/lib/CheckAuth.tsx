"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react";
import { useCookies } from "react-cookie"

export function CheckAuth() {
    const [cookies] = useCookies();
    const router = useRouter();
    const token = cookies.token === "undefined" || !cookies.token;

    useEffect(() => {
        if (token) {
            router.push("/auth/login");
        }
    }, [router, token]);

    return null;
}
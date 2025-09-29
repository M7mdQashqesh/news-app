"use client";
import Header from "@/components/header/Header";
import { IUser } from "@/types";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const Page = () => {
  const user: IUser = JSON.parse(localStorage.getItem("auth-user") || "{}");

  if (!user || user.role !== "admin") {
    toast.error("You Don't have Permission to access this page!");
    redirect("/login");
  }

  return (
    <div>
      <Header />
      Admin Page
    </div>
  )
}

export default Page;

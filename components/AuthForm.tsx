import React from 'react'

"use client"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from 'zod'

const authFormSchema = (type: FormType) => {
    return z.object({
      name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
      email: z.string().email(),
      password: z.string().min(3),
    });
  };
  
  const AuthForm = ({ type }: { type: FormType }) => {
    const router = useRouter();
  
    const formSchema = authFormSchema(type);
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        email: "",
        password: "",
      },
    });

const AuthForm = () => {
  return (
    <div>AuthForm</div>
  )
}

}
export default AuthForm;

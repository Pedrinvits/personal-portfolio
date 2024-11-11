"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { useToast }  from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"
import { useState } from "react"

const formSchema = z.object(
    {
        "name" :z.string().min(1).max(255),
        "email" :z.string().email().min(1).max(255),
        "message" :z.string().min(1).max(255)
    }
)

export function FormComponent() {
  const { toast } = useToast()
  const [isSubmiting,setIsSubmiting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    name: "",
    email: "",
    message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmiting(true)
    try {
         const res = await axios.post('/api/contact',values)
        if(res.status == 200) {
            toast({
                title: res.data.message,
            })
        }
    }catch(err){
        toast({
            title: "An unexpected issue occurred. Please try again later",
        })
        
    }
    finally {
        setIsSubmiting(false)
    }
  }

  return (
    <Form {...form}>
      <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-card shadow-md w-full sm:w-[600px] mt-20 p-5 rounded-lg">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Your name"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input  {...field} placeholder="your@email.com"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Your message ..."/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
        <Button type="submit" className="w-full sm:w-fit self-start" disabled={isSubmiting}>
        {isSubmiting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Submit"}
        </Button>
      </form>
    </Form>
  )
}

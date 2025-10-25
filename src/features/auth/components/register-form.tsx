"use client"

import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {useForm} from "react-hook-form";
import {authClient} from "@/lib/auth-client";
import {toast} from "sonner";
import {useRouter} from "next/navigation";

const registerSchema = z.object({
    email: z.email("Please enter a valid email"),
    password: z.string().min(1,"Password is required"),
    confirmPassword: z.string().min(1,"Password is required"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"]
});

type registerFormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
    const router = useRouter();

    const form = useForm<registerFormValues>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        }
    });

    const onSubmit = async (values: registerFormValues) => {
        await authClient.signUp.email({
            name: values.email,
            email: values.email,
            password: values.password,
            callbackURL: "/"
            },
            {
                onSuccess: () => {
                    router.push("/");
                },
                onError: () => {
                    toast.error("Error occured");
                }
            }
        );
    }

    const isPending = form.formState.isSubmitting;


    return (
        <div className="flex flex-col gap-6">
            <Card>
                <CardHeader className={'text-center'}>
                    <CardTitle>
                        Get started
                    </CardTitle>
                    <CardDescription>
                        Create your accout
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="grid gap-6">
                                <div className="flex flex-col gap-4">
                                    <Button
                                    variant={"outline"}
                                    className={'w-full'}
                                    type={"button"}
                                    disabled={isPending}
                                    >
                                        Continue with google
                                    </Button>
                                    <Button
                                        variant={"outline"}
                                        className={'w-full'}
                                        type={"button"}
                                        disabled={isPending}
                                    >
                                        Continue with Github
                                    </Button>
                                </div>
                                <div className="grid gap-6">
                                    <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field})=> (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                type={'email'}
                                                placeholder={'m@example.com'}
                                                {...field}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({field})=> (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type={'password'}
                                                        placeholder={'*******'}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="confirmPassword"
                                        render={({field})=> (
                                            <FormItem>
                                                <FormLabel>Confirm Password</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type={'password'}
                                                        placeholder={'*******'}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <Button type={"submit"} className={'w-full'} disabled={isPending}>
                                        Login
                                    </Button>
                                </div>
                                <div className={'text-center text-sm'}>
                                    Already have an account?{" "}
                                    <Link href="/login" className={'underline underline-offset-4'}>
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </form>

                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
"use client"

import * as z from 'zod';
import axios from 'axios';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";



const formSchema = z.object({
    title: z.string().min(1, {
        message: "Введите название курса",
    }),
});

const CreatePage = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: ""
        },
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await axios.post('/api/courses', values);
            router.push(`/teacher/courses/${response.data.id}`);
            toast.success("Курс создан успешно")
        } catch {
            toast.error('Что-то пошло не так =(')
        }
    };

    return (
        <div className='max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6'>
            <div className='text-2xl'>
                <h1>Ваш курс</h1>
                <p className='text-sm text-slate-600'>
                    Как бы вы хотели назвать свой курс? Не волнуйтесь, вы всегда можете изменить его название
                </p>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-8 mt-8'
                    >
                        <FormField
                            control={form.control}
                            name='title'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Название курса
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isSubmitting}
                                            placeholder='К примеру, Машинное обучение: свойство метода случайного леса'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Чему вы будете обучать на данном курсе?
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className='flex items-center gap-x-2'>
                            <Link href="/">
                                <Button
                                    type="button"
                                    variant="ghost"
                                >
                                    Отменить
                                </Button>
                            </Link>
                            <Button
                                type='submit'
                                disabled={!isValid || isSubmitting}
                            >
                                Продолжить
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default CreatePage;
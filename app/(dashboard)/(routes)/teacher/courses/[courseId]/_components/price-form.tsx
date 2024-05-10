"use client"

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";


import {
    Form,
    FormControl,
    FormItem,
    FormField,
    FormMessage
} from "@/components/ui/form"
import { cn } from "@/lib/utils";
import { Course } from "@prisma/client";
import { formatPrice } from "@/lib/format";




interface PriceFormProps {
    initialData: Course;
    courseId: string;
};

const formSchema = z.object({
    price: z.coerce.number(),
});

export const PriceForm = ({
    initialData,
    courseId,
}: PriceFormProps) => {
    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => setIsEditing((current) => !current)
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            price: initialData?.price || undefined,
        },
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.patch(`/api/courses/${courseId}`, values);
            toast.success("Курс обновлен успешно");
            toggleEdit();
            router.refresh();
        } catch {
            toast.error("Что-то пошло не так =(");
        }
    }

    return (
        <div className="mt-6 border bg-slate-100 rounded-md p-4">
            <div className="font-medium flex items-center justify-between">
                Цена курса
                <Button onClick={toggleEdit} variant="ghost">
                    {isEditing && (
                        <>Назад</>
                    )}
                    {!isEditing && (
                        <>
                            <Pencil className="h-4 w-4 mr-2" />
                            Редактировать цену
                        </>
                    )}
                </Button>
            </div>
            {!isEditing && (
                <p className={cn(
                    "text-sm mt-2",
                    !initialData.price && "text-slate-500 italic"
                )}>
                    {initialData.price ? formatPrice(initialData.price) : "Бесплатно"}
                </p>
            )}
            {isEditing && (
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className=" space-y-4 mt-4"
                    >
                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            step="0"
                                            disabled={isSubmitting}
                                            placeholder="Введите свою ценю за данный курс"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex items-center gap-x-2">
                            <Button
                                disabled={!isValid || isSubmitting}
                                type="submit"
                            >
                                Сохранить
                            </Button>
                        </div>
                    </form>
                </Form>
            )
            }
        </div >
    )
}
"use client";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface CourseEnrollButtonProps {
    price: number;
    courseId: string;
}

export const CourseEnrollButton = ({
    price,
    courseId
}: CourseEnrollButtonProps) => {
    const [isLoading, setIsLoaing] = useState(false);

    const onClick = async () => {
        try {
            setIsLoaing(true);

            const response = await axios.post(`/api/courses/${courseId}/checkout`)

            window.location.assign(response.data.url);
        } catch {
            toast.error("Что-то пошло не так =(")
        } finally {
            setIsLoaing(false);
        }
    }

    return (
        <Button
            size="sm"
            className="w-full md:w-auto"
            onClick={onClick}
            disabled={isLoading}
        >
            {price !== null ? (
                <span>Записаться за {formatPrice(price)}</span>
            ) : (
                <span className="">
                    Бесплатная запись!
                </span>
            )}
        </Button>
    )
}
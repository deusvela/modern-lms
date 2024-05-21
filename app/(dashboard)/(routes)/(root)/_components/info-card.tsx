import { IconBadge } from "@/components/icon-badge";
import { LucideIcon, icons } from "lucide-react";

interface InfoCardProps {
    icon: LucideIcon;
    label: string;
    numberOfItems: number;
    variant?: "default" | "success";
}


export const InfoCard = ({
    variant,
    icon: Icon,
    label,
    numberOfItems
}: InfoCardProps) => {

    const titles = ["Курс", "Курса", "Курса", "Курса", "Курсов"];

    const getCoursesTitle = (number: number): string => {
        let title;
        if (number % 10 === 1 && number % 100 !== 11) {
            title = titles[0];
        } else if ((number % 10 >= 2 && number % 10 <= 4) && (number % 100 < 10 || number % 100 >= 20)) {
            title = titles[1];
        } else {
            title = titles[4];
        }
        return title;
    };

    return (
        <div className="border rounded-md flex items-center gap-x-2 p-3">
            <IconBadge
                variant={variant}
                icon={Icon}
            />
            <div>
                <p className="font-medium">
                    {label}
                </p>
                <p className="text-gray-500 text-sm">
                    {numberOfItems} {getCoursesTitle(numberOfItems)}
                </p>
            </div>
        </div>
    )
}
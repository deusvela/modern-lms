import Image from "next/image";
import Link from "next/link";
import { IconBadge } from "@/components/icon-badge";
import { BookOpen } from "lucide-react";
import { formatPrice } from "@/lib/format";

interface CourseCardProps {
    id: string;
    title: string;
    imageUrl: string;
    chaptersLength: number;
    price: number;
    progress: number | null;
    category: string;
}

export const CourseCard = ({
    id,
    title,
    imageUrl,
    chaptersLength,
    price,
    progress,
    category
}: CourseCardProps) => {

    const titles = ["Глав", "Глава", "Главы", "Главы"];
    const getChapterTitle = (length: any) => titles[length > 4 ? 0 : length];

    return (
        <Link href={`/courses/${id}`}>
            <div className="group hover:shadow-sm transition overflow-hidden border border-slate-200 rounded-lg p-3 h-full">
                <div className="relative w-full aspect-video rounded-md overflow-hidden">
                    <Image
                        fill
                        className="object-cover"
                        alt={title}
                        src={imageUrl}
                    />
                </div>
                <div className="flex flex-col pt-2">
                    <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
                        {title}
                    </div>
                    <p className="text-xs text-muted-foreground">
                        {category}
                    </p>
                    <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
                        <div className="flex items-center gap-x-1 text-slate-500">
                            <IconBadge
                                size="sm"
                                icon={BookOpen}
                            />
                            <span>
                                {chaptersLength} {getChapterTitle(chaptersLength)}
                            </span>
                        </div>
                    </div>
                    {progress !== null ? (
                        <div>
                            nana
                        </div>
                    ) : (
                        <p className="text-xl md:text-sm font-medium text-slate-700">
                            {price !== null ? (
                                <span>
                                    {formatPrice(price)}
                                </span>
                            ) : (
                                <span className="text-sky-700">
                                    Бесплатно!
                                </span>
                            )}
                        </p>
                    )}
                </div>
            </div>
        </Link>
    )
}


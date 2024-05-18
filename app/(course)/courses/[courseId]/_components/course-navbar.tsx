import { NavbarRoutes } from "@/components/navbar-routes";
import { Chapter, Course, userProgress } from "@prisma/client"
import { CourseMobileSidebar } from "./course-mobile-sidebar";



interface CourseNavbarProps {
    course: Course & {
        chapters: (Chapter & {
            userProgress: userProgress[] | null;
        })[]
    };
    progressCount: number;
};

export const CourseNavbar = ({
    course,
    progressCount
}: CourseNavbarProps) => {
    return (
        <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
            <CourseMobileSidebar
                course={course}
                progressCount={progressCount}
            />
            <NavbarRoutes />
        </div>
    )
}
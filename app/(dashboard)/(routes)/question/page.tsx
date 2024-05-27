import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const QuationPage = () => {
    return (
        <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full">
            <Accordion type="single" collapsible className="w-full text-slate-600 text-2xl p-10 border rounded-lg">
                <AccordionItem value="item-1" className="hover:bg-slate-100 transition ">
                    <AccordionTrigger>У меня пропал курс</AccordionTrigger>
                    <AccordionContent className="text-base">
                        Не волнуйтесь, курс, который вы приобрели, сейчас находится в доработке, в ближайшее время все вернется
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="hover:bg-slate-100 transition">
                    <AccordionTrigger>У меня возникли проблемы при выполнении курса</AccordionTrigger>
                    <AccordionContent className="text-base">
                        В данном случае перейдите по данной <Link href="https://discord.gg/s4gSQNBJ" className="underline text-sky-500 hover:no-underline">ссылке</Link>, здесь Вы сможете задать вопрос или уже найти на него ответ
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="hover:bg-slate-100 transition">
                    <AccordionTrigger>Открывается ли доступ к курсу навсегда?</AccordionTrigger>
                    <AccordionContent className="text-base">
                        Курсы будут дорабатываться, в течение определенного времени могут быть недоступны. Следите за новостями в <Link href="https://vk.com/feed" className="underline text-sky-500 hover:no-underline">Telegram</Link> канале.
                        <br />
                        <br />
                        Там же я смогу ответить на ваши вопросы
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="hover:bg-slate-100 transition">
                    <AccordionTrigger>Есть ли чат/платформа, где я могу задать свой вопрос?</AccordionTrigger>
                    <AccordionContent className="text-base">
                        Да, есть чат в <Link href="https://t.me/+idtyLk2KMIw4ZGUy" className="underline text-sky-500 hover:no-underline">Telegram</Link> канале разбитый на темы. Там Вы сможете обсуждать с участниками курса различные вопросы + я отвечаю на все вопросы
                        <br />
                        <br />
                        Также есть <Link href="https://discord.gg/s4gSQNBJ" className="underline text-sky-500 hover:no-underline">Discord</Link> канал. Здесь Вы сможете общаться в голосовых каналах с другими участниками, а также познакомиться с единомышленниками
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default QuationPage;
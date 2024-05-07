const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
    try {
        await database.category.createMany({
            data: [
                { name: "Компьютерные технологии" },
                { name: "Музыка" },
                { name: "Фитнес" },
                { name: "Фотосъемка" },
                { name: "Инженерия" },
                { name: "Машинное обучение" },
                { name: "Видеосъемка" },
            ]
        });

        console.log("Успех")
    } catch (error) {
        console.log("Ошибка в категории базы данных", error)
    } finally {
        await database.$disconnect();
    }
}
main();
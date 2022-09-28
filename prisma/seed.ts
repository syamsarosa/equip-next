import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
	try {
		console.log("try");
		await prisma.role.createMany({
			data: [
				{
					role: "admin",
				},
				{
					role: "editor",
				},
			],
		});
	} catch (error) {
		console.log("catch");
		console.error(error);
	} finally {
		console.log("finally");
		await prisma.$disconnect();
	}
}

seed();

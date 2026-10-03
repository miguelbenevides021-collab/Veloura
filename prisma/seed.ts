import { prisma } from "../lib/prisma";

async function main() {
  
}

main()
  .then(async () => {
    await prisma.$disconnect();

    const user = await prisma.user.create({
        data:
        {
            name:"Miguel Benevides Nunes Souza",
            email:"miguel.benevidesnunes@gmail.com",
            password:"123456"
        }
    })
    console.log("User created:", user);
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
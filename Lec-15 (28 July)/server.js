const { PrismaClient } = require('./generated/prisma')

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
    await prisma.user.create({
    data: {
      name: 'Paras2',
      email: 'paras2@prisma.io',
      posts: {
        create: { title: 'Hello World',
            newContent: 'THIS IS NEW CONTENT'
         },
      },
      profile: {
        create: { bio: 'I like Football' },
      },
    },
  })

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  })
  console.log(allUsers);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
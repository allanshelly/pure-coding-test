import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
  console.log('🔄 Seeding database...')

  for (let i = 1; i <= 100; i++) {
    const agent = await prisma.propertyAgent.create({
      data: {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: `agent${i}@example.com`, // ensure unique
        mobileNumber: faker.phone.number(),
        properties: {
          create: [
            createPropertyWithDetails(),
            createPropertyWithDetails()
          ]
        }
      }
    })

    console.log(`✅ Created agent ${agent.email}`)
  }

  console.log('🎉 Done seeding.')
}

function createPropertyWithDetails() {
  return {
    address: faker.location.streetAddress(),
    tenants: {
      create: Array.from({ length: 3 }).map(() => ({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number()
      }))
    },
    notes: {
      create: Array.from({ length: 2 }).map(() => ({
        content: faker.lorem.sentence()
      }))
    },
    reminders: {
      create: Array.from({ length: 2 }).map(() => ({
        description: faker.lorem.words(5),
        dueDate: faker.date.soon({ days: 30 }),
        completed: faker.datatype.boolean()
      }))
    }
  }
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

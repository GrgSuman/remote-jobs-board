const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
async function main() {
  console.log('Seeding database...');

  // Create Categories
//   const category = await prisma.category.create({
//     data: {
//       name: 'Software Engineering',
//       description: 'Jobs related to software development and engineering.',
//     },
//   });

  // Create Skills
  // const skill1 = await prisma.skill.create({ data: { name: 'JavaScript' } });
  // const skill2 = await prisma.skill.create({ data: { name: 'React.js' } });
  // const skill3 = await prisma.skill.create({ data: { name: 'Node.js' } });

  // // Create a Company
  // const company = await prisma.company.create({
  //   data: {
  //     name: 'TechCorp',
  //     description: 'A leading tech company.',
  //     logo: 'https://example.com/logo.png',
  //     website: 'https://techcorp.com',
  //     industry: 'Software',
  //     size: '50-200 employees',
  //     remotePolicy: 'Fully Remote',
  //     userId:"cm6mq50nu0002jm5wjz8p399k",
  //   },
  // });

  // Create a Job Posting
  // const job = await prisma.job.create({
  //   data: {
  //     title: 'Full Stack Developer',
  //     description: 'Looking for an experienced Full Stack Developer.',
  //     type: 'Full-time',
  //     salaryRange: '$80k - $100k',
  //     location: 'Remote in Australia',
  //     experience: 'Mid-level',
  //     applicationLink: 'https://example.com/apply',
  //     userId: "cm6mq50nu0002jm5wjz8p399k",
  //     companyId: 1,
  //     categoryId: 1,
  //     skills: {
  //       connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
  //     },
  //   },
  // });

  // Create a Boost (Premium Feature)
//   await prisma.boost.create({
//     data: {
//       jobId: job.id,
//       userId: employerUser.id,
//       startDate: new Date(),
//       endDate: new Date(new Date().setDate(new Date().getDate() + 7)), // 7-day boost
//       cost: 50.0,
//     },
//   });

//   // Create an Impression (Analytics)
//   await prisma.impression.create({
//     data: {
//       jobId: job.id,
//       userId: employerUser.id,
//       clicked: true,
//     },
//   });

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

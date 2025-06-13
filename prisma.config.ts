import path from 'node:path';
import type { PrismaConfig } from 'prisma';

export default {
  earlyAccess: true,
  schema: path.join(__dirname, '/src/prisma/schema.prisma'),
} satisfies PrismaConfig;

import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaMariaDb({
  host:"localhost",
  user: "root",
  password: "Mi261187",
  database: "ecommerce",
  connectionLimit: 5,
  allowPublicKeyRetrieval: true
});
const prisma = new PrismaClient({ adapter });

export { prisma };
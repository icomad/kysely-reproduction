import dotenv from "dotenv";
dotenv.config();
import Decimal from "decimal.js";
import { Kysely, PostgresDialect, CamelCasePlugin } from "kysely";
import { type Database } from "~/types/db";
import * as pg from "pg";

const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new pg.Pool({
      connectionString: process.env.DATABASE_URL,
    }),
  }),
  plugins: [new CamelCasePlugin()],
});

// This won't work
async function seed() {
  await db
    .insertInto("testTable")
    .values({
      decimalValue: new Decimal(42.69),
    })
    .execute();
}

void seed();

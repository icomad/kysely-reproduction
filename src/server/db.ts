import { CamelCasePlugin, Kysely, PostgresDialect } from "kysely";
import * as pg from "pg";
import Decimal from "decimal.js";
import { type Database } from "~/types/db";
import { env } from "~/env.mjs";

const parseDecimal = (val: string) => {
  const decimal = new Decimal(val);
  console.log("[parser fn] isDecimal: ", Decimal.isDecimal(decimal));
  console.log("[parser fn] typeof: ", typeof decimal);
  return decimal;
};

pg.types.setTypeParser(1700, parseDecimal);

export const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new pg.Pool({
      connectionString: env.DATABASE_URL,
    }),
  }),
  plugins: [new CamelCasePlugin()],
});

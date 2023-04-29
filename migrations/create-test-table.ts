import { type Kysely } from "kysely";
import { type Database } from "~/types/db";

export async function up(db: Kysely<Database>): Promise<void> {
  await db.schema
    .createTable("test_table")
    .addColumn("id", "serial", (col) => col.primaryKey())
    .addColumn("decimal_value", "decimal(4, 2)")
    .execute();
}

export async function down(db: Kysely<Database>): Promise<void> {
  await db.schema.dropTable("test-table").execute();
}

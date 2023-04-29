import Decimal from "decimal.js";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  testDecimal: publicProcedure.query(async ({ ctx }) => {
    const { decimalValue } = await ctx.db
      .selectFrom("testTable")
      .select("decimalValue")
      .executeTakeFirstOrThrow();
    console.log("[router fn] isDecimal: ", Decimal.isDecimal(decimalValue));
    console.log("[router fn] typeof: ", typeof decimalValue);
    return { message: "hello" };
  }),
});

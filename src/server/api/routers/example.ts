import Decimal from "decimal.js";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  testDecimal: publicProcedure.query(async ({ ctx }) => {
    const { decimal } = await ctx.db
      .selectFrom("testTable")
      .select("decimal")
      .executeTakeFirstOrThrow();
    console.log("[router fn] isDecimal: ", Decimal.isDecimal(decimal));
    console.log("[router fn] typeof: ", typeof decimal);
    return { message: "hello" };
  }),
});

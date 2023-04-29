import { type CombinedDataTransformer } from "@trpc/server";
import superjson from "superjson";
import { Decimal } from "decimal.js";

superjson.registerCustom<Decimal | number, number>(
  {
    isApplicable: (v): v is Decimal => Decimal.isDecimal(v),
    serialize: (v) => (v as Decimal).toNumber(),
    deserialize: (v) => new Decimal(v),
  },
  "decimal.js"
);

export const transformer: CombinedDataTransformer = {
  input: superjson,
  output: superjson,
};

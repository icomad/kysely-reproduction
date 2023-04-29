import type Decimal from "decimal.js";

export type TestTable = {
  id: Generated<number>;
  decimalValue: Decimal;
};

export type Database = {
  testTable: TestTable;
};

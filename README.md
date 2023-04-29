# To run

1. Create a local postgres db
1. Clone this repo
1. Create `.env` file and copy content of `.env.example` updating the values for `username`, `password` and `dbname` in `DATABASE_URL` with your appropriate values
1. Install dependencies
1. Run `pnpm migrate` or `npm migrate`
1. Run `pnpm seed` or `npm seed` (This will fail because of problem #1, so insert manually a new row in db)
1. Run the project with `pnpm dev` or `npm dev`
1. Visit localhost:3000 and check server logs

# The problems

1. Inserting a Decimal value will result in error `error: invalid input syntax for type numeric: ""<value>""`
1. Retrieving a postgres decimal value will not be parsed to Decimal in trpc router even after setting `pg.types.setTypeParser(1700, parseDecimal)`

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base of the multiplication table",
  })
  .option("l", {
    alias: "list",
    type: "number",
    default: 10,
    describe: "limit of the multiplication table",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "show the multiplication table in the console",
  })
  .option("d", {
    alias: "destination",
    type: "string",
    default: "./outputs",
    describe: "destination of the file",
  })
  .option("n", {
    alias: "name",
    type: "string",
    default: "multiplication-table",
    describe: "name of the file",
  })
  .check(argv => {
    if (argv.b < 1) throw "The base must be greater than 0";
    if (argv.l < 1) throw "The limit must be greater than 0";
    return true;
  })
  .parseSync();

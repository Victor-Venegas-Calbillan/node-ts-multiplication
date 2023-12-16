import { yarg } from "./config/plugins/yarngs.plugin";
import { ServerApp } from "./presentation/server-app";

(async () => {
  await main();
  //   console.log("termina el programa");
})();

async function main() {
  const {
    b: base,
    l: limit,
    s: showTable,
    d: destination,
    n: nameFile,
  } = yarg;

  ServerApp.run({
    base,
    limit,
    showTable,
    destination,
    nameFile,
  });
}

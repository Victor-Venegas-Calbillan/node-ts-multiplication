import fs from "fs";
import { yarg } from "./config/plugins/yarngs.plugin";

const { b: base, l: limit, s: show } = yarg;

let outputMessage = "";
const headerMessage = `
============================
\t Tabla del ${base}
============================\n
`;

for (let i = 0; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

if (show) {
  console.log(outputMessage);
}

const outpuPath = "outputs";

fs.mkdirSync(outpuPath, { recursive: true });

fs.writeFileSync(
  `${outpuPath}/table-${base}.txt`,
  outputMessage
);

console.log("file created!!");

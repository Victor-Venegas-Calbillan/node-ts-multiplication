export interface CreateTableUseCase {
  execute: (options: CreateTableOption) => string;
}

export interface CreateTableOption {
  base: number;
  limit: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {}

  execute({ base, limit = 10 }: CreateTableOption) {
    let outputMessage = "";
    for (let i = 0; i <= limit; i++) {
      outputMessage += `${base} x ${i} = ${base * i}\n`;
    }

    return outputMessage;
  }
}

#!/usr/bin/env node

import fs from "fs";
import path from "path";

const [, , ...args] = process.argv;

const readWordList = (): string[] => {
  const filePath = path.join(process.cwd(), "./src/20k.txt");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return fileContents.split("\n");
};

const randomNumber = (): number => Math.floor(Math.random() * 9) + 1;

const rollNumbers = (): number => {
  const values: string[] = Array.from({ length: 4 }, () =>
    randomNumber().toString()
  );

  const digits = values.join("");
  return parseInt(digits);
};

const pickWord = () => {
  const words = readWordList();
  const index = rollNumbers();
  return words[index];
};

const generatePhrase = (
  numberOfWords: number = 4,
  delimeter: string = "-"
): string => {
  return Array.from({ length: numberOfWords }, () => pickWord()).join(
    delimeter
  );
};

console.log(generatePhrase(4));

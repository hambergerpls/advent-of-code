import { readFileSync } from "fs";

// Don't hate me for using main(), I'm used to Dart.
async function main(): Promise<void> {

    const contents = readFileSync('input').toString().split('\n');

    let result: [number, number] = [0,0];

    let t0: number = performance.now();
    result = solution(contents);
    let t1: number = performance.now();
    console.log(`Took: ${((t1-t0)*1000).toFixed(0)} microsecs`);
    
    console.log(`Elf ${result[0]} has the highest calories: ${result[1]}`);
};

const solution = (input: string[]): [number, number] => {

    let elfNumber: number = 0;
    let sumCalories: number = 0;
    let highestElf: number = 0;
    let highestCalories: number = 0;

    for (let calories of input) {
        if (!calories) {
            if (sumCalories > highestCalories) {
                highestCalories = sumCalories;
                highestElf = elfNumber;
            }
            elfNumber++;
            sumCalories = 0;
            continue;
        }

        sumCalories += Number.parseInt(calories);
    }

    return [highestElf, highestCalories];

};

main();

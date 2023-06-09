import time 
from typing import List

def main():
    file = open("input", "r")
    contents: List[str] = file.read().split('\n')

    # We could use tuple instead, but it will not
    # be a fair comparison. Not sure if tuple
    # works the same way as list in Python
    # behind the scenes.
    result: List[int] = []

    t0 = time.time_ns()
    result = solution(contents)
    t1 = time.time_ns()  
    print("Took: ", int((t1-t0)/1000)," microsecs")

    print("Elf ", result[0], " has the highest calories: ", result[1])

    
def solution(input: List[str]) -> List[int]:
    current_elf: int = 0
    sum_calories: int = 0
    highest_elf: int = 0
    highest_calories: int = 0

    for calorie in input:
        if (not calorie):
            if (sum_calories > highest_calories):
                highest_calories = sum_calories
                highest_elf = current_elf
            current_elf += 1
            sum_calories = 0
            continue
        sum_calories += int(calorie)

    return [highest_elf, highest_calories]
        
if __name__=="__main__":
    main()

import 'dart:io';

void main() {
  File file = File('input');

  List<String> contents = file.readAsLinesSync();

  final stopwatch = Stopwatch();

  List<int> result;

  stopwatch.start();
  result = solution(contents);
  stopwatch.stop();
  print("Took: ${stopwatch.elapsedMicroseconds} microsecs");

  print('Elf ${result[0]} has the highest calories: ${result[1]}');
}

List<int> solution(List<String> input) {
  int currentElf = 0;
  int highestElf = 0;
  int highestCalorie = 0;
  int sumCalorie = 0;

  // interestingly, checking if empty first
  // is faster than checking if not empty
  for (var line in input) {
    if (line.isEmpty) {
      if (sumCalorie > highestCalorie) {
        highestCalorie = sumCalorie;
        highestElf = currentElf;
      }
      currentElf++;
      sumCalorie = 0;
      continue;
    }
    sumCalorie += int.parse(line);
  }

  return [highestElf, highestCalorie];
}

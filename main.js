/*
57. Insert Interval

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] 
represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. 
You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still 
does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Note that you don't need to modify intervals in-place. You can make a new array and return it.

 

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].


Ваша задача - вставить новый интервал в массив интервалов так, чтобы массив интервалов все еще был отсортирован по возрастанию начала каждого интервала и 
не имел перекрывающихся интервалов (при необходимости объедините перекрывающиеся интервалы).

Вот шаги, которые мы будем следовать:

1. Создайте новый массив для хранения результата.
2. Пройдите по каждому интервалу в массиве интервалов. Если интервал полностью находится перед новым интервалом, добавьте его в результат. 
   Если интервал полностью находится после нового интервала, добавьте новый интервал и все оставшиеся интервалы в результат, затем верните результат. 
   В противном случае объедините интервал с новым интервалом.
3. Если новый интервал не был добавлен, добавьте его в конец результата.
4. Верните результат.

Your task is to insert a new interval into an array of intervals such that the array of intervals is still sorted in ascending order by the start of each interval and 
does not have any overlapping intervals (merge overlapping intervals if necessary).

Here are the steps we will follow:

1. Create a new array to store the result.
2. Go through each interval in the array of intervals. 
   If the interval is entirely before the new interval, add it to the result. 
   If the interval is entirely after the new interval, add the new interval and all remaining intervals to the result, then return the result. 
   Otherwise, merge the interval with the new interval.
3. If the new interval has not been added, add it to the end of the result.
4. Return the result.

*/

function insert(intervals, newInterval) {
  let result = [];
  let i = 0;

  // Добавляем все интервалы, которые находятся перед новым интервалом, в результат
  // Add all intervals that are before the new interval to the result
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // Объединяем все перекрывающиеся интервалы с новым интервалом
  // Merge all overlapping intervals with the new interval
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  // Добавляем объединенный интервал в результат
  // Add the merged interval to the result
  result.push(newInterval);

  // Добавляем все оставшиеся интервалы в результат
  // Add all remaining intervals to the result
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
}

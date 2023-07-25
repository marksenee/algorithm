function solution(num_list) {
  let result = [];
  let even_cnt = 0;
  let odd_cnt = 0;

  for (let i of num_list) {
    if (i % 2 === 0) {
      even_cnt++;
    } else {
      odd_cnt++;
    }
  }

  result.push(even_cnt, odd_cnt);

  return result;
}

console.log(solution([1, 3, 5, 7]));

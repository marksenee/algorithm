function solution(num_list) {
    let result = 0;

    result = num_list.findIndex((num) => num < 0);

    return result
}

console.log(solution([13, 22, 53, 24, 15, 6]))
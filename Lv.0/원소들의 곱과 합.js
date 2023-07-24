// 풀이1.
function solution(num_list) {
    let multiplication = 1;
    let addition = 0;
    let addition_pow = 1;

    for (let i of num_list) {
        multiplication *= i;
        addition += i
    }
    addition_pow = addition*addition

    return multiplication < addition_pow ? 1 : 0;
}

// 풀이2.
function solution2(num_list) {
    let multiplication = 1;
    let addition = 0;

    for (let i of num_list) {
        multiplication *= i;
        addition += i
    }

    return multiplication < addition**2 ? 1 : 0;
}

let arr = [3, 4, 5, 2, 1]	
console.log(solution2(arr))
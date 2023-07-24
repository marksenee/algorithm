// 풀이1. 일반 함수 사용
function solution(n_str) {
    return Number(n_str);
}

// 풀이2. 화살표 함수 사용 
const solution2 = (n_str) =>  Number(n_str)

// 다른 풀이. (+) 단항 더하기 연산자 활용
const solution3 = (n_str) =>  +n_str


console.log(solution3("10"))
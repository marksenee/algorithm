function solution(num_str) {
    const arr = Array.from(num_str);
    let answer = 0;

    for (let i of arr) {
        answer += Number(i);
    }
    return answer;
}


// reduce 함수 사용 
const solution2 = num_str => Array.from(num_str).reduce((acc, curr) => acc + Number(curr), 0)


let num = "1000000"		
console.log(solution2(num))
function solution(num_list) {

    if (num_list.length >= 11) {
        let answer = 0;

        for (let i of num_list) {
            answer += i
        }
        return answer;
    } 
    else if (num_list.length <= 10) {
        let answer = 1; // 1로 세팅, 0으로 초기값 설정시 곱하기 연산자하면 모두 0이 됨

        for (let i of num_list) {
            answer *= i
        }
        return answer;

    }
}

let arr = [2, 3, 4, 5]	;
console.log(solution(arr))
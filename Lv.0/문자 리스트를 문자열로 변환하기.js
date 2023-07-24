/* 
문자 이어 붙이기
1) "+" 연산자 
2) concat() 함수 
- 문자변수.concat(합칠 문자)
3) join() 함수 
- 배열의 모든 요소를 연결해 하나의 문자열로 만듬
- 문자가 담긴 array.join()
*/

// concat 함수 사용 
function solution(arr) {
    let answer = "";

    for (let i of arr ){
        answer = answer.concat(i)
    }
    return answer
}

// join 함수 사용
function solution2(arr) {
    return arr.join("");
}

console.log(solution(["a","b","c"]));
console.log(solution2(["a","b","c"]));
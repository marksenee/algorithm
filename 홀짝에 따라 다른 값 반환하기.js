function solution (n) {
    let answer = 0;
    
    if (n%2 !==0) {
        console.log(n)
        for (let i =1; i<=n; i++) {
            if (i%2 !==0) {
                answer += i
            }
        }
    } else {
        for (let i =1; i<=n; i++) {
            if (i%2 ===0) {
                answer += i**2
            }
        }
    }
    return answer;
}

console.log(solution(10))
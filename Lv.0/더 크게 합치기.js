function solution(a,b) {
    let new_a = String(a);
    let new_b = String(b);

    let first_result = new_a + new_b;
    let second_result = new_b + new_a;

    return first_result < second_result ? parseInt(second_result) : parseInt(first_result)
   
}

console.log(solution(9,91))
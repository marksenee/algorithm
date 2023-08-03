function solution(num_list) {
    let evenNum = "";
    let oddNum = "";

    for (let i of num_list) {
        if (i%2 === 0) {
            evenNum += String(i);
        } else {
            oddNum += String(i);
        }
    }

    return parseInt(evenNum) + parseInt(oddNum)
}

console.log(solution([3, 4, 5, 2, 1]))
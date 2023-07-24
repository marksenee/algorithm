function solution(num_list) {
    let last_num = num_list.slice(-1);
    let second_last_num = num_list.slice(-2,-1);

    let answer = 0;
    let result = 0;
    
    for (let i of last_num) {
        answer += i;
    }

    for (let i of second_last_num) {
        result += i;
    }


    if (answer > result) {
        let new_num = answer-result;
        num_list.push(new_num)
        return num_list
    } 
    else {
        let new_num = answer * 2;
        num_list.push(new_num);
        return num_list
    }


}

console.log(solution([2, 1, 6]	))
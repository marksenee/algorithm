// string.slice(-n) 뒤에서부터 n자리만큼 보여줌 

function solution(my_string, n) {
    return my_string.slice(-n);
}

console.log(solution("ProgrammerS123",11))
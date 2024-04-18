function solution(num_list) {
    var answer = 1;
    if (num_list.length >= 11 ) {
        for (var i of num_list)
            answer += i;
        answer -= 1;
    }
    else
        for (var i of num_list)
            answer *= i;
    return answer;
}
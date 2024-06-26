function solution(my_string, target) {
    var answer = 0;
    if (my_string.includes(target) === true) answer = 1;
    else answer = 0;
    return answer;
}
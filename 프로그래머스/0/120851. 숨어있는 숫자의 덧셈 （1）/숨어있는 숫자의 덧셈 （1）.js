function solution(my_string) {
    var answer = 0;
    my_string = my_string.toString().split("");
    for (var i of my_string) {
        if (i.charCodeAt() >= 45 && i.charCodeAt() <= 57)
            answer += parseInt(i);
    }
    return answer;
}
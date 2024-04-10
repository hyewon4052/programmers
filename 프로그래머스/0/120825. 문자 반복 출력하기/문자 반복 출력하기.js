function solution(my_string, n) {
    var answer = "";
    my_string = my_string.split("");
    for (var i = 1; i <= my_string.length; i++) {
        for (var j = 0; j < n; j++)
            answer += my_string[i-1];
    }
    return answer;
}
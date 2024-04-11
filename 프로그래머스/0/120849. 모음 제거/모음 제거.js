function solution(my_string) {
    var answer = '';
    my_string.split('');
    for (var i of my_string) {
        if (i == "a"|| i =="e"|| i == "i"||i=="o"||i=="u") {
            answer += "";
        }
        else {
            answer += i;
        }
    }
    return answer;
}
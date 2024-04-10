function solution(phone_number) {
    var answer = '';
    answer = phone_number.split("")
    for (var i = 1; i <= answer.length; i++) {
        if (answer.length - i >= 4)
            answer[i-1] = "*";
    }
    return answer.join("");
}
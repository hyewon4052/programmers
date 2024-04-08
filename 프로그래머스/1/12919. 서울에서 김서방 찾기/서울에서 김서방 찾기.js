function solution(seoul) {
    var answer = '';
    for (var i of seoul) {
        if (i == "Kim")
            answer = seoul.indexOf(i);
    }
    return "김서방은 " + answer+"에 있다";
}
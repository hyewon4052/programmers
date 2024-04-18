function solution(myString) {
    var answer = [];
    myString = myString.split("x");
    for (var i in myString) {
        answer[i] = myString[i].length
    }
    return answer;
}
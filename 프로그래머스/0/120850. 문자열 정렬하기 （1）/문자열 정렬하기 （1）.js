function solution(my_string) {
    var answer = [];
    my_string = my_string.toString().split("");
    for (var i of my_string){
        if (i.charCodeAt() >= 48 && i.charCodeAt() <= 57) {
            answer += i;
        }
    }
    answer = answer.toString().split("");
    answer.sort(function(a,b){
        return a-b;
    });
    answer = answer.map(Number);
    return answer;
}
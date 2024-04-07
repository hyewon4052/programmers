function solution(num_list) {
    var answer = [];
    var num = num_list.length;
    
    for (var i = 0; i < num_list.length; i++) {
        answer[i] = num_list[num-1];
        num--;
    }
    return answer;
}
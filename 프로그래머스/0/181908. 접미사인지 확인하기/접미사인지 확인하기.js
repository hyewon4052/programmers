function solution(my_string, is_suffix) {
    var answer = 0;
    for (var i = 0; i< my_string.length; i++) {
         if(my_string.slice(i) == is_suffix)
            answer = 1;
    }
    return answer;
}
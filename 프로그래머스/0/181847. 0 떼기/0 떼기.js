function solution(n_str) {
    var answer = '';
    n_str = n_str.toString().split("");
    for (var i = 0; i < n_str.length; i++) {
        if (n_str[i] == 0) {
            n_str[i] = "";
        }
        else 
            break;
    }
    answer = n_str.join("");
    return answer;
}
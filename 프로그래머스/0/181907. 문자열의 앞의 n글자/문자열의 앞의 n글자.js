function solution(my_string, n) {
    var answer = '';
    answer = my_string.split("").filter((a,idx)=>idx < n).join("")
    return answer;
}
function solution(my_string, index_list) {
    var answer = '';
    my_string.split("");
    index_list.forEach((a)=>{
        answer += my_string[a]
    })
    return answer;
}
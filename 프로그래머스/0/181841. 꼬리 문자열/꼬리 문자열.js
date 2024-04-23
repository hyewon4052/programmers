function solution(str_list, ex) {
    var answer = '';
    str_list.forEach((a)=>{
        if (a.indexOf(ex) == -1)
            answer += a
    })
    return answer;
}
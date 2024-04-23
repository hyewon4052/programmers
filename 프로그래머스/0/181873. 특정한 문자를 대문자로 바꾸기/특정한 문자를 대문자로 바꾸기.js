function solution(my_string, alp) {
    var answer = '';
    my_string.split("").forEach((a)=>{
        if (a === alp)
            answer += a.toUpperCase();
        else
            answer += a;
    })
    return answer;
}
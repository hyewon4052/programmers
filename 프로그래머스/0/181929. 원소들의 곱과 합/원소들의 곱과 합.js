function solution(num_list) {
    var answer = 0
    n1 = num_list.reduce((a,b)=>a*b);
    n2 = num_list.reduce((a,b)=>a+b);
    if (n1 < n2*n2)
        answer = 1;
    return answer;
}
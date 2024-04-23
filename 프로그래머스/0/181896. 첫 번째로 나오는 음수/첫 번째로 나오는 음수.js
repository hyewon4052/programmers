function solution(num_list) {
    var answer = -1;
    num_list.some((a,idx)=>{
        if (a < 0) {
            answer = idx;
            return -1;
        }
    })
    return answer;
}
function solution(num_list, n) {
    var answer = [];
    answer = num_list.filter((_,index)=>index >= n-1)
    return answer;
}
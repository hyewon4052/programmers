function solution(num_list, n) {
    var answer = [];
    var answer = num_list.filter((_,index)=>index % n === 0);
    return answer;
}
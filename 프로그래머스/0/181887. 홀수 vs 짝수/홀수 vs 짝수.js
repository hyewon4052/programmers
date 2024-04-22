function solution(num_list) {
    var answer = 0;
    var sum1 = num_list.filter((num,index) => index % 2 == 0).reduce((a,b) => a + b);
    var sum2 = num_list.filter((num,index) => index % 2 == 1).reduce((a,b) => a + b);
    answer = sum1 > sum2 ? sum1 : sum2;
    return answer;
}
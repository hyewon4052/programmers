function solution(n) {
    var answer = 0;
    answer = parseInt(n.toString().split("").sort((a,b)=>a-b).reverse().join(""))
    return answer;
}
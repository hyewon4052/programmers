function solution(arr)
{
    var answer = [];
    answer = arr.filter((n,idx)=> n !== arr[idx+1])
    return answer;
}
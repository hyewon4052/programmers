function solution(arr, n) {
    var answer = [];
    if (arr.length % 2 == 0) {
        for (var i in arr) {
            if (i % 2 == 1)
                answer[i]=arr[i]+n;
            else 
                answer[i]=arr[i];
        }
    }
    if (arr.length % 2 == 1) {
        for (var i in arr) {
            if (i % 2 == 0)
                answer[i]=arr[i]+n;
            else 
                answer[i]=arr[i];
        }
    }
    return answer;
}
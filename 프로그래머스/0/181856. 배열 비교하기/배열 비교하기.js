function solution(arr1, arr2) {
    var answer = 0;
    if (arr1.length != arr2.length)
        answer = arr1.length > arr2.length ? 1 : -1;
    else {
        var sum1 = arr1.reduce((a,b)=>a+b)
        var sum2 = arr2.reduce((a,b)=>a+b)
        if (sum1 > sum2)
            answer = 1;
        else if (sum1 < sum2)
            answer = -1;
        else 
            answer = 0;
        
    }
         
    
    return answer;
}
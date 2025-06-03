function solution(n) {
    var answer = 0;
    for(var i = 1; i < Math.ceil(n/2); i++){
        var total = 0;
        for( var j = i; j < n ; j++){
            total += j;
            if (total > n) {
                break;
            }
            else if (total == n ){
                answer++;
                break;
            }
        } 
    }
    return answer+1;
}
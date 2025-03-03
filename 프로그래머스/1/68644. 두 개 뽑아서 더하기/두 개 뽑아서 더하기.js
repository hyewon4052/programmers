function solution(numbers) {
    var answer = [];
    var len = numbers.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            if(i !== j) {
                answer.push(numbers[i]+numbers[j]);   
            }
        }    
    }
    return answer.filter((el,index)=>answer.indexOf(el)===index)
        .sort(function(a,b){return a-b});
}
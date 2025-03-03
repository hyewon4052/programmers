function solution(array, commands) {
    var answer = [];
    
    for (var i = 0; i < commands.length; i++) {
        var [iIdx, jIdx, kIdx] = commands[i]; 
        var slicedArray = array.slice(iIdx - 1, jIdx);
        var sortedArray = slicedArray.sort((a, b) => a - b); 
        answer.push(sortedArray[kIdx - 1]);  
    }
    
    return answer;
}

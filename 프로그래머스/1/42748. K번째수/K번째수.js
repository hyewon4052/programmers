function solution(array, commands) {
    var answer = [];
    var length = commands.length
    for(var i = 0; i < length; i++) {
        var fst = commands[i][0];
        var lst = commands[i][1];
        
        var str = array.slice(fst-1,lst).sort((a,b)=>a-b);
        answer.push(str[commands[i][2]-1]);
    }
    
    return answer;
}

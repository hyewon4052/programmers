function solution(participant, completion) {
    let map = new Map();
    
    for (var i = 0; i < participant.length; i++){
        map.set(participant[i], (map.get(participant[i])||0) +1 );
    }
    for ( var i = 0; i < completion.length; i++){
        map.set(completion[i], (map.get(completion[i])|| 0) -1);
    }
    return [...map].filter( ([_,value]) => value > 0)[0][0];
}
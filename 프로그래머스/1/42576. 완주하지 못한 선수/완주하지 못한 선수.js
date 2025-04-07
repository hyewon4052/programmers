function solution(participant, completion) {
    var answer = '';
    //     participant = participant.sort();
    //     completion = completion.sort();
    // for (var i = 0; i < participant.length; i++){
    //     // if (completion.includes(participant[i]) ) {
    //     //     completion.splice(completion.indexOf(participant[i]),1);
    //     // } 
    //     // else {
    //     //     answer = participant[i];
    //     // }
    //     if (participant[i] !== completion[i]) {
    //         answer = participant[i]; 
    //         break;
    //     };
    // }
    let map = new Map();
    for (var i = 0; i < participant.length; i++){
        map.set(participant[i], map.get(participant[i]) ? map.get(participant[i])+1 : 1)
    }
    for (var i = 0; i < completion.length; i++) {
        map.set(completion[i], map.get(completion[i])-1);
    }
    answer = [...map].filter(([key, value]) => value > 0)[0][0]
    return answer;
}
function solution(participant, completion) {
    var answer = '';
    
        participant = participant.sort();
        completion = completion.sort();
    for (var i = 0; i < participant.length; i++){
        // if (completion.includes(participant[i]) ) {
        //     completion.splice(completion.indexOf(participant[i]),1);
        // } 
        // else {
        //     answer = participant[i];
        // }
        if (participant[i] !== completion[i]) {
            answer = participant[i]; 
            break;
        };
    }
    return answer;
}
function solution(name, yearning, photo) {
    var answer = new Array(photo.length).fill(0);
    
    for (var i = 0; i < photo.length; i++) { // photo의 각 행에 대해
        for (var j = 0; j < photo[i].length; j++) { // 각 열에 대해
            for (var k = 0; k < name.length; k++) {
                if(photo[i][j] === name[k]) {
                    answer[i] += yearning[k]; // 해당 이름에 대한 yearning 값을 더함
                }    
            }
        }
    }
    return answer;
}
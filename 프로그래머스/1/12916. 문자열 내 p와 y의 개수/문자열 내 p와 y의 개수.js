function solution(s){
    var answer = true;
    var pcount = 0, ycount = 0;
    
    var a = s.toString().split("");
    for (var i of a) {
        if (i == "p" || i == "P")
            pcount++;
        else if (i == "y" || i == "Y")
            ycount++;
    }
    answer = pcount == ycount ? true : false; 
    

    return answer;
}
function solution(food) {
    var answer = '';
    var im = ""
    for (var i = 1; i < food.length; i++) {
        im += i.toString().repeat(Math.floor(food[i] / 2));   
    }
    var reverse = im.split('').reverse().join('');
    answer+=im+"0"+reverse;
    return answer;
}
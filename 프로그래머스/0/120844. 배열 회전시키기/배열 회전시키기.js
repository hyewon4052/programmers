function solution(numbers, direction) {
    if (direction == "right") {
        var last = numbers.pop();
        numbers.unshift(last);
    }
    if (direction == "left"){
        var first = numbers.shift();
        numbers.push(first);
    }
    return numbers;
}
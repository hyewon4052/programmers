function solution(num_list, n) {
    var answer = [];
    var im = num_list.slice(n)
    num_list.splice(n)
    answer = im.concat(num_list)
    return answer;
}
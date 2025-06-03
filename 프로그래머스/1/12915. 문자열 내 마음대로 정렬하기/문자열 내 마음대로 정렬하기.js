function solution(strings, n) {
    let answer = [];
    strings = strings.sort();
    answer = strings.sort((a,b)=> a[n].charCodeAt() - b[n].charCodeAt());
    return answer;
}

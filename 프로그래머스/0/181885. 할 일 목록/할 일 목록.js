function solution(todo_list, finished) {
    var answer = [];
    answer = todo_list.filter((n,index)=> finished[index] == false)
    return answer;
}
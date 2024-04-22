function solution(arr1, arr2) {
    var answer = arr1;
    for (var i = 0; i < arr1.length; i++)
        for (var j=0; j < arr2[i].length; j++)
            answer[i][j] = arr1[i][j]+arr2[i][j];
    return answer;
}
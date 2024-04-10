function solution(arr, k) {
    if (k % 2 == 0) {
        for (var i in arr)
            arr[i] += k;
    }
    else {
        for (var i in arr)
            arr[i] *= k;
    }
    return arr;
}
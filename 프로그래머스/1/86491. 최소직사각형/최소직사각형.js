function solution(sizes) {
    var answer = 0;
    var width = 0, height = 0;
    
    for (var i = 0; i < sizes.length; i++) {
        var w = Math.max(sizes[i][0], sizes[i][1]);
        var h = Math.min(sizes[i][0], sizes[i][1]);
        
        width = Math.max(width, w);
        height = Math.max(height, h);
    }
    
    answer = width * height; 
    return answer;
}

function solution(myString, pat) {
    var im = myString.split("")
    im.forEach((a,idx)=> {
        if (a == "A")
            im[idx] = "B";
        else 
            im[idx] = "A";
    })
    im = im.join("");
    return im.indexOf(pat) != -1 ? 1 : 0;
}
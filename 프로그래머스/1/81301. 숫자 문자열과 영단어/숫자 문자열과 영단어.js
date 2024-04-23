function solution(s) {
    var answer = 0;
    let num = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    num.forEach((a,b)=>{
        s = s.split(a).join(b)
    })
    return Number(s);
}
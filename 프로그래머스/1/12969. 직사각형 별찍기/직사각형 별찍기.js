process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for (var i = 1; i <= b; i++) {
        let str = "";
        for (var j = 1; j <= a; j++)
            str += "*";
        console.log(str);
    }
});
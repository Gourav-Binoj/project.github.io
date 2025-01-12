function fib(num){
    var i;
    i = 0;
    var  n = -1;
    var  m = 1;
    var s = 0;
    while(i<num){
        s = n+m;
        n = m;
        m = s;
        i = i+1;
        console.log(s);

    }

}

num = 5;
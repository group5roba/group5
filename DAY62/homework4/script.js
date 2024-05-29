function allsum(start, finish) {
    let sum = 0;
    for (let i = start; i <= finish; i++) {
        if(i % 2 == 0){
            sum +=i
        }
    }
    console.log(sum);
}

allsum(1, 9);
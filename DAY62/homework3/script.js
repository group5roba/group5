function allsum(start, finish) {
    let sum = 0;
    for (let i = start; i <= finish; i++) {
        sum += i;
    }
    console.log(sum);
}

allsum(1, 9);
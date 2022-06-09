var i = 0;
while (i < 15) {
    // console.log(i)
    if (i == 8) {
        break;
    }

    i++
}

for (var i = 0; i <= 20; i++) {

    // console.log(i)
    if (i === 7 * 2) {
        break
    }

}

var numbers = [26, 24, 88, 69, 45, 42, 36, 87, 101, 250, 60];
for (var i = 0; i < numbers.length; i++) {
    var elements = numbers[i];

    if (elements > 60) {
        continue
    }
    console.log(elements)

}
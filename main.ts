let x: number;
let y: number;
let i = 0
while (1) {
    if (i > 9) {
        break
    }
    
    x = Math.floor(Math.random() * 10 % 5)
    y = Math.floor(Math.random() * 10 % 5)
    if (!led.point(x, y)) {
        led.plot(x, y)
        i += 1
    } else {
        continue
    }
    
}

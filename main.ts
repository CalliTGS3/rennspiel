input.onButtonPressed(Button.A, function () {
    if (playerCar.get(LedSpriteProperty.X) > 0) {
        playerCar.change(LedSpriteProperty.X, -1)
    }
})
function movecar (carnum: number, position: number) {
    if (gameOn == true) {
        cars[carnum] = game.createSprite(position, 0)
        basic.pause(Math.randomRange(0, 5001))
        while (gameOn == true) {
            if (cars[carnum].get(LedSpriteProperty.Y) == 4) {
                if (playerCar.isTouching(cars[carnum])) {
                    gameOn = false
                } else {
                    score = score + 1
                    cars[carnum].delete()
                    basic.pause(Math.randomRange(0, 5001))
                    cars[carnum] = game.createSprite(position, 0)
                    basic.pause(500)
                }
            } else {
                cars[carnum].change(LedSpriteProperty.Y, 1)
                basic.pause(500)
            }
        }
    }
}
input.onButtonPressed(Button.B, function () {
    if (playerCar.get(LedSpriteProperty.X) < 4) {
        playerCar.change(LedSpriteProperty.X, 1)
    }
})
let score = 0
let gameOn = false
let playerCar: game.LedSprite = null
let car5: game.LedSprite = null
let car4: game.LedSprite = null
let car3: game.LedSprite = null
let car2: game.LedSprite = null
let car1: game.LedSprite = null
let cars: game.LedSprite[] = []
cars.push(car1)
cars.push(car2)
cars.push(car3)
cars.push(car4)
cars.push(car5)
basic.forever(function () {
    basic.pause(100)
    movecar(2, 2)
})
basic.forever(function () {
    basic.pause(100)
    movecar(3, 3)
})
basic.forever(function () {
    basic.pause(100)
    movecar(1, 1)
})
basic.forever(function () {
    basic.pause(100)
    movecar(4, 4)
})
basic.forever(function () {
    basic.pause(100)
    movecar(0, 0)
})
control.inBackground(function () {
    while (true) {
        basic.pause(200)
    }
})
control.inBackground(function () {
    score = 0
    playerCar = game.createSprite(2, 4)
    gameOn = true
    while (gameOn == true) {
        basic.pause(100)
    }
    game.addScore(score)
    game.gameOver()
})

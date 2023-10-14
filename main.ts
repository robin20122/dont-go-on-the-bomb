input.onButtonPressed(Button.A, function () {
    player_x += 1
})
input.onButtonPressed(Button.AB, function () {
    if (bom_x == player_x) {
        if (bom_y == playery) {
            basic.showString("boem punten:")
            basic.showNumber(punten)
        }
    } else {
        bom_x = randint(1, 5)
        bom_y = randint(1, 5)
        punten += 1
    }
})
input.onButtonPressed(Button.B, function () {
    playery += 1
})
let punten = 0
let playery = 0
let player_x = 0
let bom_y = 0
let bom_x = 0
bom_x = randint(1, 5)
bom_y = randint(1, 5)
basic.forever(function () {
	
})

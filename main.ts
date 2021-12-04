radio.setGroup(1)
let zvuk = pins.analogReadPin(AnalogPin.P0)
basic.forever(function () {
    zvuk = pins.analogReadPin(AnalogPin.P0)
    if (zvuk >= 400) {
        radio.sendNumber(1)
    } else {
        radio.sendNumber(0)
    }
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendString("ravno")
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("lijevo")
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendString("desno")
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    }
})

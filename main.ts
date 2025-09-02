radio.onReceivedNumber(function (receivedNumber) {
    if (secret == receivedNumber) {
        checked = 1
        music.play(music.stringPlayable("G B A G C5 B A B ", 120), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Yes)
        radio.setTransmitPower(7)
        radio.sendValue("check", checkpoint_number)
    }
})
input.onButtonPressed(Button.A, function () {
    checkpoint_number += -1
})
input.onButtonPressed(Button.B, function () {
    checkpoint_number += 1
})
let checkpoint_number = 0
let checked = 0
let secret = 0
radio.setTransmitPower(0)
secret = randint(0, 1000)
radio.setGroup(128)
checked = 0
checkpoint_number = 1
basic.forever(function () {
    if (checked == 0) {
        basic.showNumber(checkpoint_number)
        radio.sendNumber(secret)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    }
})

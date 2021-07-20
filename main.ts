/**
 * egal welcher weitere block mit variable level eingesetzt wird - es wird ein Fehler geworfen, aber nur fürs herunterladen
 * 
 * while-löschen hilft, dauerhaft löschen hilft - zu viele Blöcke?
 * 
 * Bei Hinzufügen von Melodie auch
 */
let LED_Y = 0
let LED_X = 0
let level = 1
while (!(input.buttonIsPressed(Button.A))) {
    if (input.buttonIsPressed(Button.B)) {
        if (level < 9) {
            level += 1
        } else {
            level = 1
        }
        basic.showNumber(level)
    }
}
basic.showIcon(IconNames.Yes)
basic.pause(1000)
basic.forever(function () {
    basic.clearScreen()
    LED_X = pins.map(
    input.acceleration(Dimension.X) * level,
    -1023,
    1023,
    0,
    5
    )
    LED_Y = pins.map(
    input.acceleration(Dimension.Y) * level,
    -1023,
    1023,
    0,
    5
    )
    led.plot(LED_X, LED_Y)
    if (LED_X < 0 || LED_X > 5 || (LED_Y > 5 || LED_Y < 0)) {
        basic.setLedColor(0xff0000)
        basic.showIcon(IconNames.No)
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
        basic.pause(2000)
        basic.turnRgbLedOff()
    }
})

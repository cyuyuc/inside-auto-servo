radio.onReceivedValue(function (name, value) {
    if (value == 1) {
        servos.P0.setAngle(0)
        basic.pause(500)
        servos.P0.setAngle(180)
    }
})
radio.setGroup(11)
radio.setTransmitPower(7)

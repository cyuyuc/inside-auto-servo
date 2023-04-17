radio.onReceivedValue(function (name, value) {
    if (value == 1) {
        servos.P0.setAngle(75)
        basic.pause(1000)
        servos.P0.setAngle(180)
    }
})
servos.P0.setAngle(180)
radio.setGroup(11)
radio.setTransmitPower(7)

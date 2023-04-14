radio.onReceivedValue(function (name, value) {
    if (value == 1) {
        servos.P0.setAngle(90)
        basic.pause(500)
        servos.P0.setAngle(135)
    } else {
    	
    }
})
radio.setGroup(11)
radio.setTransmitPower(7)

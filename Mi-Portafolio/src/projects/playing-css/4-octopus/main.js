var octopus = new Octopus()
octopus.config('ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight')
octopus.move(100, 100, 0)

var octopus2 = new Octopus()
octopus2.config('w', 's', 'a', 'd')
octopus2.move(300, 300, 0)

var octopus3 = new Octopus()
octopus3.config('i', 'k', 'j', 'l')
octopus3.move(600, 600, 0)

var step = 50

var applyOnY = true

var shapes = [octopus, octopus2, octopus3]

document.onkeydown = function (event) {
    var key = event.key.toLowerCase()

    console.log(key)

    shapes.forEach(function (shape) {
        if (key === shape.keyLeft.toLowerCase())
            shape.moveRelativeX(-step)
        else if (key === shape.keyRight.toLowerCase())
            shape.moveRelativeX(step)
        else if (key === shape.keyUp.toLowerCase()) {
            if (applyOnY)
                shape.moveRelativeY(-step)
            else
                shape.moveRelativeZ(-step)
        } else if (key === shape.keyDown.toLowerCase()) {
            if (applyOnY)
                shape.moveRelativeY(step)
            else
                shape.moveRelativeZ(step)
        }
    })

    if (event.key === 'Shift')
        applyOnY = false
}

document.onkeyup = function (event) {
    console.log(event.key)

    if (event.key === 'Shift')
        applyOnY = true

}

shapes.forEach(function (shape) {
    document.body.appendChild(shape.container)
})
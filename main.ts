namespace SpriteKind {
    export const spacerock = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.spacerock, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    if (Math.percentChance(50)) {
        sprite.say("pog", 500)
    }
})
function addScore () {
    space_rock_spawn_time = Math.max(1000, space_rock_spawn_time - 50)
    info.changeScoreBy(1)
    if (info.score() % 10 == 10) {
        info.startCountdown(countdown_time)
    }
}
let blackhole: Sprite = null
let survivor: Sprite = null
let space_rock_spawn_time = 0
let countdown_time = 0
effects.starField.startScreenEffect()
countdown_time = 20
let spaceship = sprites.create(img`
    . . . . . e e e e e e . . . . . 
    . . . . e 2 2 2 2 2 2 e . . . . 
    . . . . c 2 2 2 2 2 2 c 2 . . . 
    . . e 2 c 4 2 2 2 2 2 c 2 e . . 
    . . 1 2 2 4 2 2 2 2 2 c 2 1 . . 
    . 2 1 2 2 4 2 2 2 2 2 2 2 1 2 . 
    2 3 1 2 2 4 2 2 2 2 2 2 2 1 3 2 
    2 3 1 2 c 2 4 4 2 2 2 c 2 1 3 2 
    2 3 e 2 c e c c c c e c 2 e 3 2 
    2 3 e 2 e c b b b b c e 2 e 3 2 
    2 3 e 2 e b b b b b b e 2 e 3 2 
    2 2 e e e e e e e e e e e e 2 2 
    2 . 1 e 3 e e e e e e 3 e 1 . 2 
    . . 1 e 2 3 e e e e 3 2 e 1 . . 
    . . 1 1 e e e e e e e e 1 1 . . 
    . . . 1 1 . . . . . . 1 1 . . . 
    `, SpriteKind.Player)
spaceship.bottom = scene.screenHeight()
controller.moveSprite(spaceship)
spaceship.setFlag(SpriteFlag.StayInScreen, true)
spaceship.z = 10
info.setScore(0)
info.startCountdown(countdown_time)
space_rock_spawn_time = 2000
game.onUpdateInterval(1000, function () {
    survivor = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . 1 6 f 6 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . 1 1 1 . . . . . . . 
        . . . . . 1 . 1 . 1 . . . . . . 
        . . . . . 1 . 1 . 1 . . . . . . 
        . . . . . 1 . 1 . 1 . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . 1 . . . 1 . . . . . . 
        . . . . . 1 . . . 1 . . . . . . 
        . . . . . 1 . . . 1 . . . . . . 
        `, 0, 100)
    survivor.left = randint(0, scene.screenWidth() - survivor.width)
    survivor.setKind(SpriteKind.spacerock)
})
forever(function () {
    pause(space_rock_spawn_time)
    blackhole = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . f c f f c c c . . . . . 
        . . c c f f f f f f f f f . . . 
        . f f f f f f f f f f f f c . . 
        . f f f f f f f f f f f f c . . 
        c f f f f f f f f f f f f f c . 
        f f f f f f f f f f f f f f f . 
        c f f f f f f f f f f f f f c . 
        c f f f f f f f f f f f f f c . 
        c f f f f f f f f f f f f f f . 
        f f f f f f f f f f f f f f c . 
        c f f f f f f f f f f f f f c . 
        . f f f f f f f f f f f f f . . 
        . f f f f f f f f f f f f f . . 
        . . c f f f f f f f f c c . . . 
        . . . . f f f c c f f . . . . . 
        `, 0, 50)
    blackhole.left = randint(0, scene.screenWidth() - blackhole.width)
    survivor.setKind(SpriteKind.spacerock)
})

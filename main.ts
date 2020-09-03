let space_rocks: Sprite = null
effects.starField.startScreenEffect()
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
game.onUpdateInterval(1000, function () {
    space_rocks = sprites.createProjectileFromSide(img`
        . . . . . . c c c . . . . . . . 
        . . . . . a a a c c c . . . . . 
        . . . c a c f a . a a c . . . . 
        . . c a c f f f a f f a c . . . 
        . c c a c c f a a c f f a c . . 
        . a b a a c . a a c c f a c c c 
        . a b b b . a b b a a c a f . c 
        . . a b b a f f b b a a c f f c 
        c . a a a c c f c b a a c f a c 
        c c . a a c c a a a b b a c a c 
        a . a b b a a . a b b . b b c . 
        b a c b b b . b c . c c a c . . 
        b a c c a b b a c . . . . . . . 
        b b a c a b a a . . . . . . . . 
        a b . b b a c . . . . . . . . . 
        . a a b c . . . . . . . . . . . 
        `, 0, 100)
    space_rocks.left = randint(0, scene.screenWidth() - space_rocks.width)
})

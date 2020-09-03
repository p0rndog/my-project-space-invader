@namespace
class SpriteKind:
    spacerock = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(1)
    otherSprite.destroy()
    if Math.percent_chance(50):
        sprite.say("pog", 500)
sprites.on_overlap(SpriteKind.player, SpriteKind.spacerock, on_on_overlap)

space_rocks: Sprite = None
blackhole: Sprite = None
effects.star_field.start_screen_effect()
spaceship = sprites.create(img("""
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
    """),
    SpriteKind.player)
spaceship.bottom = scene.screen_height()
controller.move_sprite(spaceship)
spaceship.set_flag(SpriteFlag.STAY_IN_SCREEN, True)
info.set_score(0)

def on_update_interval():
    global blackhole
    blackhole = sprites.create_projectile_from_side(img("""
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
        """),
        0,
        50)
    blackhole.left = randint(0, scene.screen_width() - space_rocks.width)
game.on_update_interval(2000, on_update_interval)

def on_update_interval2():
    global space_rocks
    space_rocks = sprites.create_projectile_from_side(img("""
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
        """),
        0,
        100)
    space_rocks.left = randint(0, scene.screen_width() - space_rocks.width)
    space_rocks.set_kind(SpriteKind.spacerock)
game.on_update_interval(1000, on_update_interval2)

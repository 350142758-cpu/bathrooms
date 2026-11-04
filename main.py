def on_overlap_tile(sprite, location):
    tiles.set_current_tilemap(t2)
    Render.set_ceiling_tilemap(tilemap("""
        level9
        """))
    spawnrandomwall(100)
    tiles.place_on_random_tile(mySprite, assets.tile("""
        myTile7
        """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile6
        """),
    on_overlap_tile)

def on_a_pressed():
    Render.jump_with_height_and_duration(mySprite, 16, 500)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def spawnrandomwall(num: number):
    global randomcol, randomrow
    for value in _2:
        randomcol = randint(1, 98)
        randomrow = randint(1, 98)
        if not (tiles.tile_at_location_is_wall(tiles.get_tile_location(randomcol, randomrow))):
            tiles.set_tile_at(tiles.get_tile_location(randomcol, randomrow),
                assets.tile("""
                    myTile10
                    """))
            tiles.set_wall_at(tiles.get_tile_location(randomcol, randomrow), True)
        else:
            pass
randomrow = 0
randomcol = 0
_2: List[number] = []
mySprite: Sprite = None
t2: tiles.TileMapData = None
scene.set_background_color(5)
t1 = tilemap("""
    level2
    """)
t2 = tilemap("""
    level1
    """)
tiles.set_current_tilemap(t1)
Render.set_ceiling_tilemap(tilemap("""
    level4
    """))
mySprite = sprites.create(img("""
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        """),
    SpriteKind.player)
mySprite = Render.get_render_sprite_variable()
tiles.place_on_tile(Render.get_render_sprite_variable(),
    tiles.get_tile_location(8, 8))
scene.camera_follow_sprite(Render.get_render_sprite_variable())
Render.set_view_angle_in_degree(180)
_2 = []
_1 = 0
for index in range(5000):
    _2.append(_1)
    _1 += 1
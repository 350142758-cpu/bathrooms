scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile11`) || (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile11`) || (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile11`) || mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile11`)))) {
        tiles.setWallAt(location, false)
        tiles.setTileAt(location, assets.tile`myTile12`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    tiles.setCurrentTilemap(t2)
    Render.setCeilingTilemap(tilemap`level9`)
    Render.setAttribute(Render.attribute.wallZScale, 1)
    spawnrandomwall(100)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile7`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (_2 == 0) {
        _2 = 1
        Render.moveWithController(4)
    } else if (_2 == 1) {
        _2 = 0
        Render.moveWithController(2)
    }
})
function spawnrandomwall (num: number) {
    for (let value of _) {
        randomcol = randint(1, 98)
        randomrow = randint(1, 98)
        _3 = randint(1, 5)
        if (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(randomcol, randomrow)))) {
            if (_3 == 2 || (_3 == 3 || (_3 == 4 || _3 == 5))) {
                tiles.setTileAt(tiles.getTileLocation(randomcol, randomrow), assets.tile`myTile10`)
                tiles.setWallAt(tiles.getTileLocation(randomcol, randomrow), true)
            } else if (_3 == 1) {
                tiles.setTileAt(tiles.getTileLocation(randomcol, randomrow), assets.tile`myTile11`)
                tiles.setWallAt(tiles.getTileLocation(randomcol, randomrow), true)
            }
        }
    }
}
let random_list: tiles.Location = null
let _var = 0
let list: tiles.Location[] = []
let loc: tiles.Location = null
let _3 = 0
let randomrow = 0
let randomcol = 0
let _2 = 0
let _: number[] = []
let mySprite: Sprite = null
let t2: tiles.TileMapData = null
scene.setBackgroundColor(5)
let t1 = tilemap`level2`
t2 = tilemap`level1`
tiles.setCurrentTilemap(tilemap`level2`)
Render.setCeilingTilemap(tilemap`level4`)
mySprite = sprites.create(img`
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
    `, SpriteKind.Player)
mySprite = Render.getRenderSpriteVariable()
tiles.placeOnTile(Render.getRenderSpriteVariable(), tiles.getTileLocation(8, 8))
Render.setViewAngleInDegree(180)
_ = []
let _1 = 0
_2 = 0
Render.moveWithController(2)
for (let index = 0; index < 5000; index++) {
    _.push(_1)
    _1 += 1
}
game.onUpdateInterval(5000, function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile12`)) {
        if (!(mySprite.tilemapLocation() == value)) {
            tiles.setWallAt(value, true)
            tiles.setTileAt(value, assets.tile`myTile11`)
        } else if (mySprite.tilemapLocation() == value) {
            loc = mySprite.tilemapLocation()
            if (loc == value) {
                list = [value]
                while (_var == 0) {
                    if (_var == 0) {
                        random_list = list._pickRandom()
                    } else if (random_list == loc) {
                        _var = 1
                    }
                }
            } else if (loc != value) {
                tiles.setTileAt(value, assets.tile`myTile11`)
                tiles.setWallAt(value, true)
            }
        }
    }
})

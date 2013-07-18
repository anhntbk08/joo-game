
Models = {
    pages: {
        states: {
            "loading-state": "LoadingState",
            "landing-state": "LandingSate",
            "gaming-state": "GamingSate",
        },
        "deault-state": "landing-state"
    },
    gameMode: {
    },
    screen: {
        width: 900,
        height: 800
    },
    resource: {
        assetsToLoader: ["res/loading-state/SpriteSheet.json", "res/loading-state/desyrel.fnt"],
        alienFrames: ["eggHead.png", "flowerTop.png", "helmlok.png", "skully.png"]
    },
    constants: {
        ALIEN: {
            ALIEN_INITIAL: 0,
            ALIEN_CLICKED: 1,
            ALIEN_HOVER: 2
        }
    }
}
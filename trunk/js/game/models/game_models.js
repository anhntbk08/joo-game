
Models = {
    pages: {
        states: {
            "loading-state": "LoadingState",
            "landing-state": "LandingState",
            "menu-state": "MenuState"
        },
        presenter:{
            "loading-state": "LoadingPresenter",
            "landing-state": "LandingPresenter",
            "menu-state": "MenuPresenter"
        },
        "default-state": "loading-state"
    },
    game: {
        gems :{
            map  : {
              x : 8,
              y : 8
            },
            gemsNumber : 64,
            width  : 37,
            height : 37        
        },
        margin: 2
    },
    screen: {
        width: 900,
        height: 800
    },
    defaultMap: [  // for test only
                    [4,3,8,7,9,8,1,9,1,9],
                    [4,8,7,9,5,1,7,8,8,8],
                    [4,2,7,1,6,5,3,1,3,9],
                    [4,5,9,4,0,5,8,2,6,7],
                    [0,3,6,7,9,7,1,5,6,1],
                    [3,8,2,0,2,4,7,8,6,2],
                    [0,0,1,6,6,1,1,2,8,3],
                    [1,1,1,1,4,1,9,3,7,8],
                    [2,7,5,3,1,1,2,7,3,8],
                    [9,2,1,6,1,8,6,4,3,8]
                ],
    gemType: ["paper_fan", "rose", "leaf", "ball", "ball_2", "jar", "scroll", "fish", "hat", "red_jar", "yellow_jar"],
    gemBasePath: "res/gems/",
    resource: {
        fontToLoader: {
            "desyrel": "res/loading-state/desyrel.fnt"
        },
        texture: {
            paper_fan: "res/gems/image_186.png",
            rose: "res/gems/image_188.png",
            leaf: "res/gems/image_190.png",
            jar: "res/gems/image_192.png",
            scroll: "res/gems/image_194.png",
            fish: "res/gems/image_196.png",
            hat: "res/gems/image_198.png",
            red_jar: "res/gems/image_200.png",
            ball: "res/gems/image_202.png",
            ball_2: "res/gems/image_204.png",
            yellow_jar: "res/gems/image_206.png"            
        },
        loading:{
            avatar: "http://nudieme.nudie.com.au/noncompetition/img/img-04.png",
            background_landing: "res/landing-state/background.jpg",
            background_menu: "res/menu-state/Mario-Background.jpg",
            play_button: "res/menu-state/play-button.png",
            connect_button: "res/menu-state/connect-button.png"
        }
    },
    delayTime: {
        switchFromLoadingPage : 3000,
        checkScoreWhenStart : 1000
    },
    animation: {
        swapAnimation: {
            time: 500
        },
        switchPageAnimation: {
            time: 1000
        },
        bounceAnimation:{
            time: 800
        }
    },
    constants: {
    },
    /*
     * using sothink compiler to convert sprite vector flash to
     * SVG html5
     * using sprites.js to run 
     */
     
    effect: {
        disappear: {
            "BackgroundColor": "transparent",
            "FileVersion": "8",
            "FrameCount": "33",
            "FrameHeight": "41",
            "FrameRate": 24.0,
            "FrameWidth": "43",
            "FrameRect": {
                "xmax": 43,
                "xmin": 0,
                "ymax": 41,
                "ymin": 0,
                "HTMLClass": "disappear-effect",
                "parentID": "wrapper-disappear-effect",
                "left": "0",
                "top": "0"
            },
           
            "MainFrame": {
                "type": 39,
                "ShowFrame": [
                    {
                        "depth": 1,
                        "id": "215",
                        "matrix": "1,0,0,1,0,0",
                        "name": "",
                        "replace": true,
                        "type": 26
                    },
                    {
                        "type": 1
                    },
                    {
                        "depth": 1,
                        "id": "215",
                        "matrix": "1,0,0,1,0,0",
                        "name": "",
                        "type": 26
                    },
                    {
                        "type": 1
                    },
                    {
                        "depth": 2,
                        "id": "218",
                        "matrix": "1,0,0,1,0,0",
                        "name": "",
                        "replace": true,
                        "type": 26
                    },
                    {
                        "depth": 1,
                        "remove": true,
                        "type": 5
                    },
                    {
                        "type": 1
                    },
                    {
                        "depth": 2,
                        "id": "218",
                        "matrix": "1,0,0,1,0,0",
                        "name": "",
                        "type": 26
                    },
                    {
                        "type": 1
                    },
                    {
                        "depth": 2,
                        "id": "221",
                        "matrix": "1,0,0,1,0,0",
                        "name": "",
                        "replace": true,
                        "type": 26
                    },
                    {
                        "type": 1
                    },
                    {
                        "depth": 2,
                        "id": "221",
                        "matrix": "1,0,0,1,0,0",
                        "name": "",
                        "type": 26
                    },
                    {
                        "type": 1
                    },
                    {
                        "depth": 2,
                        "id": "224",
                        "matrix": "1,0,0,1,0,0",
                        "name": "",
                        "replace": true,
                        "type": 26
                    },
                    {
                        "type": 1
                    },
                    {
                        "depth": 2,
                        "id": "224",
                        "matrix": "1,0,0,1,0,0",
                        "name": "",
                        "type": 26
                    },
                    {
                        "type": 1
                    },
                    {
                        "depth": 2,
                        "id": "227",
                        "matrix": "1,0,0,1,0,0",
                        "name": "",
                        "replace": true,
                        "type": 26
                    },
                    {
                        "type": 1
                    },
                    {
                        "depth": 2,
                        "id": "227",
                        "matrix": "1,0,0,1,0,0",
                        "name": "",
                        "type": 26
                    },
                    {
                        "type": 1
                    },
                    {
                        "depth": 1,
                        "id": "229",
                        "matrix": "1,0,0,1,0,0",
                        "name": "",
                        "replace": true,
                        "type": 26
                    },
                    {
                        "depth": 2,
                        "remove": true,
                        "type": 5
                    },
                    {
                        "type": 1
                    },
                    {
                        "depth": 1,
                        "id": "229",
                        "matrix": "1,0,0,1,0,0",
                        "name": "",
                        "type": 26
                    },
                    {
                        "type": 1
                    },
                    {
                        "depth": 1,
                        "id": "231",
                        "matrix": "1,0,0,1,0,0",
                        "name": "",
                        "replace": true,
                        "type": 26
                    },
                    {
                        "type": 1
                    },
                    {
                        "depth": 1,
                        "id": "231",
                        "matrix": "1,0,0,1,0,0",
                        "name": "",
                        "type": 26
                    },
                    {
                        "type": 1
                    },
                    {
                        "depth": 1,
                        "id": "233",
                        "matrix": "1,0,0,1,0,0",
                        "name": "",
                        "replace": true,
                        "type": 26
                    },
                    {
                        "type": 1
                    },
                    {
                        "depth": 1,
                        "id": "233",
                        "matrix": "1,0,0,1,0,0",
                        "name": "",
                        "type": 26
                    },
                    {
                        "type": 1
                    }
                ]
            },
            "tags": [
                {
                    "id": 215,
                    "type": 2,
                    "FillStyles": [
                        {
                            "height": 26,
                            "overflow": "visible",
                            "patternTransform": "matrix(1, 0, 0, 1, 8, 8)",
                            "patternUnits": "userSpaceOnUse",
                            "type": 7,
                            "viewBox": "0 0 26 26",
                            "width": 26,
                            "image": {
                                "height": 26,
                                "width": 26,
                                "xlink:href": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAADDUlEQVR4nO2US2gTURSGz5l7k0nqJKZ5TJvU9P0yCbS1tGrF2qpgEVyIRlwIPkCQunPhRnTroq6sC1FUCoqguLEuKoJFwbaLxlLE0IrYpjaJNgbNe6aT3HEhLrSpjrqT/uvL/53/nHMPwJr+C/kByL96UC2Pdre3c/cDgcI9v1/fXltrXGc2GzLJpDQ7PS3tHRmRtXhoqrS/pUVXX1GBh3d1iWV1zadLGhrOmxB9LqdzZlNpaep+MFj4nQenBXRrZCR/rKdHMAmOsyrAeVpXt5kThFNGnt/vcTj0WnyKtu6e36/v8HhKbILgkhn78jmbTTstlh4ulztBCeFgdBSAsThj7HUsk8lrKbYoqLGyUueyWPwE8ZKR44JGQvoRcRsiCiBJkC8U8gBw5dPS0ljv0JCkBbQish+AiFZrCeG4I4RSMwBs1lO6BwFCKuK3WSCiChBZkOWsFghAkWXw79hBNokiX2I29xHEJnQ4UHW7K1XGRiGXy6g8Xw86XQIo5Vx2+55zvb14vK0t6pUk9igaZZpBYiiErR6P6rBaE4C4m/E8jz6fBRRFhnR6ahmxKx6J23V6zkUbGjqQkO0CY5PMal28MTGx6rxWgIIA6rVAoHDQ53tvNhiGKWIYa2oEsFiUROB139TdhxWxN++SrgoxSI0GN5dOr0fGgErSUxMhyrNQqGiq1f6RenV8XHn75MmnTq93mn78+JiLx2cWnk8cirydN7fv3BrR11c1GYxGXXQ+CiZkCUnWPdh3+2ZKc6Kf011+8ULuBsjW22x9ptrGAyQvo8Ndti4cCPLPhh6omXBUESud15eWU2NLY2OFIIBazEvTCerq7najwXBBIMu0ucMbfjMZFGcnX4HFXpouq9kwrLD8nY0DAxkAWHUZNF0GKZVKgSzPgySBlM5OReYWGVOZ5KzZsOBurpqYi8Xiv4JoBpVfvBiTKT2pKMoZoiMD3i2t42a7LWErt4f1PP9yeHZ2+XceqAX0XaNHjxoAAFqqq0UsQCdv1EcXP3x41Tg4mPwTn7+Rpo6saU0/6CuAtCTKKo7Y9AAAAABJRU5ErkJggj=="
                            }
                        }
                    ],
                    "paths": [
                        {
                            "data": "M8,8L34 8L34 34L8 34L8 8",
                            "fill": 0
                        }
                    ]
                },
                {
                    "id": 218,
                    "type": 2,
                    "FillStyles": [
                        {
                            "height": 26,
                            "overflow": "visible",
                            "patternTransform": "matrix(1, 0, 0, 1, 8, 8)",
                            "patternUnits": "userSpaceOnUse",
                            "type": 7,
                            "viewBox": "0 0 26 26",
                            "width": 26,
                            "image": {
                                "height": 26,
                                "width": 26,
                                "xlink:href": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAADbElEQVR4nO2VXWhbZRjH/+97TnJysjQfNV9Nm1bWkHYthZmsrV9ZvaiToYyhSxGEMhEvVLzIJghCCQMHq4PdOXAwYQ42aBmCU4ZDi2FQe7EL27IMNtY2oaahTdpkycnHycn7euWViY0V8aa/ywee/5//8z48L7DPPnslDAh76SN7aZoJh/VvhELDVKezrK6s3Dt08WJhtx6xUfGrYFA3Pj5udNjtnVXGcoknT3LTV65UZ4H6TDisPxkMvkf6+i7xTAbdHR0hAPd3M6KNii+NjkpdbveELEkLVlm+5ff7u8PhsAAAx4aHvcRgOCc+fmxAJnMnm8+v7GYCNJh3dGxMPDo4aDYZjZ+LguBnjHlEQUhaTaYHZqD2nMMhGvX647Re72Sqerl9airWitFfEsVjMc4AxoAcAAguFyX9/e87fb4X3h4ZkdOqWlQF4eNarXamUi7/BACZCxe6fjt79sA/ShQHyKlAgLnN5gIIGWeSJJGhIQup1YwHNG3RGQj4qdvt1ra2lpX0dmSyxz+ppLNnvB6HYgCWYokEa8kIAL+6sMDePXw4ZZDl7yiQJwcPeonN1kO3t/3C0NAparW+SZ4+VXMl9cMHP8YGs6lNR4e3U/1m5uZsHOCtGgEAt4livb+9vWKS5ZeJKL4Ki6UdqVQfT6WWuMdzT11bu26V9b/abZYj3r5n40KbdFotlcrfb2w0TNRwvQHgtUBA53I6j1JCPhKTSRnJJLRSaYtp2tfZGzd+MRoMJslq7X5m0Bfjlcrt9Y2NUjMtoMl6A4C5WhUEQXgRgAmVCjRF0Xi5/OVmPj/3aG2tqJckOyyWSdLb+w5xOi95HI4jwWBQ10yv6TkJDwzQLpfLSSg9QQmhDOCgdEYvCMUen29EU5SUWK2WwHmIFIs2cL5ZF8V5K6A1WoimiS5fu1YrKMrPnPPrGmMFcB5HtWrnFssPmfTOLQNwXFXVuySTSaBcrhFgh1Uq/FwspjXSa/pGkUhEP7e4uBUaGPjU0tZ2lQpCW+73zS/i3855NMZypmOjS1lNW+10uT6hlPpLinI7mU5Xm+m1fFQz0WhX+mHi7qP7y4eef/2Vm2Wj+EHv9HRhPhKRAGB9fb0+MTurtqrXlOjYmLjz2dRbyxOn71TOnz+Jvxn7v+LPf2g1GrXORyLyf2Kyz//KH2kJWALw2lRDAAAAAElFTkSuQmCC"
                            }
                        },
                        {
                            "height": 41,
                            "overflow": "visible",
                            "patternTransform": "matrix(1, 0, 0, 1, 0, 0)",
                            "patternUnits": "userSpaceOnUse",
                            "type": 7,
                            "viewBox": "0 0 43 41",
                            "width": 43,
                            "image": {
                                "height": 41,
                                "width": 43,
                                "xlink:href": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAApCAYAAACsldDLAAABE0lEQVR4nO3XMWuDUBDA8UvTUHncoIsVEkqczrG4tuRzC12KX8HFN/kEH3QzoHPIkD5ashXvKML9wPXx53mcuAGAHazEw38H/IXGStFYKRorRWOlaKwUjZWisVI0VorGStl+P4sgYpwf8mNkIpym6UxExent9J4+p1nf92555g3Lzc7zfIYdgPfeAQBYa1vYAtR1/clxfrABhr9bRIzLsnw1xkRN07Qhmtvim0XEeJ/uM/Nkoq7rnPfeIWJMREWSJBlHZLA4NoxA9VFV1to2xOcv+XEcxy+OyIBlDO4RUWGtbbnPZdkGAD8b4QKXx2EYHMeZ99j2bBgH7lf/m8gYSFnVF0xjpWisFI2VorFSNFbKqmKvTadJ0XDNYIUAAAAASUVORK5CYII="
                            }
                        }
                    ],
                    "paths": [
                        {
                            "data": "M8,8L34 8L34 34L8 34L8 8",
                            "fill": 0
                        },
                        {
                            "data": "M43,41L0 41L0 0L43 0L43 41",
                            "fill": 1
                        }
                    ]
                },
                {
                    "id": 221,
                    "type": 2,
                    "FillStyles": [
                        {
                            "height": 26,
                            "overflow": "visible",
                            "patternTransform": "matrix(1, 0, 0, 1, 8, 8)",
                            "patternUnits": "userSpaceOnUse",
                            "type": 7,
                            "viewBox": "0 0 26 26",
                            "width": 26,
                            "image": {
                                "height": 26,
                                "width": 26,
                                "xlink:href": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAFGUlEQVR4nOWWf0xTVxTHz33v9bWUFvrKo4UypK0MiFt0oxgMU8A5FXH/dlmWGZbN4B+L2YzbMDEbaRajyxLdNGPKH2ZufyyjW+KmMSxOfvhjDqFGBoIiSulUWijl0V+8vr537/4YNIJoMPrfvv+eb87nnnPPPbkA/1dRT5sALdXY4nSyr69bt5pimAxfIHCpyOUKL/QcczhUDodDxej1qKujQ9rh8SgAgAEAmKVAztTUqF9zON5FxcUHSTAIefH4WgDwLLBRr5SXq+21taUUw2RzPN92DCC6w+PBAEtsSUVlZT7SaFzMrVsaCAbPBIPBOws9jVVVlGXVKiNTVOSibbaDWRaL1eFwqObiqYpanE529YoV2iydziImElM+n2+6rLlZBAAsRiKRdJr2gixnQzLZVnDgwNRC0EBnJ4nU1ER0IyNusFoLxHh8fNznU+bidOpE1dVptvz8N1UM05KmVr+aaTB0vJyZOe0eGFBGL14Ut27a9BeS5Zsxhjn9xdmzwkMgAFJhNGJVKHR9+saNC5evXAkH7t0jp8fGMMDsMDgB6K/37TOadLqfaZqulBUFE4AGfyh0fLfLNe0GUBYmflKl7ghHIhgDCAAAtNlMoZKS7Sa7fU1Dfb36aSEAs3fkBiANodAMbzIdlxGqILLMIZvNTiH0VsHy5dcAQITZMV1MjVVVzM4tW3IyOO5tACjG8fivY4LQ8V1HR9TV2Sk/WBEua24Wh4eHz4miuAGi0c8AoBsKCghF0/TjIAAA5WlpdBrL5oBeX4dstm1UdvbhHL3esbm0NDV19AN+0tTdLbGSNLmc53tpn6816fefvz84GGzq7pYeByrMy0Mv5OaK6RgjIGQdisU4wHgCz8xc4hhG6RwdxUveDE4A+nFD0VNfry0pLCxSs+yPAGAjCLm8odA3cxuEWWoiNwABAIh89eWLKpW2UBCEyzl79wbm4qdu3pQ4jhvJM5s/oiiqKB6LnRru6krMxVMVHXM4VDs8niQAUO11dazVatWI8bgy0tcn1ba2JpwA9A/799cmjcaj02Mhi0mDPmD37Dm84DxUe10dq1erqTtTU/Ibbneq5amKOLsdNep0zHvV1Rkmg2EtZTI5SSQyYeH5b1v0+tENK1eahbHJzwdOtltkjIX0TeX9AED9uWuX2syyrIQxHunrk9afOCEu1pEU6Pr4OH6nulqXw3HvA89/gsrK0qGnh6SJ4r2iZcuOgihC0B9khYlJqNi6vlWIRq/6GhsNqUMFgyELzzedAfDWtrYmHgnaXFqqytVoqhBFfcyIog4uXAA5Hp9QML4RxxifGxoKbHy+5FMCsN2Qw/00I0lgNho/lDSa3RoA7f1gBFu0dGCZ3X4YAB4NykgkaFqrrUCE6EEUQVYUmRDSND49fbni0KEZ+O/N/TLS2HhuRBAUm8GwUZqc2nl3yKft77oGBp6LcZvX+sITamXWO+/tpVbQRCwmY0IGyJwBIQSE+G97vfFZCwYAsLlcghKLESSjSu+gN23wSi9wvDGca8s/KdHQVuE+lFgImQfq8HrlSDT6BwH4XsY4AoQMyAB/D/X3PzTyYbVamVHE2wHvPwgTLJqtz/nyiwt6boXDU4tB5oGqrVamrbd3YjIUakhKUm1ClrfdFYTrsyM/T79fvZrEivLbivKXLhmyssJ8Dj+m0rCevvPn5cUgAE/wZ3hQ7XV1mplAgKwpLzejJF6tTtf47/r9fUVHjjz0j3jWeupf0jPTv13OSLoLVMJbAAAAAElFTkSuQmCC"
                            }
                        },
                        {
                            "height": 41,
                            "overflow": "visible",
                            "patternTransform": "matrix(1, 0, 0, 1, 0, 0)",
                            "patternUnits": "userSpaceOnUse",
                            "type": 7,
                            "viewBox": "0 0 43 41",
                            "width": 43,
                            "image": {
                                "height": 41,
                                "width": 43,
                                "xlink:href": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAApCAYAAACsldDLAAACA0lEQVR4nO2YMWvbQBSAnxsZhJFMj1yJgyRskYK3IELQUFINRgWToZAh/8XUGvorQn5KQuIpHVwInko6WKAG3PQgPjDIwyGM0sVq1LpQ56xLCbkP3vAeh97H8XgSKgFAGZ4IL/63wEOQsqKQsqKQsqKQsqKQsqKQsqJ4NrJqYRZLwi1rGEatSJFlWJvH0mia9tK27UZ7v+1bm5Y5+j4iSZIwhFCNMTYVo3lPmSN0r+W9y9c871eu/3mWs8dCPPhm58yuo2sCAEqz2Xzted5et9vtONuOAyWYhWEYZgcNwzDjOJ5w9FiAVxYAYGYYhhlFURjHMduytxpHx0fHO7s7jrVpmXdwBxhj3N5v+3gdY0LIOEkS9uiy+bnF6xgPh8Pw4tNFfzKaTBRdUU5PTk/SNFWyvHfWO19VNIN3hvSD9weHf6sDQNl9477N50XESmOgKqpKbgnJCgihWr1er/kt3w+6QcfZdpzoWxRSSsecPX6DS3YuZXotby8/j67r7g4Gg8ubHzfjjVcbuPOh85FSSv79RIGyjLEppXRa0Stq76x3btt2I78Rrr5efel/7l9Wq1WtqE3ALTsnW18zSuk4jmNW0SpqEARBmqYKQkgrchNkFDL8AFBGCFm5fOHFsWqUQOy/LhUACrlRAADRsoXybL5nHx0pKwopKwopKwopK4onJfsTkPC6gjgfzgYAAAAASUVORK5CYII="
                            }
                        }
                    ],
                    "paths": [
                        {
                            "data": "M8,8L34 8L34 34L8 34L8 8",
                            "fill": 0
                        },
                        {
                            "data": "M43,41L0 41L0 0L43 0L43 41",
                            "fill": 1
                        }
                    ]
                },
                {
                    "id": 224,
                    "type": 2,
                    "FillStyles": [
                        {
                            "height": 26,
                            "overflow": "visible",
                            "patternTransform": "matrix(1, 0, 0, 1, 8, 8)",
                            "patternUnits": "userSpaceOnUse",
                            "type": 7,
                            "viewBox": "0 0 26 26",
                            "width": 26,
                            "image": {
                                "height": 26,
                                "width": 26,
                                "xlink:href": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAE3ElEQVR4nMVWa0xTZxh+znd64VQKtJRegHER1E5phnZxc39AM7XLZmaWdDH7Q2a2sLlLRJMpv2q9RHQzmJllw2QxmixZ7GIWkyFuRCSLOrMdNIjo3IACK0J7ekoptD3tueyHQkhtUHTJnn/fOc/7PN/7fu93Af5vuAHaDdAAyOx49l+7y6VtczrVi9FTZfvoqatTrTKbic/nkwDIAOADpK6Ghpx19hc2RhimvHqg/wxYNp0tdsuKFRqVXk9dv3w51ciyEgBZ1eZ0qhtZNj3i8RgNDGOLJxJhi9c7ninQ7nJpV+hN2/+6cesYAFiXll4DwGbQyLa1a5ny9evXEEJMBpPpUhsw3ciysmp5TQ3Nbd5s1ijUTjkuvGigmTHh+PGfuUjkp51eb8QHSADgrKkp7e2+uY8mJMdUZjuXEKaHsmRDLNXVBnVVlRdAZeHExNaX6uvvgWXTxGo2q8VYau9vF67sZC9eqR+4c++dNHCsyGp9/+uWFtusiJJST9sqSvwAUGQtvFTW2spnGvV3dysxno8pfr8PwPeJqamJeyMjaQBQWXQ6Q2B4uDYaCoGiKHkyFCZ6+7JCy7rnP8gdGLgN4B8A+OTLw9yJ5ub3DFbjBmio9mxr6wMkd0/PjIPnz9A6HXWzvz8ZGRxUAIDiWlpKU4Hgp+Fx/jVAEe4Pj1WoKKrQ8ebmoJ4hjTlNTednG+JZQG91ONIlBXkD5jLbDVNx0e/WcuvlAqNhyJCf82tUEM7rJCnRPTz8zEYAHuyRroaGHABoczrV483NliGPp8BTV5e1/R+Hs263JrBrl6nN6VS3u1xaAKAW4BM8RcncAP3F3r151pUrtyAetyej0dMcz4/TC8QoizUBgH5A2ZSbq1iLi3mN3f6hmpC16lTqGlmkzhPxT3V0iEI8nkAwGFEIsUBRyFOtQez45zVqbe6y6Pj4tcxTpG/HjtykKMqMSpWHWKxPicdv9odCgUVl5Aao5OHDW8DkXeQmJs8ZGObtbLwyuz2fqa3dKC9Z0ns3EOi82NOTXlRG3xw4UBwZ4w7e+bGrWJTlySWvrrudyRkZHEyXOBxalJdvIBUV3fpAQAVAWJSRIopKeCKsngyF8fLr9Rd4OfVHJudUR4doLisLVspyUzKRSHT6fHEvy8oLdd0jYID4pjW191UaTX5pdenpj/bv7+vP6M5VAFleVETx0Wj8rt+fbOjsfHBNZIq5AfrU0aMOjVr9BoBwUpK6ErHYJB+Pz9zy+wXDQe8PA3v2/NLDcanZk30eyIlDh0x5paV2RVESd65e7QOQArJcfD5A+i4vbwO1dOlnNM/rmWAwwhiNgrGwkKuw2Zrg83VWHTkSzZbxfY/HZHQ636UqK7fLfn97oc22D0A8qxEAjA4NffucIExLwMcU4KBpGqIoTkKWs27idpdLu2b16gKj1bqNqqraTSmKCeGwWk4m5/iZRsQNUA9nfDLg8ZzL1+nKQNNKdGxs9Mro6FQWH7KqtlZnsFiaKEHYTrOsCQCkYLAnEonMXfWZRrJv3qDE6+UAcNmymB+j0mppQshbKkKKwHEQZ2bCoiT1Hjl5UpibzWNEngiRUCipyPJXoiRdF2W5V9Zqd3NTU3/Pb5aFTu9FYcTjMRbo9eZ0IjHzJ89zr7S2Jv4r7fmYq8zD994jlfoXOokSZSwfqwQAAAAASUVORK5CYII="
                            }
                        },
                        {
                            "height": 41,
                            "overflow": "visible",
                            "patternTransform": "matrix(1, 0, 0, 1, 0, 0)",
                            "patternUnits": "userSpaceOnUse",
                            "type": 7,
                            "viewBox": "0 0 43 41",
                            "width": 43,
                            "image": {
                                "height": 41,
                                "width": 43,
                                "xlink:href": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAApCAYAAACsldDLAAAC3klEQVR4nO2YXUvbUBjHn24TvEjBsgrpYrH1hYRi7xwrzAWVKmHraHXzQ8jYhYzd9yP0ZrhLYYzdynDDl01kXsx7R0luxmAeibOHhTbVJBTchY2cZek06cmG2B88tJw+55x/w/NGQgDQBZeEa/9bgBc6YoOiIzYoOmKD4sqK7aZ4livUxPIDfILWWa2gJjY1khJondWK603zBcMwPclkMiHeFcfyc/mCMCwIh5XDCsZYB4AGNZUEXTRs/sn8U1pntbK2nixJrVrTMcYVGme1wk/Mdjs+AQAAIaS6rP/mE4lEWB/3neFZrJ31HMeRF3fruq45150VIp1Ot5WEnsMgN5PLhawQZKXsePRmNIox1gVBSJimCf39/X3SfSkbj8X79tCemrmTGZUVWbb3zj6eLex83tkJVCyZ9dIDSWI5lq3X6/rKm5XVqlGtzDyaKWx/2t7CGOuDicHEbnn3S+Z2ZjQ/ly9MTE6MJ+PJRC6fyxWLxeL01HRWw5p28ONAMwxD9yrYV9ZzHDcsiuLUwrOF51pVqy+/XX4niuJUJBKJO31tW3+//pFhmF6vdxLmbQPP82nHWnjp1dJrF9+w01eSpIdtCPVeukzTbFiWZRBLjX20ryKE9kg/nueHEEIq6Xt8fNyo1Wqal/tIPFcDO+uBKEvlcllmgOkh/VJ8SiB8AQAAIfTNj0gb302BH+CH8M/TJmBZltHL9bInJycQZPu94XdjaiQlKF8VmWGYHo7j2Mns5Lj6XVU3Nje2FEWR2TjLLr5YfNmuQBJPT9ZtcEH7p7F6ZB4Za6trq3aMBtV+2x5c+AE+DQBh8neXEhX2e5dtvufZzQ+bW/b35ixLVghwJheN4dx3gkWbXDSZxHviGNl6/6lYjHEFY1yRFVmO3YqxpVKp1IzRM6FBDOdtD8UuXe2vMe7XqAzfLl3tD2hUBypizxMKcLE/dB4haE4zl4Er+0YmcDpig6IjNiguldhfpAxKXMHiHAAAAAAASUVORK5CYII="
                            }
                        }
                    ],
                    "paths": [
                        {
                            "data": "M8,8L34 8L34 34L8 34L8 8",
                            "fill": 0
                        },
                        {
                            "data": "M43,41L0 41L0 0L43 0L43 41",
                            "fill": 1
                        }
                    ]
                },
                {
                    "id": 227,
                    "type": 2,
                    "FillStyles": [
                        {
                            "height": 26,
                            "overflow": "visible",
                            "patternTransform": "matrix(1, 0, 0, 1, 8, 8)",
                            "patternUnits": "userSpaceOnUse",
                            "type": 7,
                            "viewBox": "0 0 26 26",
                            "width": 26,
                            "image": {
                                "height": 26,
                                "width": 26,
                                "xlink:href": "data:image/png;base64,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"
                            }
                        },
                        {
                            "height": 41,
                            "overflow": "visible",
                            "patternTransform": "matrix(1, 0, 0, 1, 0, 0)",
                            "patternUnits": "userSpaceOnUse",
                            "type": 7,
                            "viewBox": "0 0 43 41",
                            "width": 43,
                            "image": {
                                "height": 41,
                                "width": 43,
                                "xlink:href": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAApCAYAAACsldDLAAADs0lEQVR4nO1YXUvbUBh+3doS52lJmJXaKDaii4i9cyCzCzKUjTGcgsUbRRjsooj/Q3Yzvdg/kNEbZcgQdRNExvDCSdkHpDfTDsvibFhnMjg5RNmFDXS1qYlJJzIfeCEfzdsn78dz3pMaAPDCJcG1iyZgB1dkq4UrstWCm2QpF32VhWtk+VY+4pYvM7hGtrOrs8MtX2a4XrBzASFEcxwXEXqF2OP446GO9o6Og9xBTpZlFQB011gWweuGJSYTU275MjNHkS2GcqiosiznCqcUVCGyrtVsNpuVjGOer06zWSaLEKIr3VdVNQ8F+eI4LuKElBkslwHHcZGiNJ8CwzChvrt9PdGuaNfY+NhYW2tbm9vNZjmynXxZaaIAgEII0Q0NDTR3i4sAAKQ+plLTz6an0+m0CADYxKXtRaRiZBmGCbW0tDT13+/vn3s5N9d9u7tb+63hveyeRAjBLMs2BQIBJMuypMma7vF7PCvLK8sHPw5yZzUb38q3yT/NM2UGK7LhX11aXeN5PgoAXoRQULgnDMw+n32RTCbnJ55MPGVZth0A/MZ947hw/ZTP4cHhuMX/ti1deuZ7Zm97a3sLAIAQgjM7Gan2Rq1n4/3Gu8WFxVeBQIBWFCUHABQhRB2Nj47oR7o+NDj0iGZoWpKknM/no5wsIpYb7DB/iDHGavEL7O/v59VDVQ2Hw6EHDx/0Nzc2N1G1lEeSJCk+Eh+ZX5h/7avzedberL0lhGBCCJZlOSemRbEx3BiamZmZKZSL5Qa0mgZ/6bWiFPtH46PjgiAMJJPJ+c2tzQ+Y4KNvX79lE5OJKYZhmkufNUrKptlf9hBCQZ7no4nJxNTw4HDcqFEEJ7UMAN7Up9QXBChYycc/IWtE0yBWEnk/AHgL905lw4k5mQ30zE5GgkK9sSzbpChK3jjXiQ7hcLi+0kJiF+chW6ybuqHFRoMZGqwoSl7oFWJiWhQvjGypmGOM1ePjY0+NpwZWlleWncrTWbBVN+XEnG/lo1CmPt2ecS1F1mxHoMma7kM+qudOT7coip9LnyuZcR3DEtlyYq5pms5ybGhifGIs1heLlUu3pmk6IcRskKkO2WIY0TJeIHgzWP9L+ZUvtxqZED33LsI2WU3T9Lq6Orp4Gotwkcjuzu6uJEm5syJ53mnLgJOi968ura4Jwl+Lg+0GtWpON4x65ntmb2N9Y73Sj9zcsjuSk3JDSiVzImeOt+IYYx1sRMeJnLnx3cBWGp3IWQ2chPhS4L/9Plt1XJGtFv4AKN7i/5hTKHMAAAAASUVORK5CYII="
                            }
                        }
                    ],
                    "paths": [
                        {
                            "data": "M8,8L34 8L34 34L8 34L8 8",
                            "fill": 0
                        },
                        {
                            "data": "M43,41L0 41L0 0L43 0L43 41",
                            "fill": 1
                        }
                    ]
                },
                {
                    "id": 229,
                    "type": 2,
                    "FillStyles": [
                        {
                            "height": 41,
                            "overflow": "visible",
                            "patternTransform": "matrix(1, 0, 0, 1, 0, 0)",
                            "patternUnits": "userSpaceOnUse",
                            "type": 7,
                            "viewBox": "0 0 43 41",
                            "width": 43,
                            "image": {
                                "height": 41,
                                "width": 43,
                                "xlink:href": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAApCAYAAACsldDLAAAFA0lEQVR4nNVZX0gbdxz/qhGv8LNNVgOpVzER3UmYkocoOs1hQ+yustY6EGWsb7IpYw9lrAhr3/ZgKQNfRgfdg1Dta91wRexcu+BgDyV9mB05nMS4hJ4mh8G7xvN2Y3tYrp6Xu+TucqX0A1/I73u/+9339/3/+6UKAGrhDUH16xbADGwTFiHktGstPdgmLI7jHrvW0oNtwvoJf7tda+mhpkCW4HK5PM3NzWcj70Ui8/fm54NdwWBuL5djGCYriqJgo5wvUWsD1a88WFklCKLDpvU0qSLNKiAl/0qmYrHYExUfAwDJhvUBwILP6kX95ubmlppnd9CZ1qzP5/OyLJtV8zmOE6CgRZfL5el+tzsYCoV6Gk43NNjlww6zL/gJfztN03GNRwJCyMnzfG5vb4/ZSe84AQCiP0cfVyqkDEOaVUc92Uv2Z9hM9uDgQOI4LifPC4fDAyzL8p2dne8MvT9E5XN5PpVOMXZmhpIRiBByK8b1Kw9WVskwOQgAtTiOtyFAboSQmwyTg8wuw179/OoXgUCga2x07Eq5tc1SWc2qfFRKPk+mQALAMAyjhqjIydMn0fb2dmqD3oi3trS2Xv/y+lcMw6Se/fFsvXI9FqPkbkYujYwqxziOtxV49dQgdVH5jGixlmdV1jOnWa3KVHeiDjvlOuUM9YR67szd+S7YFQxsJDb+TCaSKdknD/8+lFT+aSjP6mUYs5rVqkyGq1UgEOgyojG19UpQ6QlyMB3jkcU8LZr6eOoz5djlcjUpfxME0TH24dgVQRT+Wfxh8UeKoi6WcYnSH1R+QCYcx9v05iOE3CRJDk5fm76R28+9iEajvxY2V69jDTN9RdkJ9RpjNU/zvbm7cwsUdRSEeuY2aikjReFYgBAtRCu7xzIa85TBhCGEsJbmFu/MrZkZR5XDwb/g+fGPxsefxp6uKwsJAIAkSaDmacF0b0CGyP44HS8qtziOn1V8UBJFUchkM9lzkXMDj3559DhMhgcmpyYne3t6g/nDvFBbU+uoqanBOI4TOI7jwUDWqIKCL5QCQsiJ47jHT/jbh0eHL8d/j8fvf39/kabpLYQQhuO4JxwJDyQ2E1tra2u/8Tz/UkvUIEUtP1xeBgAQREE4HzlPRaPW+gVDmhVFUWBZNhun4/EzjWc8s7Ozs4W8KImiKGAYhqR/JWn14epPcp5FCDl9Pp/3AnWBwk5gGMMw2TyX5xfuLcxbEdSwsEpw+xyvTuCN7kZPLBZbB4UpCxvkXW+50NLS0pIoikJ1XbUjmUhuWRXWaPONyT/S6XRRcPne9nkBQKuzEhKJxJY82EnvaAWmYRjSbCEDZAH+1xjAkZnJPrJ/4pOJCW+T15vJZrIsyx4Llt7u3h45IDEMQ0aivhQqLoc3b938WjlGCLkJgugYuTQyOnd3bmH62vSNQtI3kp91SfekoM4ARDvRLmcAUJmcYZhj5uV5PkfTdI6m6binyeO5/c3tb61oUQ1dNyiVAQCOOjOyj+wf/mD4sp4baAVkJSirfr26LTcdU58eb1i05thBhgLs8LCoTwWAoz60lPb0zl8IIafZs5mh1KWsSErI91ta6awcrNwpmC4KWqeI3Z1dxuzdANmn3WOUg1UfMn2/Jac0kw23kqw7vNYp4lVtFIwGmB72c/uCIAi8hVel5PNkKvak6CKvJCoSVhAECSzeElrZqKF+9hUBA+3mRxevU1jTeKP+WvoPx9iA4R0qdT8AAAAASUVORK5CYII="
                            }
                        }
                    ],
                    "paths": [
                        {
                            "data": "M43,41L0 41L0 0L43 0L43 41",
                            "fill": 0
                        }
                    ]
                },
                {
                    "id": 231,
                    "type": 2,
                    "FillStyles": [
                        {
                            "height": 41,
                            "overflow": "visible",
                            "patternTransform": "matrix(1, 0, 0, 1, 0, 0)",
                            "patternUnits": "userSpaceOnUse",
                            "type": 7,
                            "viewBox": "0 0 43 41",
                            "width": 43,
                            "image": {
                                "height": 41,
                                "width": 43,
                                "xlink:href": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAApCAYAAACsldDLAAAEJElEQVR4nNVY32vbVhQ+cezND9fEItaacleIglyFrGEmrYW3JKY1K5iSjoRgDIPQvPShjL2OvgzKYH9AGWODvhhSszAYhI5C6GAEw0ofRjCMQcYEs7MoE8QiDvKKoinQh1ipqurXlZSFfXDA4l7d+/ncc8/5jgYAIAH/E8TOmgAJIiOLEEpHtZYTIiOLMR6Jai0nREaWYZjRqNZywmDfAgEhlGYYZnTuxtxcfbX+sPhecWZP3utIktTRNE3tT0sCgB4FWYDjbBDWUmuP1h5zHDdpHcMYZyPaI+HbswihtMlbVui74q60ubn5i3k+wzCj5RvlDzLDmYzF24Hh619RFHUBABIIIdpu3OxB05xUtVJd8ruHl3l6FiGUzuVyuUq1Mh9LxOLnz50fabfbLbDEoqIoqvFcKpWuCoIgAICuH+m6LMudIF60wpOspmmqKIo7sYFYvLHR2Jh6dyq39fvWFsb4bUVRuqapcYQQKhQKhfq39Yf0W3QmezHLXitdu6odabq8J3f/kzBACNHFUvF69aPqkqqpR81fm7+tfrf6/a2lW7ftwuL+l/e/AoAUACSKxeJ1P3v4NGeC5meMcRYBotcerT3meX62WHImwY29nhWiMMcwoGl6RFGULkVRI+Pj4+xiZXFeT+h6649W68mPT9bbf7YlcMifh/8e6qeRZ18je0JuYXE+9mYsLv4l7mxvb7eMmN39e7ejqmrPjYA5NjmOY0kvmFuatHW5S6ylnN6xs3K5fJP0PadC4hgG/fRkB88jNQpCPp+/sry8vMyOsSxKoaQgCDtu71tP1ZpBQmkDJ2iapsqy3BEEQWAvsuz6D+vrk1OTlzLDmbRbJVNVtSdJkhQbPA45u3mR31qz9fVCyi17+LWB/o9TA0Io3ev1unCcFUIVBV9kTRueKXyJ76GhIT8tS5Jwb9L57hfM63aawY1xrLzvnU+NHMrz/BVRFHdIyLp6dn9/X2o2m82nz54+a/zU2HALhYlLE+MeeyUBAGZmZgoAAJfzl3MkRA0Evp0IIZrjuMmFDxcqtZVa/e6ndz8zbv8r8+B4XrXyUgipmnrUaDR+7hcfvwUjmhR15+M7nziMpTDG2XK5fJN/n5+trdTqFEVdqK3U6gH2CedZ47dd/2UmnHsnlwd4qch4np8l3S9UBTOUGQDA4eErSssKffCNwaSiKF1DkR0cHPRIxbgjWTflY5clvPJwPB5Pqqp6QjBI1+CpZ+3G/NRwA9YeLkx746ln3RY3lJnbKVh7uLB9mG0wk/ROUX7IcLMgevYEJKcQBUJlA5LYjQKBJGKUKoxkrUCfPCcmPHWAb/hUdABAGAYY49Hp6enCg68ffDN8bjjz/J/nqiiKHQjQageNd+Jbee/ze18gsP9AR2okWefMY5YEQXuw0P1UEJx6wxglXgDuaB49LCf8YAAAAABJRU5ErkJggj=="
                            }
                        }
                    ],
                    "paths": [
                        {
                            "data": "M43,41L0 41L0 0L43 0L43 41",
                            "fill": 0
                        }
                    ]
                },
                {
                    "id": 233,
                    "type": 2,
                    "FillStyles": [
                        {
                            "height": 41,
                            "overflow": "visible",
                            "patternTransform": "matrix(1, 0, 0, 1, 0, 0)",
                            "patternUnits": "userSpaceOnUse",
                            "type": 7,
                            "viewBox": "0 0 43 41",
                            "width": 43,
                            "image": {
                                "height": 41,
                                "width": 43,
                                "xlink:href": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAApCAYAAACsldDLAAADxklEQVR4nN1Y32sbRxAeSXfxtoydW5BA9ipYSqNKkV24B0k4sazGpX4IlGJhRJ9KngohhORfDPkbIlqVgmXwwWHrsKw7wnK9+vpgnStZ1t3eD6uQDwbdCc368+zOzjeTAgAZEgAiKpZljZJYaxHSSS0kyzJJaq1FyEwsMhBRUVVV7f7SPUzLack4N0a2bfOE+M0gNlnbtrmmaafpVFr6+OHjBx+iBACcOH8rBQmdWR8QSqlSLpeLl5eXo36/PwCASJEXiWzciDiccwcA4Pj4+BQiEgUQSDAEjJw4iKhMHrmmaQNKqeLrEAC/yBLGWGGrsVUlKUKu4ErinFthiB78cPDCtEy+trambGxs5Le3t6uZTEYyDMOCiLsl+xljrDz9iYC5IB/PKpXKdzPvj2ffw1rgmXVdF2q1WvXtu7evn377tLr+zXpezsiSruujoOjcjqBxYQyDIhcE3/8G8TqSnU6ni4A5L8L/h911dRGYyljGWFHTtMHt7yMgrv98glFKs5xzi1Kar1arT466R4dpOS2NR2MrTILdBiJi3Mp2QxYBlVKlVNx9trsjP5ClwWBwquv6TWWKQxQAoFauVfVzXU+ErA02Nwxj6PzjOL1e7xNMEuPk5GQQY31CKc1ubm4W6s/q9fXset64MLwdEi42CKjYcL0rS0mOdrt9MP3uJa6Ieb+NLWREMR6PuRdRSmlWravb9Guq6Oe+VyCpPK482Xm+UycZQpZGdqIPHJhoBZIiUu/P/47bAjjGhTF0XRd6v/c+LUN1JYbEOoVl4Ishe+89VVgsJIsYXcfeF+66DQhjrNBoNNTMVUYyLqJrzwDcFAVKaV60Qvrq2Puyaa2rbqkNEZ+F96xpmsIDC0RUREUKIiqlQqn45v2b1w/pQ+URe1Ro7bdaSBCnSvFCxI5SyF1YBbjWx97zq19f/SbiG6uC3cjIztFheiV4wIGASo7lspIkkbOzs6Hruk6pVCruvdhrkRVCdF0fBu1Q1Iiues+3RYqfTQkYz3+183OnK+IbudxGHcQhoGLBnJ9QF3Hn1QX+VxVhjBXau+0dF9y5pjAINthwx++F/OfICrQfjmmaI/dvF/p/9f8IQZRQSrPNZlN1HAdM0+QhfOfIhioGEdpqh3NuOY4DkwY0dKGZO7NT3awwFpzDxJGInl3G1Bsg/nx2pu0IaFFiIy7ZmbYD7pEoQPhjEHuqEmftUJ1C3Plq3LVFjwFhjBVe/vTyx5WvVshn67MTd0LjARGVXC6X3/9+vyU/CJ5OCuuB5vPmHkxpgiRNRNP+Cx1Vlo/oimOrAAAAAElFTkSuQmCC"
                            }
                        }
                    ],
                    "paths": [
                        {
                            "data": "M43,41L0 41L0 0L43 0L43 41",
                            "fill": 0
                        }
                    ]
                }
            ]
        }
    }
};
/**
 * Created by Huang on 2017/5/29.
 */
function load_game(){
    titleTheme = document.createElement("audio");
    document.body.appendChild(titleTheme);
    titleTheme.setAttribute("src","audio/Theme.mp3");
    titleTheme.addEventListener("canplaythrough",itemLoaded,false);

    outWorld = document.createElement("audio");
    document.body.appendChild(outWorld);
    outWorld.setAttribute("src","audio/Outworld.mp3");
    outWorld.addEventListener("canplaythrough",itemLoaded,false);

    templeTheme = document.createElement("audio");
    document.body.appendChild(templeTheme);
    templeTheme.setAttribute("src","audio/Metroid.mp3");
    templeTheme.addEventListener("canplaythrough",itemLoaded,false);

    endingTheme = document.createElement("audio");
    document.body.appendChild(endingTheme);
    endingTheme.setAttribute("src","audio/Ending.mp3");
    endingTheme.addEventListener("canplaythrough",itemLoaded,false);

    swordHitAudio1 = document.createElement("audio");
    document.body.appendChild(swordHitAudio1);
    swordHitAudio1.setAttribute("src","audio/sword_hit.mp3");
    swordHitAudio1.addEventListener("canplaythrough",itemLoaded,false);

    swordHitAudio2 = document.createElement("audio");
    document.body.appendChild(swordHitAudio2);
    swordHitAudio2.setAttribute("src","audio/sword_hit.mp3");
    swordHitAudio2.addEventListener("canplaythrough",itemLoaded,false);

    swordHitAudio3 = document.createElement("audio");
    document.body.appendChild(swordHitAudio3);
    swordHitAudio3.setAttribute("src","audio/sword_hit.mp3");
    swordHitAudio3.addEventListener("canplaythrough",itemLoaded,false);

    bowAudio = document.createElement("audio");
    document.body.appendChild(bowAudio);
    bowAudio.setAttribute("src","audio/bow.mp3");
    bowAudio.addEventListener("canplaythrough",itemLoaded,false);

    shieldAudio = document.createElement("audio");
    document.body.appendChild(shieldAudio);
    shieldAudio.setAttribute("src","audio/shield.mp3");
    shieldAudio.addEventListener("canplaythrough",itemLoaded,false);

    explosionAudio = document.createElement("audio");
    document.body.appendChild(explosionAudio);
    explosionAudio.setAttribute("src","audio/explosion.mp3");
    explosionAudio.addEventListener("canplaythrough",itemLoaded,false);

    hurtAudio1 = document.createElement("audio");
    document.body.appendChild(hurtAudio1);
    hurtAudio1.setAttribute("src","audio/hurt.mp3");
    hurtAudio1.addEventListener("canplaythrough",itemLoaded,false);

    hurtAudio2 = document.createElement("audio");
    document.body.appendChild(hurtAudio2);
    hurtAudio2.setAttribute("src","audio/hurt.mp3");
    hurtAudio2.addEventListener("canplaythrough",itemLoaded,false);

    monsterDeadAudio1 = document.createElement("audio");
    document.body.appendChild(monsterDeadAudio1);
    monsterDeadAudio1.setAttribute("src","audio/monsterDead.mp3");
    monsterDeadAudio1.addEventListener("canplaythrough",itemLoaded,false);

    monsterDeadAudio2 = document.createElement("audio");
    document.body.appendChild(monsterDeadAudio2);
    monsterDeadAudio2.setAttribute("src","audio/monsterDead.mp3");
    monsterDeadAudio2.addEventListener("canplaythrough",itemLoaded,false);

    castleTheme = document.createElement("audio");
    document.body.appendChild(castleTheme);
    castleTheme.setAttribute("src","audio/Castle.mp3");
    castleTheme.addEventListener("canplaythrough",itemLoaded,false);

    randolphTheme = document.createElement("audio");
    document.body.appendChild(randolphTheme);
    randolphTheme.setAttribute("src","audio/randolphTheme.mp3");
    randolphTheme.addEventListener("canplaythrough",itemLoaded,false);

    rongen1Theme = document.createElement("audio");
    document.body.appendChild(rongen1Theme);
    rongen1Theme.setAttribute("src","audio/大谷幸 - 最后の戦い.mp3");
    rongen1Theme.addEventListener("canplaythrough",itemLoaded,false);

    rongen2Theme = document.createElement("audio");
    document.body.appendChild(rongen2Theme);
    rongen2Theme.setAttribute("src","audio/V.A. - ガノン最終戦.mp3");
    rongen2Theme.addEventListener("canplaythrough",itemLoaded,false);

    thunderAudio1 = document.createElement("audio");
    document.body.appendChild(thunderAudio1);
    thunderAudio1.setAttribute("src","audio/Thunder.mp3");
    thunderAudio1.addEventListener("canplaythrough",itemLoaded,false);
    thunderAudio2 = document.createElement("audio");
    document.body.appendChild(thunderAudio2);
    thunderAudio2.setAttribute("src","audio/Thunder.mp3");
    thunderAudio2.addEventListener("canplaythrough",itemLoaded,false);
    thunderAudio3 = document.createElement("audio");
    document.body.appendChild(thunderAudio3);
    thunderAudio3.setAttribute("src","audio/Thunder.mp3");
    thunderAudio3.addEventListener("canplaythrough",itemLoaded,false);

    transferAudio = document.createElement("audio");
    document.body.appendChild(transferAudio);
    transferAudio.setAttribute("src","audio/transfer.mp3");
    transferAudio.addEventListener("canplaythrough",itemLoaded,false);

    zeldaRescue = document.createElement("audio");
    document.body.appendChild(zeldaRescue);
    zeldaRescue.setAttribute("src","audio/Zelda's Rescue.mp3");
    zeldaRescue.addEventListener("canplaythrough",itemLoaded,false);

    recoverAudio = document.createElement("audio");
    document.body.appendChild(recoverAudio);
    recoverAudio.setAttribute("src","audio/recover.mp3");
    recoverAudio.addEventListener("canplaythrough",itemLoaded,false);

    magicAudio = document.createElement("audio");
    document.body.appendChild(magicAudio);
    magicAudio.setAttribute("src","audio/magic.mp3");
    magicAudio.addEventListener("canplaythrough",itemLoaded,false);


    titleScreenImage = new Image();
    titleScreenImage.src = "character/title2.png";
    titleScreenImage.onload = itemLoaded;

    titleTextImage = new Image();
    titleTextImage.src = "character/titletext.png";
    titleTextImage.onload = itemLoaded;

    playerWalking = new Image();
    playerWalking.src = "character/walking1.png";
    playerWalking.onload = itemLoaded;

    slaimuImage = new Image();
    slaimuImage.src = "character/slaimu.png";
    slaimuImage.onload = itemLoaded;

    monsterDeadImage = new Image();
    monsterDeadImage.src = "character/monsterdead1.png";
    monsterDeadImage.onload = itemLoaded;

    testMapImage = new Image();
    testMapImage.src = "character/testMap2.png";
    testMapImage.onload = itemLoaded;

    meadowImage = new Image();
    meadowImage.src = "character/meadow.png";
    meadowImage.onload = itemLoaded;

    templeImage = new Image();
    templeImage.src = "character/temple.png";
    templeImage.onload = itemLoaded;

    canyonImage = new Image();
    canyonImage.src = "character/canyon.png";
    canyonImage.onload = itemLoaded;

    swordAttackImage = new Image();
    swordAttackImage.src = "character/sword_attack.png";
    swordAttackImage.onload = itemLoaded;

    hurtImage = new Image();
    hurtImage.src = "character/hurt.png";
    hurtImage.onload = itemLoaded;

    nullImage = new Image();
    nullImage.src = "character/null.png";
    nullImage.onload = itemLoaded;

    arrowImage = new Image();
    arrowImage.src = "character/arrow.png";
    arrowImage.onload = itemLoaded;

    orcImage = new Image();
    orcImage.src = "character/orc.png";
    orcImage.onload = itemLoaded;

    meadow2Image = new Image();
    meadow2Image.src = "character/meadow2.png";
    meadow2Image.onload = itemLoaded;

    boomImage = new Image();
    boomImage.src = "character/boom.png";
    boomImage.onload = itemLoaded;

    swordImage = new Image();
    swordImage.src = "character/sword.png";
    swordImage.onload = itemLoaded;


    bowImage = new Image();
    bowImage.src = "character/bow.png";
    bowImage.onload = itemLoaded;

    boomItemImage = new Image();
    boomItemImage.src = "character/boomItem.png";
    boomItemImage.onload = itemLoaded;

    shieldImage = new Image();
    shieldImage.src = "character/shield.png";
    shieldImage.onload = itemLoaded;

    akashaImage = new Image();
    akashaImage.src = "character/akasha.png";
    akashaImage.onload = itemLoaded;

    heartImage = new Image();
    heartImage.src = "character/heart.png";
    heartImage.onload = itemLoaded;

    scriptImage = new Image();
    scriptImage.src = "character/script.png";
    scriptImage.onload = itemLoaded;

    lifeStoneImage = new Image();
    lifeStoneImage.src = "character/life_stone.png";
    lifeStoneImage.onload = itemLoaded;

    meadow3Image = new Image();
    meadow3Image.src = "character/Meadow3.png";
    meadow3Image.onload = itemLoaded;

    slaimu_redImage = new Image();
    slaimu_redImage.src = "character/slaimu_red.png";
    slaimu_redImage.onload = itemLoaded;

    randolphImage = new Image();
    randolphImage.src = "character/Randolph.png";
    randolphImage.onload = itemLoaded;

    caveImage = new Image();
    caveImage.src = "character/cave.png";
    caveImage.onload = itemLoaded;

    cave2Image = new Image();
    cave2Image.src = "character/cave2.png";
    cave2Image.onload = itemLoaded;

    villageImage = new Image();
    villageImage.src = "character/village.png";
    villageImage.onload = itemLoaded;

    cyclopsImage = new Image();
    cyclopsImage.src = "character/cyclops.png";
    cyclopsImage.onload = itemLoaded;

    village2Image = new Image();
    village2Image.src = "character/village2.png";
    village2Image.onload = itemLoaded;

    keyImage = new Image();
    keyImage.src = "character/key.png";
    keyImage.onload = itemLoaded;

    armorImage = new Image();
    armorImage.src = "character/armor.png";
    armorImage.onload = itemLoaded;

    fireImage = new Image();
    fireImage.src = "character/fire.png";
    fireImage.onload = itemLoaded;

    altarImage = new Image();
    altarImage.src = "character/altar.png";
    altarImage.onload = itemLoaded;

    altar2Image = new Image();
    altar2Image.src = "character/altar2.png";
    altar2Image.onload = itemLoaded;

    castleImage = new Image();
    castleImage.src = "character/castle.png";
    castleImage.onload = itemLoaded;

    rongenImage = new Image();
    rongenImage.src = "character/rongen.png";
    rongenImage.onload = itemLoaded;

    eyeImage = new Image();
    eyeImage.src = "character/eye.png";
    eyeImage.onload = itemLoaded;

    windImage = new Image();
    windImage.src = "character/wind.png";
    windImage.onload = itemLoaded;

    thunderImage = new Image();
    thunderImage.src = "character/thunder.png";
    thunderImage.onload = itemLoaded;

    castle2Image = new Image();
    castle2Image.src = "character/castle2.png";
    castle2Image.onload = itemLoaded;

    amandaImage = new Image();
    amandaImage.src = "character/amanda.png";
    amandaImage.onload = itemLoaded;

    magicImage = new Image();
    magicImage.src = "character/magic.png";
    magicImage.onload = itemLoaded;

    doorImage = new Image();
    doorImage.src = "character/door.png";
    doorImage.onload = itemLoaded;
}

function itemLoaded(){
    loadCount++;

    if(loadCount >= itemsToLoad){
        outWorld.removeEventListener("canplaythrough",itemLoaded,false);
        titleTheme.removeEventListener("canplaythrough",itemLoaded,false);
        templeTheme.removeEventListener("canplaythrough",itemLoaded,false);
        endingTheme.removeEventListener("canplaythrough",itemLoaded,false);
        swordHitAudio1.removeEventListener("canplaythrough",itemLoaded,false);
        swordHitAudio2.removeEventListener("canplaythrough",itemLoaded,false);
        swordHitAudio3.removeEventListener("canplaythrough",itemLoaded,false);
        bowAudio.removeEventListener("canplaythrough",itemLoaded,false);
        shieldAudio.removeEventListener("canplaythrough",itemLoaded,false);
        explosionAudio.removeEventListener("canplaythrough",itemLoaded,false);
        hurtAudio1.removeEventListener("canplaythrough",itemLoaded,false);
        hurtAudio2.removeEventListener("canplaythrough",itemLoaded,false);
        monsterDeadAudio1.removeEventListener("canplaythrough",itemLoaded,false);
        monsterDeadAudio2.removeEventListener("canplaythrough",itemLoaded,false);
        castleTheme.removeEventListener("canplaythrough",itemLoaded,false);
        randolphTheme.removeEventListener("canplaythrough",itemLoaded,false);
        rongen1Theme.removeEventListener("canplaythrough",itemLoaded,false);
        rongen2Theme.removeEventListener("canplaythrough",itemLoaded,false);
        thunderAudio1.removeEventListener("canplaythrough",itemLoaded,false);
        thunderAudio2.removeEventListener("canplaythrough",itemLoaded,false);
        thunderAudio3.removeEventListener("canplaythrough",itemLoaded,false);
        transferAudio.removeEventListener("canplaythrough",itemLoaded,false);
        zeldaRescue.removeEventListener("canplaythrough",itemLoaded,false);
        magicAudio.removeEventListener("canplaythrough",itemLoaded,false);
        recoverAudio.removeEventListener("canplaythrough",itemLoaded,false);



        soundPool.push({name:"swordHitAudio",element:swordHitAudio1,played:false});
        soundPool.push({name:"swordHitAudio",element:swordHitAudio2,played:false});
        soundPool.push({name:"swordHitAudio",element:swordHitAudio3,played:false});
        soundPool.push({name:"hurtAudio",element:hurtAudio1,played:false});
        soundPool.push({name:"hurtAudio",element:hurtAudio2,played:false});
        soundPool.push({name:"monsterDeadAudio",element: monsterDeadAudio1,played:false});
        soundPool.push({name:"monsterDeadAudio",element: monsterDeadAudio2,played:false});
        soundPool.push({name:"thunderAudio",element: thunderAudio1,played:false});
        soundPool.push({name:"thunderAudio",element: thunderAudio2,played:false});
        soundPool.push({name:"thunderAudio",element: thunderAudio3,played:false});

        titleTheme.loop = true;
        outWorld.loop = true;
        templeTheme.loop = true;
        endingTheme.loop = true;
        castleTheme.loop = true;
        randolphTheme.loop = true;
        rongen1Theme.loop = true;
        rongen2Theme.loop = true;
        zeldaRescue.loop = true;


        currentBgm = titleTheme;
        bgmToPlay = titleTheme;
        titleTheme.play();
        game_state = GAME_LOADING2;
    }
}

function drawAnime(animeL,cxt) {
    for(var i = 0;i<animeL.length;i++){
        animeL[i].draw(cxt);
        if(animeL[i].over||(animeL[i].frame>=animeL[i].image.width/animeL[i].width && !animeL[i].loop)){
            animeL.splice(i,1);
        }
    }
}

function clonePlayer(origin,clone){
    clone.x=origin.x;
    clone.tileX = origin.tileX;
    clone.y=origin.y;
    clone.tileY = origin.tileY;
    clone.direction=origin.direction;
    clone.health=origin.health;
    clone.inventory.array = origin.inventory.array;
    clone.subWeapon = origin.subWeapon;
}

function drawPicture(cxt,image,x,y,indexX,indexY,width,height){
    var originY = indexY*height;
    var originX = indexX*width;
    cxt.drawImage(image,originX,originY,width,height,x,y,width,height);
}

function map_load(){
    Map = function (image,bgm){
        this.playerX = 0;
        this.playerY = 0;
        this.image = image;
        this.width = 512;
        this.height = 480;
        this.terrain = [];
        this.monsterList = new MonsterList();
        this.projectionList =new MonsterList();
        this.bgm = bgm;
        this.changeStyle = 0;
        this.animeList = [];
        this.nextMap = undefined;
        this.eventList = [];
        this.itemList = [];
        this.hints = ["神秘音：","继续战斗……"];
        this.akashaLocked = true;
    };
    Map.prototype.render = function (cxt) {
        drawPicture(cxt,this.image,0,0,0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    };
    Map.prototype.event = function (object){
        //console.log("position",object.tileX,object.tileY);
        if(object.type === PLAYER&&(object.action===WALKING||object.action === RELAX)){
            if(this.nextMap!==undefined){
                if(object.y <= 8){
                    mapToChange = this.nextMap;
                    return true;
                }
            }
            this.itemCheck(object);
        }
        return false;
    };
    Map.prototype.itemCheck = function(object){
        var i ;
        for(i = 0;i < this.itemList.length;i++){
            if(this.itemList[i].test(object))this.itemList.splice(i,1);
        }
    };
    Map.prototype.draw = function(cxt){
        for(var i = 0;i < this.itemList.length;i++){
            this.itemList[i].draw(cxt);
        }
    };

    TestMap = function(){
        Map.call(this,testMapImage,rongen1Theme);
        /*this.terrain = [
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0],
            [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0],
            [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
            [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
            [0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0],
            [0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0],
            [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ];*/
        this.terrain = [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ];
        this.playerX = 11*16;
        this.playerY = 21*16;
        this.hints = ["神秘音：","是的，你在一张测试地图里……","那又能怎么样呢？"];
        this.itemList[0] = new ScriptItem(0,20,19);
        this.itemList[1] = new ScriptItem(1,24,17);
        this.itemList[2] = new BowItem(29,18);
    };
    TestMap.prototype = new Map();
    TestMap.prototype.init = function(){
        /*this.monsterList.array.push(new Orc(3*32,13*32));
         this.monsterList.array.push(new Orc(4*32,3*32));
         this.monsterList.array.push(new Orc(14*32,6*32));
         this.monsterList.array.push(new Orc(2*32,4*32));
         this.monsterList.array.push(new Orc(13*32,9*32));
         this.monsterList.array.push(new Slaimu(4*32,5*32));
         this.monsterList.array.push(new Slaimu(10*32,5*32));
         this.monsterList.array.push(new Slaimu(9*32,10*32));
         this.monsterList.array.push(new Slaimu(2*32,9*32));
         this.monsterList.array.push(new Slaimu(6*32,11*32));*/
        //this.monsterList.array.push(new Slaimu_red(6*32,11*32));
        //this.monsterList.array.push(new Randolph(6*32,11*32));
        //this.monsterList.array.push(new Armor(6*32,11*32));
        //this.monsterList.array.push(new Fire(6*32,11*32,1));
        this.monsterList.array.push(new Rongen2(192,176));
        //this.monsterList.array.push(new Thunder(10,10,3.14));
        this.animeList.push(new AmandaAnime(15*16,16*24));
    };

    MeadowMap = function(){
        Map.call(this,meadowImage,outWorld);
        this.terrain = [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1],
            [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0],
            [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
            [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
            [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
            [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
            [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
            [0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
            [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0]
        ];
        this.nextMap = Meadow2Map;
        this.hints = ["神秘音：","多美啊……往昔之地米尔图，","又回来了。"];
    };
    MeadowMap.prototype = new Map();
    MeadowMap.prototype.init = function(){
        this.monsterList.array.push(new Slaimu(5*32,9*32));//create monsters;
        this.monsterList.array.push(new Slaimu(8*32,6*32));//create monsters;
        this.monsterList.array.push(new Slaimu(11*32,5*32));//create monsters;
        this.monsterList.array.push(new Slaimu(8*32,3*32));//create monsters;
        this.monsterList.array.push(new Slaimu(5*32,10*32));//create monsters;
    };

    TempleMap = function(){
        Map.call(this,templeImage,templeTheme);
        this.terrain = [
            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ];
        this.changeStyle = 4;
        this.nextMap = CanyonMap;
        this.eventList = [false];
        this.itemList[0] = new ScriptItem(0,8,12);
        this.hints = ["神秘音：","你是在质疑……","……我是说，向前离开神庙。"];
    };
    TempleMap.prototype = new Map();
    TempleMap.prototype.init = function(){

    };
    TempleMap.prototype.event = function (object){
        //console.log("position",object.tileX,object.tileY);
        //menuBody.end = true;
        if(object.type === PLAYER&&(object.action===WALKING||object.action === RELAX)){
            if (!this.eventList[0]){
                menuBody.inputText(["神秘音：","醒来……","快醒来……","你是我们唯一的希望。（空格键继续）","神秘音：","你似乎失去了记忆。","莫要慌张，按WSAD键移动，","向前离开神庙吧。"]);
                this.eventList[0] = true;
            }
            if(this.nextMap!==undefined){
                if(object.y <= 8){
                    mapToChange = this.nextMap;
                    return true;
                }
            }
            this.itemCheck(object);
        }
        return false;
    };


    CanyonMap = function(){
        Map.call(this,canyonImage,templeTheme);
        this.terrain = [
            [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0]
        ];
        this.playerX = 7*32;
        this.playerY = 14*32;
        this.nextMap = MeadowMap;
        this.eventList = [false,false];
        this.hints = ["神秘音：","看来你已经掌握了祈祷的技巧……"];
    };
    CanyonMap.prototype = new Map();
    CanyonMap.prototype.init = function(){
        this.monsterList.array.push(new Slaimu(6*32,8*32));
    };
    CanyonMap.prototype.event = function (object){
        //console.log("position",object.tileX,object.tileY);
        if(object.type === PLAYER &&(object.action===WALKING||object.action === RELAX)){
            if (!this.eventList[0] && object.y<=380){
                menuBody.inputText(["神秘音：","一只魔物...按J键使用你的武器。（空格键继续）"]);
                this.eventList[0] = true;
            }
            else if(!this.eventList[1] && this.monsterList.array[0].dead){
                menuBody.inputText(["神秘音：","你已经准备好战斗了。","阿曼达公主被邪恶的魔王戎根所掳去，","用你的剑和智慧救出她。这是你的使命。",
                    "神秘音：","若有所迷惑，按B键求助于我...我必忠心于你。"]);
                this.eventList[1] = true;
                this.eventList[0] = true;
            }
            if(this.nextMap!==undefined){
                if(object.y <= 8){
                    mapToChange = this.nextMap;
                    return true;
                }
            }
            this.itemCheck(object);
        }
        return false;
    };

    Meadow2Map = function(){
        Map.call(this,meadow2Image,outWorld);
        this.terrain = [
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1],
            [0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1],
            [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1],
            [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1],
            [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0]
        ];
        this.changeStyle = 0;
        this.nextMap = Meadow3Map;
        this.eventList = [false,false];
        this.hints = ["神秘音：","注意那些兽人的弓箭。"];
        this.bow = new BowItem(0,0);
    };
    Meadow2Map.prototype = new Map();
    Meadow2Map.prototype.init = function(){
        this.monsterList.array.push(new Slaimu(4*32,9*32));
        this.monsterList.array.push(new Slaimu(12*32,5*32));
        this.monsterList.array.push(new Slaimu(11*32,10*32));
        this.monsterList.array.push(new Slaimu(3*32,4*32));
        this.monsterList.array.push(new Orc(10*32,7*32));
        this.monsterList.array.push(new Orc(3*32,2*32));
    };
    Meadow2Map.prototype.event = function (object){
        if(object.type === PLAYER &&(object.action===WALKING||object.action === RELAX)){
            if(this.eventList[0] && this.nextMap!==undefined){
                if(object.y <= 8){
                    mapToChange = this.nextMap;
                    return true;
                }
            }
            if(!this.eventList[0] && this.monsterList.array[4].dead){
                this.eventList[0] = true;
                this.bow.tileX = this.monsterList.array[4].tileX+1;
                this.bow.tileY = this.monsterList.array[4].tileY+1;
                this.itemList.push(this.bow);
            }
            if(!this.eventList[1] && this.monsterList.array[5].dead){
                this.eventList[1] = true;
                this.itemList.push(new LifeStoneItem(this.monsterList.array[5].tileX+1,this.monsterList.array[5].tileY+1));
            }
            this.itemCheck(object);
        }
        return false;
    };

    Meadow3Map = function(){
        Map.call(this,meadow3Image,outWorld);
        this.terrain = [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
            [1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
            [1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
            [1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
            [1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
            [1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
            [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
            [1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
            [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0],
            [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0],
            [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0],
            [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0],
            [0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0],
            [0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0],
            [0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0],
            [0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0],
            [0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0],
            [0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0],
            [0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0],
            [0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
        ];
        this.changeStyle = 4;
        this.nextMap = CaveMap;
        this.eventList = [false];
        this.itemList[0] = new ScriptItem(1,24,12);
        this.hints = ["神秘音：","正面面对敌人，","便可用盾牌击飞来箭……"];
    };
    Meadow3Map.prototype = new Map();
    Meadow3Map.prototype.init = function(){
        this.monsterList.array.push(new Slaimu(13*32,6*32));
        this.monsterList.array.push(new Slaimu(2*32,5*32));
        this.monsterList.array.push(new Slaimu(7*32,4*32));
        this.monsterList.array.push(new Slaimu(9*32,10*32));
        this.monsterList.array.push(new Orc(2*32,2*32));
        this.monsterList.array.push(new Orc(4*32,7*32));
        this.monsterList.array.push(new Orc(10*32,3*32));
        this.monsterList.array.push(new Orc(12*32,8*32));
        this.monsterList.array.push(new Orc(6*32,9*32));
    };
    Meadow3Map.prototype.event = function (object){
        if(object.type === PLAYER &&(object.action===WALKING||object.action === RELAX)){
            if(this.nextMap!==undefined){
                if(object.tileX >= 23 && object.y <= 40){
                    mapToChange = this.nextMap;
                    return true;
                }
            }
            if(!this.eventList[0] && this.monsterList.array[6].dead){
                this.eventList[0] = true;
                this.itemList.push(new LifeStoneItem(this.monsterList.array[6].tileX+1,this.monsterList.array[6].tileY+1));
            }
            this.itemCheck(object);
        }
        return false;
    };

    CaveMap = function(){
        Map.call(this,caveImage,castleTheme);
        this.terrain = [
            [0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
            [0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],
            [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1],
            [0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
            [0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
            [0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
            [1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
            [0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0],
            [0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0]
        ];
        this.changeStyle = 4;
        this.playerX = 32;
        this.playerY = 14*32;
        this.nextMap = Cave2Map;
        this.eventList = [false,false];
        this.hints = ["神秘音：","小心爆炸物……","凡人。"];
    };
    CaveMap.prototype = new Map();
    CaveMap.prototype.init = function(){
        this.monsterList.array.push(new Slaimu_red(32,10*32));
        this.monsterList.array.push(new Slaimu_red(7*32,11*32));
        this.monsterList.array.push(new Slaimu_red(13*32,4*32));
        this.monsterList.array.push(new Slaimu_red(7*32,2*32));
        this.monsterList.array.push(new Orc(8*32,11*32));
        this.monsterList.array.push(new Orc(13*32,9*32));
        this.monsterList.array.push(new Orc(10*32,0));
    };
    CaveMap.prototype.event = function (object){
        if(object.type === PLAYER &&(object.action===WALKING||object.action === RELAX)){
            if(this.nextMap!==undefined){
                if(object.tileX <= 10 && object.y <= 10){
                    mapToChange = this.nextMap;
                    return true;
                }
            }
            if(!this.eventList[0] && this.monsterList.array[3].dead){
                this.eventList[0] = true;
                this.itemList.push(new LifeStoneItem(this.monsterList.array[3].tileX+1,this.monsterList.array[3].tileY+1));
            }
            if(!this.eventList[1] && this.monsterList.array[5].dead){
                this.eventList[1] = true;
                this.itemList.push(new LifeStoneItem(this.monsterList.array[5].tileX+1,this.monsterList.array[5].tileY+1));
            }
            this.itemCheck(object);
        }
        return false;
    };

    Cave2Map = function(){
        Map.call(this,cave2Image,randolphTheme);
        this.terrain = [
            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
            [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
            [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
            [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
            [0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0]
        ];
        this.changeStyle = 4;
        this.playerX = 7*32;
        this.playerY = 14*32;
        this.nextMap =VillageMap;
        this.eventList = [false,false,false];
        this.hints = ["神秘音：","善用弓箭；","将炸弹击回魔物的身边……","亦或强攻。"];
        this.boom = new BoomItem(0,0);
    };
    Cave2Map.prototype = new Map();
    Cave2Map.prototype.init = function(){
        this.monsterList.array.push(new Randolph(7*32,5*32));
    };
    Cave2Map.prototype.event = function (object){
        if(object.type === PLAYER &&(object.action===WALKING||object.action === RELAX)){
            if(this.eventList[0] && this.nextMap!==undefined){
                if(object.tileY === 0 && (object.tileX === 14 || object.tileX === 15)){
                    mapToChange = this.nextMap;
                    return true;
                }
            }
            if (!this.eventList[1]){
                this.boss = new TextAnime(256,455,["伦道夫，忠诚守卫"]);
                menuBody.inputText(["伦道夫：","你来了。","","","伦道夫：","我必将守住这扇门，","不让你靠近公主！"]);
                this.animeList.push(this.boss);
                this.eventList[1] = true;
            }
            if(!this.eventList[0] && this.monsterList.array[0].dead){
                this.eventList[0] = true;
                this.boss.over = true;
                this.itemList.push(new LifeStoneItem(this.monsterList.array[0].tileX+1,this.monsterList.array[0].tileY+1));
                this.boom.tileX = this.monsterList.array[0].tileX;
                this.boom.tileY = this.monsterList.array[0].tileY;
                this.itemList.push(this.boom);
                this.itemList.push(new ScriptItem(2,this.monsterList.array[0].tileX,this.monsterList.array[0].tileY+1));
                menuBody.inputText(["伦道夫：","我已尽力……"]);
                bgmToPlay = castleTheme;
            }

            if(this.boom.picked && !this.eventList[2]){
                this.eventList[2] = true;
                menuBody.inputText(["神秘音：","你获得了炸弹，","I键打开背包，空格键装备它，K键使用炸弹。","威力巨大的火器……何不尝试用剑来将它击飞？"]);
            }
            this.itemCheck(object);
        }
        return false;
    };

    VillageMap = function(){
        Map.call(this,villageImage,templeTheme);
        this.terrain = [
            [0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
            [0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
            [0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
            [0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
            [0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
            [0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
            [0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
            [0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
            [0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
            [1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1],
            [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
            [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],
            [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
            [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ];
        this.changeStyle = 1;
        this.playerX = 32;
        this.playerY = 14*32;
        this.nextMap = Village2Map;
        this.eventList = [];
        this.hints = ["神秘音：","不要接近独眼怪物的正面，","在它的背后突袭……"];
    };
    VillageMap.prototype = new Map();
    VillageMap.prototype.init = function(){
        this.monsterList.array.push(new Cyclops(2*32,6*32));
        this.monsterList.array.push(new Slaimu_red(6*32,32));
        this.monsterList.array.push(new Slaimu_red(11*32,8*32));
        this.monsterList.array.push(new Orc(0,8*32));
        this.monsterList.array.push(new Orc(14*32,10*32));
        this.monsterList.array.push(new Orc(5*32,32));
        this.monsterList.array.push(new Cyclops(12*32,8*32));

    };
    VillageMap.prototype.event = function (object){
        if(object.type === PLAYER &&(object.action===WALKING||object.action === RELAX)){
            if(this.nextMap!==undefined){
                if(object.tileX >= 30){
                    mapToChange = this.nextMap;
                    return true;
                }
            }
            this.itemCheck(object);
        }
        return false;
    };

    Village2Map = function(){
        Map.call(this,village2Image,templeTheme);
        this.terrain = [
            [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1],
            [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
            [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1],
            [0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1],
            [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0],
            [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0],
            [1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0],
            [0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0],
            [0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0],
            [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0]
        ];
        this.changeStyle = 4;
        this.nextMap = AltarMap;
        this.eventList = [false,false,false];
        this.hints = ["神秘音：","灵活移动，","便能毫发无伤。"];
        this.coolTime = 0;
        this.key = new KeyItem(24,10);
        this.itemList[0] = new ScriptItem(3,12,6);
    };
    Village2Map.prototype = new Map();
    Village2Map.prototype.init = function(){
        this.monsterList.array.push(new Cyclops(6*32,10*32));
        this.monsterList.array.push(new Slaimu_red(9*32,13*32));
        this.monsterList.array.push(new Slaimu_red(5*32,10*32));
        this.monsterList.array.push(new Orc(6*32,12*32));
        this.monsterList.array.push(new Orc(5*32,13*32));

        this.monsterList.array.push(new Cyclops(9*32,3*32));
        this.monsterList.array.push(new Slaimu_red(11*32,6*32));
        this.monsterList.array.push(new Slaimu_red(14*32,7*32));
        this.monsterList.array.push(new Orc(11*32,5*32));
        this.monsterList.array.push(new Orc(10*32,6*32));
    };
    Village2Map.prototype.event = function (object){
        if(this.coolTime > 0)this.coolTime --;
        if(object.type === PLAYER &&(object.action===WALKING||object.action === RELAX)){
            if(this.nextMap!==undefined){
                if((object.tileX >= 21 && object.tileX <= 24)&& object.y <= 48){
                    if(this.key.picked){
                        mapToChange = this.nextMap;
                        return true;
                    }
                    else if(this.coolTime === 0){
                        menuBody.inputText(["神秘音：","需要一把钥匙……"]);
                        this.coolTime = 150;
                    }
                }
            }
            var deadAll = true;
            for (var i = 0;i < this.monsterList.array.length; i++){
                if(!this.monsterList.array[i].dead)deadAll = false;
            }
            if(deadAll && !this.eventList[2]){
                this.eventList[2] = true;
                console.log("2");
                this.itemList.push(this.key);
            }
            if(!this.eventList[0] && this.monsterList.array[5].dead){
                this.eventList[0] = true;
                this.itemList.push(new LifeStoneItem(this.monsterList.array[5].tileX+1,this.monsterList.array[5].tileY+1));
            }

            if(!this.eventList[1] && this.monsterList.array[0].dead){
                this.eventList[1] = true;
                this.itemList.push(new LifeStoneItem(this.monsterList.array[0].tileX+1,this.monsterList.array[0].tileY+1));
            }
            this.itemCheck(object);
        }
        return false;
    };

    AltarMap = function(){
        Map.call(this,altarImage,castleTheme);
        this.terrain = [
            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0],
            [1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1],
            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0],
            [0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1],
            [0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
            [0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
            [0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0]
        ];
        this.changeStyle = 4;
        this.nextMap = Altar2Map;
        this.eventList = [false,false];
        this.hints = ["神秘音：","魔像坚硬，","小心行事。"];
        this.playerX = 5*16;
        this.playerY = 25*16;
    };
    AltarMap.prototype = new Map();
    AltarMap.prototype.init = function(){
        this.monsterList.array.push(new Armor(6*16,7*16));
        this.monsterList.array.push(new Armor(26*16,8*16));
        this.monsterList.array.push(new Armor(15*16,28*16));

        this.monsterList.array.push(new Fire(0,20*16,2));
        this.monsterList.array.push(new Fire(16,20*16,2));
        this.monsterList.array.push(new Fire(2*16,20*16,2));

        this.monsterList.array.push(new Fire(20*16,2*16,0));
        this.monsterList.array.push(new Fire(20*16,3*16,0));
        this.monsterList.array.push(new Fire(20*16,4*16,0));

        this.monsterList.array.push(new Fire(13*16,23*16,1));
        this.monsterList.array.push(new Fire(14*16,23*16,1));
        this.monsterList.array.push(new Fire(15*16,23*16,1));

        this.monsterList.array.push(new Fire(13*16,23*16,1));
        this.monsterList.array.push(new Fire(14*16,23*16,1));
        this.monsterList.array.push(new Fire(15*16,23*16,1));
    };
    AltarMap.prototype.event = function (object){
        if(object.type === PLAYER &&(object.action===WALKING||object.action === RELAX)){
            if(this.nextMap!==undefined){
                if(object.tileY >= 15 && object.tileY<= 18 && object.tileX >= 14 && object.tileX<= 17){
                    mapToChange = this.nextMap;
                    return true;
                }
            }
            if(!this.eventList[0] && this.monsterList.array[0].dead){
                this.eventList[0] = true;
                this.itemList.push(new LifeStoneItem(this.monsterList.array[0].tileX+1,this.monsterList.array[0].tileY+1));
            }
            if(!this.eventList[1] && this.monsterList.array[2].dead){
                this.eventList[1] = true;
                this.itemList.push(new LifeStoneItem(this.monsterList.array[2].tileX+1,this.monsterList.array[2].tileY+1));
            }
            this.itemCheck(object);
        }
        return false;
    };

    Altar2Map = function(){
        Map.call(this,altar2Image,castleTheme);
        this.terrain = [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1],
            [0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0],
            [0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0],
            [0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0],
            [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0],
            [0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0],
            [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ];
        this.changeStyle = 4;
        this.nextMap = CastleMap;
        this.eventList = [false,false,false];
        this.hints = ["神秘音：","稳步前进，","步步为营。"];
        this.playerX = 28*16;
        this.playerY = 26*16;
        this.itemList[0] = new ScriptItem(4,0,4);
    };
    Altar2Map.prototype = new Map();
    Altar2Map.prototype.init = function(){
        var i;
        this.monsterList.array.push(new Armor(9*16,25*16));
        this.monsterList.array.push(new Slaimu_red(6*16,28*16));
        this.monsterList.array.push(new Slaimu_red(16*16,26*16));

        this.monsterList.array.push(new Armor(0,15*16));
        this.monsterList.array.push(new Orc(7*16,15*16));

        this.monsterList.array.push(new Orc(26*16,16*16));
        this.monsterList.array.push(new Orc(29*16,18*16));

        this.monsterList.array.push(new Armor(13*16,5*16));
        this.monsterList.array.push(new Armor(17*16,5*16));
        this.monsterList.array.push(new Cyclops(2*16,8*16));


        this.monsterList.array.push(new Fire(0,21*16,2));
        this.monsterList.array.push(new Fire(0,24*16,2));

        this.monsterList.array.push(new Fire(13*16,15*16,0));
        this.monsterList.array.push(new Fire(9*16,18*16,3));

        for(i = 0;i<3;i++)this.monsterList.array.push(new Fire((24+i)*16,10*16,2));
        for(i = 0;i<3;i++)this.monsterList.array.push(new Fire((30-i)*16,14*16,1));
    };
    Altar2Map.prototype.event = function (object){
        if(object.type === PLAYER  &&(object.action===WALKING||object.action === RELAX)){
            if(this.nextMap!==undefined){
                if(object.y <= 56 && object.x >= 232 && object.x <= 280 ){
                    mapToChange = this.nextMap;
                    return true;
                }
            }
            if(!this.eventList[0] && this.monsterList.array[0].dead){
                this.eventList[0] = true;
                this.itemList.push(new LifeStoneItem(this.monsterList.array[0].tileX+1,this.monsterList.array[0].tileY+1));
            }
            if(!this.eventList[1] && this.monsterList.array[7].dead){
                this.eventList[1] = true;
                this.itemList.push(new LifeStoneItem(this.monsterList.array[7].tileX+1,this.monsterList.array[7].tileY+1));
            }
            if(!this.eventList[2] && this.monsterList.array[8].dead){
                this.eventList[2] = true;
                this.itemList.push(new LifeStoneItem(this.monsterList.array[8].tileX+1,this.monsterList.array[8].tileY+1));
            }
            this.itemCheck(object);
        }
        return false;
    };

    CastleMap = function(){
        Map.call(this,castleImage,castleTheme);
        this.terrain = [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0],
            [0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0],
            [0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0],
            [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]
        ];
        this.changeStyle = 4;
        this.nextMap = Castle2Map;
        this.eventList = [false,false,false];
        this.hints = ["神秘音：","清除所有魔物。","我已感受到公主的气息……"];
        this.playerX = 15*16;
        this.playerY = 28*16;
    };
    CastleMap.prototype = new Map();
    CastleMap.prototype.init = function(){
        this.monsterList.array.push(new Fire(12*16,7*16,2));
        this.monsterList.array.push(new Fire(13*16,7*16,1));
        this.monsterList.array.push(new Fire(14*16,7*16,2));
        this.monsterList.array.push(new Fire(16*16,7*16,2));
        this.monsterList.array.push(new Fire(17*16,7*16,1));
        this.monsterList.array.push(new Fire(18*16,7*16,2));

        this.monsterList.array.push(new Armor(12*16,8*16));
        this.monsterList.array.push(new Armor(18*16,8*16));
        this.monsterList.array.push(new Armor(12*16,20*16));
        this.monsterList.array.push(new Armor(18*16,20*16));

        this.monsterList.array.push(new Cyclops(12*16,15*16));
        this.monsterList.array.push(new Cyclops(18*16,15*16));

        this.monsterList.array.push(new Orc(12*16,14*16));
        this.monsterList.array.push(new Orc(17*16,14*16));
    };
    CastleMap.prototype.event = function (object){
        if(object.type === PLAYER &&(object.action===WALKING||object.action === RELAX)){
            var i;
            if(this.nextMap!==undefined){
                if(this.eventList[0] && object.y <= 104 && object.tileX >= 13 && object.tileX <= 17){
                    mapToChange = this.nextMap;
                    return true;
                }
            }
            var deadAll = true;
            for (i = 6;i < 12; i++){
                if(!this.monsterList.array[i].dead)deadAll = false;
            }
            if(deadAll && !this.eventList[0]){
                this.eventList[0] = true;
                for(i = 0;i < 6; i++)this.monsterList.array[i].dead = true;
                for(i = 0;i < 8; i++)this.terrain[6][12+i] = 0;
                //console.log(this.terrain);
            }
            if(!this.eventList[1] && this.monsterList.array[6].dead){
                this.eventList[1] = true;
                this.itemList.push(new ScriptItem(5,this.monsterList.array[6].tileX+1,this.monsterList.array[6].tileY+1));
            }
            if(!this.eventList[2]){
                this.eventList[2] = true;
                menuBody.inputText(["神秘音：","公主就被囚禁在那扇门后，","快带着你的剑去拯救她……"]);
            }
            this.itemCheck(object);
        }
        return false;
    };

    Castle2Map = function(){
        Map.call(this,castle2Image,castleTheme);
        this.terrain = [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
            [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
            [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
            [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]
        ];
        this.changeStyle = 4;
        this.nextMap = TestMap;
        this.eventList = [false,false,false,false,false,false,false,false,false];
        this.hints = ["阿曼达公主：","决不能放过戎根——"];
        this.playerX = 15*16;
        this.playerY = 28*16;
        this.akashaLocked = false;
        this.count = 40;
        this.boss = new Rongen(192,176);
        this.amanda = new AmandaAnime(15*16,6*16);
        this.title = new TextAnime(256,240,["打开背包使用阿卡夏符文"]);
    };
    Castle2Map.prototype = new Map();
    Castle2Map.prototype.init = function(){
        this.animeList.push(this.amanda);
    };
    Castle2Map.prototype.event = function (object){
        if(object.type === PLAYER &&(object.action===WALKING||object.action === RELAX)){
            if(this.nextMap!==undefined &&false){
                mapToChange = this.nextMap;
                return true;
            }

            if((this.akashaLocked && !this.eventList[1]) || this.end)this.count--;
            if(this.eventList[5] && this.count >0)this.count--;

            if(!this.eventList[1] && this.count === 0){
                this.eventList[1] = true;
                this.monsterList.array.push(this.boss);
            }

            if(this.eventList[5] && !this.eventList[8] && this.count === 160){
                this.eventList[8] = true;
                this.monsterList.array.splice(0,1000);
                this.door.freeze();
            }

            if(!this.eventList[0]){
                this.eventList[0] = true;
                object.locked = true;
                menuBody.inputText(["神秘音：","终于，持剑的勇者带着符文来到了封印之所……","打开背包使用阿卡夏符文，揭开封印，勇士。"]);
                this.animeList.push(this.title);
            }
            else if (this.eventList[1] && this.akashaLocked && !this.eventList[2]){
                this.eventList[2] = true;
                recoverAudio.play();
                bgmToPlay = rongen1Theme;
                this.title.over = true;
                menuBody.inputText(["","你使用阿卡夏符文揭开了“封印”。","","","神秘音：","呵呵呵……哈哈哈！","借符文之力，我终于再度降临尘世；","",
                    "神秘音：","曾受祭祀，又遭蒙尘；","我有许多名字与化身——深渊大神，巨瞳，谶言之主，伏行之大能——","膜拜叩首吧，凡人，向你们先祖的神，向我的大名——",
                    "戎根：","向戎根献上崇拜与礼赞吧！","",""
                ]);
                this.amanda.action = UNFREEZE;
            }
            else if(this.eventList[2] && !this.eventList[3] && this.amanda.action === RELAX){
                this.eventList[3] = true;
                menuBody.inputText(["阿曼达公主：","……发生了什么？","——封印——为什么封印被破坏了？","你用阿卡夏符文撕开了我对魔王的封印吗？",
                    "戎根：","只消利用凡人意识深处的希求，","俘虏他们的心易如反掌。","哪位勇者能拒绝拯救公主的童话呢？",
                    "阿曼达公主：","不，决不能让戎根突破世界之门，","你必须在这阻止他！",""]);
                object.locked = false;
                this.title = new TextAnime(256,450,["魔王戎根"]);
                this.animeList.push(this.title);
            }
            else if(this.eventList[3] && !this.eventList[4] && this.boss.dead){
                this.eventList[4] = true;
                for(var i = 0;i < this.monsterList.array.length;i++)this.monsterList.array[i].health = 0;
                bgmToPlay = rongen2Theme;
                menuBody.inputText([
                    "戎根：","不自量力的凡人，","怎能阻挡大神的权能！","",
                    "魔王吟咏了咒语，","将自己变得刀枪不入。","","",
                    "阿曼达公主：","我会在魔王身后展开位面之门！","只要将魔王迫入门内，一切就会结束。","你来清除那些它召唤的魔物！",
                    "阿曼达公主：","来，同我并肩战斗，","……就像过去那样。",""
                ]);
                this.player.invincible = true;
                this.player.invincibleTime = 30;
                this.boss = new Rongen2();
                this.monsterList.array.push(this.boss);
                this.animeList.push(new monsterDeadAnime(15*16,6*16));
                this.amanda.x = 15*16;
                this.amanda.y = 16*24;
                this.amanda.action = ATTACK;
                this.animeList.push(new monsterDeadAnime(15*16,16*24));
                this.door = new DoorAnime(210,64);
                this.animeList.push(this.door);
                this.hints = ["阿曼达公主：","戎根召唤的眷属会增强它的力量，","帮我消灭它们！"];
            }
            else if(this.eventList[4] && !this.eventList[5] && this.boss.y < 40){
                this.eventList[5] = true;
                menuBody.inputText([
                    "阿曼达公主：","我是此世第六位守扉人，","在此再次重申诸族的判决：","将你送回彼方，戎根。",
                    "戎根：","不——","以大神的名义，诅咒你、","你的子民和你的子民的后代！"
                ]);
                this.title.over =true;
                this.player.invincible = true;
                this.player.locked = true;
                this.amanda.action = WALKING;
                this.player.locked = false;
                this.count = 180;
            }
            else if (this.count === 0 && this.eventList[5] && !this.eventList[6]){
                this.eventList[6] = true;
                bgmToPlay = zeldaRescue;
                menuBody.inputText([
                    "阿曼达公主：","结束了。","","",
                    "阿曼达公主：","谢谢你。","","",
                    "阿曼达公主：","还记得我们的约定吗？","",""
                ]);
                menuBody.end =true;
            }
            else if(this.eventList[4] && !this.eventList[7] && this.boss.y > 300){
                this.eventList[7] = true;
                menuBody.inputText([
                    "阿曼达公主：","我……","我坚持不住了……","",
                    "戎根：","与其进行无谓的反抗，","不如接受大神的荣光。","",
                    "","戎根再次封印了阿曼达公主。","你失败了。",""
                ]);
                object.health = 0;
            }

            this.itemCheck(object);
        }
        return false;
    };
}

function game_load(){
    Title_screen = function(){
        this.dis = 0;
        this.direct = true;
        this.y = 582;
        this.action = RELAX;
        this.index = 0;
        this.await = 0;
        this.text = ["",""];
    };
    Title_screen.prototype.act = function(){
        mapContext.clearRect(0,0,CANVAS_WIDTH,CANVAS_WIDTH);
        if(this.action === RELAX){
            if(this.y > 0){
                mapContext.drawImage(titleScreenImage,0,this.y,CANVAS_WIDTH,CANVAS_WIDTH,0,0,CANVAS_WIDTH,CANVAS_WIDTH);
                if(this.y>400)this.y-= 5;
                else if(this.y>300)this.y-= 4;

                else if(this.y>200)this.y-= 3;
                else this.y-= 2;
            }
            else if (this.y > -100){
                mapContext.drawImage(titleScreenImage,0,0,CANVAS_WIDTH,CANVAS_WIDTH,0,0,CANVAS_WIDTH,CANVAS_WIDTH);
                mapContext.save();
                mapContext.globalAlpha = 0.01*(-this.y);
                mapContext.drawImage(titleTextImage,56,30);
                mapContext.restore();
                this.y -=2;
            }
            else {
                mapContext.drawImage(titleScreenImage,0,0,CANVAS_WIDTH,CANVAS_WIDTH,0,0,CANVAS_WIDTH,CANVAS_WIDTH);
                mapContext.drawImage(titleTextImage,56,30);
                mapContext.fillStyle = "#f5ffc5";
                mapContext.textAlign = "center";
                mapContext.font = "normal normal 24px 微软雅黑";
                mapContext.fillText("按空格键开始游戏",256,320+this.dis);
                mapContext.fillText("按J键选择关卡",256,350+this.dis);
                if(this.direct)this.dis+= 0.5;
                else this.dis-= 0.5;
                if(this.dis >= 5)this.direct = false;
                else if(this.dis <= -5)this.direct = true;

            }

            if(keyList[32]===1 && game_state!==TITLE_TO_INIT){
                keyList[32] = 2;
                startMap = TempleMap;
                game_state = TITLE_TO_INIT;
                bgmToPlay = undefined;
            }
            else if (keyList[74] === 1 && this.action === RELAX){
                keyList[74] = 2;
                this.action = ATTACK;
            }
        }
        else {
            if(this.await > 0)this.await--;
            if(this.index === 0) {
                this.text[0] = "从黑暗中醒来，来自天空的神秘音请求你解救公主。";
                this.text[1] = "前方的荒芜大地布满魔物，你踏上了冒险之途。";
            } else if (this.index === 1) {
                this.text[0] = "洞窟内的岩浆翻滚着硫磺的气息，而其尽头的敌人，";
                this.text[1] = "似乎隐藏着不为人知的秘密。";
            } else if (this.index === 2) {
                this.text[0] = "是谁曾在此被祭拜？公主的呼救似乎不远，";
                this.text[1] = "而在终点，黑暗覆盖了祠堂的穹顶。";
            } else if (this.index === 3) {
                this.text[0] = "公主就在门后，这场冒险即将结束。";
                this.text[1] = "迎接勇者的，却是——";
            }

            mapContext.drawImage(titleScreenImage,0,0,CANVAS_WIDTH,CANVAS_WIDTH,0,0,CANVAS_WIDTH,CANVAS_WIDTH);
            mapContext.drawImage(titleTextImage,56,30);
            menuContext.save();
            menuContext.font = "bold 16px 微软雅黑";
            menuContext.textAlign = "center";
            menuContext.fillStyle = "#f5ffc5";

            menuContext.fillText(this.text[1],256,305);
            menuContext.fillText(this.text[0],256,280);
            menuContext.fillText("神庙",256,330);
            menuContext.fillText("洞穴",256,355);
            menuContext.fillText("祭坛",256,380);
            menuContext.fillText("城堡",256,405);
            menuContext.fillText("W、S键移动光标",256,430);
            menuContext.fillText("空格键选择",256,455);
            menuContext.strokeStyle = "white";
            menuContext.lineJoin = "bevel";
            if(this.index>=0)menuContext.strokeRect(219,313+this.index*25,74,22);
            menuContext.fillStyle = "#120316";
            menuContext.restore();
            if(keyList[87] && this.await === 0){
                if(this.index>0)this.index--; //up
                this.await = 5;
            }
            else if(keyList[83] && this.await === 0){
                if(this.index<3)this.index++;//down
                this.await = 5;
            }
            else if(keyList[32] === 1){
                keyList[32] = 2;
                bgmToPlay = undefined;
                startMap = TempleMap;
                if (this.index === 1) {
                    playerBk.inventory.array[3] = new BowItem(0,0);
                    playerBk.subWeapon = playerBk.inventory.array[3];
                    playerBk.x = 32;
                    playerBk.y = 14*32;
                    startMap = CaveMap;
                } else if (this.index === 2) {
                    playerBk.inventory.array[3] = new BowItem(0,0);
                    playerBk.inventory.array[4] = new BoomItem(0,0);
                    playerBk.subWeapon = playerBk.inventory.array[3];
                    playerBk.x = 5*16;
                    playerBk.y = 25*16;
                    console.log(playerBk.x);
                    startMap = AltarMap;
                } else if (this.index === 3) {
                    playerBk.inventory.array[3] = new BowItem(0,0);
                    playerBk.inventory.array[4] = new BoomItem(0,0);
                    playerBk.inventory.array[5] = new LifeStoneItem(0,0);
                    playerBk.subWeapon = playerBk.inventory.array[3];
                    playerBk.x = 14*16;
                    playerBk.y = 28*16;
                    startMap = CastleMap;
                }
                playerBk.tileX = playerBk.x/16;
                playerBk.tileY = playerBk.y/16;
                game_state = TITLE_TO_INIT;
            }
        }
        if(currentBgm === undefined){
            mapContext.clearRect(0,0,CANVAS_WIDTH,CANVAS_WIDTH);
            game_state = GAME_INIT;
        }
    };
    title_screen = new Title_screen();

    Anime =function (image,width,height,halt){
        this.x = 0;
        this.y = 0;
        this.image = image;
        this.width = width;
        this.height = height;
        this.halt = halt;
        this.dis = 0;
        this.frame = 0;
        this.over = false;
        this.row = 0;
        this.loop = false;
    };
    Anime.prototype.draw = function (cxt) {
        drawPicture(cxt,this.image,this.x,this.y,this.frame,this.row,this.width,this.height);
        //console.log(this.row);
        this.dis++;
        if(this.dis === this.halt){
            this.dis = 0;
            this.frame++;
        }
    };

    TextAnime = function(x,y,text){
        Anime.call(this,nullImage,0,0,1);
        this.text = text;
        this.x = x;
        this.y = y;
        this.await = 0;
        this.frame = -1;
        this.count = 5;
    };
    TextAnime.prototype.draw = function(cxt){
        if(this.count > 0)this.count--;
        if(this.count === 0){
            var textLast;
            this.await++;
            cxt.save();
            cxt.font = "bold 16px 微软雅黑";
            cxt.textAlign = "center";
            cxt.fillStyle = "#f5ffc5";

            if(this.row === 0 && this.dis === 0 && this.await === 0){
                for(var i =0;i< this.textList.length;i++)console.log(this.text[i]);

            }
            if(this.row<this.text.length){
                if(this.await >= 1){
                    this.dis++;
                    this.await = 0;
                }
                if(this.dis >= this.text[this.row].length){
                    this.dis = 0;
                    this.row++;
                }
            }

            for(i =0;i <= this.row;i++){
                if(i<this.row){
                    cxt.fillText(this.text[i],this.x,this.y+i*20);
                }
                else {
                    if(this.text[i] !== undefined){
                        textLast = this.text[i].substring(0,this.dis+1);
                        cxt.fillText(textLast,this.x,this.y+i*20);
                    }
                }
            }

            cxt.restore();
        }
    };
    swordAttackAnime = function (x,y){
        Anime.call(this,swordAttackImage,16,16,2);
        this.x = x;
        this.y = y;
    };
    swordAttackAnime.prototype = new Anime();
    monsterDeadAnime =function (x,y) {
        Anime.call(this,monsterDeadImage,32,32,3);
        this.x = x;
        this.y = y;
    };
    monsterDeadAnime.prototype = new Anime();
    hurtAnime = function (x,y){
        Anime.call(this,hurtImage,hurtImage.width,hurtImage.height,1);
        this.x = x;
        this.y = y;
    };
    hurtAnime.prototype.draw = function(cxt){
        if(this.halt === 1)soundPlay("hurtAudio");
        cxt.save();
        cxt.scale(4,4);
        cxt.globalAlpha = this.halt;
        this.halt -= 0.04;
        cxt.drawImage(this.image,0,0);
        cxt.restore();
        if(this.halt<=0)this.over = true;
    };
    gameOverAnime = function (x,y){
        Anime.call(this,nullImage,0,0,0);
        this.x = x;
        this.y = y;
        this.frame = -1;
        this.over = false;
    };
    gameOverAnime.prototype.draw = function(cxt){
        if(game_state === MAP_CHANGE)this.over = true;
        cxt.save();
        cxt.fillStyle = "white";
        cxt.textAlign = "center";
        cxt.font = "normal normal 32px 微软雅黑";
        cxt.fillText("按空格键重生",this.x,this.y);
        cxt.restore();
    };
    arrowAttackAnime = function (x,y,rwo){
        Anime.call(this,swordAttackImage,16,16,1);
        this.row = rwo;
        this.x = x;
        this.y = y;
    };
    arrowAttackAnime.prototype = new Anime();
    boomAnime = function (x,y){
        Anime.call(this,boomImage,32,32,1);
        this.row = 1;
        this.x = x;
        this.y = y;
    };
    boomAnime.prototype = new Anime();
    boomPlaceAnime = function (x,y){
        Anime.call(this,boomImage,32,32,10);
        this.row = 0;
        this.x = x;
        this.y = y;
    };
    boomPlaceAnime.prototype.draw = function (cxt) {
        drawPicture(cxt,this.image,this.x,this.y,this.frame,0,32,32);
        this.dis++;
        if(this.dis === this.halt){
            this.dis = 0;
            this.frame++;
        }
    };
    WindAnime = function(x,y){
        Anime.call(this,windImage,138,192,4);
        this.x = x;
        this.y = y;
    };
    WindAnime.prototype = new Anime();
    AkashaAnime = function(){
        Anime.call(this,nullImage,0,0,1);
        this.dis = 0;
        this.period = true;
    };
    AkashaAnime.prototype.draw = function(cxt){
        if(!this.period && this.dis <=0.05)this.over = true;
        if(this.period && this.dis >= 0.95)this.period = false;
        //console.log(this.dis);
        if(this.period)this.dis += 0.025;
        else this.dis -= 0.025;
        cxt.save();
        cxt.fillStyle = "white";
        cxt.globalAlpha = this.dis;
        cxt.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
        cxt.restore();
    };
    AmandaAnime = function(x,y){
        Anime.call(this,amandaImage,32,32,5);
        this.x = x;
        this.y = y;
        this.action = FREEZE;
    };
    AmandaAnime.prototype.draw = function(cxt){
        if(this.action === RELAX){
            this.dis++;
            if(this.dis >50)this.frame = 1;
            if(this.dis >60){
                this.dis = 0;
                this.frame = 0;
            }
        }
        else if(this.action === UNFREEZE){
            this.dis++;
            if(this.dis >= this.halt){
                this.dis = 0;
                this.frame++;
            }
            if(this.frame > 4){
                this.action = RELAX;
                this.frame = 0;
                this.dis = 0;
                this.row = 2;
            }
        }
        else if (this.action === ATTACK){
            this.row = 0;
            this.frame = 5;
        }
        else if(this.action === WALKING){
            this.row = 1;
            this.dis++;
            if(this.dis >= this.halt){
                this.dis = 0;
                this.frame++;
            }
            if(this.frame > 5){
                this.frame = 0;
                this.dis = 0;
            }
        }
        drawPicture(cxt,this.image,this.x,this.y,this.frame,this.row,this.width,this.height);
    };
    MagicAnime = function(x,y){
        Anime.call(this,magicImage,100,100,2);
        this.x = x;
        this.y = y;
    };
    MagicAnime.prototype = new Anime();
    DoorAnime = function(x,y){
        Anime.call(this,doorImage,96,96,3);
        this.x = x;
        this.y = y;
        this.action = UNFREEZE;
        this.loop = true;
        this.row = 0;
    };
    DoorAnime.prototype.draw = function (cxt){
        //console.log("row",this.row,"frame",this.frame,"action",this.action);
        drawPicture(cxt,this.image,this.x,this.y,this.frame,this.row,this.width,this.height);
        //console.log(this.row);
        if(this.action === UNFREEZE){
            this.dis++;
            if(this.dis > 1){
                this.dis = 0;
                this.frame++;
            }
            if(this.frame > 3){
                this.action =RELAX;
                this.row = 1;
                this.frame = 0;
            }
        }
        else if(this.action === RELAX){
            this.dis++;
            if(this.dis >= this.halt){
                this.dis = 0;
                this.frame++;
            }
            if(this.frame > 3){
                this.frame = 0;
                this.dis = 0;
            }
        }
        else if (this.action === FREEZE){
            this.dis++;
            if(this.dis > 1){
                this.dis = 0;
                this.frame--;
            }
            if(this.frame <= -1)this.over = true;
        }
    };
    DoorAnime.prototype.freeze = function(){
        this.action = FREEZE;
        this.frame = 3;
        this.row = 0;
    };


    Monster = function (x,y,speed,image){
        this.type = ELSE_MONSTER;
        this.width=32;
        this.height=32;
        this.trueWidth=32;
        this.trueHeight=32;

        this.x=x;
        this.trueX = 0;
        this.nextX = -1;
        this.tileX = x/16;
        this.y=y;
        this.trueY =0;
        this.nextY = -1;
        this.tileY = y/16;

        this.direction=0;
        this.action=RELAX;
        this.remainStep = 0;
        this.relaxTime = 0;
        this.speed=speed;
        this.image=image;
        this.deadAnime = monsterDeadAnime;
        this.dis=2;
        this.health=3;
        this.frame=4;
        this.dead=false;
        this.flyState = [];
        this.flyLengthBuff = 0;
        this.restartTime = 25;
        this.invincible = false;
        this.attackValue = 1;
    };
    Monster.prototype.hit = function(player,tempMap){};
    Monster.prototype.draw = function(cxt){
        drawPicture(cxt,this.image,this.x,this.y,Math.floor(this.dis/3),this.direction,this.width,this.height);
        if(this.action === WALKING){
            this.dis++;
            if(this.dis>=this.frame*3){this.dis = 0;}
        }
    };
    Monster.prototype.act = function(tempMap) {
        if(this.action === ATTACKED){
            this.dis = 0;
            this.fly();
        }
        else{
            if(this.relaxTime>0)this.relaxTime--;
            else if(this.action ===  RELAX&&this.relaxTime === 0){//decide next direction and steps
                this.walkChoose(0,50);
            }
            else if(this.action === WALKING&&this.remainStep>0){
                this.walk();
            }
            else if(this.action === WALKING&&this.remainStep === 0){
                this.relaxTime = 15+Math.floor(30*Math.random());
                this.action  = RELAX;
                this.dis = 2;
            }
        }
        this.movementCheck(tempMap);
    };
    Monster.prototype.fly =function(){
        if(this.flyState[1]<= -this.restartTime){//restart time
            this.action = RELAX;
            return;
        }
        else if(this.flyState[1]>0){
            switch (this.flyState[0])
            {
                case 0:
                    this.nextY=this.y + this.flyState[2] + this.flyLengthBuff;
                    break;
                case 1:
                    this.nextX=this.x - this.flyState[2] - this.flyLengthBuff;
                    break;
                case 2:
                    this.nextX=this.x + this.flyState[2] + this.flyLengthBuff;
                    break;
                case 3:
                    this.nextY=this.y - this.flyState[2] - this.flyLengthBuff;
                    break;
            }
            this.flyState[2]-=2;
        }
        this.flyState[1]--;
    };
    Monster.prototype.damage = function(target,tempMap){
        if(target.type === PLAYER){
            if(!target.invincible){
                target.health -= this.attackValue;
                tempMap.animeList.push(new hurtAnime(0,0));
                target.invincible =true;
                target.invincibleTime = 30;
                target.action = ATTACKED;
                var targetX = target.x+target.trueX+target.trueWidth/2;
                var targetY = target.y+target.trueY+target.trueHeight/2;
                var thisX = this.x+this.trueX+this.trueWidth/2;
                var thisY = this.y+this.trueY+this.trueHeight/2;
                if(Math.abs(thisX-targetX)>Math.abs(thisY-targetY)){
                    target.flyState[0] = thisX-targetX>0?1:2;
                }
                else{
                    target.flyState[0] = thisY-targetY>0?3:0;
                }
                target.flyState[1]=4;
                target.flyState[2]=13;
            }
            this.hit(target,tempMap);
        }
        else if(!target.invincible){
            target.health -= this.attackValue;
            this.hit(target,tempMap);
            target.action = ATTACKED;
            target.flyState[0] = this.direction;
            target.flyState[1] = 4;
            target.flyState[2] = 5;
            console.log("projection attack!");
        }
    };
    Monster.prototype.drop = function(tempMap,player){};
    Monster.prototype.walk = function(){
        if(this.direction===3) {
            this.nextY =this.y - this.speed;
        }
        else if(this.direction===1){
            this.nextX=this.x - this.speed;
        }
        else if(this.direction===0){
            this.nextY =this.y + this.speed;
        }
        else if(this.direction===2){
            this.nextX=this.x + this.speed;
        }
        this.remainStep--;
        //console.log(this.remainStep);
    };
    Monster.prototype.movementCheck = function(tempMap){
        if(moveLegalJudge(this,tempMap) && this.action === WALKING)this.direction =  (1 + this.direction) % 4;
        tempMap.event(this);
    };
    Monster.prototype.walkChoose =function(stepAtLeast,stepLimit){
        var direction;
        this.remainStep = stepAtLeast+Math.floor(stepLimit*Math.random());
        direction =  Math.floor(4*Math.random());
        while(direction === this.direction){
            direction = Math.floor(4*Math.random());
        }
        this.direction = direction;
        this.action = WALKING;
    };
    Monster.prototype.playerPositionCheck = function(tempMap){
        var player = tempMap.player;
        var result = [false,false,Math.abs(this.tileX - player.tileX),Math.abs(this.tileY - player.tileY)];
        if(Math.abs(player.tileY- this.tileY) <= 1){
            result[1] = true;
            if(this.direction === 1 && this.tileX - player.tileX >= 0)result[0] = true;
            else if(this.direction === 2 && this.tileX - player.tileX <= 0)result[0] = true;
        }
        else if(Math.abs(player.tileX- this.tileX) <= 1){
            result[1] = true;
            if(this.direction === 0 && this.tileY - player.tileY <= 0)result[0] = true;
            else if(this.direction === 3 && this.tileY - player.tileY >= 0)result[0] = true;
        }
        return result;
    };

    MonsterList = function (){
        this.array = [];
    };//create monster list and its methods
    MonsterList.prototype.act = function (tempMap) {
        for(var i=0;i< this.array.length;i++){
            if(!this.array[i].dead)this.array[i].act(tempMap);
        }
    };
    MonsterList.prototype.draw = function(cxt) {
        for(var i=0;i< this.array.length;i++){
            if(!this.array[i].dead)this.array[i].draw(cxt);
        }
    };

    Slaimu = function (x, y) {
        Monster.call(this, x, y, 2, slaimuImage);
        this.health = 1;
        this.trueX = 8;
        this.trueY = 20;
        this.trueWidth = 16;
        this.trueHeight = 14;
        this.frame = 3;
        this.type = MONSTER;
    };
    Slaimu.prototype = new Monster();

    Slaimu_red = function(x,y){
        Slaimu.call(this, x, y);
        this.health = 2;
        this.image = slaimu_redImage;
        this.destroyCount = -1;
    };
    Slaimu_red.prototype =new Monster();
    Slaimu_red.prototype.act = function(tempMap){
        if(this.destroyCount === 0){
            this.selfDestruct(tempMap);
        }
        else if(this.action === ATTACKED){
            this.dis = 0;
            this.fly();
            if(this.destroyCount < 0)this.destroyCount = 20;
        }
        else if(this.relaxTime>0)this.relaxTime--;
        else if(this.action ===  RELAX&&this.relaxTime === 0)this.walkChoose(0,50);
        else if(this.action === WALKING&&this.remainStep>0){
                this.walk();
            }
        else if(this.action === WALKING&&this.remainStep === 0){
                this.relaxTime = 15+Math.floor(30*Math.random());
                this.action  = RELAX;
                this.dis = 2;
            }
        this.movementCheck(tempMap);
        if(this.destroyCount>0)this.destroyCount --;
    };
    Slaimu_red.prototype.draw = function(cxt){
        if(this.destroyCount > 0){
            var dis;
            if(this.destroyCount%5 > 2)dis = 0;
            else dis = 3;
            drawPicture(cxt,this.image,this.x,this.y,dis,this.direction,this.width,this.height);
        }
        else {
            drawPicture(cxt,this.image,this.x,this.y,Math.floor(this.dis/3),this.direction,this.width,this.height);
            if(this.action === WALKING){
                this.dis++;
                if(this.dis>=this.frame*3){this.dis = 0;}
            }
        }
    };
    Slaimu_red.prototype.selfDestruct = function(tempMap){
        this.dead = true;
        var damage = new DamageBox(this.x,this.y);
        damage.attackValue = 2;
        damage.trueX = -8;
        damage.trueY = -8;
        damage.trueWidth = 48;
        damage.trueHeight = 48;
        tempMap.projectionList.array.push(damage);
        explosionAudio.play();
        tempMap.animeList.push(new boomAnime(this.x,this.y));
        tempMap.animeList.push(new boomAnime(this.x+8,this.y));
        tempMap.animeList.push(new boomAnime(this.x-8,this.y));
        tempMap.animeList.push(new boomAnime(this.x,this.y+8));
        tempMap.animeList.push(new boomAnime(this.x,this.y-8));
    };
    Slaimu_red.prototype.hit = function(){
        if(this.destroyCount < 0)this.destroyCount = 15;
    };

    Orc = function (x, y) {
        Monster.call(this, x, y, 1, orcImage);
        this.health = 3;
        this.trueX = 5;
        this.trueY = 5;
        this.trueWidth = 23;
        this.trueHeight = 27;
        this.frame = 3;
        this.shooted= false;
        this.type = MONSTER;
    };
    Orc.prototype = new Monster();
    Orc.prototype.act = function (tempMap){
        var direction;
        if(this.action === ATTACKED){
            this.dis = 0;
            this.fly();
        }
        else{
            if(this.action ===  RELAX&&this.relaxTime <= 20&&!this.shooted){
                this.shoot(tempMap);
                this.dis = 2;
                this.shooted =true;
            }
            else if(this.relaxTime>0){
                direction = Math.floor(150*Math.random());
                if(direction<4)this.direction = direction;//random turning;
                this.relaxTime--;
            }
            else if(this.action ===  RELAX&&this.relaxTime === 0)this.walkChoose(20,80);
            else if(this.action === WALKING&&this.remainStep>0){
                this.walk();
            }
            else if(this.action === WALKING&&this.remainStep === 0){
                this.relaxTime = 40+Math.floor(20*Math.random());
                this.action  = RELAX;
                this.dis = 2;
                this.shooted = false;
            }
        }
        this.movementCheck(tempMap);
    };
    Orc.prototype.shoot = function (tempMap){
        //console.log("shoot at ",this.x,this.y,this.direction);
        tempMap.monsterList.array.push(new Arrow(this.x+8,this.y+8,this.direction));
    };
    Orc.prototype.drop = function(tempMap,player){
    };

    Arrow = function (x, y, direction) {
        Monster.call(this, x, y, 5, arrowImage);
        this.health = 1;
        this.trueX = 3;
        this.trueY = 3;
        this.trueWidth = 10;
        this.trueHeight = 10;
        this.width = 16;
        this.height = 16;
        this.frame = 1;
        this.direction = direction;
        this.flyLengthBuff = 5;
    };
    Arrow.prototype = new Monster();
    Arrow.prototype.draw = function(cxt){
        drawPicture(cxt,this.image,this.x,this.y,0,this.direction,32,32);
    };
    Arrow.prototype.act = function(tempMap){
        if(this.action === SHIELDED){
            this.fly();
        }
        else {
            tempMap.event(this);
            if(!this.dead){
                this.walk();
                if(moveLegalJudge(this,tempMap)){
                    this.arrowBroken(tempMap);
                    this.dead = true;
                }
            }
        }
    };
    Arrow.prototype.hit = function(target,tempMap){
        this.dead = true;
        var x = this.x+2,y = this.y+2;
        tempMap.animeList.push(new arrowAttackAnime(x,y,2));
    };
    Arrow.prototype.damage = function(target,tempMap){
        if(target.type === PLAYER){
            if((target.action === WALKING||target.action === RELAX)&&target.direction + this.direction === 3){//be shielded
                this.action = SHIELDED;
                shieldAudio.play();
                this.attackValue = 0;
                this.flyState[0] = target.direction;
                this.flyState[1] = 4;
                this.flyState[2] = 5;
                console.log("your shield protects you!");
            }
            else {
                if(!target.invincible){
                    target.health--;
                    tempMap.animeList.push(new hurtAnime(0,0));
                    target.invincible =true;
                    target.action = ATTACKED;
                    var targetX = target.x+target.trueX+target.trueWidth/2;
                    var targetY = target.y+target.trueY+target.trueHeight/2;
                    var thisX = this.x+this.trueX+this.trueWidth/2;
                    var thisY = this.y+this.trueY+this.trueHeight/2;
                    if(Math.abs(thisX-targetX)>Math.abs(thisY-targetY)){
                        target.flyState[0] = thisX-targetX>0?1:2;
                    }
                    else{
                        target.flyState[0] = thisY-targetY>0?3:0;
                    }
                    target.flyState[1]=4;
                    target.flyState[2]=13;
                }
                this.hit(target,tempMap);
            }
        }
        else if(!target.invincible){
            target.health -= this.attackValue;
            this.hit(target,tempMap);
            target.action = ATTACKED;
            target.flyState[0] = this.direction;
            target.flyState[1] = 4;
            target.flyState[2] = 5;
            console.log("projection attack!");
        }
    };
    Arrow.prototype.fly = function(){
        if(this.flyState[1] === 0){
            this.dead = true;
        }
        if(this.flyState[1]>0){
            switch (this.flyState[0])
            {
                case 0:
                    this.y+= +this.flyState[2] + this.flyLengthBuff;
                    break;
                case 1:
                    this.x+= -this.flyState[2] - this.flyLengthBuff;
                    break;
                case 2:
                    this.x+= +this.flyState[2] + this.flyLengthBuff;
                    break;
                case 3:
                    this.y+= -this.flyState[2] - this.flyLengthBuff;
                    break;
            }
            this.flyState[2]-=2;
        }
        this.flyState[1]--;
    };
    Arrow.prototype.arrowBroken = function(tempMap){
        tempMap.animeList.push(new arrowAttackAnime(this.x+2,this.y+2,2));
    };

    PlayerArrow =function (x,y,direction){
        Arrow.call(this,x,y,direction);
        this.attackValue = 2;
    };
    PlayerArrow.prototype = new Arrow();
    PlayerArrow.prototype.hit = function(target,tempMap){
        this.dead = true;
        var x = this.x+2,y = this.y+2;
        tempMap.animeList.push(new arrowAttackAnime(x,y,1));
    };
    PlayerArrow.prototype.arrowBroken = function(tempMap){
        tempMap.animeList.push(new arrowAttackAnime(this.x+2,this.y+2,1));
    };

    Boom = function (x,y){
        Monster.call(this,x,y,0,boomImage);
        this.attackValue = 0;
        this.health = 255;
        this.dis = 0;
        this.trueX = 5;
        this.trueY = 5;
        this.trueHeight = 22;
        this.trueWidth = 22;
        this.flyLengthBuff = 15;
    };
    Boom.prototype = new Monster();
    Boom.prototype.draw = function (cxt) {
        drawPicture(cxt,this.image,this.x,this.y,(Math.floor(this.dis/10))%2,0,32,32);
    };
    Boom.prototype.act = function (tempMap){
        if(this.action === ATTACKED){
            this.fly();
        }
        this.dis++;
        if(this.dis >= 90){
            this.dead = true;
            explosionAudio.play();
            tempMap.projectionList.array.push(new DamageBox(this.x,this.y));
            tempMap.projectionList.array.push(new DamageBox(this.x+16,this.y));
            tempMap.projectionList.array.push(new DamageBox(this.x-16,this.y));
            tempMap.projectionList.array.push(new DamageBox(this.x,this.y+16));
            tempMap.projectionList.array.push(new DamageBox(this.x,this.y-16));
            tempMap.animeList.push(new boomAnime(this.x,this.y));
            tempMap.animeList.push(new boomAnime(this.x+16,this.y));
            tempMap.animeList.push(new boomAnime(this.x-16,this.y));
            tempMap.animeList.push(new boomAnime(this.x,this.y+16));
            tempMap.animeList.push(new boomAnime(this.x,this.y-16));
        }
        tempMap.event(this);
        moveLegalJudge(this,tempMap);
    };
    Boom.prototype.fly =function(){
        if(this.flyState[1]<= -this.restartTime){//restart time
            this.action = RELAX;
            return;
        }
        else if(this.flyState[1]>0){
            switch (this.flyState[0])
            {
                case 0:
                    this.nextY=this.y + this.flyState[2]+ this.flyLengthBuff;
                    break;
                case 1:
                    this.nextX=this.x - this.flyState[2]- this.flyLengthBuff;
                    break;
                case 2:
                    this.nextX=this.x + this.flyState[2]+ this.flyLengthBuff;
                    break;
                case 3:
                    this.nextY=this.y - this.flyState[2]- this.flyLengthBuff;
                    break;
            }
            this.flyState[2]--;
        }
        this.flyState[1]--;
    };

    RBoom = function(x,y){
        Boom.call(this,x,y);
        this.attackValue = 1;
    };
    RBoom.prototype = new Boom();
    RBoom.prototype.act = function (tempMap){
        if(this.action === ATTACKED){
            this.fly();
        }
        this.dis++;
        if(this.dis >= 120){
            this.explore(tempMap);
        }
        tempMap.event(this);
        moveLegalJudge(this,tempMap);
    };
    RBoom.prototype.hit = function (){
        this.dis = 119;
    };
    RBoom.prototype.explore = function(tempMap){
        this.dead = true;
        var damage = new DamageBox(this.x,this.y);
        damage.attackValue = 2;
        damage.trueX = -8;
        damage.trueY = -8;
        damage.trueWidth = 48;
        damage.trueHeight = 48;
        tempMap.projectionList.array.push(damage);
        explosionAudio.play();
        tempMap.animeList.push(new boomAnime(this.x,this.y));
        tempMap.animeList.push(new boomAnime(this.x+8,this.y));
        tempMap.animeList.push(new boomAnime(this.x-8,this.y));
        tempMap.animeList.push(new boomAnime(this.x,this.y+8));
        tempMap.animeList.push(new boomAnime(this.x,this.y-8));
    };

    DamageBox = function (x,y){
        Monster.call(this,x,y,0,nullImage);
        this.attackValue = 1;
        this.invincible= true;
        this.dis = 0;
        this.trueWidth = 32;
        this.trueHeight = 32;
    };
    DamageBox.prototype = new Monster();
    DamageBox.prototype.act = function(){
        this.dis++;
        if(this.dis>1){
            this.dead = true;
        }
    };
    DamageBox.prototype.draw = function(cxt){};
    DamageBox.prototype.hit = function(){};
    DamageBox.prototype.fly = function(){};

    Randolph = function (x,y){
        Monster.call(this,x,y,1.5,randolphImage);
        this.frame = 3;
        this.health = 30;
        this.trueHeight = 30;
        this.trueWidth = 17;
        this.trueX =1;
        this.trueY =2;
        this.stepCount = 0;
        this.shootCoolTime = 0;
        this.attackTime = 0;
    };
    Randolph.prototype = new Monster();
    Randolph.prototype.act = function(tempMap){
        var playerPosition;
        if(this.shootCoolTime > 0)this.shootCoolTime--;
        if(this.attackTime >= 40){
            this.boomPlace(tempMap);
            this.attackTime = 0;
        }

        if(this.action === ATTACKED){
            this.stepCount = 0;
            this.dis = 0;
            this.fly();
            this.attackTime++;
        }
        else{
            this.attackTime = 0;
            playerPosition = this.playerPositionCheck(tempMap);
            //console.log(playerPosition);
            if(this.shootCoolTime === 0&& playerPosition[0])this.shootCoolTime = 150;
            if(this.shootCoolTime === 149 || this.shootCoolTime === 139 || this.shootCoolTime === 129)this.shoot(tempMap);

            if(this.relaxTime>0)this.relaxTime--;
            else if(this.action ===  RELAX&&this.relaxTime === 0){//decide next direction and steps
                this.walkChoose(50,100);
            }
            else if(this.action === WALKING&&this.remainStep>0){
                this.walk();
                this.stepCount++;
            }
            else if(this.action === WALKING&&this.remainStep === 0){
                this.relaxTime = 15+Math.floor(30*Math.random());
                this.action  = RELAX;
                this.dis = 2;
            }
        }
        if(this.stepCount >= 50 && this.remainStep > 25)this.boomPlace(tempMap);
        this.movementCheck(tempMap);
    };
    Randolph.prototype.boomPlace = function(tempMap){
        console.log("Randolph has placed a boom at "+this.x+","+this.y);
        this.stepCount = 0;
        tempMap.monsterList.array.push(new RBoom(this.x,this.y));
    };
    Randolph.prototype.shoot = function(tempMap){
        tempMap.monsterList.array.push(new Arrow(this.x+8,this.y+8,this.direction));
    };

    Cyclops = function (x,y){
        Monster.call(this,x,y,1,cyclopsImage);
        this.frame = 3;
        this.health = 3;
        this.trueX = 5;
        this.trueY =5;
        this.trueWidth = 22;
        this.trueHeight = 22;
        this.dashCoolTime = 0;
        this.type = MONSTER;
    };
    Cyclops.prototype = new Monster();
    Cyclops.prototype.act = function(tempMap) {
        var playerPosition;

        if(this.action === DASH)this.speed = 4;
        else this.speed = 1;
        if(this.dashCoolTime > 0)this.dashCoolTime --;

        if(this.action === ATTACKED){
            this.dis = 0;
            this.fly();
        }
        else{
            playerPosition = this.playerPositionCheck(tempMap);
            if(this.relaxTime>0)this.relaxTime--;
            else if(this.dashCoolTime === 0 && this.action !== DASH && playerPosition[0]){
                this.action = DASH;
                this.remainStep = 50;
                this.dashCoolTime = 150;
            }
            else if(this.action ===  RELAX&&this.relaxTime === 0){//decide next direction and steps
                this.walkChoose(30,20);
            }
            else if((this.action === DASH || this.action === WALKING)&&this.remainStep>0){
                this.walk();
            }
            else if((this.action === DASH || this.action === WALKING)&&this.remainStep === 0){
                this.relaxTime = 15+Math.floor(30*Math.random());
                this.action  = RELAX;
                this.dis = 2;
            }
        }
        this.movementCheck(tempMap);
    };

    Armor = function(x,y){
        Monster.call(this,x,y,1,armorImage);
        this.frame = 1;
        this.health = 5;
        this.trueX = 9;
        this.trueY = 3;
        this.trueWidth = 16;
        this.trueHeight = 29;
        this.action = FREEZE;
        this.count = 15;
        this.dis = 3;
        this.type = MONSTER;
    };
    Armor.prototype = new Monster();
    Armor.prototype.act = function(tempMap) {
        if(this.action === FREEZE){
            var playerPosition = this.playerPositionCheck(tempMap);
            //console.log(playerPosition);
            if(playerPosition[1] && playerPosition[2] < 5 && playerPosition[3] < 5 ){
                this.action = UNFREEZE;
            }
        }
        else if(this.action === UNFREEZE){
            this.count--;
            if(this.count === 0){
                this.action = RELAX;
                this.dis = 2;
                this.relaxTime = 1;
            }
            else {
                if(this.count%4 > 1)this.dis = 3;
                else this.dis = 2;
            }
        }
        else if(this.action === ATTACKED){
            this.dis = 0;
            this.action = RELAX;
        }
        else{
            if(this.relaxTime>0)this.relaxTime--;
            else if(this.action ===  RELAX&&this.relaxTime === 0){//decide next direction and steps
                this.walkChoose(50,0);
            }
            else if(this.action === WALKING&&this.remainStep>0){
                this.walk();
            }
            else if(this.action === WALKING&&this.remainStep === 0){
                this.relaxTime = 1;
                this.action  = RELAX;
                this.dis = 2;
            }
        }
        this.movementCheck(tempMap);
    };

    Fire = function(x,y,direction){
        Monster.call(this,x,y,2,fireImage);
        this.frame = 3;
        this.invincible = true;
        this.trueX = 9;
        this.trueY = 18;
        this.trueWidth = 18;
        this.trueHeight = 13;
        this.direction  = direction;
        this.action = WALKING;
    };
    Fire.prototype = new Monster();
    Fire.prototype.act = function(tempMap){
        this.remainStep = 1;
        this.walk();
        this.movementCheck(tempMap);
        //console.log(this.direction);
    };
    Fire.prototype.movementCheck = function(tempMap){
        if(moveLegalJudge(this,tempMap) && this.action === WALKING)this.direction =  3 - this.direction;
        tempMap.event(this);
    };

    Rongen = function(x,y){
        Monster.call(this,x,y,0,rongenImage);
        this.width = 128;
        this.height = 128;
        this.frame = 6;
        this.trueX = 40;
        this.trueY =40;
        this.trueHeight = 56;
        this.trueWidth = 48;
        this.state = RELAX;
        this.relaxTime = 300;
        this.health = 50;
        //this.health = 1;
        this.rotate = 0;
        this.shoot = false;
        this.shootCoolTime = 0;
        this.deadAnime = WindAnime;
    };
    Rongen.prototype = new Monster();
    Rongen.prototype.act = function(tempMap){
        //console.log(this.relaxTime);
        if(this.relaxTime>0)this.relaxTime--;
        if(this.shootCoolTime>0)this.shootCoolTime--;

        if(this.action === ATTACKED){
            this.dis = 0;
            this.flyState[1]--;
            if(this.flyState[1] === -5)this.action = RELAX;
        }

        if(this.state === RELAX && this.relaxTime === 270){
            tempMap.animeList.push(new monsterDeadAnime(4*32,6*32));
            tempMap.animeList.push(new monsterDeadAnime(4*32,9*32));
            tempMap.animeList.push(new monsterDeadAnime(11*32,6*32));
            tempMap.animeList.push(new monsterDeadAnime(11*32,9*32));
            tempMap.animeList.push(new monsterDeadAnime(15*16,5*32));
            soundPlay("monsterDeadAudio");
            tempMap.monsterList.array.push(new Eye(4*32,6*32));
            tempMap.monsterList.array.push(new Eye(4*32,9*32));
            tempMap.monsterList.array.push(new Eye(11*32,6*32));
            tempMap.monsterList.array.push(new Eye(11*32,9*32));
            tempMap.monsterList.array.push(new Eye(15*16,5*32));
        }
        else if (this.shoot && this.shootCoolTime === 0 &&  this.state === RADICAL){
            tempMap.monsterList.array.push(new Thunder(this.x + 48,this.y+80,this.rotate));
            soundPlay("thunderAudio");
            if(Math.abs(this.rotate - 2 * Math.PI) < 0.01){
                this.rotate = 0;
                this.shoot = false;
            }
            this.rotate += Math.PI / 12;
            this.shootCoolTime = 5;
        }

        if(this.relaxTime === 0 && this.state ===  RELAX) {
            this.state = TRANSPER_TO_RD;
            console.log("change to radical");
            tempMap.animeList.push(new WindAnime(this.x-16,this.y-32));
            transferAudio.play();
            this.relaxTime = 90;
            this.x = 512;
            this.y = 480;
        }
        else if(this.relaxTime === 0 && this.state ===  RADICAL){
            this.state = TRANSPER_TO_RL;
            console.log("change to relax");
            this.relaxTime = 90;
            tempMap.animeList.push(new WindAnime(this.x-16,this.y-32));
            transferAudio.play();
            this.x = 512;
            this.y = 480;
        }
        else if(this.relaxTime === 0 && this.state === TRANSPER_TO_RL){
            this.state = RELAX;
            this.walk(192,176,tempMap);
            this.relaxTime = 300;
            tempMap.animeList.push(new WindAnime(this.x-16,this.y-32));
            transferAudio.play();
        }
        else if(this.relaxTime === 0 && this.state === TRANSPER_TO_RD){
            this.state = RADICAL;
            var position = Math.floor(4 * Math.random()),x,y;
            switch (position){
                case 0:
                    x = 16;
                    y = 3*16;
                    break;
                case 1:
                    x = 23*16;
                    y = 3*16;
                    break;
                case 2:
                    x = 16;
                    y = 21*16;
                    break;
                case 3:
                    x = 23*16;
                    y = 21*16;
                    break;
            }
            this.walk(x,y,tempMap);
            this.relaxTime = 350;
            tempMap.animeList.push(new WindAnime(this.x-16,this.y-32));
            transferAudio.play();
            this.shoot = true;
            this.shootCoolTime = 60;
        }
    };
    Rongen.prototype.walk = function(x,y,tempMap){
        this.x = x;
        this.y = y;
        tempMap.event(this);
    };
    Rongen.prototype.draw = function (cxt){
        if(this.state === TRANSPER_TO_RL || this.state === TRANSPER_TO_RD){}
        else if(this.action === ATTACKED){
            drawPicture(cxt,this.image,this.x,this.y,Math.floor((this.flyState[1]+5)/4),1,this.width,this.height);
        }
        else {
            drawPicture(cxt,this.image,this.x,this.y,Math.floor(this.dis/4),0,this.width,this.height);
            this.dis++;
            if(this.dis >= this.frame*4){this.dis = 0;}
        }

    };

    Eye = function (x,y){
        Monster.call(this,x,y,1,eyeImage);
        this.frame = 6;
        this.health = 2;
        this.trueWidth = 14;
        this.trueHeight = 15;
        this.trueX = 9;
        this.trueY =10;
        this.type = MONSTER;
    };
    Eye.prototype = new Monster();
    Eye.prototype.draw = function (cxt){
        drawPicture(cxt,this.image,this.x,this.y,Math.floor(this.dis/4),0,this.width,this.height);
        this.dis++;
        if(this.dis >= this.frame*4){this.dis = 0;}
    };
    Eye.prototype.drop = function (tempMap,player){
        var i = Math.random();
        if((i <= 0.2 && player.health <= 4) || (i <= 0.5 && player.health <= 2)){
            tempMap.itemList.push(new LifeStoneItem(this.tileX+1,this.tileY+1));
        }
    };

    Thunder = function (x,y,direction){
        Monster.call(this,x,y,3,thunderImage);
        this.direction  = direction;
        this.trueWidth = 18;
        this.trueHeight = 18;
        this.trueX = 20;
        this.trueY =16;
        this.width = 48;
        this.height = 48;
        this.invincible = true;
        this.frame = 4;
    };
    Thunder.prototype = new Monster();
    Thunder.prototype.act = function(){
        if (this.x>CANVAS_WIDTH || this.y>CANVAS_HEIGHT ||this.x < -48 || this.y < -48){
            this.dead = true;
        }
        this.x += this.speed * Math.cos(this.direction);
        this.y += this.speed * Math.sin(this.direction);
    };
    Thunder.prototype.draw = function (cxt){
        drawPicture(cxt,this.image,this.x,this.y,Math.floor(this.dis/2),0,this.width,this.height);
        this.dis++;
        if(this.dis >= this.frame*2){this.dis = 0;}
    };

    Rongen2 = function(){
        Monster.call(this,192,258,0,rongenImage);
        //this.y= 30;
        this.invincible = true;
        this.width = 128;
        this.height = 128;
        this.frame = 6;
        this.trueX = 32;
        this.trueY = 64;
        this.trueHeight = 64;
        this.trueWidth = 56;
        this.state = RELAX;
        this.relaxTime = 300;
        this.health = 50;
        this.rotate = 0;
        this.shootCoolTime = 200;
        this.deadAnime = WindAnime;
        this.magicCoolTime = 150;
        this.monsterCount = 0;
        this.recover = 3;
    };
    Rongen2.prototype = new Monster();
    Rongen2.prototype.act = function(tempMap){
        var i,monsterNumber = 0;
        if(this.relaxTime>0)this.relaxTime--;
        if(this.shootCoolTime>0)this.shootCoolTime--;
        if(this.magicCoolTime>0)this.magicCoolTime--;

        for(i = 0;i<tempMap.monsterList.array.length;i++){
            if(!tempMap.monsterList.array[i].dead && tempMap.monsterList.array[i].type === MONSTER){
                monsterNumber++;
            }
        }
        this.speed = 0.01*(5+ monsterNumber);
        //console.log(monsterNumber,this.speed,this.relaxTime,this.shootCoolTime);

        if(this.action === ATTACKED){
            if(this.flyState[1] <= 0)this.action = RELAX;
            this.dis = 0;
            this.walk(-this.flyState[2]);
            this.flyState[1]--;
            this.flyState[2] -= 1;
        }
        if(this.magicCoolTime === 0){
            tempMap.animeList.push(new MagicAnime(this.x+14,this.y+40));
            tempMap.animeList.push(new MagicAnime(206,360));
            magicAudio.play();
            this.action = ATTACKED;
            this.flyState[1] = 7;
            this.flyState[2] = 7;
            this.magicCoolTime = 150;
        }

        if(this.shootCoolTime === 0){
            tempMap.monsterList.array.push(new Thunder(this.x + 48,this.y + 80,this.rotate));
            soundPlay("thunderAudio");
            this.rotate += Math.PI / 4;
            this.shootCoolTime = 5;
            if(Math.abs(this.rotate - 2 * Math.PI) < 0.01){
                this.rotate = 0;
                this.shootCoolTime = 200;
            }
        }

        if(this.relaxTime === 0 && monsterNumber < 25){
            i = Math.floor(10*Math.random());
            var newX = 112 + Math.floor(272*Math.random());
            var newY = 160 + Math.floor(224*Math.random());
            tempMap.animeList.push(new monsterDeadAnime(newX,newY));
            if(i > 5)tempMap.monsterList.array.push(new Eye(newX,newY));
            else if (i >4)tempMap.monsterList.array.push(new Armor(newX,newY));
            else if (i >3)tempMap.monsterList.array.push(new Cyclops(newX,newY));
            else if (i >2)tempMap.monsterList.array.push(new Orc(newX,newY));
            else if (i >1)tempMap.monsterList.array.push(new Slaimu_red(newX,newY));
            else tempMap.monsterList.array.push(new Slaimu(newX,newY));
            this.monsterCount++;
            this.relaxTime = 15;
            soundPlay("monsterDeadAudio");
            if((this.monsterCount === 2 && this.y > 140)||(this.monsterCount === 4)){
                this.monsterCount = 0;
                this.relaxTime = 240;
            }
        }

        if(tempMap.player.health === 1 && this.recover > 0){
            menuBody.inputText(["阿曼达公主：","坚持住！让我为你疗伤。","帮我消灭戎根的眷属，它们会增强魔王的力量！"]);
            tempMap.player.health += 5;
            menuAnimeList.push(new AkashaAnime());
            recoverAudio.play();
            this.recover --;
        }
        this.walk(this.speed);
    };
    Rongen2.prototype.walk = function(length){
        this.y += length;
    };
    Rongen2.prototype.draw = function (cxt){
        if(this.action === ATTACKED){
            drawPicture(cxt,this.image,this.x,this.y,0,3,this.width,this.height);
        }
        else {
            drawPicture(cxt,this.image,this.x,this.y,Math.floor(this.dis/4),2,this.width,this.height);
            this.dis++;
            if(this.dis >= this.frame*4){this.dis = 0;}
        }
    };




    Inventory = function(){
        this.array = [];
        this.array[0] = new AkashaItem(0,0);
        this.array[1] = new SwordItem(0,0);
        this.array[2] = new ShieldItem(0,0);

        /*this.array[3] = new BoomItem(0,0);
        this.array[4] = new BowItem(0,0);
        this.array[5] = new LifeStoneItem(0,0);
        this.array[6] = new ScriptItem(0,0);
        this.array[7] = new KeyItem(0,0);*/

        this.selected = -1;
        this.on = false;
        this.optionAwait = 0;
        this.animeList = [];
        this.toSelect = 0;
        this.action = BAG;

        this.scripts = [];
        this.scripts[0]= ["（潦草的字迹）","我们被欺骗了。戎根是这样的狡猾。我当听从父亲的劝诫，远离此地，但现在已经为时已晚。","我很害怕。卡特不知所踪，伦道夫也下落不明。三名剩下的骑士和腰带上的符文是我们最后的希望。","要守护我的人民，戎根必须被再度封印，不惜一切代价。","——星"];
        this.scripts[1]= ["据说五十多年来，没有一个人类曾踏上米尔图的土地。因此，这片古老的丛林从未被侵扰。","伦道夫说他北方海茵莱希的家乡，随处可见这般繁盛的密林。","本来想在南边的神庙扎营，但是那被巨石封住了，只好另寻它地。","深入往昔之地已是第四天，幸运的是没有发现任何入侵的迹象。或许那些星象师们错了。","但我们不能掉以轻心，戎根很有可能在暗中鬼祟窥视。——星"];
        this.scripts[2]= ["硫磺的味道呛得我几乎说不出话，就连素来多嘴多舌的卡特都缄口不言。","这里是父王封印戎根的古战场，四十九勇士同大战三个昼夜，才暂使它桎梏于神圣阿卡夏中。","行进至此，我竟生退缩之情——绝不能让同伴们发现。","假如戎根的封印确实有了裂缝，那么犹豫不决将是致命的。这也是我们来米尔图的原因。","——星"];
        this.scripts[3]= ["卡特嘲笑我想家的念头！他真是队伍里最可恶的人。","我确实想念青甸堡的草原，山坡和溪水。","还有那些肥嘟嘟的猫咪！","卡特正挂在旁边的小树上摘果，他个子虽小，但灵活极了。","为什么我会告诉他我的不安呢？","——星"];
        this.scripts[4]= ["我们损失了六个人，魔王果然回来了，带着它的爪牙们。","绝对不能后退。自从与世界签下契约，我就已经没有后退的余地了。","要幸福就要自由，要自由就不能被奴役，要不被奴役就要驱逐众神，要叫众神不能重返世界，就需要守扉人。","但我还是×××（删改的墨迹）","——星"];
        this.scripts[5]= ["有叛徒……他说世上战火纷飞是因为失去了信仰，他想唤回戎根。","众神统治的黄金时代不过是血与铁的黑暗纪元，祂们只会叫自己的信徒们相互搏杀，远比现在残酷野蛮。","如果我失败了，世上其他六位守扉人的工作也会前功尽弃。","我问卡特，你害怕吗？他说不。","因为“阿卡夏·阿曼达”就是 “希望之星”。"];
    };
    Inventory.prototype.act = function(player,tempMap){
        var i,j,stringStart=0,stringEnd=10,string =[];
        for(i =0;i<this.array.length;i++){
            if(this.array[i].type === SCRIPT)this.scriptItem = this.array[i];
        }

        if(this.on){
            if(this.action === BAG){
                if(this.selected!==this.toSelect){
                    this.animeList.splice(0,10);
                    this.selected = this.toSelect;
                    this.animeList.push(new TextAnime(346,150,[this.array[this.selected].name]));
                    while(this.array[this.selected].description[stringStart]!==undefined){
                        string.push(this.array[this.selected].description.substring(stringStart,stringEnd));
                        stringStart += 10;
                        stringEnd += 10;
                    }
                    this.animeList.push(new TextAnime(346,200,string));
                }
                if(this.optionAwait === 0){
                    if(keyList[65]&&this.selected > 0){
                        this.toSelect--;
                        this.optionAwait = 5;
                    }//left
                    else if(keyList[68]&&this.selected<this.array.length-1){
                        this.toSelect++;
                        this.optionAwait = 5;
                    }//right
                    else if (keyList[87] &&this.selected - 2 > 0){
                        this.toSelect -= 3;
                        this.optionAwait = 5;
                    }//up
                    else if (keyList[83] && this.selected + 3 < this.array.length){
                        this.toSelect += 3;
                        this.optionAwait = 5;
                    }//down
                    else if(keyList[32]){
                        if(this.array[this.selected].type === SUB_WEAPON)player.subWeapon = this.array[this.selected];
                        else if(this.array[this.selected].type === SCRIPT){
                            for(i = 0;i<this.scriptItem.unlocked.length;i++){
                                if(this.scriptItem.unlocked[i]){
                                    this.toSelect = i;
                                    break;
                                }
                            }
                            this.selected = -1;
                            this.action = SCRIPTS;
                        }
                        else if(this.array[this.selected].type === CONSUMABLE){
                            this.array[this.selected].use(player);
                            if(this.array[this.selected].number === 1)this.array.splice(this.selected,1);
                            else this.array[this.selected].number--;
                            this.optionAwait = 15;
                            this.toSelect = this.selected - 1;
                            if(this.toSelect<0)this.toSelect = 0;
                        }
                        else if(!tempMap.akashaLocked && this.array[this.selected].type === AKASHA){
                            gameSuspend = 3;
                            this.on = false;
                            console.log("akasha");
                            tempMap.akashaLocked = true;
                            menuAnimeList.push(new AkashaAnime());
                        }
                    }//space
                }
            }
            else if(this.action === SCRIPTS) {
                var scriptItem;
                for(i =0;i<this.array.length;i++){
                    if(this.array[i].type === SCRIPT)scriptItem = this.array[i];
                }
                if (this.toSelect !== this.selected) {
                    this.animeList.splice(0, 50);
                    this.selected = this.toSelect;
                    for(j = 0;j<this.scripts[this.selected].length;j++){
                        stringStart = 0;
                        stringEnd = 14;
                        //console.log(this.scripts[this.selected][j][stringStart]);
                        while(this.scripts[this.selected][j][stringStart]!==undefined){
                            string.push(this.scripts[this.selected][j].substring(stringStart,stringEnd));
                            stringStart += 14;
                            stringEnd += 14;
                        }
                    }
                    //console.log(string);
                    this.animeList.push(new TextAnime(306,120,string));
                }
                if(this.optionAwait === 0){
                    var index;
                    if(keyList[87]&&this.selected > 0){
                        for(index = this.selected -1 ;index>=0;index--){
                            if(this.scriptItem.unlocked[index]){
                                this.toSelect = index;
                                this.optionAwait = 5;
                                console.log("changed to script #",this.selected);
                                break;
                            }
                        }
                    }//up
                    else if(keyList[83]){
                        //console.log(this.selected,this.scriptItem.unlocked.length);
                        for(index = this.selected + 1;index<this.scriptItem.unlocked.length;index++){
                            //console.log(index,this.scriptItem.unlocked[index],this.scriptItem.unlocked.length);
                            if(this.scriptItem.unlocked[index]){
                                this.toSelect = index;
                                this.optionAwait = 5;
                                console.log("changed",this.selected);
                                break;
                            }
                        }
                    }//down
                }
            }

            if(this.optionAwait>0)this.optionAwait--;
        }
        else {
            for(i =0;i<this.array.length;i++){
                if(this.array[i].tempCTime >0)this.array[i].tempCTime--;
            }
        }
    };
    Inventory.prototype.draw = function(){
        var i,row = 0,line = 0;
        menuContext.save();
        menuContext.globalAlpha = 0.75;
        menuContext.fillStyle = "#120316";
        menuContext.fillRect(76,90,360,340);
        menuContext.restore();
        if(this.action === BAG){
            for(i = 0;i<this.array.length;i++){
                if(line>2){
                    line = 0;
                    row ++;
                }
                menuContext.save();
                menuContext.drawImage(this.array[i].image,111+50*line,130+50*row);
                menuContext.fillStyle = "white";
                menuContext.font = "bold 5px 微软雅黑";
                if(this.array[i].number > 1)menuContext.fillText(this.array[i].number.toString(),143+50*line,162+50*row);
                menuContext.restore();
                line++;
            }
            menuContext.save();
            menuContext.strokeStyle = "white";
            menuContext.lineJoin = "bevel";
            menuContext.strokeRect(this.selected%3*50+108,Math.floor(this.selected/3)*50+127,38,38);
            menuContext.fillStyle = "#120316";
            //menuContext.fillText(this.selected.toString(),20,80);
            //menuContext.fillText(this.array[this.selected].name,20,100);
            menuContext.restore();
        }
        else {
            menuContext.save();
            menuContext.font = "bold 16px 微软雅黑";
            menuContext.textAlign = "center";
            menuContext.fillStyle = "#f5ffc5";

            if(this.scriptItem.unlocked[0])menuContext.fillText("文稿之一",126,130);
            if(this.scriptItem.unlocked[1])menuContext.fillText("文稿之二",126,155);
            if(this.scriptItem.unlocked[2])menuContext.fillText("文稿之三",126,180);
            if(this.scriptItem.unlocked[3])menuContext.fillText("文稿之四",126,205);
            if(this.scriptItem.unlocked[4])menuContext.fillText("文稿之五",126,230);
            if(this.scriptItem.unlocked[5])menuContext.fillText("文稿之六",126,255);

            menuContext.strokeStyle = "white";
            menuContext.lineJoin = "bevel";
            if(this.selected>=0)menuContext.strokeRect(90,113+this.selected*25,74,22);
            menuContext.fillStyle = "#120316";
            menuContext.restore();
        }

        drawAnime(this.animeList,menuContext);
    };
    Item =function(name,image,type,x,y){
        this.name = name;
        this.image = image;
        this.type = type;
        this.coolTime = 0;
        this.tempCTime = 0;
        this.number = 1;

        this.picked = false;
        this.tileX = x;
        this.tileY = y;
        this.positionAdjust = 0;
        this.positionDirec = true;
    };
    Item.prototype.test = function(object){
        if((object.tileX === this.tileX || object.tileX+1 === this.tileX) && (this.tileY === object.tileY || this.tileY === object.tileY+1)){
            var found = false;
            for(var i = 1;i<tempInventory.array.length;i++){
                if(tempInventory.array[i].name === this.name){
                    tempInventory.array[i].number ++;
                    found = true;
                    break;
                }
            }
            if(!found)object.inventory.array.push(this);
            console.log("you pick "+this.name);
            this.picked = true;
            return true;
        }
        return false;
    };
    Item.prototype.draw = function(cxt){
        cxt.drawImage(this.image,this.tileX*16,this.tileY*16+this.positionAdjust/10,16,16);
        if(this.positionDirec)this.positionAdjust++;
        else this.positionAdjust--;
        if(this.positionAdjust >= 20 || this.positionAdjust <= -20)this.positionDirec = !this.positionDirec;
    };
    SwordItem = function(x,y){
        Item.call(this,"勇者之剑",swordImage,ELSE,x,y);
        this.description = "据说由某位神灵为选中者打造的长剑，发出光芒，缓缓震动，对魔物的杀伤远强过其物理的威力。赫尔密忒国王曾持此剑战斗的历史，似乎能为使用者加持勇气与希望。";
    };
    SwordItem.prototype = new Item();
    AkashaItem = function(x,y){
        Item.call(this,"阿卡夏符文",akashaImage,AKASHA,x,y);
        this.description= "以密文刻蚀着非人音节“希望”的至宝。据说亡去的王国赫尔密忒以“希望”立国，谶言也判定王国定以“希望”而延续。逆转因果的奇迹和影响众神的能力，不过是它权能的万分之一。";
    };
    AkashaItem.prototype = new Item();
    ShieldItem = function(x,y){
        Item.call(this,"盾",shieldImage,ELSE,x,y);
        this.description= "正面面对飞箭，盾牌将会抵挡。武器和盾的协同是骑士的必修功，就如同勇者和公主、刀剑和符文的组合一样。盾上刻满了与魔物搏斗的战痕，还有读作“卡特”的字迹。";
    };
    ShieldItem.prototype = new Item();
    BoomItem = function(x,y){
        Item.call(this,"炸弹",boomItemImage,SUB_WEAPON,x,y);
        this.coolTime = 150;
        this.description= "空格键装备。    这火器的主人被以奴隶之身卖到南方时，沉默寡言的他并未想到自己会被公主赎身，学得炼金大师的真传，并成为她最忠诚的守卫，被尊为“火药厂的伦道夫”。";
    };
    BoomItem.prototype = new Item();
    BowItem = function(x,y){
        Item.call(this,"弓箭",bowImage,SUB_WEAPON,x,y);
        this.coolTime = 150;
        this.description= "空格键装备。    传说公主擅长射击，但是在选为守扉人后便不再引弦。这份重担常人难以承受，因为稀有凡人能直面众神，更不论封印他们于世界的门外，而戎根则是其中最为狡猾的一个。";
    };
    BowItem.prototype = new Item();
    BowItem.prototype.test = function(object){
        if((object.tileX === this.tileX || object.tileX+1 === this.tileX) && (this.tileY === object.tileY || this.tileY === object.tileY+1)){
            object.inventory.array.push(this);
            console.log("you pick "+this.name);
            menuBody.inputText(["神秘音：","你获得了一把弓箭，","按I键打开背包装备它，K键射击。","记住，危险的敌人不要贸然靠近。（空格键结束对话）"]);
            return true;
        }
        return false;
    };
    NullItem = function(){
        Item.call(this,"无",nullImage,ELSE,0,0);
    };
    ScriptItem = function(index,x,y){
        Item.call(this,"古老文稿残片",scriptImage,SCRIPT,x,y);
        this.description= "这些纸莎草写就的文件历史久远，似乎记述着某群探索者的隐秘历史。空格键阅读。   支线任务：搜集所有残片。";
        this.unlocked = [false,false];
        this.index = index;
    };
    ScriptItem.prototype =new Item();
    ScriptItem.prototype.test = function(object){
        //console.log(object.tileX,object.tileY);
        if((object.tileX === this.tileX || object.tileX+1 === this.tileX) && (this.tileY === object.tileY || this.tileY === object.tileY+1)){
            if(object.inventory.scriptItem === undefined){
                var i = object.inventory.array.push(new ScriptItem());
                object.inventory.scriptItem = object.inventory.array[i-1];
            }
            object.inventory.scriptItem.unlocked[this.index] = true;
            console.log("you pick script #"+this.index);
            return true;
        }
        return false;
    };
    LifeStoneItem = function(x,y){
        Item.call(this,"生命之石",lifeStoneImage,CONSUMABLE,x,y);
        this.description = "空格键使用恢复生命。末代国王封印魔王后便被戎根诅咒，长年卧床不起。星象师们将群星的伟力灌入月长石中，让国王佩戴它来延续生命。但卧病在床的守扉人不能守护世界，他的死亡早已预定。";
    };
    LifeStoneItem.prototype = new Item();
    LifeStoneItem.prototype.use = function(player){
        player.health += 2;
    };
    KeyItem = function(x,y){
        Item.call(this,"祭坛钥匙",keyImage,ELSE,x,y);
        this.description = "通往祭坛的钥匙。  先民们给戎根的祷词是这样的：“阿拉！深远难测的万千预言的原祖，巨瞳戎根，请让凡人洞悉神秘的‘伟大工作’吧。”但无论是神是魔，曾叫地上诸族叩首的现在都走了，众王的权杖代替了神龛和祭坛。";
    };
    KeyItem.prototype = new Item();




    Player = function () {
        this.type = PLAYER;
        this.width=32;
        this.height=32;

        this.trueX = 8;
        this.trueY = 11;
        this.trueWidth=16;
        this.trueHeight=16;

        this.x=14*16;
        this.y=17*16;

        this.nextX=-1;
        this.tileX = this.x/16;
        this.nextY=-1;
        this.tileY = this.y/16;

        this.direction=3;
        this.action= RELAX ;
        this.speed=3;
        this.image=playerWalking;
        this.dis=2;
        this.health=6;
        this.invincible = false;
        this.invincibleTime = 0;
        this.dead =false;
        this.flyState = [0,0];
        this.attackFra = 0;

        this.inventory = new Inventory();
        this.subWeapon = new NullItem();
        this.swordLength = 25;
        this.swordWidth = 12;

        this.locked = false;
    };
    Player.prototype.draw = function(cxt){
        //cxt.translate(this.x,this.y);
        //cxt.fillText("剩余生命值："+this.health+" 当前副武器："+this.subWeapon.name,20,20);
        //cxt.fillText("副武器冷却时间："+this.subWeapon.tempCTime,20,40);
        if(this.action === DEAD){
            drawPicture(cxt,this.image,this.x,this.y,Math.floor(this.dis/6),4,this.width,this.height);
            if(this.dis === 35){

            }
            else this.dis++;
        }
        else if(this.action === ATTACKING){
            var tempF = Math.floor(this.attackFra/2);
            if(this.attackFra>=6)tempF = 2;
            switch(this.direction){
                case 0:
                    drawPicture(cxt,this.image,this.x,this.y,tempF,5,this.width,this.height);
                    drawPicture(cxt,this.image,this.x,this.y+32,tempF,6,this.width,this.height);
                    break;
                case 1:
                    drawPicture(cxt,this.image,this.x,this.y,tempF*2+1,7,this.width,this.height);
                    drawPicture(cxt,this.image,this.x-32,this.y,tempF*2,7,this.width,this.height);
                    break;
                case 2:
                    drawPicture(cxt,this.image,this.x,this.y,tempF*2,8,this.width,this.height);
                    drawPicture(cxt,this.image,this.x+32,this.y,tempF*2+1,8,this.width,this.height);
                    break;
                case 3:
                    drawPicture(cxt,this.image,this.x,this.y,tempF+3,6,this.width,this.height);
                    drawPicture(cxt,this.image,this.x,this.y-32,tempF+3,5,this.width,this.height);
                    break;
            }
        }
        else{
            if(this.action === RELAX||this.action === ATTACKED){
                this.dis = 13;
                //console.log("!");
            }
            drawPicture(cxt,this.image,this.x,this.y,Math.floor(this.dis/2),this.direction,this.width,this.height);
            if(this.action === WALKING){
                this.dis++;
                //console.log(this.dis);
                if(this.dis===14)this.dis = 0;
            }
        }
        //cxt.restore();
    };
    Player.prototype.act = function(monsterList,tempMap){
        if(this.invincibleTime > 0)this.invincibleTime --;
        if(this.invincibleTime === 0)this.invincible = false;
        if (this.action !== DEAD){
            if(tempMap.event(this)){
                this.action = RELAX;
                this.nextX = -1;
                this.nextY = -1;
            }
            else if (!this.locked){
                if (this.action === ATTACKED)this.fly();
                else if (keyList[66] === 1){
                    keyList[66] = 2;
                    for(var i = 0;i < tempMap.hints.length;i++){
                        menuBody.textList.push(tempMap.hints[i]);
                    }
                }
                else if (this.subWeapon.name === "炸弹"&&this.subWeapon.tempCTime === 0&&keyList[75]&&(this.action === WALKING||this.action === RELAX)){
                    this.boomAttack(tempMap);
                    console.log("you place a boom!");
                    this.subWeapon.tempCTime = this.subWeapon.coolTime;
                }
                else if (this.subWeapon.name === "弓箭"&&this.subWeapon.tempCTime === 0&&keyList[75]&&(this.action === WALKING||this.action === RELAX)){
                    this.arrowAttack(tempMap);
                    console.log("you shoot a arrow!");
                    this.subWeapon.tempCTime = this.subWeapon.coolTime;
                }
                else if (keyList[74] === 1&&(this.action === WALKING||this.action === RELAX)){//attack entrance
                    keyList[74]=2;
                    this.action=ATTACKING;
                    this.attackFra = 0;
                    this.attack(monsterList);
                }
                else if (this.action === ATTACKING)this.attack(tempMap);//attacking
                else if ((keyList[87]||keyList[68]||keyList[65]||keyList[83])&&(this.action === RELAX||WALKING)){
                    this.action = WALKING;
                    this.walk();
                    //console.log("?");
                }
                else {
                    //console.log("???");
                    this.dis=2;
                    this.action = RELAX;
                }
            }
        }
        //beneath are movement legally judge
        moveLegalJudge(this,tempMap);

    };
    Player.prototype.walk = function() {
        if(this.action === WALKING){
            if(keyList[87]===true){
                //console.log("up");
                this.direction=3;
                this.nextY=this.y - this.speed;
            }
            else if(keyList[65]){
                this.direction=1;
                this.nextX=this.x - this.speed;
            }
            else if(keyList[83]){
                this.direction=0;
                this.nextY=this.y + this.speed;
            }
            else if(keyList[68]){
                this.direction=2;
                this.nextX=this.x + this.speed;
            }
        }
        //console.log(this.x);
    };
    Player.prototype.fly =function(){
        if(this.flyState[1]<=0){
            this.action = RELAX;
            return;
        }
        switch (this.flyState[0])
        {
            case 0:
                this.nextY=this.y + this.flyState[2];
                break;
            case 1:
                this.nextX=this.x - this.flyState[2];
                break;
            case 2:
                this.nextX=this.x + this.flyState[2];
                break;
            case 3:
                this.nextY=this.y - this.flyState[2];
                break;
        }
        this.flyState[1]--;
        this.flyState[2]-=4;
    };
    Player.prototype.attack = function(tempMap){
        if(this.attackFra>=10)this.action = RELAX;
        else{
            if(this.attackFra === 2){
                var animeList = tempMap.animeList;
                var monsterList = tempMap.monsterList;
                var projectionList = tempMap.projectionList;
                console.log("attack check!");
                var x1,y1,widthS,heightS;
                switch(this.direction){
                    case 0:
                        x1 = this.x+12;
                        y1 = this.y+24;
                        widthS = this.swordWidth;
                        heightS = this.swordLength;
                        break;
                    case 1:
                        x1 = this.x-14;
                        y1 = this.y+16;
                        widthS = this.swordLength;
                        heightS = this.swordWidth;
                        break;
                    case 2:
                        x1 = this.x+20;
                        y1 = this.y+16;
                        widthS = this.swordLength;
                        heightS = this.swordWidth;
                        break;
                    case 3:
                        x1 = this.x+8;
                        y1 = this.y-13;
                        widthS = this.swordWidth;
                        heightS = this.swordLength;
                        break;
                }
                for(var i =0;i<monsterList.array.length;i++){
                    //console.log(monsterList.array[i].trueHeight);
                    if(!monsterList.array[i].dead && !monsterList.array[i].invincible){
                        var x2 = monsterList.array[i].x+monsterList.array[i].trueX;
                        var y2 = monsterList.array[i].y+monsterList.array[i].trueY;
                        if(this.swordHitTest(x1,y1,widthS,heightS,x2,y2,monsterList.array[i].trueWidth,monsterList.array[i].trueHeight)) {
                            monsterList.array[i].health--;
                            soundPlay("swordHitAudio");
                            animeList.push(new swordAttackAnime((x1 + x2)/2,(y1 + y2)/2));
                            monsterList.array[i].action =ATTACKED;
                            monsterList.array[i].flyState[0] = this.direction;
                            monsterList.array[i].flyState[1] = 4;
                            monsterList.array[i].flyState[2] = 5;
                            console.log("attack!");
                        }
                    }
                }
                for(i =0;i<projectionList.array.length;i++){
                    //console.log(monsterList.array[i].trueHeight);
                    if(!projectionList.array[i].dead){
                        x2 = projectionList.array[i].x+projectionList.array[i].trueX;
                        y2 = projectionList.array[i].y+projectionList.array[i].trueY;
                        if(this.swordHitTest(x1,y1,widthS,heightS,x2,y2,projectionList.array[i].trueWidth,projectionList.array[i].trueHeight)) {
                            projectionList.array[i].health--;
                            soundPlay("swordHitAudio");
                            animeList.push(new swordAttackAnime((x1 + x2)/2,(y1 + y2)/2));
                            projectionList.array[i].action =ATTACKED;
                            projectionList.array[i].flyState[0] = this.direction;
                            projectionList.array[i].flyState[1] = 4;
                            projectionList.array[i].flyState[2] = 5;
                            console.log("attack!");
                        }
                    }
                }
            }
            this.attackFra ++;
            //console.log("FRA="+this.attackFra);
        }
    };
    Player.prototype.swordHitTest = function (x1,y1,width1,height1,x2,y2,width2,height2){
        var r1left = x1;//console.log("r1left:",r1left);
        var r1top = y1;//console.log("r1top:",r1top);
        var r1right = x1+width1;//console.log("r1right:",r1right);
        var r1bottom = y1+height1;//console.log("r1bottom:",r1bottom);
        var r2left = x2;//console.log("r2left:",r2left);
        var r2top = y2;//console.log("r2top:",r2top);
        var r2right = x2+width2;//console.log("r2right:",r2right);
        var r2bottom = y2+height2;//console.log("r2bottom:",r2bottom);
        return !((r1left > r2right) || (r1right < r2left) || (r1bottom < r2top) || (r1top > r2bottom));
    };
    Player.prototype.arrowAttack = function(tempMap){
        bowAudio.play();
        if(this.direction === 0)tempMap.projectionList.array.push(new PlayerArrow(this.x+8,this.y+32,this.direction));
        if(this.direction === 1)tempMap.projectionList.array.push(new PlayerArrow(this.x-16,this.y+8,this.direction));
        if(this.direction === 2)tempMap.projectionList.array.push(new PlayerArrow(this.x+32,this.y+8,this.direction));
        if(this.direction === 3)tempMap.projectionList.array.push(new PlayerArrow(this.x+8,this.y-16,this.direction));
    };
    Player.prototype.boomAttack = function(tempMap){
        tempMap.projectionList.array.push(new Boom(this.x,this.y));
        tempMap.animeList.push(new boomPlaceAnime(this.x,this.y));
    };
    playerBk = new Player();

    MenuBody = function(){
        this.textList = [];
        this.action = RELAX;
        this.alpha = 0;
        this.animeList = [];
        this.end = false;
        this.count = -1;
        this.timeAxis = 90;
        this.index = 0;
        this.castList = [
            ["感谢您通关了《守扉人传说》！"],
            ["希望您玩的愉快"],
            ["总策划","黄思皓"],
            ["程序设计，剧本","黄思皓"],
            ["鸣谢","721首席游戏测试师","李镛"],
            ["鸣谢","来自LAGs战队的：","LAGsTigerH","LAGsAuPen","LAGsKamaya"],
            ["鸣谢","来自LAGs战队的：","LAGsRMan","LAGsOHUO","LAGsLtStk"],
            ["鸣谢","刀-Jay-蓝鸟"],
            ["素材来源"],
            ["音乐素材"],
            ["THE BEST OF NINTENDO MUSIC -","Castle","Outworld","Title Theme","Ending"],
            ["Nintendo FAMICOM MUSIC -","Metroid（メトロイド）"],
            ["ゼルダの伝説 神々のトライフォース2 -","ガノン最終戦","ガノン再登場"],
            ["ワンダと巨像 大地の咆哮 -","最后の戦い"],
            ["SNES BEATS -","Zelda's Rescue"],
            ["RPG Maker XP -","Sound Effect"],
            ["美术素材"],
            ["RPG Maker XP -","Characters"],
            ["Legend of Zelda: Oracle of Seasons -","title screen","ripped by Tails585"],
            ["Legend of Zelda: Four Swords Adventures -","Green Link, Major Boss","ripped by Vaati"],
            ["Legend of Zelda: A Link between Worlds -","Item icons","ripped by manpaint"],
            ["Legend of Zelda: A Link to the Past -","Enemies","ripped by BRUCE JUICE"],
            ["Legend of Zelda: Twillight Princess -","Item icons","ripped by Colbydude"],
            ["Legend of Zelda: The Minish Cap -","Zelda","captured by Nemu"],
            ["Legend of Zelda: Hydure Fantasy -","title screen","ripped by NintendoFreak106"],
            ["Dragon Quest -","Monsters","ripped by Barubary"],
            ["World of Warcraft","INV Misc Rune 05"],
            ["以及其他无法查证来源的素材"],
            ["守扉人的故事仍未结束"],
            ["群星坠落之地等待故人降临"],
            ["THE END"]
        ];
    };
    MenuBody.prototype.act = function (player){
        this.player = player;
        if(player.inventory.on && this.action !== RELAX){
            player.inventory.on = false;
        }

        //console.log(this.action,this.textList[0]);

        if(this.end && this.action === RELAX && this.textList[0]=== undefined){//GAME END
            menuAnimeList.push(new AkashaAnime());
            this.count = 80;
            this.action = CAST_RENDER;
            game_state = CAST;
            bgmToPlay = zeldaRescue;
        }
        else if(this.action === RELAX && this.textList[0]!== undefined){
            this.alpha = 0;
            this.action = CURTAIN_DOWN;
            gameSuspend = 1;
        }
        else if(this.action === TEXT_PUSH){
            if(this.textList[0] === undefined){
                this.action = CURTAIN_UP;
            }
            else {
                var string;
                string = this.textList.splice(0,4);
                console.log(string);
                this.animeList.splice(0,100);
                this.animeList.push(new TextAnime(256,15,string));
                this.action = PRESS_WATING;
            }
        }
        else if(this.action === PRESS_WATING && keyList[32] === 1){
            keyList[32] = 2;
            this.action = TEXT_PUSH;
        }
    };
    MenuBody.prototype.draw = function(){
        if(this.action === CAST_RENDER){
            if(this.count === 40){
                playerContext.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
                mapContext.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
                monsterContext.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
                menuContext.fillStyle = "#120316";
                menuContext.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
            }
            else if(this.count <40){
                menuContext.fillStyle = "#120316";
                menuContext.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
            }
        }
        else if(this.count<0){
            if(this.player !== undefined){
                var subWeapon = this.player.subWeapon;
                menuContext.save();
                menuContext.globalAlpha = 0.75;
                var completeHeart = Math.floor(this.player.health/2);//player states render
                for(var i =0;i<this.player.health;i++){
                    if(completeHeart!==0){
                        drawPicture(menuContext,heartImage,i*19,3,0,0,32,32);
                        completeHeart--;
                        i++;
                    }
                    else {
                        drawPicture(menuContext,heartImage,i*19,3,1,0,32,32);
                    }
                }
                menuContext.fillStyle = "#120316";
                menuContext.fillRect(430,3,38,38);
                menuContext.fillRect(471,3,38,38);
                menuContext.fillStyle = "white";
                menuContext.font = "bold 10px 微软雅黑";
                menuContext.drawImage(swordImage,433,6);
                menuContext.drawImage(subWeapon.image,474,6);
                if(subWeapon.type === SUB_WEAPON){
                    var rate = subWeapon.tempCTime/subWeapon.coolTime*38;
                    menuContext.beginPath();
                    menuContext.moveTo(471,41);
                    menuContext.lineTo(471+rate,41);
                    menuContext.lineWidth = 5;
                    menuContext.strokeStyle = "white";
                    menuContext.stroke();
                }

                menuContext.fillText("J",463,39);
                menuContext.fillText("K",501,39);
                menuContext.restore();
            }

            menuContext.save();
            if(this.action === CURTAIN_DOWN){
                this.alpha += 0.05;
                if(this.alpha >= 0.7)this.action = TEXT_PUSH;
            }
            else if(this.action === CURTAIN_UP){
                if(this.alpha >0.05)this.alpha -= 0.05;
                if(this.alpha <= 0.05){
                    this.alpha = 0;
                    this.action = RELAX;
                    this.textList.splice(0,4);
                    this.animeList.splice(0,100);
                    gameSuspend = 3;
                }
            }
            menuContext.globalAlpha = this.alpha;
            //console.log(this.alpha);
            menuContext.fillRect(0,0,CANVAS_WIDTH,90);
            menuContext.fillRect(0,390,CANVAS_WIDTH,90);
            menuContext.restore();
        }

        drawAnime(this.animeList,menuContext);
    };
    MenuBody.prototype.inputText = function(text){
        for(var i = 0; i < text.length;i++){
            this.textList.push(text[i]);
        }
    };
    MenuBody.prototype.cast = function (){
        if(this.count > 0)this.count --;
        if(this.count === 0){
            if(this.timeAxis > 0)this.timeAxis--;
            if(this.timeAxis === 0 && !this.end){
                reinit();
                this.action = RELAX;
                this.alpha = 0;
                this.count = -1;
                this.timeAxis = 90;
                this.index = 0;
            }
            else if((this.castList.length === this.index && this.timeAxis === 0) || keyList[32] === 1){
                keyList[32] = 2;
                menuAnimeList.push(new AkashaAnime());
                this.animeList.splice(0,100);
                this.end = false;
                this.timeAxis = 40;
            }
            else if(this.timeAxis === 0){
                this.animeList[0] = new TextAnime(256,200,this.castList[this.index]);
                this.timeAxis = 120;
                this.index++;
            }
        }
    };
    menuBody = new MenuBody();

    map_load();

    game_state = TITLE_SCREEN;
    console.log("LOADED");
}
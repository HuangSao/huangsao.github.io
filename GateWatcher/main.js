/**
 * Created by Huang on 2017/6/8.
 */
// kore wa almighty state_machine desu
function run() {
    menuRender();
    bgmChange();
    switch(game_state){
        case GAME_LOAD:
            keyListen();
            game_state = GAME_LOADING;
            load_game();
            break;
        case GAME_LOADING:
            loading_process();
            break;
        case GAME_LOADING2:
            game_load();
            loading_process();
            break;
        case TITLE_SCREEN:
            menuContext.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
            title_screen.act();
            break;
        case TITLE_TO_INIT:
            title_screen.act();
            break;
        case GAME_INIT:
            console.log("GAME INIT");
            game_state = GAME_RUNNING;
            game_init(startMap);
            break;
        case GAME_RUNNING:
            do_nothing();
            break;
        case MAP_CHANGE:
            mapChange();
            break;
        case CAST:
            cast();
            break;
    }
}

function do_nothing(){
    //literally
}


function soundPlay(sound){
    var soundFound = false;
    var soundIndex = 0;
    var tempSound;
    while(!soundFound && soundIndex<soundPool.length){
        var tSound = soundPool[soundIndex];
        if((tSound.element.ended||!tSound.played) && tSound.name === sound){
            soundFound = true;
            tSound.played = true;
        } else{
            soundIndex++;
        }
    }
    if(soundFound){
        tempSound = soundPool[soundIndex].element;
        tempSound.play();
    }
}

function keyListen() {
    document.addEventListener("keydown", function (e) {
        if (e.keyCode === 87) {
            keyList[87] = true;
            //console.log("38");
        }//up arrow
        if (e.keyCode === 65) {
            keyList[65] = true;
            //console.log("37");
        }//left
        if (e.keyCode === 68) {
            keyList[68] = true;
            //console.log("39");
        }//right
        if (e.keyCode === 83) {
            keyList[83] = true;
            //console.log("40");
        }//down
        if (e.keyCode === 74) {
            //if(!keyList[74]&&(player.action == WALKING||player.action === RELAX))player.action=ATTACK;
            if(keyList[74]===0)keyList[74] = 1;
        }//attack
        if (e.keyCode === 66) {
            keyList[66] = 1;
        }//suspend
        if (e.keyCode === 32) {
            if(keyList[32]===0)keyList[32] = 1;
        }//space
        if (e.keyCode === 75) {
            keyList[75] = true;
        }//K
        if (e.keyCode === 73) {
            if(keyList[73] === 0)keyList[73] = 1;
        }//I
    }, false);
    document.addEventListener("keyup", function (e) {
        if (e.keyCode === 87) {
            keyList[87] = false;
            //console.log("38");//up arrow
        }
        if (e.keyCode === 65) {
            keyList[65] = false;
            //console.log("37");//up left
        }
        if (e.keyCode === 68) {
            keyList[68] = false;
            //console.log("39");//up right
        }
        if (e.keyCode === 83) {
            keyList[83] = false;
            //console.log("40");//up down
        }
        if (e.keyCode === 74) {
            keyList[74] = 0;
        }
        if (e.keyCode === 66) {
            keyList[66] = 0;
        }
        if (e.keyCode === 32) {
            keyList[32] = 0;
        }
        if (e.keyCode === 75) {
            keyList[75] = false;//K
        }
        if (e.keyCode === 73) {
            keyList[73] = 0;//I
        }
    }, false);
}

function cast(){
    menuBody.cast();
}

function bgmChange(){
    if(currentBgm === bgmToPlay){
        console.log();
    }
    else if(currentBgm !== undefined&&currentBgm.volume > 0.1){
        currentBgm.volume -= 0.04;
    }
    else if(currentBgm === undefined){
        bgmToPlay.volume = 1;
        bgmToPlay.play();
        currentBgm = bgmToPlay;
    }
    else if(bgmToPlay === undefined)
    {
        currentBgm.pause();
        currentBgm.currentTime = 0;
        currentBgm = bgmToPlay;
    }
    else {
        currentBgm.pause();
        currentBgm.currentTime = 0;
        currentBgm = bgmToPlay;
        currentBgm.volume = 1;
        currentBgm.play();
    }
}

function loading_process(){
    menuContext.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    menuContext.fillStyle = "#120316";
    menuContext.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    menuContext.save();
    menuContext.font = "16px 微软雅黑";
    menuContext.textAlign = "center";
    menuContext.fillStyle = "#f5ffc5";
    menuContext.fillText("在遥远的赫尔密忒，无人知晓的往昔之地",256,220);
    menuContext.fillText("希望苏醒中",256,240);
    menuContext.fillText(loadCount+"/"+itemsToLoad,256,260);
    menuContext.restore();
}

function game_init (TempMap){
    var time_mapChange,mapX = 0,mapY = 0,akasha = false,game_over = false;
    var tempMap = new TempMap();
    var nextMap,mapChanged = false;
    var animeList = tempMap.animeList;
    tempMap.render(mapContext);//render map
    tempMap.init();
    var monsterList = tempMap.monsterList;
    var projectionList = tempMap.projectionList;
    bgmToPlay = tempMap.bgm;
    console.log(tempMap);

    var player = new Player();
    clonePlayer(playerBk,player);//create player
    tempInventory = player.inventory;
    console.log("player.x",player.x,"player.y",player.y,"player.tileX",player.tileX,"player.tileY",player.tileY);
    tempMap.event(player);
    tempMap.player = player;

    var time_fight = setInterval(update,FRAME_RATE);
    var time_game = setInterval(menu,FRAME_RATE);

    function menu() {
        if(game_over)gameOver();
        if(akasha)__akasha__();
        if(!player.dead){
            menuBody.act(player);
            if(menuBody.action === RELAX){
                if(keyList[73] === 1 && !tempInventory.on)inventory_on();
                if(keyList[73] === 1 && tempInventory.on)inventory_off();
            }
        }
        suspend();
        tempInventory.act(player,tempMap);


        if(game_state === CAST){
            clearInterval(time_fight);
            clearInterval(time_game);
        }
    }

    function update() {
        if(mapToChange !== undefined){
            monsterContext.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
            shutDownMap();
        }
        else{
            if(player.action!==DEAD){
                deadTest();
                hitTest();
            }
            player.act(monsterList,tempMap);
            monsterList.act(tempMap);
            projectionList.act(tempMap);
            render();
            if(player.action === DEAD&&!game_over){
                console.log("game over");
                animeList.push(new TextAnime(256,220,["你倒下了","按空格键使用阿卡夏符文复活","阿曼达公主仍在等待"]));
                bgmToPlay = endingTheme;
                game_over = true;
            }
        }
    }// every frame update

    //player.draw(playerContext);
    function render() {
        playerContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        monsterContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        // console.log("clear!");
        //cxt.drawImage(player.image,0,0);
        //console.log(player.x);
        tempMap.draw(monsterContext);
        monsterList.draw(monsterContext);
        player.draw(playerContext);
        projectionList.draw(monsterContext);
        drawAnime(animeList,playerContext);
        //console.log("draw!");
    }


    function suspend(){
        if (gameSuspend === 1) {
            clearInterval(time_fight);
            gameSuspend = 2;
        }
        else if (gameSuspend === 3){
            time_fight = setInterval(update,FRAME_RATE);
            gameSuspend = 0;
        }
    }//suspend game


    function hitTest(){
        var i,j;
        if(player.action!==DEAD){
            for(i =0;i<monsterList.array.length;i++){
                if (monsterList.array[i].attackValue!==0&&!monsterList.array[i].dead&&ranHitTest(player,monsterList.array[i])){
                    console.log("hit!");
                    monsterList.array[i].damage(player,tempMap);
                }
            }
        }

        for(i = 0;i<projectionList.array.length;i++){
            for(j = 0;j<monsterList.array.length;j++){
                if (projectionList.array[i].attackValue!==0&&!projectionList.array[i].dead&&!monsterList.array[j].dead&&ranHitTest(projectionList.array[i],monsterList.array[j])){
                    projectionList.array[i].damage(monsterList.array[j],tempMap);
                }
            }
            if(projectionList.array[i].attackValue!==0&&!projectionList.array[i].dead&&ranHitTest(player,projectionList.array[i])){
                console.log("hit!");
                projectionList.array[i].damage(player,tempMap);
            }
        }
    }

    /*function pointHitTest(x1,y1,x2,y2,width,height){
     return !((x1 < x2) || (x1 > (x2 + width)) || (y1 < y2) || (y1 > (y2 + height)));
     }*///pointHitTest


    function ranHitTest(object1,object2){
        var x1 = object1.x+object1.trueX;
        var y1 = object1.y+object1.trueY;
        var x2 = object2.x+object2.trueX;
        var y2 = object2.y+object2.trueY;
        var r1left = x1;
        var r1top = y1;
        var r1right = x1+object1.trueWidth;
        var r1bottom = y1+object1.trueHeight;
        var r2left = x2;
        var r2top = y2;
        var r2right = x2+object2.trueWidth;
        var r2bottom = y2+object2.trueHeight;
        return !((r1left > r2right) || (r1right < r2left) || (r1bottom < r2top) || (r1top > r2bottom));
    }

    function deadTest() {
        if(player.health<=0){
            player.action = DEAD;
            player.dis =1;
            console.log("player dead");
        }
        for(var i =0;i<monsterList.array.length;i++){
            if(monsterList.array[i].health<=0){
                if(!monsterList.array[i].dead){
                    monsterList.array[i].dead = true;
                    monsterList.array[i].drop(tempMap,player);
                    var x = monsterList.array[i].x+monsterList.array[i].trueX+monsterList.array[i].trueWidth/2;
                    var y = monsterList.array[i].y+monsterList.array[i].trueY+monsterList.array[i].trueHeight/2;
                    var anime = new monsterList.array[i].deadAnime(x,y);
                    anime.x -= anime.width/2;
                    anime.y -= anime.height/2;
                    animeList.push(anime);
                    soundPlay("monsterDeadAudio");
                    console.log("monster["+i+"] dead");
                    //monsterList.array.splice(i,1);
                }
            }
        }
    }

    function gameOver(){
        if(keyList[32] === 1){
            mapToChange = TempMap;
            keyList[32] = 2;
            clearInterval(time_fight);
            menuAnimeList.push(new AkashaAnime());
            akasha = true;
        }
    }

    function __akasha__ (){
        player.draw(playerContext);
        mapX += 0.025;
        if(mapX >= 0.95){
            if(playerBk.health < 4)playerBk.health = 4;
            clearInterval(time_game);
            game_state = MAP_CHANGE;
        }
    }

    function shutDownMap(){
        clearInterval(time_fight);
        clearInterval(time_game);
        monsterContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        nextMap = new mapToChange();
        time_mapChange = setInterval(mapChanging,FRAME_RATE);
    }

    function mapChanging(){
        if(mapChanged){
            clearInterval(time_mapChange);
            clonePlayer(player,playerBk);
            game_state = MAP_CHANGE;
        }
        else if(tempMap.changeStyle === 0){
            playerContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            mapContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            mapY += 4;
            if(player.y<444)player.y += 4;
            mapContext.save();
            mapContext.translate(mapX,mapY);
            mapContext.drawImage(tempMap.image,0,0);
            mapContext.drawImage(nextMap.image,0,-CANVAS_HEIGHT);
            player.draw(playerContext);
            mapContext.restore();
            if(mapY >= CANVAS_HEIGHT)mapChanged = true;
        }
        else if(tempMap.changeStyle === 1){
            playerContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            mapContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            mapX -= 4;
            if(player.x > 0)player.x -= 4;
            mapContext.save();
            mapContext.translate(mapX,mapY);
            mapContext.drawImage(tempMap.image,0,0);
            mapContext.drawImage(nextMap.image,CANVAS_WIDTH,0);
            player.draw(playerContext);
            mapContext.restore();
            if(mapX <= -CANVAS_WIDTH)mapChanged = true;
        }
        else if(tempMap.changeStyle === 4){
            if(mapY<=240 && mapY>=0){
                playerContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
                player.draw(playerContext);
                playerContext.fillRect(0,0,CANVAS_WIDTH,mapY);
                playerContext.fillRect(0,CANVAS_HEIGHT - mapY,CANVAS_WIDTH,mapY);
                mapY += 4;
            }
            else if(mapY>240){
                player.x = nextMap.playerX;
                player.y = nextMap.playerY;
                mapContext.drawImage(nextMap.image,0,0);
                mapY = -1;
            }
            else {
                playerContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
                player.draw(playerContext);
                playerContext.fillRect(0,0,256-mapX,CANVAS_HEIGHT);
                playerContext.fillRect(256+mapX,0,256-mapX,CANVAS_HEIGHT);
                mapX += 4;
            }
            if(mapX >= 256)mapChanged = true;
        }
    }

    function inventory_on(){
        gameSuspend = 1;
        keyList[73] = 2;
        tempInventory.firstTrunOn = true;
        tempInventory.action = BAG;
        tempInventory.on = true;
        tempInventory.toSelect = 0;
        tempInventory.selected = -1;
        console.log("inventory_on");
    }

    function inventory_off(){
        gameSuspend = 3;
        tempInventory.on = false;
        keyList[73] = 2;
        console.log("inventory_off");
    }

}

function moveLegalJudge(object,tempMap){//the most terrible code in the world!!!!!!!!!!!harder than NOI
    object.tileX = Math.floor(object.x/16);
    object.tileY = Math.floor(object.y/16);

    var h,iy,jx,length=object.width/16,surplusX = 0,surplusY = 0;//don't consider non-square unit yet
    var complete = false,result = true;
    var originX = object.x,originY = object.y;
    var hit = false;
    //console.log(tempMap);
    if(object.nextX < -1 || object.nextY < -1||object.nextX === 0||object.nextY === 0)hit = true;
    if(object.x<0 || object.y<0)hit = true;

    if(object.nextX>=0){
        if (object.nextX>CANVAS_WIDTH-object.width){
            object.nextX = CANVAS_WIDTH - object.width;
            hit = true;
        }//margin check

        jx = Math.floor(object.nextX/16);
        iy = object.tileY;//get origin point
        //console.log("dangqianzuobiao",object.x,object.y,"xiayibuzuobiao",object.nextX,object.nextY,"xiayibu",jx,iy);
        if(object.y%16!==0)surplusY = 1;//checkerboard align check
        if(object.nextX%16!==0)surplusX = 1;
        //console.log("surplus=",surplusX,surplusY);
        if((object.nextX-object.x)>0){//right
            while(!complete){
                for(h =0;h<length+surplusY;h++){
                    //if(object.constructor.name === "Player")console.log(object,"position:",iy + h,jx + length + surplusX - 1);
                    if(tempMap.terrain[iy + h][jx + length + surplusX - 1]!==undefined){
                        if(1 === tempMap.terrain[iy + h][jx + length + surplusX - 1]){
                            //console.log("obstacle at ",jx + length + surplusX - 1,iy+h);
                            result = false;//obstacle exists
                            hit = true;
                        }
                    }
                    else {
                        console.log("big new! tempMap又出问题了");
                    }
                }
                if(result){
                    complete = true;//movement legal
                    object.x = object.nextX;
                }
                else {
                    result = true;//change next to try again
                    if(surplusX>0){
                        object.nextX = jx*16;
                        surplusX = 0;
                    }
                    else {
                        jx--;
                        object.nextX = jx*16;
                    }
                }
            }
        }
        else {//left
            while(!complete){
                for(h =0;h<length+surplusY;h++){
                    //console.log(object,"position"+tempMap.terrain[iy+h][jx]);
                    if(tempMap.terrain[iy+h][jx]===1){
                        result = false;//obstacle exists
                        hit = true;
                    }
                }
                if(result){
                    complete = true;//movement legal
                    object.x = object.nextX;
                }
                else {
                    result = true;//change next to try again
                    jx++;
                    object.nextX = jx*16;
                    surplusX = 0;
                }
            }
        }
    }//left and right

    else if(object.nextY>=0){
        if (object.nextY>CANVAS_HEIGHT-object.height){
            hit = true;
            object.nextY = CANVAS_HEIGHT-object.height;
        }

        jx = object.tileX;
        iy = Math.floor(object.nextY/16);//get origin point
        if(object.nextY%16!==0)surplusY = 1;
        if(object.x%16!==0)surplusX = 1;//checkerboard align check
        //console.log("zuobiao now:",object.x,object.y,"next zuobiao:",jx,iy,"map:",tempMap.terrain[iy][jx],"surplus = ",surplusX,surplusY);
        if((object.nextY-object.y)>0){//down
            while(!complete){
                for(h =0;h<length+surplusX;h++){
                    if(tempMap.terrain[iy+length+surplusY-1][jx+h]!==undefined){
                        if(tempMap.terrain[iy+length+surplusY-1][jx+h]===1){
                            result = false;//obstacle exists
                            //console.log("obstacle at ",jx+h,iy+length+surplusY-1);
                            hit = true;
                        }
                    }
                }
                if(result){
                    complete = true;//movement legal
                    object.y = object.nextY;
                }
                else {
                    result = true;//change next to try again
                    if(surplusY>0){
                        object.nextY = iy*16;
                        surplusY = 0;
                    }
                    else {
                        iy--;
                        object.nextY = iy*16;
                    }
                }
            }
        }
        else {//up
            while(!complete){
                for(h =0;h<length+surplusX;h++){
                    if(tempMap.terrain[iy][jx+h]===1){
                        result = false;//obstacle exists
                        hit = true;
                    }
                }
                if(result){
                    complete = true;//movement legal
                    object.y = object.nextY;
                }
                else {
                    result = true;//change next to try again
                    iy++;
                    object.nextY = iy*16;
                    surplusY = 0;
                }
            }
        }
    }//up and down

    object.nextX = -1;
    object.nextY = -1;
    if(originX === object.x&&originY === object.y)hit = true;
    //console.log(hit);
    return hit;
}


function mapChange(){
    console.log("map has changed game reset");
    game_state = GAME_RUNNING;
    game_init(mapToChange);
    mapToChange = undefined;
}

function menuRender(){
    menuContext.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    if(game_state === GAME_RUNNING && tempInventory!==undefined)if(tempInventory.on)tempInventory.draw();
    if(menuBody!==undefined)menuBody.draw();
    drawAnime(menuAnimeList,menuContext);
}

function reinit(){
    bgmToPlay = titleTheme;
    title_screen = new Title_screen();
    game_state = TITLE_SCREEN;
    playerBk = new Player();
    console.log("game reinit");
}
/**
 * Created by Huang on 2017/5/29.
 */
//loading variants
var itemsToLoad = 70;
var loadCount = 0;

//title function variants
var Title_screen;
var title_screen;

//game state
const GAME_LOAD = 0;
const GAME_LOADING = 1;
const GAME_INIT = 2;
const GAME_RUNNING = 3;
const TITLE_SCREEN = 4;
const TITLE_TO_INIT = 5;
const MAP_CHANGE = 7;
const CAST = 8;
const GAME_LOADING2 = 9;
var game_state = GAME_LOAD;

const FRAME_RATE = 1000/30;
const CANVAS_WIDTH = 512;
const CANVAS_HEIGHT = 480;
var gameSuspend = 0;

//player states list
const WALKING = 1;
const ATTACK = 2;
const ATTACKING =5;
const RELAX = 0;
const ATTACKED =3;
const DEAD =4;//dieing
///const DEATH = 6;
const SHIELDED = 6;
const DASH = 7;
const FREEZE = 8;
const UNFREEZE = 9;
const RADICAL = 10;
const TRANSPER_TO_RD = 11;
const TRANSPER_TO_RL = 12;

//menu states list
const TEXT_PUSH = 2;
const CURTAIN_DOWN = 1;
const CURTAIN_UP = 3;
const PRESS_WATING = 4;
const CAST_RENDER = 5;
//inventory states list
const BAG = 0;
const SCRIPTS = 1;


var keyList = [];
keyList[74] = 0;
keyList[32] = 0;
keyList[73] = 0;

//images
var titleScreenImage;
var titleTextImage;
var playerWalking ;
var slaimuImage;
var monsterDeadImage;
var meadowImage;
var testMapImage;
var templeImage;
var canyonImage;
var swordAttackImage;
var hurtImage;
var nullImage;
var arrowImage;
var orcImage;
var meadow2Image;
var boomImage;
var swordImage;
var boomItemImage;
var shieldImage;
var bowImage;
var akashaImage;
var heartImage;
var scriptImage;
var lifeStoneImage;
var meadow3Image;
var slaimu_redImage;
var randolphImage;
var caveImage;
var cave2Image;
var villageImage;
var cyclopsImage;
var village2Image;
var keyImage;
var armorImage;
var fireImage;
var altarImage;
var altar2Image;
var castleImage;
var rongenImage;
var eyeImage;
var windImage;
var thunderImage;
var castle2Image;
var amandaImage;
var magicImage;
var doorImage;


//sounds
var outWorld;
var titleTheme;
var endingTheme;
var templeTheme;
var soundPool = [];
var swordHitAudio1;
var swordHitAudio2;
var swordHitAudio3;
var bowAudio;
var explosionAudio;
var shieldAudio;
var hurtAudio1;
var hurtAudio2;
var monsterDeadAudio1;
var monsterDeadAudio2;
var currentBgm;
var bgmToPlay;
var castleTheme;
var randolphTheme;
var rongen1Theme;
var rongen2Theme;
var thunderAudio1;
var thunderAudio2;
var thunderAudio3;
var transferAudio;
var zeldaRescue;
var magicAudio;
var recoverAudio;


//beneath are game elements
var mapCanvas = document.getElementById("map");
var mapContext = mapCanvas.getContext("2d");
var playerCanvas = document.getElementById("player");
var playerContext = playerCanvas.getContext("2d");
var monsterCanvas = document.getElementById("monster");
var monsterContext = monsterCanvas.getContext("2d");
var menuCanvas = document.getElementById("menu");
var menuContext = menuCanvas.getContext("2d");

// define game elements;
var Map;
var mapToChange;
var TestMap;
var MeadowMap;
var TempleMap;
var CanyonMap;
var Meadow2Map;
var Meadow3Map;
var CaveMap;
var Cave2Map;
var VillageMap;
var Village2Map;
var AltarMap;
var Altar2Map;
var CastleMap;
var Castle2Map;
var startMap;

var menuBody;
var MenuBody;


var Anime;
var menuAnimeList =  [];
var swordAttackAnime;
var monsterDeadAnime;
var hurtAnime;
var gameOverAnime;
var arrowAttackAnime;
var boomAnime;
var boomPlaceAnime;
var TextAnime;
var WindAnime;
var AkashaAnime;
var AmandaAnime;
var MagicAnime;
var DoorAnime;

var Monster;
var MonsterList;
const ELSE_MONSTER = 0;
const MONSTER =1;
const PLAYER = 2;
var Slaimu;
var Slaimu_red;
var Orc;
var Arrow;
var PlayerArrow;
var Boom;
var DamageBox;
var Randolph;
var RBoom;
var Cyclops;
var Armor;
var Fire;
var Rongen;
var Eye;
var Thunder;
var Rongen2;

var Player;
var playerBk;

var Inventory;
var tempInventory;
const SUB_WEAPON =1;
const ELSE = 0;
const AKASHA = 2;
const SCRIPT = 3;
const CONSUMABLE =4;
var Item;
var NullItem;
var SwordItem;
var ShieldItem;
var BowItem;
var BoomItem;
var AkashaItem;
var ScriptItem;
var LifeStoneItem;
var KeyItem;
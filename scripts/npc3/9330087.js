importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);


var slot;
var item;
var qty;

var text;
var fee;
var status = 0;

var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";

var Priceone = 5000000; //һ��������Ҫ��ð�ձ�
var Pricetwo = 500; //1������Ҫ�ĵ��
var Pricethr = 500; //1Ԫ�����򵽵ĵ������.
var nulled;

var music = Array("Bgm00/SleepyWood", "Bgm00/FloralLife", "Bgm00/GoPicnic", "Bgm00/Nightmare", "Bgm00/RestNPeace",
"Bgm01/AncientMove", "Bgm01/MoonlightShadow", "Bgm01/WhereTheBarlogFrom", "Bgm01/CavaBien", "Bgm01/HighlandStar", "Bgm01/BadGuys",
"Bgm02/MissingYou", "Bgm02/WhenTheMorningComes", "Bgm02/EvilEyes", "Bgm02/JungleBook", "Bgm02/AboveTheTreetops",
"Bgm03/Subway", "Bgm03/Elfwood", "Bgm03/BlueSky", "Bgm03/Beachway", "Bgm03/SnowyVillage",
"Bgm04/PlayWithMe", "Bgm04/WhiteChristmas", "Bgm04/UponTheSky", "Bgm04/ArabPirate", "Bgm04/Shinin'Harbor", "Bgm04/WarmRegard",
"Bgm05/WolfWood", "Bgm05/DownToTheCave", "Bgm05/AbandonedMine", "Bgm05/MineQuest", "Bgm05/HellGate",
"Bgm06/FinalFight", "Bgm06/WelcomeToTheHell", "Bgm06/ComeWithMe", "Bgm06/FlyingInABlueDream", "Bgm06/FantasticThinking",
"Bgm07/WaltzForWork", "Bgm07/WhereverYouAre", "Bgm07/FunnyTimeMaker", "Bgm07/HighEnough", "Bgm07/Fantasia",
"Bgm08/LetsMarch", "Bgm08/ForTheGlory", "Bgm08/FindingForest", "Bgm08/LetsHuntAliens", "Bgm08/PlotOfPixie",
"Bgm09/DarkShadow", "Bgm09/TheyMenacingYou", "Bgm09/FairyTale", "Bgm09/FairyTalediffvers", "Bgm09/TimeAttack",
"Bgm10/Timeless", "Bgm10/TimelessB", "Bgm10/BizarreTales", "Bgm10/TheWayGrotesque", "Bgm10/Eregos",
"Bgm11/BlueWorld", "Bgm11/Aquarium", "Bgm11/ShiningSea", "Bgm11/DownTown", "Bgm11/DarkMountain",
"Bgm12/AquaCave", "Bgm12/DeepSee", "Bgm12/WaterWay", "Bgm12/AcientRemain", "Bgm12/RuinCastle", "Bgm12/Dispute",
"Bgm13/CokeTown", "Bgm13/Leafre", "Bgm13/Minar'sDream", "Bgm13/AcientForest", "Bgm13/TowerOfGoddess",
"Bgm14/DragonLoad", "Bgm14/HonTale", "Bgm14/CaveOfHontale", "Bgm14/DragonNest", "Bgm14/Ariant", "Bgm14/HotDesert",
"Bgm15/MureungHill", "Bgm15/MureungForest", "Bgm15/WhiteHerb", "Bgm15/Pirate", "Bgm15/SunsetDesert",
"BgmEvent/FunnyRabbit", "BgmEvent/FunnyRabbitFaster","BgmGL/amoria", "BgmGL/chapel", "BgmGL/cathedral", "BgmGL/Amorianchallenge",
"BgmJp/Feeling", "BgmJp/BizarreForest", "BgmJp/Hana", "BgmJp/Yume", "BgmJp/Bathroom", "BgmJp/BattleField", "BgmJp/FirstStepMaster");

//-----------------------------------------------------------------------------

var beauty = 0;
var haircolor = Array();
var skin = Array(1, 2, 3, 4, 9, 10);
var mhair = Array(30000,30020,30030,30040,30050,30060,30100,30110,30120,30130,30140,30150,30160,30170,30180,30190,30200,30210,30220,30230,30240,30250,30260,30270,30280,30290,30300,30310,30320,30330,30340,30350,30360,30370,30400,30410,30420,30440,30450,30460,30470,30480,30490,30510,30520,30530,30540,30550,30560,30600,30610,30620,30630,30640,30650,30660,30670,30680,30700,30710,30720,30730,30740,30750,30760,30770,30780,30790,30800,30810,30820,30830,30840,30850,30860,30870,30880,30890,30900,30910,30920,30930,30940,30950,30990,33000,33040,33030,33050,34300,33120,33110,33150,33170,33200,33210,33220,33230,33240,33250,33260);
var fhair = Array(31000,31010,31020,31030,31040,31050,31060,31070,31080,31090,31100,31110,31120,31130,31140,31150,31160,31170,31180,31190,31200,31210,31220,31230,31240,31250,31260,31270,31280,31290,31300,31310,31320,31330,31340,31350,31400,31410,31420,31440,31450,31460,31470,31480,31490,31510,31520,31530,31540,31550,31560,31610,31620,31630,31640,31650,31660,31670,31680,31690,31700,31710,31720,31730,31740,31750,31760,31770,31780,31790,31800,31810,31820,31830,31840,31850,31860,31870,31880,31890,31910,31920,31930,31940,31950,34000,34010,34040,34050,34060,34070,34080,34090,34100,34110,34120,34130,34140,34150,34160,34170,34180,34190,34200,34210,34220,34230,34240,34250,34260,34270);
var hairnew = Array();
var mface = Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20015, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023, 20024, 20025, 20026, 20027);
var fface = Array(21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012,21013,21014, 21015, 21016, 21017, 21018, 21019, 21020, 21021,21022, 21023, 21024,21025, 21026,21027);
var facenew = Array();
var colors = Array();

//-----------------------------------------------------------------------------

var bxjd = Array(
		Array(1002776,300,1),
		Array(1002777,300,1),
		Array(1002778,300,1),
		Array(1002779,300,1),
		Array(1002780,300,1),
		Array(1052155,300,1),
		Array(1052156,300,1),
		Array(1052157,300,1),
		Array(1052158,300,1),
		Array(1052159,300,1),
		Array(1082234,300,1),
		Array(1082235,300,1),
		Array(1082236,300,1),
		Array(1082237,300,1),
		Array(1082238,300,1),
		Array(1072355,300,1),
		Array(1072356,300,1),
		Array(1072357,300,1),
		Array(1072358,300,1),
		Array(1072359,300,1),
		Array(1302081,200,1),
		Array(1312037,200,1),
		Array(1322060,200,1),
		Array(1332073,200,1),
		Array(1332074,200,1),
		Array(1372044,200,1),
		Array(1382057,200,1),
		Array(1402046,200,1),
		Array(1412033,200,1),
		Array(1422037,200,1),
		Array(1432047,200,1),
		Array(1442063,200,1),
		Array(1452057,200,1),
		Array(1462050,200,1),
		Array(1472068,200,1),
		Array(1482023,200,1),
		Array(1052158,200,1),
		Array(1492023,200,1),
		Array(1002790,300,1),
		Array(1002791,300,1),
		Array(1002792,300,1),
		Array(1002793,300,1),
		Array(1002794,300,1),
		Array(1052160,300,1),
		Array(1052161,300,1),
		Array(1052162,300,1),
		Array(1052163,300,1),
		Array(1052164,300,1),
		Array(1082239,300,1),
		Array(1082240,300,1),
		Array(1082241,300,1),
		Array(1082242,300,1),
		Array(1082243,300,1),
		Array(1072361,300,1),
		Array(1072362,300,1),
		Array(1072363,300,1),
		Array(1072364,300,1),
		Array(1072365,300,1),
		Array(1302086,100,1),
		Array(1312038,100,1),
		Array(1322061,100,1),
		Array(1332075,100,1),
		Array(1332076,100,1),
		Array(1372045,100,1),
		Array(1382059,100,1),
		Array(1402047,100,1),
		Array(1412034,100,1),
		Array(1422038,100,1),
		Array(1432049,100,1),
		Array(1442067,100,1),
		Array(1452059,100,1),
		Array(1462051,100,1),
		Array(1472071,100,1),
		Array(1482024,100,1),
		Array(1492025,100,1)
);

//-----------------------------------------------------------------------------

	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
	if (mode == -1) {
		cm.sendOk("#b�õ�,�´��ټ�.");
		cm.dispose();
		} else {
	if (status >= 0 && mode == 0) {
		cm.sendOk("#b�õ�,�´��ټ�.");
		cm.dispose();
		return;
		}
	if (mode == 1)
		status++;
		else
		status--;

//-----------------------------------------------------------------------------

	if (status == 0) {

   	    var add = "��ӭ����#r"+cm.ms()+"ð�յ�#k,�����Ǳ�������ͨ��Ҹ���,";

		add += "����ǿ��,������������Ҿ����ܹ��õ��Ĺ���,�����¿�,�����ȶ�,";

		add += "�����פ����Ψһѡ��,�Ͽ������������һ������.\r\n\r\n#b";

		add += "" + sss + "\r\n";

		add += "#L0#"+ttt+""+xxx+"-����ϵͳ#l\r\n";

		add += "#L3#"+xxx+""+ttt+"-�һ����#l\r\n";

		add += "#L4#"+ttt+""+xxx+"-���ù���[#r����,����,��ɱ,����#b]#l\r\n";

		add += "#L5#"+xxx+""+ttt+"-����ᶨ��Ʒ[#r����,����,GM��,���#b]#l\r\n";

		cm.sendSimple (add);   

//-----------------------------------------------------------------------------

	} else if (status == 1) {

	if (selection == 1){

	    var add = "��ӭ����#r"+cm.ms()+"ð�յ�#k,���Ǳ�����������������.";

		add +="������һЩ��ͨ��ҷ�������������,�����Ա���ܻʼҷ���.\r\n\r\n\r\n";

		add += "" + sss + "\r\n  ";

		add +="#L50##b" + xxx + "" + ttt + "-��ɫ#l\r\n  ";

		add +="#L51##b" + ttt + "" + xxx + "-����#l\r\n  ";

		add +="#L52##b" + xxx + "" + ttt + "-������ɫ#l\r\n  ";

		add +="#L53##b" + ttt + "" + xxx + "-�۾�#l\r\n  ";

		add +="#L54##b" + xxx + "" + ttt + "-�۾���ɫ#l";

		cm.sendSimple (add); 

	} else if(selection == 0){

	    var add = "��ӭ����#r"+cm.ms()+"ð�յ�#k,���Ǳ������й�����Ա.\r\n\r\n";

		add += "��ӵ�д��:#r " + cm.getChar().getyh() + " #k��\r\n\r\n";

		add += "" + sss + "\r\n";

		add +="#L20##b" + xxx + "-���� 5��ð�ձ�#l  ";

		add +="#L21##b" + ttt + "-��ȡ 5��#l\r\n";

		add +="#L22##b" + xxx + "-����10��ð�ձ�#l  ";

		add +="#L23##b" + ttt + "-��ȡ10��#l\r\n";

		add +="#L24##b" + xxx + "-����15��ð�ձ�#l  ";

		add +="#L25##b" + ttt + "-��ȡ15��#l";

		cm.sendSimple (add); 

	} else if(selection == 2){

	    var add = "��ӭ����#r"+cm.ms()+"ð�յ�#k,�ҿ���Ϊ�������Ǽ���ȫ������.";

		add +="�򲿷ּ��ܿ����޷�����,ԭ����ܵ���ը��,���Թܹܽ�ֹ����Щ����,";

		add +="���λ��Ҹ����½�,��л�������ǵ�֧��.\r\n\r\n";

		add +="#r ����ֹʹ�õļ���Ϊ:#k\r\n   ����:#s5121003#\r\n   ����:#s1321007#\r\n   Ӣ��:#s1111002##s1121010#\r\n";

		add +="                            #L6##b��Ҫ�������м���#l\r\n";

		cm.sendSimple (add,2); 

	} else if(selection == 3){

	    var add = "��ӭ����#r"+cm.ms()+"ð�յ�#k,���������#b�һ����#k.";

		add +="�������ܷǳ�����,�������з���,������BUG���ύ���ܹ�,";

		add +="���ǽ��ڵ�һʱ�䴦����,��л�������ǵ�֧��.\r\n\r\n";

		add += "" + sss + "\r\n  ";

		//add +="#L7##b" + xxx + "" + ttt + "-��������#l\r\n  ";

		//add +="#L8##b" + ttt + "" + xxx + "-������#l\r\n  ";

		add +="#L9##b" + xxx + "" + ttt + "-�һ����#l";

		cm.sendSimple (add); 

	} else if(selection == 4){

	    var add = "��ӭ����#r"+cm.ms()+"ð�յ�#k,�ҿ���Ϊ�������ǳ��ù��ܷ���#k.";

		add +="�������ܷǳ�����,�������й���,������BUG���ύ���ܹ�,";

		add +="���ǽ��ڵ�һʱ�䴦����,��л�������ǵ�֧��.\r\n\r\n";

		add += "" + sss + "\r\n  ";

		add +="#L10##b" + xxx + "" + ttt + "-������ɱ#l\r\n  ";

		add +="#L11##b" + ttt + "" + xxx + "-���Ӻ�����#l\r\n  ";

		add +="#L12##b" + xxx + "" + ttt + "-����������#l\r\n  ";

		add +="#L100##b" + ttt + "" + xxx + "-װ������[#r�̶�����,�޷�����#b]#l";

		cm.sendSimple (add); 

	} else if (selection == 5){

   	    var add = "��ӭ����#r"+cm.ms()+"ð�յ�#k,�����Ǳ�����ǿ��װ���ᶨϵͳ,";

		add += "����BOSS���б�����Ʒ,Ȼ���õ�������ᶨ,���������ø߼�װ��,";

		add += "��Ҫ������û������װ��,������ֻ���߼�װ��,����.\r\n\r\n\r\n#b";

		add += "" + sss + "\r\n  ";

		add += "#L13#"+xxx+""+ttt+"-���������ʼ#l";

		cm.sendSimple (add);  

		}

//-----------------------------------------------------------------------------

	} else if (status == 2){

	if(selection == 6){
		if (cm.getLevel() >= 1) {
		cm.teachSkill(1003,1,1);
		cm.teachSkill(1004,1,1);
		cm.teachSkill(1005,1,1);
		cm.teachSkill(1121011,1,1);
		cm.teachSkill(1221012,1,1);
		cm.teachSkill(1321010,1,1);
		cm.teachSkill(2121008,1,1);
		cm.teachSkill(2221008,1,1);
		cm.teachSkill(2321009,1,1);
		cm.teachSkill(3121009,1,1);
		cm.teachSkill(3221008,1,1);
		cm.teachSkill(4121009,1,1);
		cm.teachSkill(4221008,1,1); 
		cm.teachSkill(1000002,8,8); 
		cm.teachSkill(3000002,8,8);
		cm.teachSkill(4000001,8,8); 
		cm.teachSkill(1000001,10,10); 
		cm.teachSkill(2000001,10,10);
		cm.teachSkill(1000000,16,16); 
		cm.teachSkill(2000000,16,16);
		cm.teachSkill(3000000,16,16); 
		cm.teachSkill(1001003,20,20); 
		cm.teachSkill(3200001,30,30);
		cm.teachSkill(1001004,20,20);
		cm.teachSkill(1001005,20,20);
		cm.teachSkill(2001002,20,20);
		cm.teachSkill(2001003,20,20);
		cm.teachSkill(2001004,20,20);
		cm.teachSkill(2001005,20,20);
		cm.teachSkill(3000001,20,20);
		cm.teachSkill(3001003,20,20);
		cm.teachSkill(3001004,20,20);
		cm.teachSkill(3001005,20,20);
		cm.teachSkill(4000000,20,20);
		cm.teachSkill(4001344,20,20);
		cm.teachSkill(4001334,20,20);
		cm.teachSkill(4001002,20,20);
		cm.teachSkill(4001003,20,20);
		cm.teachSkill(1101005,20,20);
		cm.teachSkill(1100001,20,20); 
		cm.teachSkill(1100000,20,20);
		cm.teachSkill(1200001,20,20);
		cm.teachSkill(1200000,20,20);
		cm.teachSkill(1300000,20,20);
		cm.teachSkill(1300001,20,20);
		cm.teachSkill(3100000,20,20);
		cm.teachSkill(3200000,20,20);
		cm.teachSkill(4100000,20,20);
		cm.teachSkill(4200000,20,20); 
		cm.teachSkill(4201002,20,20);
		cm.teachSkill(4101003,20,20);
		cm.teachSkill(3201002,20,20);
		cm.teachSkill(3101002,20,20);
		cm.teachSkill(1301004,20,20);
		cm.teachSkill(1301005,20,20);
		cm.teachSkill(1201004,20,20);
		cm.teachSkill(1201005,20,20);
		cm.teachSkill(1101004,20,20); 
		cm.teachSkill(1101006,20,20);
		cm.teachSkill(1201006,20,20);
		cm.teachSkill(1301006,20,20);
		cm.teachSkill(2101001,20,20);
		cm.teachSkill(2100000,20,20);
		cm.teachSkill(2101003,20,20);
		cm.teachSkill(2101002,20,20);
		cm.teachSkill(2201001,20,20);
		cm.teachSkill(2200000,20,20);
		cm.teachSkill(2201003,20,20);
		cm.teachSkill(2201002,20,20);
		cm.teachSkill(2301004,20,20);
		cm.teachSkill(2301003,20,20);
		cm.teachSkill(2300000,20,20);
		cm.teachSkill(2301001,20,20);
		cm.teachSkill(3101003,20,20);
		cm.teachSkill(3101004,20,20);
		cm.teachSkill(3201003,20,20);
		cm.teachSkill(3201004,20,20);
		cm.teachSkill(4100002,20,20);
		cm.teachSkill(4101004,20,20);
		cm.teachSkill(4200001,20,20);
		cm.teachSkill(4201003,20,20); 
		cm.teachSkill(4211005,20,20);
		cm.teachSkill(4211003,20,20);
		cm.teachSkill(4210000,20,20);
		cm.teachSkill(4110000,20,20);
		cm.teachSkill(4111001,20,20);
		cm.teachSkill(4111003,20,20);
		cm.teachSkill(3210000,20,20);
		cm.teachSkill(3110000,20,20);
		cm.teachSkill(3210001,20,20);
		cm.teachSkill(3110001,20,20);
		cm.teachSkill(3211002,20,20);
		cm.teachSkill(3111002,20,20);
		cm.teachSkill(2210000,20,20);
		cm.teachSkill(2211004,20,20);
		cm.teachSkill(2211005,20,20);
		cm.teachSkill(2111005,20,20);
		cm.teachSkill(2111004,20,20);
		cm.teachSkill(2110000,20,20);
		cm.teachSkill(2311001,20,20);
		cm.teachSkill(2311005,30,30);
		cm.teachSkill(2310000,20,20);
		cm.teachSkill(1311007,20,20);
		cm.teachSkill(1310000,20,20);
		cm.teachSkill(1311008,20,20);
		cm.teachSkill(1210001,20,20);
		cm.teachSkill(1211009,20,20);
		cm.teachSkill(1210000,20,20);
		cm.teachSkill(1110001,20,20);
		cm.teachSkill(1111007,20,20);
		cm.teachSkill(1110000,20,20); 
		cm.teachSkill(1121000,20,20);
		cm.teachSkill(1221000,20,20);
		cm.teachSkill(1321000,20,20);
		cm.teachSkill(2121000,20,20);
		cm.teachSkill(2221000,20,20);
		cm.teachSkill(2321000,20,20);
		cm.teachSkill(3121000,20,20);
		cm.teachSkill(3221000,20,20);
		cm.teachSkill(4121000,20,20);
		cm.teachSkill(4221000,20,20); 
		cm.teachSkill(1321007,0,0);//
		cm.teachSkill(1320009,25,25);
		cm.teachSkill(1320008,25,25);
		cm.teachSkill(2321006,10,10);
		cm.teachSkill(1220010,10,10);
		cm.teachSkill(1221004,25,25);
		cm.teachSkill(1221003,25,25);
		cm.teachSkill(1100003,30,30);
		cm.teachSkill(1100002,30,30);
		cm.teachSkill(1101007,30,30);
		cm.teachSkill(1200003,30,30);
		cm.teachSkill(1200002,30,30);
		cm.teachSkill(1201007,30,30);
		cm.teachSkill(1300003,30,30);
		cm.teachSkill(1300002,30,30);
		cm.teachSkill(1301007,30,30);
		cm.teachSkill(2101004,30,30);
		cm.teachSkill(2101005,30,30);
		cm.teachSkill(2201004,30,30);
		cm.teachSkill(2201005,30,30);
		cm.teachSkill(2301002,30,30);
		cm.teachSkill(2301005,30,30);
		cm.teachSkill(3101005,30,30);
		cm.teachSkill(3201005,30,30);
		cm.teachSkill(4100001,30,30);
		cm.teachSkill(4101005,30,30);
		cm.teachSkill(4201005,30,30);
		cm.teachSkill(4201004,30,30);
		cm.teachSkill(1111006,30,30);
		cm.teachSkill(1111005,30,30);
		cm.teachSkill(1111002,30,30);
		cm.teachSkill(1111004,30,30);
		cm.teachSkill(1111003,30,30);
		cm.teachSkill(1111008,30,30);
		cm.teachSkill(1211006,30,30);
		cm.teachSkill(1211002,30,30);
		cm.teachSkill(1211004,30,30);
		cm.teachSkill(1211003,30,30);
		cm.teachSkill(1211005,30,30);
		cm.teachSkill(1211008,30,30);
		cm.teachSkill(1211007,30,30);
		cm.teachSkill(1311004,30,30);
		cm.teachSkill(1311003,30,30);
		cm.teachSkill(1311006,30,30);
		cm.teachSkill(1311002,30,30);
		cm.teachSkill(1311005,30,30);
		cm.teachSkill(1311001,30,30);
		cm.teachSkill(2110001,30,30);
		cm.teachSkill(2111006,30,30);
		cm.teachSkill(2111002,30,30);
		cm.teachSkill(2111003,30,30);
		cm.teachSkill(2210001,30,30);
		cm.teachSkill(2211006,30,30);
		cm.teachSkill(2211002,30,30);
		cm.teachSkill(2211003,30,30);
		cm.teachSkill(2311003,30,30);
		cm.teachSkill(2311002,30,30);
		cm.teachSkill(2311004,30,30);
		cm.teachSkill(2311006,30,30);
		cm.teachSkill(3111004,30,30);
		cm.teachSkill(3111003,30,30);
		cm.teachSkill(3111005,30,30);
		cm.teachSkill(3111006,30,30);
		cm.teachSkill(3211004,30,30);
		cm.teachSkill(3211003,30,30);
		cm.teachSkill(3211005,30,30);
		cm.teachSkill(3211006,30,30);
		cm.teachSkill(4111005,30,30);
		cm.teachSkill(4111006,20,20);
		cm.teachSkill(4111004,30,30);
		cm.teachSkill(4111002,30,30);
		cm.teachSkill(4211002,30,30);
		cm.teachSkill(4211004,30,30);
		cm.teachSkill(4211001,30,30);
		cm.teachSkill(4211006,30,30);
		cm.teachSkill(1120004,30,30);
		cm.teachSkill(1120005,30,30);
		cm.teachSkill(1121008,30,30);
		cm.teachSkill(1121006,30,30);
		cm.teachSkill(1121002,30,30);
		cm.teachSkill(1220005,30,30);
		cm.teachSkill(1221009,30,30);
		cm.teachSkill(1220006,30,30);
		cm.teachSkill(1221007,30,30);
		cm.teachSkill(1221011,30,30);
		cm.teachSkill(1221002,30,30);
		cm.teachSkill(1320005,30,30);
		cm.teachSkill(1320006,30,30);
		cm.teachSkill(1321003,30,30);
		cm.teachSkill(1321002,30,30);
		cm.teachSkill(2121005,30,30);
		cm.teachSkill(2121003,30,30);
		cm.teachSkill(2121004,30,30);
		cm.teachSkill(2121002,30,30);
		cm.teachSkill(2121007,30,30);
		cm.teachSkill(2121006,30,30);
		cm.teachSkill(2221007,30,30);
		cm.teachSkill(2221006,30,30);
		cm.teachSkill(2221003,30,30);
		cm.teachSkill(2221005,30,30);
		cm.teachSkill(2221004,30,30);
		cm.teachSkill(2221002,30,30);
		cm.teachSkill(2321007,30,30);
		cm.teachSkill(2321003,30,30);
		cm.teachSkill(2321008,30,30);
		cm.teachSkill(2321005,30,30);
		cm.teachSkill(2321004,30,30);
		cm.teachSkill(2321002,30,30);
		cm.teachSkill(3120005,30,30);
		cm.teachSkill(3121008,30,30);
		cm.teachSkill(3121003,30,30);
		cm.teachSkill(3121007,30,30);
		cm.teachSkill(3121006,30,30);
		cm.teachSkill(3121002,30,30);
		cm.teachSkill(3121004,30,30);
		cm.teachSkill(3221006,30,30);
		cm.teachSkill(3220004,30,30);
		cm.teachSkill(3221003,30,30);
		cm.teachSkill(3221005,30,30);
		cm.teachSkill(3221001,30,30);
		cm.teachSkill(3221002,30,30);
		cm.teachSkill(3221007,30,30);
		cm.teachSkill(4121004,30,30);
		cm.teachSkill(4121008,30,30);
		cm.teachSkill(4121003,30,30);
		cm.teachSkill(4121006,30,30);
		cm.teachSkill(4121007,30,30);
		cm.teachSkill(4120005,30,30);
		cm.teachSkill(4221001,30,30);
		cm.teachSkill(4221007,30,30);
		cm.teachSkill(4221004,30,30);
		cm.teachSkill(4221003,30,30);
		cm.teachSkill(4221006,30,30);
		cm.teachSkill(4220005,30,30);
		cm.teachSkill(1321001,30,30);
		cm.teachSkill(4120002,30,30);
		cm.teachSkill(2221001,30,30);
		cm.teachSkill(3100001,30,30);
		cm.teachSkill(1121001,30,30);
		cm.teachSkill(1221001,30,30);
		cm.teachSkill(2121001,30,30);
		cm.teachSkill(2221001,30,30);
		cm.teachSkill(2321001,30,30);
		cm.teachSkill(4220002,30,30);
		cm.teachSkill(8,1,1);
		cm.teachSkill(5000000,20,20); 
		cm.teachSkill(5001001,20,20); 
		cm.teachSkill(5001002,20,20); 
		cm.teachSkill(5001003,20,20); 
		cm.teachSkill(5001005,10,10); 
		cm.teachSkill(5100000,10,10); 
		cm.teachSkill(5100001,20,20); 
		cm.teachSkill(5101002,20,20); 
		cm.teachSkill(5101003,20,20); 
		cm.teachSkill(5101004,20,20); 
		cm.teachSkill(5101005,10,10); 
		cm.teachSkill(5101006,20,20); 
		cm.teachSkill(5101007,10,10); 
		cm.teachSkill(5200000,20,20); 
		cm.teachSkill(5201001,20,20); 
		cm.teachSkill(5201002,20,20); 
		cm.teachSkill(5201003,20,20); 
		cm.teachSkill(5201004,20,20); 
		cm.teachSkill(5201005,10,10); 
		cm.teachSkill(5201006,20,20); 
		cm.teachSkill(5110000,20,20); 
		cm.teachSkill(5110001,40,40); 
		cm.teachSkill(5111002,30,30); 
		cm.teachSkill(5111004,20,0);  
		cm.teachSkill(5111005,20,20); 
		cm.teachSkill(5210000,20,20); 
		cm.teachSkill(5211001,30,30); 
		cm.teachSkill(5211002,30,30); 
		cm.teachSkill(5211004,30,30); 
		cm.teachSkill(5211005,30,30); 
		cm.teachSkill(5211006,20,20); 
		cm.teachSkill(5121000,20,20); 
		cm.teachSkill(5121001,30,30); 
		cm.teachSkill(5121002,30,30);
		cm.teachSkill(5121004,30,30); 
		cm.teachSkill(5121005,30,30); 
		cm.teachSkill(5121007,30,30); 
		cm.teachSkill(5121008,1,1);   
		cm.teachSkill(5121009,20,20); 
		cm.teachSkill(5121010,30,30); 
		cm.teachSkill(5221000,20,20); 
		cm.teachSkill(5220001,30,30); 
		cm.teachSkill(5220002,20,20); 
		cm.teachSkill(5221003,30,30); 
		cm.teachSkill(5221004,30,30); 
		cm.teachSkill(5221006,10,10);
		cm.teachSkill(5221007,30,30); 
		cm.teachSkill(5221008,30,30); 
		cm.teachSkill(5221009,20,20); 
		cm.teachSkill(5221010,25,25); 
		cm.teachSkill(5220011,20,20); 
                cm.teachSkill(1004,1,0);
		cm.teachSkill(1003,1,0);
		cm.teachSkill(1005,1,0);
		cm.teachSkill(1006,1,0);
		cm.teachSkill(1016,1,0);
		cm.teachSkill(10000018,1,0);
		cm.teachSkill(10001003,1,0);
		cm.teachSkill(10001004,1,0);
		cm.teachSkill(10001005,1,0);
		cm.teachSkill(10001006,1,0);
		cm.teachSkill(10001017,1,0);
		cm.teachSkill(20000024,1,0);
		cm.teachSkill(20001003,1,0);
		cm.teachSkill(20001004,1,0);
		cm.teachSkill(20001005,1,0);
		cm.teachSkill(20001006,1,0);
                cm.maxAllSkills(20);
		cm.sendOk("����ɹ�");
		cm.dispose();
		} else {
  		cm.sendOk("120�����ϲ���ʹ��");
		cm.dispose();
		}


	} else if (selection == 7) {
		cm.sendNext("  #fUI/UIWindow.img/QuestIcon/6/0#\r\n  ���ã�����#b#r"+cm.ms()+"ð�յ�#k�����̡�\r\n  ���������ļ۸�Ϊÿ�� #r" + Priceone + "#k ��Ϸ��\r\n  ���蹺��,�����һ��!");
                test = 1;

	} else if (selection == 8) {
		cm.sendNext("  #fUI/UIWindow.img/QuestIcon/7/0#\r\n  ���ã�����#b#b#r"+cm.ms()+"ð�յ�#k����̡�\r\n  �����ҵļ۸�Ϊ #r100��ð�ձ�#k ��Ҫ #r" + Pricetwo + "#k �����\r\n  ���蹺��,�����һ��!");
                test = 2;

	} else if (selection == 9) {
		cm.sendNext("  #fUI/UIWindow.img/QuestIcon/4/0#\r\n  ���ã�����#b#b#r"+cm.ms()+"ð�յ�#k����̡�\r\n  ������ļ۸�Ϊ #r1��ֵ��#k ���Թ��� #r" + Pricethr + "#k ���\r\n  ���蹺��,�����һ��!");
                test = 3;

	} else if (selection == 10) {
		var statup = new java.util.ArrayList();
		cm.getChar().setHp(0);
		cm.getChar().setMp(0);
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.HP, java.lang.Integer.valueOf(0)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.MP, java.lang.Integer.valueOf(0)));
		cm.c.getPlayer().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
		cm.serverNotice("������"+ cm.getChar().getName() +"���鳡ʧ�⣬���г�������ɱ����Ұ�ο��ο���ɡ�"); 
		cm.dispose();  
		

	}else if (selection == 11){

	    var add = "��ӭ����#r"+cm.ms()+"ð�յ�#k,�ҿ���Ϊ��������Ѵ�������.";

		add +="��Ȼ#b��߿�����50������,#kϣ�����ڱ�����Ŀ���,���Ѷ��,���ֶ��.\r\n\r\n";

		add +="#rע��:ÿ��ֻ����5����������.#k\r\n";

		add +="#L14##b"+ttt+"��Ҫ���Ӻ�������"+ttt+"#l\r\n";

		cm.sendSimple (add); 



	}else if (selection == 12){

	    var add = "��ӭ����#r"+cm.ms()+"ð�յ�#k,�ҿ���Ϊ�����������������.";

		add +="������ǰ�뽫�����Ҫ��Ʒ�Ž��ֿ�,��������ʱ���ܻᶪʧ,";

		add +="��ʧ���޷��һ�,�����ؿ���Ŷ.\r\n\r\n";

		add +="#L15#"+ttt+"-#bװ����[����]#l\r\n";

		add +="#L16#"+ttt+"-#b������[����]#l\r\n";

		add +="#L17#"+ttt+"-#b������[����]#l\r\n";

		add +="#L18#"+ttt+"-#b������[����]#l\r\n";

		add +="#L19#"+ttt+"-#b�ֽ���[����]#l\r\n";

		cm.sendSimple (add); 


	}else if (selection == 100){

	    var add = "��ӭ����#r"+cm.ms()+"ð�յ�#k,�ҿ���Ϊ������װ��.";

		add +="װ���������޷�����,�޷�����,�޷�����,ֻ��װ������ʱ������ſ��Խ��׶���,";

		add +="����㿼�ǵõ�,��ô����������ѡ���...\r\n\r\n";

		add +="#L101#"+ttt+"-#b����-[#r500���#b]#l\r\n";

		add +="#L102#"+ttt+"-#b����-[#r500���#b]#l";

		cm.sendSimple (add); 



	} else if (selection == 13) {
		if (!cm.haveItem(4002001)) {
		cm.sendOk("#b���ռ����������м���,��Ŀǰ�ı��䲻��.");
		cm.dispose();
		} else {
		var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
		for(var i = 1;i<=5;i++){
		if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(i)).isFull()){
		cm.sendOk("#b������Ӧ�������а������ճ�һ��");
		cm.dispose();
		return;
		}
		}
		var chance = Math.floor(Math.random()*bxjd.length);
		var finalitem = Array();
		for(var i = 0 ;i<bxjd.length;i++){
		if(bxjd[i][1] >= chance){
		finalitem.push(bxjd[i]);
		}
		}
		if(finalitem.length != 0){
		var random = new java.util.Random();
		var finalchance = random.nextInt(finalitem.length);
		var itemId = finalitem[finalchance][0];
		var quantity = finalitem[finalchance][2];
		var Laba = finalitem[finalchance][2];
		if(ii.getInventoryType(itemId).getType() == 1){
		var toDrop = ii.randomizeStats(ii.getEquipById(itemId));
		}else{
		var toDrop = new net.sf.odinms.client.Item(itemId, 0, quantity);
		}
		cm.gainItem(4002001,-1);
		net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop,-1);
		if(Laba == 1){

cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + "�ӷ������ã����һ��ϲ��/���ɣ�����",toDrop, true).getBytes());
		cm.sendOk("#b�ǳ���л�μӱ���ϵͳ�,���Ŭ��,��ȡ����������.");
		cm.dispose();
		}else{
		cm.sendOk("#b��ӭ�μӱ���ϵͳ�,��Ǹ�����û���н���.");
		cm.gainItem(4002001,-1);
		cm.dispose();
		}
		}
		}

	} else if (selection == 24) {
		if (cm.getMeso() >= 1500000000) {
		cm.setyh(15);
		cm.gainMeso(-1500000000); 
		cm.sendOk("#b�洢�ɹ�.");   
		cm.dispose();
                } else {
		cm.sendOk("#b����������,�޷����д洢.");
		cm.dispose();
                }   
                             
	} else if (selection == 25) {
		if (cm.getMeso() >= 647000000) {
		cm.sendOk("#b�����ϵĽ�ҹ���,��ʹ�ú�����ȡ��.");
                cm.dispose();
		} else if (cm.getyh() >= 15) {
		cm.gainMeso(1480000000);                
		cm.setyh(-15); 
		cm.sendOk("#bȡ��ɹ�.");
		cm.dispose();
                } else {
		cm.sendOk("#b�������д������û����ô��.");
		cm.dispose();
                }  
  
	} else if (selection == 22) {
		if (cm.getMeso() >= 1000000000) {
		cm.setyh(10);
		cm.gainMeso(-1000000000);   
		cm.sendOk("#b�洢�ɹ�.");
		cm.dispose();
                } else {
		cm.sendOk("#b����������,�޷����д洢.");
		cm.dispose();
		}

	} else if (selection == 23) {
		if (cm.getMeso() >= 1147000000) {
		cm.sendOk("#b�����ϵĽ�ҹ���,��ʹ�ú�����ȡ��.");
                cm.dispose();
                } else if (cm.getyh() >= 10) {
		cm.gainMeso(980000000);                
		cm.setyh(-10); 
		cm.sendOk("#bȡ��ɹ�.");
		cm.dispose();
                } else {
		cm.sendOk("#b�������д������û����ô��.");
		cm.dispose();
		}  
  
	} else if (selection == 20) {
		if (cm.getMeso() >= 500000000) {
		cm.setyh(5);
		cm.gainMeso(-500000000);   
		cm.sendOk("#b�洢�ɹ�.");  
		cm.dispose();
                } else {
		cm.sendOk("#b����������,�޷����д洢.");
		cm.dispose();
		}

	} else if (selection == 21) {
		if (cm.getMeso() >= 1647000000) {
		cm.sendOk("#b�����ϵĽ�ҹ���,��ʹ�ú�����ȡ��.");
                cm.dispose();
                } else if (cm.getyh() >= 5) {
		cm.gainMeso(480000000);                
		cm.setyh(-5);
		cm.sendOk("#bȡ��ɹ�.");
		cm.dispose();
                } else {
		cm.sendOk("#b�������д������û����ô��.");
		cm.dispose();
		} 

	} else if (selection == 50) {
		cm.sendStyle("���������⿪���Ļ����ɲ鿴�������Ч����,�뻻��ʲô����Ƥ���أ���ѡ��~", skin, 0);
                test = 4;

	} else if (selection == 51) {
		facenew = Array();
		hairnew = Array();
		if (cm.getChar().getGender() == 0) {
		for(var i = 0; i < mhair.length; i++) {
		hairnew.push(mhair[i] + parseInt(cm.getChar().getHair() % 10));
		}
		} 
		if (cm.getChar().getGender() == 1) {
		for(var i = 0; i < fhair.length; i++) {
		hairnew.push(fhair[i] + parseInt(cm.getChar().getHair() % 10));
		}
		}
		cm.sendStyle("�ҿ��Ըı���ķ���,���������ڿ�����Ư��.��Ϊʲô�����Ÿı�����? �������#b����VIP1��Ա#k,�ҽ������ı���ķ���,��ôѡ��һ������Ҫ���·��Ͱ�!", hairnew,0);
                test = 5;

	} else if (selection == 52) {
		beauty = 2;
		haircolor = Array();
		var current = parseInt(cm.getChar().getHair()/10)*10;
		for(var i = 0; i < 8; i++) {
		haircolor.push(current + i);
		}
		cm.sendStyle("�ҿ��Ըı���ķ�ɫ,���������ڿ�����Ư��. ��Ϊʲô�����Ÿı�����? �������#b����VIP1��Ա#k,�ҽ������ı���ķ�ɫ,��ôѡ��һ������Ҫ���·�ɫ��!", haircolor,0);
                test = 6;

	} else if (selection == 53) {
		facenew = Array();
		if (cm.getChar().getGender() == 0) {
		for(var i = 0; i < mface.length; i++) {
		facenew.push(mface[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
		}
		}
		if (cm.getChar().getGender() == 1) {
		for(var i = 0; i < fface.length; i++) {
		facenew.push(fface[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
		}
		}
		cm.sendStyle("�ҿ��Ըı��������,���������ڿ�����Ư��. ��Ϊʲô�����Ÿı�����? �������#b����VIP1��Ա#k,�ҽ������ı��������,��ôѡ��һ������Ҫ�������Ͱ�!", facenew,0);
                test = 7;
	} else if (selection == 54) {
		if (cm.getChar().getGender() == 0) {
		var current = cm.getChar().getFace() % 100 + 20000;
		}else{
		var current = cm.getChar().getFace() % 100 + 21000;
		}
		colors = Array();
		colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700);
		cm.sendStyle("��ѡ����ϲ������ɫ.", colors,0);
                test = 8;

		}

//-----------------------------------------------------------------------------

	} else if (status == 3){

	if (selection == 14) {
		if (cm.getMeso() >=5000000) { 
		var capacity = cm.getPlayer().getBuddylist() .getCapacity();
		if (capacity >= 50 ) {
		cm.getPlayer().dropMessage(1, "��������������.");
		cm.dispose(); 
		}else{
		var newcapacity = capacity + 5;
		cm.updateBuddyCapacity(newcapacity);
		cm.getPlayer().dropMessage(1, "�ɹ�����5�����ѿռ�.");
		cm.gainMeso(-5000000);
		cm.dispose(); 
		}
		}else{
		cm.getPlayer().dropMessage(1, "����Ǯ����.");
		cm.dispose(); 
		}

	} else if(selection == 15){
		cm.deleteItem(1); 
		cm.sendOk("����ɹ�!"); 
		cm.dispose(); 

	} else if(selection == 16){
		cm.deleteItem(2); 
		cm.sendOk("����ɹ�!"); 
		cm.dispose(); 
		
	} else if(selection == 17){
		cm.deleteItem(3); 
		cm.sendOk("����ɹ�!"); 
		cm.dispose(); 
		
	} else if(selection == 18){
		cm.deleteItem(4); 
		cm.sendOk("����ɹ�!"); 
		cm.dispose(); 

	} else if(selection == 19){
		cm.deleteItem(5); 
		cm.sendOk("����ɹ�!"); 
		cm.dispose(); 


	} else if(selection == 101){

	    var add = ""+ttt+"#b������װ����˳������,�ҽ�Ϊ��������.\r\n";

		add +=""+ttt+"װ���������޷�����,����,����,�뿼�Ǻ����.\r\n";

		add +=""+ttt+"ע��:#r�˹���ֻ��ʹ����װ����.";

		cm.sendGetNumber(add,1,1,100); 

                test = 9;


	} else if(selection == 102){


	    var add = ""+ttt+"#b������װ����˳������,�ҽ�Ϊ�������.\r\n";

		add +=""+ttt+"װ����������Խ���,����,����,�뿼�Ǻ����.\r\n";

		add +=""+ttt+"ע��:#r�˹���ֻ��ʹ����װ����.";

		cm.sendGetNumber(add,1,1,100); 

                test = 10;

	} else if(selection == 103){

	    var add = ""+ttt+"#b������װ����˳������,�ҽ�Ϊ��������.\r\n";

		add +=""+ttt+"װ���������޷�����,����,����,�뿼�Ǻ����.\r\n";

		add +=""+ttt+"ע��:#r�˹���ֻ��ʹ����װ����.";

		cm.sendGetNumber(add,1,1,100); 

                test = 11;

	} else if(selection == 104){

	    var add = ""+ttt+"#b������װ����˳������,�ҽ�Ϊ��������.\r\n";

		add +=""+ttt+"װ���������޷�����,����,����,�뿼�Ǻ����.\r\n";

		add +=""+ttt+"ע��:#r�˹���ֻ��ʹ����װ����.";

		cm.sendGetNumber(add,1,1,100); 

                test = 12;




	} else if (test == 1) {
		cm.sendGetNumber("#fUI/UIWindow.img/QuestIcon/6/0#\r\n\r\n#b����#r1����#b����Ҫ#r���500��#b,\r\n��Ŀǰ���н��һ���ɹ���#r" + Math.floor(cm.getMeso() / Priceone) + "#k#b������,\r\n��������������Ҫ�������������. ",1,1,10000);	
                test = 1;

	} else if (test == 2) {
		cm.sendGetNumber("#fUI/UIWindow.img/QuestIcon/7/0#\r\n\r\n#b����#r100����#b��Ҫ#r100���#b,\r\n��������������Ҫ����Ľ������.\r\n#r����1����100�����˼. ",1,1,1000);	
                test = 2;

	} else if (test == 3) {
		cm.sendGetNumber("#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#b����#r1���#b��Ҫ#r1��ֵ��#b,\r\n��������������Ҫ����ĵ������.\r\n#r����1����1�����˼. ",1,1,500000);	
                test = 3;

	} else if (test == 4) {
                cm.setSkin(skin[selection]);
		cm.sendOk("����,���������һ���ϲ�����������!");
		cm.dispose();

	} else if (test == 5) {
                cm.setHair(hairnew[selection]);
		cm.sendOk("����,���������һ���ϲ�����������!");
		cm.dispose();

	} else if (test == 6) {
		cm.setHair(haircolor[selection]);
		cm.sendOk("����,���������һ���ϲ�����������!");
		cm.dispose();

	} else if (test == 7) {
                cm.setFace(facenew[selection]);
		cm.sendOk("����,���������һ���ϲ�����������!");
		cm.dispose();

	} else if (test == 8) {
                cm.setFace(colors[selection]);
		cm.sendOk("����,���������һ���ϲ�����������!");
		cm.dispose();


		}

//-----------------------------------------------------------------------------

	} else if (status == 4){

	if (test == 1) {
		nulled = selection;
		if ((cm.getPlayer().getFame() + nulled) < 32767){
		cm.sendYesNo("#b������ #r" + nulled + "#k #b������,��Ҫ #r" + nulled * Priceone + "#k #b��Ϸ��,��ȷ��Ҫ������");  
		test = 1;
		}else{
		cm.sendOk("���������������Ϊ32767�����Ѿ����ܹ�����ô��������!");
		cm.dispose();
		}

	} else if (test == 2) {
		nulled = selection;
            	cm.sendYesNo("#b������ #r" + nulled + "#k #b����ð�ձ�,��Ҫ #r" + nulled * Pricetwo + "#k #b���,��ȷ��Ҫ������" );  
                test = 2;
          
	} else if (test == 3) {
                nulled = selection;
            	cm.sendYesNo("#b������ #r" + nulled + "#k #bԪ�����,#b���ܹ��� #r" + nulled * Pricethr + "#k #b���,��ȷ��Ҫ������" ); 
                test = 3;


	} else if (test == 9) {
		slot = selection;
		var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot);
		cm.sendYesNo("��ȷ��Ҫ�����������װ����?\r\n");
                test = 13;

	} else if (test == 10) {
		slot = selection;
		var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot);
		cm.sendYesNo("#b��ȷ��Ҫ�����������װ����?\r\n");
                test = 14;

	} else if (test == 11) {
		slot = selection;
		var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot);
		cm.sendYesNo("#b��ȷ��Ҫ�����������װ����?\r\n");
                test = 15;

	} else if (test == 12) {
		slot = selection;
		var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot);
		cm.sendYesNo("#b��ȷ��Ҫ�����������װ����?\r\n");
                test = 16;


		}

//-----------------------------------------------------------------------------

	} else if (status == 5) {

	if (test == 1) {
		if (cm.getMeso() < (nulled * Priceone)){
		cm.sendOk("#b����,�����ϵ�Ǯֻ����: #r" + Math.floor(cm.getMeso() / Priceone) + " #k#b������.");
		}else{
		cm.gainFame(nulled);
		cm.gainMeso(-nulled * Priceone);
		cm.sendOk("#b���������ɹ�,����ǰ������ֵ: #r" + cm.getPlayer().getFame() + "#k." );
		}
		cm.dispose();

	} else if (test == 2) {
                if (cm.getChar().getNX() < (nulled * Pricetwo)){
		cm.sendOk("#b����,��ӵ�еĵ��ֻ����:#r" + Math.floor(cm.getChar().getNX() / Pricetwo) + " #k#b����ð�ձ�");
		}else{
		cm.gainNX(nulled);
		cm.gainMeso(-nulled * Priceone);
		cm.sendOk("#b������ɹ�,����ǰ���н��: #r" + cm.getChar().getMeso() + "#k." );
		}
		cm.dispose();

	} else if (test == 3) {
                if (cm.getzb() < (nulled)){
        	cm.sendOk("#b����,��ӵ�еĵ��ֻ����: #r" + Math.floor(cm.getzb() * Pricethr) + " #k#b���.");
        	}else{
		cm.gainNX(nulled * Pricethr);
		cm.setzb(-nulled);
		cm.sendOk("#b������ɹ�,����ǰ���е��: #r" + cm.getChar().getNX() + "#k." );
		}
		cm.dispose();

	} else if (test == 13) {
		var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot);
		cm.getChar().lockitem(slot,true)
		cm.sendOk("#b�ɹ�����,���鱳��.");
		cm.dispose();

	} else if (test == 14) {
		var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot);
		cm.getChar().lockitem(slot,false)
		cm.sendOk("#b�ɹ�����,���鱳��.");
		cm.dispose();

	} else if (test == 15) {
		var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot);
		cm.getChar().lockitem(slot,true)
		cm.sendOk("#b�ɹ�����,���鱳��.");
		cm.dispose();

	} else if (test == 16) {
		var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot);
		cm.getChar().lockitem(slot,true)
		cm.sendOk("#b�ɹ�����,���鱳��.");
		cm.dispose();


	   	}

//-----------------------------------------------------------------------------
						
		}
		}
		}



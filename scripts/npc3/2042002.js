var status;
var questions = new Array("�ձ������ˣ�",
"����ǿ���������?",
"������QQȺ�ǲ���:112968939?",
"������²�����ͷ?",
"��˧��˧?",
"������۾��������Ӵ�?",
"�����������˵����Ǻ��ºڰ�?",
"���˽���汾�ǲ���079?",
"ð�յ�������������С�Ĺ���������ţ ?",
"ð�յ�079Ŀǰ��ǿBOSS����ˮ����?",
"��ɫ��.�ǲ��������֮��?",
"����ɱ����ʿ�����Ұ��,Ұ���ᱩ[Ƥ��]?.",
"���ǲ���˧��һ����Ϳѽ?.",
"���ִ��ǲ��������㣿.",
"�й��ǲ�����������ǿ��Ĺ���?.",
" �黨���ǲ����ˣ�.",
"��ѧ�������⳵�Ƿ�ֻ��Ҫ100���?.",
"�̲�ð�յ��ǲ���������.",
"�������ǲ��ǹ�������.",
"����ǲ���������.",
"���ǲ���Ϭ��������?.",
"�����ǲ�����̩�����?.",
"A+B�ǲ���=C?.",
"Y+X�ǲ���=Z?.",
"H+M�ǲ���=N?.",
"�̲�ð�յ��ǲ���1��25�ſ���?.",
"����������Ц��,��������?."
);
var answers = new Array(false, false, true, true, true, true, true, true, false, false, false, false, true, false, true, false, false, true, true, false, false, false, false, true, true, true, false);
var rOutput = new Array("�뿴��Сѧ������������..",
"�뿴��Сѧ������������..'",
"�뿴��Сѧ������������..",
"�뿴��Сѧ������������..",
"�뿴��Сѧ������������...",
"�뿴��Сѧ������������..",
"�뿴��Сѧ������������..",
"�뿴��Сѧ������������...",
"�뿴��Сѧ������������..",
"�뿴��Сѧ������������...",
"�뿴��Сѧ������������..",
"�뿴��Сѧ������������...",
"�뿴��Сѧ������������...",
"�뿴��Сѧ������������...",
"�뿴��Сѧ������������..",
"�뿴��Сѧ������������...",
"�뿴��Сѧ������������..",
"�뿴��Сѧ������������...",
"�뿴��Сѧ������������..",
"�뿴��Сѧ������������...",
"�뿴��Сѧ������������..",
"�뿴��Сѧ������������...",
"�뿴��Сѧ������������...",
"�뿴��Сѧ������������...",
"�뿴��Сѧ������������..",
"�뿴��Сѧ������������...",
"�뿴��Сѧ������������..."
);
var asked = new Array();
var currentQuestion;

function start() {
status = -1;
action(1, 0, -1);
}

function action(mode, type, selection) {
if (status == 3 && mode == 1) { // continue quiz.
status = 2;
selection = 0;
} else if (mode == 1 || (mode == 0 && type == 1)) // answering / accepting
status++;
else {
if (type == 12 && mode == 0) // declining.
cm.sendOk("���!������#bð�յ�����#k!");
cm.dispose();
return;
}
	
if (status == 0)
cm.sendAcceptDecline("��ӭ����#b�̲�ð�յ�#k,Ϊ������Ϸ��Ȥ,#b�ܹ�#kʹ�ô�NPC,Ϊ��ҷ���,��ǿ��Ĵ�������,�����漰#b��������#k,�Լ�#bӢ�Ŀ���#k.\r\n#r�������,��ʼ����������˰�.#k");

else if (status == 1)
//cm.sendSimple("��ӭ����#b�̲�ð�յ�#k,Ϊ������Ϸ��Ȥ,#b�ܹ�#kʹ�ô�NPC,Ϊ��ҷ���,��ǿ��Ĵ�������,�����漰#b��������#k,�Լ�#bӢ�Ŀ���#k.#b\r\n#L0#��ʼ����!#l\r\n#L1#��ν��ʹ���?#l\r\n#L2#�鿴���⽱��#l\r\n#L3#����������������.#l");
cm.sendSimple("��ӭ����#b�̲�ð�յ�#k���ڴ�NPC�������������ˢ���ߣ�\r\n��ʱֹͣ��NPCʹ�ã�\r\n#L3#лл�������ǵ�֧��.#l");

else if (status == 2) {
if (selection == 0) {
if (questions.length == asked.length) {
cm.sendNext("#b���ǲ��Ǵ�ѧ��ҵ��,������ô���,��Ȼȫ��������.");
getPrize();
cm.dispose();
} else {
currentQuestion = -1;
while (contains(currentQuestion) || currentQuestion == -1) {
currentQuestion = Math.floor(Math.random() * questions.length);
}
asked.push(currentQuestion);
cm.sendYesNo("#b����.�׶� "+asked.length+":#k\r\n"+questions[currentQuestion]);
}
} else if (selection == 1) {
cm.sendNext("#b���ⲻ��Ҫ��,��ֻҪ������½ǵ��ǻ��߲��ǾͿ�����ɴ���.");
status = 0;
} else if (selection == 2) {
cm.sendNext("#b��������ǿ����Ŷ,������GM��,Ư��������,�����������Ŷ,�������⵽��һ��,ѡ���ڼ���,�����Ի��С���ֽ���.");
status = 0;
} else if (selection == 3) {
cm.sendNext("лл������ǵ�֧��..");
cm.dispose();
}
} else if (status == 3) {
var answer = mode == 0 ? false : true;
if (answers[currentQuestion] == answer) {
cm.sendYesNo("#b��ȷ#k.�����ø��õĽ���������������ȥô?");
} else {
cm.sendOk("#r����ȷ�Ĵ� !#k\r\n"+rOutput[currentQuestion]);
cm.dispose();
}
} else if (status == 4) {
getPrize();
cm.sendOk("#b�������..�����˽���.��ȥ��������.");
cm.dispose();
}
}

function contains(quest) {
for (var i = 0; i < asked.length; i++) {
if (asked[i] == quest)
return true;
}
return false;
}

function getPrize() {
var hasQuant = false;
var junk = new Array(4000009, 4000006, 4000005, 4000014, 4000016, 4000023, 4000022, 4000030, 4000029, 4000036, 4000038, 4000422);//��������

var junkWeap = new Array(1432043,1432000, 1432001, 1432009, 1432024, 1432042, 1432002, 1442039, 1322010,
				 1442007, 1322004, 1442035, 1442024, 1442025, 1382000, 1382003, 1382018, 
				 1382042, 1382004, 1382015, 1382012, 1322051, 1382019, 1382019, 1412001, 
				 1412000, 1412005, 1412013, 1412018, 1412005, 1412008, 1412027, 1422000,
				 1422006, 1422003, 1422004, 1422033, 1402013, 1402029, 1402007, 1402044, 
				 1402006, 1402002, 1402010, 1402014, 1402009, 1402018, 1372005, 1372006,
				 1372043, 1372022, 1372001, 1452023, 1452001, 1452032, 1312018, 1472030,
				 1472003, 1472000, 1312005, 1462023, 1462000, 1462034, 1462005, 1332021,
				 1332032, 1332007, 1332006, 1312033, 1332029, 1332049);//��ͨ����

var useable = new Array(2022280, 2022073, 2022112, 2022089, 2010000, 2022178, 2100016, 2100000, 2102006, 2100001, 2100007);//��������

var goodEqWeap = new Array(1432039, 1432007, 1432040, 1302058, 1432018, 1432011, 1432030, 1442034, 1442020, 
			   1442019, 1442045, 1442044, 1432039, 1382007, 1382034, 1382024, 1302104, 1412025, 
			   1382016, 1382035, 1382037, 1412018, 1412007, 1412019, 1412027, 1412008, 1412025, 
			   1372011, 1412009, 1412010, 1412021, 1422027, 1422013, 1372017, 1422010, 1422029, 
			   1422009, 1422005, 1422025, 1402037, 1402035, 1402016, 1302128, 1402004, 1402012, 
			   1402039, 1372010, 1372016, 1372008, 1372015, 1372033, 1302129, 1452017, 1452019, 
			   1452020, 1452014, 1452012, 1452060, 1472028, 1402044, 1312013, 1472053, 1472033, 
			   1462017, 1462015, 1462021, 1462013, 1382060, 1402063, 1332026, 1332051, 1332052, 
			   1312030, 1312015, 1312010, 1312004, 1312016, 1322045, 1302063, 1322020, 1322019,
			   1322029); //�������

var Rare = new Array(1432038, 1442002, 1382036, 1412026, 1422028, 1402036, 1372032, 1452044, 1472052, 1472051,
		     1462039, 1332050, 1332049, 1312031, 1322052, 1302059, 2022118);//�߼�װ������


var rand = Math.floor(Math.random() * 100)+(asked.length*2);
var curArray;
if (rand < 20) {
curArray = junk;
hasQuant = true;

} else if (rand >= 20 && rand <= 40) {
curArray = junkWeap;

} else if (rand > 40 && rand <= 60) {
curArray = useable;
hasQuant = true;

} else if (rand > 60 && rand <= 80) {
curArray = goodEqWeap;

} else if (rand > 80 && rand <= 95) {
curArray = goodEqWeap;
} else {
curArray = Rare;
}
cm.gainItem(curArray[Math.floor(Math.random() * curArray.length)], hasQuant ? Math.floor(Math.random() * 20) : 1);
}
/*
                �����ļ���Vr001 �������˵ĺ����ļ�֮һ��
  Ŀǰ��Ȩ (C) 2010��   Vr001 ����             <159502199@qq.com>
 * -----------------------------------------------------------*
  ֮ǰ��Ա (C) 2008��   Huy              <patrick.huy@frz.cc>
                       Matthias Butz       <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>
 * ------------------------------------------------------------*
 @�÷����Ŀǰά����Ա:Vr001 ����
 @����ļ���������ʽ.�������������
 @������򷢲���Ŀ����������������@
 @�������Ҫ����֧��,������ϵ����/ά����Ա<QQ100807851>
 @��Ӧ���Ѿ��յ�һ��Affero GNUͨ�ù�����Ȩ
 -�������,����ϸ�鿴http://www.gnu.org/licenses/*
*/
/*
******************NPC�齱**********************
*/

importPackage(net.sf.odinms.client);



var status = 0;
var chance1 = Math.floor(Math.random()*200+1);
var chance2 = Math.floor(Math.random()*50);
var chance3 = (Math.floor(Math.random()*20)+1);
var chance4 = Math.floor(Math.random()*2+1);
var itemchance = chance1 + chance2 + chance3 * chance4;
var itemamount = Math.floor(Math.random()*50+1);


function start() {
	status = -1;
	action(1, 0, 0);
}


function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("��.�ڻ����������ܺ�.ף���´κ���~!");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				cm.sendNext("���ǻNPC.\r\n�������\r\n#e #b#v4032491##k#r10����\r\n�����������������ȡ��ƷŶ~!\r\n������ͼ���Ի��: #v4032491#");
			}
		else if (status == 1) {
                        if (cm.haveItem(4032491)) {
			cm.sendYesNo("����Ҫ����#v4032491#2������ȡ��Ʒ��");
			}
			else if (!cm.haveItem(4032491)) {
			cm.sendOk("��û��#v4032491#.���޷�Ϊ�����\r\n��ȡ#v4032491#�ķ�����\r\n#bͨ��#r����#b����#r���ͼ#k�ڹ涨�Ķ�ʱ���ڴ�ܹ��\r\n����ɵ������Ʒ��");
			cm.dispose();
			}
		}
		else if (status == 2) {
			cm.gainItem(4032491, -10);

			if ((itemchance >= 1) && (itemchance <= 20)) {
 cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ó�ʵð�յ���ѫ��!");
			cm.gainItem(1142000, 1);
			}
			else if ((itemchance >= 21) && (itemchance <= 40)) {
 cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"������ڷ�ð�յ���ѫ��!");
			cm.gainItem(1142004, 1);
			}
			else if ((itemchance >= 41) && (itemchance <= 50)) {
 cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�������˾��!");
			cm.gainItem(3010019, 1);
			}
			else if ((itemchance >= 51) && (itemchance <= 60)) {
 cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����÷�Ҷ1200��.F6!");
			cm.gainItem(4001126, 1200);
			}
			else if ((itemchance >= 61) && (itemchance <= 70)) {
 cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ñ���!");
			cm.gainItem(4001102, 1);
			}
			else if (itemchance == 71) {
 cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����÷�Ҷ400��!");
			cm.gainItem(4001126, 400);
			}
  
			else if (itemchance == 72) {
 cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����÷�Ҷ400��!");
			cm.gainItem(4001126, 400);
			}
			else if (itemchance == 73) {
 cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����÷�Ҷ400��!");
			cm.gainItem(4001126, 400);
			}
			else if (itemchance == 74) {
 cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����÷�Ҷ3����!");
			cm.gainItem(1412028, 1);
			}
			else if (itemchance == 75) {
 cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����þ�ƿ!");
			cm.gainItem(1422011, 1);
			}
			else if (itemchance == 76) {
 cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����÷�Ҷ400��!");
			cm.gainItem(4001126, 400);
			}
			else if (itemchance == 77) {
 cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����÷�Ҷ400��!");
			cm.gainItem(4001126, 400);
			}
			else if (itemchance == 78) {
 cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����÷�Ҷ400��!");
			cm.gainItem(4001126, 400);
			}
			else if (itemchance == 79) {
 cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����÷�Ҷ400��!");
			cm.gainItem(4001126, 400);
			}
			else if (itemchance == 80) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����õ����!");
			cm.gainItem(1432039, 1);
			}	
			else if (itemchance == 81) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ö�����!");
			cm.gainItem(1442039, 1);
			}
			else if (itemchance == 82) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����û��긣���ٻ���!");
			cm.gainItem(2101245, 5);
			}
			else if (itemchance == 83) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����������!");
			cm.gainItem(3010040, 1);
			}	
			else if (itemchance == 84) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ú�������!");
			cm.gainItem(3010045, 1);
			}
			else if (itemchance == 85) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����ʥ��������!");
			cm.gainItem(3010048, 1);
			}
			else if (itemchance == 86) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����¶ˮ����!");
			cm.gainItem(3010068, 1);
			}
			else if (itemchance == 87) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����ð�յ�ż������ѫ��!");
			cm.gainItem(1142006, 1);
			}	
			else if (itemchance == 88) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�������ʿ�ų�ѫ��!");
			cm.gainItem(1142069, 1);
			}
			else if (itemchance == 89) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ñ���������!");
			cm.gainItem(3010099, 1);
			}
			else if (itemchance == 90) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ú�ԡ��!");
			cm.gainItem(1051098, 1);
			}
			else if (itemchance == 91) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�������ԡ��!");
			cm.gainItem(1050100, 1);
			}
			else if (itemchance == 92) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"������㹽!");
			cm.gainItem(1382016, 1);
			}
			else if (itemchance == 93) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����������!");
			cm.gainItem(3010071, 1);
			}
			else if (itemchance == 94) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����ůů��");
			cm.gainItem(3010021, 1);
			}
			else if (itemchance == 95) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����û�������!");
			cm.gainItem(3010111, 1);
			}
			else if (itemchance == 96) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����Ͱԡ!");
			cm.gainItem(3012002, 1);
			}
			else if (itemchance == 97) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�������Ƥ��ͷ!");
			cm.gainItem(1302021, 1);
			}
			else if (itemchance == 98) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"������������磨�ۣ�!");
			cm.gainItem(1102041, 1);
			}
			else if (itemchance == 99) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����Ӣ��ս��ѫ��!");
			cm.gainItem(1142133, 1);
			}
			else if (itemchance == 100) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����÷紵����!");
			cm.gainItem(3012006, 1);
			}
			else if (itemchance == 101) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����2010����ѫ��!");
			cm.gainItem(1142186, 1);
			}
			else if (itemchance == 102) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����Ѫɫõ��!");
			cm.gainItem(3010057, 1);
			}
			else if (itemchance == 103) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"���������ĩ��!");
			cm.gainItem(3010058, 1);
			}
			else if (itemchance == 104) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����õ���լ��!");
			cm.gainItem(3010098, 1);
			}
			else if (itemchance == 105) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����ѩ����!");
			cm.gainItem(3010049, 1);
			}
			else if (itemchance == 106) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ú�ɫ����!");
			cm.gainItem(1302013, 1);
			}
			else if (itemchance == 107) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ù������׺�!");
			cm.gainItem(1082146, 1);
			}
			else if (itemchance == 108) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ó�����ѩ��!");
			cm.gainItem(1442046, 1);
			}
			else if (itemchance == 109) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����糺�֮��!");
			cm.gainItem(1452060, 1);
			}
			else if (itemchance == 110) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�������ɫ��ɡ!");
			cm.gainItem(1302017, 1);
			}
			else if (itemchance == 111) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����糺�����!");
			cm.gainItem(1442068, 1);
			}
			else if (itemchance == 112) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����糺취��!");
			cm.gainItem(1382060, 1);
			}
			else if (itemchance == 113) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"��������㽣!");
			cm.gainItem(1302104, 1);
			}
			else if (itemchance == 114) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ö�����!");
			cm.gainItem(1442018, 1);
			}
			else if (itemchance == 115) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"������߲��޺����!");
			cm.gainItem(1302080, 1);
			}
			else if (itemchance == 116) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ñ�����!");
			cm.gainItem(1302068, 1);
			}
			else if (itemchance == 117) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ú����ȵ���Ʊ!");
			cm.gainItem(4031561, 1);
			}
			else if (itemchance == 118) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ô��³����Ʊ!");
			cm.gainItem(4031560, 1);
			}
			else if (itemchance == 119) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ú�˹����Ʊ!");
			cm.gainItem(4031559, 1);
			}
			else if (itemchance == 120) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ñ�����ñ!");
			cm.gainItem(1002926, 1);
			}
			else if (itemchance == 121) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"������İ�ʨ��!");
			cm.gainItem(1002927, 1);
			}
			else if (itemchance == 122) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����PB����!");
			cm.gainItem(3010073, 1);
			}
			else if (itemchance == 123) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����ǿ�����Ҷͷ��!");
			cm.gainItem(1002758, 1);
			}
			else if (itemchance == 124) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ü�����ͷ��!");
			cm.gainItem(1002430, 1);
			}
			else if (itemchance == 125) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����������ͷ��!");
			cm.gainItem(1002390, 1);
			}
			else if (itemchance == 126) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"���������ͷ��!");
			cm.gainItem(1002357, 1);
			}
			else if (itemchance == 127) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"������ҩˮ100��!");
			cm.gainItem(2000005, 1);
			}
			else if (itemchance == 128) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"������ҩˮ100��!");
			cm.gainItem(2000005, 1);
			}
			else if (itemchance == 129) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"������ҩˮ100��!");
			cm.gainItem(2000005, 1);
			}
			else if (itemchance == 130) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"������ҩˮ100��!");
			cm.gainItem(2000005, 1);
			}
			else if (itemchance == 131) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"���������50��!");
			cm.gainItem(1902015, 1);
			}
			else if (itemchance == 132) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����ת���1ö!");
			cm.gainItem(4001129, 1);
			}
			else if (itemchance == 133) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����һ������!");
			cm.gainItem(1302056, 1);
			}
			else if (itemchance == 134) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����һ������!");
			cm.gainItem(1302056, 1);
			}
			else if (itemchance == 135) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����һ������!");
			cm.gainItem(1302056, 1);
			}
			else if (itemchance == 136) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�������Ӱҡ��!");
			cm.gainItem(1312030, 1);
			}
			else if (itemchance == 137) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�������Ӱҡ��!");
			cm.gainItem(1312030, 1);
			}
			else if (itemchance == 138) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�������Ӱҡ��!");
			cm.gainItem(1312030, 1);
			}
			else if (itemchance == 139) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"��������׶�!");
			cm.gainItem(1322045, 1);
			}
			else if (itemchance == 140) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"��������׶�!");
			cm.gainItem(1322045, 1);
			}
			else if (itemchance == 141) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"��������׶�!");
			cm.gainItem(1322045, 1);
			}
			else if (itemchance == 142) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"��������������!");
			cm.gainItem(1332052, 1);
			}
			else if (itemchance == 143) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"��������������!");
			cm.gainItem(1332052, 1);
			}
			else if (itemchance == 144) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"��������������!");
			cm.gainItem(1332052, 1);
			}
			else if (itemchance == 145) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"������Ȼ귨��!");
			cm.gainItem(1372010, 1);
			}
			else if (itemchance == 146) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"������Ȼ귨��!");
			cm.gainItem(1372010, 1);
			}
			else if (itemchance == 147) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"������Ȼ귨��!");
			cm.gainItem(1372010, 1);
			}
			else if (itemchance == 148) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"���������֮��!");
			cm.gainItem(1382037, 1);
			}
			else if (itemchance == 149) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"���������֮��!");
			cm.gainItem(1382037, 1);
			}
			else if (itemchance == 150) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"���������֮��!");
			cm.gainItem(1382037, 1);
			}
			else if (itemchance == 151) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ú�������ǹ!");
			cm.gainItem(1432030, 1);
			}
			else if (itemchance == 152) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ú�������ǹ!");
			cm.gainItem(1432030, 1);
			}
			else if (itemchance == 153) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ú�������ǹ!");
			cm.gainItem(1432030, 1);
			}
			else if (itemchance == 154) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����ս�궷ɱ�!");
			cm.gainItem(1442044, 1);
			}
			else if (itemchance == 155) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����ս�궷ɱ�!");
			cm.gainItem(1442044, 1);
			}
			else if (itemchance == 156) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����ս�궷ɱ�!");
			cm.gainItem(1442044, 1);
			}
			else if (itemchance == 157) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����ն�쵶!");
			cm.gainItem(1402035, 1);
			}
			else if (itemchance == 158) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����ն�쵶!");
			cm.gainItem(1402035, 1);
			}
			else if (itemchance == 159) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����ն�쵶!");
			cm.gainItem(1402035, 1);
			}
			else if (itemchance == 160) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"������������ѥ!");
			cm.gainItem(1072358, 1);
			}
			else if (itemchance == 161) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����������!");
			cm.gainItem(1412021, 1);
			}
			else if (itemchance == 162) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����������!");
			cm.gainItem(1412021, 1);
			}
			else if (itemchance == 163) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����������!");
			cm.gainItem(1412021, 1);
			}
			else if (itemchance == 164) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����̩̹֮��!");
			cm.gainItem(1422027, 1);
			}

			else if (itemchance == 165) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����̩̹֮��!");
			cm.gainItem(1422027, 1);
			}
			else if (itemchance == 166) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����̩̹֮��!");
			cm.gainItem(1422027, 1);
			}
			else if (itemchance == 167) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ӥ��(��)");
			cm.gainItem(1452019, 1);
			}
			else if (itemchance == 168) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ӥ��(��)");
			cm.gainItem(1452019, 1);
			}
			else if (itemchance == 169) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ӥ��(��)");
			cm.gainItem(1452019, 1);
			}
			else if (itemchance == 170) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�������������ȭ!");
			cm.gainItem(1472053, 1);
			}
			else if (itemchance == 171) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�������������ȭ!");
			cm.gainItem(1472053, 1);
			}
			else if (itemchance == 172) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�������������ȭ!");
			cm.gainItem(1472053, 1);
			}
			else if (itemchance == 173) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ù�ʥ����(��)");
			cm.gainItem(1462015, 1);
			}
			else if (itemchance == 174) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ù�ʥ����(��)");
			cm.gainItem(1462015, 1);
			}
			else if (itemchance == 175) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ù�ʥ����(��)");
			cm.gainItem(1462015, 1);
			}
			else if (itemchance == 176) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ý�ʥ����(��)!");
			cm.gainItem(1462016, 1);
			}
			else if (itemchance == 177) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ý�ʥ����(��)!");
			cm.gainItem(1462016, 1);
			}
			else if (itemchance == 178) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ý�ʥ����(��)!");
			cm.gainItem(1462016, 1);
			}
			else if (itemchance == 179) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����ʥʮ�ֻ���!");
			cm.gainItem(1092061, 1);
			}
			else if (itemchance == 180) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����ʥʮ�ֻ���!");
			cm.gainItem(1092061, 1);
			}
			else if (itemchance == 181) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����ʥʮ�ֻ���!");
			cm.gainItem(1092061, 1);
			}
			else if (itemchance == 182) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ý�ǹ!");
			cm.gainItem(1492012, 1);
			}
			else if (itemchance == 183) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ý�ǹ!");
			cm.gainItem(1492012, 1);
			}
			else if (itemchance == 184) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ý�ǹ!");
			cm.gainItem(1492012, 1);
			}
			else if (itemchance == 185) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ý�ǹ!");
			cm.gainItem(1492012, 1);
			}
			else if (itemchance == 186) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ý�ǹ!");
			cm.gainItem(1492012, 1);
			}
			else if (itemchance == 195) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����úڻ���!");
			cm.gainItem(3010030, 1);
			}
			else if (itemchance == 196) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����������!");
			cm.gainItem(3010029, 1);
			}
			else if (itemchance == 197) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ú컷��!");
			cm.gainItem(3010031, 1);
			}
			else if (itemchance == 198) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ûƻ���!");
			cm.gainItem(3010032, 1);
			}
			else if (itemchance == 199) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"��ɳĮ����2����!");
			cm.gainItem(3010052, 1);
			}
			else if (itemchance == 200) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����ɳĮ����1����!");
			cm.gainItem(3010051, 1);
			}
			else if (itemchance == 201) {
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����ͬһ��ɡ��!"); 
			cm.gainItem(3010044, 1);
			}
			else if (itemchance == 202) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����������ǧ!");
			cm.gainItem(3010036, 1);
			}
			else if (itemchance == 203) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����������!");
			cm.gainItem(3010037, 1);
			}
			else if (itemchance == 204) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����ħŮ�ķ�ɨ��!");
			cm.gainItem(3010043, 1);
			}
			else if (itemchance == 205) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"���������!");
			cm.gainItem(3012001, 1);
			}
			else if (itemchance == 206) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ô�Ʒ�!");
			cm.gainItem(3010069, 1);
			}
			else if (itemchance == 207) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ù�����!");
			cm.gainItem(3010050, 1);
			}
			else if (itemchance == 208) { 
cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����èͷӥ����!");
			cm.gainItem(3010077, 1);
			}
			else if ((itemchance >= 209) && (itemchance <= 215)) { 
 cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����û��!");
			cm.gainItem(1302084, 1);
			}
			else if ((itemchance >= 216) && (itemchance <= 221)) { 
 cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"�����ѩ��ս��!");
			cm.gainItem(3010106, 1);
			}
			else if ((itemchance >= 222) && (itemchance <= 228)) {
 cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"��2010��ר��ѫ��!");
			cm.gainItem(2000005, 1);
			}
			else if ((itemchance >= 228) && (itemchance <= 240)) {
 cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ð�������!");
			cm.gainItem(3012003, 1);
			}
			else if (itemchance >= 228) { 
 cm.serverNotice("������桻����ϲ"+ cm.getChar().getName() +"����ò�������!");
			cm.gainItem(3010100, 1);
			}

			cm.dispose();
		}
	}
}

/*.��Ҫ�ű�����,����ϵQQ��13535330294.*/

importPackage(net.sf.odinms.client);

var status;


function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1 || mode == 0) {
		cm.dispose();
		return;
	} else {
		if (mode == 1)
			status++; 
		else
			status--;
		if (status == 0) {
		if (cm.getPlayer().getMapId() == 920010000){
var text = "No1.������Ӧ����������������ط�.ȥ��!\r\n#L0#������һ��#l\r\n\r\n���ڷ�����ʱ��Ϊ:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��";
cm.sendSimple(text);
}else if (cm.getPlayer().getMapId() == 200080101){
var text = "����սŮ�񸱱���?\r\n#L1#������#l\r\n\r\n���ڷ�����ʱ��Ϊ:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��";
cm.sendSimple(text);
}else if (cm.getPlayer().getMapId() == 541010050){
var text = "��������,��Ӧ���д��BOSS�Ŀ���!\r\n#L2#������һ��#l\r\n\r\n���ڷ�����ʱ��Ϊ:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��";
cm.sendSimple(text);
}else if (cm.getPlayer().getMapId() == 920011300){
cm.removeAll(4001050);
				cm.removeAll(4001051);
				cm.removeAll(4001052);
				cm.removeAll(4001044);
				cm.removeAll(4001045);
				cm.removeAll(4001046);
				cm.removeAll(4001047);
				cm.removeAll(4001048);
				cm.removeAll(4001049);
				cm.removeAll(4001063);
				cm.removeAll(4031309);
				cm.removeAll(4001053);
				cm.removeAll(4001054);
				cm.removeAll(4001056);
				
				cm.warp(100000200);
				
				cm.dispose();
}else {//vip1����
var text = "��Ը��������������Ĺ���.�ҵ���";
cm.sendOk(text);
cm.dispose();
}
		}
		else if(status == 1) {
			if (selection == 0) {
if (cm.getHour() < 0) {
cm.sendOk("�����ʱ��,�����ж�,�㽫������.\r\n���ڷ�����ʱ��Ϊ:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��");

cm.dispose();
}else if (cm.getHour() > 99) {
cm.warp(910000000,0);
cm.sendOk("�����ʱ��,�����ж�,�㽫������.\r\n���ڷ�����ʱ��Ϊ:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��");

cm.dispose();
}else if (cm.haveItem(4001063,20)) {
cm.getMap(920010400).addMapTimer(900, 200080101);
cm.gainItem(4001063,-20);
cm.warpParty(920010400);
cm.sendOk("��Ը�����ܼ������.");
cm.dispose();

}else {	
cm.sendOk("��������");
cm.dispose();
}

//
}else if (selection == 1) {
if (cm.getParty() == null) { // No Party
				cm.sendOk("����Ҫ��ս#bŮ���������#k��?��ô������Ҫ��һ�������!\r\n���ȼ�Ҫ��:21��-200��.\r\n������Ҫ��:3-6��\r\n#k��������:#b���,����,�߼�װ����.");
cm.dispose();
} else if(party.getMembers().size() < 4) {
		cm.sendOk("#b�����ڵĶ������ӵ��3����Ա���ܽ���.");
		cm.dispose();


                      } else if (!cm.isLeader()) { // Not Party Leader
				cm.sendOk("�����Ҫ��ս#bŮ���������#k�������ǵ�#b��ӳ�#k�����Ұ�!.");
cm.dispose();
} else if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
cm.getMap(920010000).addMapTimer(900, 200080101);
cm.warpParty(920010000);
cm.dispose();
}
}else if (selection == 2) {
if (cm.getHour() < 19) {
cm.warp(910000000,0);
cm.sendOk("�����ʱ��,�����ж�,�㽫������.\r\n���ڷ�����ʱ��Ϊ:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��");

cm.dispose();
}else if (cm.getHour() > 22) {
cm.warp(910000000,0);
cm.sendOk("�����ʱ��,�����ж�,�㽫������.\r\n���ڷ�����ʱ��Ϊ:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��");
cm.dispose();
}else if (cm.haveItem(4000383,500)) {
cm.gainItem(4000383,-500);
 cm.gainItem(4001117,1); 
cm.warp(541010100,0);
cm.sendOk("��Ը���ܴ����~");
cm.dispose();
}else {	
cm.sendOk("��Ը���ܴ�����鴬��,����չ�������ʵ����~�ռ�500��#v4000383#.��ע��ʱ��!!!����22��,������Ϊ����.!");
cm.dispose();
}



}else if (selection == 3) {
var map =cm.getChar().getMap();
if(map.mobCount() >= 100){
cm.sendOk("�����ͼ�����е�#b����#k���ܽ����ٴ��ٻ�.!");
cm.dispose();
}else if (!cm.haveItem(4001117,1)) {
cm.sendOk("��ò���Ѿ��ٻ����˰�?");
cm.dispose();
}else {
  cm.summonMob(9420513, 500000000, 10000, 1);//����5EѪ
 cm.gainItem(4001117,-1);
cm.serverNotice("[����]: ��� [" + cm.getPlayer() + "] �ɹ��ٻ��˴���,���ܷ��ܴ���,��ý�����?");

cm.dispose();


}
}else if (selection == 4) {
if (!cm.haveItem(3994026,1)) {
cm.sendOk("������ѡ����������ؿ�.!");
cm.dispose();
}else { 
cm.gainItem(4002002, 3);
cm.gainItem(3994026, -1);
cm.dispose(); 
} 

}else if (selection == 5) {
if (!cm.haveItem(3994034,1)) {
cm.sendOk("������ѡ����������ؿ�.!");
cm.dispose();
}else { 
cm.gainItem(4002002, 2);
cm.gainItem(3994034, -1);
cm.dispose(); 
} 

}else if (selection == 6)  {
if (!cm.haveItem(3994027,1)) {
cm.sendOk("������ѡ����������ؿ�.!");
cm.dispose();
}else { 
cm.gainItem(4031454, 1);
cm.gainItem(3994027, -1);
cm.dispose(); 
} 

}else if (selection == 7) {
cm.sendOk("#v3994026##r�ֽ����ؿ�:#k\r\n   ���ڵ������#b����#k����5��,\r\n#v3994034##r�ֽ����ؿ�:#k\r\n   ���ڵ������#b����#k����4��\r\n   �ر����#b[110��װ��,�������,100%�سɾ�.ϡ������]#k��.\r\n#v3994027##r�ֽ����ؿ�:#k\r\n   �����,��60����,��������װ���ɳ���,���ܼ��Ǿ��������~\r\n   �ر����#b[110��װ��,�������,100%�سɾ�.ϡ������]#k��..\r\n\r\nPs:��Ȼ,Ҳ���Ժͱ���ð�յ���ս,����ֻ���Ķӳ����ַ�Ŷ!");
cm.dispose();

}}}}

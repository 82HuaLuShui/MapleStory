/*
@ ��ʿ����̹�NPC
@ �ǹܴ��ͷͷ????
*/

var status;

function start() {
	status = -1;
	action(1,0,0);
	}
	
function action(mode,type,selection) {
	if (mode == -1) {
		cm.dispose();
	} else if (mode == 0) {
			cm.sendOk("...");
			cm.dispose();
	} else if (status == -1) {
		if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
			status = 0;
			cm.sendNext("�������Գ�Ϊһ��սʿ. ���ҿ����������...");
		} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WARRIOR)) {
			status = 2;
			cm.sendNext("�����������ڶ���תְ��׼��.���ҿ���...");
		} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER) ||
					cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE) ||
					cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN)) {
			status = 4;
			cm.sendNext("��ѽ~~�þò�����~");
		} else {
			cm.sendOk("��ʲô��?�ٿ��ҵ�����Ӫҵִ��~��");
			cm.dispose();
		}
	} else if (status == 0) {
		if (cm.getLevel() <= 9 || cm.getChar().getStr() <= 1) {
			cm.sendOk("��Ϊһ��սʿ��Ҫ�ﵽ#r10#k��..������Ҫ#r35#k���߸���..����һ��û����?");
			cm.dispose();
		} else {
			status = 1;
			cm.sendYesNo("�������Գ�Ϊһ��սʿ..���Ƿ�Ը�������ڳǹܴ�ӵ���������??");
		}
	} else if (status == 1) {
		cm.changeJob(net.sf.odinms.client.MapleJob.WARRIOR);
		cm.sendOk("����,���Ѿ���Ϊ��һ��սʿ��.��Ҳ�����˳ǹܴ�ӵĻ�������.����#b30#k����ʱ��,�������ҵڶ���̸��!");
		cm.dispose();
	} else if (status == 2) {
		if (cm.getLevel() <= 29) {
			cm.sendOk("�ڶ���תְ��ҪLV30.�㵽������?");
			cm.dispose();
		} else if (cm.getLevel() >= 30 && cm.haveItem(4031012)) {
			status = 3;
			cm.sendNext("��,��׼��������?");
		} else if (cm.getLevel() >= 30 && cm.haveItem(4031008)) {
			cm.sendOk("��ȥ������!");
			cm.dispose();
		} else {
			cm.sendOk("��Ľ��������˳Ծ�!�ҿ�������ֱ��תְ!��������������鷳!\r\n#b��ֻ��Ҫ�ٺ��ҶԻ�һ�ξͿ��Խ��еڶ���תְ��!!");
			cm.gainItem(4031012,1);
			cm.dispose();
		}
	} else if (status == 3) {
		if (selection == 0) {
			status = 8;
			cm.sendYesNo("��ȷ������Ҫ��Ϊ������?");
		} else if (selection == 1) {
			status = 9;
			cm.sendYesNo("��ȷ������Ҫ��Ϊ׼��ʿ��?");
		} else if (selection == 2) {
			status = 10;
			cm.sendYesNo("��ȷ������Ҫ��Ϊǹսʿ��?");
		} else {
		cm.sendSimple("����ְҵ��,�㿴����һ��?#b\r\n#L0#����#l\r\n#L1#׼��ʿ#l\r\n#L2#ǹսʿ#l#k");
		}
	} else if (status == 4) {
		if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER) && cm.getLevel() >= 70){
			status = 5;
			cm.sendYesNo("������תְ��ְҵ����ʿ..��һ����ǿ����ְҵ,���Ƿ�Ը��תְ��?");
		} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE) && cm.getLevel() >= 70){
			status = 6;
			cm.sendYesNo("׼��ʿ�ĵ�����תְ,��û�������?");
		} else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN) && cm.getLevel() >= 70){
			status = 7;
			cm.sendYesNo("����ʿ...��ǿ��ְҵ,�����Ϊ#r����ʿ#k��?");
		} else {
			cm.sendOk("����70����ʱ��,��������˵��,���Ե�����תְŶ!");
			cm.dispose();
		}
	} else if (status == 5) {
		cm.changeJob(net.sf.odinms.client.MapleJob.CRUSADER);
		cm.sendOk("���Ѿ��ɹ���ȡ�˵�����תְ��������!!\r\n���ܽ���Ķ�������,120����������ת��ʱ��!");
		cm.dispose();
	} else if (status == 6) {
		cm.changeJob(net.sf.odinms.client.MapleJob.WHITEKNIGHT);
		cm.sendOk("���Ѿ��ɹ���ȡ�˵�����תְ��������!!\r\n���ܽ���Ķ�������,120����������ת��ʱ��!");
		cm.dispose();
	} else if (status == 7) {
		cm.changeJob(net.sf.odinms.client.MapleJob.DRAGONKNIGHT);
		cm.sendOk("���Ѿ��ɹ���ȡ�˵�����תְ��������!!\r\n���ܽ���Ķ�������,120����������ת��ʱ��!");
		cm.dispose();
	} else if (status == 8) {
			cm.changeJob(net.sf.odinms.client.MapleJob.FIGHTER);
			cm.gainItem(4031012,-1);
			cm.sendOk("�ܺ�!���Ѿ��ɹ�����˵ڶ���תְ��������!���㻹���ٴ�תְ��ʱ��,������70����ʱ����������̸��!�������Ѿ���һ�������ĳǹ�ִ����Ա��!");
			cm.dispose();
	} else if (status == 9) {
			cm.changeJob(net.sf.odinms.client.MapleJob.PAGE);
			cm.gainItem(4031012,-1);
			cm.sendOk("�ܺ�!���Ѿ��ɹ�����˵ڶ���תְ��������!���㻹���ٴ�תְ��ʱ��,������70����ʱ����������̸��!�������Ѿ���һ�������ĳǹ�ִ����Ա��!");
			cm.dispose();
	} else if (status == 10) {
			cm.changeJob(net.sf.odinms.client.MapleJob.SPEARMAN);
			cm.gainItem(4031012,-1);
			cm.sendOk("�ܺ�!���Ѿ��ɹ�����˵ڶ���תְ��������!���㻹���ٴ�תְ��ʱ��,������70����ʱ����������̸��!�������Ѿ���һ�������ĳǹ�ִ����Ա��!");
			cm.dispose();
	}
}
/*
Vr001 ���� ONLINE
Vr001 ���� Ver079
���ͺ�ĵ�ͼID(110000000) �ƽ𺣰�����(���֮��)                  
*/
importPackage(net.sf.odinms.server.maps);

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 2 && mode == 0) {
			cm.sendOk("������ԥ��#b�ƽ�̲#k�г�ֵĹ��");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("��ã���ӭ����#bVr001 ����#k�����ǵ��Ρ�");
		} else if (status == 1) {
			cm.sendNextPrev("�ҿ��Դ���ȥ#r�ƽ�̲#k����������Ҫ֧��#b1,500#kð�ձҡ�")
		} else if (status == 2) {
			if (cm.getMeso() < 1500) {
				cm.sendOk("��û����ǮŶ��")
				cm.dispose();
			} else {
				cm.sendYesNo("���Ƿ�Ը��֧��#b1,500#kð�ձ�ȥ#r�ƽ�̲#k�أ�");
			}
		} else if (status == 3) {
			cm.gainMeso(-1500);
			cm.getChar().saveLocation(SavedLocationType.FLORINA);
			cm.warp(110000000, 0);
			cm.dispose();
		}
	}
}

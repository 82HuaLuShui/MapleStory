var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if (status >= 0 && mode == 0) {
		cm.sendNext("...................");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		cm.sendYesNo("�״γ�ֵ�����ȡ�ص�!���Ƿ���ȡ��");
	} else if (status == 1) {
		if (cm.getChar().getsc() == 0) {;
			cm.sendOk("�Բ�����û�г�ֵ����");
			cm.dispose();
		} else {
			cm.sendOk("ÿ���ʺ�ֻ������ȡ#b1��#k�����Ѿ���ȡ���ˣ�");
			cm.dispose();
		       }	
		}
	}
}
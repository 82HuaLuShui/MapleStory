/*
	��Vr001 ���� ONLINE��
      ��Ȩ�� Vr001 ���� �����
  ��ǰ�汾��Ϊ:Ver078 - Ver079
*/
importPackage(net.sf.odinms.client);

var status = 0;
var job;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendOk("�٣���ð���������𣿲�����Ҫһ��#b���Ʊ#k�ſ��Բ��룡����Ի�úܶ�Ľ����������ľ���ֵ�ȵȡ�����\r\n����Ŀǰ�ù��ܻ������Ƶ��У�");
			cm.dispose();
			return;
		}
	}
}	

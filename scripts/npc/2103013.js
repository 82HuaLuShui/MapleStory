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
			cm.sendOk("�����ߣ���ð���������﷢����һЩС�쳣��������������#b������#k���Ļ��¡������Ѿ����������ĳ�Ѩ�����ȴ�#bӢ��һ����#k������һ��#bС�����ս��Ŀ#k��ֻ��С��ſ�����ս�������������ս�����Ŀ��#b���öӳ�#k�����Աߵ�#bð�յ���ӪԱ2#k�Ի���\r\n\r\n#e����ɻ�ý�����#k\r\n#v1122010##n#b��¶˹֮��#k    #e#b��������#k#n   #e#d�������/ð�ձ�#k\r\n\r\n#e����Ŀǰ���ŵ���սģʽ��\r\n#b#i3994115##n ����#rС���鳤#k#b��#rð�յ���ӪԱ2#k#b�Ի�");
			cm.dispose();
			return;
		}
	}
}	

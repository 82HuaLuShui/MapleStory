/*
 ��Vr001 ���� ONLINE��
   ***********
   *���� ����*
   ***********
���� - ���ɹ���Ա
*/

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
		cm.sendNext("��һ����æ�ɣ��������#b��������#k����������������������һ��#b����ר�ù���#k�أ�");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		cm.sendYesNo("�٣�������#bð�յ���������#k��\r\n#b�������ɿ�������VIP�����أ�#k����ֻ����#rƵ��5#k���룬�볢������");
	} else if (status == 1) {
		cm.sendNext("�������Ŀǰ��������#r���ƽ׶�#k����������ʱ�޷����鵽����Ŀ������£�");
		cm.dispose();
		}
	}
}

/*
	NPC: Athena Pierce
 	Map: Black Road - Ready to Leave (914000100)
 	Description: First NPC you talk to as Aran
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
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("ս������������~~����ô����ôϲ��˯������..\r\n���Ƕ�����þ��ˣ�");
		} else if (status == 1) {
			cm.sendNextPrev("ʲô�������ҽ�����ʲô���ţ���������һ��ȥ���������εģ������������汿���㣡\r\n��Ȼ�㶼׼�����ˣ������Ǿͳ����ɣ�");
		} else if (status == 2) {
			cm.sendNextPrev("#b(�һ�ûˢ��ϴ����.)#k\r\n�ҿ���ս���㲻��ɣ������ˣ��Ȳ����㣡�����ɣ�");
		} else if (status == 3) {
		cm.warp(140000000, 0);
			cm.dispose();
		}
	}
}
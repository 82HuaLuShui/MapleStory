//��ĩ���л�ӭ��Ա
//CherryMS LoveMXD

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
			cm.sendNext("��ã�������ĩ���л�ӭ��Ա��");
		} else if (status == 1) {
			cm.sendNextPrev("��ĩ��������᷷���ܶණ��������Щ�����۸��һ���ڸĶ�һ�Ρ�");
		} else if (status == 2) {
			cm.sendNextPrev("���ǿ��԰�����Щ������ѡ����������Ʒ��");
		} else if (status == 3) {
			cm.sendNextPrev("����������Ʒ���Ե�#p9209000#���������ڼ������򵽵���Ʒ��");
		} else if (status == 4) {
			cm.sendNextPrev("����������Ǵ�����Ĳ�ۣ������ʲô���⣬���Ե�������̳��ѯ��");

		}
	}
}	

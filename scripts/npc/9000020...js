function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t\t\t\t#e#b  ����ð�յ�VIP��� #k	#n\r\n"
            text += "#r\t\t\t\t ����ۿۼ۸�100000���#l\r\n"//3
            text += "#b\tȫ����188-VIPѫ��#l\r\n"//3
            text += "#b\t�������ף��֣�#l\r\n"//3
            text += "#b\t�߼�װ������֤�����#l\r\n"//3
            text += "#b\t�Ͱ�����HP 100��#l\r\n"//3
            text += "#b\t���ٱ�MP   100��#l\r\n"//3
            text += "#b\t\��������5000Wð�ձ�~#l\r\n\r\n"//3
            text += "#L1##rȷ�����������͵��Ұɣ�#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.getPlayer().getCSPoints(1) >= 100000){
				cm.gainNX(-100000);
				cm.gainItem(5590001, 1, 15);//bװ������֤�����
				cm.gainItem(2001001, 100);
				cm.gainItem(1082149, 1);
				cm.gainItem(2001002, 100);
				cm.gainMeso(50000000);
		cm.gainItem(1142216,188,188,188,188,888,888,20,20,150,150,15,15,15,15);//ѫ��
            cm.sendOk("����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]����������VIP");
            cm.dispose();
			}else{
            cm.sendOk("������޷�����");
            cm.dispose();
			}
		}
    }
}

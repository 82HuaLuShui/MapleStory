var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
			cm.sendOk("��лʹ��~!");
            cm.dispose();
        }
        status--;
    }
    //if (status == 0) {
        if (cm.getInventory(1).getItem(1) == null) {
            cm.sendOk("װ������һ���������Ʒ����Ŷ~!");
            cm.dispose();
            return;
        }
		if (cm.getInventory(1).getItem(1).getLevel() >= 120) {
            cm.sendOk("ǿ����װ���ȼ����ܴ���#r120#k��Ŷ~!\r\n��ǰ#v"+Id+"##t"+Id+"# #b ��ǿ������:#r"+cm.getInventory(1).getItem(1).getLevel()+"");
            cm.dispose();
            return;
        }
		if (cm.getInventory(1).getItem(1).getUpgradeSlots() >= 5) {
			var Id = cm.getInventory(1).getItem(1).getItemId();
            cm.sendOk("�������������ܳ���#r 5 #k��Ŷ~!\r\n��ǰ#v"+Id+"##t"+Id+"# #b ��ǿ������Ϊ:#r"+cm.getInventory(1).getItem(1).getUpgradeSlots()+"");
            cm.dispose();
            return;
        }
		if (!cm.haveItem(4001083,1)) {
            cm.sendOk("����ǿ��ϵͳʹ����Ҫ���²���:\r\n#v4001083##t4001083# x 1\r\n#v4001322##t4001322# x 3\r\n#v4001126##t4001126# x 200\r\nð�ձ� = 10000000");
            cm.dispose();
            return;
        }
		if (!cm.haveItem(4001322,3)) {
            cm.sendOk("����ǿ��ϵͳʹ����Ҫ���²���:\r\n#v4001083##t4001083# x 1\r\n#v4001322##t4001322# x 3\r\n#v4001126##t4001126# x 200\r\nð�ձ� = 10000000");
            cm.dispose();
            return;
        }
		if (!cm.haveItem(4001126,200)) {
            cm.sendOk("����ǿ��ϵͳʹ����Ҫ���²���:\r\n#v4001083##t4001083# x 1\r\n#v4001322##t4001322# x 3\r\n#v4001126##t4001126# x 200\r\nð�ձ� = 10000000");
            cm.dispose();
            return;
        }
		if (!cm.getMeso() >= 10000000) {
            cm.sendOk("����ǿ��ϵͳʹ����Ҫ���²���:\r\n#v4001083##t4001083# x 1\r\n#v4001322##t4001322# x 3\r\n#v4001126##t4001126# x 200\r\nð�ձ� = 10000000");
            cm.dispose();
            return;
        }
		var Id = cm.getInventory(1).getItem(1).getItemId();
        var selStr = "���û�ӭ����#rǿ������#k\r\n\r\n#b";
            selStr += "��Ҫǿ������Ʒ�� #v"+Id+"##t"+Id+"# \r\n��ǰ��ǿ������:#r"+cm.getInventory(1).getItem(1).getLevel()+"#b ��ǿ������Ϊ:#r"+cm.getInventory(1).getItem(1).getUpgradeSlots()+"#b\r\n����ǿ��ϵͳʹ����Ҫ���²���:\r\n#v4001083# x 1   #v4001322# x 3 #v4001126# x 200 ð�ձ� = 10000000 �Ƿ�ǿ����";
        cm.sendYesNo(selStr);
    } else if (status == 1) {
		cm.gainItem(4001083,-1);
		cm.gainItem(4001322,-3);
		cm.gainItem(4001126,-200);
		cm.gainMeso(-10000000);
        cm.getInventory(1).getItem(1).setUpgradeSlots(cm.getInventory(1).getItem(1).getUpgradeSlots()+1);
		cm.ˢ��״̬();
		cm.����(2,"��ϲ[" + cm.getPlayer().getName() + "]��ǿ�����������Ĳ���������һ�ο�ǿ��������"); 
        cm.dispose();
    }
}
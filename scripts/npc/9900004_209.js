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
    if (status == 0) {
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
		if (!cm.getPlayer().getCSPoints(1) >= 15000) {
            cm.sendOk("ÿ��ǿ����Ҫ����һ��#b15000#k���,��Ŀǰ������Ϊ:#b"+cm.getPlayer().getCSPoints(1)+"");
            cm.dispose();
            return;
        }
		var Id = cm.getInventory(1).getItem(1).getItemId();
        var selStr = "���û�ӭ����#rǿ������#k\r\n\r\n#b";
            selStr += "��Ҫǿ������Ʒ�� #v"+Id+"##t"+Id+"# \r\n��ǰ��ǿ������:#r"+cm.getInventory(1).getItem(1).getLevel()+"#b ��ǿ������Ϊ:#r"+cm.getInventory(1).getItem(1).getUpgradeSlots()+"#b\r\nÿ��ǿ������#r1#b�ο�ǿ������,����һ��#b15000#k���.\r\n��Ŀǰ������Ϊ:#b"+cm.getPlayer().getCSPoints(1)+"\r\n#r                                      ��ȷ��Ҫǿ����";
        cm.sendYesNo(selStr);
    } else if (status == 1) {
		cm.getChar().modifyCSPoints(1,-15000);
        cm.getInventory(1).getItem(1).setUpgradeSlots(cm.getInventory(1).getItem(1).getUpgradeSlots()+1);
		cm.ˢ��״̬();
		cm.����(2,"��ϲ[" + cm.getPlayer().getName() + "]��ǿ������������15000���������һ�ο�ǿ��������"); 
        cm.dispose();
    }
}
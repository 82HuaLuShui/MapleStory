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
            cm.sendOk("���Ҫǿ���������Ʒ���ڱ�����һ��!");
            cm.dispose();
            return;
        }
		if (cm.getPlayer().getCSPoints(1) < 10000) {
            cm.sendOk("ÿ��ǿ����Ҫ����һ��#b10000#k���,��Ŀǰ������Ϊ:#b"+cm.getPlayer().getCSPoints(1)+"");
            cm.dispose();
            return;
        }
		���� =cm.getInventory(1).getItem(1).getStr();
		���� = cm.getInventory(1).getItem(1).getDex();
		���� = cm.getInventory(1).getItem(1).getLuk();
		���� = cm.getInventory(1).getItem(1).getInt();
		���� = cm.getInventory(1).getItem(1).getWatk();
		ħ�� = cm.getInventory(1).getItem(1).getMatk();
		s1 = Math.floor(Math.random() * (20 - 5) + 5);
		s2 =  Math.floor(Math.random() * (20 - 5) + 5);
		s3 =  Math.floor(Math.random() * (20 - 5) + 5);
		s4 =  Math.floor(Math.random() * (20 - 5) + 5);
		s5 =  Math.floor(Math.random() * (20 - 5) + 5);
		s6 =  Math.floor(Math.random() * (20 - 5) + 5);
		var Id = cm.getInventory(1).getItem(1).getItemId();
        var selStr = "���û�ӭ����#rǿ������#k\r\n\r\n#b";
            selStr += "��Ҫǿ������Ʒ�� #v"+Id+"##t"+Id+"# \r\n";
			selStr +="Ŀǰ����:"+cm.getInventory(1).getItem(1).getStr()+"\r\n";
			selStr +="Ŀǰ����:"+cm.getInventory(1).getItem(1).getDex()+"\r\n";
			selStr +="Ŀǰ����:"+cm.getInventory(1).getItem(1).getInt()+"\r\n";
			selStr +="Ŀǰ����:"+cm.getInventory(1).getItem(1).getLuk()+"\r\n";
			selStr +="Ŀǰ������:"+cm.getInventory(1).getItem(1).getWatk()+"\r\n";
			selStr +="Ŀǰħ������:"+cm.getInventory(1).getItem(1).getMatk()+"\r\n";
			selStr +="#eǿ�������Ի��������#b5-20#k.ǿ����Ҫ����#r10000#k��ȯ ���Ƿ�ǿ����";
        cm.sendYesNo(selStr);
    } else if (status == 1) {
		cm.gainNX(-10000);
		cm.getInventory(1).getItem(1).setStr(����+s1);
		cm.getInventory(1).getItem(1).setDex(����+s2);
		cm.getInventory(1).getItem(1).setInt(����+s3);
		cm.getInventory(1).getItem(1).setLuk(����+s4);
		cm.getInventory(1).getItem(1).setWatk(����+s5);
		cm.getInventory(1).getItem(1).setWatk(ħ��+s6);
		cm.ˢ��״̬();
		cm.����(2,"��ϲ[" + cm.getPlayer().getName() + "]��ǿ����������10000��ȯ������5-20������ԣ�"); 
        cm.dispose();
    }
}
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
            text += "���������ȡNPC��"
            text += "����ǰ�ۼƳ�ֵ���:"+ cm.getcz() +"\r\n";
            text += "#L1#�ۼ����� - 100Ԫ���#l\r\n";
            text += "#L2#�ۼ����� - 300Ԫ���#l\r\n";
            text += "#L3#�ۼ����� - 500Ԫ���#l\r\n";
            text += "#L4#�ۼ����� - 1000Ԫ���#l\r\n";
            text += "#L5#�ۼ����� - 2000Ԫ���#l\r\n";
            cm.sendSimple(text);

        } else if (selection == 1) { //��ȡ��ֵ��100����
            if (cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(1)).isFull()) {
                cm.sendOk("������Ӧ����װ�����ճ�6��");
                cm.dispose();
                return;
            } else if (cm.getcz() >= 100 && cm.getshouc() == 0) {
                cm.gainItem(3010003,1);//������Ʒ���룬 �������޸ġ�
                cm.gainItem(1132000,1);//
                cm.gainItem(1112423,1);//
                cm.gainMeso(+2000000);//
                //�����Ʒ�Ǽ����ָ��(���轱�������Ʒ������Ӵ��뼴�� �����磺cm.gainItem(��Ʒ����, ��Ʒ����);)
                
                cm.setshouc(+1);
                cm.sendOk("��ϲ����ȡ�ɹ���");
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.chrry.tools.MaplePacketCreator.serverNotice(12, cm.getC().getChannel(), "[��������]" + " : " + " [" + cm.getPlayer().getName() + "]�����ȡ�� ���� - 100Ԫ���.", true).getBytes());
                cm.dispose();
            } else {
                cm.sendOk("���Ѿ���ȡ��,���������ۼƳ�ֵ���㡣");
                cm.dispose();
            }
        
            } else if (selection == 2) { //��ȡ��ֵ��300����
            if (cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(1)).isFull()) {
                cm.sendOk("������Ӧ����װ�����ճ�6��");
                cm.dispose();
                return;
            } else if (cm.getcz() >= 300 && cm.getshouc() == 1) { 
                cm.gainItem(3010010,1);//������Ʒ���룬 �������޸ġ�
                cm.gainItem(1112423,1);//
                cm.gainItem(1112423,1);//
                cm.gainItem(1332032,1);//
                cm.gainItem(1132001,1);//
                cm.gainMeso(+5000000); 
                //�����Ʒ�Ǽ����ָ��(���轱�������Ʒ������Ӵ��뼴�� �����磺cm.gainItem(��Ʒ����, ��Ʒ����);)
                
                cm.setshouc(+1);
                cm.sendOk("��ϲ����ȡ�ɹ���");
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.chrry.tools.MaplePacketCreator.serverNotice(12, cm.getC().getChannel(), "[��������]" + " : " + " [" + cm.getPlayer().getName() + "]�����ȡ�� ���� - 300Ԫ���.", true).getBytes());
                cm.dispose();
            } else {
                cm.sendOk("��ȡʧ�ܡ�/r/n/r/n��ȡ��100Ԫ�Ľ�������ſ�����ȡ��ǰ��������������ۼ���������!");
                cm.dispose();
            }

            } else if (selection == 3) { //��ȡ��ֵ��500����
            if (cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(1)).isFull()) {
                cm.sendOk("������Ӧ����װ�����ճ�6��");
                cm.dispose();
                return;
            } else if (cm.getcz() >= 500 && cm.getshouc() == 2) { 
                cm.gainItem(3010014,1);//������Ʒ���룬 �������޸ġ�
                cm.gainItem(1112423,1);//
                cm.gainItem(1112423,1);//
                cm.gainItem(1112423,1);//
                cm.gainItem(1302063,1);//
                cm.gainItem(1132002,1);//
                cm.gainMeso(+8000000);//  
                //�����Ʒ�Ǽ����ָ��(�轱�������Ʒ������Ӵ��뼴�� �����磺cm.gainItem(��Ʒ����, ��Ʒ����);)
                
                cm.setshouc(+1);
                cm.sendOk("��ϲ����ȡ�ɹ���");
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.chrry.tools.MaplePacketCreator.serverNotice(12, cm.getC().getChannel(), "[��������]" + " : " + " [" + cm.getPlayer().getName() + "]�����ȡ�� ���� - 500Ԫ���.", true).getBytes());
                cm.dispose();
            } else {
                cm.sendOk("��ȡʧ�ܡ�/r/n/r/n��ȡ��300Ԫ�Ľ�������ſ�����ȡ��ǰ��������������ۼ���������!");
                cm.dispose();
            }

            } else if (selection == 4) { //��ȡ��ֵ��1000����
            if (cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(1)).isFull()) {
                cm.sendOk("������Ӧ����װ�����ճ�6��");
                cm.dispose();
                return;
            } else if (cm.getcz() >= 1000 && cm.getshouc() == 3) { 
                cm.gainItem(3010073,1);//������Ʒ���룬 �������޸ġ�
                cm.gainItem(1132004,1);//	  
                cm.gainItem(1402014,1);//
                cm.gainItem(1132013,1);//
                cm.gainItem(1012011,1);//
                cm.gainMeso(+20000000);// 

                //�����Ʒ�Ǽ����ָ��(���轱�������Ʒ������Ӵ��뼴�� �����磺cm.gainItem(��Ʒ����, ��Ʒ����);)
                
                cm.setshouc(+1);
                cm.sendOk("��ϲ����ȡ�ɹ���");
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.chrry.tools.MaplePacketCreator.serverNotice(12, cm.getC().getChannel(), "[��������]" + " : " + " [" + cm.getPlayer().getName() + "]�����ȡ�� ���� - 1000Ԫ���.", true).getBytes());
                cm.dispose();
            } else {
                cm.sendOk("��ȡʧ�ܡ�/r/n/r/n��ȡ��500Ԫ�Ľ�������ſ�����ȡ��ǰ��������������ۼ���������!");
                cm.dispose();
            }
            
             } else if (selection == 5) { //��ȡ��ֵ��2000����
            if (cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(1)).isFull()) {
                cm.sendOk("������Ӧ����װ�����ճ�6��");
                cm.dispose();
                return;
            } else if (cm.getcz() >= 2000 && cm.getshouc() == 4) { 
                cm.gainItem(1142189,1);//������Ʒ���룬 �������޸ġ�
                cm.gainItem(1132010,1);//
                cm.gainItem(2040804,5);//
                cm.gainItem(2340000,5);//
                cm.gainItem(1032040,1);//
                cm.gainItem(1022088,1);//
                cm.gainItem(3010070,1);//
                cm.gainMeso(+50000000);//  
                //�����Ʒ�Ǽ����ָ��(���轱�������Ʒ������Ӵ��뼴�� �����磺cm.gainItem(��Ʒ����, ��Ʒ����);)
    
                cm.setshouc(+1);
                cm.sendOk("��ϲ����ȡ�ɹ���");
                cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.chrry.tools.MaplePacketCreator.serverNotice(12, cm.getC().getChannel(), "[��������]" + " : " + " [" + cm.getPlayer().getName() + "]�����ȡ�� ���� - 2000Ԫ���.", true).getBytes());
                cm.dispose();
            } else {
                cm.sendOk("��ȡʧ�ܡ�/r/n/r/n��ȡ��1000Ԫ�Ľ�������ſ�����ȡ��ǰ��������������ۼ���������!");
                cm.dispose();
            }
        
        
        }
    }
}
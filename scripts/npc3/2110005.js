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
		cm.sendNext("~~~~~~~~~~~~~~~~~~~~~~~~~~~");
		cm.dispose(); 
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		cm.sendYesNo("#v3991022##v3991004##v3991011##v3991002##v3991014##v3991012##v3991004#\r\n���!�װ����̲���ң�����է���Ƿ���ú��ѻ죿~\r\n����һ��ȫ����15��#v1142000# +ð�ձ�50w��ף�������ˮ~\r\n#r���������㼸����#v1002419#+#v5072000#+#v2000005#��   #b�Ƿ���ȡ��");
	} else if (status == 1) {
		if (cm.getChar().getPresent() == 0) {
            
            var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1142000); //���װ��������
            var toDrop = ii.randomizeStats(ii.getEquipById(1142000)).copy(); // ����һ��Equip��
//toDrop.setLocked(1);
toDrop.setStr(15);
toDrop.setDex(15);
toDrop.setInt(15);
toDrop.setLuk(15);
toDrop.setHp(15);
toDrop.setMp(15);
toDrop.setMatk(15);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.gainMeso(500000);
		cm.gainItem(1002419,1);
		cm.gainItem(5072000,10);
		cm.gainItem(2000005,10);
            //cm.modifyNX(0, 0);//��ʾ�õ�

cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
cm.getChar().setPresent(1);
            cm.serverNotice(5,"[�̲�ð�յ�]����:"+cm.getChar().getName()+" ��ȡ��1��ȫ����15�ķ�Ҷñ����û�е�������������NPCɫɫ��ȡ��");
            cm.serverNotice(5,"[�̲�ð�յ�]����:"+cm.getChar().getName()+" ��ȡ��1��ȫ����15�ķ�Ҷñ����û�е�������������NPCɫɫ��ȡ��");
            cm.serverNotice(5,"[�̲�ð�յ�]����:"+cm.getChar().getName()+" ��ȡ��1��ȫ����15�ķ�Ҷñ����û�е�������������NPCɫɫ��ȡ��");
			
			cm.getChar().saveToDB(true);
			cm.sendOk("��ϲ�������ѳɹ�����ȡ��ɣ�");
			cm.dispose();
		} else {
			cm.sendOk("ÿ���ʺ�ֻ������ȡ#b1��#k�����Ѿ���ȡ���ˣ�");
			cm.dispose();
		       }	
		}
	}
}

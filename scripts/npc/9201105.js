
/*
5340000  ����
5350000  �߼������ͷ
5340001  �߼����
*/

importPackage(net.sf.odinms.client);

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
                
			cm.sendOk("��~������һ��ΰ���ְҵ");
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
			cm.sendSimple("#r�����ָ��ȡ��ʽ:��ʱ����̵ĺ��ӿ�ʼ��ȡ��#l\r\n#L1##b��ȡ�����ָ#k");
			//cm.sendSimple("���!����ʲô��Ҫ��������?\r\n#L1##b������㳡#k\r\n#L2##b�����������#k\r\n#L3##bʹ�ø߼����ͷ�һ����#k\r\n#L4##b������ͨ���#k\r\n#L5##b���㳡�Ľ���#k");
			} else if (status == 1) { //������㳡
			if (selection == 1) {
			for(var i = 1;i<=5;i++){
				if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(i)).isFull()){
					cm.sendOk("������Ӧ�������а������ճ�һ��������ּ�����ʹ��@������");
					cm.dispose();
					return;
				}
			}
			if(cm.haveItem(5532000)) {
		  var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
		var type = ii.getInventoryType(1112404);	
		var toDrop = ii.randomizeStats(ii.getEquipById(1112404)).copy();
		var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 3 * 60 * 60 * 1000);
		toDrop.setExpiration(temptime);		
		toDrop.setLuk(2);
		toDrop.setInt(2);
		toDrop.setDex(2);
		toDrop.setStr(2);
		toDrop.setHp(2);
		toDrop.setMp(2);
		toDrop.setAcc(2);
		toDrop.setAvoid(2);
		toDrop.setSpeed(2);
		toDrop.setJump(2);	
		cm.getPlayer().getInventory(type).addItem(toDrop);
		cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
		cm.gainItem(5532000,-1)
            cm.sendOk("��ϲ��ȡ3Сʱ�����ָ��");
		cm.dispose();
            } else if(cm.haveItem(5532001)) {
		  var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
		var type = ii.getInventoryType(1112404);	
		var toDrop = ii.randomizeStats(ii.getEquipById(1112404)).copy();
		var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000);
		toDrop.setExpiration(temptime);		
		toDrop.setLuk(2);
		toDrop.setInt(2);
		toDrop.setDex(2);
		toDrop.setStr(2);
		toDrop.setHp(2);
		toDrop.setMp(2);
		toDrop.setAcc(2);
		toDrop.setAvoid(2);
		toDrop.setSpeed(2);
		toDrop.setJump(2);	
		cm.getPlayer().getInventory(type).addItem(toDrop);
		cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
		cm.gainItem(5532001,-1)
            cm.sendOk("��ϲ��ȡ1�켫���ָ��");
		cm.dispose();
            } else if(cm.haveItem(5532002)) {
		  var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
		var type = ii.getInventoryType(1112404);	
		var toDrop = ii.randomizeStats(ii.getEquipById(1112404)).copy();
		var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000);
		toDrop.setExpiration(temptime);		
		toDrop.setLuk(2);
		toDrop.setInt(2);
		toDrop.setDex(2);
		toDrop.setStr(2);
		toDrop.setHp(2);
		toDrop.setMp(2);
		toDrop.setAcc(2);
		toDrop.setAvoid(2);
		toDrop.setSpeed(2);
		toDrop.setJump(2);	
		cm.getPlayer().getInventory(type).addItem(toDrop);
		cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
		cm.gainItem(5532002,-1)
            cm.sendOk("��ϲ��ȡ7�켫���ָ��");
			cm.dispose();
            } 
//-------------------------------�����������-----------------------------
			} else if  (selection == 2) { 
			if ((cm.getMeso() >= 5000000)&&(cm.haveItem(3011000, 1))||(cm.getMeso() <= 5000000)) { 
                   	cm.sendOk("���ð�ձҲ��㣬�������Ѿ�����һ�������ˣ�");
                   	cm.dispose();
                   	} else {
		   	cm.sendOk("���Ѿ��ɹ����˵������ӣ���������500��ð�ձң�"); 
			cm.gainItem(3011000,1); //��������
			cm.gainMeso(-5000000);
		   	cm.dispose(); }
//------------------------------�߼�����һ�----------------------------------
            } else if (selection == 3) {
           	    if ((cm.getzb() >= 20)) { 
		var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
		var type = ii.getInventoryType(2300000);	
		var toDrop = ii.randomizeStats(ii.getEquipById(2300000)).copy();
		var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000);
		toDrop.setExpiration(temptime);		
		//toDrop.setLuk(50);
		//toDrop.setInt(50);
		//toDrop.setDex(50);
		//toDrop.setStr(50);
		//toDrop.setHp(50);
		//toDrop.setMp(50);
		//toDrop.setAcc(50);
		//toDrop.setAvoid(50);
		//toDrop.setSpeed(50);
		//toDrop.setJump(50);	
		cm.getPlayer().getInventory(type).addItem(toDrop);
		cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
               //    cm.gainItem(2300000,50);
		   cm.setzb(-20);
		   cm.setxfb(20);//
                   cm.sendOk("�һ��ɹ���");
                   cm.dispose();
                   } else {
		   cm.sendOk("���������Ҫ20���ֵ�ҹ���1�������"); 
		   cm.dispose(); 
		   }
//--------------------------------����һ�------------------------------------
            } else if (selection == 4) {
           	 if ((cm.getzb() >= 2)) { 
			 var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
		var type = ii.getInventoryType(2300000);	
		var toDrop = ii.randomizeStats(ii.getEquipById(2300000)).copy();
		var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 1 * 60 * 60 * 1000);
		toDrop.setExpiration(temptime);		
		//toDrop.setLuk(50);
		//toDrop.setInt(50);
		//toDrop.setDex(50);
		//toDrop.setStr(50);
		//toDrop.setHp(50);
		//toDrop.setMp(50);
		//toDrop.setAcc(50);
		//toDrop.setAvoid(50);
		//toDrop.setSpeed(50);
		//toDrop.setJump(50);	
		cm.getPlayer().getInventory(type).addItem(toDrop);
		cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
               //    cm.gainItem(2300000,50);
		   cm.setzb(-2);
		   cm.setxfb(2);//
                   cm.sendOk("�һ��ɹ���");
                   cm.dispose();
                   } else {
		   cm.sendOk("���������Ҫ2���ֵ�ҹ���1Сʱ�����"); 
		   cm.dispose(); 
		   }
//-------------------------------���ڵ��㳡------------------------------------
	                 } else if (selection == 5) {
                   cm.sendNextPrev("������㳡��Ҫ#b���#k,Ҳ��Ҫ#b���㳡ר������#k,��#b���#k,��Щ�㶼����ͨ����������.#b���#k��ȥ������̳�����!\r\n#r���Ե��������ֽ����.װ��.����.����װ����#l\r\n#b��������Ҳ���Զһ�����ѫ�£�#l");
                   cm.dispose();
		}}
	}
}
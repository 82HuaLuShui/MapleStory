
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
	for(i = 0; i < 10; i++){
		text += "";
	}				
	text += "�𾴵����.˫����׹������.������ɻ��#b 30%���� #kЧ��\r\n���ڵ�ʲô�� �㣬ֵ��ӵ�У�\r\n<30%��׹���ص�˫����Ч��>\r\n���˻�Ŀǰʣ���Ϊ��#r"+cm.getNX()+"#k"
	text += "\r\n#L1##r��ȡ�����׹<һ��ʹ��Ȩ>-2000���#k";
	text += "\r\n#L3##d��ȡ�����׹<����ʹ��Ȩ>-12000���#k";
        text += "\r\n#L4##b��ȡ�����׹<30��ʹ��Ȩ>-40000���#k";
        cm.sendSimple(text);
    } else if (status == 1) {
           if (selection == 0) {      
	   cm.warp(910000000); 
           cm.dispose(); 
    }else if  (selection == 1) {                    
	  	if ((cm.getNX() >= 2000)) { 
			cm.gainNX(-2000);
                   //cm.getPlayer().gainsg(-10); 
                   //1002419 1122019 5030001 5071000
		   cm.sendOk("��ϲ����ȡ��#b�����׹");
                     var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1122017); //���װ��������
            var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
            var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
toDrop.setExpiration(temptime); 
toDrop.setLocked(1);	
toDrop.setWatk(3);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
cm.getChar().saveToDB(true);
  cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"��˫�����顽" + " : " + " [" + cm.getPlayer().getName() + "]��ȡ�˾����׹[һ��ʹ��Ȩ]��",true).getBytes()); 
		   cm.dispose();
	   }else{
		   cm.sendOk("����㡣����ϵ����Ա��ֵ��");
		   cm.dispose();
	   }
    }else if  (selection == 3) {
	 if ((cm.getNX() >= 12000)) { 
			cm.gainNX(-12000);
                   //cm.getPlayer().gainsg(-10); 
                   //1002419 1122019 5030001 5071000
		   cm.sendOk("��ϲ����ȡ��#b�����׹");
                     var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1122017); //���װ��������
            var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
            var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000*7); //ʱ��
toDrop.setExpiration(temptime); 
toDrop.setLocked(1);	
toDrop.setWatk(3);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
cm.getChar().saveToDB(true);
  cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"��˫�����顽" + " : " + " [" + cm.getPlayer().getName() + "]��ȡ�˾����׹[7��ʹ��Ȩ]��������",true).getBytes()); 
		   cm.dispose();
	   }else{
		   cm.sendOk("����㡣����ϵ����Ա��ֵ��");
		   cm.dispose();
	   }
    }else if  (selection == 2) {      
			if (cm.haveItem(4001126, 1000)) { 
		   	cm.gainItem(4001126, -1000);
            		cm.gainNX(300);
			cm.sendOk("�𾴵���ң�����˻��Ѿ��ɹ�������300����ˣ�");
                  	cm.dispose();
                   	} else {
	           	cm.sendOk("�𾴵���ң���ķ�Ҷ����1000����~��");
			cm.dispose(); }
    }else if  (selection == 4) {
           if ((cm.getNX() >= 40000)) { 
			cm.gainNX(-40000);
                   //cm.getPlayer().gainsg(-10); 
                   //1002419 1122019 5030001 5071000
		   cm.sendOk("��ϲ����ȡ��#b�����׹");
                     var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1122017); //���װ��������
            var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
            var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000*30); //ʱ��
toDrop.setExpiration(temptime); 
toDrop.setLocked(1);	
toDrop.setWatk(6);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
cm.getChar().saveToDB(true);
  cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"��˫�����顽" + " : " + " [" + cm.getPlayer().getName() + "]��ȡ�˾����׹[30��ʹ��Ȩ]��������",true).getBytes()); 
		   cm.dispose();
	   }else{
		   cm.sendOk("����㡣����ϵ����Ա��ֵ��");
		   cm.dispose();
	   }
    }else if  (selection == 5) {
             if ((cm.getNX() >= 202000)) { 
			cm.gainNX(-202000);
                   //cm.getPlayer().gainsg(-10); 
                   //1002419 1122019 5030001 5071000
		   cm.sendOk("��ϲ����ȡ��#b��ů��Χ����");
                     var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1122018); //���װ��������
            var toDrop = ii.randomizeStats(ii.getEquipById(1122018)).copy(); // ����һ��Equip��
            var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000*30); //ʱ��
toDrop.setExpiration(temptime); 
toDrop.setLocked(1);	
toDrop.setWatk(6);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
cm.getChar().saveToDB(true);
  cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"��˫�����顽" + " : " + " [" + cm.getPlayer().getName() + "]��ȡ��ȫ����+2��˫��װ��[��ů��Χ��]]��������",true).getBytes()); 
		   cm.dispose();
	   }else{
		   cm.sendOk("����㡣����ϵ����Ա��ֵ��");
		   cm.dispose();
	   }
    }else if  (selection == 6) {
	  cm.sendOk("#b��ϷģʽΪ�¹ٷ������Ͷ��ǰ��չٷ��ı�׼��ȡ����ȥ���֮��/��ľ��/��߳ǵ������ȥ������");
		cm.dispose();
    }else if  (selection == 7) {     
           cm.openNpc(1012103);  	     
    }else if  (selection == 8) {
           cm.openNpc(1052004);                  
    }else if  (selection == 9) {  
	   var statup = new java.util.ArrayList();
	   var p = cm.c.getPlayer();
	   if(p.getExp() < 0){
		   p.setExp(0) 
		   statup.add (new net.sf.cherry.tools.Pair(net.sf.cherry.client.MapleStat.EXP, java.lang.Integer.valueOf(0))); 
		   p.getClient().getSession().write (net.sf.cherry.tools.MaplePacketCreator.updatePlayerStats(statup));
		   cm.sendOk("����ֵ���޸����");
		   cm.dispose();
	   }else{
		   cm.sendOk("���ľ���ֵ����,�����޸�!");
		   cm.dispose();
	   }
    }        
}
}
}



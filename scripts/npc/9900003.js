/*
                �����ļ���Vr001 �������˵ĺ����ļ�֮һ��
  Ŀǰ��Ȩ (C) 2010��   Vr001 ����             <159502199@qq.com>
 * -----------------------------------------------------------*
  ֮ǰ��Ա (C) 2008��   Huy              <patrick.huy@frz.cc>
                       Matthias Butz       <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>
 * ------------------------------------------------------------*
 @�÷����Ŀǰά����Ա:Vr001 ����
 @����ļ���������ʽ.�������������
 @������򷢲���Ŀ����������������@
 @�������Ҫ����֧��,������ϵ����/ά����Ա<QQ100807851>
 @��Ӧ���Ѿ��յ�һ��Affero GNUͨ�ù�����Ȩ
 -�������,����ϸ�鿴 http://www.gnu.org/licenses/*
*/

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
text += "#b��ӭ����#r�̲�ð�յ�#k�����������������ۼƣ�\r\n#b��Ŀǰ�Ѿ�ɱ�����#r"+ cm.getChar().getsg() +"#b ͷ��\r\n��Ŀǰʣ����֣�#r"+cm.getboss()+"#b ��(���ֿ�ͨ���������)��"
//text +=  "#k.\r\n�����ȥ�̳�������Ʒ(��ֵ������#r#e1:200#n#k)\r\n���:#r" + cm.getChar().getNX() + "#k.\r\n";
//text += "#n#r#L10#����תְ#l#b      #b#L12#�������#k#l      #k#L6##r��ֵ�����ȡ#l\r\n\r\n"; 

//text += "#d#L12#�������#k#l\r\n";
//text += "#L3##rÿ������#k#l\r\n";
//text += "#k#L6##r��������Ʒ#l\r\n";
//text += "#b#L13#��������#l      #b#L9#�ȼ�����#l\r\n\r\n";
//text += "#b#L17##l\r\n";
//text += "#b#L7##l\r\n";
//text += "#b#L27#�����׹�һ�1��(2000���)#l\r\n";
text += "#b#L8#ÿ��ǩ��#l      #r#L11#���������#l  #L3##r#k#l\r\n\r\n";
//text += "#d#L1##k#l";
//text += "#k#L11#��ֵ�����ȡ#l";
        
        cm.sendSimple(text);
    } else if (status == 1) {
           if (selection == 0) {      
   cm.warp(910000000); 
           cm.dispose(); 
    }else if  (selection == 1) {                    

cm.sendOk("���ã����200���Ժ������ң����ܰ��㼤�������!");
cm.dispose();

    }else if  (selection == 2) {
 cm.warp(100000200);
         cm.dispose();
    }else if  (selection == 3) {      
       
}else if  (selection == 4) {    
           cm.openNpc(9900000); 
    }else if  (selection == 5) {
           cm.openNpc(9030100); 
    }else if  (selection == 6) {
           cm.openNpc(9000009); 
    }else if  (selection == 7) { 
			for(var i = 1;i<=5;i++){
				if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(i)).isFull()){
					cm.sendOk("������Ӧ�������а������ճ�һ��");
					cm.dispose();
					return;
				}
			}
		if(cm.getNX() >= 40000){
		var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
		var type = ii.getInventoryType(1122017);	
		var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy();
		var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 30 * 24 * 60 * 60 * 1000);
		toDrop.setExpiration(temptime);		
		toDrop.setWatk(2);
		cm.getPlayer().getInventory(type).addItem(toDrop);
		cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
		   cm.gainNX(-40000);//
                   cm.sendOk("�һ��ɹ���");
                   cm.dispose();
				   }else{
                   cm.sendOk("�Բ���.��û��4W����޷��һ���");
                   cm.dispose();
				   }
    }else if  (selection == 17) { 
			for(var i = 1;i<=5;i++){
				if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(i)).isFull()){
					cm.sendOk("������Ӧ�������а������ճ�һ��");
					cm.dispose();
					return;
				}
			}
		if(cm.getNX() >= 10000){
		var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
		var type = ii.getInventoryType(1122017);	
		var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy();
		var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000);
		toDrop.setExpiration(temptime);		
		toDrop.setWatk(2);
		cm.getPlayer().getInventory(type).addItem(toDrop);
		cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
		   cm.gainNX(-10000);//
                   cm.sendOk("�һ��ɹ���");
                   cm.dispose();
				   }else{
                   cm.sendOk("�Բ���.��û��4W����޷��һ���");
                   cm.dispose();
				   }
    }else if  (selection == 27) { 
	
			for(var i = 1;i<=5;i++){
				if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(i)).isFull()){
					cm.sendOk("������Ӧ�������а������ճ�һ��");
					cm.dispose();
					return;
				}
			}
		if(cm.getNX() >= 2000){
		var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
		var type = ii.getInventoryType(1122017);	
		var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy();
		var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000);
		toDrop.setExpiration(temptime);		
		toDrop.setWatk(2);
		cm.getPlayer().getInventory(type).addItem(toDrop);
		cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
		   cm.gainNX(-2000);//
                   cm.sendOk("�һ��ɹ���");
                   cm.dispose();
				   }else{
                   cm.sendOk("�Բ���.��û��4W����޷��һ���");
                   cm.dispose();
				   }
    }else if  (selection == 10) {     
           cm.openNpc(9900001);        
    }else if  (selection == 8) {//ÿ��ǩ��
         if(cm.getBossLog('qiandao') >= 1){
         cm.sendOk("�����ǩ�����ˡ��벻Ҫ�ظ�ǩ����");
}else{
        cm.setBossLog("qiandao");//����ǩ���б�
        cm.gainMeso(+10000);//ǩ��������Լ��޸� ɾ�� ���
        cm.gainNX(+100);//ǩ��������Լ��޸� ɾ�� ���
        gainItem(5030001,1);
        cm.sendOk("��ϲ������ÿ��ǩ���Ľ�����");
        cm.dispose();
}
    }else if  (selection == 9) {  
cm.displayLevelRanks();        
        cm.dispose();  
}else if  (selection == 13) {  
   cm.displayGuildRanks();
cm.dispose();   
}else if  (selection == 11) {  
cm.openNpc(9900004);    


}else if  (selection == 12) {  
     if (cm.getLevel() <8) {  
                cm.sendOk("���ӣ����㳤������ȥ�ɣ�");
cm.dispose();
}else{
cm.warp(100000200);
          cm.dispose();
}
}


}
}
}


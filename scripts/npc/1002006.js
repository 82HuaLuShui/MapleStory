/*
                �����ļ���XioxMS����˵ĺ����ļ�֮һ��
  Ŀǰ��Ȩ (C) 2010��   XioxMS             <100807851@qq.com>
 * -----------------------------------------------------------*
  ֮ǰ��Ա (C) 2008��   Huy              <patrick.huy@frz.cc>
                       Matthias Butz       <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>
 * ------------------------------------------------------------*
 @�÷����Ŀǰά����Ա:xioxms
 @����ļ���������ʽ.�������������
 @������򷢲���Ŀ����������������@
 @�������Ҫ����֧��,������ϵ����/ά����Ա<QQ100807851>
 @��Ӧ���Ѿ��յ�һ��Affero GNUͨ�ù�����Ȩ
 -�������,����ϸ�鿴http://www.gnu.org/licenses/*
*/
/*@
1602000   սʿ��һת����Ч��14��
1602001   ħ��ʦ��һת����Ч��14��
1602002   �����ֵ�һת����Ч��14��
1602003   ������һת����Ч��14��
*/
var texiao="#v1602000##v1602001##v1602002##v1602003#";
var mz = "#b�̲�ð�յ�#k";//��Ϸ����
var itemname1= "������Ϸ����";
var yikexing ="������";
var erxing ="������";
var sanxing="������";
var sixing="������";
var wuxing="������";
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
	text += "��ӭ����"+mz+"\r\n��ȡ���������Ҫ���˹��� #r10#k ֻ.���˹��� #r"+ cm.getChar().getsg() +"#k ֻ"
	text += "\r\n#L2##b��Ϸ����#k"; 
	text += "\r\n#L1##b��ȡ��������������������Ǽ���ָ��#k";
        cm.sendSimple(text);
    } else if (status == 1) {
           if (selection == 0) {      
	   cm.warp(910000000); 
           cm.dispose(); 
    }else if  (selection == 1) {                    
	  	   if ((cm.getChar().getsg() >= 0)&&(cm.getChar().getsg2() == 0)){ 
                   cm.getChar().setsg2(1);
                   cm.getPlayer().gainsg(-1); 
                   //1002419 1122019 5030001 5071000
		   cm.sendOk("��ϲ����ȡ��#b���������#k��Ʒ�嵥���£�\r\n#v1002419##v1112423##v1122019##v1142000##v5071000##v1052023#");
                   cm.gainItem(1052023,1); //������װ
                   cm.gainItem(1002419,1); //��Ҷñ
                   cm.gainItem(1122019,1); //ð��֮xin
                   cm.gainItem(5150000,1); 
		   cm.gainMeso(100000);
                   cm.gainItem(1142000,1); //ð��ѫ��֮��
                   cm.gainItem(5071000,1); //����
                     var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();	
            var type = ii.getInventoryType(1112423); //���װ��������
            var toDrop = ii.randomizeStats(ii.getEquipById(111242)).copy(); // ����һ��Equip��
            toDrop.setOwner(yikexing);
toDrop.setLocked(1);
toDrop.setStr(3);
toDrop.setDex(3);
toDrop.setInt(3);
toDrop.setLuk(3);
toDrop.setMatk(3);	
toDrop.setWatk(3);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
cm.getChar().saveToDB(true);
                   cm.serverNotice("���: " + cm.c.getPlayer().getName() + " ͨ����������Ĵ��Բ��ԣ�������̤����ð����;��");
                   cm.mapMessage("[����][ð��֮��]���������صĹ�â������ޱޱ�����԰�����.");	
		   cm.dispose();
	   }else{
		   cm.sendOk("��ȡ������������Ҫ��ɱ���� #r10#k ֻ.\r\n#b��û��ͨ����������,�����Ѿ���ȡ��һ���ˣ�");
		   cm.dispose();
	   }
    }else if  (selection == 3) { //սʿ
               cm.openNpc(10202); 
    }else if  (selection == 2) {      
           cm.sendOk("#e#b��ӭ����"+mz+" "+mz+"��������ʣ�#n#k\r\n��������<\r\n#b��Ϸתְ��ȥ��Npc���к�\r\n���������npc���Խ��븱����ս\r\nɱ�ֽ���npc��ȥ������в鿴\r\n��õ����ȥ�鿴��ԴNpc\r\n#k1.����Ϊ����¹ٷ�ģʽ��Ӫ.������ð��չٷ�Ϊ��׼���޸�.\r\n2.��ҿ����������е�һЩ��Ȥ.�ܾ���̬��һ�в�ƽ��Ԫ��.\r\n����Ϊ�޸��̶����Ƶķ�.�����ȶ�,#d������Ա,����װ��,��̬����#k.��ӭ��ϲ����̬�������פ.\r\n3.����ÿ�춼�ڸ�����Ϸ������,���������#b������,��������#k.\r\n                     #n                  ð�յ�");
		cm.dispose();	
    }else if  (selection == 4) { //��ʦ
          cm.openNpc(10201); 
    }else if  (selection == 5) {//����
           cm.openNpc(10203); 
    }else if  (selection == 6) {//������
	cm.openNpc(10200); 
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



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
 -�������,����ϸ�鿴http://www.gnu.org/licenses/*
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
	text += "#b�𾴵������ã����ǿ��ʹ��NPC��\r\n�ҿ��Զһ�����ѯ���ַ���\r\n#k"
	text += "#e#d#L1#ʹ��#r1000����Ҷ��ȡ1000�����~��#l#b\r\n"; 
	text += "#d#L3#ʹ��#r1��ӡ�ڰ��ϰ�����#k#d��ȡ��Ʒ#r�����ӡ���װ����#l\r\n";
	text += "#d#L2#ʹ��#r��սPQ����#b�һ�#r����PQר����Ʒ����~��#l\r\n";
        text += "#d#L4#ʹ��#r300�������ѩ��#b��ȡ#r����װ������~��#l";
   cm.sendSimple(text);
    } else if (status == 1) {
           if (selection == 0) {      
	   cm.warp(910000000); 
           cm.dispose(); 
    }else if  (selection == 1) {     //��ȡ���                  
	 cm.openNpc(9310060);
          cm.dispose();
    }else if  (selection == 2) {     //PQ�һ�
	   cm.openNpc(9310100);
    }else if  (selection == 3) {      //��һ�
           cm.openNpc(2111005);		           
    }else if  (selection == 4) {    //����װ���һ�
	   cm.openNpc(2084000); 
	   cm.dispose();
    }else if  (selection == 5) {
           cm.openNpc(9030100); 
    }else if  (selection == 6) {
	   cm.openNpc(1012105); 
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



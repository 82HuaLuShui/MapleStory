/*
        �����ļ���Ver.079 �̲�˷���һ�����˵ĺ����ļ�֮һ��
  Ŀǰ��Ȩ (C) 2010��   Vr001 ����             <492214831@qq.com>
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
                
   cm.sendOk("��лʹ��.");
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
	text += " #r�����ļ���Ver.079 �̲�˵�һ�����˵ĺ����ļ�֮һ��#k\r\n"
	text += "Ŀǰ��Ȩ (C) 2015��  #bС�һ�<492214831@qq.com>#k\r\n"; 
	text += "***************************************************\r\n";
	text += "֮ǰ��Ա (C) 2015��   #bС�һ�<492214831@qq.com>#k\r\n";
	//text += "                #bMatthias Butz<matze@odinms.de>#k\r\n";
	//text += "         #bJan Christian Meyer <vimes@odinms.de>#k\r\n";
	text += "***************************************************\r\n";
	text += " @�÷����Ŀǰά����Ա:#bС�һ�#k\r\n";
	text += " @����ļ���������ʽ.�������������\r\n";
	text += " @������򷢲���Ŀ������������������\r\n";
	text += " @�������Ҫ����֧��,������ϵ����/ά����Ա#dQQ492214831#k\r\n";
	text += " @��Ӧ���Ѿ��յ�һ��#bAffero GNUͨ�ù�����Ȩ#k\r\n";
	text += " @�������,����ϸ�鿴#b��վ��http://ormxd.xicp.net/#k"
	text += " \r\n#L1#�鿴����"
   cm.sendSimple(text);
    } else if (status == 1) {
           if (selection == 0) {      
	   cm.warp(910000000); 
           cm.dispose(); 
    }else if  (selection == 1) {                    
	   cm.sendOk("#e��Ϸ����:#n\r\n#e����#b������Ա/BTװ��/BT����/BT��Ʒ/#n#k��\r\n����Ϊ����������!����Ϊ4��!˫����/�����׹�����Ի�þ���ļӳ�Ч��!#b4 * 2 * 2 = 16#k ��!\r\n����ֻΪ��Щϲ������,׷��ƽ��,ϲ����Bt������Ƶ�,�����ϲ��Bt��.����ȥ��ķ���!\r\n�������ڲ�����,���Ƕ��⿪�Ų���.�������Իᱣ��.������Ҫ�����ɾ��.\r\n�����޸�����ϵͳ.�������þ���.Զ��ְҵ�Ĺ���ϵͳ.�Լ��ܶ�ط����޸���!\r\n#r�����͵�������!#k\r\n����Ź���.���������Ϸ�����г�С�㴦#k�鿴��������!\r\n����㻹������,��������#d@����#k�鿴!!\r\n");
           cm.dispose();
    }else if  (selection == 2) {
	   cm.openNpc(9310057);
    }else if  (selection == 3) {      
           cm.openNpc(9310059);		           
    }else if  (selection == 4) {
	   cm.openShop(223); 
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



/*
*		�ڶ���
*		XIOXMS
*/
importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.server.life);
importPackage(java.awt);
var playerStatus;
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
                
   cm.sendOk("��ô�졣��");
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
	text += "#b��һ�ؾ��������������ǿBOSS�ˣ�HP��MP���ǳ�BT������Ӧ�úú�˼��һ���ǲ���Ҫ�����ǵ���Ա����һ��ȥ������"
	text += "\r\n#L1##r�ٻ�����";
        text += "\r\n#L2##b������һ��#k"; 
        cm.sendSimple(text);
    } else if (status == 1) {
           if (selection == 0) {      
	   cm.warp(910000000); 
           cm.dispose(); 
    }else if  (selection == 1) {     
		var party = cm.getPlayer().getParty();	
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("��ҪС���鳤Ȩ�ޣ�");
                    cm.dispose();
		//cm.getChar().setsg2(2);
		//cm.gainItem(4001117,-1);
		//cm.givePartyExp(40000);
		//cm.gainExp(30000);
	  	//cm.summonMob(9300184, 1000, 500, 1);//��10WѪ
                cm.dispose();
                }else if (cm.getChar().getsg2() == 21){ 
                             cm.sendOk("�Ѿ��ٻ��ˣ���������ˣ���ѡ�������һ�ء�");
                             cm.dispose();
        }else {
        cm.getChar().setsg2(21); //��5��
       cm.summonMob(9300287, 10000000, 70000, 1); //������
        cm.dispose();
}

    }else if  (selection == 2) {
if (cm.getChar().getsg2() <= 20){ 
                             cm.sendOk("���������ٻ��Ĺ��");
                             cm.dispose();     
     }else  var map =cm.getChar().getMap();
    if(map.countMobOnMap() >= 1){
cm.sendOk("������ǰ������ܽ�����һ��");
cm.dispose();
    }else{
     cm.warpParty(970032200);//������һ����ͼ
     cm.givePartyExp(6000);
     cm.showEffect("quest/party/clear");
     cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"[�����ܶ�Ա]" + " : " + " [" + cm.getPlayer().getName() + "]��С������˵�21�׶���ս����������һ�ؿ���",true).getBytes()); 
     cm.dispose();
}
    }else if  (selection == 3) {      
           cm.sendOk("");
		cm.dispose();	
    }else if  (selection == 4) {
          cm.sendOk("");
		cm.dispose();
    }else if  (selection == 5) {
           cm.openNpc(9030100); 
    }else if  (selection == 6) {
	  cm.sendOk("");
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
}}}

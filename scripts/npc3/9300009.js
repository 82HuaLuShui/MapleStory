importPackage(net.sf.odinms.client); 
importPackage(net.sf.odinms.tools); 
importPackage(net.sf.odinms.server);
function start() {
 status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {
 if (mode == -1 || status == 2) {
  cm.dispose();
 } else {
  if (status == 0 && mode == 0) {
   cm.sendOk("�õ�,ϣ���Ժ󻹿��Լ������!");
   status = 2;
   return;
  }
  if (mode == 1)
   status++;
  else
   status--; 

  if (status == 0) {
	  cm.sendNextPrev("#rȷ�����Ѿ������·�����");
          }else if (status == 1 ) {			  
     if (cm.haveItem(4031159,1)){ 
            cm. sendOk("#b����ǽ��֤�飬������ʯ����������Ϊ���Ǿ�����ʯ���İ���أ�\r\n\r\n\r\n#b������#B5%##b[40%]\r\n\r\n\r\n");        				
						cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"���������" + " : ��" + cm.getPlayer().getName() +"�����ڽ�����ʯ������",true).getBytes());
												cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"���������" + " : ��" + cm.getPlayer().getName() +"�����ڽ�����ʯ������",true).getBytes());
																		cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"���������" + " : ��" + cm.getPlayer().getName() +"����ʯ��������ɣ���ϲ��" + cm.getPlayer().getName() +"���»���֣����붴���󣬽���ʼ�������Ƕ��˵Ļ������磡",true).getBytes());
																								cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"���������" + " : ��" + cm.getPlayer().getName() +"����ʯ��������ɣ���ϲ��" + cm.getPlayer().getName() +"���»���֣����붴���󣬽���ʼ�������Ƕ��˵Ļ������磡",true).getBytes());
																													cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"���������" + " : ��" + cm.getPlayer().getName() +"��ˮ����������ɣ���ϲ��" + cm.getPlayer().getName() +"���»���֣����붴���󣬽���ʼ�������Ƕ��˵Ļ������磡",true).getBytes());
			cm.dispose();	
}else if (cm.haveItem(4031158,1)){ 
cm.sendOk("#b����ǽ��֤�飬��Ļ�������ˮ��������\r\n\r\n\r\n#b������#B10%##b[10%]\r\n\r\n\r\n���ڴ������ǽ��볡��...");
						cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(3,cm.getC().getChannel(),"���������" + " : ��" + cm.getPlayer().getName() +"�����ڽ���ˮ��������",true).getBytes());
												cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(3,cm.getC().getChannel(),"���������" + " : ��" + cm.getPlayer().getName() +"�����ڽ���ˮ��������",true).getBytes());
																		cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(3,cm.getC().getChannel(),"���������" + " : ��" + cm.getPlayer().getName() +"��ˮ����������ɣ���ϲ��" + cm.getPlayer().getName() +"���»���֣�",true).getBytes());
																								cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(3,cm.getC().getChannel(),"���������" + " : ��" + cm.getPlayer().getName() +"��ˮ����������ɣ���ϲ��" + cm.getPlayer().getName() +"���»���֣�",true).getBytes());
																													cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(3,cm.getC().getChannel(),"���������" + " : ��" + cm.getPlayer().getName() +"��ˮ����������ɣ���ϲ��" + cm.getPlayer().getName() +"���»���֣�",true).getBytes());
			cm.dispose();	

cm.dispose();
}else if (cm.haveItem(4031157,1) ){ 
 cm.sendOk("#bŶ�������Ѿ�ӵ������֤ͨ�飡\r\n\r\n\r\n#b������#B100%##b[100%]\r\n\r\n\r\n������ϣ�...");
						cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(5,cm.getC().getChannel(),"���������" + " : ��" + cm.getPlayer().getName() +"�����ڽ�����ͨ������",true).getBytes());
												cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(5,cm.getC().getChannel(),"���������" + " : ��" + cm.getPlayer().getName() +"�����ڽ�����ͨ������",true).getBytes());
																		cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(5,cm.getC().getChannel(),"���������" + " : ��" + cm.getPlayer().getName() +"����ͨ��������ɣ���ϲ��" + cm.getPlayer().getName() +"���»���֣�",true).getBytes());
																								cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(5,cm.getC().getChannel(),"���������" + " : ��" + cm.getPlayer().getName() +"����ͨ��������ɣ���ϲ��" + cm.getPlayer().getName() +"���»���֣�",true).getBytes());
																													cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(5,cm.getC().getChannel(),"���������" + " : ��" + cm.getPlayer().getName() +"����ͨ��������ɣ���ϲ��" + cm.getPlayer().getName() +"���»���֣�",true).getBytes());
                        }else{ 
						
                        cm.sendOk("#r����û�н��֤�飡#k\r\n��18��������������\r\n�����18��Ļ��������ߣ����Ǹ���������֤���"); 
						cm.dispose();
                        } 
						 }else if (status == 2 ) {	
						 cm.warp(910000000);
        }}
}
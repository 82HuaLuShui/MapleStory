importPackage(net.sf.odinms.client); 
importPackage(net.sf.odinms.tools); 
importPackage(net.sf.odinms.server);


var chance1 = Math.floor(Math.random()*200+1);
var chance2 = Math.floor(Math.random()*50);
var chance3 = (Math.floor(Math.random()*20)+1);
var chance4 = Math.floor(Math.random()*2+1);
var itemchance = chance1 + chance2 + chance3 * chance4;
var status = 0;

function start() 
	{
	status = -1;
	action(1, 0, 0);


	}

function action(mode, type, selection)
{
	if (mode == -1)
	{
		cm.dispose();
	}
	else if (mode == 0)
	{
		cm.sendOk("�õ����Ҫ��ȥ��ʱ������.");
		cm.dispose();
	}else 
	{
		if (mode == 1)
			status++;
		else
			status--;		
	if (status == 0)
	{		
		cm.sendYesNo(""+ cm.getChar().getName() +"���,��ǰʱ����#b" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��\r\n#k��ʱ��ﵽ#r21:00-21:05#k֮��,������������������~\r\n���ÿ�ε���л����õ��.\r\n����5����ʱ��,��˭��Ŀ�!" );	
	}
	else if (status == 1) {
		if (cm.getHour() < 21 ||cm.getHour() > 21) {
cm.sendOk("�ʱ�仹û��.\r\n#r���ڷ�����ʱ��:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��");
cm.dispose();
 } else if (cm.getMin() > 5) {
cm.sendOk("�Ѿ�����Ŷ.\r\n#r���ڷ�����ʱ��:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��");
cm.dispose();

 }else if (cm.getPlayer().getDojoPoints() >= 0) {
       if ((itemchance >= 30) && (itemchance <= 50)) { 
var zz =1;
cm.gainNX(zz);
cm.serverNotice("[�����]:[" + cm.getPlayer() + "]��������"+zz+"���.");
cm.dispose();
}else if ((itemchance >= 51) && (itemchance <= 55)) { 
var zz =2;
cm.gainNX(zz);
cm.serverNotice("[�����]:[" + cm.getPlayer() + "]��������"+zz+"���.");
cm.dispose();
}else if ((itemchance >= 56) && (itemchance <= 60)) { 
var zz =3;
cm.gainNX(zz);
cm.serverNotice("[�����]:[" + cm.getPlayer() + "]��������"+zz+"���.");
cm.dispose();
}else if ((itemchance >= 61) && (itemchance <= 62)) { 
var zz =4;
cm.gainNX(zz);
cm.serverNotice("[�����]:[" + cm.getPlayer() + "]��������"+zz+"���.");
cm.dispose();
}else if ((itemchance >= 63) && (itemchance <= 64)) { 
var zz =5;
cm.gainNX(zz);
cm.serverNotice("[�����]:[" + cm.getPlayer() + "]��������"+zz+"���.");
cm.dispose();
}else if ((itemchance >= 65) && (itemchance <= 66)) { 
var zz =6;
cm.gainNX(zz);
cm.serverNotice("[�����]:[" + cm.getPlayer() + "]��������"+zz+"���.");
cm.dispose();
}else if ((itemchance >= 67) && (itemchance <= 68)) { 
var zz =7;
cm.gainNX(zz);
cm.serverNotice("[�����]:[" + cm.getPlayer() + "]��������"+zz+"���.");
cm.dispose();
}else if ((itemchance >= 69) && (itemchance <= 70)) { 
var zz =8;
cm.gainNX(zz);
cm.serverNotice("[�����]:[" + cm.getPlayer() + "]��������"+zz+"���.");
cm.dispose();
}else if ((itemchance >= 71) && (itemchance <= 80)) { 
var zz =9;
cm.gainNX(zz);
cm.serverNotice("[�����]:[" + cm.getPlayer() + "]��������"+zz+"���.");
cm.dispose();
}else if ((itemchance >= 90) && (itemchance <= 100)) { 
var zz =10;
cm.gainNX(zz);
cm.serverNotice("[�����]:[" + cm.getPlayer() + "]��������"+zz+"���.");
cm.dispose();
}else if ((itemchance >= 110) && (itemchance <= 120)) { 
var zz =11;
cm.gainNX(zz);
cm.serverNotice("[�����]:[" + cm.getPlayer() + "]��������"+zz+"���.");
cm.dispose();
}else if ((itemchance >= 130) && (itemchance <= 140)) { 
var zz =12;
cm.gainNX(zz);
cm.serverNotice("[�����]:[" + cm.getPlayer() + "]��������"+zz+"���.");
cm.dispose();
}else if ((itemchance >= 150) && (itemchance <= 160)) { 
var zz =13;
cm.gainNX(zz);
cm.serverNotice("[�����]:[" + cm.getPlayer() + "]��������"+zz+"���.");
cm.dispose();
}else if ((itemchance >= 170) && (itemchance <= 180)) { 
var zz =14;
cm.gainNX(zz);
cm.serverNotice("[�����]:[" + cm.getPlayer() + "]��������"+zz+"���.");
cm.dispose();
}else if ((itemchance >= 190) && (itemchance <= 200)) { 
var zz =15;
cm.gainNX(zz);
cm.serverNotice("[�����]:[" + cm.getPlayer() + "]��������"+zz+"���.");
cm.dispose();
}else if ((itemchance >= 210) && (itemchance <= 220)) { 
var zz =16;
cm.gainNX(zz);
cm.serverNotice("[�����]:[" + cm.getPlayer() + "]��������"+zz+"���.");
cm.dispose();
}else if ((itemchance >= 230) && (itemchance <= 240)) { 
var zz =17;
cm.gainNX(zz);
cm.serverNotice("[�����]:[" + cm.getPlayer() + "]��������"+zz+"���.");
cm.dispose();
}else if ((itemchance >= 250) && (itemchance <= 260)) { 
var zz =18;
cm.gainNX(zz);
cm.serverNotice("[�����]:[" + cm.getPlayer() + "]��������"+zz+"���.");
cm.dispose();
}else if ((itemchance >= 270) && (itemchance <= 300)) { 
var zz =19;
cm.gainNX(zz);
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"[�����]" + " : " + cm.getPlayer().getName() +" ��������"+zz+"���.��ҹ���.",true).getBytes());
cm.dispose();
}else if ((itemchance >= 310) && (itemchance <= 330)) { 
var zz =20;
cm.gainNX(zz);
cm.serverNotice("[�����]:[" + cm.getPlayer() + "]��������"+zz+"���.");
cm.dispose();
}else{
var zz =1;
cm.gainNX(zz);
cm.serverNotice("[�����]:[" + cm.getPlayer() + "]��������"+zz+"���.");
cm.dispose();}

}else if (cm.getPlayer().getDojoPoints() >= 50 ) {
if ((itemchance >= 30) && (itemchance <= 50)) { 
var zz =35;
cm.gainNX(zz);
cm.serverNotice("[�����]:[" + cm.getPlayer() + "]��������"+zz+"���.");
cm.dispose();
}else if ((itemchance >= 70) && (itemchance <= 90)) { 
var zz =21;
cm.gainNX(zz);
cm.serverNotice("[�����]:[" + cm.getPlayer() + "]��������"+zz+"���.");
cm.dispose();
}else if ((itemchance >= 110) && (itemchance <= 140)) { 
var zz =85;
cm.gainNX(zz);
cm.serverNotice("[�����]:[" + cm.getPlayer() + "]��������"+zz+"���.");
cm.dispose();
}else if ((itemchance >= 170) && (itemchance <= 200)) { 
var zz =67;
cm.gainNX(zz);
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"[�����]" + " : " + cm.getPlayer().getName() +" ��������"+zz+"���.��ҹ���.",true).getBytes());
cm.dispose();
}else if ((itemchance >= 210) && (itemchance <= 230)) { 
var zz =49;
cm.gainNX(zz);
cm.serverNotice("[�����]:[" + cm.getPlayer() + "]��������"+zz+"���.");
cm.dispose();
}else{
var zz =19;
cm.gainNX(zz);
cm.serverNotice("[�����]:[" + cm.getPlayer() + "]��������"+zz+"���.");
cm.dispose();}
 
		 }else {
cm.sendOk("�ʱ�仹û��.\r\n#r���ڷ�����ʱ��:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��");
		cm.dispose();	
	}
}
}}
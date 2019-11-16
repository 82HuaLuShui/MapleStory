//��о����

importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.server.life);
importPackage(java.awt);

var status;

var exp = 8000;
			
function start() {
	status = -1;
	playerStatus = cm.isLeader();
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		var eim = cm.getChar().getEventInstance();
		var stage2status = eim.getProperty("stage2status");
		if (stage2status == null) {
			if (playerStatus) { // Leader
				var map = eim.getMapInstance(cm.getChar().getMapId());
				var passes = cm.haveItem(4001022,15);
				var stage2leader = eim.getProperty("stage2leader");
				if (stage2leader == "done") {
					if (passes) {
						// Clear stage
						cm.sendNext("��ϲ��ͨ���˵ڶ��أ���ͨ����һ�صĴ��ţ�");
						party = eim.getPlayers();
						map = cm.getMapId();
						cm.removeAll(4001022);
						//cm.gainItem(4001022, -15);
						clear(2,eim,cm);
						cm.givePartyExp(exp, party);
						cm.dispose();
					} else { // Not done yet
						cm.sendNext("�ռ��� 15 ��ͨ��֤��������ռ����˿��������ң��һ�Ϊ�㿪����һ�صĴ��š�");
					}
					cm.dispose();
				} else {
					cm.sendOk("��ӭ�����ڶ��أ������Ƿ���������������������������������ǡ��õ�ͨ��֤15�Ÿ��ҶԻ���");
					eim.setProperty("stage2leader","done");
					cm.dispose();
				}
			} else { // Members
				cm.sendNext("��ӭ�����ڶ��أ������Ƿ���������������������������������ǡ��õ�ͨ��֤15�Ÿ��ҶԻ���");
				cm.dispose();
			}
		} else {
			cm.sendNext("��ϲ��ͨ���˵ڶ��أ���ͨ����һ�صĴ��ţ�");
			cm.dispose();
		}
	}
}

function clear(stage, eim, cm) {
	eim.setProperty("stage" + stage.toString() + "status","clear");
	var packetef = MaplePacketCreator.showEffect("quest/party/clear");
	var packetsnd = MaplePacketCreator.playSound("Party1/Clear");
	var packetglow = MaplePacketCreator.environmentChange("gate",2);
	var map = eim.getMapInstance(cm.getChar().getMapId());
	map.broadcastMessage(packetef);
	map.broadcastMessage(packetsnd);
	map.broadcastMessage(packetglow);
	var mf = eim.getMapFactory();
	map = mf.getMap(922010200);
	var nextStage = eim.getMapInstance(922010300);
	var portal = nextStage.getPortal("next00");
	if (portal != null) {
		portal.setScriptName("lpq3");
	}
}
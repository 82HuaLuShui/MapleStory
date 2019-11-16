//��о����

importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.server.life);
importPackage(java.awt);

var status;

var exp = 10000;
			
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
		var stage5status = eim.getProperty("stage5status");
		if (stage5status == null) {
			if (playerStatus) { // Leader
				var map = eim.getMapInstance(cm.getChar().getMapId());
				var passes = cm.haveItem(4001022,24);
				var stage5leader = eim.getProperty("stage5leader");
				if (stage5leader == "done") {
					if (passes) {
						// Clear stage
						cm.sendNext("��ϲ��ͨ�����أ���ͨ�����ſ�����һ���ؿ���");
						party = eim.getPlayers();
						map = cm.getMapId();
						cm.removeAll(4001022);
						//cm.gainItem(4001022, -24);
						clear(5,eim,cm);
						cm.givePartyExp(exp, party);
						cm.dispose();
					} else { // Not done yet
						cm.sendNext("�ռ��� 24��ͨ��֤���� �ռ������ҿ��Ը��㿪����һ�صĴ��š�");
					}
					cm.dispose();
				} else {
					cm.sendOk("��ӭ���������أ��ռ�24��ͨ��֤�ҾͿ��Ը��㿪����һ�صĴ��š�");
					eim.setProperty("stage5leader","done");
					cm.dispose();
				}
			} else { // Members
				cm.sendNext("��ӭ���������أ��ռ�24��ͨ��֤�ҾͿ��Ը��㿪����һ�صĴ��š�");
				cm.dispose();
			}
		} else {
			cm.sendNext("��ϲ��ͨ�����أ���ͨ�����ſ�����һ���ؿ���");
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
	map = mf.getMap(922010500);
	var nextStage = eim.getMapInstance(922010600);
	var portal = nextStage.getPortal("next00");
	if (portal != null) {
		portal.setScriptName("lpq6");
	}
	var stageSeven = eim.getMapInstance(922010700);
	var stageSevenPortal = stageSeven.getPortal("next00");
	if (stageSevenPortal != null) {
		stageSevenPortal.setScriptName("lpq7");
	}
}
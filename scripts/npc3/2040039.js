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
		var stage4status = eim.getProperty("stage4status");
		if (stage4status == null) {
			if (playerStatus) { // Leader
				var map = eim.getMapInstance(cm.getChar().getMapId());
				var passes = cm.haveItem(4001022,6);
				var stage4leader = eim.getProperty("stage4leader");
				if (stage4leader == "done") {
					if (passes) {
						// Clear stage
						cm.sendNext("��ϲ��ͨ�����أ����Ѿ�Ϊ�㳨����һ�صĴ��ţ�");
						party = eim.getPlayers();
						map = cm.getMapId();
						cm.removeAll(4001022);
						//cm.gainItem(4001022, -6);
						clear(4,eim,cm);
						cm.givePartyExp(exp, party);
						cm.dispose();
					} else { // Not done yet
						cm.sendNext("�ռ��� 6��ͨ�ؿ� ����");
					}
					cm.dispose();
				} else {
					cm.sendOk("��ӭ������6�أ��򵽲��ںڰ�֮�еĹ����� 6 ��ͨ�ؿ��Ϳ���ͨ�����ء�");
					eim.setProperty("stage4leader","done");
					cm.dispose();
				}
			} else { // Members
				cm.sendNext("��ӭ������6�أ��򵽲��ںڰ�֮�еĹ����� 6 ��ͨ�ؿ��Ϳ���ͨ�����ء�");
				cm.dispose();
			}
		} else {
			cm.sendNext("��ϲ��ͨ�����أ����Ѿ�Ϊ�㳨����һ�صĴ��ţ�");
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
	map = mf.getMap(922010400);
	var nextStage = eim.getMapInstance(922010500);
	var portal = nextStage.getPortal("next00");
	if (portal != null) {
		portal.setScriptName("lpq5");
	}
}
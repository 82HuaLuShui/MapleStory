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
		var stage1status = eim.getProperty("stage1status");
		if (stage1status == null) {
			if (playerStatus) { // Leader
				var map = eim.getMapInstance(cm.getChar().getMapId());
				var passes = cm.haveItem(4001022,25);
				var stage1leader = eim.getProperty("stage1leader");
				if (stage1leader == "done") {
					if (passes) {
						// Clear stage
						cm.sendNext("��ϲ�������Ѿ�ͨ���˵�һ�أ��봫�Ϳ�������һ�صĴ��ţ�");
						party = eim.getPlayers();
						map = cm.getMapId();
						cm.removeAll(4001022);
						//cm.gainItem(4001022, -25);
						clear(1,eim,cm);
						cm.givePartyExp(exp, party);
						cm.dispose();
					} else { // Not done yet
						cm.sendNext("�ռ��� #b25 ��ͨ��֤#k ���� ������ռ��ˣ��Ҿ͸��㿪����һ�ص��ſ���");
					}
					cm.dispose();
				} else {
					cm.sendOk("��ӭ������һ�أ���������İ�ɫ����ͺ�ɫ�������𣿲�Ҫ�£������ǣ������������ռ���25��ͨ�ؿ��Ϳ����������ˡ�");
					eim.setProperty("stage1leader","done");
					cm.dispose();
				}
			} else { // Members
				cm.sendNext("��ӭ������һ�أ���������İ�ɫ����ͺ�ɫ�������𣿲�Ҫ�£������ǣ������������ռ���25��ͨ�ؿ��Ϳ����������ˡ�");
				cm.dispose();
			}
		} else {
			cm.sendNext("��ϲ�������Ѿ�ͨ���˵�һ�أ��봫�Ϳ�������һ�صĴ��ţ�");
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
	map = mf.getMap(922010100);
	var nextStage = eim.getMapInstance(922010200);
	var portal = nextStage.getPortal("next00");
	if (portal != null) {
		portal.setScriptName("lpq2");
	}
}
//ʥ������

importPackage(net.sf.odinms.tools);
importPackage(net.sf.odinms.server.life);
importPackage(java.awt);

var status;

var exp = 12000;
			
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
		var stage7status = eim.getProperty("stage7status");
		if (stage7status == null) {
			if (playerStatus) { // Leader
				var map = eim.getMapInstance(cm.getChar().getMapId());
				var passes = cm.haveItem(4001022,3);
				var stage7leader = eim.getProperty("stage7leader");
				if (stage7leader == "done") {
					if (passes) {
						// Clear stage
						cm.sendNext("��ϲ��ͨ�أ����ƶ�����һ���ؿ���");
						party = eim.getPlayers();
						map = cm.getMapId();
						cm.removeAll(4001022);
						//cm.gainItem(4001022, -3);
						clear(7,eim,cm);
						cm.givePartyExp(exp, party);
						cm.dispose();
					} else { // Not done yet
						cm.sendNext("�ռ������� ͨ��֤����");
					}
					cm.dispose();
				} else {
					cm.sendOk("��ӭ���������أ���ﵽ�������ֻ����������ͨ��֤���ҶԻ���");
					eim.setProperty("stage7leader","done");
					cm.dispose();
				}
			} else { // Members
				cm.sendNext("��ӭ���������أ���ﵽ�������ֻ����������ͨ��֤���ҶԻ���");
				cm.dispose();
			}
		} else {
			cm.sendNext("��ϲ��ͨ�أ����ƶ�����һ���ؿ���");
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
	map = mf.getMap(922010700);
	var nextStage = eim.getMapInstance(922010800);
	var portal = nextStage.getPortal("next00");
	if (portal != null) {
		portal.setScriptName("lpq8");
	}
}

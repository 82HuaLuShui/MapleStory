/***************************
*     ��Vr001 ���� ONLINE��    *
****************************
*    1061014  -  ��Ӱ      *
*    PQ������ħ��ĩ��      *
***************************/

var status = 0;

var minLevel = 70; //��͵ȼ�
var maxLevel = 120; //��ߵȼ�

var minPartySize = 1; //���ٳ�Ա
var maxPartySize = 6; //����Ա

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			// �������һ�������.û�е���.ֱ�Ӽ���������
			if (cm.getParty() == null) { // �������
				cm.sendOk("#b����ħ��ĩ��#kPQ���� - ����ɻ�����\r\n\r\n#e#b��¶˹֮��#k     #d��������#k    #r�������ð�ձ�\r\n*******************************************\r\n#n#b����ϵͳ�ж���û�����.���޷���ս���PQ����\r\n#b��ӵ���Լ�����Ӻ��öӳ������ҶԻ���\r\n\r\n���������\r\nĿǰ�Ѿ���ɸ���ս #r"+cm.getboss()+"#k #b�Σ�");
				cm.mapMessage("����������ս�����У����ܹ������ "+cm.getboss()+" �Σ�");		
				cm.dispose();
			} else if (!cm.isLeader()) { // �����鳤
				cm.sendOk("����������#b����ͨ����#kPQ���������#bС���鳤#k���ҶԻ�.");
				cm.mapMessage("����������ս�����У����ܹ������ "+cm.getboss()+" �Σ�");
				cm.dispose();
			} else {
				// Check if all party members are within PQ levels
				var party = cm.getParty().getMembers();
				var mapId = cm.getPlayer().getMapId();
				var next = true;
				var levelValid = 0;
				var inMap = 0;
				var it = party.iterator();
				while (it.hasNext()) {
					var cPlayer = it.next();
					if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
						levelValid += 1;
					} else {
						next = false;
					}
					if (cPlayer.getMapid() == mapId) {
						inMap += 1;
					}
				}
				if (party.size() < minPartySize || party.size() > maxPartySize || inMap < minPartySize) {
					next = false;
				}
				if (next) { //���ػ�ű�
					var em = cm.getEventManager("Vr001 ����pq");
					cm.serverNotice("���: " + cm.c.getPlayer().getName() + " ��С�������PQ!!");
					if (em == null) {
						cm.sendOk("�޷���������ű����ű����ƣ�#bVr001 ����pq#k\r\n#e����ϵ����Ա�����#kQQ#r100807851");
					} else {
						if (em.getProperty("entryPossible") != "false") {
							em.startInstance(cm.getParty(),cm.getPlayer().getMap());
							cm.removeAll(4001008);
							cm.removeAll(4001007);
							if(cm.partyMemberHasItem(4001008) || cm.partyMemberHasItem(4001007)) { 
								cm.getPlayer().getEventInstance().setProperty("smugglers", "true"); 
								cm.partyNotice("Your smuggling attempt has been detected. We will allow the attempt, but you will not get any NX cash from this run.");

							}
							em.setProperty("entryPossible", "false");
							cm.getPlayer().getEventInstance().setProperty("startTime", new java.util.Date().getTime());
						} else { // Check if the PQ really has people inside
							var playersInPQ = 0;
							for (var mapid = 970030204; mapid <= 970030204; mapid++) {
								playersInPQ += cm.countPlayersInMap(mapid);
							}
							if (playersInPQ <= 1)
								em.setProperty("entryPossible", "true");
							cm.sendOk("�Ѿ���С������˸�PQ�����Ժ����ԣ�");
						}
					}
					cm.dispose();
				} else {
					cm.sendNext("#r��Ҫ��ӳ�Ա:" + minPartySize + " ����ҡ� �ȼ���Χ,��� " + minLevel + "�� ��� " + maxLevel + "��.\r\n\r\n#k#b�������С���Ƿ�ﵽ������������");
					cm.dispose();
				}
			}
		}
	}
}

var status;
var minLevel = 71; //��͵ȼ�
var maxLevel = 200; //��ߵȼ�
var exp1 = 25000;
var exp2 = 25000;
var exp3 = 30000;
var exp4 = 40000;
var exp5 = 50000;
var minPartySize = 3; //���ٳ�Ա
var maxPartySize = 6; //����Ա
function start() {
status = -1;

action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    switch(cm.getPlayer().getMapId()) {
	case 100000200:
		cm.removeAll(4001130);
		cm.removeAll(4001131);
		cm.removeAll(4001159);
		cm.removeAll(4031777);
		cm.removeAll(4001160);
		cm.removeAll(4031779);
		cm.removeAll(4031778);
	    if (cm.getParty() == null) { // No Party
				cm.sendOk("����Ҫ��ս#b����ŷ������Ҷ#k��?��ô������Ҫ��һ�������!\r\n���ȼ�Ҫ��:71��-101��.\r\n������Ҫ��:3~6��\r\n#k��������:#bδ֪.");
				cm.dispose();
            } else if (!cm.isLeader()) { // Not Party Leader
				cm.sendOk("�����Ҫ��ս#b����ŷ������Ҷ�������#k�������ǵ�#b��ӳ�#k�����Ұ�!.");
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
				if (next) {
					var em = cm.warpParty(926100000);
                                        cm.getMap(926100000).addMapTimer(6000, 261000011);
					if (em == null) {
						cm.sendOk("���ѽ��븱����ͼ.��鿴���NPC�˽⸱��");
					} else {
						if (em.getProperty("entryPossible") != "false") {
							// Begin the PQ.
							em.startInstance(cm.getParty(),cm.getPlayer().getMap());
							// Remove Passes and Coupons
							
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
							for (var mapid = 926100000; mapid <= 926100700; mapid++) {
								playersInPQ += cm.countPlayersInMap(mapid);
							}
							if (playersInPQ <= 1)
								em.setProperty("entryPossible", "true");
							cm.sendOk("Another party has already entered the #rKerning Party Quest#k in this channel. Please try another channel, or wait for the current party to finish.");
						}
					}
					cm.dispose();
			} else {
					cm.sendNext("����Ҫ��ս#b����ŷ������Ҷ#k��?��ô������Ҫ��һ�������!\r\n���ȼ�Ҫ��:71��-101��.\r\n���ӳ�Ҫ��:#r3~6��.\r\n#k��������:#b����.#k\r\n\r\n������ӱ�����#b3~6#k����Ա,���Ҷ��ڴ˵�ͼ��.\r\n�ȼ�������#b71-#b101#k��֮��!\r\nĿǰֻ��#b" + inMap + "λ��Ա#k�ڴ˵�ͼ!.");
					cm.dispose();
				}
			}
	    break;
	case 926100000:
		if (!cm.isLeader()) { // Not Party Leader
		cm.sendOk("����أ�#b����ŷ������Ҷ���������#k�������ǵ�#b��ӳ�#k�����Ұ�!.");
		cm.dispose();
		}else if (cm.haveItem(4001130,10) && cm.haveItem(4001131,10)) {
		cm.givePartyExp(+exp1);
		cm.warpParty(926100001);
		cm.removeAll(4001130);
		cm.removeAll(4001131);
	    } else {
		cm.sendOk("��ͨ�أ� ȥɱ�������ռ�\r\n10��#v4001130#\r\n10��#v4001131#");
	    }
	    break;
	case 926100001:
	    if (!cm.isLeader()) { // Not Party Leader
		cm.sendOk("����أ�#b����ŷ������Ҷ���������#k�������ǵ�#b��ӳ�#k�����Ұ�!.");
		cm.dispose();
		}else if (cm.haveItem(4001159,50)) {
		cm.givePartyExp(+exp2);
		cm.warpParty(926100200);
		cm.removeAll(4001159);
		cm.gainItem(4031777, 1);
	    } else {
		cm.sendOk("��ͨ�أ� ȥɱ�������ռ�50��#v4001159#����!");
	    }
	    break;
	case 926100200:
	    if (!cm.isLeader()) { // Not Party Leader
		cm.sendOk("����أ�#b����ŷ������Ҷ���������#k�������ǵ�#b��ӳ�#k�����Ұ�!.");
		cm.dispose();
		}else if (cm.haveItem(4001160,50)) {
		cm.givePartyExp(+exp3);
		cm.warpParty(926100500);
		cm.removeAll(4001160);
		cm.gainItem(4031779, 1);
	    } else {
		cm.sendOk("��ͨ�أ� ȥɱ�������ռ�50��#v4001160#����!");
	    }
	    break;
	case 926100400:
	    cm.setboss(1);
		cm.removeAll(4001130);
		cm.removeAll(4001131);
		cm.removeAll(4001159);
		cm.removeAll(4031777);
		cm.removeAll(4001160);
		cm.removeAll(4031779);
		cm.removeAll(4031778);
		cm.removeAll(4031806);
		cm.warp(100000200);
		break;
	case 926100500:
	   if (!cm.isLeader()) { // Not Party Leader
		cm.sendOk("����أ�#b����ŷ������Ҷ�������BOSS�ؿ�#k�������ǵ�#b��ӳ�#k�����Ұ�!.");
		cm.dispose();
		}else if (cm.haveItem(4031777,1) && cm.haveItem(4031779,1)) {
		cm.removeAll(4031777);
		cm.removeAll(4031779);
		cm.summonMob(9300139, 5000000, 10000, 1);
		}else if(cm.haveItem(4031778,1)){
		cm.givePartyExp(+exp4);
		cm.warpParty(926100600);
	    } else {
		cm.sendOk("��ͨ��BOSS�ؿ��� \r\n1��#v4031777#\r\n1��#v4031779#\r\n����!");
	    }
	    break;
	case 926100600:
	   if (!cm.isLeader()) { // Not Party Leader
		cm.sendOk("����أ�#b����ŷ������Ҷ��������ռ�BOSS�ؿ�#k�������ǵ�#b��ӳ�#k�����Ұ�!.");
		cm.dispose();
		}else if (cm.haveItem(4031778,1)) {
		cm.removeAll(4031778);
		cm.summonMob(9300140, 10000000, 10000, 1);
		}else if(cm.haveItem(4031806,1)){
		cm.givePartyExp(+exp5);
		cm.setboss(1);
		cm.warpParty(926100700);
	    } else {
		cm.sendOk("��ͨ���ռ�BOSS�ؿ���1��#v4031778#����!");
	    }
	    break;
	case 926100700:
		cm.removeAll(4001130);
		cm.removeAll(4001131);
		cm.removeAll(4001159);
		cm.removeAll(4031777);
		cm.removeAll(4001160);
		cm.removeAll(4031779);
		cm.removeAll(4031778);
	    cm.warp(100000200,0);
	    break;
    }
    cm.dispose();
}
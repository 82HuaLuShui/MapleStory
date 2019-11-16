/* Dances with Balrog
Warrior Job Advancement
Victoria Road : Warriors' Sanctuary (102000003)

Custom Quest 100003, 100005
 */

var status = 0;
var jobId;
var jobName;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 0 && status == 2) {
		cm.sendOk("�����ٿ��ǿ���.");
		cm.gainExp(100);
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		if (cm.getJob().getId() == 0) {
			if (cm.getPlayer().getLevel() >= 10) {
				cm.sendNext("��Ҫ��Ϊһλΰ���#r����#k��?");
			} else {
				cm.sendOk("�㻹û���ʸ��ܳ�Ϊ#r����#k");
				cm.dispose();
			}
		} else {
			if (cm.getPlayer().getLevel() >= 30 && cm.getJob().getId() == 400) { // ����
				if (cm.haveItem(4031012, 1)) {
					if (cm.haveItem(4031012, 1)) {
						status = 20;
						cm.sendNext("��֪�����Ѿ������תְ����!");
					} else {
						if (!cm.haveItem(4031011)) {
							cm.gainItem(4031011, 1);
						}
						cm.sendOk("��ȥ�� #r��תְҵ�̹�#k.")
						cm.dispose();
					}
				} else {
					status = 10;
					cm.sendNext("����������תְ��׼��.���ҿ���...");
				}
			} else if (cm.getPlayer().getLevel() >= 70 && cm.getJob().getId() == 410 || cm.getJob().getId() == 420) {
				if (cm.haveItem(4031057, 1)) {
					cm.sendOk("�������һ�����飬����ȥ�� #b�����#k.λ�ڱ���ѩ��#b���Ϲ���#k!");
				} else if (cm.haveItem(4031059, 1)) {
					cm.gainItem(4031057, 1);
					cm.gainItem(4031059, -1);
					//cm.warp(211000001, 0);
					cm.sendOk("�������һ�����飬����ȥ�� #b�����#k.λ�ڱ���ѩ��#b���Ϲ���#k!");
				} else {
					cm.sendOk("��, #b#h0##k! ����Ҫһ�� #b�ڷ�#k. ��ȥ�����Ԫ�ռ��ø���");
				}
				cm.dispose();
			} else if ((cm.getJob().getId() == 412 || cm.getJob().getId() == 422) && cm.isQuestActive(6141)) {
				cm.sendYesNo(" ���Ƿ���Ҫ�����ҵ�����������ҵ�ͽ��?");
				status = 30;
			} else {
				cm.sendOk("���,���Ƿ���תְ��.");
				cm.dispose();
			}
		}
	} else if (status == 1) {
		cm.sendNextPrev("һ��תְ�˾Ͳ��ܷ��ڡ�");
	} else if (status == 2) {
		cm.sendYesNo("�����Ҫ��Ϊһλ#r����#k?");
	} else if (status == 3) {
		if (cm.getJob().getId() == 0) {
			cm.changeJob(400); // ����
			cm.resetStats(4, 4, 4, 4);
		}
		cm.gainItem(1332063, 1);
		cm.gainItem(1472000, 1);
		cm.gainItem(2070000, 500);
		cm.gainItem(2070000, 500);
		cm.sendOk("תְ�ɹ�!");
		cm.dispose();
	} else if (status == 11) {
		cm.sendNextPrev("�����ѡ����Ҫתְ��Ϊһλ #r�̿�#k, #r����#k. ")
	} else if (status == 12) {
		cm.askAcceptDecline("�����ұ����Ȳ�����,��׼�������� ?");
	} else if (status == 13) {
		cm.gainItem(4031011, 1);
		//cm.warp(102040000);
		cm.sendOk("��ȥ�� #b������ת�̹�#k��λ��#b�������б�������#k.����������!");
		cm.dispose();
	} else if (status == 21) {
		cm.sendSimple("����Ҫ��Ϊʲô?#b\r\n#L0#�̿�#l\r\n#L1#����#l#k");
	} else if (status == 22) {
		var jobName;
		if (selection == 0) {
			jobName = "�̿�";
			job = 410; // FIGHTER
		} else if (selection == 1) {
			jobName = "����";
			job = 420; // PAGE
		}
		cm.sendYesNo("�����Ҫ��Ϊһλ #r" + jobName + "#k?");
	} else if (status == 23) {
		cm.changeJob(job);
		cm.gainItem(4031012, -1);
		cm.sendOk("תְ�ɹ�!");
		cm.dispose();
	} else if (status == 31) {
		if (cm.getClient().getChannelServer().getMapFactory().getMap(910300000).getCharactersSize() == 0) {
			cm.resetMap(910300000);
			cm.warp(910300000, 0);
		} else {
			cm.sendOk("��ͼ������������ң������ĵȺ�!");
		}
		cm.dispose();
	}
}


/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/* Athena Pierce
	Bowman Job Advancement
	Victoria Road : Bowman Instructional School (100000201)

	Custom Quest 100000, 100002
*/

importPackage(net.sf.odinms.client);

var status = 0;
var job;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 2) {
			cm.sendOk("����������Ժ���������.");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				if (cm.getLevel() >= 10 && cm.getChar().getDex() >= 25)
					cm.sendNext("���Ѿ�����תְ��Ϊһ�� #r������#k?");
				else {
					cm.sendOk("����Ҫ��ǿ���������,�Ҳ��ܸ�����������Ϊһ����ɫ��#r������#k.")
					cm.dispose();
				}
			} else {
				if (cm.getLevel() >= 30 
					&& cm.getJob().equals(net.sf.odinms.client.MapleJob.BOWMAN)) {
					if (cm.getQuestStatus(100000).getId() >=
						net.sf.odinms.client.MapleQuestStatus.Status.STARTED.getId()) {
						cm.completeQuest(100002);
						if (cm.getQuestStatus(100002) ==
						 net.sf.odinms.client.MapleQuestStatus.Status.COMPLETED) {
							status = 20;
							cm.sendNext("����Ϊ�������൱����. �ҽ����������һ�������������׶�.");
						} else {
							cm.sendOk("Go and see the #rJob Instructor#k.")
							cm.dispose();
						}
					} else {
						status = 10;
						cm.sendNext("��Ŀǰ�������Ľ�����ĺ����˳Ծ�.");
					}
				} else if (cm.getQuestStatus(100100).equals(MapleQuestStatus.Status.STARTED)) {
					cm.completeQuest(100101);
					if (cm.getQuestStatus(100101).equals(MapleQuestStatus.Status.COMPLETED)) {
						cm.sendOk("��ô,������ת����#bRene#k.");
					} else {
						cm.sendOk("Hey, " + cm.getChar().getName() + "! I need a #bBlack Charm#k. Go and find the Door of Dimension.");
						//cm.startquest(100101);
					}
					cm.dispose();
				} else {
					cm.sendOk("���ѡ�������ǵ�.");
					cm.dispose();
				}
			}
		} else if (status == 1) {
			cm.sendNextPrev("���Ƿǳ���ҪҲ�������������һ��ѡ��. һ����ѡ���˸�ְҵ,�㽫��Զ���ܸı�.");
		} else if (status == 2) {
			cm.sendYesNo("��������Ϊһ��#r������#k��?");
		} else if (status == 3) {
			if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER))
				cm.changeJob(net.sf.odinms.client.MapleJob.BOWMAN);
			cm.sendOk("תְ�ɹ�!��ô��������ȥΪ�˸��ߵľ�����ܶ���.");
			cm.dispose();
		} else if (status == 11) {
			cm.sendNextPrev(" ��Ϊһ��#r����#k����#r����#k,��Ӧ��������ս��һ���׶ε�׼��.")
		} else if (status == 12) {
			cm.sendAcceptDecline("�������ȵÿ����������. ��׼��������?");
		} else if (status == 13) {
			if (cm.haveItem(4031010)) {
				cm.sendOk("Please report this bug at http://odinms.de/forum/.\r\nstatus = 13");
			} else {
				//cm.startquest(100000);
				cm.sendOk("���������Ŵ���#b2ת�Ľ̹�#k ������ Henesys. ���������תְ��ָ��.");
			}
		} else if (status == 21) {
			cm.sendSimple("����תΪ�����ĸ�ְҵ��?#b\r\n#L0#����#l\r\n#L1#����#l#k");
		} else if (status == 22) {
			var jobName;
			if (selection == 0) {
				jobName = "����";
				job = net.sf.odinms.client.MapleJob.HUNTER;
			} else {
				jobName = "����";
				job = net.sf.odinms.client.MapleJob.CROSSBOWMAN;
			}
			cm.sendYesNo("��������Ϊһ��#r" + jobName + "#k?");
		} else if (status == 23) {
			cm.changeJob(job);
			cm.sendOk("תְ�ɹ�!��ô��������ȥΪ�˸��ߵľ�����ܶ���.");
		}
	}
}	

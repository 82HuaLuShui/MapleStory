/**
                �����ļ���Vr001 �������˵ĺ����ļ�֮һ��
  Ŀǰ��Ȩ (C) 2010��   Vr001 ����             <159502199@qq.com>
 * -----------------------------------------------------------*
  ֮ǰ��Ա (C) 2008��   Huy              <patrick.huy@frz.cc>
                       Matthias Butz       <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>
 * ------------------------------------------------------------*
 ��÷����Ŀǰά����Ա:Vr001 ����
 ������ļ���������ʽ.�������������
 ��������򷢲���Ŀ����������������
 ���������Ҫ����֧��,������ϵ����/ά����Ա<QQ100807851>
 ����Ӧ���Ѿ��յ�һ��Affero GNUͨ�ù�����Ȩ
 -�������,����ϸ�鿴http://www.gnu.org/licenses/*
**/

/* Vr001 ����ű���ע����Ϣ��
	NPC ����: 	      ������Ǽ�����
	Map(s): 	        ������ - �����(104000000)
	��;����:                
*/
var status = 0;
var cost;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 1 && mode == 0) {
			cm.sendNext("����������ﻹ�����Ư���ľ��㣬�������ȥ���϶��㳡����ӭ��ʱʹ�����ǵĳ��⳵����");
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("����~���������Ǽ����⳵����ͬ�ڴ���֮��������һ����а����Ǹ����ṩ���߼��ķ�����˳����е����ֻҪ֧��10000��ң����ǾͻὫ����ȫѸ�ٵ��͵�#b���϶��㳡#k�����ǵȼ�̫�ͽ�ȥ���Σ���Ƿ�Ҫ��ȥ�أ�");
		} else if (status == 1) {
if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
				cm.sendYesNo("���϶��㳡��λ�ڽ������м���Թ������������24Сʱ�ŵ������Ƿ�Ҫ��10000��Һ�ȥ���϶��㳡��");
				cost = 1000;
			} else {
				cm.sendYesNo("�˶�δ����ɹ�������ϵGM");
				cost = 10000;
			}
		} else if (status == 2) {
			if (cm.getMeso() < cost) {
				cm.sendNext("�Բ�����Ľ�Ҳ���֧�����ѡ�")
			} else {
				cm.gainMeso(-cost);
				cm.warp(105070001, 0);
			}
			cm.dispose();
		}
	}
}

/*
Vr001 ���� ONLINE
����������PQ ��һ��
*/

importPackage(net.sf.odinms.client);

function start() {
	status = -1;
	
	action(1, 0, 0);
}

function action(mode, type, selection) {
            if (mode == -1) {
                cm.dispose();
            }
            else {
                if (status >= 0 && mode == 0) {
                
			cm.sendOk("����");
			cm.dispose();
			return;                    
                }
                if (mode == 1) {
			status++;
		}
		else {
			status--;
		} 
		        if (status == 0) {
			cm.sendSimple("�٣�\r\n#k\r\n#L1##b�����콱�ص�#r<#z4031460#>#k20#r��");
//------------------------------������һ��-------------------------------
			} else if (status == 1) { 
			if (selection == 1) {
			if (cm.haveItem(4031460,20)) { 
			cm.gainItem(4031460,-20);
			cm.removeAll(4031460);
		   	cm.warp(912000000);
			cm.gainExp(300000);
			cm.mapMessage("����PQ��ս�ڶ��أ������ 30�� ����ֵ��");
                  	cm.dispose();
                   	} else {
	           	cm.sendOk("ȱ�� 20 ��#v4031460#");
			cm.dispose(); }}}}}

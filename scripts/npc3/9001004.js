/*
Vr001 ���� ONLINE
��Ҷ֮��
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
			cm.sendSimple(""+ cm.getChar().getName() +"�����������������Ը���#v4031155#50��.�ҿ��Դ�����ȥ��һ��Ŷ��\r\n��ɵ�һ�ؿ���þ���.ð�ձ�#k\r\n#L1##b������һ�� #r<#z4031155#>#k50#r��\r\n#L2##b��ȡ����BUFF#k\r\n#L3##b����һ��#k\r\n#L4##b�˳���PQ#k\r\n");
//------------------------------������һ��-------------------------------
			} else if (status == 1) { 
			if (selection == 1) {
			if (cm.haveItem(4031155, 50)) { 
			cm.gainItem(4031155,-50);
		   	cm.warp(105100300);
			cm.gainExp(30000);
			cm.gainMeso(50000);
			cm.mapMessage("����˵�һ�أ�����ڶ��أ��õ���3����ֵ��5��ð�ձҵĽ�����");
                  	cm.dispose();
                   	} else {
	           	cm.sendOk("ȱ�� 50 ��#v4031155#");
			cm.dispose(); }
//-------------------------------��ȡ����BUFF-----------------------------
			} else if  (selection == 2) { 
			if (cm.haveItem(4001129, 5)) {
			cm.mapMessage("�ù��������У�");

                   	cm.dispose();
                   	} else {
		   	cm.mapMessage("�ù��������У�");
		   	cm.dispose(); }
//------------------------------����һ��----------------------------------
            } else if (selection == 3) {
		   cm.sendNextPrev("���ܵ�ͼ����������Ʒ���Խ�����һ�أ�");
		   cm.dispose(); 
//--------------------------------�˳���PQ------------------------------------
            } else if (selection == 4) {
		   cm.sendOk("�˳���Ӽ����Զ��뿪��PQ"); 
			cm.mapMessage("�˳���Ӽ����Զ��뿪��PQ");
		   cm.dispose(); }
//-------------------------------���ڣ����������------------------------------------
	                 } else if (selection == 5) {
                   cm.sendNextPrev("��������Ҫ����#r������#k���õ�50������ң�Ȼ�󽻸��ҡ��Ҵ�����ȥ��һ����ͼ�����Ҹ���#r��������ֵ#k�Ľ�����");
                   cm.dispose();
		}}}

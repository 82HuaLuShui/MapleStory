/*
����Mxd ONLINE
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
			cm.sendSimple(" ���������˽�����һ�ص��������һ������#r��������#k��\r\n ������һ����Ҫ���Ѽ�#bð�յ������#k#r20#k������Щ��Ʒ����ͨ\r\n ��#b��ħ��ʦ��������#k���䣡\r\n #r���������#bð�յ������#k�أ�#r��ȡһ��BUFF~#k\r\n#L1##b������һ�� #r<#z4001129#>#k20#r��\r\n#L2##b��ȡ����BUFF#k\r\n#L3##b����һ��#k\r\n#L4##b�˳���PQ#k");
//------------------------------������һ��-------------------------------
			} else if (status == 1) { 
			if (selection == 1) {
			if (cm.haveItem(4001129, 20)) { 
			cm.gainItem(4001129,-20);
		   	cm.warp(677000012);
			cm.gainExp(5000000);
			cm.mapMessage("����PQ��ս�ڶ��أ������ 500�� ����ֵ��");
                  	cm.dispose();
                   	} else {
	           	cm.sendOk("ȱ�� 20 ��#v4001129#");
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
		   cm.sendNextPrev("��������Ҫ����#r������#k���õ�20������ң�Ȼ�󽻸��ҡ��Ҵ�����ȥ��һ����ͼ�����Ҹ���#r��������ֵ#k�Ľ�����");
		   cm.dispose(); 
//--------------------------------�˳���PQ------------------------------------
            } else if (selection == 4) {
		   cm.sendOk("�˳���Ӽ����Զ��뿪��PQ"); 
			cm.mapMessage("�˳���Ӽ����Զ��뿪��PQ");
		   cm.dispose(); }
//-------------------------------���ڣ����������------------------------------------
	                 } else if (selection == 5) {
                   cm.sendNextPrev("��������Ҫ����#r������#k���õ�20������ң�Ȼ�󽻸��ҡ��Ҵ�����ȥ��һ����ͼ�����Ҹ���#r��������ֵ#k�Ľ�����");
                   cm.dispose();
		}}}

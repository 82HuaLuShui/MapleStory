
/*
��ԵNPC
��Ҷ��ȡ���
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
                
			cm.sendOk("���Ǹ����ܵģ�������");
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
			cm.sendSimple("�𾴵������ã�������Ľ��������һ��ĵ�װ���Ƿ�
����Ľ������ҵ�˫��˫���ĸ�����\r\n������������ʹ��#r��Ҷ#k�һ�#r���#k��\r\n#L1##bʹ
��#r1000����Ҷ�һ�1000���#k\r\n#L2##b������ת���ܣ�#r����ת����뼤���Ȼ������Ч����");
			} else if (status == 1) { //ʹ��10000��Ҷ��ȡ10000���
			if (selection == 1) {
			if (cm.haveItem(4001126, 1000)) { 
		   	cm.gainItem(4001126, -1000);
            		cm.gainNX(1000);
			cm.sendOk("�𾴵���ң�����˻��Ѿ��ɹ�������1000����ˣ�");
                  	cm.dispose();
                   	} else {
	           	cm.sendOk("�𾴵���ң���ķ�Ҷ����1000����~��");
			cm.dispose(); }
//-------------------------------������ת����-----------------------------
			} else if  (selection == 2) { 
			if ((cm.getMeso() >= 50000000000)&&(cm.haveItem(3011000, 1))||
(cm.getMeso() <= 500000)) { 
                   	cm.sendOk("��ת���ܿ���ȥ��#bð�յ���ӪԱ#k������..");
                   	cm.dispose();
                   	} else {
		   	cm.sendOk("���Ѿ��ɹ����˵������ӣ���������50��ð�ձң�"); 
			cm.gainItem(3011000,1); //��������
			cm.gainMeso(-500000);
		   	cm.dispose(); }
//------------------------------�߼�����һ�----------------------------------
            } else if (selection == 3) {
           	   if (cm.haveItem(5350000, 1)) { 
                   cm.gainItem(5350000,-1);
                   cm.gainItem(2300001,100);
                   cm.sendOk("�һ��ɹ���");
                   cm.dispose();
                   } else {
		   cm.sendOk("��û�и߼����~"); 
		   cm.dispose(); }
//--------------------------------����һ�------------------------------------
            } else if (selection == 4) {
           	 if ((cm.getMeso() >= 3000)) { 
                   cm.gainItem(2300000,50);
		   cm.gainMeso(-3000);
                   cm.sendOk("�һ��ɹ���");
                   cm.dispose();
                   } else {
		   cm.sendOk("ð�ձҲ���~��Ҫ3000ð�ձ�"); 
		   cm.dispose(); }
//-------------------------------���ڵ��㳡------------------------------------
	                 } else if (selection == 5) {
                   cm.sendNextPrev("������㳡��Ҫ#b�߼����#k����#b���#k,Ҳ��Ҫ#b���㳡ר
������#k,��#b���#k,��Щ�㶼����ͨ����������.#b���#k��ȥ������̳�����!");
                   cm.dispose();
		}}
	}
}
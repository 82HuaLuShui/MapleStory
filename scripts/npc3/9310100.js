/*
�����ࣺ"+cm.getboss()+" ��ʾPQ����ɴ���
	 cm.setboss(1);  ����1������ɴ���
	 cm.setboss(-1); ��ȥ1������ɴ���
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
                
			cm.sendOk("....");
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
			cm.sendSimple("��� #b��ս����#k �ɹ��Ļ���ϵͳ���¼�����ս���������������ս���Ի�ȡ���������PQ ���� ������������ս������Ҳ���Ի�ȡ���Ľ���Ŷ����\r\nĿǰ�ɹ���ս�� #r"+cm.getboss()+"#k �Σ�\r\n#L1#����#b#z1002574##k-100����\r\n#L2#����ϡ�е�װ#b#z1050128##k-20����\r\n#L3#����#d100#kƿ#b#z2000005##k-50����\r\n#L4#����#d10#k��#b#z2022251##k-5����\r\n#L5#����#b#z2340000##n#k-300����#r#e[HO~]\r\n#L6##n#k�Ҹ���λ����ս����");
			} else if (status == 1) { 
			if (selection == 1) {
           	   if (cm.getboss()>=100) { 
                   cm.gainItem(1002574,1);
		   cm.setboss(-100);
                   cm.sendNextPrev("\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n�һ��ɹ���������ʣ�� #r"+cm.getboss()+"#k ������\r\n");
		   cm.serverNotice("[ð�յ�] ���: " + cm.c.getPlayer().getName() + " �һ��ˡ���������ñ��(ȫ����+5)");
				
                   cm.dispose();
                   } else {
		   cm.sendOk("��������"); 
		   cm.dispose(); }
//-------------------------------����ϡ�е�װ-----------------------------
			} else if  (selection == 2) { 
			 if (cm.getboss()>=20) { 
                   cm.gainItem(1050128,1);
		   cm.setboss(-20);
                   cm.sendNextPrev("\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n�һ��ɹ���������ʣ�� #r"+cm.getboss()+"#k ������\r\n");
		   cm.serverNotice("[ð�յ�] ���: " + cm.c.getPlayer().getName() + " �һ���ϡ�е�װ��");
				
                   cm.dispose();
                   } else {
		   cm.sendOk("��������"); 
		   cm.dispose(); }
//-----------------------------��������ҩˮ---------------------------------
            } else if (selection == 3) {
		   if (cm.getboss()>=50) { 
                   cm.gainItem(2000005,100);
		   cm.setboss(-50);
                   cm.sendNextPrev("\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n�һ��ɹ���������ʣ�� #r"+cm.getboss()+"#k ������\r\n");
		   cm.serverNotice("[ð�յ�] ���: " + cm.c.getPlayer().getName() + " �һ���һ�鳬��ҩˮ(HPMPȫ��)��")	
                   cm.dispose();
                   } else {
		   cm.sendOk("��������"); 
		   cm.dispose(); }
//----------------------------��Ҷ�����Ƕһ�------------------------------------
            } else if (selection == 4) {
		   if (cm.getboss()>=5) { 
                   cm.gainItem(2022251,10);
		   cm.setboss(-5);
                   cm.sendNextPrev("\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n�һ��ɹ���������ʣ�� #r"+cm.getboss()+"#k ������\r\n");
		   cm.serverNotice("[ð�յ�] ���: " + cm.c.getPlayer().getName() + " �һ��˷�Ҷ�����ǣ�(1����������100����)��")	
                   cm.dispose();
                   } else {
		   cm.sendOk("��������"); 
		   cm.dispose(); }
//-------------------------------ף������------------------------------------
	                 } else if (selection == 5) {
		   if (cm.getboss()>=300) { 
                   cm.gainItem(2340000,1);
		   cm.setboss(-300);
                   cm.sendNextPrev("\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n�һ��ɹ���������ʣ�� #r"+cm.getboss()+"#k ������\r\n");
		   cm.serverNotice("[ð�յ�] ���: " + cm.c.getPlayer().getName() + " �õ��ˡ�ף�����᡿����")	
                   cm.dispose();
                   } else {
		   cm.sendOk("��������"); 
		   cm.dispose(); }
//------------------------------����------------------------------------------
} else if (selection == 6) {
			cm.sendNext("���ǲ�����֪�����ش�����ô����أ������ڿ���С��Npc���븱����ͼ��ʱ�������Ҫ��ս���������ֻҪ������ˣ����ܻ��һ�δ���~����");
			cm.dispose();}}}}
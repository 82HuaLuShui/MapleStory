/*
	��Ȩ��Vr001 ����	2010
***************************************
        ħ����� | ID:9201132
*/
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("#b���棺#k\r\n���ڱ���Ĺ����ӳ�������ҪС������\r\n�������������PQ��������Ҫ#r70#k�����ϡ�����#r���#k��\r\n#b********************������**********************\r\n     #e��������#k    #r��¶˹֮��#k  #d���/ð�ձ�");
        } else if (status == 1) {
            if(cm.getLevel() >= 70 ){  
                if (cm.getParty() == null) { 
                    cm.sendOk("��Ҫ������\r\n����һ��#rС��#k�����ҵȼ��ﵽ#r70��#k\r\n#e          ȱ����������"); 
                    cm.dispose(); 
                    } 
            if (!cm.isLeader()) {  //����С���鳤
                cm.sendOk("#e���������ս���������#r������С���鳤����˵��."); 
                cm.dispose(); 
                    }else { 
            var party = cm.getParty().getMembers(); 
            var next = true; 
                if (party.size() > 3){  
                    next = false; 
                    } 
                if (next) { 
            var em = cm.getEventManager("boss1");  
                if (em == null) { 
                    cm.sendOk("�ű�����!���������ļ�!\r\n�����ļ�ID��#bboss1"); 
                } else {  
                em.startInstance(cm.getParty(),cm.getChar().getMap()); 
                party = cm.getChar().getEventInstance().getPlayers(); 
                cm.removeFromParty(4001008, party); 
                cm.removeFromParty(4001007, party);  
                } 
            //cm.serverNotice("���:" + cm.c.getPlayer().getName() + "����PQ������");
            cm.dispose(); 
                    } 
                } 
            }else{ 
                cm.sendOk("�Բ���,��ĵȼ�̫��#r 70 #k���ſ�����ս�ø���."); 
                cm.dispose(); 
            }
        }
    }
}

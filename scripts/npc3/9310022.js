/*
50��ð�ձ�һ�Ρ�������ͼˢװ��
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
            cm.sendNext("��ʿ��ã���ӭ����ð�յ������ܴ����������ͼ��\r\n#b��Ҫ������\r\n#r�ȼ�70����������һ��С�飡\r\n����һ����Ҫ������100��ð�ձң�\r\n#b���ܣ�\r\b���������ͼ���ڹ涨��ʱ���ڴ�ܹ������������100���ڵ�װ������Ŷ�������������ӣ�");
        } else if (status == 1) {
            if(cm.getMeso() >= 500000 ){  
                if (cm.getParty() == null) { 
                    cm.sendOk("��Ҫ������\r\n����һ��#rС��#k�����ҵȼ��ﵽ#r70��#k���Լ�100��ð�ձ�\r\n#e          ȱ����������"); 
                    cm.dispose(); 
                    } 
            if (!cm.isLeader()) {  //����С���鳤
                cm.sendOk("#e���������ս���������#r������С���鳤����˵��."); 
                cm.dispose(); 
                    }else { 
            var party = cm.getParty().getMembers(); 
            cm.gainMeso(-50000);
            cm.serverNotice("���:" + cm.c.getPlayer().getName() + "������ͼ��")
            var next = true; 
                if (party.size() > 3){  
                    next = false; 
                    } 
                if (next) { 
            var em = cm.getEventManager("shijian");  
                if (em == null) { 
                    cm.sendOk("�ű�����!���������ļ�!\r\n�����ļ�ID��#bboss1"); 
                } else {  
                em.startInstance(cm.getParty(),cm.getChar().getMap()); 
                party = cm.getChar().getEventInstance().getPlayers();       
                } 
            //cm.serverNotice("���:" + cm.c.getPlayer().getName() + "����PQ������");
            cm.dispose(); 
                    } 
                } 
            }else{ 
                cm.sendOk("�Բ�����սһ����Ҫ����50��ð�ձ�"); 
                cm.dispose(); 
         
        }}
    }
}
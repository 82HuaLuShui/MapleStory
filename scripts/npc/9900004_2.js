/* 
 * �ű�����: cm
 * �ű�����: ����
 * ����ʱ��: 2016/8/21
 */
importPackage(net.sf.cherry.client);
var status = -1;
var beauty = 0;
var tosend = 0;
var sl;
var mats;
var dds;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendNext("�����Ҫ����н�����������Ұɡ�");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
                 // cm.getChar().gainCashDD(+1000);
            var gsjb = "��ã����������ºϳ�ϵͳ��\r\n";
            gsjb += "#L1#���������ϳ�ϵͳ#v1492231##l\r\n";
            gsjb += "#L2#�����׷��ϳ�ϵͳ#v1052498##l\r\n";
            //gsjb += "#L3#�������κϳ�ϵͳ#v1132013##l\r\n";
            gsjb += "#L4#���½�ָ��������#v1113040##l\r\n";
            //gsjb += "#L5#���±�ʯ�ϳ�ϵͳ#v4021007##l\r\n";
            gsjb += "#L6#���¿�ʯ�ϳ�ϵͳ#v4011008##l\r\n";
            gsjb += "#L7#����ˮ���ϳ�ϵͳ#v4251202##l\r\n";
            gsjb += "#L10#����С��Ϸ�ϳ�ϵͳ#v4080002##l\r\n";
            //gsjb += "#L8#���²��Ϻϳ�ϵͳ#v4001017##l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 1 && cm.getPlayer() <= 5) {
                cm.sendOk("GM���ܲ���һ���");
                cm.dispose();
            }
            if (selection == 1) {
		cm.openNpc(9900004, 111);
            }else if (selection == 2) {
		cm.openNpc(9900004, 112);
            }else if (selection == 3) {
		cm.openNpc(9900004, 113);
            }else if (selection == 4) {
		cm.openNpc(9900004, 114);
            }else if (selection == 5) {
		cm.openNpc(9900004, 115);
            }else if (selection == 6) {
		cm.openNpc(9900004, 116);
            }else if (selection == 7) {
		cm.openNpc(9900004, 117);
            }else if (selection == 8) {
		cm.openNpc(9900004, 118);
            }else if (selection == 9) {
		cm.openNpc(9900004, 119);
            }else if (selection == 10) {
		cm.openNpc(9900004, 110);
            }
               


			
			
			
			
			
        } else if (status == 2) {
            if (beauty == 0) {
               if (cm.haveItem(4004004, selection*10)&&cm.haveItem(4001126, selection*10)){
					 cm.gainItem(4004004, -selection*10);
                    cm.sendNext("�ϳ���Ʒ�ɹ���");
                   // cm.gainNX(+1000 * selection);
					cm.gainItem(4005004, selection);
					 cm.dispose();
                } else {
                    cm.sendNext("������������������޷��һ���");
                    cm.dispose()
                }
            }else if (beauty == 8) {
                 if (cm.haveItem(4004004, selection*10)&&cm.haveItem(4001126, selection*10)){
					 cm.gainItem(4004004, -selection*10);
                    cm.sendNext("�ϳ���Ʒ�ɹ���");
                   // cm.gainNX(+1000 * selection);
					cm.gainItem(4005004, selection);
					 cm.dispose();
                } else {
                    cm.sendNext("������������������޷��һ���");
                    cm.dispose()
                }
            }else if (beauty == 23) {
                 if (cm.getChar().getCashDD() >= selection){
					
                    cm.getChar().gainCashDD(-selection);
                     cm.gainMeso(+500* selection);
                    //cm.gainItem(2040710, selection);
                    cm.sendOk("���ɹ����˽�ң� #r" + selection*500 + " #k")
					 cm.dispose();
                } else {
                    cm.sendNext("������������������޷��һ���");
                    cm.dispose()
                }
            }
            status = -1;
        } else {
            cm.dispose();
        }
    }
}











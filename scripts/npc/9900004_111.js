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
            var gsjb = "		#v2022359#��ã����������ºϳ�ϵͳ��#v2022359#\r\n";
            gsjb += "#L0#120�������ϳ�#v1402047##l\r\n";
            gsjb += "#L1#130�������ϳ�#v1382105##l\r\n";
            gsjb += "#L2#140�������ϳ�#v1452111##l\r\n";
            gsjb += "#L3#150�������ϳ�#v1472214##l\r\n";
            //gsjb += "#L4#160�������ϳ�#v1492231##l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 1 && cm.getPlayer() <= 5) {
                cm.sendOk("GM���ܲ���һ���");
                cm.dispose();
            }
            if (selection == 0) {
		cm.openNpc(9900004, 310);
        }else if (selection == 1) {
		cm.openNpc(9900004, 311);
		}else if (selection == 2) {
		cm.openNpc(9900004, 312);
		}else if (selection == 3) {
		cm.openNpc(9900004, 313);
		}else if (selection == 4) {
		cm.openNpc(9900004, 315);
		}else if (status == 2) {
		cm.openNpc(9900004, 140);
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








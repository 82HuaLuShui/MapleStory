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
            gsjb += "#L0#���������ϳ�ϵͳ#v1492231##l\r\n";
            gsjb += "#L1#�����׷��ϳ�ϵͳ#v1052319##l\r\n";
            gsjb += "#L2#�������κϳ�ϵͳ#v1132013##l\r\n";
            gsjb += "#L3#���½�ָ�ϳ�ϵͳ#v1113040##l\r\n";
            gsjb += "#L4#���±�ʯ�ϳ�ϵͳ#v4021007##l\r\n";
            gsjb += "#L5#���¿�ʯ�ϳ�ϵͳ#v4011005##l\r\n";
            gsjb += "#L6#����ˮ���ϳ�ϵͳ#v4251202##l\r\n";
            gsjb += "#L7#���²��Ϻϳ�ϵͳ#v4001017##l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 1 && cm.getPlayer() <= 5) {
                cm.sendOk("GM���ܲ���һ���");
                cm.dispose();
            }
            if (selection == 0) {
                
		cm.openNpc(9310023, 1);

            
            }else if (selection == 1) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4032485).iterator();
                if (cm.getPlayer().getCSPoints(0)  == 0) {
                    cm.sendNext("���ĵ�ȯ����һ�.");
                    status = -1;
                } else {
                    beauty = 22
                      cm.sendGetNumber("������һ�#r#z2040710##k������:\r\n#b���� - (#r10000 = 1#b)\r\n��ĵ������: #r" +
                            cm.getPlayer().getCSPoints(0) + " \r\n", 1, 1, cm.getPlayer().getCSPoints(0) );

                }

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







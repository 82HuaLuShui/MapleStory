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
            gsjb += "#L11#����С��Ϸ�ϳ�ϵͳ#v4080100##l\r\n";
            gsjb += "#L0#����С��Ϸ�ϳ�ϵͳ#v4080001##l\r\n";
            /*gsjb += "#L1#����С��Ϸ�ϳ�ϵͳ#v4080002##l\r\n";
            gsjb += "#L2#����С��Ϸ�ϳ�ϵͳ#v4080003##l\r\n";
            gsjb += "#L3#����С��Ϸ�ϳ�ϵͳ#v4080004##l\r\n";
            gsjb += "#L4#����С��Ϸ�ϳ�ϵͳ#v4080005##l\r\n";
            gsjb += "#L5#����С��Ϸ�ϳ�ϵͳ#v4080006##l\r\n";
            gsjb += "#L6#����С��Ϸ�ϳ�ϵͳ#v4080007##l\r\n";
            gsjb += "#L7#����С��Ϸ�ϳ�ϵͳ#v4080008##l\r\n";
            gsjb += "#L8#����С��Ϸ�ϳ�ϵͳ#v4080009##l\r\n";
            gsjb += "#L9#����С��Ϸ�ϳ�ϵͳ#v4080010##l\r\n";
            gsjb += "#L10#����С��Ϸ�ϳ�ϵͳ#v4080011##l\r\n"; */
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 1 && cm.getPlayer() <= 5) {
                cm.sendOk("GM���ܲ���һ���");
                cm.dispose();
            }
            if (selection == 0) {
                
                if (cm.getPlayer().getMeso()  < 5000000) {
                    cm.sendNext("���Ľ�Ҳ���һ�.");
                    status = -1;
                } else {
                    beauty = 0
                      cm.sendGetNumber("������һ�#r#v4080001##k������:\r\n#b��Ҫ#v4031138#500W���\r\n��Ľ������: #r" +
                      cm.getPlayer().getMeso() + " \r\n", 1, 1, 1 );

                }

            
            }else if (selection == 11) {
               
                if (cm.getPlayer().getMeso()  < 5000000) {
                    cm.sendNext("���Ľ�Ҳ���һ�.");
                    status = -1;
                } else {
                    beauty = 11
                      cm.sendGetNumber("������һ�#r#v4080100##k������:\r\n#b��Ҫ#v4031138#500W���\r\n��Ľ������: #r" +
                      cm.getPlayer().getMeso() + " \r\n", 1, 1, 1 );

                }


            }
               


			
			
			
			
			
        } else if (status == 2) {
            if (beauty == 0) {
               if (cm.getPlayer().getMeso()  >= 5000000){
					cm.gainMeso(-5000000* selection); //�Ӽ����
					cm.gainItem(4080001, selection);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					 cm.dispose();
                } else {
                    cm.sendNext("�������������޷��һ���");
                    cm.dispose()
                }
            }else if (beauty == 11) {
               if (cm.getPlayer().getMeso()  >= 5000000){
					cm.gainMeso(-5000000* selection); //�Ӽ����
					cm.gainItem(4080100, selection);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					 cm.dispose();
                } else {
                    cm.sendNext("�������������޷��һ���");
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









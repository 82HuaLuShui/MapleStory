/*
 * 
 * @��֮��
 * ��������ϵͳ - ħ��˫��
 */
importPackage(net.sf.odinms.client);
var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var txt1 = "#d#L1#�һ�����1000\t��Ҫ#v4000019#50��\r\n";
            var txt2 = "#d#L2#�һ�����1500\t��Ҫ#v4000000#50��\r\n";
            var txt3 = "#d#L3#�һ�����2000\t��Ҫ#v4000016#50��\r\n";
            var txt4 = "#d#L4#�һ�����2500\t��Ҫ#v4000001#50��\r\n";
            var txt5 = "#d#L5#�һ�����8000\t��Ҫ#v4000012#100��\r\n";
            var txt6 = "#d#L6#�һ�����5000\t��Ҫ#v4000004#100��\r\n";
            var txt7 = "#d#L7#�һ�����10000\t��Ҫ#v4000008#100��\r\n";
            var txt8 = "#d#L8#�һ�����15000\t��Ҫ#v4000007#100��\r\n";
            var txt9 = "#d#L9#�һ�����10000\t��Ҫ#v4000015#100��\r\n";
            var txt10 = "#d#L10#�һ�����8000\t��Ҫ#v4000002#100��\r\n";
            //var txt11 = "#d#L11ʹ��##v4031646##z4031646#�һ�����#r10000\r\n";
            //var txt12 = "#d#L12ʹ��##v4031647##z4031647#�һ�����#r10000\r\n";


            cm.sendSimple("���Զһ�����.\r\n" + txt1 + "" + txt2 + "" + txt3 + "" + txt4 + "" + txt5 + "" + txt6 + "" + txt7 + "" + txt8 + "" + txt9 + "" + txt10 + "");
        } else if (status == 1) {
            if (selection == 1) {
                if (cm.haveItem(4000019, 50)) {
                    cm.gainItem(4000019, -50);
                    cm.gainExp(1000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 2) { 
                if (cm.haveItem(4000000, 50)) {
                    cm.gainItem(4000000, -50);
                    cm.gainExp(1500);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 3) {
                if (cm.haveItem(4000016, 50)) {
                    cm.gainItem(4000016, -50);
                    cm.gainExp(2000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 4) {
                if (cm.haveItem(4000001, 50)) {
                    cm.gainItem(4000001, -50);
                    cm.gainExp(2500);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 5) {
                if (cm.haveItem(4000012, 100)) {
                    cm.gainItem(4000012, -100);
                    cm.gainExp(8000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 6) {
                if (cm.haveItem(4000004, 100)) {
                    cm.gainItem(4000004, -100);
                    cm.gainExp(5000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 7) {
                if (cm.haveItem(4000008, 100)) {
                    cm.gainItem(4000008, -100);
                    cm.gainExp(10000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 8) {
                if (cm.haveItem(4000007, 100)) {
                    cm.gainItem(4000007, -100);
                    cm.gainExp(15000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 9) {
                if (cm.haveItem(4000015, 100)) {
                    cm.gainItem(4000015, -100);
                    cm.gainExp(10000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 10) {
                if (cm.haveItem(4000002, 100)) {
                    cm.gainItem(4000002, -100);
                    cm.gainExp(8000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 11) {
                if (cm.haveItem(4031646, 1)) {
                    cm.gainItem(4031646, -1);
                    cm.gainExp(+100000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 12) {
                if (cm.haveItem(4031647, 1)) {
                    cm.gainItem(4031647, -1);
                    cm.gainExp(+100000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 13) {
                if (cm.haveItem(4001013, 100)) {
                    cm.gainItem(4001013, -100);
                    cm.gainExp(5000);
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 14) {
                if (cm.haveItem(1482029, 1)) {
                    cm.gainItem(1482029, -1);
                    cm.gainItem(����, 1);
                    cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12, cm.getC().getChannel(), "[�ϳ�ϵͳ]" + " : " + " [" + cm.getPlayer().getName() + "]�ϳ�������", true).getBytes());
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            } else if (selection == 15) {
                if (cm.haveItem(1492030, 1)) {
                    cm.gainItem(1492030, -1);
                    cm.gainItem(����, 1);
                    cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12, cm.getC().getChannel(), "[�ϳ�ϵͳ]" + " : " + " [" + cm.getPlayer().getName() + "]�ϳ�������", true).getBytes());
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            }else if(selection == 16){
                 if (cm.haveItem(1442071, 1)) {
                    cm.gainItem(1442071, -1);
                    cm.gainItem(����, 1);
                    cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12, cm.getC().getChannel(), "[�ϳ�ϵͳ]" + " : " + " [" + cm.getPlayer().getName() + "]�ϳ�������", true).getBytes());
                    cm.dispose();
                } else {
                    cm.sendOk("���ϲ��㡣�޷��ϳɣ�");
                    cm.dispose();
                }
            }
        }
    }
}

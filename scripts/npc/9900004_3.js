/* global cm */

var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "\t\t\t  #e#d��ӭ����#b" + cm.ms() + "#e#d\r\n\tע�����ϵͳ��¼����벻Ҫ���Ž���������\r\n\r\n"

            if (cm.getPlayer().getLevel() >= 20 && cm.getPlayer().getdjjl() == 0) {
                text += "#L1##r" + ��ɺ� + "�ȼ��ﵽ20����" + ��� + "���x500000 ��ʱ��1��#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 20 && cm.getPlayer().getdjjl() > 0) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ20����#l" + ��� + "\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ20����#l" + ���ڽ����� + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getdjjl() == 1) {
                text += "#L2##r" + ��ɺ� + "�ȼ��ﵽ30����" + ��� + "#v1122019#x1 ��ʱ��1��#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getdjjl() > 1) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ30����#l" + ��� + "\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ30����#l" + ���ڽ����� + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 50 && cm.getPlayer().getdjjl() == 2) {
                text += "#L3##r" + ��ɺ� + "�ȼ��ﵽ50����" + ��� + "#v1112435#x1 ��ʱ��1��#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 50 && cm.getPlayer().getdjjl() > 2) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ50����#l" + ��� + "\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ50����#l" + ���ڽ����� + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 70 && cm.getPlayer().getdjjl() == 3) {
                text += "#L4##r" + ��ɺ� + "�ȼ��ﵽ70����" + ��� + "#v4170005#x10 ��ʱ��1��#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 70 && cm.getPlayer().getdjjl() > 3) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ70����#l" + ��� + "\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ70����#l" + ���ڽ����� + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getdjjl() == 4) {
                text += "#L5##r" + ��ɺ� + "�ȼ��ﵽ100����" + ��� + "#v5150040#x2 ��ʱ��1��#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getdjjl() > 4) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ100����#l" + ��� + "\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ100����#l" + ���ڽ����� + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 120 && cm.getPlayer().getdjjl() == 5) {
                text += "#L6##r" + ��ɺ� + "�ȼ��ﵽ120����" + ��� + "#v2049100#x2 ��ʱ��1��#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 120 && cm.getPlayer().getdjjl() > 5) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ120����#l" + ��� + "\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ120����#l" + ���ڽ����� + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 150 && cm.getPlayer().getdjjl() == 6) {
                text += "#L7##r" + ��ɺ� + "�ȼ��ﵽ150����" + ��� + "���x20000 ��ʱ��1��#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 150 && cm.getPlayer().getdjjl() > 6) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ150����#l" + ��� + "\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ150����#l" + ���ڽ����� + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 170 && cm.getPlayer().getdjjl() == 7) {
                text += "#L8##r" + ��ɺ� + "�ȼ��ﵽ170����" + ��� + "���x30000 ��ʱ��1��#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 170 && cm.getPlayer().getdjjl() > 7) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ170����#l" + ��� + "\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ170����#l" + ���ڽ����� + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 180 && cm.getPlayer().getdjjl() == 8) {
                text += "#L9##r" + ��ɺ� + "�ȼ��ﵽ180����" + ��� + "#v2049100#x10 ��ʱ��1��#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 180 && cm.getPlayer().getdjjl() > 8) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ180����#l" + ��� + "\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ180����#l" + ���ڽ����� + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 190 && cm.getPlayer().getdjjl() == 9) {
                text += "#L10##r" + ��ɺ� + "�ȼ��ﵽ190����" + ��� + "#v5150040#x10 ��ʱ��1��#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 190 && cm.getPlayer().getdjjl() > 9) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ190����#l" + ��� + "\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ190����#l" + ���ڽ����� + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 199 && cm.getPlayer().getdjjl() == 10) {
                text += "#L11##r" + ��ɺ� + "�ȼ��ﵽ199����" + ��� + "#v3010070#x1 ��ʱ��1��#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 199 && cm.getPlayer().getdjjl() > 10) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ199����#l" + ��� + "\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ199����#l" + ���ڽ����� + "\r\n"
            }
            
            if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getdjjl() == 11) {
                text += "#L12##r" + ��ɺ� + "�ȼ��ﵽ200����" + ��� + "���x100000�� ��ʱ��1��#l\r\n\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getdjjl() > 11) {
                text += "" + ��ɺ� + "#r�ȼ��ﵽ200����#l" + ��� + "\r\n\r\n"
            } else {
                text += "" + ���ڽ������� + "#r�ȼ��ﵽ200����#l" + ���ڽ����� + "\r\n"
            }
            
            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.gainMeso(1000000);//����
            cm.setdjjl(1);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ20������ȡ��100���ҵĵȼ�����");
            cm.dispose();
        } else if (selection == 2) {
            cm.gainItem(1122019, 1);//
            cm.setdjjl(2);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ30������ȡ��ð��֮�ĵ�׹һ�������Խ���Ŷ��");
            cm.dispose();
        } else if (selection == 3) {
            cm.gainItem(1112435, 1);//
            cm.setdjjl(3);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ50������ȡ��һ������֮�ͽ�ָһö(���Խ���Ŷ)");
            cm.dispose();
        } else if (selection == 4) {
            cm.gainItem(4170005, 10);//
            cm.setdjjl(4);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ70������ȡ�˷�����ĵ�x10��");
            cm.dispose();
        } else if (selection == 5) {
            cm.gainItem(5150040, 2);//
            cm.setdjjl(5);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ100������ȡ�˻ʼ�����x2��");
            cm.dispose();
        } else if (selection == 6) {
            cm.gainItem(2049100, 2);//
            cm.setdjjl(6);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ120������ȡ�˻������x2��");
            cm.dispose();
        } else if (selection == 7) {
            cm.gainNX(20000);
            cm.setdjjl(7);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ150������ȡ�˵��x20000��Ŷ~��");
            cm.dispose();
        } else if (selection == 8) {
            cm.gainNX(30000);
            cm.setdjjl(8);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ170������ȡ�˵��x30000��Ŷ~��");
            cm.dispose();
        } else if (selection == 9) {
            cm.gainItem(2049100,10);
            cm.setdjjl(9);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ180������ȡ�˻������x10�ţ�");
            cm.dispose();
        } else if (selection == 10) {
            cm.gainItem(5150040,10);
            cm.setdjjl(10);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ190������ȡ�˻ʼ�����x10�ţ�");
            cm.dispose();
        } else if (selection == 11) {
            cm.gainItem(3010070,1);
            cm.setdjjl(11);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ199������ȡ�˾��ް�Ʒ��������x1����");
            cm.dispose();
        } else if (selection == 12) {
            cm.gainNX(100000);
            cm.setdjjl(12);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ200������ȡ�˵��10��㣡");
            cm.dispose();
            
        }
    }
}



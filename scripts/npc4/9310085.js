/* global cm */

var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
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
                text += "˧���������վ�ֱر�Ŷ����칺���!\r\n\r\n";
                text += "" + ��ɫ��ͷ + "#L1##r#v1902024##z1902024#\tʹ��Ȩ����Ҫ200��ֵ��\r\n\r\n"//3
                text += "" + ��ɫ��ͷ + "#L2##r#v1902013##z1902013#\tʹ��Ȩ����Ҫ188��ֵ��\r\n\r\n"//3
                text += "" + ��ɫ��ͷ + "#L3##r#v1902045##z1902045#\tʹ��Ȩ����Ҫ250��ֵ��\r\n\r\n"//3
                text += "" + ��ɫ��ͷ + "#L4##r#v1902033##z1902033#\tʹ��Ȩ����Ҫ150��ֵ��\r\n\r\n"//3
                text += "" + ��ɫ��ͷ + "#L5##r#v1902036##z1912029#\tʹ��Ȩ����Ҫ100��ֵ��\r\n\r\n"//3	
                text += "" + ��ɫ��ͷ + "#L6##r#v1902032##z1902032#\tʹ��Ȩ����Ҫ200��ֵ��\r\n\r\n"//3
                text += "" + ��ɫ��ͷ + "#L7##r#v1902020##z1902020#\tʹ��Ȩ����Ҫ150��ֵ��\r\n\r\n"//3
                text += "" + ��ɫ��ͷ + "#L8##r#v1902014##z1902014#\tʹ��Ȩ����Ҫ100��ֵ��\r\n\r\n"//3
                text += "" + ��ɫ��ͷ + "#L9##r#v1902021##z1902021#\tʹ��Ȩ����Ҫ100��ֵ��\r\n\r\n"//3
                text += "" + ��ɫ��ͷ + "#L10##r#v1902009##z1902009#\tʹ��Ȩ����Ҫ100��ֵ��\r\n\r\n"//3
                text += "" + ��ɫ��ͷ + "#L11##r#v1902031##z1902031#\tʹ��Ȩ����Ҫ100��ֵ��\r\n\r\n"//3
                text += "" + ��ɫ��ͷ + "#L12##r#v1902035##z1902035#\tʹ��Ȩ����Ҫ150��ֵ��\r\n\r\n"//3	
                text += "" + ��ɫ��ͷ + "#L13##r#v1902018##z1912011#\tʹ��Ȩ����Ҫ100��ֵ��\r\n\r\n"//3
                text += "" + ��ɫ��ͷ + "#L14##r#v1902039##z1902039#\tʹ��Ȩ����Ҫ50��ֵ��\r\n\r\n"//3
                text += "" + ��ɫ��ͷ + "#L15##r#v1902038##z1902038#\tʹ��Ȩ����Ҫ50��ֵ��\r\n\r\n"//3				
                cm.sendSimple(text);
            }
        } else if (selection == 1) {
            if (!cm.beibao(1, 0)) {//ǰ���1��Ӧװ����һ����Ҳ����װ�� ������Ǹ���
                cm.sendOk("װ�������಻��1���ո�");//�жϲ����ڣ�����ʾ�Ի�
                cm.dispose();
            } else if (cm.getmoneyb() >= 200) {
                cm.setmoneyb(-200);
                cm.gainItem(1912017, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
				cm.gainItem(1902024, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ�������������ʹ��Ȩ��");
                cm.dispose();
            } else {
                cm.sendOk("��ֵ�Ҳ����޷�������");
                cm.dispose();
            }
        } else if (selection == 2) {
            if (!cm.beibao(1, 1)) {//ǰ���1��Ӧװ����һ����Ҳ����װ�� ������Ǹ���
                cm.sendOk("װ�������಻��1���ո�");//�жϲ����ڣ�����ʾ�Ի�
                cm.dispose();
            } else if (cm.getmoneyb() >= 188) {
                cm.setmoneyb(-188);
                cm.gainItem(1902013, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
				cm.gainItem(1912009, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ������޹�ˮţ����ʹ��Ȩ��");
                cm.dispose();
            } else {
                cm.sendOk("��ֵ�Ҳ����޷�������");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (!cm.beibao(1, 1)) {//ǰ���1��Ӧװ����һ����Ҳ����װ�� ������Ǹ���
                cm.sendOk("װ�������಻��1���ո�");//�жϲ����ڣ�����ʾ�Ի�
                cm.dispose();
            } else if (cm.getmoneyb() >= 250) {
                cm.setmoneyb(-250);
                cm.gainItem(1902045, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
				cm.gainItem(1912038, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ������ϻ�ֻ�Ǵ�˵����ʹ��Ȩ��");
                cm.dispose();
            } else {
                cm.sendOk("��ֵ�Ҳ����޷�������");
                cm.dispose();
            }
        } else if (selection == 4) {
             if (!cm.beibao(1, 1)) {//ǰ���1��Ӧװ����һ����Ҳ����װ�� ������Ǹ���
                cm.sendOk("װ�������಻��1���ո�");//�жϲ����ڣ�����ʾ�Ի�
                cm.dispose();
            } else if (cm.getmoneyb() >= 150) {
                cm.setmoneyb(-150);
                cm.gainItem(1902033, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
				cm.gainItem(1912026, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ������ϻ�ֻ�Ǵ�˵����ʹ��Ȩ��");
                cm.dispose();
            } else {
                cm.sendOk("��ֵ�Ҳ����޷�������");
                cm.dispose();
            }
        } else if (selection == 5) {
             if (!cm.beibao(1, 1)) {//ǰ���1��Ӧװ����һ����Ҳ����װ�� ������Ǹ���
                cm.sendOk("װ�������಻��1���ո�");//�жϲ����ڣ�����ʾ�Ի�
                cm.dispose();
            } else if (cm.getmoneyb() >= 100) {
                cm.setmoneyb(-100);
                cm.gainItem(1902036, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
				cm.gainItem(1912029, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ������ϻ�ֻ�Ǵ�˵����ʹ��Ȩ��");
                cm.dispose();
            } else {
                cm.sendOk("��ֵ�Ҳ����޷�������");
                cm.dispose();
            }
        } else if (selection == 6) {
             if (!cm.beibao(1, 1)) {//ǰ���1��Ӧװ����һ����Ҳ����װ�� ������Ǹ���
                cm.sendOk("װ�������಻��1���ո�");//�жϲ����ڣ�����ʾ�Ի�
                cm.dispose();
            } else if (cm.getmoneyb() >= 200) {
                cm.setmoneyb(-200);
                cm.gainItem(1902032, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
				cm.gainItem(1912025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ���������ʹ��Ȩ��");
                cm.dispose();
            } else {
                cm.sendOk("��ֵ�Ҳ����޷�������");
                cm.dispose();
            }
        } else if (selection == 7) {
             if (!cm.beibao(1, 1)) {//ǰ���1��Ӧװ����һ����Ҳ����װ�� ������Ǹ���
                cm.sendOk("װ�������಻��1���ո�");//�жϲ����ڣ�����ʾ�Ի�
                cm.dispose();
            } else if (cm.getmoneyb() >= 150) {
                cm.setmoneyb(-150);
                cm.gainItem(1902020, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
				cm.gainItem(1912013, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ�����������ʹ��Ȩ��");
                cm.dispose();
            } else {
                cm.sendOk("��ֵ�Ҳ����޷�������");
                cm.dispose();
            }
        } else if (selection == 8) {
             if (!cm.beibao(1, 1)) {//ǰ���1��Ӧװ����һ����Ҳ����װ�� ������Ǹ���
                cm.sendOk("װ�������಻��1���ո�");//�жϲ����ڣ�����ʾ�Ի�
                cm.dispose();
            } else if (cm.getmoneyb() >= 100) {
                cm.setmoneyb(-100);
                cm.gainItem(1902014, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
				cm.gainItem(1912010, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ��������̹��ʹ��Ȩ��");
                cm.dispose();
            } else {
                cm.sendOk("��ֵ�Ҳ����޷�������");
                cm.dispose();
            }	
        } else if (selection == 9) {
             if (!cm.beibao(1, 1)) {//ǰ���1��Ӧװ����һ����Ҳ����װ�� ������Ǹ���
                cm.sendOk("װ�������಻��1���ո�");//�жϲ����ڣ�����ʾ�Ի�
                cm.dispose();
            } else if (cm.getmoneyb() >= 100) {
                cm.setmoneyb(-100);
                cm.gainItem(1902021, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
				cm.gainItem(1912014, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ�������ν��ʹ��Ȩ��");
                cm.dispose();
            } else {
                cm.sendOk("��ֵ�Ҳ����޷�������");
                cm.dispose();
            }	
        } else if (selection == 10) {
             if (!cm.beibao(1, 1)) {//ǰ���1��Ӧװ����һ����Ҳ����װ�� ������Ǹ���
                cm.sendOk("װ�������಻��1���ո�");//�жϲ����ڣ�����ʾ�Ի�
                cm.dispose();
            } else if (cm.getmoneyb() >= 100) {
                cm.setmoneyb(-100);
                cm.gainItem(1902009, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
				cm.gainItem(1912004, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ�������������ʹ��Ȩ��");
                cm.dispose();
            } else {
                cm.sendOk("��ֵ�Ҳ����޷�������");
                cm.dispose();
            }	
        } else if (selection == 11) {
             if (!cm.beibao(1, 1)) {//ǰ���1��Ӧװ����һ����Ҳ����װ�� ������Ǹ���
                cm.sendOk("װ�������಻��1���ո�");//�жϲ����ڣ�����ʾ�Ի�
                cm.dispose();
            } else if (cm.getmoneyb() >= 100) {
                cm.setmoneyb(-100);
                cm.gainItem(1902031, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
				cm.gainItem(1912024, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ�������ʿ��ս��ʹ��Ȩ��");
                cm.dispose();
            } else {
                cm.sendOk("��ֵ�Ҳ����޷�������");
                cm.dispose();
            }			
        } else if (selection == 12) {
             if (!cm.beibao(1, 1)) {//ǰ���1��Ӧװ����һ����Ҳ����װ�� ������Ǹ���
                cm.sendOk("װ�������಻��1���ո�");//�жϲ����ڣ�����ʾ�Ի�
                cm.dispose();
            } else if (cm.getmoneyb() >= 150) {
                cm.setmoneyb(-150);
                cm.gainItem(1902035, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
				cm.gainItem(1912028, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ����������ʹ��Ȩ��");
                cm.dispose();
            } else {
                cm.sendOk("��ֵ�Ҳ����޷�������");
                cm.dispose();
            }
        } else if (selection == 13) {
             if (!cm.beibao(1, 1)) {//ǰ���1��Ӧװ����һ����Ҳ����װ�� ������Ǹ���
                cm.sendOk("װ�������಻��1���ո�");//�жϲ����ڣ�����ʾ�Ի�
                cm.dispose();
            } else if (cm.getmoneyb() >= 100) {
                cm.setmoneyb(-100);
                cm.gainItem(1902018, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
				cm.gainItem(1912011, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ���������ʹ��Ȩ��");
                cm.dispose();
            } else {
                cm.sendOk("��ֵ�Ҳ����޷�������");
                cm.dispose();
            }
        } else if (selection == 14) {
             if (!cm.beibao(1, 1)) {//ǰ���1��Ӧװ����һ����Ҳ����װ�� ������Ǹ���
                cm.sendOk("װ�������಻��1���ո�");//�жϲ����ڣ�����ʾ�Ի�
                cm.dispose();
            } else if (cm.getmoneyb() >= 50) {
                cm.setmoneyb(-50);
                cm.gainItem(1902039, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
				cm.gainItem(1912032, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ��������л���ʹ��Ȩ��");
                cm.dispose();
            } else {
                cm.sendOk("��ֵ�Ҳ����޷�������");
                cm.dispose();
            }
        } else if (selection == 15) {
             if (!cm.beibao(1, 1)) {//ǰ���1��Ӧװ����һ����Ҳ����װ�� ������Ǹ���
                cm.sendOk("װ�������಻��1���ո�");//�жϲ����ڣ�����ʾ�Ի�
                cm.dispose();
            } else if (cm.getmoneyb() >= 50) {
                cm.setmoneyb(-50);
                cm.gainItem(1902038, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
				cm.gainItem(1912031, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                cm.����(1, "[" + cm.getPlayer().getName() + "]�ɹ�����ŮŮ����ʹ��Ȩ��");
                cm.dispose();
            } else {
                cm.sendOk("��ֵ�Ҳ����޷�������");
                cm.dispose();
            }
        }
    }
}
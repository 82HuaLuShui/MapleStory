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
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "#d�װ������£����ĵĻ�ӭ����������ð�յ�����а��Ĵ��ͥ���������Ҷ���Ŭ��������һЩ������ף��������ð�յ������쿪��~~Ҳϣ�������������ջ����������ţ������ǻ���������ð�յ��ļ��䣬����ð�յ���Ϊ�����ǣ������ø��ã��������Ľ�ɫ������ 50 �� 70����ʱ��ͷ�ϵĵ���һ��Ҫ���������#v4310057#ÿ��1��,���Ƕһ�ñ�ӵĵ��ߣ�\r\n\r\n";
            text += "" + ��ɫ��ͷ + "#L1#��ȡ#v1003439##z1003439#\t\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L2##r#v1122017##z1122017#\tʹ��Ȩ��10Сʱ\t��Ҫ���600��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L3##r#v1122017##z1122017#\tʹ��Ȩ��1��\t��Ҫ���1200��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L4##r#v1122017##z1122017#\tʹ��Ȩ��7��\t��Ҫ���6000��\r\n\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L5##r#v4310003##z4310003#1��\t��Ҫ���800��\r\n\r\n"//3
            cm.sendSimple(text);
            }
        } else if (selection == 1) {
            if (cm.haveItem(4310057, 1)) {
cm.gainItem(4310057, -1);
cm.gainItem(1003439,8,8,8,8,0,0,0,0,30,30,15,15,0,0);
cm.����(2, "������ð�յ�������[" + cm.getPlayer().getName() + "]һ������ɫ����ͷ��������Ϊ����Ŭ�������Ľ�����Ҫ��������Ŷ����");
            cm.dispose();
			}else{
            cm.sendOk("�Բ���û��#v4310057# x1��\r\n���޷������㡾��ɫ����ͷ����Ŷ�����������~\r\n������50����70��������ȡһ��Ŷ��");
            cm.dispose();
			}
        } else if (selection == 2) {
if (cm.getPlayer().getCSPoints(1) >= 600) {
cm.gainNX(-600);
cm.gainItem(1122017,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�������׹��10Сʱʹ��Ȩ��");
cm.dispose();
}else{
cm.sendOk("���߲����޷�������");
cm.dispose();
}
        } else if (selection == 3) {
if (cm.getPlayer().getCSPoints(1) >= 1200) {
cm.gainNX(-1200);
cm.gainItem(1122017,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�������׹��1��ʹ��Ȩ��");
cm.dispose();
}else{
cm.sendOk("���߲����޷�������");
cm.dispose();
}
        } else if (selection == 4) {
if (cm.getPlayer().getCSPoints(1) >= 6000) {
cm.gainNX(-6000);
cm.gainItem(1122017,0,0,0,0,0,0,0,0,0,0,0,0,0,0,168);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�������׹��7��ʹ��Ȩ��");
cm.dispose();
}else{
cm.sendOk("���߲����޷�������");
cm.dispose();
}
        } else if (selection == 5) {
if (cm.getPlayer().getCSPoints(1) >= 800) {
cm.gainNX(-800);
cm.gainItem(4310003,1);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����(�����ڱ��������)1������ȥ�齱�ɣ�");
cm.dispose();
}else{
cm.sendOk("����㣬�޷�����");
cm.dispose();
}
		}
    }
}



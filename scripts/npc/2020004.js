importPackage(Packages.client);
var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            var txt = "";
            txt = "����ÿ�����̵�8��NPCŶ���ҽ�������\r\n\r\n";

            if (cm.getPS() == 7){// cm.getPS()  ����˼�� ��ȡ����ֵ�������1 �͵ó��������Ѿ�����˵�һ�� �����������еڶ�������!

                txt += "#L1##b�ռ�#v4000048#.#v4000055#X200����Ұ��֮β#v4000051#.#4000052#X100�������ң����͸���80��#v4001322#��#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���Ȼ����ȥ��.��߳�-�ֿ����Ա-���!\r\n��ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000048,200) && cm.haveItem(4000055,200) && cm.haveItem(4000051,100) && cm.haveItem(4000052,100)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ����ڶ����ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(4000048, -200);
                cm.gainItem(4000055, -200);
                cm.gainItem(4000051, -100);
                cm.gainItem(4000052, -100);
                cm.gainItem(4001322, 80);
cm.gainExp(+800000);
cm.gainMeso(+800000);
                cm.sendOk("���̵�8�����!��ϲ��ý��=800000������=800000.80��#v4001322#\r\n\r\nȻ����ȥ��..��߳�-�ֿ����Ա-���.������һ����");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�#v4000048#.#v4000055#X200����Ұ��֮β#v4000051#.#4000052#X100��������!���͸���80��#v4001322#��");
                cm.dispose();
            }
        }
    }
}

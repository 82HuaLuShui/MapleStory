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
            txt = "����ÿ�����̵�7��NPCŶ���ҽ�С��\r\n\r\n";

            if (cm.getPS() == 6){// cm.getPS()  ����˼�� ��ȡ����ֵ�������1 �͵ó��������Ѿ�����˵�һ�� �����������еڶ�������!

                txt += "#L1##b�ռ��ǹ⾫����ǿ�#v4000059#X200�����¹⾫����¿�#v4000060#X200���չ⾫����տ�#v4000061#X200�������ң��һ��͸���һ����#v4000038#��#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���Ȼ����ȥ��.����ѩ��-�ֿ����Ա-������!\r\n��ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000059,200) && cm.haveItem(4000060,200) && cm.haveItem(4000061,200)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ����ڶ����ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(4000059, -200);
                cm.gainItem(4000060, -200);
                cm.gainItem(4000061, -200);
                cm.gainItem(4000038, 1);
cm.gainExp(+500000);
cm.gainMeso(+500000);
                cm.sendOk("���̵�7�����!��ϲ��ý��=500000������=500000.һ����#v4000038#\r\n\r\nȻ����ȥ��..����ѩ��-�ֿ����Ա-������.������һ����");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�200���ǹ⾫����ǿ�#v4000059#��200���¹⾫����¿�#v4000060#��200���չ⾫����տ�#v4000061#��������!�һ��͸���һ����#v4000038#��");
                cm.dispose();
            }
        }
    }
}

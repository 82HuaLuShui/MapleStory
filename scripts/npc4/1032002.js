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
            txt = "����ÿ�����̵�3��NPCŶ��\r\n\r\n";

            if (cm.getPS() == 2){// cm.getPS()  ����˼�� ��ȡ����ֵ�������1 �͵ó��������Ѿ�����˵�һ�� �����������еڶ�������!

                txt += "#L1##b�ռ�100����֦#v4000003#.100���������֮β#v4000013#�����ң��һ��͸���10��#v4000313#��#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���Ȼ����ȥ��.��ʿ����-�ֿ��ϰ�-������!\r\n��ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000003,100) && cm.haveItem(4000013,100)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ����ڶ����ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(4000003, -100);
                cm.gainItem(4000013, -100);
                cm.gainItem(4000313, 10);
cm.gainExp(+10000);
cm.gainMeso(+25000);
                cm.sendOk("���̵�3�����!��ϲ��ý��=250000������=100000.10��#v4000313#\r\n\r\nȻ����ȥ��.��ʿ����-�ֿ��ϰ�-������.������һ����");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�100����֦#v4000003#������!");
                cm.dispose();
            }
        }
    }
}

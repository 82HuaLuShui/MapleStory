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
            txt = "����ÿ�����̵�9��NPCŶ���ҽ����\r\n\r\n";

            if (cm.getPS() == 8){// cm.getPS()  ����˼�� ��ȡ����ֵ�������1 �͵ó��������Ѿ�����˵�һ�� �����������еڶ�������!

                txt += "#L1##b�ռ�#v4000106##v4000107##v4000110#X200�������ң�������#v2049100##v2340000#������.��#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���Ȼ����ȥ��.��ľ��-�ֿ����Ա-��˹��!\r\n��ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000106,200) && cm.haveItem(4000107,200) && cm.haveItem(4000110,200)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ����ڶ����ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(4000106, -200);
                cm.gainItem(4000107, -200);
                cm.gainItem(4000110, -200);
                cm.gainItem(2340000, 2);
                cm.gainItem(2049100, 2);
cm.gainExp(+500000);
cm.gainMeso(+500000);
cm.gainNX(+500);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�������������9�֣�");
                cm.sendOk("���̵�9�����!��ϲ��ý��=500000������=500000�����=500��.#v2049100##v2340000#������.\r\n\r\n��");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�#v4000106##v4000107##v4000110#X200�������ң�");
                cm.dispose();
            }
        }
    }
}

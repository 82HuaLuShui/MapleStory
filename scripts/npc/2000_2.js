/*
 * 
 * @type����װ���һ�
 * @npcID9310101
 * @����Ϊ��ñ��
 */
/* 
 case 1002695://����ñ
 case 1002609://�ö�ħ��ñ
 case 1002665://������ñ
 case 1002985://����ñ��
 case 1002986://��������
 case 1002761://��Ҷ���
 case 1002760://����ñ
 case 1002583://�����ͷ��
 case 1002543://����ñ
 case 1002448://��ɫͷ��
 */
importPackage(net.sf.odinms.client);
var ʱ��֮ʯ = 4021010;
var status = 0;
var zones = 0;
var ItemId = Array(
        Array(4000017, 100, "��ͷ"),
        Array(1902034, 3000, "�򶹶�������"),
        Array(1912027, 3000, "�򶹶�������Ƥ����"),
        //Array(4032226, 800, "�ƽ�����"),
        Array(5150040, 500, "�ʼ�����"),
        Array(2049100, 1000, "�������"),
        //Array(4310088, 600, "RED��")
        Array(2340000, 2000, "ף������")
        //Array(1082540, 20000, "��������"),
        //Array(1052647, 20000, "����ս����"),
        //Array(1102612, 20000, "��������"),
        //Array(1003946, 20000, "����ñ��"),
        //Array(1072853, 20000, "����Ь��"),
        //Array(1322215, 20000, "�������ϴ�"),
        //Array(1422152, 20000, "�����޴�"),
        //Array(1402210, 20000, "����˫�ֽ�"),
        //Array(1432178, 20000, "����֮ì"),
        //Array(1452216, 20000, "����֮��"),
        //Array(1462204, 20000, "����������"),
        //Array(1472226, 20000, "����ȭ��"),
        //Array(1332238, 20000, "�����и���"),
        //Array(1372188, 20000, "��������"),
        //Array(1382222, 20000, "��������"),
        //Array(1492190, 20000, "����ǹ"),
        //Array(1012172, 20000, "�ֲ����޵��˿�")
        //�����������߶һ����밴�մ˸�ʽ�������á�
        );

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
            if (cm.getLevel < 10) {
                cm.sendOK("��ĵȼ�����10�������򿪸��", 2);
                cm.dispose();
            } else {
                selStr = "\t\t#e#r����Ҫ�ö����һ�ʲô��Ʒ�أ�����\r\nĿǰӵ��"+cm.getBeans()+"������#n#k\r\n";
                for (var i = 0; i < ItemId.length; i++) {
                    selStr += "\r\n#L" + i + "##b#v" + ItemId[i][0] + "##k (��Ҫ#r " + ItemId[i][1] + " #k�� ������)";
                }
                cm.sendSimple(selStr);
                zones == 0;
            }
        } else if (status == 1) {
            if (zones == 1) {
                cm.sendNext("�����Ұ�����ʲô�أ�", 2);
                zones = 2;
            } else if (zones == 0) {
if (cm.getBeans() >= ItemId[selection][1]) {
cm.gainBeans(-(ItemId[selection][1]));
                        cm.gainItem(ItemId[selection][0], 1);
                        cm.����(3, "�ҳɹ��ö����һ��˽�������");
                        cm.sendOk("�һ��ɹ�����챳��!");
                        cm.dispose();
                    } else {
                        cm.sendOk("�������㣡");
                        cm.dispose();
                    }
                }
            } else if (status == 2) {
                if (zones == 2) {
                    cm.sendNext("������������ħ����ʱ��֮ʯ��һȺĢ����͵����,���ܰ�ȥ��������");
                    zones = 3;
                }
            } else if (status == 3) {
                if (zones == 3) {
                    cm.sendNext("��,���û���⣿���������Щ͵����ʱ��֮ʯ��Ģ����������ʲô�ط���?", 2);
                    zones = 4;
                }
            } else if (status == 4) {
                if (zones == 4) {
                    cm.sendNext("�����Ʒ��#bȫ�������#k�ġ�������������ϵ�#b�κ�һ������#k�ϻ�ȡ��");
                    zones = 5;
                }
            } else if (status == 5) {
                if (zones == 5) {
                    cm.sendYesNo("������ܰ��������æ�Ļ�,�һ����һЩ���Ľ����ģ����Ƿ�Ը����ң�");
                }
            } else if (status == 6) {
                cm.setBossLog('MogoQuest');
                cm.gainItem(5220001, 1);
                cm.sendOk("�ǳ���л����ú����˵�������ܻ�����Ʒ�ˣ�");
                cm.dispose();
            }
        }
}	
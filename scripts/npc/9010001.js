importPackage(net.sf.odinms.client);
var status = -1;
var beauty = 0;
var tosend = 0;
var sl;
var mats;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -5) {
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
                cm.sendNext("�����Ҫ�����������Ұɡ�");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            var gsjb = "";
            gsjb = "��ӭ����#r�̲�ð�յ�#k���������ǻ���洦!����Ҫ��æ����?\r\n";
            gsjb += "#r#e#e��᲻��ʱ����Ŷ���ǵ�׼ʱ���鿴һ��Ŷ��#k\r\n";
            gsjb += "#r�һ:#k\r\n#b��7��֮���ҵ������һ����.˫����ѯ�ʿͷ���Ҫ�����Ŷ#l\r\n";
            gsjb += "#r���:#k\r\n#b��ֵǰ50��������˫����ȯ��ֵ\r\n��ֵǰ100��������1.5����ȯ��ֵ\r\n��ֵǰ150��������1.3����ȯ��ֵ\r\n��ֵǰ200��������50%�ͼ�ƷXXװ��\r\n��ֵǰ250��������25%�ͼ�ƷXXװ��#l\r\n";
            gsjb += "#r���:#k\r\n#b�����ڴ�...#l\r\n";
            gsjb += "#r���:#k\r\n#b�����ڴ�...#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 1 && cm.getPlayer() <= 5) {
                cm.sendOk("GM���ܲ���һ���");
                cm.dispose();
            }
            status = -1;
        } else {
            cm.dispose();
        }
    }
}
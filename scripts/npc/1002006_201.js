/*
 * 
 * @wnms
 * @����̨���͸���npc
 */
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
function start() {
    status = -1;
    action(1, 0, 0);
}
var ð�ձ� = 5000;
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
            cm.sendSimple("#r��ã�\r\n<��ѡ����Ҫ���еĲ���>\r\n\r\n#d#L0#����#v4310003##z4310003#X1��\t��Ҫ���400��\r\n\r\n#L1#����#v4310003##z4310003#X10��\t��Ҫ���4000��\r\n\r\n#b#L2#" + ��ɫ�ǵ� + "��ʼ�齱" + ��ɫ�ǵ� + "\r\n\r\n");
        } else if (status == 1) {
            if (selection == 0) {//��������
                if (cm.getPlayer().getCSPoints(1) >= 400) {
				cm.gainNX(-400);
				cm.gainItem(4310003, 1);//
            cm.sendOk("����ɹ���");
            cm.dispose();
			}else{
            cm.sendOk("�����300�㣬�޷�����!");
            cm.dispose();
			}
            } else if (selection == 1) {//�����һ�����
                if (cm.getPlayer().getCSPoints(1) >= 4000) {
				cm.gainNX(-4000);
				cm.gainItem(4310003, 10);//
			cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ�����10���ƽ�Ҷ�ӣ���һ�����ʵ�10����ɣ���");
            cm.sendOk("����ɹ���");
            cm.dispose();
			}else{
            cm.sendOk("�����4000�㣬�޷�����!");
            cm.dispose();
			}
            }else if(selection == 2){
                cm.openNpc(9050003,0);
        }
        }
    }
}



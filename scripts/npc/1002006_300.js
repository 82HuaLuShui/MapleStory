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
            cm.sendSimple("#r�װ��ĸ�λ�ϰ��ǣ���ӭ�����߶��̵꣬���¿������Զ�����ٵģ������������뿴�ԱߵĽ���\r\n<��ѡ����Ҫ�������Ʒ>\r\n\r\n#d#L0#����#v1112793##z1112793#X1��\t��Ҫ���5000��\r\n\r\n#L1#����#v1702224##z1702224#��+10����+10ħ����\t��Ҫ���2���\r\n\r\n#L2#����#v1032024##z1032024#��+10����+10ħ����\t��Ҫ���2���\r\n\r\n");
        } else if (status == 1) {
            if (selection == 0) {//��������
                if (cm.getPlayer().getCSPoints(1) >= 5000) {
				cm.gainNX(-5000);
				cm.gainItem(1112793, 1);//
			cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ��ڸ߶��̵깺��һ�������ֽ�ָ���������ҵ����°ɣ���");				
            cm.sendOk("����ɹ���");
            cm.dispose();
			}else{
            cm.sendOk("�����5000�㣬�޷�����!");
            cm.dispose();
			}
            } else if (selection == 1) {//�����һ�����
                if (cm.getPlayer().getCSPoints(1) >= 20000) {
				cm.gainNX(-20000);
				//cm.gainItem(1702224, 1);//
				cm.gainItem(1702224,0,0,0,0,0,0,10,10,0,0,0,0,0,0);//xunzhang
			cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ��ڸ߶��̵깺��һ����͸������������");		
            cm.sendOk("����ɹ���");
            cm.dispose();
			}else{
            cm.sendOk("�����2��㣬�޷�����!");
            cm.dispose();
			}
            }else if(selection == 2){
                if (cm.getPlayer().getCSPoints(1) >= 20000) {
				cm.gainNX(-20000);
				//cm.gainItem(1702224, 1);//
				cm.gainItem(1032024,0,0,0,0,0,0,10,10,0,0,0,0,0,0);//xunzhang
			cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ��ڸ߶��̵깺��һ����͸������������");		
            cm.sendOk("����ɹ���");
            cm.dispose();
			}else{
            cm.sendOk("�����2��㣬�޷�����!");
            cm.dispose();
			}
        }
        }
    }
}



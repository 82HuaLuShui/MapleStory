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
                text += "";
            }
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#L1##r#v4170009#��ȡ��֤��������\r\n��������Ʒ:\r\n#v4001215# x3��#v5150040# x5��#v1142796# x1�����=5000��\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("�ֽ������಻��1���ո�");
            cm.dispose();
			}else */if(cm.haveItem(4170009,1)){
				cm.gainItem(4170009, -1);
				cm.gainItem(4001215, 3);
				cm.gainItem(5150040, 5);
				cm.gainNX(+5000);
				cm.gainItem(1142796,20,20,20,20,4000,4000,20,20,100,100,100,100,20,20);////����
            cm.sendOk("�ɹ���ȡ��֤��������\r\n��������Ʒ:\r\n#v4001215# x3��#v5150040# x5��#v1142796# x1�����=5000��");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���ȡ��֤��������С����ǿ�ȥ�������Ӱ�ɣ���");
            cm.dispose();
			}else{
            cm.sendOk("���߲����޷�������");
            cm.dispose();
			}
		}
    }
}



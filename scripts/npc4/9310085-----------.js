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
            text += "#e#d�����ǣ������Ϲɶ����!����������ȡ��#l\r\n#d����һֱ����һ�γ�ֵ����������������������һ�β�������������Բ�����Щ���ӣ�Ϊ���·�����Ϸƽ�⣬Ŀǰ��󻯲���ֻ�ܵ����̶ֳȣ�ϣ���ܹ���⣡\r\n�������ݣ�1ǧ500����/12����/��������1����.ѩ�����Լ������һ�����.װ��ʲô�ıϾ����·����޷���������£��Ϲɶ�����GM��ȡ#v4031683#��֮��������һ����ɣ���������ǰ��ֵ1000Ԫ���ϵĹɶ���\r\n\r\n "//3
            text += "#L1##r��ȡ�ع鲹��#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1112793,1)){
			cm.sendOk("��������ı��������ٿճ�2��λ�ã�");
            cm.dispose();
        } else if(cm.haveItem(4031683,1)){
				cm.gainItem(4031683, -1);
				cm.gainItem(5010053, 1);
				cm.gainItem(4310014, 1);
                cm.gainNX(+120000);
				cm.gainMeso(15000000);
            cm.sendOk("�ɹ��һ���!");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]��ȡ��[�Ϲɶ��ع����]����л��������ð�յ��ĳ���֧��~����");
            cm.dispose();
			}else{
            cm.sendOk("��ĵ��߲��㣬�������Ѿ���ȡ���ˣ������ظ���ȡ��");
            cm.dispose();
			}
		}
    }
}



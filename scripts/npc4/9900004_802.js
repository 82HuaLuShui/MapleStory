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
            text += "#e#r�ۻ���ֵ�ﵽ300������ɻ�ã�#n#b\r\n1��ף��*�����15��\r\n2���ʼ�����10��\r\n3�����ֽ�ָ1��\r\n4��43����Ҷ����+7\r\n5��ð�ձ�=600��\r\n6����ѡС����һ��\r\n7��ѫ��һö��ȫ����+20������/ħ��+20���ƶ�/��Ծ+20��Ѫ/��+2000��������ħ�����رܡ�����+100��\r\n#r��ȡ�������Ҫ���㹻�Ŀռ�Ŷ������ϵͳ���˶���������Ա������Ŷ\r\n "//3
            text += "#L1##r#v4310016#��ȡ�ۼƳ�ֵ300���#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1112793,1)){
			cm.sendOk("��������ı��������ٿճ�2��λ�ã�");
            cm.dispose();
        } else if(cm.haveItem(4310016,1)){
				cm.gainItem(4310016, -1);
				cm.gainItem(5150040, 10);//�ʼ�
				cm.gainItem(2049100, 15);//ף��
				cm.gainItem(2340000, 15);//����
				cm.gainItem(1112793, 1);//���ֽ�ָ
				cm.gainItem(1142070,20,20,20,20,2000,2000,20,20,100,100,100,100,20,20);
				cm.gainMeso(6000000);
            cm.sendOk("��ȡ�ɹ���43������������С���ӱ����ҹ���Ա��ã�");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���ȡ�ۻ���ֵ���1����");
            cm.dispose();
			}else{
            cm.sendOk("��ĳ�ֵ�ﲻ���޶ȣ��������Ѿ���ȡ���ˣ������ظ���ȡ��");
            cm.dispose();
			}
		}
    }
}



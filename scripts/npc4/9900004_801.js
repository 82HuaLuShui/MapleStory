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
            text += "#e#r�ۻ���ֵ�ﵽ100������ɻ�ã�#n#b\r\n1�����յĽ�ָ1����ÿ���˺�ֻ�����һ����--(ȫ����+15��10����10ħ����Ѫ��+100)\r\n2������ͷ��1��\r\n3���ʼ�����5��\r\n4��ף��*�����5��\r\n5�����ֽ���1�� (��ά����5 ��������ħ����5)\r\n6��30����ְҵ����+7\r\n7��ð�ձ�=200W\r\n#r��ȡ�������Ҫ���㹻�Ŀռ�Ŷ������ϵͳ���˶���������Ա������Ŷ\r\n "//3
            text += "#L1##r#v4310014#��ȡ�ۼƳ�ֵ100���#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1112793,1)){
			cm.sendOk("��������ı��������ٿճ�2��λ�ã�");
            cm.dispose();
        } else if(cm.haveItem(4310014,1)){
				cm.gainItem(4310014, -1);
				cm.gainItem(5150040, 5);//�ʼ�
				cm.gainItem(2049100, 5);//ף��
				cm.gainItem(2340000, 5);//����
				cm.gainItem(1112793, 1);//���ֽ�ָ
				cm.gainItem(1002357, 1);//��ͷ
				cm.gainItem(1112405,15,15,15,15,100,100,10,10,0,0,50,50,0,0);
				cm.gainMeso(2000000);
            cm.sendOk("��ȡ�ɹ���30���������������ҹ���Ա��ã�");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���ȡ�ۻ���ֵ100�������");
            cm.dispose();
			}else{
            cm.sendOk("��ĳ�ֵ�ﲻ���޶ȣ��������Ѿ���ȡ���ˣ������ظ���ȡ��");
            cm.dispose();
			}
		}
    }
}



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
            text += "#e#r�ۻ���ֵ�ﵽ500������ɻ�ã�#n#b\r\n1��ף��*�����20��\r\n2���ʼ�����*10��\r\n3�����ֽ�ָ1��\r\n4����������+7��21G��\r\n5��64����Ҷ����+7\r\n6�����þ����׹һ����������ɻ��50%����ӳɣ���������Ŷ����\r\n7��������3��\r\n8����ѡС����һ��\r\n9��ð�ձ�=1000��\r\n10��ѫ��һö��ȫ����+25������/ħ��+25���ƶ�/��Ծ+20��Ѫ/��+2500��������ħ�����رܡ�����+100��\r\n#r��ȡ�������Ҫ���㹻�Ŀռ�Ŷ������ϵͳ���˶���������Ա������Ŷ\r\n"//3
            text += "#L1##r#v4310049#��ȡ�ۼƳ�ֵ500���#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1112793,1)){
			cm.sendOk("��������ı��������ٿճ�2��λ�ã�");
            cm.dispose();
        } else if(cm.haveItem(4310049,1)){
				cm.gainItem(4310049, -1);
				cm.gainItem(5150040, 10);//�ʼ�
				cm.gainItem(2049100, 20);//ף��
				cm.gainItem(2340000, 20);//����
				cm.gainItem(1112793, 1);//���ֽ�ָ
				cm.gainItem(1142335,25,25,25,25,2500,2500,25,25,100,100,100,100,20,20);//xunzhang
				cm.gainItem(1122017,1);//
				cm.gainMeso(10000000);
            cm.sendOk("��ȡ�ɹ���64���������������ֱ�3�顢�������ס�С���ӱ����ҹ���Ա��ã�");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ���ȡ�ۻ���ֵ���2����");
            cm.dispose();
			}else{
            cm.sendOk("��ĳ�ֵ�ﲻ���޶ȣ��������Ѿ���ȡ���ˣ������ظ���ȡ��");
            cm.dispose();
			}
		}
    }
}



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
            text += "#e#r�ٷ���֤����ң��ɻ�ã�#n#b\r\n1���ㄻ8W \r\n2���ʼ�����10��\r\n3���ʼҷ���10��\r\n4�����1000W\r\n5�����þ�3W\r\n6��64����ְҵ����+7\r\n7��43����ְҵ����+7\r\n8�������׹һ��\r\n#r��ȡ�������Ҫ���㹻�Ŀռ�Ŷ������ϵͳ���˶���������Ա������Ŷ\r\n"//3
            text += "#L1##r#v4310010#��ȡ�ٷ���֤��������#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1112793,1)){
			cm.sendOk("��������ı��������ٿճ�2��λ�ã�");
            cm.dispose();
        } else if(cm.haveItem(4310010,1)){
				cm.gainItem(4310010, -1);
				cm.gainItem(5150040, 10);//�ʼ�
				cm.gainItem(4001215, 10);//����
				cm.gainMeso(+10000000);
				cm.gainDY(30000);
				cm.gainItem(1122017,0,0,0,0,0,0,0,0,0,0,0,0,0,0);//
            cm.sendOk("��ȡ�ɹ���43������64���������ҹ���Ա��ã�");
            cm.dispose();
			}else{
            cm.sendOk("�㲻�ǹٷ���֤����ң��޷���ȡ����");
            cm.dispose();
			}
		}
    }
}



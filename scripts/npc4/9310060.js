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
            text += "#e#d�����ǽ���ָ���촦�����ʱ��û�еõ���ָ�ģ�������������ȡ���ǵ���ȥ��GM��.\r\n\r\n "//3
            text += "#L1##r�һ���ָ#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1112793,1)){
			cm.sendOk("��������ı��������ٿճ�2��λ�ã�");
            cm.dispose();
        } else if(cm.haveItem(4310014,1)){
				cm.gainItem(4310014, -1);
				cm.gainItem(1112320,5,5,5,5,500,500,5,5,10,10,10,10,10,10);//��׹
				//cm.gainItem(1082102,50,50,50,50,0,0,20,20,0,0,0,0,0,0);//��׹
				//cm.gainItem(1102039,50,50,50,50,0,0,20,20,0,0,0,0,0,0);//��׹
                                //cm.gainNX(+2000);
				//cm.gainMeso(1000000);
            cm.sendOk("����ָ������ɹ���!");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]����ָ������ɹ�����");
            cm.dispose();
			}else{
            cm.sendOk("Ҫ����GMŶ~");
            cm.dispose();
			}
		}
    }
}



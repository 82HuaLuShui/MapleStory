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
            text += "#d#e�����ǽ��и���װ������Ŀ���ͨ����#r����һ�����ǰ����Ҷ���в鿴��\r\n#b������Ҫ����ʲôװ����\r\n\r\n"//3
            text += "#L1##r�����������Ϲ����Ž�ָ.#l\r\n\r\n"//3
			//text += "#L6##b����#d��������:#k�һ�[�ѹ�Ӣ��ָ].#rNEW!#l\r\n\r\n"//3
			text += "#L7##r����#d��������:#k[������]�齱.#rNEW!#l\r\n\r\n"//3
			//text += "#L4##b����#d��������:#k�һ�[��ʹ��ף��].#k#l\r\n\r\n"//3
			//text += "#L5##b���#d��������:#k�һ�[������ָ].#rNEW!#k#l\r\n\r\n"//3
            text += "#L2##b����#d��������:#k����������[����̩����].#k#l\r\n\r\n"//3
            text += "#L3##b��Ů#d��������:#k����������[С�۾�].#k#l\r\n\r\n"//3			
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9000017, 0);
        } else if (selection == 6) {
		cm.openNpc(9000017, 60);
        } else if (selection == 2) {
		cm.openNpc(9000017, 30);
        } else if (selection == 3) {
		cm.openNpc(9000017, 20);
        } else if (selection == 4) {
		cm.openNpc(9000017, 40);
		} else if (selection == 5) {
		cm.openNpc(9000017, 50);
        } else if (selection == 60) {
		cm.openNpc(9000017, 60);
        } else if (selection == 7) {
		cm.openNpc(9900004, 1086);
        } else if (selection == 8) {
		cm.openNpc(9000017, 80);		
	}
    }
}



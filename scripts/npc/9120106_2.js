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
            text += "#e#r��ã������ǵ��γ�ֵ������ȡ����\r\n#b���γ�ֵ100Ԫ/300Ԫ/500Ԫ/�ֱ�����͸���һ���һ��ң���������һ��Լ�ϲ���ĵ��߼��ɣ�\r\n\r\n"//3
            text += "#L1##e#d#v4031683#���γ�ֵ100Ԫ.����XXX.\r\n"//3
            text += "#L2##e#d#v4031684#���γ�ֵ300Ԫ.����XXX.#l\r\n"//3
            text += "#L3##e#d#v4031685#���γ�ֵ500Ԫ.����XXX.#l\r\n"//3
            text += "#L4##e#d#v3010894#��ֵ�����̵�.\r\n"//3
            //text += "#L5##e#d#v1402046#1500Ԫ�ۼƽ�����ȡ��.\r\n"//3
            //text += "#L6##e#d#v4031687#2000Ԫ�ۼƽ�����ȡ��.\r\n"//3
            //text += "#L7##e#d#v4031688#3000Ԫ�ۼƽ�����ȡ��.#l\r\n"//3
            //text += "#L8##e#d#v4031689#5000Ԫ�ۼƽ�����ȡ��#l\r\n"//3
            //text += "#L9##e#d#v1462050#����ڤ��������#l\r\n"//3
            //text += "#L10##e#d#v1472068#����󱯸�����#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9330084, 1);
        } else if (selection == 2) {
		cm.openNpc(9330084, 2);
        } else if (selection == 3) {
		cm.openNpc(9330084, 3);
        } else if (selection == 4) {
		cm.openNpc(9330084, 64);
        } else if (selection == 5) {
		cm.openNpc(9330084, 65);
        } else if (selection == 6) {
		cm.openNpc(9330084, 66);
        } else if (selection == 7) {
		cm.openNpc(9330084, 67);
        } else if (selection == 8) {
		cm.openNpc(9000018, 68);
        } else if (selection == 9) {
		cm.openNpc(9000018, 69);
        } else if (selection == 10) {
		cm.openNpc(9000018, 610);
	}
    }
}



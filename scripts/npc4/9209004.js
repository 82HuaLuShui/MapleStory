/*
 By ����
 */

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		var Editing = false //true=��ʾ;false=��ʼ�
          if(Editing){
          cm.sendOk("��ͣ����");
          cm.dispose();
          return;
        } 
			cm.sendSimple("#b��ӭ������� #r#h ##k �����ǡ����᡹���ˣ�\r\n\r\n������������Թ�����־��ᣡ\r\n#r�ر���ʾ:�һ�ǰ��ȷ�ϱ�������,���������" +
            "#k\r\n#L101##b#v2043002#���ֽ�10%.#r��Ҫ:#k#v4000313#x10.#v4000463#x5.���300��.\r\n#L102##b#v2043302#�̽�10%.  #r��Ҫ:#k#v4000313#x10.#v4000463#x5.���300��.\r\n#L103##b#v2043702#����10%.  #r��Ҫ:#k#v4000313#x10.#v4000463#x5.���300��.\r\n#L104##b#v2043802#����10%.  #r��Ҫ:#k#v4000313#x10.#v4000463#x5.���300��.\r\n#L105##b#v2044002#˫�ֽ�10%.#r��Ҫ:#k#v4000313#x10.#v4000463#x5.���300��.\r\n#L106##b#v2044302#ǹ10%.    #r��Ҫ:#k#v4000313#x10.#v4000463#x5.���300��.\r\n#L107##b#v2044702#ȭ��10%.  #r��Ҫ:#k#v4000313#x10.#v4000463#x5.���300��.\r\n#L108##b#v2044502#��10%.    #r��Ҫ:#k#v4000313#x10.#v4000463#x5.���300��.\r\n#L109##b#v2044602#��10%.    #r��Ҫ:#k#v4000313#x10.#v4000463#x5.���300��.\r\n");
        } else if (status == 1) {
            
            if (selection == 101) {
                if (cm.haveItem(4000463, 5) && cm.haveItem(4000313, 10) && cm.getMeso() > 3000000) {
                    cm.gainItem(4000313, -10);
                    cm.gainItem(4000463, -5);
                    cm.gainItem(2043002, 1);
		            cm.gainMeso(-3000000);
                    cm.sendOk("�һ��ɹ�.");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���.");
                    cm.dispose();
                }
            } else if (selection == 102) {
                if (cm.haveItem(4000463, 5) && cm.haveItem(4000313, 10) && cm.getMeso() > 3000000) {
                    cm.gainItem(4000313, -10);
                    cm.gainItem(4000463, -5);
                    cm.gainItem(2043302, 1);
		            cm.gainMeso(-3000000);
                    cm.sendOk("�һ��ɹ�.");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���.");
                    cm.dispose();
				}
			 }else if (selection == 103) {
                if (cm.haveItem(4000463, 5) && cm.haveItem(4000313, 10) && cm.getMeso() > 3000000) {
                    cm.gainItem(4000313, -10);
                    cm.gainItem(4000463, -5);
                    cm.gainItem(2043702, 1);
		            cm.gainMeso(-3000000);
                    cm.sendOk("�һ��ɹ�.");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���.");
                    cm.dispose();
				}
			 }else if (selection == 104) {
                if (cm.haveItem(4000463, 5) && cm.haveItem(4000313, 10) && cm.getMeso() > 3000000) {
                    cm.gainItem(4000313, -10);
                    cm.gainItem(4000463, -5);
                    cm.gainItem(2043802, 1);
		            cm.gainMeso(-3000000);
                    cm.sendOk("�һ��ɹ�.");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���.");
                    cm.dispose();
				}
			 }else if (selection == 105) {
                if (cm.haveItem(4000463, 5) && cm.haveItem(4000313, 10) && cm.getMeso() > 3000000) {
                    cm.gainItem(4000313, -10);
                    cm.gainItem(4000463, -5);
                    cm.gainItem(2044002, 1);
		            cm.gainMeso(-3000000);
                    cm.sendOk("�һ��ɹ�.");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���.");
                    cm.dispose();
				}
			 }else if (selection == 106) {
                if (cm.haveItem(4000463, 5) && cm.haveItem(4000313, 10) && cm.getMeso() > 3000000) {
                    cm.gainItem(4000313, -10);
                    cm.gainItem(4000463, -5);
                    cm.gainItem(2044302, 1);
		            cm.gainMeso(-3000000);
                    cm.sendOk("�һ��ɹ�.");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���.");
                    cm.dispose();
				}
			 }else if (selection == 107) {
                if (cm.haveItem(4000463, 5) && cm.haveItem(4000313, 10) && cm.getMeso() > 3000000) {
                    cm.gainItem(4000313, -10);
                    cm.gainItem(4000463, -5);
                    cm.gainItem(2044702, 1);
		            cm.gainMeso(-3000000);
                    cm.sendOk("�һ��ɹ�.");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���.");
                    cm.dispose();
				}
			 }else if (selection == 108) {
                if (cm.haveItem(4000463, 5) && cm.haveItem(4000313, 10) && cm.getMeso() > 3000000) {
                    cm.gainItem(4000313, -10);
                    cm.gainItem(4000463, -5);
                    cm.gainItem(2044502, 1);
		            cm.gainMeso(-3000000);
                    cm.sendOk("�һ��ɹ�.");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���.");
                    cm.dispose();
				}
			 }else if (selection == 109) {
                if (cm.haveItem(4000463, 5) && cm.haveItem(4000313, 10) && cm.getMeso() > 3000000) {
                    cm.gainItem(4000313, -10);
                    cm.gainItem(4000463, -5);
                    cm.gainItem(2044602, 1);
		            cm.gainMeso(-3000000);
                    cm.sendOk("�һ��ɹ�.");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���.");
                    cm.dispose();
				}
			 }
        }
    }
}

	
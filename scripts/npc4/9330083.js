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
			cm.sendSimple("#b��ӭ��� #r#h ##k ,���Ե�ʱ�����˺ܶ�Ļƽ��Ҷ�ɣ�����������Զһ������Ŷ��\r\n#r�ر���ʾ:�һ�ǰ��ȷ�ϱ�������,�������Ը���" +
            "#k\r\n#L105##r#i4000313##bx15#r��ȡ#b����ְҵ������#v2280003#.\r\n\r\n#L101##r#i4000313##bx10#r��#b����ҩˮ#v2000005#x50.\r\n\r\n#L102##r#i4000313##bx20#r��#b��Ҷ#i4001126#x500.\r\n\r\n#L103##r#i4000313##bx100#r��#bף������#i2340000#x1.\r\n\r\n#L104##r#i4000313##bx50#r��#b�ƽ�����#i4032226#x1.\r\n");
        } else if (status == 1) {
            
            if (selection == 101) {
                if (cm.haveItem(4000313, 10) ) {
                    cm.gainItem(4000313, -10);
					cm.gainItem(2000005, 50)
                    cm.sendOk("���#v2000005#.");
                    cm.dispose();
                } else {
                    cm.sendOk("������û���㹻��#v4000313#,���ڴ�ȷ��.");
                    cm.dispose();
                }
            } else if (selection == 102) {
                if (cm.haveItem(4000313, 20) ) {
                    cm.gainItem(4000313, -20);
                    cm.gainItem(4001126, 500);
                    cm.sendOk("���#v4001126#��Ҷx500��.");
                    cm.dispose();
                } else {
                    cm.sendOk("������û���㹻��#v4000313#,���ڴ�ȷ��.");
                    cm.dispose();
				}
			 }else if (selection == 103) {
                if (cm.haveItem(4000313, 100) ) {
                    cm.gainItem(4000313, -100);
                    cm.gainItem(2340000, 1);
                    cm.sendOk("���#v2340000#ף������.");
                    cm.dispose();
                } else {
                    cm.sendOk("������û���㹻��#v4000313#,���ڴ�ȷ��.");
                    cm.dispose();
				}
			 }else if (selection == 104) {
                if (cm.haveItem(4000313, 50) ) {
                    cm.gainItem(4000313, -50);
                    cm.gainItem(4032226, 1);
                    cm.sendOk("���#v4032226#�ƽ�����x1.");
                    cm.dispose();
                } else {
                    cm.sendOk("������û���㹻��#v4000313#,���ڴ�ȷ��.");
                    cm.dispose();
				}
			 }else if (selection == 105) {
                    cm.openNpc(9330083, 1);
                } 
			 else if (selection == 106) {
                if (cm.haveItem(2022034, 100) ) {
                    cm.gainItem(2022034, -100);
                    cm.gainItem(1142005, 1);
					cm.gainItem(4031456,100)
                    cm.sendOk("���#i1142005#x1#i4031456#x100");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��#i2022034#,���ڴ�ȷ��");
                    cm.dispose();
				}
			 }else if (selection == 107) {
                if (cm.haveItem(4032226, 1) ) {
                    cm.gainItem(4032226, -1);
                    cm.gainItem(2022488, 1);
                    cm.sendOk("���#i2022488#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��#i4032226#,���ڴ�ȷ��");
                    cm.dispose();
				}
			 }else if (selection == 108) {
                if (cm.haveItem(4032226, 20) ) {
                    cm.gainItem(4032226, -20);
                    cm.gainItem(2022489, 1);
                    cm.sendOk("���#i2022489#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��#i4032226#,���ڴ�ȷ��");
                    cm.dispose();
				}
			 }else if (selection == 109) {
                if (cm.haveItem(4032226, 20) ) {
                    cm.gainItem(4032226, -20);
                    cm.gainItem(2022490, 1);
                    cm.sendOk("���#i2022490#x1");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��#i4032226#,���ڴ�ȷ��");
                    cm.dispose();
				}
			 }
        }
    }
}

	
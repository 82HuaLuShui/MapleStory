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
			cm.sendSimple("#k��ӭ��� #r#h ##k,����������Բ���ð��֮��.." +
            "#k\r\n#L101##k#v1122029# սʿ֮��. ��Ҫ #v4032177#x1.\r\n#L102##k#v1122030# ��ʦ֮��. ��Ҫ #v4032177#x1.\r\n#L103##k#v1122031# ����֮��. ��Ҫ #v4032177#x1.\r\n#L104##k#v1122032# ����֮��. ��Ҫ #v4032177#x1.\r\n\r\n");
        } else if (status == 1) {
            
            if (selection == 101) {
                if (cm.haveItem(4032177, 1)) {
                    cm.gainItem(4032177, -1);
                    cm.gainItem(1122029, 1);
                    //cm.gainItem(2000005, 10);
                    //cm.gainItem(2022109, 5);
                    //cm.gainItem(4001126, 50);
                    cm.sendOk("�һ��ɹ�.");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ�����ð��֮�ģ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���߲���.");
                    cm.dispose();
                }
            } else if (selection == 102) {
                if (cm.haveItem(4032177, 1) ) {
                    cm.gainItem(4032177, -1);
                    cm.gainItem(1122030, 1);
                    //cm.gainItem(2000005, 100);
                    //cm.gainItem(2022109, 50);
                    //cm.gainItem(4001126, 500);
                    cm.sendOk("�һ��ɹ�.");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ�����ð��֮�ģ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���߲���.");
                    cm.dispose();
				}
			 }else if (selection == 103) {
                if (cm.haveItem(4032177, 1) ) {
                    cm.gainItem(4032177, -1);
                    cm.gainItem(1122031,1);
                    cm.sendOk("�һ��ɹ�.");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ�����ð��֮�ģ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���߲���.");
                    cm.dispose();
				}
			 }else if (selection == 104) {
                if (cm.haveItem(4032177, 1) ) {
                    cm.gainItem(4032177, -1);
                    cm.gainItem(1122032, 1);
                    cm.sendOk("�һ��ɹ�.");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ�����ð��֮�ģ�");
                    cm.dispose();
                } else {
                    cm.sendOk("���߲���..");
                    cm.dispose();
				}
			 }else if (selection == 105) {
                if (cm.haveItem(2022034, 30) ) {
                    cm.gainItem(2022034, -30);
                    cm.gainItem(2040917, 1);
					cm.gainItem(4031456,30)
                    cm.sendOk("���#i2040917#x1#i4031456#x30");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��#i2022034#,���ڴ�ȷ��");
                    cm.dispose();
				}
			 }else if (selection == 106) {
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

	
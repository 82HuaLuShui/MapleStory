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
			cm.sendSimple("#b��ӭ��� #r#h ##k,����ð�յ�ף���������������´󼪣�\r\n\r\n�㻹û��#v4310110#��.�š����и������лر���������Ѽ�������Ҫ�Ĳ����Ҹ�����[���ڼ����].\r\n#r��ܰ��ʾ:�һ�ǰ��ȷ�ϱ�������,ǧ��Ҫ����ò���Ŷ��\r\n" +
            "#k\r\n#L101##r#i4000252##bx200#r��#b���ڱ�#i4310110##bx10#L102##r#i4000253##bx200#r��#b���ڱ�#i4310110#x10\r\n\r\n#L103##r#i4000188##bx200#r��#b���ڱ�#i4310110##bx10#L104##r#i4000187##bx200#r��#b���ڱ�#i4310110##bx10\r\n\r\n#L105##r#i4000034##bx200#r��#b���ڱ�#i4310110##bx10.\r\n");
        } else if (status == 1) {
            
            if (selection == 101) {
                if (cm.haveItem(4000252, 200)) {
                    cm.gainItem(4000252, -200);
                    cm.gainItem(4310110,10);
					//cm.gainItem(1002851,10,10,10,10,300,300,3,3,50,50,5,5,0,0)
                    cm.sendOk("�һ��ɹ�.");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]׬ȡ��[���ڼ����]����ð�յ�ףȫ�����������֣�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���Ŷ~���ͻ�ȡ�����ٶһ��ɣ�������֣�");
                    cm.dispose();
                }
            } else if (selection == 102) {
                if (cm.haveItem(4000253, 200) ) {
                    cm.gainItem(4000253, -200);
                    cm.gainItem(4310110,10);
                    cm.sendOk("�һ��ɹ�.");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]׬ȡ��[���ڼ����]����ð�յ�ףȫ�����������֣�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���Ŷ~���ͻ�ȡ�����ٶһ��ɣ�������֣�");
                    cm.dispose();
				}
			 }else if (selection == 103) {
                if (cm.haveItem(4000188, 200) ) {
                    cm.gainItem(4000188, -200);
                    cm.gainItem(4310110,10);
                    cm.sendOk("�һ��ɹ�.");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]׬ȡ��[���ڼ����]����ð�յ�ףȫ�����������֣�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���Ŷ~���ͻ�ȡ�����ٶһ��ɣ�������֣�");
                    cm.dispose();
				}
			 }else if (selection == 104) {
                if (cm.haveItem(4000187, 200) ) {
                    cm.gainItem(4000187, -200);
                    cm.gainItem(4310110,10);
                    cm.sendOk("�һ��ɹ�.");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]׬ȡ��[���ڼ����]����ð�յ�ףȫ�����������֣�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���Ŷ~���ͻ�ȡ�����ٶһ��ɣ�������֣�");
                    cm.dispose();
				}
			 }else if (selection == 105) {
                if (cm.haveItem(4000034, 200) ) {
                    cm.gainItem(4000034, -200);
					cm.gainItem(4310110,10)
                    cm.sendOk("�һ��ɹ�.");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]׬ȡ��[���ڼ����]����ð�յ�ףȫ�����������֣�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���Ŷ~���ͻ�ȡ�����ٶһ��ɣ�������֣�");
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

	
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
			cm.sendSimple("#b��ӭ��� #r#h ##k,����ð�յ�ף��������֣����´󼪣�\r\n\r\n#v4032594##v4032594##v4032594#����������������#v4032594##v4032594##v4032594#\r\n#v4310110#��[���ڼ����]�ɹ�����ϣ������ֹ���Ŷ��\r\n#b��[���]Ϊ���е���(�ɽ���)������ֻ�ܴ�1���໻����ʧ.���Ͽɵ���.\r\n#r��ܰ��ʾ:�һ�ǰ��ȷ�ϱ�������,ǧ��Ҫ����ò���Ŷ��" +
            "#k\r\n#L101##r#i4032585##bx66#i4032586##bx66#i4032587##bx66#r��#b#v4032594#��»�ٴ���ƴ��x1.\r\n\r\n#L102##r���ڱ�#i4310110##bx30#r��#b#i4032585#����Ŵ��x11.\r\n\r\n#L103##r���ڱ�#i4310110##bx30#r��#b#i4032586#�����Ǿ�x11.\r\n\r\n#L104##r���ڱ�#i4310110##bx30#r��#b#i4032587#�����ⴸx11.\r\n");
        } else if (status == 1) {
            
            if (selection == 101) {
                if (cm.haveItem(4032585, 66) & cm.haveItem(4032586, 66) & cm.haveItem(4032587, 66)) {
                    cm.gainItem(4032585, -66);
                    cm.gainItem(4032586, -66);
                    cm.gainItem(4032587, -66);
                    cm.gainItem(4032594, 1);
					//cm.gainItem(1002851,10,10,10,10,300,300,3,3,50,50,5,5,0,0)
                    cm.sendOk("���#v4032594#������������.�������Ŷ��");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]������[������������]����ϼ���Բ,��������������ð�յ�ףȫ�����������֣�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���Ŷ~���ͻ�ȡ�����ٶһ��ɣ�������֣�");
                    cm.dispose();
                }
            } else if (selection == 102) {
                if (cm.haveItem(4310110, 30) ) {
                    cm.gainItem(4310110, -30);
                    cm.gainItem(4032585,11);
                    cm.sendOk("�һ��ɹ�.");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]������[����Ŵ��]�Ҹ����࣡����ð�յ�ףȫ�����������֣�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���Ŷ~���ͻ�ȡ�����ٶһ��ɣ�������֣�");
                    cm.dispose();
				}
			 }else if (selection == 103) {
                if (cm.haveItem(4310110, 30) ) {
                    cm.gainItem(4310110, -30);
                    cm.gainItem(4032586, 11);
                    cm.sendOk("�һ��ɹ�.");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]������[�����Ǿ�]�������ۣ�����ð�յ�ףȫ�����������֣�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���Ŷ~���ͻ�ȡ�����ٶһ��ɣ�������֣�");
                    cm.dispose();
				}
			 }else if (selection == 104) {
                if (cm.haveItem(4310110, 30) ) {
                    cm.gainItem(4310110, -30);
                    cm.gainItem(4032587, 11);
                    cm.sendOk("�һ��ɹ�.");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]������[�����ⴸ]�����Ե������ð�յ�ףȫ�����������֣�");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���Ŷ~���ͻ�ȡ�����ٶһ��ɣ�������֣�");
                    cm.dispose();
				}
			 }else if (selection == 105) {
                if (cm.haveItem(2022034, 30) ) {
                    cm.gainItem(2022034, -30);
                    cm.gainItem(2040917, 11);
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

	
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
			cm.sendSimple("#b��ӭ��� #r#h ##k ,����ð�յ�ף��������֣�#v4310110#�������Ϻ�ԥ԰NPC�����ɻ�ȡ��\r\n#r�ر���ʾ:�һ�ǰ��ȷ�ϱ�������,�����" +
            "#k\r\n#L101##r#i4032592##b#i4032593##b#i4032594##b#r��#b#v1102248#��ά+8.HP/MP+1888.��/ħ+8.\r\n\r\n#L102##r���ڱ�#i4310110##bx188#r��#b#i1002851#��ά+10.HP/MP+300.��/ħ+3.\r\n\r\n#L103##r���ڱ�#i4310110##bx188#r��#b#i1132041#��ά+8.HP/MP+888.��/ħ+1.\r\n\r\n#L104##r���ڱ�#i4310110##bx3#r��#b#i5121020#x6.ϲ����BUFF.��/ħ.15����\r\n");
        } else if (status == 1) {
            
            if (selection == 101) {
                if (cm.haveItem(4032592, 1) & cm.haveItem(4032593, 1) & cm.haveItem(4032594, 1)) {
                    cm.gainItem(4032592, -1);
                    cm.gainItem(4032593, -1);
                    cm.gainItem(4032594, -1);
					cm.gainItem(1102248,8,8,8,8,1888,1888,8,8,88,88,0,0,0,0)
                    cm.sendOk("���#v1102248#��������.������֣�");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]������ʳ���һ�����������[��������]����");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]������������������ߡ�");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]ףȫ������ð�յ���ң�����󼪣���չ��ͼ��������飡");
                    cm.dispose();
                } else {
                    cm.sendOk("����û�д���ȫ����ʳ.");
                    cm.dispose();
                }
            } else if (selection == 102) {
                if (cm.haveItem(4310110, 188) ) {
                    cm.gainItem(4310110, -188);
                    cm.gainItem(1002851,10,10,10,10,300,300,3,3,50,50,5,5,0,0);
                    cm.sendOk("�һ��ɹ�.");
                    cm.dispose();
                } else {
                    cm.sendOk("������û���㹻��#v4310110#,���ڴ�ȷ��.");
                    cm.dispose();
				}
			 }else if (selection == 103) {
                if (cm.haveItem(4310110, 188) ) {
                    cm.gainItem(4310110, -188);
                    cm.gainItem(1132041,8,8,8,8,888,888,1,1,0,0,0,0,0,0);
                    cm.sendOk("�һ��ɹ�.");
                    cm.dispose();
                } else {
                    cm.sendOk("������û���㹻��#v4310110#,���ڴ�ȷ��.");
                    cm.dispose();
				}
			 }else if (selection == 104) {
                if (cm.haveItem(4310110, 3) ) {
                    cm.gainItem(4310110, -3);
                    cm.gainItem(5121020, 6);
                    cm.sendOk("�һ��ɹ�.");
                    cm.dispose();
                } else {
                    cm.sendOk("������û���㹻��#v4031636#,���ڴ�ȷ��.");
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

	
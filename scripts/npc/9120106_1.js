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
			cm.sendSimple("#k��ӭ��� #r#h ##k,���������������̳ǣ���л����ǵ�������\r\n��ֵ������1Ԫ=1��#v4310150#+200��ȯ��\r\n#r�ر���ʾ:�һ�ǰ��ȷ�ϱ�������,���������\r\n10Ԫ�ػ�����ں�:#v4032226#x5.#v2000005#x20.#v2022109#x5.#v4001126#x50." +
            "#k\r\n#L101##k#v4000422#10Ԫ�ػ����x1 �۸� #v4310150#x10.\r\n\r\n#L102##k#v4000422#10Ԫ�ػ����x10 �۸� #v4310150#x100.\r\n\r\n");
        } else if (status == 1) {
            
            if (selection == 101) {
                if (cm.haveItem(4310150, 10)) {
                    cm.gainItem(4310150, -10);
                    cm.gainItem(4032226, 5);
                    cm.gainItem(2000005, 10);
                    cm.gainItem(2022109, 5);
                    cm.gainItem(4001126, 50);
                    cm.sendOk("�ɹ������������л������");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ�����10Ԫ�ػ��������л��������ð�յ�����������");
                    cm.dispose();
                } else {
                    cm.sendOk("��Ʒ����Ҳ��㣬����ϵGM����");
                    cm.dispose();
                }
            } else if (selection == 102) {
                if (cm.haveItem(4310150, 100) ) {
                    cm.gainItem(4310150, -100);
                    cm.gainItem(4032226, 50);
                    cm.gainItem(2000005, 100);
                    cm.gainItem(2022109, 50);
                    cm.gainItem(4001126, 500);
                    cm.sendOk("�ɹ������������л������");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ�����10Ԫ�ػ����x10����л��������ð�յ�����������");
                    cm.dispose();
                } else {
                    cm.sendOk("��Ʒ����Ҳ��㣬����ϵGM����");
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

	
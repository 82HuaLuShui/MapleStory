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
			cm.sendSimple("#b��ӭ������� #r#h ##k �������ǡ������������һ�����\r\n\r\n��ս�������ս��Ʒ���ɶһ��������н�����\r\n#r�ر���ʾ:�һ�ǰ��ȷ�ϱ�������,���������" +
            "#k\r\n#L101##b#v1112426#��ά+5.HP/MP+888.��/ħ+5��10��Ȩ��.\r\n#r�һ���Ҫ:#k#v4310099#x30.#v4000017#x10.#v4000021#x10.���50��.\r\n\r\n#L102##b#v1112585#��ά+6.HP/MP+1000.��/ħ+6��10��Ȩ��.\r\n#r�һ���Ҫ:#k#v4002000#x30.#v4021001#x5.#v4011004#x5.���500��.\r\n\r\n#L103##b#v1112915#��ά+3.HP/MP+500.��/ħ+3(����ʹ��).\r\n#r�һ���Ҫ:#k#v4002001#x30.#v4021002#x10.#v4011004#x10.���1ǧ��.\r\n\r\n#L104##b#v1082232#��ά+3.HP/MP+500.��/ħ+3(����ʹ��).\r\n#r�һ���Ҫ:#k#v4002002#x20.#v4021004#x15.#v4011006#x15.���1ǧ��.\r\n");
        } else if (status == 1) {
            
            if (selection == 101) {
                if (cm.haveItem(4310099, 30) & cm.haveItem(4000017, 10) & cm.haveItem(4000021, 10) && cm.getMeso() > 500000) {
                    cm.gainItem(4310099, -30);
                    cm.gainItem(4000017, -10);
                    cm.gainItem(4000021, -10);
		            cm.gainMeso(-500000);
				    cm.gainItem(1112426,5,5,5,5,888,888,5,5,0,0,0,0,0,0,240);//�ѹ�Ӣ��ָ ����
                    cm.sendOk("�һ��ɹ�.");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ��һ�������������ѹ�Ӣ��ָ10��Ȩ��������");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���.");
                    cm.dispose();
                }
            } else if (selection == 102) {
                if (cm.haveItem(4002000, 30) & cm.haveItem(4021001, 5) & cm.haveItem(4011004, 5) && cm.getMeso() > 5000000) {
                    cm.gainItem(4002000, -30);
                    cm.gainItem(4021001, -5);
                    cm.gainItem(4011004, -5);
		            cm.gainMeso(-5000000);
			        cm.gainItem(1112585,6,6,6,6,1000,1000,6,6,0,0,0,0,0,0,240);//������ʹ
                    cm.sendOk("�һ��ɹ�.");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ��һ�����������������ʹף����ָ10��Ȩ��������");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���.");
                    cm.dispose();
				}
			 }else if (selection == 103) {
                if (cm.haveItem(4002001, 30) & cm.haveItem(4021002, 10) & cm.haveItem(4011004, 10) && cm.getMeso() > 10000000) {
                    cm.gainItem(4002001, -30);
                    cm.gainItem(4021002, -10);
                    cm.gainItem(4011004, -10);
		            cm.gainMeso(-10000000);
				    cm.gainItem(1112915,3,3,3,3,500,500,3,3,0,0,0,0,0,0);//�������
                    cm.sendOk("�һ��ɹ�.");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ��һ���߸���������������ָ��������");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���.");
                    cm.dispose();
				}
			 }else if (selection == 104) {
                if (cm.haveItem(4002002, 20) & cm.haveItem(4021004, 15) & cm.haveItem(4011006, 15) && cm.getMeso() > 10000000) {
                    cm.gainItem(4002002, -20);
                    cm.gainItem(4021004, -15);
                    cm.gainItem(4011006, -15);
		            cm.gainMeso(-10000000);
				    cm.gainItem(1082232,3,3,3,3,500,500,3,3,20,20,0,0,0,0);//Ů�������
                    cm.sendOk("�һ��ɹ�.");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ��һ���ո���������Ů�������������");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���.");
                    cm.dispose();
				}
			 }else if (selection == 105) {
                if (cm.haveItem(2022034, 30) ) {
                    cm.gainItem(2022034, -30);
                    cm.gainItem(2040917, 1);
					cm.gainItem(4031456,30)
                    cm.sendOk("���#i2040917#x1#i4031456#x30");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]������ʳ���һ�����������[��������]����");
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
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]������ʳ���һ�����������[��������]����");
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
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]������ʳ���һ�����������[��������]����");
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
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]������ʳ���һ�����������[��������]����");
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
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]������ʳ���һ�����������[��������]����");
                    cm.dispose();
                } else {
                    cm.sendOk("������û��#i4032226#,���ڴ�ȷ��");
                    cm.dispose();
				}
			 }
        }
    }
}

	
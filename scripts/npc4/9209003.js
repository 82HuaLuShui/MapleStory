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
			cm.sendSimple("#b��ӭ������� #r#h ##k �������ǡ�����ѫ�¡���������\r\n\r\n���Թ�����ս��Ʒ���ɶһ�/����ѫ�£�\r\n#r�ر���ʾ:�һ�ǰ��ȷ�ϱ�������,���������" +
            "#k\r\n#L101##b#v1142350#Lv45.��ά+5.HP/MP+500.��/ħ+5.#r�һ���Ҫ:\r\n#k#v4000040##v4000176##v2012001#x20.#v4000070##v4000071##v4000072##v4000074#x200.���200��.\r\n\r\n#L102##b#v1142351#Lv75.��ά+7.HP/MP+700.��/ħ+7.#r�һ���Ҫ:\r\n#k#v1142350#x1.#v2022142##v4000257#x20.#v4000053##v4000054##v4000082#x200.���500��.\r\n\r\n#L103##b#v1142352#Lv90.��ά+9.HP/MP+900.��/ħ+9.#r�һ���Ҫ:\r\n#k#v1142351#x1.#v4001241##v4001242#x10.#v4000151#x50.#v4000273##v4000274##v4000478#x200.���800��.\r\n\r\n#L104##b#v1142353#Lv105.��ά+11.HP/MP+1100.��/ħ+11.#r�һ���Ҫ:\r\n#k#v1142353#x1.#v4000175##v4000235##v4000243#x10.#v4000432##v4000434##v4000265#x200.���1ǧ500��.\r\n\r\n#L105##b#v1142354#Lv120.��ά+13.HP/MP+1300.��/ħ+13.#r�һ���Ҫ:\r\n#k#v1142353#x1.#v4000460##v4000461##v4000462#x10.#v4000448##v4000453##v4000458#x200.���2ǧ��.\r\n");
        } else if (status == 1) {
            
            if (selection == 101) {
                if (cm.haveItem(4000040, 20) & cm.haveItem(4000176, 20) & cm.haveItem(2012001, 20) & cm.haveItem(4000070, 200) & cm.haveItem(4000071, 200) & cm.haveItem(4000072, 200) & cm.haveItem(4000074, 200) && cm.getMeso() > 1500000) {
                    cm.gainItem(4000040, -20);
                    cm.gainItem(4000176, -20);
                    cm.gainItem(2012001, -20);
                    cm.gainItem(4000070, -200);
                    cm.gainItem(4000071, -200);
                    cm.gainItem(4000072, -200);
                    cm.gainItem(4000074, -200);
		            cm.gainMeso(-2000000);
				    cm.gainItem(1142350,5,5,5,5,500,500,5,5,0,0,0,0,0,0);//ѫ��
                    cm.sendOk("�һ��ɹ�.");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ��һ�����ϰʮ������ѫ�� I��������");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���.");
                    cm.dispose();
                }
            } else if (selection == 102) {
                if (cm.haveItem(1142350, 1) & cm.haveItem(2022142, 20) & cm.haveItem(4000257, 20) & cm.haveItem(4000082, 200) & cm.haveItem(4000053, 200) & cm.haveItem(4000054, 200) && cm.getMeso() > 3000000) {
                    cm.gainItem(1142350, -1);
                    cm.gainItem(2022142, -20);
                    cm.gainItem(4000257, -20);
                    cm.gainItem(4000082, -200);
                    cm.gainItem(4000053, -200);
                    cm.gainItem(4000054, -200);
		            cm.gainMeso(-5000000);
				    cm.gainItem(1142351,7,7,7,7,700,700,7,7,0,0,0,0,0,0);//ѫ��
                    cm.sendOk("�һ��ɹ�.");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ��һ�����ϰʮ������ѫ�� II��������");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���.");
                    cm.dispose();
				}
			 }else if (selection == 103) {
                if (cm.haveItem(1142351, 1) & cm.haveItem(4000151, 50) & cm.haveItem(4001241, 10) & cm.haveItem(4001242, 10) & cm.haveItem(4000273, 200) & cm.haveItem(4000274, 200) & cm.haveItem(4000478, 200) && cm.getMeso() > 8000000) {
                    cm.gainItem(1142351, -1);
                    cm.gainItem(4001241, -10);//��������
                    cm.gainItem(4001242, -10);//�İ�ʨ����
                    cm.gainItem(4000151, -50);//ʱ����������
                    cm.gainItem(4000273, -200);//�����Ϲ�ͷ
                    cm.gainItem(4000274, -200);//���ѵĽ�
                    cm.gainItem(4000478, -200);//ľ����β
		            cm.gainMeso(-8000000);
				    cm.gainItem(1142352,9,9,9,9,900,900,9,9,0,0,0,0,0,0);//ѫ��
                    cm.sendOk("�һ��ɹ�.");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ��һ�����ʽʮ������ѫ�¡�������");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���.");
                    cm.dispose();
				}
			 }else if (selection == 104) {
                if (cm.haveItem(1142352, 1) & cm.haveItem(4000175, 10) & cm.haveItem(4000235, 10) & cm.haveItem(4000243, 10) & cm.haveItem(4000432, 200) & cm.haveItem(4000434, 200) & cm.haveItem(4000265, 200) && cm.getMeso() > 15000000) {
                    cm.gainItem(1142352, -1);
                    cm.gainItem(4000175, -10);
                    cm.gainItem(4000235, -10);
                    cm.gainItem(4000243, -10);
                    cm.gainItem(4000432, -200);
                    cm.gainItem(4000434, -200);
                    cm.gainItem(4000265, -200);
		            cm.gainMeso(-15000000);
				    cm.gainItem(1142353,11,11,11,11,1100,1100,11,11,0,0,0,0,0,0);//ѫ��
                    cm.sendOk("�һ��ɹ�.");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ��һ���רҵʮ������ѫ�¡�������");
                    cm.dispose();
                } else {
                    cm.sendOk("���ĵ��߲���.");
                    cm.dispose();
				}
			 }else if (selection == 105) {
                if (cm.haveItem(1142353, 1) & cm.haveItem(4000460, 10) & cm.haveItem(4000461, 10) & cm.haveItem(4000462, 10) & cm.haveItem(4000448, 200) & cm.haveItem(4000453, 200) & cm.haveItem(4000458, 200) && cm.getMeso() > 20000000) {
                    cm.gainItem(1142353, -1);
                    cm.gainItem(4000460, -10);//�Ŵ�ͷ��
                    cm.gainItem(4000461, -10);//��ʿ���
                    cm.gainItem(4000462, -10);//�ػ�֮��
                    cm.gainItem(4000448, -200);//��ɫ����
                    cm.gainItem(4000453, -200);//��ɫ����
                    cm.gainItem(4000458, -200);//��ɫ����
		            cm.gainMeso(-20000000);
				    cm.gainItem(1142354,13,13,13,13,1300,1300,13,13,0,0,0,0,0,0);//ѫ��
                    cm.sendOk("�һ��ɹ�.");
cm.����(2, "��ϲ[" + cm.getPlayer().getName() + "]�ɹ��һ�����ʦʮ������ѫ�¡�������");
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

	
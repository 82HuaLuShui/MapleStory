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
            text += "#e#d�����ɶ�������ȡ����\r\n����������\r\n#v1112140#ȫ����+5.��/ħ+5.HP/MP+300.#l\r\n#v1112247#ȫ����+5.��/ħ+5.HP/MP+300.#l\r\n\r\n"//3
            text += "#L1##r�һ�1000Ԫ�ۼƽ���#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("���������಻��2���ո�");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("�ֽ������಻��1���ո�");
            cm.dispose();
			}else */if(cm.haveItem(4031683,1)){
				cm.gainItem(4031683, -1);
				cm.gainItem(1112140,5,5,5,5,300,300,5,5,0,0,0,0,0,0);
				cm.gainItem(1112247,5,5,5,5,300,300,5,5,0,0,0,0,0,0);
                                cm.gainNX(+260000);
				//cm.gainItem(1142907,35,35,35,35,1200,1200,35,40,100,100,0,0,10,10);
				//cm.gainMeso(100000);
            cm.sendOk("�һ��ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ������1000Ԫ�����ۼƽ�����.��л���Ĵ���֧�֣�����");
            cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
			}
		}
    }
}



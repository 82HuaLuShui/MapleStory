/* global cm */
var ���� = "";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var Сѩ�� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ����1 = "#fEffect/CharacterEff/1032063/0/0#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "#e#d"+����1+"   "+����1+"  #d����ð�յ�#k  "+����1+"   "+����1+"#n\r\n"
			text +="#r[���¹���] ÿ�ո��������������룬��ߣ�����ܺ�15�οɻ��30000���#k��л֧��~!\r\n";
			text += "#d------------------------------------------  [ GM���� ]\r\n#k";
            text += "#d" + ��̾�� + "Hi~#b" + cm.getName() + "#k#n,#d�������������ˣ�#b" + cm.getGamePoints() + "#d����,��ע����ϢŶ~!#k#n\r\n"
            text += "#d�������ʲ���#b " + cm.getPlayer().getCSPoints(1) + " #d���#n#b " + cm.getPlayer().getCSPoints(2) + " #d���þ� �� "+cm.getmoneyb()+"��ֵ��\r\n���������: "+cm.getBossLog("fb")+"�Σ�\r\n"
			text += "#d------------------------------------------  [ʵ�ù���]\r\n#k";
            text += "#b#L111#" + Сѩ�� + "�����г�#l#L112#" + Сѩ�� + "ÿ������#l#L1#" + Сѩ�� + "�������#l#L2#" + Сѩ�� + "װ���ϳ�#l\r\n"
			text += "#L208#" + Сѩ�� + "���Ž�ָ#l#L1111#" + Сѩ�� + "�������#l#L258#" + Сѩ�� + "˧������#l\r\n"
            text += "#L6#" + Сѩ�� + "�н����#l#L486#" + Сѩ�� + "��ɫ����#l#L115#"
            text += "#L3#" + Сѩ�� + "�ȼ�����#l#L10#" + Сѩ�� + "�µ���̳�" + ����new + "#l\r\n\r\n"
			text += "#d------------------------------------------  [�����]";
            text += "#b#L11#" + ���� + "��������̵�#l#L12#" + ���� + "���ܵ����̵�#l#L13#" + ���� + "�ͼ�װ���̵�#l\r\n"
            text += "#L14#" + ���� + "�鿴��������#l#L15#" + ���� + "������������#l#L16#" + ���� + "�ط�BOSS��ս#l\r\n"
			text += "#L482#" + ���� + "ƽ���שϵͳ#l#L483#" + ���� + "װ������ǿ��#l#L484#" + ���� + "BOSSս��Ʒ#l\r\n"
            text += "#L17#" + ���� + "��ѯ��ͼ����#l#L19#" + ���� + "���߻���ϵͳ#l#L1012#" + ���� + "�����׹#l\r\n"
	    text += "#L1000#" + ���� + "��ݴ���#l\t#L1001#" + ���� + "����תְ#l    #L1009#" + ���� + "װ��ǿ��#l\r\n\r\n"
            if (cm.getPlayer().isGM()) {
                text += " \r\n\t\t#r���¹��ܣ�������Ա�ɼ�����ͨ��ҿ�����\r\n"
                text += "#L1000#��ݴ���#l\t#L1001#����תְ#l\r\n"
                text += "#L1002#ˢ�µ�ǰ��ͼ#l#L1003#ˢ�¸���״̬#l#L1004#�鿴����Աָ��#l\r\n"
                text += "#L1005#���ظ���#l#L1006#���ر���#l#L1007#���ط�Ӧ��#l#L1008#���ش��͵�#l\r\n"
                text += "#L1009#��������#l#L1010#�����̵�#l#L1011#���ط��ͷ#l\r\n"
            }
            cm.sendSimple(text);
        } else if (selection == 1) {//
            if (cm.getgrname() <= 0 && cm.getLevel() >= 10) {
                cm.setgrname(1);
                cm.gainItem(5150040, 5);//�ʼ�����
                cm.gainItem(5151001, 5);//���ִ�Ⱦɫ�߼���Ա��
                cm.gainItem(5152001, 5);//���ִ����������߼���Ա��
                cm.gainItem(5153000, 5);//���ִ廤�����Ļ�Ա��
                cm.gainItem(5072000, 5);//���ʵ�����
		cm.gainItem(4000463, 10);//�Ϲ����Ž�ָ
		cm.gainItem(1112446, 1);//�Ϲ����Ž�ָ
		cm.gainItem(1112724, 10,10,10,10,0,0,10,0,0,0,0,0,0,0);//�������ֽ�ָ
                cm.gainItem(1142358,50,50,50,50,200,200,10,0,0,0,0,0,15,20 );//����ѫ��
                cm.gainDY(30000);
                //cm.getPlayer().modifyCSPoints(1, 100000);
                cm.gainMeso(30000000);
                cm.����(1, "���ȵ�����"+cm.getPlayer().getName()+"��ȡ���������");
                cm.sendOk("��ϲ��ɹ���ȡ������б����£�\r\n#v5150040# x1 #v5151001# x1\r\n#v5152001# x1 #v5153000# x1\r\n#v4000463# x10\r\n#v5072000# x5\r\n#v1142358# x1\r\n���þ� x30000 ��Ϸ�� x3000000");
                cm.dispose();
            } else {
                cm.sendOk("��ȡʧ���ˣ�\r\n���ܵ�ԭ��1���ȼ�����10���޷���ȡ��\r\n���ܵ�ԭ��2�����Ѿ���ȡ��һ����,���޷��ٴ���ȡ�ˣ�\r\n�������ʣ�����ϵ�ͷ�!");
                cm.dispose();
            }
        } else if (selection == 2) {//
            cm.openNpc(9900004,2);
			 } else if (selection == 1111) {//
            cm.openNpc(9040004,0);
	    } else if (selection == 482) {//
            cm.openNpc(9900004,482);
		} else if (selection == 258) {//
            cm.openNpc(9310085,0);
		} else if (selection == 455) {//
            cm.openNpc(9900004,455)
		} else if (selection == 483) {//
            cm.openNpc(9900004,483);
		} else if (selection == 484) {//
            cm.openNpc(9900004,484);
		} else if (selection == 485) {//
            cm.openNpc(9900004,485);	
		} else if (selection == 486) {//
            cm.openNpc(9900004,486);				
        } else if (selection == 3) { //
            cm.openNpc(9900004,3);
		} else if (selection == 209) { //
            cm.openNpc(9900004,209);
		} else if (selection == 211) { //
            cm.openNpc(9900004,211);
		} else if (selection == 210) { //
            cm.openNpc(9900004,210);
		} else if (selection == 1009) { //
            cm.openNpc(9900004,82);
        } else if (selection == 4) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 5) {//
            cm.openNpc(9900004,5);
        } else if (selection == 6) {//
            cm.openNpc(9900004,6);
        } else if (selection == 7) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 8) {//
            cm.openNpc(9900004,7);
        } else if (selection == 9) {//
            cm.openNpc(9900004,9);
        } else if (selection == 10) {//
            cm.openNpc(9900004,10);
        } else if (selection == 11) {//
            cm.openShop(97);//NPCID�ǣ�2040051
            cm.dispose();
        } else if (selection == 12) {//
            cm.openShop(30);//NPCID:1200002
            cm.dispose();
        } else if (selection == 13) {//
            cm.openShop(39);//NPCID:2070002ī��
            cm.dispose();
        } else if (selection == 14) {//
            cm.openNpc(9900004,14);
        } else if (selection == 15) {//
            cm.openNpc(9900004,15);
        } else if (selection == 16) {//
	    cm.openNpc(9900004,16);
               /*if (cm.getbossmap() == 0){
                   cm.sendOk("������û�м������սboss�����У�");
                   cm.dispose();
                } else{
                   cm.warp(cm.getbossmap());
                   cm.dispose();
                }*/
        } else if (selection == 17) {//
            cm.openNpc(9900004,17);
		} else if (selection == 208) {//
            cm.openNpc(9900004,208);
        } else if (selection == 18) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 19) {//
            cm.openNpc(9900004,19);
        } else if (selection == 20) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
} else if (selection == 112) {//
cm.openNpc(9010009,0);
} else if (selection == 115) {//
cm.warp(209000001,0);
			cm.dispose();

		} else if (selection == 111) {//
		
			cm.warp(910000000,0);
			cm.dispose();


        } else if (selection == 1000) {//
            cm.openNpc(9900004, 1000);
        } else if (selection == 1001) {//
            cm.openNpc(9900004, 1001);
        } else if (selection == 1002) {//
            cm.ˢ�µ�ͼ();
            cm.dispose();
        } else if (selection == 1003) {//
            cm.ˢ��״̬();
            cm.dispose();
        } else if (selection == 1004) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1005) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1006) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1007) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1008) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1009) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1010) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1011) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1012) {//
            cm.openNpc(9900004, 78);
        } else if (selection == 1013) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1014) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1015) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        }
    }
}




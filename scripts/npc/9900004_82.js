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
			text ="��ѡ����Ҫ��ǿ����ʽ��\r\n";
			//text +="#L0##b����ǿ�� �������ֵ#l\r\n";
			//text +="#L1#��ȯǿ�� �������ֵ#l\r\n";
			text +="#r#L2#����ǿ�� �����Ҿ����#l\r\n";
			text +="#L3#���ǿ�� �����Ҿ����#l";
            cm.sendSimple(text);
        } else if (selection == 0) {//����ǿ�� �����漴2-5
		
           cm.openNpc(9900004,822);
		
        } else if (selection == 1) {//���ǿ�� �������2-5
            cm.openNpc(9900004,821);
			 } else if (selection == 2) {//����ǿ�� �Ӿ�
            cm.openNpc(9900004,823);
	    } else if (selection == 3) {//ǿ�� �Ҿ�  ���
            cm.openNpc(9900004,820);
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




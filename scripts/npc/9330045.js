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
            text += "#e#k��ӭ�������ð�յ����㳡:\r\n\r\n"//3
            text += "����������Ļ�������Ҫ��[�̳�]�������ͺ�[�߼������ͷ]������һ��[����������]�������ͼ���õ����������¼��ɿ�ʼ���㣡#l\r\n\r\n"//3
            text += "#L2##d����#v3011000# 50����. "//3
            text += "#L3##dʹ��#v5350000#�����.1:100#l\r\n\r\n"//3
			text += "#L6##r���ض���һ����㽱��."//3
			text += "#L1##d��������ȥ���㳡.#l\r\n"//3
            //text += "#L4##e#d#v1032060# ���찢��̩����.#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			if (cm.getMeso() > 0) { 
		   	cm.warp(741000200);
                  	cm.dispose();
                   	} else {
	           	cm.sendOk("׼�����˲ŵ���");
			cm.dispose(); 
			}
        } else if (selection == 2) {
			if (cm.haveItem(3011000, 1)||cm.getMeso() <= 500000) { 
                   	cm.sendOk("���ð�ձҲ���50�򣬻������Ѿ�����һ�������ˣ�");
                   	cm.dispose();
                   	} else {
			cm.gainItem(3011000,1); //��������
			cm.gainMeso(-500000);
		   	cm.sendOk("���Ѿ��ɹ����˵������ӣ���������50��ð�ձң�"); 
		   	cm.dispose();
			}
        } else if (selection == 3) {
           	   if (cm.haveItem(5350000, 1)) { 
                   cm.gainItem(5350000,-1);
                   cm.gainItem(2300001,100);
                   cm.sendOk("�һ��ɹ���");
                   cm.dispose();
                   } else {
		   cm.sendOk("��û�и߼����~"); 
		   cm.dispose();
		   }
        } else if (selection == 4) {
           	 if ((cm.getMeso() >= 500000)) { 
                   cm.gainItem(2300000,50);
		   cm.gainMeso(-500000);
                   cm.sendOk("�һ��ɹ���");
                   cm.dispose();
                   } else {
		   cm.sendOk("ð�ձҲ���~��Ҫ50��ð�ձ�"); 
		   cm.dispose(); 
		   }
        } else if (selection == 5) {
                   cm.sendNextPrev("������㳡��Ҫ#b�߼����#k����#b���#k,Ҳ��Ҫ#b���㳡ר������#k,��#b���#k,��Щ�㶼����ͨ����������.#b���#k��ȥ������̳�����!");
                   cm.dispose();
        } else if (selection == 6) {
		cm.openNpc(9209001,10);
	}
    }
}



var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
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
			text += "\t�ۼ�����ʱ�����ȡ������ \r\n\t\r\n"
			//text += "#L1##r��ȡ���ù�Ӷ���ˣ�#v5030001#x1#l\r\n\r\n\r\n\r\n"//3
				
			/*if(cm.getPlayer().getGamePoints() >= 60 && cm.getBossLog("���߽���") == 0){
					text += "#L1##r"+��ɺ�+"��������ʱ�䳬��60���ӣ�"+���+"#v5030001#x1��ʱ��1��#l\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 60 && cm.getBossLog("���߽���") > 0){
					text += ""+��ɺ�+"#r��������ʱ�䳬��60���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r��������ʱ�䳬��60���ӣ�#l"+���ڽ�����+"\r\n\r\n"//3
			}*/
			
			if(cm.getPlayer().getGamePoints() >= 60 && cm.getBossLog("���߽���") == 0){
					text += "#L2##r"+��ɺ�+"����ʱ�䳬��60���ӣ�"+���+"#v1122017#x1��ʱ��1��.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 60 && cm.getBossLog("���߽���") > 0){
					text += ""+��ɺ�+"#r����ʱ�䳬��60���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��60���ӣ�#l"+���ڽ�����+"#v1122017#x1��ʱ��1��\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 120 && cm.getBossLog("���߽���") == 1){
					text += "#L3##r"+��ɺ�+"����ʱ�䳬��120���ӣ�"+���+"#v2000019#x50.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 120 && cm.getBossLog("���߽���") > 1){
					text += ""+��ɺ�+"#r����ʱ�䳬��120���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��120���ӣ�#l"+���ڽ�����+"#v2000019#x50\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 180 && cm.getBossLog("���߽���") == 2){
					text += "#L4##r"+��ɺ�+"����ʱ�䳬��180���ӣ�"+���+"#v2022109#x2.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 180 && cm.getBossLog("���߽���") > 2){
					text += ""+��ɺ�+"#r����ʱ�䳬��180���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��180���ӣ�#l"+���ڽ�����+"#v2022109#x2\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 240 && cm.getBossLog("���߽���") == 3){
					text += "#L5##r"+��ɺ�+"����ʱ�䳬��240���ӣ�"+���+"#v5072000#x2��ʱ��1��#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 240 && cm.getBossLog("���߽���") > 3){
					text += ""+��ɺ�+"#r����ʱ�䳬��240���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��240���ӣ�#l"+���ڽ�����+"#v5072000#x2\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 300 && cm.getBossLog("���߽���") == 4){
					text += "#L6##r"+��ɺ�+"����ʱ�䳬��300���ӣ�"+���+"#v4170011#x2.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 300 && cm.getBossLog("���߽���") > 4){
					text += ""+��ɺ�+"#r����ʱ�䳬��300���ӣ�#l"+���+"\r\n\r\n"//3 
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��300���ӣ�#l"+���ڽ�����+"#v4170011#x2\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 360 && cm.getBossLog("���߽���") == 5){
					text += "#L7##r"+��ɺ�+"����ʱ�䳬��360���ӣ�"+���+"#v4170005#x2.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 360 && cm.getBossLog("���߽���") > 5){
					text += ""+��ɺ�+"#r����ʱ�䳬��360���ӣ�#l"+���+"\r\n\r\n"//3 
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��360���ӣ�#l"+���ڽ�����+"#v4170005#x2\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 420 && cm.getBossLog("���߽���") == 6){
					text += "#L8##r"+��ɺ�+"����ʱ�䳬��420���ӣ�"+���+"#v4031138#x100w.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 420 && cm.getBossLog("���߽���") > 6){
					text += ""+��ɺ�+"#r����ʱ�䳬��420���ӣ�#l"+���+"\r\n\r\n"//3 
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��420���ӣ�#l"+���ڽ�����+"#v4031138#x100w\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 600 && cm.getBossLog("���߽���") == 7){
					text += "#L9##r"+��ɺ�+"����ʱ�䳬��600���ӣ�"+���+"#v4001126#x250.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 600 && cm.getBossLog("���߽���") > 7){
					text += ""+��ɺ�+"#r����ʱ�䳬��600���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��600���ӣ�#l"+���ڽ�����+"#v4001126#x250\r\n\r\n"//3
			}
			
			if(cm.getPlayer().getGamePoints() >= 720 && cm.getBossLog("���߽���") == 8){
					text += "#L10##r"+��ɺ�+"����ʱ�䳬��720���ӣ�"+���+"#v2340000#x5.#l\r\n\r\n\r\n"//3
				} else if(cm.getPlayer().getGamePoints() >= 720 && cm.getBossLog("���߽���") > 8){
					text += ""+��ɺ�+"#r����ʱ�䳬��720���ӣ�#l"+���+"\r\n\r\n"//3
				} else {
					text += ""+���ڽ�������+"#r����ʱ�䳬��720���ӣ�#l"+���ڽ�����+"��ֵ��20���\r\n\r\n"//3
			}
            cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.haveItem(5030001, 1)){
            cm.sendOk("���Ѿ���ȡ���ˡ��޷�������ȡ��");
            cm.dispose();
			}else if (cm.haveItem(5030000, 1)){
            cm.sendOk("���Ѿ���ȡ���ˡ��޷�������ȡ��");
            cm.dispose();
			}else{
			cm.gainItem(5030001, 1);//
			cm.setBossLog("���߽���");
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ���ù�Ӷ���ˣ�");
            cm.dispose();
			}
        } else if (selection == 2) {
			
			cm.gainItem(1122017, 1, 1);//�����׹
			cm.setBossLog("���߽���");
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��60�������߽����������׹30%����1��.");
            cm.dispose();
			
			
        } else if (selection == 3) {
			cm.gainItem(2000019, 50, 1);//����ҩˮ
			cm.setBossLog("���߽���");
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��120�������߽���������ҩˮ50��.");
            cm.dispose();
        } else if (selection == 4) {
			cm.gainItem(2022109, 2);//�������Ϣ
			cm.setBossLog("���߽���");
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��180�������߽������������Ϣ2��.");
            cm.dispose();
        } else if (selection == 5) {
			cm.gainItem(5072000, 2, 1);//����
			cm.givePartyItems(5590000,-1,true);
			cm.setBossLog("���߽���");
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��240�������߽��������ʵ�����2��.");
            cm.dispose();
        } else if (selection == 6) {
			cm.gainItem(4170011, 2);//�׵�
			cm.setBossLog("���߽���");
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��300�������߽������׵�2��.");
            cm.dispose();
        } else if (selection == 7) {
			cm.gainItem(4170005, 2);//�Ƶ�
			cm.setBossLog("���߽���");
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��360�������߽������Ƶ�2��.");
            cm.dispose();
        } else if (selection == 8) {
			cm.gainItem(5150040, 1);//����
cm.gainMeso(+1000000); //�Ӽ����
			cm.setBossLog("���߽���");
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��420�������߽���������100W���.");
            cm.dispose();
		} else if (selection == 9) {
			cm.gainItem(4001126, 250);//
			cm.setBossLog("���߽���");
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��600�������߽�������Ҷ250��.");
            cm.dispose();
		} else if (selection == 10) {
				cm.setmoneyb(+20);
			cm.setBossLog("���߽���");
            cm.sendOk("��ȡ�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��720�������߽�������ֵ��20���.");
            cm.dispose();	
		}
    }
}






var status = 0;
var item;
var selected;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if (status == 1 && mode == 0) {
		cm.dispose();
		return;
	} else if (status == 2 && mode == 0) {
		cm.sendNext("" + item + "�Ǻ������ģ�����ȥ׼�����ϰɡ�");
		cm.dispose();
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		if (cm.getLevel() >= 1) {
			cm.sendNext("����������Ժϳ���������.");
		} else {
			cm.sendOk("��Ǹ���ҵĶ��������ܲ��Ͷ���");
			cm.dispose();
		}
	} else if (status == 1) {
		cm.sendSimple("�ϳ�����.��һ���Ѷ�.�鿴����Ҫʲô���ϰ�#b\r\n#L9##v1452057##z1452057##l \r\n#L1##v1432047##z1432047##l\r\n#L2##v1462050##z1462050##l#b\r\n#L3##v1372044##z1372044##l\r\n#L4##v1382057##z1382057##l\r\n#L5##v1332074##z1332074##l\r\n#L6##v1302081##z1302081##l\r\n #L7##v1472068##z1472068##l\r\n #L8##v1402046##z1402046##l\r\n ");
	} else if (status == 2) {
		selected = selection;
		if (selection == 0) {
			item = "#v4251200##z4251200#";
			cm.sendYesNo("������#v4251200##z4251200#�����Ǹ���������Ҫ������#b����ˮ��#k, #b����ˮ��#k, #b�ǻ�ˮ��#k, #b����ˮ��#k������������Ҫ1E��ҡ�");

		} else if (selection == 1) {
			item = "#v4004000##z4004000#"
			cm.sendYesNo("��Ҫ#v4004000##z4004000#*15,#v4004001##z4004001#*15,#v4004002##z4004002#*15,#v4004003##z4004003#*15");
		} else if (selection == 2) {
			item = "#v4004000##z4004000#"
			cm.sendYesNo("��Ҫ#v4004000##z4004000#*15,#v4004001##z4004001#*15,#v4004002##z4004002#*15,#v4004003##z4004003#*15");
		} else if (selection == 3) {
			item = "#v4004000##z4004000#"
			cm.sendYesNo("��Ҫ#v4004000##z4004000#*15,#v4004001##z4004001#*15,#v4004002##z4004002#*15,#v4004003##z4004003#*15");
		} else if (selection == 4) {
			item = "#v4004000##z4004000#"
			cm.sendYesNo("��Ҫ#v4004000##z4004000#*15,#v4004001##z4004001#*15,#v4004002##z4004002#*15,#v4004003##z4004003#*15");
		} else if (selection == 5) {
			item = "#v4004000##z4004000#"
			cm.sendYesNo("��Ҫ#v4004000##z4004000#*15,#v4004001##z4004001#*15,#v4004002##z4004002#*15,#v4004003##z4004003#*15");
		} else if (selection == 6) {
			item = "#v4004000##z4004000#"
			cm.sendYesNo("��Ҫ#v4004000##z4004000#*15,#v4004001##z4004001#*15,#v4004002##z4004002#*15,#v4004003##z4004003#*15");
		} else if (selection == 7) {
			item = "#v4004000##z4004000#"
			cm.sendYesNo("��Ҫ#v4004000##z4004000#*15,#v4004001##z4004001#*15,#v4004002##z4004002#*15,#v4004003##z4004003#*15");
		} else if (selection == 8) {
			item = "#v4004000##z4004000#"
			cm.sendYesNo("��Ҫ#v4004000##z4004000#*15,#v4004001##z4004001#*15,#v4004002##z4004002#*15,#v4004003##z4004003#*15");
		} else if (selection == 9) {
			item = "#v4004000##z4004000#"
			cm.sendYesNo("��Ҫ#v4004000##z4004000#*15,#v4004001##z4004001#*15,#v4004002##z4004002#*15,#v4004003##z4004003#*15");


		}
	} else if (status == 3) {
		if (selected == 0) {
			if (cm.haveItem(4005000) && cm.haveItem(4005001) && cm.haveItem(4005002) && cm.haveItem(4005003) && cm.getMeso() > 100000000) {
				cm.gainMeso(-100000000);
				cm.gainItem(4005000, -3);
				cm.gainItem(4005001, -3);
				cm.gainItem(4005002, -3);
				cm.gainItem(4005003, -3);
				cm.gainItem(4251200, 1);
				cm.sendNext("�õģ�������Ҫ��" + item + "������������������������Ϊ��ʹ�õ��ǺõĲ��ϡ�����㻹��Ҫ�ҵİ���������ʱ������");
			} else {
				cm.sendNext("���ǲ���Ǯ������������û��������#b����ˮ��#k, #b����ˮ��#k, #b����ˮ��#k, #b�ǻ�ˮ��#k, #b�ڰ�ˮ��#k��һ����");
				}
		} else if (selected == 1) {
			if (cm.itemQuantity(4004000) >=15 && cm.itemQuantity(4004001) >=15 && cm.itemQuantity(4004002) >=15 && cm.itemQuantity(4004003) >=15) {
				cm.gainItem(4004000, -15);
				cm.gainItem(4004001, -15);
				cm.gainItem(4004002, -15);
				cm.gainItem(4004003, -15);
				cm.gainItem(1432047, 1);
				cm.sendNext("�õģ�������Ҫ��" + item + "������������������������Ϊ��ʹ�õ��ǺõĲ��ϡ�����㻹��Ҫ�ҵİ���������ʱ������");
			} else {
				cm.sendNext("���ǲ��Ƕ���û��");
				}
		} else if (selected == 2) {
			if (cm.itemQuantity(4004000) >=15 && cm.itemQuantity(4004001) >=15 && cm.itemQuantity(4004002) >=15 && cm.itemQuantity(4004003) >=15) {
				cm.gainItem(4004000, -15);
				cm.gainItem(4004001, -15);
				cm.gainItem(4004002, -15);
				cm.gainItem(4004003, -15);
				cm.gainItem(1462050, 1);
				cm.sendNext("�õģ�������Ҫ��" + item + "������������������������Ϊ��ʹ�õ��ǺõĲ��ϡ�����㻹��Ҫ�ҵİ���������ʱ������");
			} else {
				cm.sendNext("���ǲ��Ƕ���û��");
				}
		} else if (selected == 3) {
			if (cm.itemQuantity(4004000) >=15 && cm.itemQuantity(4004001) >=15 && cm.itemQuantity(4004002) >=15 && cm.itemQuantity(4004003) >=15) {
				cm.gainItem(4004000, -15);
				cm.gainItem(4004001, -15);
				cm.gainItem(4004002, -15);
				cm.gainItem(4004003, -15);
				cm.gainItem(1372044, 1);
				cm.sendNext("�õģ�������Ҫ��" + item + "������������������������Ϊ��ʹ�õ��ǺõĲ��ϡ�����㻹��Ҫ�ҵİ���������ʱ������");
			} else {
				cm.sendNext("���ǲ��Ƕ���û��");
				}
		} else if (selected == 4) {
			if (cm.itemQuantity(4004000) >=15 && cm.itemQuantity(4004001) >=15 && cm.itemQuantity(4004002) >=15 && cm.itemQuantity(4004003) >=15) {
				cm.gainItem(4004000, -15);
				cm.gainItem(4004001, -15);
				cm.gainItem(4004002, -15);
				cm.gainItem(4004003, -15);
				cm.gainItem(1382057, 1);
				cm.sendNext("�õģ�������Ҫ��" + item + "������������������������Ϊ��ʹ�õ��ǺõĲ��ϡ�����㻹��Ҫ�ҵİ���������ʱ������");
			} else {
				cm.sendNext("���ǲ��Ƕ���û��");
				}
		} else if (selected == 5) {
			if (cm.itemQuantity(4004000) >=15 && cm.itemQuantity(4004001) >=15 && cm.itemQuantity(4004002) >=15 && cm.itemQuantity(4004003) >=15) {
				cm.gainItem(4004000, -15);
				cm.gainItem(4004001, -15);
				cm.gainItem(4004002, -15);
				cm.gainItem(4004003, -15);
				cm.gainItem(1332074, 1);
				cm.sendNext("�õģ�������Ҫ��" + item + "������������������������Ϊ��ʹ�õ��ǺõĲ��ϡ�����㻹��Ҫ�ҵİ���������ʱ������");
			} else {
				cm.sendNext("���ǲ��Ƕ���û��");
				}
		} else if (selected == 6) {
			if (cm.itemQuantity(4004000) >=15 && cm.itemQuantity(4004001) >=15 && cm.itemQuantity(4004002) >=15 && cm.itemQuantity(4004003) >=15) {
				cm.gainItem(4004000, -15);
				cm.gainItem(4004001, -15);
				cm.gainItem(4004002, -15);
				cm.gainItem(4004003, -15);
				cm.gainItem(1302081, 1);
				cm.sendNext("�õģ�������Ҫ��" + item + "������������������������Ϊ��ʹ�õ��ǺõĲ��ϡ�����㻹��Ҫ�ҵİ���������ʱ������");
			} else {
				cm.sendNext("���ǲ��Ƕ���û��");
				}
		} else if (selected == 7) {
			if (cm.itemQuantity(4004000) >=15 && cm.itemQuantity(4004001) >=15 && cm.itemQuantity(4004002) >=15 && cm.itemQuantity(4004003) >=15) {
				cm.gainItem(4004000, -15);
				cm.gainItem(4004001, -15);
				cm.gainItem(4004002, -15);
				cm.gainItem(4004003, -15);
				cm.gainItem(1472068, 1);
				cm.sendNext("�õģ�������Ҫ��" + item + "������������������������Ϊ��ʹ�õ��ǺõĲ��ϡ�����㻹��Ҫ�ҵİ���������ʱ������");
			} else {
				cm.sendNext("���ǲ��Ƕ���û��");
				}
		} else if (selected == 8) {
			if (cm.itemQuantity(4004000) >=15 && cm.itemQuantity(4004001) >=15 && cm.itemQuantity(4004002) >=15 && cm.itemQuantity(4004003) >=15) {
				cm.gainItem(4004000, -15);
				cm.gainItem(4004001, -15);
				cm.gainItem(4004002, -15);
				cm.gainItem(4004003, -15);
				cm.gainItem(1402046, 1);
				cm.sendNext("�õģ�������Ҫ��" + item + "������������������������Ϊ��ʹ�õ��ǺõĲ��ϡ�����㻹��Ҫ�ҵİ���������ʱ������");
			} else {
				cm.sendNext("���ǲ��Ƕ���û��");
				}
		} else if (selected == 9) {
			if (cm.itemQuantity(4004000) >=15 && cm.itemQuantity(4004001) >=15 && cm.itemQuantity(4004002) >=15 && cm.itemQuantity(4004003) >=15) {
				cm.gainItem(4004000, -15);
				cm.gainItem(4004001, -15);
				cm.gainItem(4004002, -15);
				cm.gainItem(4004003, -15);
				cm.gainItem(1452057, 1);
				cm.sendNext("�õģ�������Ҫ��" + item + "������������������������Ϊ��ʹ�õ��ǺõĲ��ϡ�����㻹��Ҫ�ҵİ���������ʱ������");
			} else {
				cm.sendNext("���ǲ��Ƕ���û��");
				}
		} else if (selected == 10) {
			if (cm.itemQuantity(1472123) >=1 && cm.itemQuantity(4001126) >=1000 && cm.itemQuantity(4000463) >=1 && cm.itemQuantity(4001084) >=1 && cm.itemQuantity(4001085) >=1) {
				cm.gainItem(1472123, -1);
				cm.gainItem(4001126, -5000);
				cm.gainItem(4251302, -1);
				cm.gainItem(4001084, -1);
				cm.gainItem(4001085, -1);
				cm.gainItem(1472122, 1);
				cm.sendNext("�õģ�������Ҫ��" + item + "������������������������Ϊ��ʹ�õ��ǺõĲ��ϡ�����㻹��Ҫ�ҵİ���������ʱ������");
			} else {
				cm.sendNext("���ǲ���Ǯ������������û���ռ���#b��Ӧװ��*1#k, #b��Ҷ*1000#k, #b�ߵȺ�ˮ��*1#k�Լ�����������");
				}
		} else if (selected == 11) {
			if (cm.itemQuantity(1482087) >=1 && cm.itemQuantity(4001126) >=1000 && cm.itemQuantity(4000463) >=1 && cm.itemQuantity(4001084) >=1 && cm.itemQuantity(4001085) >=1) {
				cm.gainItem(1482087, -1);
				cm.gainItem(4001126, -5000);
				cm.gainItem(4251302, -1);
				cm.gainItem(4001084, -1);
				cm.gainItem(4001085, -1);
				cm.gainItem(1482086, 1);
				cm.sendNext("�õģ�������Ҫ��" + item + "������������������������Ϊ��ʹ�õ��ǺõĲ��ϡ�����㻹��Ҫ�ҵİ���������ʱ������");
			} else {
				cm.sendNext("���ǲ���Ǯ������������û���ռ���#b��Ӧװ��*1#k, #b��Ҷ*1000#k, #b�ߵȺ�ˮ��*1#k�Լ�����������");
				}
			}
			cm.dispose();
		}
	}
}
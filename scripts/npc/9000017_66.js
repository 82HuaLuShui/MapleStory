status = -1;
var itemList = Array(
//-------����-------
Array(2290000,800,1,1),
			Array(2041120,800,1,1),//������������30%
			Array(2041121,800,1,1),//�������ݾ���30%
			Array(2041122,800,1,1),//������������30%
			Array(2041123,800,1,1)//�������˾���30%
);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("���Գ�ȡ������ָר�þ���Ŷ��");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.haveItem(4030002,1)) {
            cm.sendYesNo("��ã�������߸���������ָר�þ����ȡ������Ҫ��ȡ��");
        } else {
            cm.sendOk("�㱳������#b#t4030002##k��?");
            cm.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 800);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "��߸�������", notice);
            if (item != -1) {
                cm.gainItem(4030002, -1);
                cm.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            } else {
                cm.sendOk("��ȷʵ��#b#t4030002##k������ǣ�����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("�������������ʲô��û���õ���\r\n(����˰�ο������ѩ�˷��ϵ�����ʯ��)");
            cm.gainItem(4030002, -1);
            cm.gainItem(4030002, 1);
            cm.safeDispose();
        }
    }
}
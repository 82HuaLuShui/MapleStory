/* 
 * �ű�����: cm
 * �ű���;: ����н�
 * �ű�����: ����ؼ
 * ����ʱ��: 2014/12/18
 */
 
 
importPackage(net.sf.cherry.client);
var status = -1;
var beauty = 0;
var tosend = 0;
var sl;
var mats;
var dds;
function start() {
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
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendOk("�����Ҫ����н�����������Ұɡ�");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
                 // cm.getChar().gainCashDD(+1000);
				 
				 
		/*	if (cm.getLevel() < 200){
                cm.sendOk("�����С�");
				cm.safeDispose(); //�����ű�
			}	*/
            var gsjb = "";
            gsjb = "#r��Ѱ�Ҹ��ֿ�ʯ��������#v4011008##z4011008#��\r\n";
            gsjb += "#rʹ�ÿ�ʯ��������һ���ĸ����Ҫ1��С��ʯ��\r\n#k#v4010000##v4010001##v4010002##v4010003##v4010004##v4010005##v4010006#\r\n#v4020000##v4020001##v4020002##v4020003##v4020004##v4020005##v4020006##v4020007##v4020008#\r\n#L1#��ѯ��ǰӵ�е�С��ʯ#l\r\n\r\n����һ���#v4011008#��Ҫ200��#v4010007#\r\n#L2#��ѯ��ǰӵ�е��ĸ��#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 1 && cm.getPlayer() <= 5) {
                cm.sendOk("GM���ܲ���һ���");
                cm.dispose();
            }
            if (selection == 0) {
                if (cm.getPlayer().getCSPoints(0) / 500 == 0) {
                    cm.sendNext("�����ʻ�������޷��һ��������ҡ�");
                    status = -1;
                } else {
                    beauty = 1;
                    cm.sendGetNumber("������#r���#k�һ�#b#z4000463##k������:\r\n#b���� - (#r500 = 1#b)\r\n����˻���Ϣ - \r\n    �������: #r" +
                            cm.getPlayer().getCSPoints(0) + " \r\n", 1, 1, cm.getPlayer().getCSPoints(0) / 500);

                }

            
            }else if (selection == 1) {
					z1 = cm.getPlayer().getItemQuantity(4010000, false);
					z2 = cm.getPlayer().getItemQuantity(4010001, false);
					z3 = cm.getPlayer().getItemQuantity(4010002, false);
					z4 = cm.getPlayer().getItemQuantity(4010003, false);
					z5 = cm.getPlayer().getItemQuantity(4010004, false);
					z6 = cm.getPlayer().getItemQuantity(4010005, false);
					z7 = cm.getPlayer().getItemQuantity(4010006, false);
					z8 = cm.getPlayer().getItemQuantity(4020000, false);
					z9 = cm.getPlayer().getItemQuantity(4020001, false);
					z10 = cm.getPlayer().getItemQuantity(4020002, false);
					z11 = cm.getPlayer().getItemQuantity(4020003, false);
					z12 = cm.getPlayer().getItemQuantity(4020004, false);
					z13 = cm.getPlayer().getItemQuantity(4020005, false);
					z14 = cm.getPlayer().getItemQuantity(4020006, false);
					z15 = cm.getPlayer().getItemQuantity(4020007, false);
					z16 = cm.getPlayer().getItemQuantity(4020008, false);
					var zliang = z1 + z2 + z3 + z4 + z5 + z6 + z7 + z8 + z9 +z10 +z11 +z12 +z13 +z14 +z15 +z16;
				
                if (zliang == 0) {
                    cm.sendNext("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 1
					//cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1000#b)\r\n#v4000000##v4000016##v4000010##v4000004##v4000011##v4000001##v4000003##v4000012#��ǰ������: "+zliang+"��#r \r\n", 1, 1, 100000 ); 
					cm.sendYesNo("#v4010000##v4010001##v4010002##v4010003##v4010004##v4010005##v4010006##v4020000##v4020001##v4020002##v4020003##v4020004##v4020005##v4020006##v4020007##v4020008#\r\n�һ�����: ÿ#r1#k�� = #r1#k ���ĸ��#v4010007#�ϳɷ�ÿ����#r1W���#k\r\n��ǰ����: #r"+zliang+"#k ��С��ʯ.�Ƿ�ȫ���һ����ĸ��#v4010007#");
					}

            }else if (selection == 2) {
					z1 = cm.getPlayer().getItemQuantity(4010007, false);
					var zliang = z1;
				
                if (zliang == 0) {
                    cm.sendNext("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 2
					//cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1000#b)\r\n#v4000000##v4000016##v4000010##v4000004##v4000011##v4000001##v4000003##v4000012#��ǰ������: "+zliang+"��#r \r\n", 1, 1, 100000 ); 
					//cm.sendYesNo("ÿ#r200#k��#v4010007#����������#r1#k��#v4011008#\r\n��ǰӵ��: #r"+zliang+"#k ���ĸ��.�Ƿ������ɳ��#v4011008#��");
                    cm.sendGetNumber("ÿ#r200#k��#v4010007#����������#r1#k��#v4011008# �ϳɷ�ÿ����#r100W���\r\n��ǰӵ��: #r"+zliang+"#k ���ĸ��.��Ҫ�����ɶ��ٸ��#v4011008#��\r\n", 1, 1, 100000 );
					}

            }


        } else if (status == 2) {
            if (beauty == 1) {
					z1 = cm.getPlayer().getItemQuantity(4010000, false);
					z2 = cm.getPlayer().getItemQuantity(4010001, false);
					z3 = cm.getPlayer().getItemQuantity(4010002, false);
					z4 = cm.getPlayer().getItemQuantity(4010003, false);
					z5 = cm.getPlayer().getItemQuantity(4010004, false);
					z6 = cm.getPlayer().getItemQuantity(4010005, false);
					z7 = cm.getPlayer().getItemQuantity(4010006, false);
					z8 = cm.getPlayer().getItemQuantity(4020000, false);
					z9 = cm.getPlayer().getItemQuantity(4020001, false);
					z10 = cm.getPlayer().getItemQuantity(4020002, false);
					z11 = cm.getPlayer().getItemQuantity(4020003, false);
					z12 = cm.getPlayer().getItemQuantity(4020004, false);
					z13 = cm.getPlayer().getItemQuantity(4020005, false);
					z14 = cm.getPlayer().getItemQuantity(4020006, false);
					z15 = cm.getPlayer().getItemQuantity(4020007, false);
					z16 = cm.getPlayer().getItemQuantity(4020008, false);
					var zliang = z1 + z2 + z3 + z4 + z5 + z6 + z7 + z8 + z9 +z10 +z11 +z12 +z13 +z14 +z15 +z16;
                if (zliang > 0){
					cm.removeAll(4010000);  //�����Ʒ������Ŀ
					cm.removeAll(4010001);  //�����Ʒ������Ŀ
					cm.removeAll(4010002);  //�����Ʒ������Ŀ
					cm.removeAll(4010003);  //�����Ʒ������Ŀ
					cm.removeAll(4010004);  //�����Ʒ������Ŀ
					cm.removeAll(4010005);  //�����Ʒ������Ŀ
					cm.removeAll(4010006);  //�����Ʒ������Ŀ
					cm.removeAll(4020000);  //�����Ʒ������Ŀ
					cm.removeAll(4020001);  //�����Ʒ������Ŀ
					cm.removeAll(4020002);  //�����Ʒ������Ŀ
					cm.removeAll(4020003);  //�����Ʒ������Ŀ
					cm.removeAll(4020004);  //�����Ʒ������Ŀ
					cm.removeAll(4020005);  //�����Ʒ������Ŀ
					cm.removeAll(4020006);  //�����Ʒ������Ŀ
					cm.removeAll(4020007);  //�����Ʒ������Ŀ
					cm.removeAll(4020008);  //�����Ʒ������Ŀ
					cm.gainItem(4010007,zliang);
					cm.gainMeso(-10000* zliang); //�Ӽ����
					cm.sendOk("�һ��ɹ������һ���:[#r"+(zliang)+"#k] ���ĸ��");
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ��Ѱ�ҿ�ʯ����һ������һ��ˣ�"+(zliang)+" ���ĸ��");
					cm.dispose();
                } else {
					cm.sendOk("������Ʒ���㣬�޷��һ���");
                    cm.dispose()
                }
            } 
			if (beauty == 2) {
               if (cm.haveItem(4010007, selection*200)){
					 cm.gainItem(4010007, -selection*200);
					 cm.gainItem(4011008, selection);
					cm.gainMeso(-1000000* selection); //�Ӽ����
					 cm.sendOk("�һ��ɹ������һ���:[#r"+(selection)+"#k] ��ﮡ�");
					 cm.worldMessage(6,"��ң�["+cm.getName()+"]Ŭ��Ѱ�ҿ�ʯ����һ������һ��ˣ�"+(selection)+" ��ﮡ�");
					 cm.dispose();
                } else {
					cm.sendOk("������Ʒ���㣬�޷��һ���");
                    cm.dispose()
                }
            }
            status = -1;
        } else {
            cm.dispose();
        }
    }
}


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
				 
               if (cm.haveItem(4200007, 1)){
				cm.sendOk("���Ǹ����ɵ��ˣ�������򿪶һ���");
				cm.dispose();    
			   }
               if (cm.haveItem(5220006, 1)){
				cm.sendOk("���Ǹ����ɵ��ˣ�������򿪶һ���");
				cm.dispose();    
			   }
				 
            var gsjb = "";
            gsjb = "��Ϊʲô��ô������Ϊ������ޣ��������\r\n\r\n";
            gsjb += "#L4##b����#v4031217##b#l\r\n";
            gsjb += "#L1##b#v4031196##z4031196# �һ�#v4001322# #b���� - (#r1 = 1#b)#l\r\n";
            gsjb += "#L8##b#v4001085##z4001085# �һ�#v4001322# #b���� - (#r1 = 1#b)#l\r\n";
            gsjb += "#L6##b#v4001080##z4001080# �һ�#v4001323# #b���� - (#r1 = 1#b)#l\r\n";
           // gsjb += "#L2##b#v4001241##z4001241# �һ�#v4170016# #b���� - (#r1 = 2#b)#l\r\n";
           // gsjb += "#L3##b#v4001242##z4001242# �һ�#v4170016# #b���� - (#r1 = 2#b)#l\r\n";
            gsjb += "#L7##b#v4001083##z4001083# �һ�#v4170016# #b���� - (#r1 = 2#b)#l\r\n";
            gsjb += "#L9##b#v4001430##z4001430# �һ�#v4170016# #b���� - (#r1 = 5#b)#l\r\n";
            gsjb += "#L5##b#v2041200##z2041200# �һ� #v2340000##v2049100# x1#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 1 && cm.getPlayer() <= 5) {
                cm.sendOk("GM���ܲ���һ���");
                cm.dispose();
            }
            if (selection == 0) {
                if (cm.getPlayer().getCSPoints(0) / 500 == 0) {
                    cm.sendOk("�����ʻ�������޷��һ��������ҡ�");
                    status = -1;
                } else {
                    beauty = 1;
                    cm.sendGetNumber("������#r���#k�һ�#b#z4000463##k������:\r\n#b���� - (#r500 = 1#b)\r\n����˻���Ϣ - \r\n    �������: #r" +
                            cm.getPlayer().getCSPoints(0) + " \r\n", 1, 1, cm.getPlayer().getCSPoints(0) / 500);

                }

            
            } else if (selection == 1) {
                if (cm.haveItem(4031196) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 1
           cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1#b)\r\n  ��ǰӵ������: #c4031196# ��#r \r\n", 1, 1, 100000 ); }

            } else if (selection == 2) {
                if (cm.haveItem(4001241) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 2
           cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 2#b)\r\n  ��ǰӵ������: #c4001241# ��#r \r\n", 1, 1, 100000 ); }

            } else if (selection == 3) {
                if (cm.haveItem(4001242) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 3
           cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 2#b)\r\n  ��ǰӵ������: #c4001242# ��#r \r\n", 1, 1, 100000 ); }

            } else if (selection == 4) {
                if (1 < 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 4
           cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1#b)\r\n  ��Ҫ:#v4000235##v4000243##v4000175##v4001080##v4001083##v4001084##v4001085#����1 #r \r\n", 1, 1, 100000 ); }

            } else if (selection == 5) {
                if (cm.haveItem(2041200) == 0){
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 5
           cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1#b)\r\n  ��ǰӵ������: #c2041200# ��#r \r\n", 1, 1, 1 ); }


            } else if (selection == 6) {
                if (cm.haveItem(4001080) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 6
           cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1#b)\r\n  ��ǰӵ������: #c4001080# ��#r \r\n", 1, 1, 100000 ); }


            } else if (selection == 7) {
                cm.sendOk("��������,���˳�npc(����)����һ�.");
                cm.dispose();
                if (cm.haveItem(4001083) == 0){
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 7
           cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 2#b)\r\n  ��ǰӵ������: #c4001083# ��#r \r\n", 1, 1, 100000 ); }


            }else if (selection == 8) {
                if (cm.haveItem(4001085) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 8
           cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1#b)\r\n  ��ǰӵ������: #c4001085# ��#r \r\n", 1, 1, 100000 ); }

            }else if (selection == 9) {
                if (cm.haveItem(4001430) == 0){
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 9
           cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 5#b)\r\n  ��ǰӵ������: #c4001430# ��#r \r\n", 1, 1, 1 ); }


            }


        } else if (status == 2) {
            if (beauty == 0) {
                if (cm.haveItem(4000040, selection)){
					 cm.gainItem(4000040, -selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] �һ���:[#r"+(selection*100000)+"#k] ���");
                     cm.gainMeso(+100000* selection);
					 cm.dispose();
                } else {
                    cm.sendOk("�������㣬�޷��һ���");
                    cm.dispose()
                }
            } if (beauty == 1) {
                if (cm.haveItem(4031196, selection)){
					 cm.gainItem(4031196, -selection);
					 cm.gainItem(4001322, selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] ���һ���:[#r"+(selection)+"#k]�� ����ʯ");
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ź����BOSS������������һ��ˣ�"+(selection)+"�� ����ʯ��");
					 cm.dispose();
                } else {
                    cm.sendOk("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 2) {
                if (cm.haveItem(4001241, selection)){
					 cm.gainItem(4001241, -selection);
					 cm.gainItem(4170016, selection*2);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] ���һ���:[#r"+(selection*2)+"#k]�� �ʵ�");
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ź����BOSS������������һ��ˣ�"+(selection*2)+"�� �ʵ���");
					 cm.dispose();
                } else {
                    cm.sendOk("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 3) {
                if (cm.haveItem(4001242, selection)){
					 cm.gainItem(4001242, -selection);
					 cm.gainItem(4170016, selection*2);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] ���һ���:[#r"+(selection*2)+"#k]�� �ʵ�");
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ź����BOSS������������һ��ˣ�"+(selection*2)+"�� �ʵ���");
					 cm.dispose();
                } else {
                    cm.sendOk("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 4) {
                if (cm.haveItem(4000235, selection) && cm.haveItem(4000243, selection) && cm.haveItem(4000175, selection) && cm.haveItem(4001080, selection) && cm.haveItem(4001083, selection) && cm.haveItem(4001084, selection) && cm.haveItem(4001085, selection)){
					 cm.gainItem(4000235, -selection);
					 cm.gainItem(4000243, -selection);
					 cm.gainItem(4000175, -selection);
					 cm.gainItem(4001080, -selection);
					 cm.gainItem(4001083, -selection);
					 cm.gainItem(4001084, -selection);
					 cm.gainItem(4001085, -selection);
					 cm.gainItem(4031217, selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] ���һ���:[#r"+(selection)+"#k]�� �ƽ�Կ��");
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ź���˺ö�BOSS������������һ��ˣ�"+(selection)+"�� �ƽ�Կ�ס�");
					 cm.dispose();
                } else {
                    cm.sendOk("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 5) {
                if (cm.haveItem(2041200, selection)){
					 cm.gainItem(2041200, -selection);
					 cm.gainItem(2340000, selection);
					 cm.gainItem(2049100, selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] ���һ���:[#r"+(selection)+"#k]�� ���硢ף����");
					//cm.worldMessage(6,"��ң�["+cm.getName()+"]Ź����BOSS������������һ��ˣ�"+(selection)+"�� ���硢ף����");
					 cm.dispose();
                } else {
                    cm.sendOk("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 6) {
                if (cm.haveItem(4001080, selection)){
					 cm.gainItem(4001080, -selection);
					 cm.gainItem(4001323, selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] ���һ���:[#r"+(selection)+"#k]�� �챦ʯ");
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ź����BOSS������������һ��ˣ�"+(selection)+"�� �챦ʯ��");
					 cm.dispose();
                } else {
                    cm.sendOk("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 7) {
                if (cm.haveItem(4001083, selection)){
					 cm.gainItem(4001083, -selection);
					 cm.gainItem(4170016, selection*2);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] ���һ���:[#r"+(selection*2)+"#k]�� �ʵ�");
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ź����BOSS������������һ��ˣ�"+(selection*2)+"�� �ʵ���");
					 cm.dispose();
                } else {
                    cm.sendOk("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 8) {
                if (cm.haveItem(4001085, selection)){
					 cm.gainItem(4001085, -selection);
					 cm.gainItem(4001322, selection);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] ���һ���:[#r"+(selection)+"#k]�� ����ʯ");
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ź����BOSS������������һ��ˣ�"+(selection)+"�� ����ʯ��");
					 cm.dispose();
                } else {
                    cm.sendOk("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }if (beauty == 9) {
                if (cm.haveItem(4001430, selection)){
					 cm.gainItem(4001430, -selection);
					 cm.gainItem(4170016, selection*5);
                    cm.sendOk("�һ��ɹ��� [#r"+selection+"#k] ���һ���:[#r"+(selection*5)+"#k]�� �ʵ�");
					cm.worldMessage(6,"��ң�["+cm.getName()+"]Ź����BOSS������������һ��ˣ�"+(selection*5)+"�� �ʵ���");
					 cm.dispose();
                } else {
                    cm.sendOk("�������㣬�޷��һ���");
                    cm.dispose()
                }
            }
            status = -1;
        } else {
            cm.dispose();
        }
    }
}

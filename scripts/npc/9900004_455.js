
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
                cm.sendNext("�����Ҫ����н�����������Ұɡ�");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
                 // cm.getChar().gainCashDD(+1000);
            //gsjb += "��ȯ: #r " + cm.getChar().getNX() + " #k   ��ֵ��:#r "+cm.getmoneyb()+" #k   ����:#r "+cm.getChar().getCashDD()+" \r\n\r\n";
            //gsjb += "#L3##b�һ������һ�#v4001322#(�齱��)    #b����Ϊ��(#r1000 = 1#b)#l\r\n";
			//gsjb += "#L23#[#r����#k]�һ�[#r��Ϸ���#k]  #b���� - (#r1 = 500#k)#l\r\n";
            //gsjb += "#L5#[#r��ֵ��#k]#b�һ�[����]#v4000463#  #b���� - (#r1 = 1#k)#l\r\n";
            //gsjb += "#L10#[#r����#k]#v4000463#�һ�[#r��ֵ��#k]  #b���� - (#r1 = 1#k)#l\r\n";
            //gsjb += "#L9#[#r���#k]�һ�#v4000463#[#r����#k]  #b���� - (#r1500 = 1#b)#l\r\n";
				 
				
            var gsjb = "";
            gsjb = " #b����ð�յ� - #k�����Ƕһ�ϵͳ.\r\n#r1����� = 2��ֵ��#k\r\n";
            gsjb += "#L9##b��ʱ�һ�#v4001028#�һ�#v4250602#(#r1 = 1#b)#l\r\n\r\n";
            gsjb += "#L10##b#v4250602#�һ�Ѫ��#r    #b����Ϊ:(#r1 = 50#b)#l\r\n\r\n";
            gsjb += "#L11#[#r��ֵ��#k]#b�һ�[����]#v4000463#  #b���� - (#r1 = 1#k)#l\r\n";
            gsjb += "#L12##b#v4000463#[#r����#k]�һ�[#r���#k]  #b���� - (#r1 = 150W#b)#l\r\n";
            gsjb += "#L13##b#v4000463#[#r����#k]�һ�[#r���#k]  #b���� - (#r1 = 666#b)#k#l\r\n";
			gsjb += "#L140##b#v4000463#[#r���#k]�һ�[#r����#k]  #b���� - (#r1000 = 1#b)#k#l\r\n";
			gsjb += "#L1##r5���ҹ��������ᡣ#v2049100##z2049100# ��1#l\r\n"//3
			gsjb += "#L2##r5���ҹ���ף�����ᡣ#v2340000##z2340000# ��1#l\r\n"//3
			gsjb += "#L3##r5���ҹ�������������#v5520000##z5520000# ��1#l\r\n"//3
			gsjb += "#L4##r20���ҹ�����ӡ�#v5570000##z5570000# ��1#l\r\n"//3
			gsjb += "#L6##r10���ҹ���˫������3��Ȩ��#v5211047# ��1#l\r\n"//3
			gsjb += "#L7##r30���ҹ������ù�Ӷ���ˡ�#v5030001# ��1#l\r\n"//3
			gsjb += "#L8##r200��ȯ�����Ӷ����1�졣#v5030001# ��1#l\r\n"//3
			
			
			
			
			
			
			
			
			/*
            //gsjb += "#L12#[#r���#k]�һ�#v2043003#[#r���ֽ��سɾ�#k]  #b���� - (#r10000 = 1#k)#l\r\n";
			//gsjb += "#L13#[#r���#k]�һ�#v2044003#[#r˫�ֽ��سɾ�#k]  #b���� - (#r10000 = 1#k)#l\r\n";
			gsjb += "#L14#[#r���#k]�һ�#v2044303#[#rǹ�����سɾ�#k]  #b���� - (#r10000 = 1#k)#l\r\n";
			gsjb += "#L15#[#r���#k]�һ�#v2044503#[#r�������سɾ�#k]  #b���� - (#r10000 = 1#k)#l\r\n";
			gsjb += "#L16#[#r���#k]�һ�#v2044603#[#r�󹥻��سɾ�#k]  #b���� - (#r10000 = 1#k)#l\r\n";
			gsjb += "#L17#[#r���#k]�һ�#v2043303#[#r�̽������سɾ�#k]  #b���� - (#r10000 = 1#k)#l\r\n";
			gsjb += "#L18#[#r���#k]�һ�#v2044703#[#rȭ�׹����سɾ�#k]  #b���� - (#r10000 = 1#k)#l\r\n";
			gsjb += "#L19#[#r���#k]�һ�#v2044815#[#rָ�ڹ����سɾ�#k]  #b���� - (#r10000 = 1#k)#l\r\n";
			gsjb += "#L20#[#r���#k]�һ�#v2044908#[#r��ǹ�����سɾ�#k]  #b���� - (#r10000 = 1#k)#l\r\n";
			gsjb += "#L21#[#r���#k]�һ�#v2040506#[#rȫ�����ݱسɾ�#k]  #b���� - (#r10000 = 1#k)#l\r\n";
			gsjb += "#L22#[#r���#k]�һ�#v2040710#[#rЬ����Ծ�سɾ�#k]  #b���� - (#r10000 = 1#k)#l\r\n";
			
			*/
			
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

            
            } else if (selection == 1) {
               if (cm.haveItem(4000463) == 0) {
                    cm.sendNext("��Ļ��Ҳ��㡣");
                    status = -1;
                } else {
                    beauty = 1;
                    cm.sendGetNumber("������Ҫ�һ�#v2049100##z2049100# ��������\r\n��ǰ����: #r#c4000463##k \r\n\r\n\r\n", 1, 1, 10000);

                }
            } else if (selection == 2) {
               if (cm.haveItem(4000463) == 0) {
                    cm.sendNext("��Ļ��Ҳ��㡣");
                    status = -1;
                } else {
                    beauty = 2;
                    cm.sendGetNumber("������Ҫ�һ�#v2340000##z2340000# ��������\r\n��ǰ����: #r#c4000463##k \r\n\r\n\r\n", 1, 1, 10000);

                }
            } else if (selection == 3) {
               if (cm.haveItem(4000463) == 0) {
                    cm.sendNext("��Ļ��Ҳ��㡣");
                    status = -1;
                } else {
                    beauty = 3;
                    cm.sendGetNumber("������Ҫ�һ�#v5520000##z5520000# ��������\r\n��ǰ����: #r#c4000463##k \r\n\r\n\r\n", 1, 1, 10000);

                }
            } else if (selection == 4) {
               if (cm.haveItem(4000463) == 0) {
                    cm.sendNext("��Ļ��Ҳ��㡣");
                    status = -1;
                } else {
                    beauty = 4;
                    cm.sendGetNumber("������Ҫ�һ�#v5570000##z5570000# ��������\r\n��ǰ����: #r#c4000463##k \r\n\r\n\r\n", 1, 1, 10000);

                }
            } else if (selection == 5) {
               if (cm.haveItem(4000463) == 0) {
                    cm.sendNext("��Ļ��Ҳ��㡣");
                    status = -1;
                } else {
                    beauty = 5;
                    cm.sendGetNumber("������Ҫ�һ�#v1122017##z1122017# ��������\r\n��ǰ����: #r#c4000463##k \r\n\r\n\r\n", 1, 1, 10000);

                }
            }  else if (selection == 6) {
               if (cm.haveItem(4000463) == 0) {
                    cm.sendNext("��Ļ��Ҳ��㡣");
                    status = -1;
                } else {
                    beauty = 6;
                    cm.sendGetNumber("������Ҫ�һ�#v5211047##z5211047# ��������\r\n��ǰ����: #r#c4000463##k \r\n\r\n\r\n", 1, 1, 1);

                }
            } else if (selection == 7) {
               if (cm.haveItem(4000463) == 0) {
                    cm.sendNext("��Ļ��Ҳ��㡣");
                    status = -1;
                } else {
                    beauty = 7;
                    cm.sendGetNumber("������Ҫ�һ�#v5030001# ��������\r\n��ǰ����: #r#c4000463##k \r\n\r\n\r\n", 1, 1, 1);

                }
            } else if (selection == 9) {
               if (cm.haveItem(4001028) == 0) {
                    cm.sendNext("��Ļ��Ҳ��㡣");
                    status = -1;
                } else {
                    beauty = 9;
                    cm.sendGetNumber("������Ҫ�һ�#v4250602# ��������\r\n��ǰ����: #r#v4001028##c4001028##k \r\n\r\n\r\n", 1, 1, 100);

                }
            } else if (selection == 8) {
               if (cm.getPlayer().getCSPoints(1) < 200) {
                    cm.sendNext("��ĵ�ȯ���㡣");
                    status = -1;
                } else {
                    beauty = 8;
                    cm.sendGetNumber("������Ҫ�һ�#v5030001# ��������\r\n��ǰ��ȯ: #r"+cm.getPlayer().getCSPoints(1)+"#k \r\n\r\n\r\n", 1, 1, 1);

                }
            } else if (selection == 1) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000463).iterator();
                if (cm.haveItem(4000463) == 0) {
                    cm.sendNext("�����ʻ�#z4000463#��������һ����");
                    status = -1;
                } else {
                    beauty = 2;
                    cm.sendGetNumber("������#b#z4000463##k�һ�#r���#k������:\r\n#b���� - (#r1 = 500#b)\r\n����˻���Ϣ - \r\n    �������: #r" +
                            cm.getPlayer().getCSPoints(0) + "    \r\n", 1, 1, iter.next().getQuantity());

                }
            } else if (selection == 23) {
               // var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4001126).iterator();
                if (cm.getChar().getCashDD() == 0) {
                    cm.sendNext("���Ĺһ�������������һ�.");
                    status = -1;
                } else {
                    beauty = 23;
                    cm.sendGetNumber("�����붹��������:\r\n#b���� - (#r1 = 500#b)\r\n  ��ǰ��������: #r" +
                            //cm.getChar().getCashDD() + "   \r\n", 1, 1, iter.next().getQuantity());
                            cm.getChar().getCashDD() + " \r\n", 1, 1, 100000 );

                }

            }else if (selection == 10) {
                //var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4250602).iterator();
                if (cm.haveItem(4250602) == 0) {
					 // cm.gainItem(4250602, +5);
                    cm.sendNext("���ĸߵȻƾ�����һ�.");
                    status = -1;
                } else {
                    beauty = 10;
                   //    cm.sendGetNumber("������#r#v4250602##z4250602##k#b#k�һ�#rHP#k������:\r\n#d����:(#r1 = 50#d)\r\n����˻���Ϣ - ��ǰHP:#r "+cm.getChar().getMaxHp()+" \r\n    ��ǰ#r#v4250602##z4250602#ӵ������Ϊ: #r#c4250602#   \r\n", 1, 1, iter.next().getQuantity());
     cm.sendGetNumber("������#r#v4250602##z4250602##k#b#k�һ�#rHP#k������:\r\n#d����:(#r1 = 50#d)\r\n\r\n    ��ǰ#r#v4250602##z4250602#ӵ������Ϊ: #r#c4250602#   \r\n", 1, 1, 100000);

                }

            }else if (selection == 5) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4031172).iterator();
                if (cm.getmoneyb() < 1) {
                    cm.sendNext("���Ļ��Ҳ���һ�.");
                    status = -1;
                } else {
                    beauty = 5;
                    cm.sendGetNumber("������[#r����#k]������:\r\n#b����Ϊ:(#r1 = 1#b)\r\n��ǰ��ֵ��: #r" +
                           cm.getmoneyb() + "   #k\r\n��ǰ��ȯ��#r"+cm.getPlayer().getCSPoints(0), 1, 1, iter.next().getQuantity());

                }

            }else if (selection == 12) {
               // var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000463).iterator();
                if (cm.haveItem(4000463) == 0) {
                    cm.sendNext("���Ļ��Ҳ���һ�.");
                    status = -1;
                } else {
                    beauty = 12
                  //  cm.sendGetNumber("������[#r����#k]������:\r\n#b����Ϊ:(#r1 = 500W#b)\r\n��ǰ����: #r #c4000463# ��  #k\r\n��ǰ��ң�#r"+ cm.getPlayer().getMeso(),1, 1, iter.next().getQuantity());
   cm.sendGetNumber("������һ��Ļ�������:\r\n#b���� - (#r1 = 150W#b)\r\n  ��ǰ����: #r #c4000463# �� \r\n", 1, 1, 100000 );
                }

            }else if (selection == 7) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000463).iterator();
                if (cm.haveItem(4000463) == 0) {
                    cm.sendNext("���Ĺ���Ҳ���һ�.");
                    status = -1;
                } else {
                    beauty = 7
                    cm.sendGetNumber("������[#r�����#k]������:\r\n#b����Ϊ:(#r1 = 1#b)\r\n��ǰ�����: #r #c4000463# ��  #k\r\n��ǰ��ֵ�ң�#r"+ cm.getmoneyb(), 1, 1, iter.next().getQuantity());

                }

            }else if (selection == 13) {
               // var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000463).iterator();
                if (cm.haveItem(4000463) == 0) {
                    cm.sendNext("���Ļ��Ҳ���һ�.");
                    status = -1;
                } else {
                    beauty = 13
                    cm.sendGetNumber("������[#r����#k]������:\r\n#b����Ϊ:(#r1 = 666#b)\r\n��ǰ����: #r #c4000463# �� \r\n", 1, 1, 100000 );

                }
				
            }else if (selection == 140) {
               // var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000463).iterator();
                if (cm.getPlayer().getCSPoints(1)  == 0) {
                    cm.sendNext("���ĵ�ȯ����һ�.");
                    status = -1;
                } else {
                    beauty = 140
                   //   cm.sendGetNumber("������һ�#r#z4000463##k������:\r\n#b���� - (#r1500 = 1#b)\r\n��ĵ������: #r" +
                       //     cm.getPlayer().getCSPoints(0) + " \r\n", 1, 1, cm.getPlayer().getCSPoints(0) );
 cm.sendGetNumber("������һ�#r#z4000463##k������:\r\n#b���� - (#r1000 = 1#b)\r\n��ĵ������: #r" +cm.getPlayer().getCSPoints(1) + " \r\n", 1, 1, 100000 );

					   
					   
                }

            }else if (selection == 9) {
               // var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000463).iterator();
                if (cm.getPlayer().getCSPoints(1)  == 0) {
                    cm.sendNext("���ĵ�ȯ����һ�.");
                    status = -1;
                } else {
                    beauty = 9
                   //   cm.sendGetNumber("������һ�#r#z4000463##k������:\r\n#b���� - (#r1500 = 1#b)\r\n��ĵ������: #r" +
                       //     cm.getPlayer().getCSPoints(0) + " \r\n", 1, 1, cm.getPlayer().getCSPoints(0) );
 cm.sendGetNumber("������һ�#r#z4000463##k������:\r\n#b���� - (#r1500 = 1#b)\r\n��ĵ������: #r" +cm.getPlayer().getCSPoints(1) + " \r\n", 1, 1, 100000 );

					   
					   
                }

            }else if (selection == 10) {
                if (cm.haveItem(4000463) == 0) {
                    cm.sendNext("���Ĺ���Ҳ���һ�.");
                    status = -1;
                } else {
                    beauty = 10
                    cm.sendGetNumber("������[#r�����#k]������:\r\n#b����Ϊ:(#r1 = 1#b)\r\n��ǰ�����: #r #c4000463# ��  #k\r\n��ǰ��ֵ�ң�#r"+ cm.getmoneyb(), 1, 1, 100000);

                }

            }else if (selection == 11) {
				
               if (cm.getmoneyb() < 1) {
                    cm.sendNext("���Ļ��Ҳ���һ�");
                    status = -1;
                } else {
                    beauty = 11;
                    cm.sendGetNumber("������[#r����#k]������:\r\n#b����Ϊ:(#r1 = 1#b)\r\n��ǰ��ֵ��: #r" +
                            cm.getmoneyb() + " \r\n", 1, 1, 200 );
                }

            }else if (selection == 12) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(2044906).iterator();
                if (cm.getPlayer().getCSPoints(0)  == 0) {
                    cm.sendNext("���ĵ�ȯ����һ�.");
                    status = -1;
                } else {
                    beauty = 12
                      cm.sendGetNumber("������һ�#r#z2043003##k������:\r\n#b���� - (#r10000 = 1#b)\r\n��ĵ������: #r" +
                            cm.getPlayer().getCSPoints(0) + " \r\n", 1, 1, cm.getPlayer().getCSPoints(0) );

                }

            }else if (selection == 13) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000463).iterator();
                if (cm.getPlayer().getCSPoints(0)  == 0) {
                    cm.sendNext("���ĵ�ȯ����һ�.");
                    status = -1;
                } else {
                    beauty = 13
                      cm.sendGetNumber("������һ�#r#z2044003##k������:\r\n#b���� - (#r10000 = 1#b)\r\n��ĵ������: #r" +
                            cm.getPlayer().getCSPoints(0) + " \r\n", 1, 1, cm.getPlayer().getCSPoints(0) );

                }

            }else if (selection == 14) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000463).iterator();
                if (cm.getPlayer().getCSPoints(0)  == 0) {
                    cm.sendNext("���ĵ�ȯ����һ�.");
                    status = -1;
                } else {
                    beauty = 14
                      cm.sendGetNumber("������һ�#r#z2044303##k������:\r\n#b���� - (#r10000 = 1#b)\r\n��ĵ������: #r" +
                            cm.getPlayer().getCSPoints(0) + " \r\n", 1, 1, cm.getPlayer().getCSPoints(0) );

                }

            }else if (selection == 15) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000463).iterator();
                if (cm.getPlayer().getCSPoints(0)  == 0) {
                    cm.sendNext("���ĵ�ȯ����һ�.");
                    status = -1;
                } else {
                    beauty = 15
                      cm.sendGetNumber("������һ�#r#z2044503##k������:\r\n#b���� - (#r10000 = 1#b)\r\n��ĵ������: #r" +
                            cm.getPlayer().getCSPoints(0) + " \r\n", 1, 1, cm.getPlayer().getCSPoints(0) );

                }

            }else if (selection == 16) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000463).iterator();
                if (cm.getPlayer().getCSPoints(0)  == 0) {
                    cm.sendNext("���ĵ�ȯ����һ�.");
                    status = -1;
                } else {
                    beauty = 16
                      cm.sendGetNumber("������һ�#r#z2044603##k������:\r\n#b���� - (#r10000 = 1#b)\r\n��ĵ������: #r" +
                            cm.getPlayer().getCSPoints(0) + " \r\n", 1, 1, cm.getPlayer().getCSPoints(0) );

                }

            }else if (selection == 17) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000463).iterator();
                if (cm.getPlayer().getCSPoints(0)  == 0) {
                    cm.sendNext("���ĵ�ȯ����һ�.");
                    status = -1;
                } else {
                    beauty = 17
                      cm.sendGetNumber("������һ�#r#z2043303##k������:\r\n#b���� - (#r10000 = 1#b)\r\n��ĵ������: #r" +
                            cm.getPlayer().getCSPoints(0) + " \r\n", 1, 1, cm.getPlayer().getCSPoints(0) );

                }

            }else if (selection == 18) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000463).iterator();
                if (cm.getPlayer().getCSPoints(0)  == 0) {
                    cm.sendNext("���ĵ�ȯ����һ�.");
                    status = -1;
                } else {
                    beauty = 18
                      cm.sendGetNumber("������һ�#r#z2044703##k������:\r\n#b���� - (#r10000 = 1#b)\r\n��ĵ������: #r" +
                            cm.getPlayer().getCSPoints(0) + " \r\n", 1, 1, cm.getPlayer().getCSPoints(0) );

                }

            }else if (selection == 19) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000463).iterator();
                if (cm.getPlayer().getCSPoints(0)  == 0) {
                    cm.sendNext("���ĵ�ȯ����һ�.");
                    status = -1;
                } else {
                    beauty = 19
                      cm.sendGetNumber("������һ�#r#z2044815##k������:\r\n#b���� - (#r10000 = 1#b)\r\n��ĵ������: #r" +
                            cm.getPlayer().getCSPoints(0) + " \r\n", 1, 1, cm.getPlayer().getCSPoints(0) );

                }

            }else if (selection == 20) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000463).iterator();
                if (cm.getPlayer().getCSPoints(0)  == 0) {
                    cm.sendNext("���ĵ�ȯ����һ�.");
                    status = -1;
                } else {
                    beauty = 20
                      cm.sendGetNumber("������һ�#r#z2044908##k������:\r\n#b���� - (#r10000 = 1#b)\r\n��ĵ������: #r" +
                            cm.getPlayer().getCSPoints(0) + " \r\n", 1, 1, cm.getPlayer().getCSPoints(0) );

                }

            }else if (selection == 21) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000463).iterator();
                if (cm.getPlayer().getCSPoints(0)  == 0) {
                    cm.sendNext("���ĵ�ȯ����һ�.");
                    status = -1;
                } else {
                    beauty = 21
                      cm.sendGetNumber("������һ�#r#z2040506##k������:\r\n#b���� - (#r10000 = 1#b)\r\n��ĵ������: #r" +
                            cm.getPlayer().getCSPoints(0) + " \r\n", 1, 1, cm.getPlayer().getCSPoints(0) );

                }

            }else if (selection == 22) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000463).iterator();
                if (cm.getPlayer().getCSPoints(0)  == 0) {
                    cm.sendNext("���ĵ�ȯ����һ�.");
                    status = -1;
                } else {
                    beauty = 22
                      cm.sendGetNumber("������һ�#r#z2040710##k������:\r\n#b���� - (#r10000 = 1#b)\r\n��ĵ������: #r" +
                            cm.getPlayer().getCSPoints(0) + " \r\n", 1, 1, cm.getPlayer().getCSPoints(0) );

                }

            }
               


			
			
			
			
			
        } else if (status == 2) {
           if (beauty == 1) {
               if (cm.haveItem(4000463, selection*5)){
					//cm.setmoneyb(-selection*5);  //�Ӽ���ֵ��
					 cm.gainItem(4000463, -selection*5);
					 cm.gainItem(2049100, selection);
                     cm.sendNext("�ɹ��һ���:[#r"+selection+"#k]��#v2049100##z2049100#");
					 cm.dispose();
                } else {
                    cm.sendNext("���������޷��һ���");
                    cm.dispose()
                }
            } else if (beauty == 2) {
                if (cm.haveItem(4000463, selection*5)){
					 cm.gainItem(4000463, -selection*5);
					 cm.gainItem(2340000, selection);
                     cm.sendNext("�ɹ��һ���:[#r"+selection+"#k]��#v2340000##z2340000#");
					 cm.dispose();
                } else {
                    cm.sendNext("���������޷��һ���");
                    cm.dispose()
                }

            } else if (beauty == 9) {
                if (cm.haveItem(4001028, selection)){
					 cm.gainItem(4001028, -selection);
					 cm.gainItem(4250602, selection);
                     cm.sendNext("�ɹ��һ���:[#r"+selection+"#k]��#v4250602##z4250602#");
					 cm.dispose();
                } else {
                    cm.sendNext("���������޷��һ���");
                    cm.dispose()
                }

            } else if (beauty == 3) {
                if (cm.haveItem(4000463, selection*5)){
					 cm.gainItem(4000463, -selection*5);
					 cm.gainItem(5520000, selection);
                     cm.sendNext("�ɹ��һ���:[#r"+selection+"#k]��#v5520000##z5520000#");
					 cm.dispose();
                } else {
                    cm.sendNext("���������޷��һ���");
                    cm.dispose()
                }

            } else if (beauty == 4) {
                if (cm.haveItem(4000463, selection*20)){
					 cm.gainItem(4000463, -selection*20);
					 cm.gainItem(5570000, selection);
                     cm.sendNext("�ɹ��һ���:[#r"+selection+"#k]��#v5570000##z5570000#");
					 cm.dispose();
                } else {
                    cm.sendNext("���������޷��һ���");
                    cm.dispose()
                }

            } else if (beauty == 5) {
                if (cm.haveItem(4000463, selection*50)){
					 cm.gainItem(4000463, -selection*50);
					 cm.gainItem(1122017, selection);
                     cm.sendNext("�ɹ��һ���:[#r"+selection+"#k]��#v1122017##z1122017#");
					 cm.dispose();
                } else {
                    cm.sendNext("���������޷��һ���");
                    cm.dispose()
                }

            }  else if (beauty == 6) {
                if (cm.haveItem(4000463, selection*10)){
					 cm.gainItem(4000463, -selection*10);
					 cm.gainItem(5211047, selection,3);
                     cm.sendNext("�ɹ��һ���:[#r"+selection+"#k]��#v5211047#��*#r���߻��߻�����Ч��#k");
					 cm.dispose();
                } else {
                    cm.sendNext("���������޷��һ���");
                    cm.dispose()
                }
				
			}  else if (beauty == 140) {
                if (cm.getPlayer().getCSPoints(1) >= selection*1000){
					 cm.gainItem(4000463, selection);
					 cm.gainNX(-selection*1000);	//�Ӽ���ȯ
                     cm.sendNext("�ɹ��һ���:[#r"+selection+"#k]��#v4000463#��#k");
					 cm.dispose();
                } else {
                    cm.sendNext("���������޷��һ���");
                    cm.dispose()
                }

            } else if (beauty == 7) {
                if (cm.haveItem(4000463, selection*30)){
					 cm.gainItem(4000463, -selection*30);
					 cm.gainItem(5030001, selection);
                     cm.sendNext("�ɹ��һ���:[#r"+selection+"#k]��#v5030001#");
					 cm.dispose();
                } else {
                    cm.sendNext("���������޷��һ���");
                    cm.dispose()
                }

            } else if (beauty == 8) {
                if (cm.getPlayer().getCSPoints(1) > 199){
					cm.gainNX(-200);	//�Ӽ���ȯ
					 cm.gainItem(5030001, 1,1);
                     cm.sendNext("����ɹ���");
					 cm.dispose();
                } else {
                    cm.sendNext("���������޷��һ���");
                    cm.dispose()
                }

            } 





		   if (beauty == 1) {
                if (selection <= 0) {
                    cm.sendOk("����Ķһ����ִ���");
                    cm.dispose();
                /*
                } else if (selection >= 200) {
                    sl = (selection / 200) + 1;
                } else {
                    sl = 3;
                }

                //if(cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull()){
                if (cm.getSpace(4) < sl) {
                    cm.sendOk("��ı������������ռ䲻��!��������" + sl + "���ռ�����.\r\n��������г���С���Ļ�����λ!\r\n�磺����<������7.5���ռ�����>��ô������Ҫ��8���ռ�!");
                    cm.dispose();
*/
                } else if (cm.getPlayer().getCSPoints(0) >= selection * 500) {
                    cm.gainNX(-selection * 500);
                    cm.gainItem(4000463, selection);
                    cm.sendOk("���ɹ��� #r " + (selection * 500) + " #k��� �һ��� ��������#v4000463# x #r" + selection + " #k")
                } else {
                    cm.sendNext("�һ�" + selection + "��#z4000463##v4000463# ��Ҫ#r " + (selection * 500) + "#k�����û���㹻�ĵ��");
                    cm.dispose();
                }
            } else if (beauty == 2) {
                if (cm.haveItem(4000463, selection)) {
                    cm.gainItem(4000463, -selection);
                    cm.gainNX(+500 * selection);
                    cm.sendOk("���ɹ���#z4000463##v4000463# x #r" + selection + " #k��Ϊ#r " + (500 * selection) + " #k���");
                } else {
                    cm.sendNext("������������������޷��һ����");
                    cm.dispose();
                }

            }else if (beauty == 10) {
                 if (cm.haveItem(4250602, selection)) {
                    cm.gainItem(4250602, -selection);
					//cm.getChar().setMaxHp(cm.getChar().getMaxHp()+Math.floor(50 * selection));
					//cm.setMaxHP(selection*50)
					cm.setMaxHp(cm.getPlayer().getStat().getMaxHp()+Math.floor(50 * selection));
                    cm.sendOk("���ɹ���#r#v4250602##z4250602##k x #r" + selection *50  + " #k��Ϊ#r  #kHP��#r#e�뻻�߲鿴!#k#n");
                } else {
                    cm.sendNext("������������������޷��һ���");
                    cm.dispose();
                }
            }else if (beauty == 5) {
                 if (cm.getmoneyb() >= 1){
					 cm.setmoneyb(-selection);
                } else {
                    cm.sendNext("������������������޷��һ���");
                    cm.dispose();
                }
				var czb=cm.getmoneyb();
				 if (czb < 0){
					 cm.setmoneyb(+selection);
                    cm.sendNext("���Ļ��Ҳ��㣬�޷��һ���");
                    cm.dispose();
                } else {
                    //cm.gainNX(+1000 * selection);
                    cm.gainItem(4000463, +selection);
                    cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] ��ֵ�Ҷһ���:[#r"+(selection*1)+"#k]�� ����");
                    cm.dispose();
                }
				
				
				
				
				
            }else if (beauty == 12) {
                 if (cm.haveItem(4000463, selection)){
					 cm.gainItem(4000463, -selection);
                    cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] ���Ҷһ���:[#r"+(selection*150)+"#k]w ���");
                     cm.gainMeso(+1500000* selection);
					 cm.dispose();
                } else {
                    cm.sendNext("������������������޷��һ���");
                    cm.dispose()
                }
            }else if (beauty == 7) {
                 if (cm.haveItem(4000463, selection)){
					 cm.gainItem(4000463, -selection);
                    cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] ����Ҷһ���:[#r"+(selection*1)+"#k]�� ��ֵ��");
                     //cm.gainMeso(+2000000* selection);
					 cm.setmoneyb(+selection);
					 cm.dispose();
                } else {
                    cm.sendNext("������������������޷��һ���");
                    cm.dispose()
                }
            }else if (beauty == 13) {
                 if (cm.haveItem(4000463, selection)){
					 cm.gainItem(4000463, -selection);
                    cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] ���Ҷһ���:[#r"+(selection*666)+"#k]�� ���");
                    cm.gainNX(+666 * selection);
					 cm.dispose();
                } else {
                    cm.sendNext("������������������޷��һ���");
                    cm.dispose()
                }
            }else if (beauty == 10) {
                if (cm.haveItem(4000463, selection)){
					 cm.gainItem(4000463, -selection);
					 cm.setmoneyb(+selection);
                    cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] ���Ҷһ���:[#r"+(selection)+"#k] ��ֵ��");
                    //cm.gainNX(+1000 * selection);
					 cm.dispose();
                } else {
                    cm.sendNext("������������������޷��һ���");
                    cm.dispose()
                }
            }else if (beauty == 11) {
                 if (cm.getmoneyb() >= 1){
					 cm.setmoneyb(-selection);
                } else {
                    cm.sendNext("������������������޷��һ���");
                    cm.dispose();
                }
				var czb=cm.getmoneyb();
				 if (czb < 0){
					 cm.setmoneyb(+selection);
                    cm.sendNext("���Ļ��Ҳ��㣬�޷��һ���");
                    cm.dispose();
                } else {
                    //cm.gainNX(+1000 * selection);
                    cm.gainItem(4000463, +selection);
                    cm.sendNext("�һ��ɹ��� [#r"+selection+"#k] ��ֵ�Ҷһ���:[#r"+(selection*1)+"#k]�� ����");
                    cm.dispose();
                }
				
            }else if (beauty == 12) {
                 if (cm.getPlayer().getCSPoints(0) >= selection * 10000){
					
                    cm.gainNX(-selection * 10000);
                    cm.gainItem(2043003, selection);
                    cm.sendOk("���ɹ�����#v2043003# x #r" + selection + " #k")
					 cm.dispose();
                } else {
                    cm.sendNext("������������������޷��һ���");
                    cm.dispose()
                }
            }else if (beauty == 13) {
                 if (cm.getPlayer().getCSPoints(0) >= selection * 10000){
					
                    cm.gainNX(-selection * 10000);
                    cm.gainItem(2044003, selection);
                    cm.sendOk("���ɹ�����#v2044003# x #r" + selection + " #k")
					 cm.dispose();
                } else {
                    cm.sendNext("������������������޷��һ���");
                    cm.dispose()
                }
            }else if (beauty == 14) {
                 if (cm.getPlayer().getCSPoints(0) >= selection * 10000){
					
                    cm.gainNX(-selection * 10000);
                    cm.gainItem(2044303, selection);
                    cm.sendOk("���ɹ�����#v2044303# x #r" + selection + " #k")
					 cm.dispose();
                } else {
                    cm.sendNext("������������������޷��һ���");
                    cm.dispose()
                }
            }else if (beauty == 15) {
                 if (cm.getPlayer().getCSPoints(0) >= selection * 10000){
					
                    cm.gainNX(-selection * 10000);
                    cm.gainItem(2044503, selection);
                    cm.sendOk("���ɹ�����#v2044303# x #r" + selection + " #k")
					 cm.dispose();
                } else {
                    cm.sendNext("������������������޷��һ���");
                    cm.dispose()
                }
            }else if (beauty == 16) {
                 if (cm.getPlayer().getCSPoints(0) >= selection * 10000){
					
                    cm.gainNX(-selection * 10000);
                    cm.gainItem(2044603, selection);
                    cm.sendOk("���ɹ�����#v2044303# x #r" + selection + " #k")
					 cm.dispose();
                } else {
                    cm.sendNext("������������������޷��һ���");
                    cm.dispose()
                }
            }else if (beauty == 17) {
                 if (cm.getPlayer().getCSPoints(0) >= selection * 10000){
					
                    cm.gainNX(-selection * 10000);
                    cm.gainItem(2043303, selection);
                    cm.sendOk("���ɹ�����#v2044303# x #r" + selection + " #k")
					 cm.dispose();
                } else {
                    cm.sendNext("������������������޷��һ���");
                    cm.dispose()
                }
            }else if (beauty == 18) {
                 if (cm.getPlayer().getCSPoints(0) >= selection * 10000){
					
                    cm.gainNX(-selection * 10000);
                    cm.gainItem(2044703, selection);
                    cm.sendOk("���ɹ�����#v2044303# x #r" + selection + " #k")
					 cm.dispose();
                } else {
                    cm.sendNext("������������������޷��һ���");
                    cm.dispose()
                }
            }else if (beauty == 19) {
                 if (cm.getPlayer().getCSPoints(0) >= selection * 10000){
					
                    cm.gainNX(-selection * 10000);
                    cm.gainItem(2044815, selection);
                    cm.sendOk("���ɹ�����#v2044303# x #r" + selection + " #k")
					 cm.dispose();
                } else {
                    cm.sendNext("������������������޷��һ���");
                    cm.dispose()
                }
            }else if (beauty == 20) {
                 if (cm.getPlayer().getCSPoints(0) >= selection * 10000){
					
                    cm.gainNX(-selection * 10000);
                    cm.gainItem(2044908, selection);
                    cm.sendOk("���ɹ�����#v2044303# x #r" + selection + " #k")
					 cm.dispose();
                } else {
                    cm.sendNext("������������������޷��һ���");
                    cm.dispose()
                }
            }else if (beauty == 21) {
                 if (cm.getPlayer().getCSPoints(0) >= selection * 10000){
					
                    cm.gainNX(-selection * 10000);
                    cm.gainItem(2040506, selection);
                    cm.sendOk("���ɹ�����#v2040506# x #r" + selection + " #k")
					 cm.dispose();
                } else {
                    cm.sendNext("������������������޷��һ���");
                    cm.dispose()
                }
            }else if (beauty == 22) {
                 if (cm.getPlayer().getCSPoints(0) >= selection * 10000){
					
                    cm.gainNX(-selection * 10000);
                    cm.gainItem(2040710, selection);
                    cm.sendOk("���ɹ�����#v2040506# x #r" + selection + " #k")
					 cm.dispose();
                } else {
                    cm.sendNext("������������������޷��һ���");
                    cm.dispose()
                }
            }else if (beauty == 23) {
                 if (cm.getChar().getCashDD() >= selection){
					
                    cm.getChar().gainCashDD(-selection);
                     cm.gainMeso(+500* selection);
                    //cm.gainItem(2040710, selection);
                    cm.sendOk("���ɹ����˽�ң� #r" + selection*500 + " #k")
					 cm.dispose();
                } else {
                    cm.sendNext("������������������޷��һ���");
                    cm.dispose()
                }
            }
            status = -1;
        } else {
            cm.dispose();
        }
    }
}

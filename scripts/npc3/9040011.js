importPackage(net.sf.odinms.client);
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
                
			cm.sendOk("�õ�,����������Ҫ��ʲô,�һ�������Ϊ������..");
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
			cm.sendSimple(" #��ã���ѡ����Ҫ��ͨ��VIP�ȼ���1RMB=1W����ҡ��׽��ԱVIPҪ80W�����,שʯ��ԱVIPҪ180W�����,�ʼһ�ԱVIPҪ300W�����.�뵽��վѡ���ֵƽ̨��ֵ��\r\n ����ð�ձң�#r"+ cm.getChar().getMeso() +"Ԫ#k\r\n ���ĵ��#r"+ cm.getChar().getNX() +"��#k\r\n ���ĳ����:#r"+ cm.getzb() +"��#k\r\n #r#L1#�������а�#l\r\n #k#L2#ת�����а�#l\r\n #g#L3#ɱ�����а�#l\r\n #g#L4#��ɱ���а�#l \r\n #k#L5#�������а�#l \r\n #k#L7#���幱�����а�#l#n");
		} else if (status == 1) {
			if (selection == 1) {
			
                   cm.displayGuildRanks();
	               cm.dispose();  
			} else if  (selection == 2) {
			  var a = "��ǰ������#b \r\n"; 
            a+=cm.ZSpaiMing();        
            cm.sendOk(a);
            cm.dispose();
            } else if (selection == 3) {
			  var a = "��ǰ������#b \r\n"; 
            a+=cm.SRpaiMing();        
            cm.sendOk(a);
            cm.dispose();
            } else if (selection == 4) {
			  var a = "��ǰ������#b \r\n"; 
            a+=cm.BSpaiMing();        
            cm.sendOk(a);
            cm.dispose();   
            } else if (selection == 5) {
			  var a = "��ǰ������#b \r\n"; 
            a+=cm.RQpaiMing();        
            cm.sendOk(a);
            cm.dispose(); 
            } else if (selection == 6) {
			  var a = "��ǰ������#b \r\n"; 
            a+=cm.XFBpaiMing();        
            cm.sendOk(a);
            cm.dispose();
            } else if (selection == 7) {
			  var a = "��ǰ������#b \r\n"; 
            a+=cm.GPpaiMing();        
            cm.sendOk(a);
            cm.dispose();
            } else if (selection == 11) {
                        if(cm.getChar().getVip() >= 3) {
					  cm.sendOk("���Ѿ���שʯ��ԱVIP�ˣ��벻Ҫ�ظ�����.");
					  cm.dispose();
                      } else if (cm.getzb() >=1200000 && cm.getChar().getVip() == 2) {
					cm.getChar().setVip(3) ;
					cm.setzb(-1200000);
					cm.gainItem(5072000,5);//���ʵ�����
			cm.gainItem(5390000,5);
			cm.gainItem(5390001,5);
			cm.gainItem(5390002,5);
			cm.gainItem(3010012,1);//��ʿ ����
			cm.gainItem(3010025,1);//��Ҷ�����
			cm.gainItem(3010028,1);//�����ķ�²
			cm.gainItem(1142005,1);//��˵�е�ð�ռ�ѫ��
			cm.gainItem(4031454,10);//ת��ʥ��
		var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
		var type = ii.getInventoryType(1112404);	
		var toDrop = ii.randomizeStats(ii.getEquipById(1112404)).copy();
		//var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 1 * 60 * 60 * 1000);
		//toDrop.setExpiration(temptime);		
		toDrop.setLuk(500);
		toDrop.setInt(500);
		toDrop.setDex(500);
		toDrop.setStr(500);
		toDrop.setHp(500);
		toDrop.setMp(500);
		toDrop.setAcc(500);
		toDrop.setAvoid(500);
		toDrop.setSpeed(500);
		toDrop.setJump(500);	
		cm.getPlayer().getInventory(type).addItem(toDrop);
		cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
					cm.serverNotice("��ϵͳ��Ϣ������ϲ��� "+ cm.getChar().getName() +" ,������שʯ��ԱVIP,�����ף������!");
                    cm.sendOk("��~!HO���������Ѿ���#bשʯ��ԱVIP��Ա#l#k�ˣ���ȥ����VIP����������Ȥ��.#k");
                    cm.dispose();
                   } else {
					cm.sendOk("��û�г����120W,�޷�Ϊ����ͨ."); 
					cm.dispose(); 
					}  
					} else if (selection == 11) {
                        if(cm.getChar().getVip() >= 4) {
					  cm.sendOk("���Ѿ��ǻʼһ�ԱVIP�ˣ��벻Ҫ�ظ�����.");
					  cm.dispose();
                      } else if (cm.getzb() >=1500000 && cm.getChar().getVip() == 3) {
					cm.getChar().setVip(4) ;
					cm.setzb(-1200000);
			cm.gainItem(5072000,5);//���ʵ�����
			cm.gainItem(5390000,5);
			cm.gainItem(5390001,5);
			cm.gainItem(5390002,5);
			cm.gainItem(3010041,1);//��������
			cm.gainItem(3010043,1);//ħŮ�ķ�ɨ��	
			cm.gainItem(3010054,1);//������ല
			cm.gainItem(3010058,1);//����ĩ��	
			cm.gainItem(1142006,1);//ð�յ�ż������ѫ��
			cm.gainItem(4031454,10);//ת��ʥ��
		var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
		var type = ii.getInventoryType(1112404);	
		var toDrop = ii.randomizeStats(ii.getEquipById(1112404)).copy();
		//var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 1 * 60 * 60 * 1000);
		//toDrop.setExpiration(temptime);		
		toDrop.setLuk(700);
		toDrop.setInt(700);
		toDrop.setDex(700);
		toDrop.setStr(700);
		toDrop.setHp(700);
		toDrop.setMp(700);
		toDrop.setAcc(700);
		toDrop.setAvoid(700);
		toDrop.setSpeed(700);
		toDrop.setJump(700);	
		cm.getPlayer().getInventory(type).addItem(toDrop);
		cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
					cm.serverNotice("��ϵͳ��Ϣ������ϲ��� "+ cm.getChar().getName() +" ,�������ʼһ�ԱVIP,�����ף������!");
                    cm.sendOk("��~!HO���������Ѿ���#b�ʼһ�ԱVIP��Ա#l#k�ˣ���ȥ����VIP����������Ȥ��.#k");
                    cm.dispose();
                   } else {
					cm.sendOk("��û�г����150W,�޷�Ϊ����ͨ."); 
					cm.dispose(); 
					}  
            } else if (selection == 8) {
                        if(cm.getChar().getVip() == 0) {
            cm.sendOk("�Բ����㲻��VIP��Ա�޷���ȡ����!!!��");
		cm.dispose();
            } else if (cm.getBossLog('VIPGZ') >= 1) {
            cm.sendOk("��Ǹ����VIP�������켺����ȡ���ʣ��������������Ұɣ�");

		cm.dispose();
            } else if(cm.getChar().getVip() == 1) {
            cm.gainMeso(100000000);
			cm.gainItem(5072000,1);//���ʵ�����
			cm.gainItem(5390000,1);
			cm.gainItem(5390001,1);
			cm.gainItem(5390002,1);
			cm.gainItem(4031454,1);//ת��ʥ��
			cm.gainItem(2000019,50);
            cm.setBossLog('VIPGZ');
	    cm.serverNotice("���ƽ��ԱVIP���桻����"+ cm.getChar().getName() +"����VIP������ȡ��1����Ϸ�ҡ����ʵ����ȡ������龰���ȡ�Ѥ���龰���ȡ������龰���ȣ�1����ת����1��������ҩˮ50��");
		cm.dispose();
            } else if(cm.getChar().getVip() == 2) {
            cm.gainMeso(300000000);
			cm.gainItem(5072000,3);//���ʵ�����
			cm.gainItem(5390000,3);
			cm.gainItem(5390001,3);
			cm.gainItem(5390002,3);
			cm.gainItem(4031454,2);//ת��ʥ��
			cm.gainItem(2000019,100);
                cm.setBossLog('VIPGZ');
		cm.serverNotice("���׽��ԱVIP���桻����"+ cm.getChar().getName() +"����VIP������ȡ��3����Ϸ�ҡ����ʵ����ȡ������龰���ȡ�Ѥ���龰���ȡ������龰���ȣ�3����ת����2��������ҩˮ100��");
			cm.dispose();
            } else if(cm.getChar().getVip() == 3) {
            cm.gainMeso(500000000);
			cm.gainItem(5072000,5);//���ʵ�����
			cm.gainItem(5390000,5);
			cm.gainItem(5390001,5);
			cm.gainItem(5390002,5);
			cm.gainItem(4031454,3);//ת��ʥ��
			cm.gainItem(2000019,150);
            cm.setBossLog('VIPGZ');
	    cm.serverNotice("��שʯ��ԱVIP���桻����"+ cm.getChar().getName() +"����VIP������ȡ��5����Ϸ�ҡ����ʵ����ȡ������龰���ȡ�Ѥ���龰���ȡ������龰���ȣ�5����ת����3��������ҩˮ150��");
			cm.dispose();
            cm.dispose();
			}else if(cm.getChar().getVip() == 4) {
            cm.gainMeso(700000000);
			cm.gainItem(5072000,7);//���ʵ�����
			cm.gainItem(5390000,7);
			cm.gainItem(5390001,7);
			cm.gainItem(5390002,7);
			cm.gainItem(4031454,5);//ת��ʥ��
			cm.gainItem(2000019,200);
            cm.setBossLog('VIPGZ');
	    cm.serverNotice("���ʼһ�ԱVIP���桻����"+ cm.getChar().getName() +"����VIP������ȡ��7����Ϸ�ҡ����ʵ����ȡ������龰���ȡ�Ѥ���龰���ȡ������龰���ȣ�7����ת����5��������ҩˮ200��");
			cm.dispose();
            cm.dispose();
			}
            } else if (selection == 9) {
                   cm.sendOk("#l#bϡ������Ա\r\n #k��Щ���Ǳ�����GM����");
                   cm.dispose();  
            } else if (selection == 10) {
                   cm.displayGuildRanks();
	               cm.dispose();  
            } else if (selection == 15) {
                   cm.getPlayer().getReborns();
				cm.dispose();
			}
		}
	}
}
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
			cm.sendSimple(" #��ã�����ֻ��һ��VIP�ȼ���1RMB = 1��ֵ��.\r\n ��ԱVIPҪ280��ֵ��.�뵽��վѡ���ֵƽ̨��ֵ��\r\n ����ð�ձң�#r"+ cm.getChar().getMeso() +"Ԫ#k\r\n ���ĵ��#r"+ cm.getChar().getNX() +"��#k\r\n ���ĳ�ֵ��:#r"+ cm.getzb() +"��#k\r\n #r#L1#��ͨ��ԱVIP(280��ֵ��)(����ÿ����8��λ��)#l\r\n\r\n#b    �����������GMһ�Ų������.#l\r\n #r#L88#��Ա��Ʒ����#l \r\n #k#L8#����(VIP����ͨ��Ҷ���ȡ)#l#n");
			} else if (status == 1) {
			if (selection == 1) {
			if(cm.getChar().getVip() >= 1) {
			cm.sendOk("���Ѿ��ǻ�ԱVIP�ˣ��벻Ҫ�ظ���ͨ.");
			cm.dispose();
             } else if (cm.getzb() >= 280) {
			 for(var i = 1;i<=5;i++){
				if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(i)).isFull()){
					cm.sendOk("������Ӧ�������а������ճ�6��");
					cm.dispose();
					return;
				}
			}
			cm.getChar().setVip(1) ;
			cm.setzb(-280);
			cm.setxfb(280);//
			cm.gainItem(5390005,100);//���ʵ�����
			cm.gainItem(5390000,100);
			cm.gainItem(5390001,100);
			cm.gainItem(5390002,100);
			cm.gainItem(5220040,50);
			cm.gainItem(1402014,1);
			cm.gainItem(1002609,1);//
			cm.gainItem(3010073,1);
			cm.gainItem(3010071,1);//
			cm.gainItem(3010044,1);//
			cm.gainItem(1902032,1);//
			cm.gainItem(1912025,1);//
			cm.gainItem(1902034,1);//
			cm.gainItem(1912027,1);//
			cm.gainItem(4031942,10);//
			cm.gainNX(50000);//
			var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
		var type = ii.getInventoryType(2300000);	
		var toDrop = ii.randomizeStats(ii.getEquipById(2300000)).copy();
		var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000);
		toDrop.setExpiration(temptime);		
		//toDrop.setLuk(50);
		//toDrop.setInt(50);
		//toDrop.setDex(50);
		//toDrop.setStr(50);
		//toDrop.setHp(500);
		//toDrop.setMp(500);
		//toDrop.setAcc(500);
		//toDrop.setAvoid(500);
		//toDrop.setSpeed(500);
		//toDrop.setJump(500);	
		cm.getPlayer().getInventory(type).addItem(toDrop);
		cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
		
		var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
		var type = ii.getInventoryType(1142006);	
		var toDrop = ii.randomizeStats(ii.getEquipById(1142006)).copy();
		//var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 1 * 60 * 60 * 1000);
		//toDrop.setExpiration(temptime);		
		toDrop.setLuk(500);
		toDrop.setInt(500);
		toDrop.setDex(500);
		toDrop.setStr(500);
		toDrop.setWatk(500);
		toDrop.setMatk(500);
		toDrop.setHp(500);
		toDrop.setMp(500);
		//toDrop.setAcc(500);
		//toDrop.setAvoid(500);
		//toDrop.setSpeed(500);
		//toDrop.setJump(500);	
		cm.getPlayer().getInventory(type).addItem(toDrop);
		cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
		
		var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
		var type = ii.getInventoryType(1112404);	
		var toDrop = ii.randomizeStats(ii.getEquipById(1112404)).copy();
		//var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 1 * 60 * 60 * 1000);
		//toDrop.setExpiration(temptime);		
		toDrop.setLuk(500);
		toDrop.setInt(500);
		toDrop.setDex(500);
		toDrop.setStr(500);
		toDrop.setWatk(500);
		toDrop.setMatk(500);
		toDrop.setHp(500);
		toDrop.setMp(500);
		//toDrop.setAcc(500);
		//toDrop.setAvoid(500);
		//toDrop.setSpeed(500);
		//toDrop.setJump(500);	
		cm.getPlayer().getInventory(type).addItem(toDrop);
		cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
		   cm.serverNotice("��ϵͳ��Ϣ������ϲ��� "+ cm.getChar().getName() +" ,��ͨ�˻�ԱVIP,�����ף������!");
                   cm.sendOk("��~!HO���������Ѿ���#b��ԱVIP��Ա#l#k�ˣ���ȥ����VIP����������Ȥ��.#k");
                   cm.dispose();
                   } else {
					cm.sendOk("��û�г�ֵ��,�޷�Ϊ����ͨ."); 
					cm.dispose(); }
			} else if  (selection == 2) {
                   if(cm.getChar().getVip() >= 2) {
			  cm.sendOk("���Ѿ��ǰ׽��ԱVIP�ˣ��벻Ҫ�ظ���ͨ.");
			  cm.dispose();
                      } else if (cm.getzb() >=800000 ) {
			cm.getChar().setVip(2) ;
			cm.setzb(-800000);
			cm.gainItem(5072000,5);//���ʵ�����
			cm.gainItem(5390000,5);
			cm.gainItem(5390001,5);
			cm.gainItem(5390002,5);
			cm.gainItem(3010018,1);//Ҭ����ɳ̲��
			cm.gainItem(3010040,1);//������
			cm.gainItem(1142004,1);//�ڷ�ð�ռ�ѫ��
			cm.gainItem(4031454,10);//ת��ʥ��
		var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
		var type = ii.getInventoryType(1112404);	
		var toDrop = ii.randomizeStats(ii.getEquipById(1112404)).copy();
		//var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 1 * 60 * 60 * 1000);
		//toDrop.setExpiration(temptime);		
		toDrop.setLuk(800);
		toDrop.setInt(800);
		toDrop.setDex(800);
		toDrop.setStr(800);
		toDrop.setHp(800);
		toDrop.setMp(800);
		toDrop.setAcc(800);
		toDrop.setAvoid(800);
		toDrop.setSpeed(800);
		toDrop.setJump(800);	
		cm.getPlayer().getInventory(type).addItem(toDrop);
		cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
                        cm.gainNX(10000);
		   cm.serverNotice("��ϵͳ��Ϣ������ϲ��� "+ cm.getChar().getName() +" ,��ͨ�˰׽��ԱVIP,�����ף������!");
                   cm.sendOk("��~!HO���������Ѿ���#b�׽��ԱVIP��Ա#l#k�ˣ���ȥ����VIP����������Ȥ��.#k");
                   cm.dispose();
                   } else {
					cm.sendOk("��û�г�ֵ��80W,�޷�Ϊ����ͨ."); 
					cm.dispose(); }
            } else if (selection == 3) {
			if(cm.getChar().getVip() >= 3) {
			  cm.sendOk("���Ѿ���שʯ��ԱVIP�ˣ��벻Ҫ�ظ���ͨ.");
			  cm.dispose();
                      } else if (cm.getzb() >=1800000 ) {
			cm.getChar().setVip(3) ;
            cm.gainNX(30000);
			cm.setzb(-1800000);
			cm.gainItem(5072000,10);//���ʵ�����
			cm.gainItem(5390000,10);
			cm.gainItem(5390001,10);
			cm.gainItem(5390002,10);
			cm.gainItem(3010012,1);//��ʿ ����
			cm.gainItem(3010025,1);//��Ҷ�����
			cm.gainItem(3010028,1);//�����ķ�²
			cm.gainItem(1142005,1);//��˵�е�ð�ռ�ѫ��
			cm.gainItem(4031454,15);//ת��ʥ��
		var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
		var type = ii.getInventoryType(1112404);	
		var toDrop = ii.randomizeStats(ii.getEquipById(1112404)).copy();
		//var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 1 * 60 * 60 * 1000);
		//toDrop.setExpiration(temptime);		
		toDrop.setLuk(1300);
		toDrop.setInt(1300);
		toDrop.setDex(1300);
		toDrop.setStr(1300);
		toDrop.setHp(1300);
		toDrop.setMp(1300);
		toDrop.setAcc(1300);
		toDrop.setAvoid(1300);
		toDrop.setSpeed(1300);
		toDrop.setJump(1300);	
		cm.getPlayer().getInventory(type).addItem(toDrop);
		cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
		   cm.serverNotice("��ϵͳ��Ϣ������ϲ��� "+ cm.getChar().getName() +" ,��ͨ��שʯ��ԱVIP,�����ף������!");
                   cm.sendOk("��~!HO���������Ѿ���#bשʯ��ԱVIP��Ա#l#k�ˣ���ȥ����VIP����������Ȥ��.#k");
                   cm.dispose();
                   } else {
					cm.sendOk("��û�г�ֵ��180W,�޷�Ϊ����ͨ."); 
					cm.dispose(); 
					}
					} else if (selection == 12) {
			if(cm.getChar().getVip() >= 4) {
			  cm.sendOk("���Ѿ���שʯ��ԱVIP�ˣ��벻Ҫ�ظ���ͨ.");
			  cm.dispose();
                      } else if (cm.getzb() >=3000000 ) {
			cm.getChar().setVip(4) ;
            cm.gainNX(30000);
			cm.setzb(-3000000);
			cm.gainItem(5072000,15);//���ʵ�����
			cm.gainItem(5390000,15);
			cm.gainItem(5390001,15);
			cm.gainItem(5390002,15);
			cm.gainItem(3010041,1);//��������
			cm.gainItem(3010043,1);//ħŮ�ķ�ɨ��	
			cm.gainItem(3010054,1);//������ല
			cm.gainItem(3010058,1);//����ĩ��	
			cm.gainItem(1142006,1);//ð�յ�ż������ѫ��
			cm.gainItem(4031454,20);//ת��ʥ��
		var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
		var type = ii.getInventoryType(1112404);	
		var toDrop = ii.randomizeStats(ii.getEquipById(1112404)).copy();
		//var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 1 * 60 * 60 * 1000);
		//toDrop.setExpiration(temptime);		
		toDrop.setLuk(2000);
		toDrop.setInt(2000);
		toDrop.setDex(2000);
		toDrop.setStr(2000);
		toDrop.setHp(2000);
		toDrop.setMp(2000);
		toDrop.setAcc(2000);
		toDrop.setAvoid(2000);
		toDrop.setSpeed(2000);
		toDrop.setJump(2000);	
		cm.getPlayer().getInventory(type).addItem(toDrop);
		cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
		   cm.serverNotice("��ϵͳ��Ϣ������ϲ��� "+ cm.getChar().getName() +" ,��ͨ�˻ʼһ�ԱVIP,�����ף������!");
                   cm.sendOk("��~!HO���������Ѿ���#b�ʼһ�ԱVIP��Ա#l#k�ˣ���ȥ����VIP����������Ȥ��.#k");
                   cm.dispose();
                   } else {
					cm.sendOk("��û�г�ֵ��300W,�޷�Ϊ����ͨ."); 
					cm.dispose(); 
					}
            } else if (selection == 4) {
                       cm.warp(910000003);
                       cm.dispose();     
            } else if (selection == 5) {
                       cm.warp(910000004);    
                       cm.dispose();  
            } else if (selection == 7) {
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
					cm.sendOk("��û�г�ֵ��120W,�޷�Ϊ����ͨ."); 
					cm.dispose(); 
					}  
					} else if (selection == 7) {
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
					cm.sendOk("��û�г�ֵ��150W,�޷�Ϊ����ͨ."); 
					cm.dispose(); 
					}  
            } else if (selection == 8) {
			if (cm.getBossLog('VIPGZ') >= 1) {
            cm.sendOk("��Ǹ�����������켺����ȡ���ʣ��������������Ұɣ�");
		cm.dispose();
            } else if(cm.getChar().getVip() == 0) {
            cm.gainMeso(1000000);
			cm.gainItem(5072000,5);//���ʵ�����
			cm.gainItem(5390000,5);
			cm.gainItem(5390001,5);
			cm.gainItem(5390002,5);
			cm.gainNX(1000);
			var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
		var type = ii.getInventoryType(1122017);	
		var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy();
		var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 3 * 60 * 60 * 1000);
		toDrop.setExpiration(temptime);		
		toDrop.setLuk(50);
		toDrop.setInt(50);
		toDrop.setDex(50);
		toDrop.setStr(50);
		//toDrop.setHp(700);
		//toDrop.setMp(700);
		//toDrop.setAcc(700);
		//toDrop.setAvoid(700);
		//toDrop.setSpeed(700);
		//toDrop.setJump(700);	
		cm.getPlayer().getInventory(type).addItem(toDrop);
		cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
            cm.setBossLog('VIPGZ');
	    cm.serverNotice("����ҹ��ʹ��桻����"+ cm.getChar().getName() +"����NPC������ȡ��100W��Ϸ�ҡ����ʵ����ȡ������龰���ȡ�Ѥ���龰���ȡ������龰���ȣ�5������1000���ȫ����20�����׹3Сʱ");
		cm.dispose();
            } else if(cm.getChar().getVip() == 1) {
            cm.gainMeso(100000000);
			cm.gainItem(5072000,20);//���ʵ�����
			cm.gainItem(5390000,20);
			cm.gainItem(5390001,20);
			cm.gainItem(5390002,20);
			cm.gainItem(4031942,1);
			cm.gainNX(5000);
			var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
		var type = ii.getInventoryType(1122017);	
		var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy();
		var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 10 * 60 * 60 * 1000);
		toDrop.setExpiration(temptime);		
		toDrop.setLuk(200);
		toDrop.setInt(200);
		toDrop.setDex(200);
		toDrop.setStr(200);
		//toDrop.setHp(700);
		//toDrop.setMp(700);
		//toDrop.setAcc(700);
		//toDrop.setAvoid(700);
		//toDrop.setSpeed(700);
		//toDrop.setJump(700);	
		cm.getPlayer().getInventory(type).addItem(toDrop);
		cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));
            cm.setBossLog('VIPGZ');
	    cm.serverNotice("����ԱVIP���ʹ��桻����"+ cm.getChar().getName() +"����VIP������ȡ��1����Ϸ�ҡ�����װ����������1�����ϻ����ȡ������龰���ȡ�Ѥ���龰���ȡ������龰���ȣ�1������5000���ȫ����100�����׹10Сʱ");
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
            } else if (selection == 88) {
                   cm.sendOk("#l#b��ԱVIP����������Ʒ��\r\n#v1142006#ȫ����500����������(����)\r\n#v1112404#ȫ����500����������(����)\r\n#v1402014#(����)\r\n#v1002609#(����)\r\n#v3010073#(����)\r\n#v3010071#(����)\r\n#v3010044#(����)\r\n#v1902032#(����)\r\n#v1902034#(����)\r\n#v5220040#50��\r\n#v5390000#100��\r\n#v5390001#100��\r\n#v5390002#100��\r\n#v5390005#100��\r\n#v4031942#10��(��������װ���Ӿ����)\r\n#v2300000#��ʱ1��");
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
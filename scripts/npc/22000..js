
var status = 0;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
				var temp = "#fEtc/pachinko/controller/base/1#";
				var temp2 = "#fEtc/SpeedAnimationQuiz/BeijingOlympic/AniQuiz/5/ani/1#";
				var text = temp + temp + temp + temp + temp + temp + temp + temp + temp + temp + temp + "\r\n";
				text += "#e#b" + "#fEffect/CharacterEff/1112905/0/1#��Ŀǰ�Ǳ�����#r VIP" + cm.getChar().getVip() + "  \r\n#b#fEffect/CharacterEff/1112905/0/1#���İ��ֶ�ʣ������Ϊ #r" + cm.getzb() + "\r\n#b#fEffect/CharacterEff/1112905/0/1#����������ʣ������Ϊ #r" + cm.getnld() + "\r\n#b#fEffect/CharacterEff/1112905/0/1#���Ѿ�� #r"+ cm.getPlayer().getcsb() +"��#b\r\n";
				text += "#L11##fEffect/CharacterEff/1112905/0/1#���������г���#l\r\n\r\n";
				text += "#L0##fEffect/CharacterEff/1112905/0/1#�����#l  ";
				text += "#L1##fEffect/CharacterEff/1112905/0/1#���Ĳ�#l  ";
				text += "#L2##fEffect/CharacterEff/1112905/0/1#����ϴ��#l\r\n\r\n";
				text += "#L3##fEffect/CharacterEff/1112905/0/1#����תְ#l  ";
				text += "#L4##fEffect/CharacterEff/1112905/0/1#���紫��#l  ";
				text += "#L5##fEffect/CharacterEff/1112905/0/1#����ϵͳ#l\r\n\r\n";
				text += "#L6##fEffect/CharacterEff/1112905/0/1#��������#l  ";
				text += "#L7##fEffect/CharacterEff/1112905/0/1#��������#l  ";
				text += "#L8##fEffect/CharacterEff/1112905/0/1#��ȡ����#l\r\n\r\n";
				text += "#L9##fEffect/CharacterEff/1112905/0/1#VIP4����ѫ�²���#l  ";				
				text += "#L10##fEffect/CharacterEff/1112905/0/1#�������׹#l";			
				cm.sendSimple(text);			
		} else if (status == 1) {
			 if (selection == 0) {			     
                                         cm.getPlayer().maxAllSkills();//������
                              //cm.maxAllSkills(20);
			      cm.sendOk("���ܼ���ɹ�!");
			} else if (selection == 1) {
				cm.openNpc(9100109);
			}else if (selection == 2) {
				cm.openNpc(1301000);
			}else if (selection == 3) {
				cm.openNpc(9310057);
			}else if (selection == 11) {
           cm.warp(910000000); 
           cm.dispose();
			}else if (selection == 4) {
				cm.openNpc(2023000);	
			}else if (selection == 5) {
				cm.openNpc(9310072);	
			}else if (selection == 6) {
				cm.displayGuildRanks();
				cm.dispose();
			}else if (selection == 7) {
                                cm.showreborns(); 
				cm.dispose();
			}else if (selection == 8) {
				cm.openNpc(2110005);				
			}else if (selection == 9) {
				if(cm.haveItem(1142178,1,true,false)){
					cm.sendOk("���Ѿ���һ�������Աѫ��,�޷�����ȡ��");
					cm.dispose();
				}else{
					if(cm.getChar().getVip() >= 4){
						var toDrop = new net.sf.odinms.client.Equip(1142178,0);
						toDrop.setStr(500);
						toDrop.setDex(500);
						toDrop.setInt(500);
						toDrop.setLuk(500);
						toDrop.setSpeed(20);
						toDrop.setJump(20);
                                                toDrop.setLocked(1);
						net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);
						cm.getChar().saveToDB(true);
						cm.sendOk("��ȡ�ɹ���");
						cm.dispose();					
					}else{
						cm.sendOk("��ѫ��ֻ��VIP4��Ҳ���ӵ�У�");
						cm.dispose();
					}
				}
			}else if (selection == 10) {
				if(cm.getzb() >= 100000){
					if(cm.haveItem(1122017,1,true,false)){
						cm.sendOk("���Ѿ���һ�������׹�ˣ�");
						cm.dispose();
					}else{
						cm.setzb(-10);
						var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
						var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy();			
						var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() +  3 * 60 * 60 * 1000);
						toDrop.setExpiration(temptime);
						toDrop.setStr(100);
						toDrop.setDex(100);
						toDrop.setInt(100);
						toDrop.setLuk(100);
						net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop,-1);									
						cm.getChar().saveToDB(true);
						cm.sendOk("�ɹ�����10�����ֶ���������100�ľ����׹��");
						cm.dispose();

					}
					
				}else{
					cm.sendOk("��û���㹻��Ԫ����");
					cm.dispose();
                           }
			}
		}
	}
}

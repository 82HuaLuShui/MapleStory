/*
Vr001 ���� ONLINE
�޸İ�.GM��ͼ��NPC.
*/

/** ��Ȩ��Vr001 ����
	NPC ����: 		ð�յ���ӪԱ���ڲ���
	Map(ID): 		��ͼ��IDΪ (180000000)
	   ��;: 		������,װ���������ӵĹ���.���������������鷳
*/
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.tools);

var status = 0;
var slot = Array();
var stats = Array("����", "����", "����", "����", "����ֵ", "ħ��ֵ", "��������", "ħ������", "������", "ħ��������", "������", "�ر���", "�ּ�", "�ƶ��ٶ�", "��Ծ��");
var selected;
var statsSel;

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
			if (cm.getPlayer().hasGMLevel(100)) {
				cm.sendSimple("���!ΰ���Gm!����ʲô������?#b\r\n#L0#�����ҵ��������!(Gmר��)\r\n#L1#�����ҵ������!(Gmר��)\r\n#L2#���ҵ�װ�����Ӹ�������!(Gmר��)#k");
			} else {
				cm.sendOk("�ҿ�...��GM�ȼ�������Ҫ����100�ſ��Ի���ҵİ���!~~���������ȥ.");
				cm.dispose();
			}
		} else if (status == 1) {
			if (selection == 0) {
				var statup = new java.util.ArrayList();
				var p = cm.getPlayer();
				p.setRemainingAp(0);
				p.setRemainingSp(0);
				p.setStr(32767);
				p.setDex(32767);
				p.setInt(32767);
				p.setLuk(32767);
				p.setHp(30000);
				p.setMaxHp(30000);
				p.setMp(30000);
				p.setMaxMp(30000);
				statup.add(new Pair(MapleStat.STR, java.lang.Integer.valueOf(32767)));
				statup.add(new Pair(MapleStat.DEX, java.lang.Integer.valueOf(32767)));
				statup.add(new Pair(MapleStat.LUK, java.lang.Integer.valueOf(32767)));
				statup.add(new Pair(MapleStat.INT, java.lang.Integer.valueOf(32767)));
				statup.add(new Pair(MapleStat.HP, java.lang.Integer.valueOf(30000)));
				statup.add(new Pair(MapleStat.MAXHP, java.lang.Integer.valueOf(30000)));
				statup.add(new Pair(MapleStat.MP, java.lang.Integer.valueOf(30000)));
				statup.add(new Pair(MapleStat.MAXMP, java.lang.Integer.valueOf(30000)));
				statup.add(new Pair(MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
				statup.add(new Pair(MapleStat.AVAILABLESP, java.lang.Integer.valueOf(p.getRemainingSp())));
				cm.getC().getSession().write(MaplePacketCreator.updatePlayerStats(statup));
				cm.sendOk("���Ѿ���������������������!\r\n#d��лʹ��Vr001 ��������!");
				cm.dispose();
			} else if (selection == 1) {
				cm.maxAllSkills(); 
				cm.sendOk("���Ѿ����������������!\r\n#d��лʹ��Vr001 ��������!");
				cm.dispose();
			} else if (selection == 2) {
				var avail = "";
				for (var i = -1; i > -18; i--) {
					if (cm.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(i) != null) {
						avail += "#L" + Math.abs(i) + "##t" + cm.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(i).getItemId() + "##l\r\n";
					}
					slot.push(i);
				}
				cm.sendSimple("����Ϊ��һ��װ����������?\r\n#b" + avail);
			}
		} else if (status == 2) {
			selected = selection - 1;
			var text = "";
			for (var i = 0; i < stats.length; i++) {
				text += "#L" + i + "#" + stats[i] + "#l\r\n";
			}
			cm.sendSimple("��ҪΪ #b#t" + cm.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(slot[selected]).getItemId() + "##k�������.\r\n��ô,����������һ��������?\r\n#b" + text);
		} else if (status == 3) {
			statsSel = selection;
			cm.sendGetNumber("��׼��Ϊ��� #b#t" + cm.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(slot[selected]).getItemId() + "##k ��Ӷ��� " + stats[statsSel] + " ����?\r\n#dע��:���Ϊ #r32767#k !!", 0, 0, 32767);
		} else if (status == 4) {
			cm.changeStat(slot[selected], statsSel, selection);
			cm.sendOk("�ɹ�Ϊ���װ�� #b#t" + cm.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(slot[selected]).getItemId() + "##k \r\n#r" + stats[statsSel] + "����#k ������ #b" + selection + " #k��.");
			cm.dispose();
		}
	}
}

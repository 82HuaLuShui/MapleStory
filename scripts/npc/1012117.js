/*
	This file is part of the cherry Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@cherry.de>
                       Jan Christian Meyer <vimes@cherry.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
    
*/

/* Brittany
	Henesys Random Hair/Hair Color Change.
*/
var status = 0;
var beauty = 0;
var hairprice = 300000000;
var haircolorprice = 300000000;
var mhair = Array(30820, 30830, 30840, 30850, 30860, 30870, 30880, 30890, 30900, 30910, 30920, 30930, 30950, 30990, 33000, 33030, 33040, 33050, 30400, 30370, 30740, 30750, 30540, 30490, 30710, 30660, 30770);
var fhair = Array(31070, 31180, 31190, 31240, 31310, 31340, 31490, 31550, 31450, 31530, 31560, 31620, 31640, 31650, 31670, 31680, 31710, 31730, 31770, 31840, 31860, 31920, 31930, 34000, 34010, 34040, 34050, 34060);
var hairnew = Array();

function start() {
	status = -1;
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
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("���,���ǻʼҷ���ʦ!�������#b�ʼ���ȯ#k,��ͷ��ĵİѷ��ͽ�����,�һ����������.��ô��Ҫ��ʲô?��ѡ���!\r\n#L0#ʹ��1200�����#b#z5150040##k#l\r\n#L1#�ı䷢��(ʹ��#b#v5150040#�ʼ���ȯ#k)#l\r\n#L2#Ⱦɫ(ʹ��#b���ִ�Ⱦ����ͨ��Ա��#k)#l");						
		} else if (status == 1) {
			if (selection == 0) {
				beauty = 0;
				cm.sendSimple("������Ҫ#b1200���#k�Ƿ���?\r\n\r\n#L0#��Ҫ����#b1200�����#l");
			} else if (selection == 1) {
				beauty = 1;
				hairnew = Array();
				if (cm.getChar().getGender() == 0) {
					for(var i = 0; i < mhair.length; i++) {
						hairnew.push(mhair[i] + parseInt(cm.getChar().getHair() % 10));
					}
				} 
				if (cm.getChar().getGender() == 1) {
					for(var i = 0; i < fhair.length; i++) {
						hairnew.push(fhair[i] + parseInt(cm.getChar().getHair() % 10));
					}
				}
				cm.sendYesNo("�������#b�ʼ�#k,��ô�ҽ���������ı�һ�ַ���,��ȷ��Ҫ�ı䷢����?");
			} else if (selection == 2) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendYesNo("�������#b���ִ�Ⱦ����ͨ��Ա��#k,��ô�ҽ���������ı�һ�ַ�ɫ,��ȷ��Ҫ�ı䷢ɫ��?");
			}
		}
		else if (status == 2){
			cm.dispose();
			if (beauty == 1){
				if (cm.haveItem(5150040) == true){
					cm.gainItem(5150040, -1);
					cm.setHair(hairnew[Math.floor(Math.random() * hairnew.length)]);
					cm.sendOk("����,����������̾����·��Ͱ�!");
				} else {
					cm.sendOk("�������㲢û�����ǵĻ�Ա��,�ҿ��²��ܸ�����,�Һܱ�Ǹ.�����ȹ����.");
				}
			}
			if (beauty == 2){
				if (cm.haveItem(5151000) == true){
					cm.gainItem(5151000, -1);
					cm.setHair(haircolor[Math.floor(Math.random() * haircolor.length)]);
					cm.sendOk("����,����������̾����·�ɫ��!");
				} else {
					cm.sendOk("�������㲢û�����ǵĻ�Ա��,�ҿ��²��ܸ���Ⱦ��,�Һܱ�Ǹ.�����ȹ����.");
				}
			}
			if (beauty == 0){
				if (selection == 0 && cm.getNX() >= 1200) {
					cm.gainNX(-1200);
					cm.gainItem(5150040, 1);
					cm.sendOk("#e����,�Ͽ�ı���ķ��Ͱ�!");
				} else if (selection == 1 && cm.getNX() >= 1200) {
					cm.gainNX(-1200);
					cm.gainItem(5150040, 1);
					cm.sendOk("#e����,�Ͽ�ı���ķ�ɫ��!");
				} else {
					cm.sendOk("#e��ĵ����ѽ!");
				}
			}
		}
	}
}

var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
var ���� = "#fEffect/CharacterEff/1051295/0/0#";
var �ٷ� = "#fUI/UIWindow/Quest/icon0#";
var Сѩ�� = "#fEffect/CharacterEff/1003393/0/0#";
var ���� = "#fEffect/CharacterEff/1032063/0/0#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ����1 = "#fEffect/CharacterEff/1032063/0/0#";


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

            cm.sendOk("��л��Ĺ��٣�");
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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "   "+����1+"    "+����+"#b�������������б�#k"+����+"    "+����1+"#n\r\n"   
			
			if(cm.getgrname() == 0){
					text += "      #L1#"+����+"#b��������1(#r�ɿ�ʼ#k)#n"+����+"#l\r\n\r\n"//3
				} else if(cm.getgrname() > 0){
					text += ""+����+"#r#b��������1#n"+����+"#l"+���+"#k\r\n"//3
			}
			
			if(cm.getgrname() == 1 && cm.getLevel() > 14){
					text += "      #L2#"+����+"#b��������2(#r�ɿ�ʼ#k)#n"+����+"#l\r\n\r\n"//3
				} else if(cm.getgrname() > 1 && cm.getLevel() > 14){
					text += ""+����+"#r#b��������2#n"+����+"#l"+���+"#k\r\n"//3
				} else {
					text += ""+�ٷ�+"#b   (#rlv.15#k)��������2   \r\n"//3
			}
			
			if(cm.getgrname() == 2 && cm.getLevel() > 20){
					text += "      #L3#"+����+"#b��������3(#r�ɿ�ʼ#k)#n"+����+"#l\r\n\r\n"//3
				} else if(cm.getgrname() > 2 && cm.getLevel() > 20){
					text += ""+����+"#r#b��������3#n"+����+"#l"+���+"#k\r\n"//3
				} else {
					text += ""+�ٷ�+"#b   (#rlv.21#k)��������3   \r\n"//3
			}
			
			if(cm.getgrname() == 3 && cm.getLevel() > 29){
					text += "      #L4#"+����+"#b��������4(#r�ɿ�ʼ#k)#n"+����+"#l\r\n\r\n"//3
				} else if(cm.getgrname() > 3 && cm.getLevel() > 29){
					text += ""+����+"#r#b��������4#n"+����+"#l"+���+"#k\r\n"//3
				} else {
					text += ""+�ٷ�+"#b   (#rlv.30#k)��������4   \r\n"//3
			}
			
			if(cm.getgrname() == 4 && cm.getLevel() > 34){
					text += "      #L5#"+����+"#b��������5(#r�ɿ�ʼ#k)#n"+����+"#l\r\n\r\n"//3
				} else if(cm.getgrname() > 4 && cm.getLevel() > 34){
					text += ""+����+"#r#b��������5#n"+����+"#l"+���+"#k\r\n"//3
				} else {
					text += ""+�ٷ�+"#b   (#rlv.35#k)��������5   \r\n"//3
			}
			
			if(cm.getgrname() == 5 && cm.getLevel() > 39){
					text += "      #L6#"+����+"#b��������6(#r�ɿ�ʼ#k)#n"+����+"#l\r\n\r\n"//3
				} else if(cm.getgrname() > 5 && cm.getLevel() > 39){
					text += ""+����+"#r#b��������6#n"+����+"#l"+���+"#k\r\n"//3
				} else {
					text += ""+�ٷ�+"#b   (#rlv.40#k)��������6   \r\n"//3
			}
			
			
			if(cm.getgrname() == 6 && cm.getLevel() > 44){
					text += "      #L7#"+����+"#b��������7(#r�ɿ�ʼ#k)#n"+����+"#l\r\n\r\n"//3
				} else if(cm.getgrname() > 6 && cm.getLevel() > 44){
					text += ""+����+"#r#b��������7#n"+����+"#l"+���+"#k\r\n"//3
				} else {
					text += ""+�ٷ�+"#b   (#rlv.45#k)��������7   \r\n"//3
			}
			if(cm.getgrname() == 7 && cm.getLevel() > 49){
					text += "      #L8#"+����+"#b��������8(#r�ɿ�ʼ#k)#n"+����+"#l\r\n\r\n"//3
				} else if(cm.getgrname() > 7 && cm.getLevel() > 49){
					text += ""+����+"#r#b��������8#n"+����+"#l"+���+"#k\r\n"//3
				} else {
					text += ""+�ٷ�+"#b   (#rlv.50#k)��������8   \r\n"//3
			}
			
			
			if(cm.getgrname() == 8 && cm.getLevel() > 59){
					text += "      #L9#"+����+"#b��������9(#r�ɿ�ʼ#k)#n"+����+"#l\r\n\r\n"//3
				} else if(cm.getgrname() > 8 && cm.getLevel() > 59){
					text += ""+����+"#r#b��������9#n"+����+"#l"+���+"#k\r\n"//3
				} else {
					text += ""+�ٷ�+"#b   (#rlv.60#k)��������9   \r\n"//3
			}
			
			if(cm.getgrname() == 9 && cm.getLevel() > 64){
					text += "      #L10#"+����+"#b��������10(#r�ɿ�ʼ#k)#n"+����+"#l\r\n\r\n"//3
				} else if(cm.getgrname() > 9 && cm.getLevel() > 64){
					text += ""+����+"#r#b��������10#n"+����+"#l"+���+"#k\r\n"//3
				} else {
					text += ""+�ٷ�+"#b   (#rlv.65#k)��������10   \r\n"//3
			}
			
			if(cm.getgrname() == 10 && cm.getLevel() > 69){
					text += "      #L11#"+����+"#b��������11(#r�ɿ�ʼ#k)#n"+����+"#l\r\n\r\n"//3
				} else if(cm.getgrname() > 10 && cm.getLevel() > 69){
					text += ""+����+"#r#b��������11#n"+����+"#l"+���+"#k\r\n"//3
				} else {
					text += ""+�ٷ�+"#b   (#rlv.70#k)��������11   \r\n"//3
			}
			
			if(cm.getgrname() == 11 && cm.getLevel() > 74){
					text += "      #L12#"+����+"#b��������12(#r�ɿ�ʼ#k)#n"+����+"#l\r\n\r\n"//3
				} else if(cm.getgrname() > 11 && cm.getLevel() > 74){
					text += ""+����+"#r#b��������12#n"+����+"#l"+���+"#k\r\n"//3
				} else {
					text += ""+�ٷ�+"#b   (#rlv.75#k)��������12   \r\n"//3
			}
			
			if(cm.getgrname() == 12 && cm.getLevel() > 79){
					text += "      #L13#"+����+"#b��������13(#r�ɿ�ʼ#k)#n"+����+"#l\r\n\r\n"//3
				} else if(cm.getgrname() > 12 && cm.getLevel() > 79){
					text += ""+����+"#r#b��������13#n"+����+"#l"+���+"#k\r\n"//3
				} else {
					text += ""+�ٷ�+"#b   (#rlv.80#k)��������13   \r\n"//3
			}
			
			if(cm.getgrname() == 13 && cm.getLevel() > 89){
					text += "      #L14#"+����+"#b��������14(#r�ɿ�ʼ#k)#n"+����+"#l\r\n\r\n"//3
				} else if(cm.getgrname() > 13 && cm.getLevel() > 89){
					text += ""+����+"#r#b��������14#n"+����+"#l"+���+"#k\r\n"//3
				} else {
					text += ""+�ٷ�+"#b   (#rlv.90#k)��������14   \r\n"//3
			}
			
			if(cm.getgrname() == 14 && cm.getLevel() > 99){
					text += "      #L15#"+����+"#b��������15(#r�ɿ�ʼ#k)#n"+����+"#l\r\n\r\n"//3
				} else if(cm.getgrname() > 14 && cm.getLevel() > 99){
					text += ""+����+"#r#b��������15#n"+����+"#l"+���+"#k\r\n"//3
				} else {
					text += ""+�ٷ�+"#b   (#rlv.100#k)��������15   \r\n"//3
			}
			
			if(cm.getgrname() == 15 && cm.getLevel() > 109){
					text += "      #L16#"+����+"#b��������16(#r�ɿ�ʼ#k)#n"+����+"#l\r\n\r\n"//3
				} else if(cm.getgrname() > 15 && cm.getLevel() > 109){
					text += ""+����+"#r#b��������16#n"+����+"#l"+���+"#k\r\n"//3
				} else {
					text += ""+�ٷ�+"#b   (#rlv.110#k)��������16   \r\n"//3
			}
			
			if(cm.getgrname() == 16 && cm.getLevel() > 119){
					text += "      #L17#"+����+"#b��������17(#r�ɿ�ʼ#k)#n"+����+"#l\r\n\r\n"//3
				} else if(cm.getgrname() > 16 && cm.getLevel() > 119){
					text += ""+����+"#r#b��������17#n"+����+"#l"+���+"#k\r\n"//3
				} else {
					text += ""+�ٷ�+"#b   (#rlv.120#k)��������17   \r\n"//3
			}
			
			if(cm.getgrname() == 17 && cm.getLevel() > 129){
					text += "      #L18#"+����+"#b��������18(#r�ɿ�ʼ#k)#n"+����+"#l\r\n\r\n"//3
				} else if(cm.getgrname() > 17 && cm.getLevel() > 129){
					text += ""+����+"#r#b��������18#n"+����+"#l"+���+"#k\r\n"//3
				} else {
					text += ""+�ٷ�+"#b   (#rlv.130#k)��������18   \r\n"//3
			}
			
			if(cm.getgrname() == 18 && cm.getLevel() > 139){
					text += "      #L19#"+����+"#b��������19(#r�ɿ�ʼ#k)#n"+����+"#l\r\n\r\n"//3
				} else if(cm.getgrname() > 18 && cm.getLevel() > 139){
					text += ""+����+"#r#b��������19#n"+����+"#l"+���+"#k\r\n"//3
				} else {
					text += ""+�ٷ�+"#b   (#rlv.140#k)��������19   \r\n"//3
			}
			
			if(cm.getgrname() == 19 && cm.getLevel() > 149){
					text += "      #L20#"+����+"#b��������20(#r�ɿ�ʼ#k)#n"+����+"#l\r\n\r\n"//3
				} else if(cm.getgrname() > 19 && cm.getLevel() > 149){
					text += ""+����+"#r#b��������20#n"+����+"#l"+���+"#k\r\n"//3
				} else {
					text += ""+�ٷ�+"#b   (#rlv.150#k)��������20   \r\n"//3
			}
            cm.sendSimple(text);
        } else if (selection == 1) {
			if (cm.haveItem(4000002,50) && cm.haveItem(4000017,10)){
				cm.gainItem(4000002, -50);//�����Ʒ
				cm.gainItem(4000017, -10);//�����Ʒ
				cm.gainExp(10000);//���˸�����
				cm.gainItem(1442012,40,40,40,40,40,40,40,40,0,0,0,0,0,0);
				cm.worldMessage(6,"��ң�["+cm.getName()+"]�������������1����þ���ֵ����ȫ����40���ѩ�壡");
				cm.setgrname(1);
				cm.sendOk("������������񣬻��ȫ����40���ѩ�壡");
				cm.dispose();
		}else{

			cm.sendOk(��̾��+"#r��ӭ�������߾���1��#k\r\n���ǵó�������ð�յ���ʱ�������Ǵ����µ�һ��һ�εĹ��¡�\r\n����������Ժ����ǲ���ǰ�У�������һ����#r����ĺ�����#k�ĵط���\r\n���㵽����Ѱ�һ��䣬�����ռ�50��#v4000002#10��#v4000017#��\r\n������#v1442012# ȫ����40��");
			cm.dispose();
	    }
        } else if (selection == 2) {
		if (cm.haveItem(4000015,50) && cm.haveItem(4000008,50)){
			cm.gainItem(4000015, -50);//�����Ʒ
			cm.gainItem(4000008, -50);//�����Ʒ
			cm.gainMeso(+200000); //�Ӽ����
			 cm.gainExp(50000);//���˸�����
					cm.setgrname(2);
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�������������2����þ���ֵ����20W��ң�");
			cm.sendOk("������������񣬻�ý�����");
			cm.dispose();
		}else{

			cm.sendOk(��̾��+"#r��ӭ�������߾���2��#k\r\n����ĳ�����������ͣ���������Σ����Ե��ô��ż��̡�\r\n�뵽һ����#r�����϶���#k�ĵط���\r\n�ռ�50��#v4000015#50��#v4000008#��\r\n������#v4031138# 20W��");
			cm.dispose();
	    }
        } else if (selection == 3) {
		if (cm.haveItem(4250602,1)){
			cm.gainItem(4250602,-1);
			cm.gainItem(1142107,5,5,5,5,5,5,1,1,0,0,0,0,0,0);
			cm.setgrname(3);
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�������������3����þ���ֵ����:����ѫ�¸�����5 ��/ħ1��");
			cm.sendOk("������������񣬻�ý�����");
			cm.dispose();	
		}else{

		 cm.sendOk(��̾��+"#r��ӭ�������߾���3��#k\r\n�뵽#r����������Ѱ��Ů���������#k���ռ�һ��#v4250602#���ҡ�\r\n������#v1142107# ������5 ��/ħ1��");
		 cm.dispose();
		
	    }
        } else if (selection == 4) {
			
		if (cm.haveItem(4000106,50) && cm.haveItem(4000107,20)){
			cm.gainItem(4000106, -50);//�����Ʒ
			cm.gainItem(4000107, -20);//�����Ʒ
			cm.gainItem(2022003, 200);//�����Ʒ
			cm.gainItem(2000006, 200);//�����Ʒ
			cm.gainExp(92000);//���˸�����
			cm.setgrname(4);
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�������������4����þ���ֵ����HPMPҩˮ��200��");
			cm.sendOk("������������񣬻�ý�����");
			cm.dispose();
		}else{
			cm.sendOk(��̾��+"#r��ӭ�������߾���4��#k\r\n�뵽#r��¶̨������#k�ռ�50��#v4000106#20��#v4000107#���ҡ�\r\n������#v2022003#��200#v2000006#��200��");
			cm.dispose();
	    }
        } else if (selection == 5) {
			
		if (cm.haveItem(4031231,10) && cm.haveItem(4031258,10)){
			cm.gainItem(1082245,5,5,5,5,0,0,2,2,0,0,0,0,0,0);
			cm.gainExp(122000);//���˸�����
			cm.setgrname(5);
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�������������5����þ���ֵ�������׸�����5 ��/ħ2��");
			cm.sendOk("������������񣬻�ý�����");
			cm.dispose();
		}else{
			cm.sendOk(��̾��+"#r��ӭ�������߾���5��#k\r\n�뵽ͯ����-��ɽ����ռ�#v4031231##v4031258#��ʮ�������ҡ�\r\n������#v1082245#������5 ��/ħ2");
			cm.dispose();
	    }
        } else if (selection == 6) {
			if (cm.haveItem(4000276 ,100) && cm.haveItem(4000277 ,50)){
			//cm.gainItem(1142107,5,5,5,5,5,5,1,1,0,0,0,0,0,0);
			cm.gainItem(4000276, -100);//�����Ʒ
			cm.gainItem(4000277, -50);//�����Ʒ
			cm.gainItem(1012101,2,2,2,2,0,0,1,1,0,0,0,0,0,0);
			cm.gainExp(252000);//���˸�����
			cm.setgrname(6);
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�������������6����þ���ֵ�������θ�����2 ��/ħ1��");
			cm.sendOk("������������񣬻�ý�����");
			cm.dispose();
		}else{
			cm.sendOk(��̾��+"#r��ӭ�������߾���6��#k\r\n�뵽#r��ͨ������ڣ�#k�ռ�100��#v4000276#50��#v4000277#�����ҡ�\r\n������#v1012101#������2 ��/ħ1");
			cm.dispose();
	    }
        } else if (selection == 7) {
			if (cm.haveItem(4000115 ,50)){
			//cm.gainItem(1142107,5,5,5,5,5,5,1,1,0,0,0,0,0,0);
			cm.gainItem(4000115, -50);//�����Ʒ
			cm.gainItem(1032098,2,2,2,2,0,0,2,2,10,10,5,5,0,0);
			cm.gainExp(412000);//���˸�����
			cm.setgrname(7);
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�������������7����þ���ֵ��������������2 ��/ħ2��");
			cm.sendOk("������������񣬻�ý�����");
			cm.dispose();
		}else{
			cm.sendOk(��̾��+"#r��ӭ�������߾���7��#k\r\n�뵽#r��ʱ��֮·4��#k�ռ�50��#v4000115#�����ҡ�\r\n������#v1032098#������2 ��/ħ2");
			cm.dispose();
	    }
        } else if (selection == 8) {
			if (cm.haveItem(4000286 ,50) && cm.haveItem(1142107 ,1)){
			//cm.gainItem(1142107,5,5,5,5,5,5,1,1,0,0,0,0,0,0);
			cm.gainItem(4000286, -50);//�����Ʒ
			cm.gainItem(1142107, -1);//�����Ʒ
			cm.gainItem(1142108,6,6,6,6,0,0,2,2,10,10,5,5,0,0);
			cm.gainExp(612000);//���˸�����
			cm.setgrname(8);
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�������������8����þ���ֵ�����м��ƺŸ�����6 ��/ħ2��");
			cm.sendOk("������������񣬻�ý�����");
			cm.dispose();
		}else{
			cm.sendOk(��̾��+"#r��ӭ�������߾���8��#k\r\n�뵽#r��������������#k�ռ�50��#v4000286#����#v1142107#�����ҡ�\r\n������#v1142108#������6 ��/ħ2");
			cm.dispose();
	    }
		} else if (selection == 9) {
			if (cm.haveItem(4000177 ,50) && cm.haveItem(4000025 ,50)){
			//cm.gainItem(1142107,5,5,5,5,5,5,1,1,0,0,0,0,0,0);
			cm.gainItem(4000177, -50);//�����Ʒ
			cm.gainItem(4000025, -50);//�����Ʒ
			cm.gainItem(1102082,5,5,5,5,0,0,2,2,10,10,5,5,0,0);
			cm.gainExp(812000);//���˸�����
			cm.setgrname(9);
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�������������9����þ���ֵ�������������5 ��/ħ2��");
			cm.sendOk("������������񣬻�ý�����");
			cm.dispose();
		}else{
			cm.sendOk(��̾��+"#r��ӭ�������߾���9��#k\r\n�뵽#r������֮�֣�#k�ռ�50��#v4000177#50��#v4000025#�����ҡ�\r\n������#v1102082#������5 ��/ħ2");
			cm.dispose();
	    }
		} else if (selection == 10) {
			if (cm.haveItem(4000289 ,100)){
			//cm.gainItem(1142107,5,5,5,5,5,5,1,1,0,0,0,0,0,0);
			cm.gainItem(4000289, -100);//�����Ʒ
			cm.gainItem(1113165,2,2,2,2,0,0,2,2,10,10,5,5,0,0);
			cm.gainExp(1512000);//���˸�����
			cm.setgrname(10);
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�������������10����þ���ֵ������ָ������2 ��/ħ2��");
			cm.sendOk("������������񣬻�ý�����");
			cm.dispose();
		}else{
			cm.sendOk(��̾��+"#r��ӭ�������߾���10��#k\r\n�뵽#r������ɭ�֣�#k�ռ�100��#v4000289#�����ҡ�\r\n������#v1113165#������2 ��/ħ2");
			cm.dispose();
	    }	
		} else if (selection == 11) {
			if (cm.haveItem(1142004 ,1)){
			cm.gainItem(1142004, -1);//�����Ʒ
			cm.gainItem(1132088,5,5,5,5,0,0,1,1,10,10,5,5,0,0);
			cm.gainExp(1812000);//���˸�����
			cm.setgrname(11);
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�������������11����þ���ֵ��������������5 ��/ħ1��");
			cm.sendOk("������������񣬻�ý�����");
			cm.dispose();
			cm.sendOk("������������񣬻�ý�����");
			cm.dispose();
		}else{
			cm.sendOk(��̾��+"#r��ӭ�������߾���11��#k\r\n�����#r������ŷ������Ҷ������#k��#v1142004#�����ҡ�\r\n������#v1132088#������5 ��/ħ1");
			cm.dispose();
	    }
		} else if (selection == 12) {
			if (cm.haveItem(4000226 ,30) && cm.haveItem(4000229 ,30)){
			//cm.gainItem(1142107,5,5,5,5,5,5,1,1,0,0,0,0,0,0);
			cm.gainItem(4000226, -30);//�����Ʒ
			cm.gainItem(4000229, -30);//�����Ʒ
			cm.gainItem(1072718,5,5,5,5,0,0,1,1,10,10,5,5,0,0);
			cm.gainExp(2212000);//���˸�����
			cm.setgrname(12);
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�������������12����þ���ֵ����Ь�Ӹ�����5 ��/ħ1��");
			cm.sendOk("������������񣬻�ý�����");
			cm.dispose();
		}else{
			cm.sendOk(��̾��+"#r��ӭ�������߾���12��#k\r\n�뵽#r����ľ������ɭ�֣�#k�ռ�30��#v4000226#30��#v4000229#�����ҡ�\r\n������#v1072718#������5 ��/ħ1");
			cm.dispose();
	    }
		} else if (selection == 13) {
			if (cm.haveItem(4000238 ,50)){
			//cm.gainItem(1142107,5,5,5,5,5,5,1,1,0,0,0,0,0,0);
			cm.gainItem(4000238, -50);//�����Ʒ
			//cm.gainItem(4000229, -100);//�����Ʒ
			//cm.gainItem(1072718,5,5,5,5,0,0,1,1,10,10,5,5,0,0);
			cm.gainExp(2212000);//���˸�����
			cm.gainMeso(+10000000); //�Ӽ����
			cm.setgrname(13);
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�������������13����þ���ֵ�������1000W��");
			cm.sendOk("������������񣬻�ý�����");
			cm.dispose();
		}else{
			cm.sendOk(��̾��+"#r��ӭ�������߾���13��#k\r\n�뵽#r�����֮��·�ڣ�#k�ռ�50��#v4000238#�����ҡ�\r\n����#v4031138#��1000W");
			cm.dispose();
	    }
		} else if (selection == 14) {
			if (cm.haveItem(4000182 ,100)){
			cm.gainItem(4000182, -100);//�����Ʒ
			cm.gainItem(1022129,5,5,5,5,0,0,1,1,10,10,5,5,0,0);
			cm.gainExp(3212000);//���˸�����
			cm.setgrname(14);
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�������������14����þ���ֵ�����۾�������5 ��/ħ1��");
			cm.sendOk("������������񣬻�ý�����");
			cm.dispose();
		}else{
			cm.sendOk(��̾��+"#r��ӭ�������߾���14��#k\r\n�뵽#r���Ͽ��1��#k�ռ�100��#v4000182#�����ҡ�\r\n������#v1022129#������5 ��/ħ1");
			cm.dispose();
	    }	
		} else if (selection == 15) {
			if (cm.haveItem(1142032 ,1) && cm.haveItem(1142108 ,1)){
			cm.gainItem(1142032, -1);//�����Ʒ
			cm.gainItem(1142108, -1);//�����Ʒ
			cm.gainItem(1142109,7,7,7,7,0,0,3,3,10,10,5,5,0,0);
			cm.gainExp(3212000);//���˸�����
			cm.setgrname(15);
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�������������15����þ���ֵ�����߼��ƺŸ�����7 ��/ħ3��");
			cm.sendOk("������������񣬻�ý�����");
			cm.dispose();
		}else{
			cm.sendOk(��̾��+"#r��ӭ�������߾���15��#k\r\n����ɶ���ɭ�ָ�����#v1142032#����ǰ��#v1142108#�����ҡ�\r\n������#v1142109#������7 ��/ħ3");
			cm.dispose();
	    }
		} else if (selection == 16) {
			if (cm.haveItem(4000180 ,100) && cm.haveItem(4000181 ,100)){
			cm.gainItem(4000180, -100);//�����Ʒ
			cm.gainItem(4000181, -100);//�����Ʒ
			cm.gainItem(1112676,2,2,2,2,0,0,2,2,10,10,5,5,0,0);
			cm.gainExp(7212000);//���˸�����
			cm.setgrname(16);
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�������������16����þ���ֵ������ָ����2 ��/ħ2��");
			cm.sendOk("������������񣬻�ý�����");
			cm.dispose();
		}else{
			cm.sendOk(��̾��+"#r��ӭ�������߾���16��#k\r\n�뵽#r�����Ѵ���Ĺ�أ�#k�ռ�100��#v4000180#100��#v4000181#�����ҡ�\r\n������#v1112676#������2 ��/ħ2");
			cm.dispose();
	    }	
		} else if (selection == 17) {
			if (cm.haveItem(4001266 ,1)){
				if (!cm.canHold(1912000,1)) {
				cm.sendOk("������ı����Ƿ�������");
				cm.dispose();
				return;
				}
				if (!cm.canHold(1902001,1)) {
				cm.sendOk("������ı����Ƿ�������");
				cm.dispose();
				return;
				}
				if (!cm.canHold(1912011,1)) {
				cm.sendOk("������ı����Ƿ�������");
				cm.dispose();
				return;
				}
				if (!cm.canHold(1902015,1)) {
				cm.sendOk("������ı����Ƿ�������");
				cm.dispose();
				return;
				}
				if (!cm.canHold(1902016,1)) {
				cm.sendOk("������ı����Ƿ�������");
				cm.dispose();
				return;
				}
				if (!cm.canHold(1902017,1)) {
				cm.sendOk("������ı����Ƿ�������");
				cm.dispose();
				return;
				}
				if (!cm.canHold(1902018,1)) {
				cm.sendOk("������ı����Ƿ�������");
				cm.dispose();
				return;
				}
			//cm.gainItem(4000180, -200);//�����Ʒ
			cm.gainItem(4001266, -1);//�����Ʒ
			if (cm.getJob()==2112){
                cm.teachSkill(20001003 ,1,1); //Magic Armorս��
                cm.teachSkill(20001004 ,1,1); //Magic Armorս��
				cm.gainItem(1912011, 1);//�����Ʒ
				cm.gainItem(1902015, 1);//�����Ʒ
				cm.gainItem(1902016, 1);//�����Ʒ
				cm.gainItem(1902017, 1);//�����Ʒ
				cm.gainItem(1902018, 1);//�����Ʒ
				cm.gainExp(17212000);//���˸�����
				cm.setgrname(17);
				cm.worldMessage(6,"��ң�["+cm.getName()+"]�������������17����þ���ֵ�������＼��������һֻ��");
				cm.sendOk("������������񣬻�ý�����");
				cm.safeDispose(); //�����ű�
				return;
			}
			cm.gainItem(1912000, 1);//�����Ʒ
			cm.gainItem(1902001, 1);//�����Ʒ
            cm.teachSkill(1003,1,1); //Magic Armor
            cm.teachSkill(1004,1,1); //Magic Armor
			//cm.gainItem(1112676,2,2,2,2,0,0,2,2,10,10,5,5,0,0);
			cm.gainExp(17212000);//���˸�����
			cm.setgrname(17);
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�������������17����þ���ֵ�������＼��������һֻ��");
			cm.sendOk("������������񣬻�ý�����");
			cm.dispose();
		}else{
				if (!cm.canHold(4001266,1)) {
				cm.sendOk("������ı����Ƿ�������");
				cm.dispose();
				return;
				}
			cm.gainItem(4001266, 1);//�����Ʒ
			cm.sendOk(��̾��+"#r��ӭ�������߾���17������ð�յ�ף����Ŀ��ģ�\r\n������ɣ��ٴε��ҽ������������＼��������һֻ��");
			cm.dispose();
	    }
		} else if (selection == 18) {
			if (cm.haveItem(4000235 ,1) && cm.haveItem(4000243 ,1) && cm.haveItem(4000460 ,1) && cm.haveItem(4000461 ,1) && cm.haveItem(4000462 ,1)){
			//cm.gainItem(4000180, -200);//�����Ʒ
			//cm.gainItem(4000181, -200);//�����Ʒ
			cm.gainItem(4000235, -1);//�����Ʒ
			cm.gainItem(4000243, -1);//�����Ʒ
			cm.gainItem(4000460, -1);//�����Ʒ
			cm.gainItem(4000461, -1);//�����Ʒ
			cm.gainItem(4000462, -1);//�����Ʒ
			cm.gainItem(1052457  ,10,10,10,10,0,0,2,2,100,100,50,50,0,0);
			cm.gainExp(37212000);//���˸�����
			cm.setgrname(18);
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�������������18����þ���ֵ�����׷�������10 ��/ħ2��");
			cm.sendOk("������������񣬻�ý�����");
			cm.dispose();
		}else{
			//cm.sendOk(��̾��+"#r��ӭ�������߾���17������ð�յ�ף����Ŀ��ģ�\r\n������ɣ��ٴε��ҽ������������＼��������һֻ��");
			cm.sendOk(��̾��+"#r��ӭ�������߾���18��#k\r\n����#r�����������ӥ����࣬���������ޣ��׿���#k\r\n�ռ�#v4000235##v4000243##v4000460##v4000461##v4000462#��1�������ҡ�\r\n������#v1052457#������10 ��/ħ2");
			cm.dispose();
	    }	
		} else if (selection == 19) {
			if (cm.haveItem(4001084 ,1) && cm.haveItem(4001085 ,1)){
			//cm.gainItem(4000180, -200);//�����Ʒ
			//cm.gainItem(4000181, -200);//�����Ʒ
			cm.gainItem(4001084, -1);//�����Ʒ
			cm.gainItem(4001085, -1);//�����Ʒ
			cm.gainItem(1112661  ,5,5,5,5,0,0,5,5,0,0,30,30,0,0);
			cm.gainExp(57212000);//���˸�����
			cm.setgrname(19);
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�������������19����þ���ֵ������ָ������5 ��/ħ5��");
			cm.sendOk("������������񣬻�ý�����");
			cm.dispose();
		}else{
			//cm.sendOk(��̾��+"#r��ӭ�������߾���17������ð�յ�ף����Ŀ��ģ�\r\n������ɣ��ٴε��ҽ������������＼��������һֻ��");
			cm.sendOk(��̾��+"#r��ӭ�������߾���19��#k\r\n����#r�����ӣ�������#k�ռ�#v4001084##v4001085#��1��֤�����ʵ����\r\n������#v1112661#������5 ��/ħ5");
			cm.dispose();
	    }	
		} else if (selection == 20) {
		if (cm.haveItem(4000273 ,200) && cm.haveItem(4000274 ,200)){
			//cm.gainItem(4000180, -200);//�����Ʒ
			//cm.gainItem(4000181, -200);//�����Ʒ
			cm.gainItem(4000273, -200);//�����Ʒ
			cm.gainItem(4000274, -200);//�����Ʒ
			cm.gainItem(1142110  ,8,8,8,8,200,200,5,5,50,50,30,30,10,10);
			cm.gainExp(77212000);//���˸�����
			cm.setgrname(20);
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�������������20����þ���ֵ�����ƺŸ�����8 ��/ħ5��");
			cm.sendOk("������������񣬻�ý�����");
			cm.dispose();
		}else{
			//cm.sendOk(��̾��+"#r��ӭ�������߾���17������ð�յ�ף����Ŀ��ģ�\r\n������ɣ��ٴε��ҽ������������＼��������һֻ��");
			cm.sendOk(��̾��+"#r��ӭ�������߾���20��#k\r\n�뵽#r��������Ѩ��#k�ռ�#v4000273##v4000274#��200�������ҡ�\r\n������#v1142110#������8 ��/ħ5");
			cm.dispose();
	    }20
		}
    }
}

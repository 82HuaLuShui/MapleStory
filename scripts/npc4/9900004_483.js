/*
 ��ݹ���
 */

var status;
var text;
var selstatus = -1;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;
var kuangshi1;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode <= 0) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
			//if (cm.getLevel() > 200){
				//cm.gainItem(1022225,1111,1111,1111,1111,1111,1111,21111,11111,7,7,7,7,5,5);
			//}
			
			//cm.����(2,"��ң�["+cm.getName()+"]");
            text = "ǿ���ð�ռ��ǣ��Ƿ������һ����������װ���أ�\r\n\r\n";
            //text += "       #L0##e#r#v1003112#��������ͷ��#v1003112##l\r\n";
            text += "        #L1##e#r#v1012319#8�������#v1012319##l\r\n";
            //text += "      #L2##e#r#v1052314#lv140��ְҵ�׷�#v1052314##l\r\n";
            text += "       #L3##e#r#v1122076#���׺�������#v1122076##l\r\n";
            //text += "#L1##e#rɾ����ʯ��#v4020000##v4020001##v4020002##v4020003##v4020004##v4020005##v4020006##v4020007##v4020008##l\r\n";
            //text += "#L2##e#rɾ��������#v2060000##v2061000##v2000000##v2000001##v2000002##v2000003##l\r\n";
            //text += "#L3##e#rɾ��������#v4130000##v4130001##v4130002##v4130003#�ȵȸ����ٽ���#l\r\n";
            //text += "#L2##e#r��ȡŮ����֤�ƺš�#l\r\n";
            text += "\r\n\r\n\r\n\r\n";
            cm.sendSimple(text);
        }else if (status == 1) {
			if(selection==0){
                kuangshi1 = 0;
                //cm.sendYesNo("#v1003112#��ȷ��Ҫɾ����");
			text = "����ǿ���ʵ��ȥ��ȡһ��#v1003112##t1003112#�ɣ�\r\n#r#v1003112##t1003112#ֻ����һ��Ŷ#k��\r\n";
            text += "#L0##e#v1003112#��������ͷ��#r������30������2��#k#v1003112##l\r\n";
            text += "#L1##e#v1003112#��������ͷ��#r������30������2��#k#v1003112##l\r\n";
            text += "#L2##e#v1003112#��������ͷ��#r������21ħ����2��#k#v1003112##l\r\n";
            text += "#L3##e#v1003112#��������ͷ��#r������30������2��#k#v1003112##l\r\n";
            //text += "\r\n\r\n\r\n\r\n";
            cm.sendSimple(text);
			}else if(selection==1){
			text = "����ǿ���ʵ��ȥ��ȡһ��#v1012319##t1012319#�ɣ�\r\n\r\n";
            text += "#L4##e#v1012319##t1012319##r������15������5��#k#v1012319##l\r\n";
            text += "#L5##e#v1012319##t1012319##r������15������5��#k#v1012319##l\r\n";
            text += "#L6##e#v1012319##t1012319##r������10ħ����5��#k#v1012319##l\r\n";
            text += "#L7##e#v1012319##t1012319##r������15������5��#k#v1012319##l\r\n";
            cm.sendSimple(text);
			}else if(selection==2){
			text = "����ǿ���ʵ��ȥ��ȡһ��#v1052314##t1052314#�ɣ�\r\n\r\n";
            text += "#L8##e#v1052314##t1052314##r������30������2��#k#v1052314##l\r\n";
            text += "#L9##e#v1052316##t1052316##r������30������2��#k#v1052316##l\r\n";
            text += "#L10##e#v1052315##t1052315##r������20ħ����2��#k#v1052315##l\r\n";
            text += "#L11##e#v1052317##t1052317##r������30������2��#k#v1052317##l\r\n";
            text += "#L12##e#v1052318##t1052318##r������30������2��#k#v1052318##l\r\n";
            cm.sendSimple(text);
			}else if(selection==3){
			text = "����ǿ���ʵ��ȥ��ȡһ��#v1122076##t1122076#�ɣ�\r\n\r\n";
            text += "#L13##e#v1122076##t1122076##r������30������30��#k#v1122076##l\r\n";
            text += "#L14##e#v1122076##t1122076##r������30������30��#k#v1122076##l\r\n";
            text += "#L15##e#v1122076##t1122076##r������25ħ����10��#k#v1122076##l\r\n";
            text += "#L16##e#v1122076##t1122076##r������30������30��#k#v1122076##l\r\n";
            cm.sendSimple(text);
			}else if(selection==3){
                kuangshi1 = 3;
                cm.sendYesNo("��ȷ��Ҫɾ����#v4130000##v4130001##v4130002##v4130003#�ȵȸ����ٽ���");
			}
		}else if (status == 2) {
			if(selection==0){
                zhakuntou = 0;
				 if (cm.haveItem(1003112, 1)){
                    cm.sendOk("�Ѿ�����һ����������ͷ���ˣ�������ֻ����һ����")
					cm.safeDispose();
                 }
                    cm.sendYesNo("     #v1003112#������30������2�� ��Ҫ��������#v1003112#\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4250802##z4250802# [#r#c4250802##k/5]       #v4011008##z4011008# [#r#c4011008##k/5] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/10000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1003112##k");
			}else if(selection==1){
                zhakuntou = 1;
				 if (cm.haveItem(1003112, 1)){
                    cm.sendOk("�Ѿ�����һ����������ͷ���ˣ�������ֻ����һ����")
					cm.safeDispose();
                 }
                    cm.sendYesNo("     #v1003112#������30������2�� ��Ҫ��������#v1003112#\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4251102##z4251102# [#r#c4251102##k/5]       #v4011008##z4011008# [#r#c4011008##k/5] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/10000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1003112##k");
			}else if(selection==2){
                zhakuntou = 2;
				 if (cm.haveItem(1003112, 1)){
                    cm.sendOk("�Ѿ�����һ����������ͷ���ˣ�������ֻ����һ����")
					cm.safeDispose();
                 }
                    cm.sendYesNo("     #v1003112#������21ħ����2�� ��Ҫ��������#v1003112#\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4250902##z4250902# [#r#c4250902##k/5]       #v4011008##z4011008# [#r#c4011008##k/5] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/10000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1003112##k");
			}else if(selection==3){
                zhakuntou = 3;
				 if (cm.haveItem(1003112, 1)){
                    cm.sendOk("�Ѿ�����һ����������ͷ���ˣ�������ֻ����һ����")
					cm.safeDispose();
                 }
                    cm.sendYesNo("     #v1003112#������30������2�� ��Ҫ��������#v1003112#\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4251002##z4251002# [#r#c4251002##k/5]       #v4011008##z4011008# [#r#c4011008##k/5] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/10000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1003112##k");
			}else if(selection==4){
                zhakuntou = 4;
                    cm.sendYesNo("     #v1012319#������15������5�� ��Ҫ��������#v1012319#\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4250802##z4250802# [#r#c4250802##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/20000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1012319##k");
			}else if(selection==5){
                zhakuntou = 5;
                    cm.sendYesNo("     #v1012319#������15������5�� ��Ҫ��������#v1012319#\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4251102##z4251102# [#r#c4251102##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/20000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1012319##k");
			}else if(selection==6){
                zhakuntou = 6;
                    cm.sendYesNo("     #v1012319#������10������5�� ��Ҫ��������#v1012319#\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4250902##z4250902# [#r#c4250902##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/20000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1012319##k");
			}else if(selection==7){
                zhakuntou = 7;
                    cm.sendYesNo("     #v1012319#������15������5�� ��Ҫ��������#v1012319#\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4251002##z4251002# [#r#c4251002##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/20000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1012319##k");
			}else if(selection==8){
                zhakuntou = 8;
                cm.sendYesNo("#v1052314##t1052314#������30������2�� ��Ҫ�������¡�\r\n��Ҫ��#v1002357##t1002357# �� 1#l\r\n��Ҫ��#v4250802##t4250802# �� 5#l\r\n��Ҫ��#v4001080##t4001080# �� 5#l\r\n��Ҫ��#v4031138# �� 3000W#l\r\n�Ƿ�Ҫ����һ��#v1052314##t1052314#�أ���");
			}else if(selection==9){
                zhakuntou = 9;
                cm.sendYesNo("#v1052316##t1052316#������30������2�� ��Ҫ�������¡�\r\n��Ҫ��#v1002357##t1002357# �� 1#l\r\n��Ҫ��#v4251102##t4251102# �� 5#l\r\n��Ҫ��#v4001080##t4001080# �� 5#l\r\n��Ҫ��#v4031138# �� 3000W#l\r\n�Ƿ�Ҫ����һ��#v1052316##t1052316#�أ���");
			}else if(selection==10){
                zhakuntou = 10;
                cm.sendYesNo("#v1052315##t1052315#������20������2�� ��Ҫ�������¡�\r\n��Ҫ��#v1002357##t1002357# �� 1#l\r\n��Ҫ��#v4250902##t4250902# �� 5#l\r\n��Ҫ��#v4001080##t4001080# �� 5#l\r\n��Ҫ��#v4031138# �� 3000W#l\r\n�Ƿ�Ҫ����һ��#v1052315##t1052315#�أ���");
			}else if(selection==11){
                zhakuntou = 11;
                cm.sendYesNo("#v1052317##t1052317#������30������2�� ��Ҫ�������¡�\r\n��Ҫ��#v1002357##t1002357# �� 1#l\r\n��Ҫ��#v4251002##t4251002# �� 5#l\r\n��Ҫ��#v4001080##t4001080# �� 5#l\r\n��Ҫ��#v4031138# �� 3000W#l\r\n�Ƿ�Ҫ����һ��#v1052317##t1052317#�أ���");
			}else if(selection==12){
                zhakuntou = 12;
                cm.sendYesNo("#v1052318##t1052318#������30������2�� ��Ҫ�������¡�\r\n��Ҫ��#v1002357##t1002357# �� 1#l\r\n��Ҫ��#v4251002##t4251002# �� 5#l\r\n��Ҫ��#v4001080##t4001080# �� 5#l\r\n��Ҫ��#v4031138# �� 3000W#l\r\n�Ƿ�Ҫ����һ��#v1052318##t1052318#�أ���");
			}else if(selection==13){
                zhakuntou = 13;
				 if (cm.haveItem(1122076, 1)){
                    cm.sendOk("���׺�������ֻ����һ����")
					cm.safeDispose();
                 }
                    cm.sendYesNo("     #v1122076#������30������30�� ��Ҫ��������#v1122076#\r\n\r\n#v1122000##z1122000# [#r#c1122000##k/1]       #v4001094##z4001094# [#r#c4001094##k/10]\r\n#v4251202##z4251202# [#r#c4251202##k/15]       #v4011008##z4011008# [#r#c4011008##k/20] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/400000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1122076##k");
			}else if(selection==14){
                zhakuntou = 14;
				 if (cm.haveItem(1122076, 1)){
                    cm.sendOk("���׺�������ֻ����һ����")
					cm.safeDispose();
                 }
                    cm.sendYesNo("     #v1122076#������30������30�� ��Ҫ��������#v1122076#\r\n\r\n#v1122000##z1122000# [#r#c1122000##k/1]       #v4001094##z4001094# [#r#c4001094##k/10]\r\n#v4251202##z4251202# [#r#c4251202##k/15]       #v4011008##z4011008# [#r#c4011008##k/20] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/400000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1122076##k");
			}else if(selection==15){
                zhakuntou = 15;
				 if (cm.haveItem(1122076, 1)){
                    cm.sendOk("���׺�������ֻ����һ����")
					cm.safeDispose();
                 }
                    cm.sendYesNo("     #v1122076#������25ħ����10�� ��Ҫ��������#v1122076#\r\n\r\n#v1122000##z1122000# [#r#c1122000##k/1]       #v4001094##z4001094# [#r#c4001094##k/10]\r\n#v4251202##z4251202# [#r#c4251202##k/15]       #v4011008##z4011008# [#r#c4011008##k/20] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/400000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1122076##k");
			}else if(selection==16){
                zhakuntou = 16;
				 if (cm.haveItem(1122076, 1)){
                    cm.sendOk("���׺�������ֻ����һ����")
					cm.safeDispose();
                 }
                    cm.sendYesNo("     #v1122076#������30������30�� ��Ҫ��������#v1122076#\r\n\r\n#v1122000##z1122000# [#r#c1122000##k/1]       #v4001094##z4001094# [#r#c4001094##k/10]\r\n#v4251202##z4251202# [#r#c4251202##k/15]       #v4011008##z4011008# [#r#c4011008##k/20] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/400000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1122076##k");
			}
		}else if (status == 3) {
			if (zhakuntou==0){
                if (cm.haveItem(4011008, 5) && cm.haveItem(1002357, 1) && cm.haveItem(4250802, 5) && cm.haveItem(4001080, 10) && cm.getPlayer().getMeso() >10000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4250802,-5);
					cm.gainItem(4001080,-10);
					cm.gainItem(4011008,-5);
					cm.gainMeso(-10000000); //�Ӽ����
					cm.gainItem(1003112,30,0,0,0,0,0,2,0,0,0,30,30,0,0);
//cm.gainItem(1002939,0,500,0,0,200,200,350,11111,0,0,0,0,5,5);
					cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽�������ͷ����");
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==1){
                if (cm.haveItem(4011008, 5) && cm.haveItem(1002357, 1) &&cm.haveItem(4251102, 5) &&cm.haveItem(4001080, 10) && cm.getPlayer().getMeso() >10000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251102,-5);
					cm.gainItem(4001080,-10);
					cm.gainItem(4011008,-5);
					cm.gainMeso(-10000000); //�Ӽ����
					cm.gainItem(1003112,0,30,0,0,0,0,2,0,0,0,30,30,0,0);
//cm.gainItem(1002939,0,500,0,0,200,200,350,11111,0,0,0,0,5,5);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽�������ͷ����");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==2){
                if (cm.haveItem(4011008, 5) && cm.haveItem(1002357, 1) &&cm.haveItem(4250902, 5) &&cm.haveItem(4001080, 10) && cm.getPlayer().getMeso() >10000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4250902,-5);
					cm.gainItem(4001080,-10);
					cm.gainItem(4011008,-5);
					cm.gainMeso(-10000000); //�Ӽ����
					cm.gainItem(1003112,0,0,0,21,0,0,0,2,0,0,30,30,0,0);
//cm.gainItem(1002939,0,500,0,0,200,200,350,11111,0,0,0,0,5,5);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽�������ͷ����");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==3){
                if (cm.haveItem(4011008, 5) && cm.haveItem(1002357, 1) &&cm.haveItem(4251002, 5) &&cm.haveItem(4001080, 10) && cm.getPlayer().getMeso() >10000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-5);
					cm.gainItem(4001080,-10);
					cm.gainItem(4011008,-5);
					cm.gainMeso(-10000000); //�Ӽ����
					cm.gainItem(1003112,0,0,30,0,0,0,2,0,0,0,30,30,0,0);
//cm.gainItem(1002939,0,500,0,0,200,200,350,11111,0,0,0,0,5,5);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽�������ͷ����");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==4){//4250802 4251102 4250902 4251002
                if (cm.haveItem(1002357, 1) && cm.haveItem(4250802, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 10)  && cm.getPlayer().getMeso() >20000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4250802,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-10);
					cm.gainMeso(-20000000); //�Ӽ����
					cm.gainItem(1012319,15,0,0,0,0,0,5,0,0,0,30,30,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽�������8������죡");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==5){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4251102, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 10)  && cm.getPlayer().getMeso() >20000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251102,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-10);
					cm.gainMeso(-20000000); //�Ӽ����
					cm.gainItem(1012319,0,15,0,0,0,0,5,0,0,0,30,30,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽�������8������죡");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==6){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4250902, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 10)  && cm.getPlayer().getMeso() >20000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4250902,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-10);
					cm.gainMeso(-20000000); //�Ӽ����
					cm.gainItem(1012319,0,0,0,10,0,0,0,5,0,0,30,30,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽�������8������죡");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==7){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4251002, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 10)  && cm.getPlayer().getMeso() >20000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-10);
					cm.gainMeso(-20000000); //�Ӽ����
					cm.gainItem(1012319,0,0,15,0,0,0,5,0,0,0,30,30,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽�������8������죡");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==8){
                if (cm.haveItem(1002357, 1) &&cm.haveItem(4251002, 5) &&cm.haveItem(4001080, 5) && cm.getPlayer().getMeso() >30000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-5);
					cm.gainItem(4001080,-5);
					cm.gainMeso(-30000000); //�Ӽ����
					cm.gainItem(1052314,30,0,0,0,0,0,2,0,0,0,55,55,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ��������140��սʿ�׷���");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==9){
                if (cm.haveItem(1002357, 1) &&cm.haveItem(4251002, 5) &&cm.haveItem(4001080, 5) && cm.getPlayer().getMeso() >30000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-5);
					cm.gainItem(4001080,-5);
					cm.gainMeso(-30000000); //�Ӽ����
					cm.gainItem(1052316,0,30,0,0,0,0,2,0,0,0,55,55,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ��������140���������׷���");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==10){
                if (cm.haveItem(1002357, 1) &&cm.haveItem(4251002, 5) &&cm.haveItem(4001080, 5) && cm.getPlayer().getMeso() >30000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-5);
					cm.gainItem(4001080,-5);
					cm.gainMeso(-30000000); //�Ӽ����
					cm.gainItem(1052315,0,0,0,20,0,0,0,2,0,0,55,55,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ��������140����ʦ�׷���");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==11){
                if (cm.haveItem(1002357, 1) &&cm.haveItem(4251002, 5) &&cm.haveItem(4001080, 5) && cm.getPlayer().getMeso() >30000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-5);
					cm.gainItem(4001080,-5);
					cm.gainMeso(-30000000); //�Ӽ����
					cm.gainItem(1052317,0,0,30,0,0,0,2,0,0,0,55,55,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ��������140�������׷���");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==12){
                if (cm.haveItem(1002357, 1) &&cm.haveItem(4251002, 5) &&cm.haveItem(4001080, 5) && cm.getPlayer().getMeso() >30000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-5);
					cm.gainItem(4001080,-5);
					cm.gainMeso(-30000000); //�Ӽ����
					cm.gainItem(1052318,0,0,0,0,0,0,2,0,0,0,55,55,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ��������140�������׷���");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==13){
                if (cm.haveItem(1122000, 1) &&cm.haveItem(4250802, 10) &&cm.haveItem(4001094, 10) && cm.haveItem(4011008, 10) && cm.getPlayer().getMeso() >100000000){
					cm.gainItem(1122000,-1);
					cm.gainItem(4250802,-10);
					cm.gainItem(4001094,-10);
					cm.gainItem(4011008,-10);
					cm.gainMeso(-100000000); //�Ӽ����
					cm.gainItem(1122076,30,0,0,0,0,0,30,0,0,0,0,0,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽��׺�����������");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==14){
                if (cm.haveItem(1122000, 1) &&cm.haveItem(4251102, 10) &&cm.haveItem(4001094, 10) && cm.haveItem(4011008, 10) && cm.getPlayer().getMeso() >100000000){
					cm.gainItem(1122000,-1);
					cm.gainItem(4251102,-10);
					cm.gainItem(4001094,-10);
					cm.gainItem(4011008,-10);
					cm.gainMeso(-100000000); //�Ӽ����
					cm.gainItem(1122076,0,30,0,0,0,0,30,0,0,0,0,0,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽��׺�����������");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==15){
                if (cm.haveItem(1122000, 1) &&cm.haveItem(4250902, 10) &&cm.haveItem(4001094, 10) && cm.haveItem(4011008, 10) && cm.getPlayer().getMeso() >100000000){
					cm.gainItem(1122000,-1);
					cm.gainItem(4250902,-10);
					cm.gainItem(4001094,-10);
					cm.gainItem(4011008,-10);
					cm.gainMeso(-100000000); //�Ӽ����
					cm.gainItem(1122076,0,0,0,25,0,0,0,10,0,0,0,0,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽��׺�����������");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==16){
                if (cm.haveItem(1122000, 1) &&cm.haveItem(4251002, 10) &&cm.haveItem(4001094, 10) && cm.haveItem(4011008, 10) && cm.getPlayer().getMeso() >100000000){
					cm.gainItem(1122000,-1);
					cm.gainItem(4251002,-10);
					cm.gainItem(4001094,-10);
					cm.gainItem(4011008,-10);
					cm.gainMeso(-100000000); //�Ӽ����
					cm.gainItem(1122076,0,0,30,0,0,0,30,0,0,0,0,0,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					//cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽��׺�����������");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			
			
		}
    }
}

/* �� �±�д,ת����ע��*/

importPackage(net.sf.odinms.server);
importPackage(java.util);
importPackage(net.sf.odinms.client);

var needap = 1; //��ҪAP������
var needdz = 1;//��Ҫ��Ʊ������
var needzsb = 1;//��Ҫʥ��������
var needsj = 1;//����������Ҫpk�ҵ�����
var slot;
var item;
var qty;
var display;

function start() {
    status = -1;
    action(1, 0, -1);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else if (mode == 0 && type == 0) {
        status--;
        
    } else {
        cm.sendOk("�õ�,����������Ҫ��ʲô,�һ�������Ϊ������..");
        cm.dispose();
        return;
    }
if (status == 0) {
 if(cm.getChar().isGM()){
var text = "���,�ҵ�����#h #.�ҵ�ID:"+cm.getNpc()+"\r\n";
text += "���Ǳ���ǿ��װ��ʹ��,��ʲô��Ҫ��Ч����?#r\r\n";
text += "#b#L1#������װ�� �������� ��#l  #L8#������װ��[���]��#l\r\n#L2#������װ�� ħ�������� ��#l  #L9#�����װ��[#r�շ�#b]��#l\r\n";
text += "#b#L3#������װ�� ��������ֵ ��#l  #L10#��һ������[���]��#l\r\n#L4#������װ�� ��������ֵ ��#l\r\n";
text += "#b#L5#������װ�� ��������ֵ ��#l     \r\n#b#L6#������װ�� ��������ֵ ��#l     \r\n";
text += "#b#L7#������װ�� ���������� ��#l  \r\n\r\n\r\n";
text += "#k#n��Ŀǰɱ��#r" + cm.getChar().getPvpKills() +"#k��  ��ɱ����:#r" + cm.getChar().getPvpDeaths() +"#k��  pk��:#r" + cm.getzb() + "#k��";
cm.sendSimple(text);
  }else {
var text = "���,�ҵ�����#h #.�ҵ�ID:"+cm.getNpc()+"\r\n";
text += "���Ǳ���ǿ��װ��ʹ��,��ʲô��Ҫ��Ч����?#r\r\n";
text += "#b#L1#������װ�� �������� ��#l  #L8#������װ��[���]��#l\r\n#L2#������װ�� ħ�������� ��#l  #L9#�����װ��#r[�շ�]#b��#l\r\n";
text += "#b#L3#������װ�� ��������ֵ ��#l  #L10#��һ������[���]��#l\r\n#L4#������װ�� ��������ֵ ��#l\r\n";
text += "#b#L5#������װ�� ��������ֵ ��#l     #r��������,�����\r\n#b#L6#������װ�� ��������ֵ ��#l \r\n";
text += "#b#L7#������װ�� ���������� ��#l  \r\n\r\n\r\n";
text += "#k#n��Ŀǰɱ��#r" + cm.getChar().getPvpKills() +"#k��  ��ɱ����:#r" + cm.getChar().getPvpDeaths() +"#k��  pk��:#r" + cm.getzb() + "#k��";
cm.sendSimple(text);
}
//==========================
} else if (status == 1) {
if (selection == 1) {
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) ==null) {
cm.sendOk("��һ��û��װ��,�޷�ʹ��.");cm.dispose();
}else if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getExpiration() !=null) {
cm.sendOk("��ʱװ������ʹ�øù���.");cm.dispose();

} else{
var text = "";
text += "��Ҫ������װ��Ϊ:#v"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId()+"#,����������Ϊ��#r"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()+"��#k\r\n����#r����װ����������#kǿ����Ҫ����Ҫ��\r\n�����ġ"+needdz+" ����Ʊ#v4002002# + #r"+needap+"#k ����ֵ+ "+  needzsb+" ��ʥ��#v4031454#\r\n\r\n��Ч���װ��#r������������:#b10#r.�Ӿ����:#b-1#r.\r\n\r\n#k��ע���ٸ�ǿ���豣֤����������>0,���ɽ���.\r\n";
text += "       ��#b#eװ������һ����ƷΪǿ����Ʒ#n#K.\r\n#k�������������ע������,�����ʧ��������и���.\r\n";
text += "#L0#�����￪ʼǿ��װ��������#l";
text += "\r\n\r\n";
text += "";
cm.sendSimple(text);  
}
} else if (status == 1) {
if (selection == 2) {
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) ==null) {
cm.sendOk("��һ��û��װ��,�޷�ʹ��.");cm.dispose();
}else if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getExpiration() !=null) {
cm.sendOk("��ʱװ������ʹ�øù���.");cm.dispose();
} else{
var text = "";
text += "��Ҫ������װ��Ϊ:#v"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId()+"#,����������Ϊ��#r"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()+"��#k\r\n����#r����װ��ħ��������#kǿ����Ҫ����Ҫ��\r\n�����ġ"+needdz+" ����Ʊ#v4002002# + #r"+needap+"#k ����ֵ+ "+  needzsb+" ��ʥ��#v4031454#\r\n\r\n��Ч���װ��#rħ������������:#b10#r.�Ӿ����:#b-1#r.\r\n\r\n#k��ע���ٸ�ǿ���豣֤����������>0,���ɽ���.\r\n";
text += "       ��#b#eװ������һ����ƷΪǿ����Ʒ#n#K.\r\n#k�������������ע������,�����ʧ��������и���.\r\n";
text += "#r#L1#�����￪ʼǿ��װ��������#l";
text += "\r\n\r\n";
text += "";
cm.sendSimple(text); }
} else if (status == 1) {
if (selection == 3) {
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) ==null) {
cm.sendOk("��һ��û��װ��,�޷�ʹ��.");cm.dispose();
}else if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getExpiration() !=null) {
cm.sendOk("��ʱװ������ʹ�øù���.");cm.dispose();
} else{
var text = "";
text += "��Ҫ������װ��Ϊ:#v"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId()+"#,����������Ϊ��#r"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()+"��#k\r\n����#r����װ����������ֵ#kǿ����Ҫ����Ҫ��\r\n�����ġ"+needdz+" ����Ʊ#v4002002# + #r"+needap+"#k ����ֵ+ "+  needzsb+" ��ʥ��#v4031454#\r\n\r\n��Ч���װ��#r��������ֵ����:#b10#r.�Ӿ����:#b-1#r.\r\n\r\n#k��ע���ٸ�ǿ���豣֤����������>0,���ɽ���.\r\n";
text += "       ��#b#eװ������һ����ƷΪǿ����Ʒ#n#K.\r\n#k�������������ע������,�����ʧ��������и���.\r\n";
text += "#r#L2#�����￪ʼǿ��װ��������#l";
text += "\r\n\r\n";
text += "";
cm.sendSimple(text);  }
} else if (status == 1) {
if (selection == 4) {
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) ==null) {
cm.sendOk("��һ��û��װ��,�޷�ʹ��.");cm.dispose();
}else if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getExpiration() !=null) {
cm.sendOk("��ʱװ������ʹ�øù���.");cm.dispose();
} else{
var text = "";
text += "��Ҫ������װ��Ϊ:#v"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId()+"#,����������Ϊ��#r"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()+"��#k\r\n����#r����װ����������ֵ#kǿ����Ҫ����Ҫ��\r\n�����ġ"+needdz+" ����Ʊ#v4002002# + #r"+needap+"#k ����ֵ+ "+  needzsb+" ��ʥ��#v4031454#\r\n\r\n��Ч���װ��#r��������ֵ����:#b10#r.�Ӿ����:#b-1#r.\r\n\r\n#k��ע���ٸ�ǿ���豣֤����������>0,���ɽ���.\r\n";
text += "       ��#b#eװ������һ����ƷΪǿ����Ʒ#n#K.\r\n#k�������������ע������,�����ʧ��������и���.\r\n";
text += "#r#L3#�����￪ʼǿ��װ��������#l";
text += "\r\n\r\n";
text += "";
cm.sendSimple(text);  }
} else if (status == 1) {
if (selection == 5) {
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) ==null) {
cm.sendOk("��һ��û��װ��,�޷�ʹ��.");cm.dispose();
}else if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getExpiration() !=null) {
cm.sendOk("��ʱװ������ʹ�øù���.");cm.dispose();
} else{
var text = "";
text += "��Ҫ������װ��Ϊ:#v"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId()+"#,����������Ϊ��#r"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()+"��#k\r\n����#r����װ����������ֵ#kǿ����Ҫ����Ҫ��\r\n�����ġ"+needdz+" ����Ʊ#v4002002# + #r"+needap+"#k ����ֵ+ "+  needzsb+" ��ʥ��#v4031454#\r\n\r\n��Ч���װ��#r��������ֵ����:#b10#r.�Ӿ����:#b-1#r.\r\n\r\n#k��ע���ٸ�ǿ���豣֤����������>0,���ɽ���.\r\n";
text += "       ��#b#eװ������һ����ƷΪǿ����Ʒ#n#K.\r\n#k�������������ע������,�����ʧ��������и���.\r\n";
text += "#r#L4#�����￪ʼǿ��װ��������#l";
text += "\r\n\r\n";
text += "";
cm.sendSimple(text);  }
} else if (status == 1) {
if (selection == 6) {
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) ==null) {
cm.sendOk("��һ��û��װ��,�޷�ʹ��.");
}else if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getExpiration() !=null) {
cm.sendOk("��ʱװ������ʹ�øù���.");cm.dispose();
cm.dispose();
} else{
var text = "";
text += "��Ҫ������װ��Ϊ:#v"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId()+"#,����������Ϊ��#r"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()+"��#k\r\n����#r����װ����������ֵ#kǿ����Ҫ����Ҫ��\r\n�����ġ"+needdz+" ����Ʊ#v4002002# + #r"+needap+"#k ����ֵ+ "+  needzsb+" ��ʥ��#v4031454#\r\n\r\n��Ч���װ��#r��������ֵ����:#b10#r.�Ӿ����:#b-1#r.\r\n\r\n#k��ע���ٸ�ǿ���豣֤����������>0,���ɽ���.\r\n";
text += "       ��#b#eװ������һ����ƷΪǿ����Ʒ#n#K.\r\n#k�������������ע������,�����ʧ��������и���.\r\n";
text += "#r#L5#�����￪ʼǿ��װ��������#l";
text += "\r\n\r\n";
text += "";
cm.sendSimple(text);  }
} else if (status == 1) {
if (selection == 7) {
if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) ==null) {
cm.sendOk("��һ��û��װ��,�޷�ʹ��.");
}else if(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getExpiration() !=null) {
cm.sendOk("��ʱװ������ʹ�øù���.");cm.dispose();
cm.dispose();
} else{
var text = "";
text += "��Ҫ������װ��Ϊ:#v"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId()+"#,����������Ϊ��#r"+cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getUpgradeSlots()+"��#k\r\n����#r����װ������������#kǿ����Ҫ����Ҫ��\r\n�����ġ"+needsj+" �� pk��\r\n\r\n��Ч���װ��#r��������������:#b1#r..\r\n\r\n#k��ע��";
text += "��#b#eװ������һ����ƷΪǿ����Ʒ#n#K.\r\n#k�������������ע������,�����ʧ��������и���.\r\n";
text += "#r#L6#�����￪ʼǿ��װ��������#l";
text += "\r\n\r\n";
text += "";
cm.sendSimple(text);  }
} else if (status == 1) {
if (selection == 8) {
cm.openNpc( 1063004);
} else if (status == 1) {
if (selection == 9) {
cm.openNpc( 1063005);
} else if (status == 1) {
if (selection == 10) {
var a ="#r��ע��:�˹�����������Ϊ�����������,������������ǰ����Ҫ�Ķ��������ڲֿ���:\r\n#k��Щ������Ʒ�ǲ���ɾ����Ŷ~\r\n#b";
a+= "\r\n#L7#�I(^��^)�Jװ����"; 
a+= "\r\n#L8#�I(^��^)�J������"; 
a+= "\r\n#L9#�I(^��^)�J������"; 
a+= "\r\n#L10#�I(^��^)�J������"; 
a+= "\r\n#L11#�I(^��^)�J������"; 
} 
cm.sendSimple(a);
} else if (status == 1) {

//����֮ǰ����
}}}
}
}
}
}
}
}
//����status == 1
} else if (status == 2) {
if (selection == 0) {
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b����װ������������Ҫ#r"+needap+"#b������ֵ,��ʣ�������ֵ����!");
cm.dispose();
}
else if (!cm.haveItem(4002002,needdz)) {
cm.sendOk("��ı�����û��"+needdz+"������Ʊ#v4002002#");
cm.dispose();
}
else if (!cm.haveItem(4031454)) {
cm.sendOk("��ı�����û��ʥ��#v4031454#");
cm.dispose();

}else if (cm.haveItem(4031454) && cm.haveItem(4002002,needdz) && cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() >=1) {

var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    
                   
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4002002,-needdz);
cm.gainItem(4031454,-1);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setWatk(item.getWatk() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.sendOk("��ϲ��,�����������ɹ�.\r\n�Ҿ����-1,��������10!");
cm.dispose();
}
else{
cm.sendOk("ǿ��Ҫ����.");
cm.dispose();
}


} else if (status == 2) {
if (selection == 1) {
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b����װ��ħ����������Ҫ#r"+needap+"#b������ֵ,��ʣ�������ֵ����!");
cm.dispose();
}
else if (!cm.haveItem(4002002,needdz)) {
cm.sendOk("��ı�����û��"+needdz+"������Ʊ#v4002002#");
cm.dispose();
}
else if (!cm.haveItem(4031454)) {
cm.sendOk("��ı�����û��ʥ��#v4031454#");
cm.dispose();

}else if (cm.haveItem(4031454) && cm.haveItem(4002002,needdz) && cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() >=1) {

var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    
                   
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4002002,-needdz);
cm.gainItem(4031454,-1);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setMatk(item.getMatk() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.sendOk("��ϲ��,����ħ�������ɹ�.\r\n�Ҿ����-1,ħ��������10!");
cm.dispose();
}
else{
cm.sendOk("ǿ��Ҫ����.");
cm.dispose();
}

} else if (status == 2) {
if (selection == 2) {
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b����װ����������ֵ��Ҫ#r"+needap+"#b������ֵ,��ʣ�������ֵ����!");
cm.dispose();
}
else if (!cm.haveItem(4002002,needdz)) {
cm.sendOk("��ı�����û��"+needdz+"������Ʊ#v4002002#");
cm.dispose();
}
else if (!cm.haveItem(4031454)) {
cm.sendOk("��ı�����û��ʥ��#v4031454#");
cm.dispose();

}else if (cm.haveItem(4031454) && cm.haveItem(4002002,needdz) && cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() >=1) {

var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    
                   
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4002002,-needdz);
cm.gainItem(4031454,-1);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setStr(item.getStr()+10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.sendOk("��ϲ��,���������ɹ�.\r\n�Ҿ����-1,������10!");
cm.dispose();
}
else{
cm.sendOk("ǿ��Ҫ����.");
cm.dispose();
}

} else if (status == 2) {
if (selection == 3) {
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b����װ����������ֵ��Ҫ#r"+needap+"#b������ֵ,��ʣ�������ֵ����!");
cm.dispose();
}
else if (!cm.haveItem(4002002,needdz)) {
cm.sendOk("��ı�����û��"+needdz+"������Ʊ#v4002002#");
cm.dispose();
}
else if (!cm.haveItem(4031454)) {
cm.sendOk("��ı�����û��ʥ��#v4031454#");
cm.dispose();

}else if (cm.haveItem(4031454) && cm.haveItem(4002002,needdz) && cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() >=1) {

var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    
                   
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4002002,-needdz);
cm.gainItem(4031454,-1);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setDex(item.getDex() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.sendOk("��ϲ��,������������ֵ�ɹ�.\r\n�Ҿ����-1,��������ֵ��10!");
cm.dispose();
}
else{
cm.sendOk("ǿ��Ҫ����.");
cm.dispose();
}
} else if (status == 2) {
if (selection == 4) {
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b����װ����������ֵ��Ҫ#r"+needap+"#b������ֵ,��ʣ�������ֵ����!");
cm.dispose();
}
else if (!cm.haveItem(4002002,needdz)) {
cm.sendOk("��ı�����û��"+needdz+"������Ʊ#v4002002#");
cm.dispose();
}
else if (!cm.haveItem(4031454)) {
cm.sendOk("��ı�����û��ʥ��#v4031454#");
cm.dispose();

}else if (cm.haveItem(4031454) && cm.haveItem(4002002,needdz) && cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() >=1) {

var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    
                   
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4002002,-needdz);
cm.gainItem(4031454,-1);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setInt(item.getInt() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.sendOk("��ϲ��,������������ֵ�ɹ�.\r\n�Ҿ����-1,��������ֵ��10!");
cm.dispose();
}
else{
cm.sendOk("ǿ��Ҫ����.");
cm.dispose();
}
} else if (status == 2) {
if (selection == 5) {
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b����װ����������ֵ��Ҫ#r"+needap+"#b������ֵ,��ʣ�������ֵ����!");
cm.dispose();
}
else if (!cm.haveItem(4002002,needdz)) {
cm.sendOk("��ı�����û��"+needdz+"������Ʊ#v4002002#");
cm.dispose();
}
else if (!cm.haveItem(4031454)) {
cm.sendOk("��ı�����û��ʥ��#v4031454#");
cm.dispose();

}else if (cm.haveItem(4031454) && cm.haveItem(4002002,needdz) && cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() >=1) {

var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    
                   
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4002002,-needdz);
cm.gainItem(4031454,-1);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setLuk(item.getLuk() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.sendOk("��ϲ��,������������ֵ�ɹ�.\r\n�Ҿ����-1,��������ֵ��10!");
cm.dispose();
}
else{
cm.sendOk("ǿ��Ҫ����.");
cm.dispose();
}

} else if (status == 2) {
if (selection == 6) {
if (cm.getzb() < needsj) {
cm.sendOk("#b�����Ҿ������Ҫ#r"+needsj+"#b��pk��,���pk�Ҳ���!");
cm.dispose();
}else {
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
cm.setzb(-needsj);
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
item.setUpgradeSlots((item.getUpgradeSlots() + 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
cm.sendOk("��ϲ��,���ӿ����������ɹ�.\r\n����������+1!");
cm.dispose();
}
} else if (status == 2) {
if (selection == 7) {
cm.deleteItem(1);
cm.sendOk("��ϲ,�Ѿ�Ϊ���������!");  
cm.dispose();
} else if (status == 2) {
if (selection == 8) {
cm.deleteItem(2);
cm.sendOk("��ϲ,�Ѿ�Ϊ���������!");  
cm.dispose();
} else if (status == 2) {
if (selection == 9) {
cm.deleteItem(3);
cm.sendOk("��ϲ,�Ѿ�Ϊ���������!");  
cm.dispose();
} else if (status == 2) {
if (selection == 10) {
cm.deleteItem(4);
cm.sendOk("��ϲ,�Ѿ�Ϊ���������!");  
cm.dispose();
} else if (status == 2) {
if (selection == 11) {
cm.deleteItem(5);
cm.sendOk("��ϲ,�Ѿ�Ϊ���������!");  
cm.dispose();
}}}}}}}}}}}}

//����status == 2
}
}

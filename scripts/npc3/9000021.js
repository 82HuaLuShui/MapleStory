/*
*   [Vr001 ��������Ver079�¹ٷ���]
*   [NpcID      -      90000021]
*   [Npc����    -          �Ѽ�] 
*   [Npc���ڵ�ͼ-      ���г���]
*/
var status = 0; 
  
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
  
cm.sendSimple("#d��.....Ŷ.....С��..���е�����������������֪����..����������һ������Ľ��.��ֱ����һ����������Ű�!�����������ҵ���������.���㻹���������찡!����ν�Ҳ������˭�����,ά�������ƽ�������ί�и�����!��������Ϊ��׼������������,�����Щ���������㹻֤������ʸ�..����ֻ�ǵ��ʯ..������ô�߻���Ҫ�����ʵ��..�벻������ҵ�������?\r\n#rPS������ֻ��һ����һ���������ȥŶ!��ȷ�������������㹻�Ŀռ�Ŷ!#d\r\n: \r\n#L4# �鿴������˵��\r\n#L1# ���������� \r\n#L2# ���������� \r\n#L3# ���������� "); 
} else if (status == 1) {   //��һ������ 
if (selection == 1) { 
if ((cm.haveItem(4001126, 300) && (cm.haveItem(4031456,30)))) {   //�����Ʒ
for(var i = 1;i<=5;i++){
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(i)).isFull()){
cm.sendOk("������Ӧ�������а������ճ�2��");
cm.dispose();
return;
}
}
cm.gainItem(4001126, -300); 
cm.gainItem(4031456, -30);
cm.gainItem(4031225, 1); //�������Ʒ
cm.gainItem(5220040, 5); //������ĵ�
cm.gainItem(2049100, 1); //����
cm.sendOk("#r��...�ռ����ˣ���ֻ�ǳ����ļ���ʵ��..�ð�..#v4031225#�������..������������һ�������ƾ��..��Ū����."); 
cm.dispose(); 
} else { 
cm.sendOk("#b��...����ܵ�һ������..�������ܼ�..������ռ�������Ʒ����!\r\n#v4001126# 300��\r\n#v4031456# 30����(����������Ӹ����л�ã�)\r\n��ɺ�ʼ��ʼ��һ������\r\n������Ʒ��\r\n#v5220040#5��\r\n#v2049100#1��"); cm.dispose(); 
} 
} else if (selection == 2) {  //�ڶ�������
if (cm.itemQuantity(4031225) >= 1) {  
if ((cm.haveItem(4000313,30)) && (cm.haveItem(4001126, 500))) { 
for(var i = 1;i<=5;i++){
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(i)).isFull()){
cm.sendOk("������Ӧ�������а������ճ�2��");
cm.dispose();
return;
}
}
cm.sendOk("#r��...�ڶ�������Ҳ�����..�����������ҵ͹����ʵ����..�������ĵ�����������֪�����ܲ������.."); 
cm.gainItem(4000313, -30); 
cm.gainItem(4001126, -500); 
cm.gainItem(4031018, 1); //�������Ʒ
cm.gainItem(2049100, 5); //����
cm.gainItem(5390001, 10); //Ѥ���龰����
cm.dispose(); 
} else{ 
cm.sendOk("#g����ܵڶ�������...��������..���ò����Щ�Ѷ�..�������ʵ�����������һ���ؿ�..׼��������...���������Ҫ���ռ�������Ʒ��\r\n#v4000313# 30��.(��߳���Ӹ����л�ã�)\r\n#v4001126# 500��.\r\n������Ʒ��\r\n#v2049100#5��\r\n#v5390001#10��"); 
cm.dispose(); 
} 
  
} else{ cm.sendOk("#e�������1�Ȱ�.."); 
cm.dispose(); 
} 
  
} else if (status == 3) { 
} else if (selection == 3 && cm.itemQuantity(4031018) >= 1) { 
if (cm.getBossLog('renwu') < 1){ 
if ((cm.haveItem(4031018, 1)) && (cm.haveItem(4001083, 1)) && (cm.haveItem(4001084, 1)) && (cm.haveItem(4001085, 1)) && (cm.haveItem(4001126, 800)) && (cm.haveItem(4000313,30)) && (cm.haveItem(4031456, 100))) { 
for(var i = 1;i<=5;i++){
if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(i)).isFull()){
cm.sendOk("������Ӧ�������а������ճ�2��");
cm.dispose();
return;
}
}
cm.sendOk("#r��ѽ...û�뵽����ô����..��Щ���������������!!!�������Ҹ������������������Ʒ..������������ȥ��һ�����ص���!!������֤��#v4140301#�����Ʊ���!!����..ȥѰ�������˰�!!"); 
cm.gainItem(4001083, -1); 
cm.gainItem(4001084, -1); 
cm.gainItem(4001085, -1); 
cm.gainItem(4031018, -1);
cm.gainItem(4001126, -800); 
cm.gainItem(4000313, -30); 
cm.gainItem(4031456, -100);
cm.gainItem(4140301, 1); 
cm.gainItem(2340000, 1); //ף������
cm.gainItem(2049100, 5); //����
cm.gainItem(5220040, 10);//������ĵ�
cm.gainItem(5390006, 5); //�����ϻ��龰����
cm.serverNotice("��������յ������������"+ cm.getChar().getName() +"������˼Ѽѵ�����.�õ���[������Ϣ]..����˱سɾ���һ��ʸ�"); 
cm.dispose(); 
} else{ 
//cm.sendOk("#k��ѽ...���Ѿ������ǰ��2������������..���ڵ���������������Ƚ����Ѷ�..Ҳ�����һ������..�����ռ�������Ʒ���ң�\r\n#v4001083# 1��\r\n#v4001084# 1��\r\n#v4001085# 1��\r\n#v4001126# 800��\r\n#v4000313# 30��\r\n#v4031456# 30��.\r\n������Ʒ��\r\n#v2049100#5��\r\n#v5220040#10��\r\n#v5390006#5��\r\n#v4140301#1��\r\n#v2340000#1��"); 
cm.dispose(); 
} 

} else { 
cm.sendOk("�Ź�...."); 
mode = 1; 
status = -1; 
} 
} else{ 
cm.sendOk("����һ�����Ի���ʸ������.���ͨ�������֤���Լ���ʵ��..�ù������ĵ�����֤���Լ�����ʤ�εı�������..ͨ����,����Ի��ƾ֤..Ȼ���ҵ�һ�����ص�����ʹ��..����Ҫע�����,����������Ҫ�ñ��������㹻�Ŀռ�..��Ȼ�ᵼ���޷������Ʒ..�Լ������������һ������һ����.�޷���Ծ����!!"); 
mode = 1; 
status = -1; 
} 
} 
} 
} 

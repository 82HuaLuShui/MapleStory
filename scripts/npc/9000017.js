var status = 0;
var item = 
Array(
			Array(2040017,800,1), //ͷ�������ʾ���60%
			Array(2040013,800,1), //ͷ����������30
			Array(2040012,800,1), //ͷ����������70
			Array(2040105,800,1), //����װ�λر��ʾ���10%
			Array(2040106,800,1), //����װ�λر��ʾ���60%
			Array(2040108,800,1), //����װ�λر����������30% 
			Array(2040109,800,1), //����װ�λر����������70% 
			Array(2040200,800,1), //�۲�װ�������ʾ���10%
			Array(2040201,800,1), //�۲�װ�������ʾ���60%
			Array(2040203,800,1), //�۲�װ���������������30% 
			Array(2040204,800,1), //�۲�װ���������������70%
			Array(2040205,800,1), //�۲�װ����������10%
			Array(2040206,800,1), //�۲�װ����������60%
			Array(2040208,800,1), // �۲�װ�������������30%
			Array(2040209,800,1), //�۲�װ�������������70%
			
			Array(2040301,800,1), //������������ 60
			Array(2040302,800,1), //������������ 10
			Array(2040304,800,1), //���������������70
			Array(2040305,800,1), //���������������30
			Array(2040306,800,1), //�������ݾ���70
			Array(2040307,800,1), //�������ݾ���30


                        Array(2040406,800,1), //������������70%
			Array(2040407,800,1), //������������30
			Array(2040410,800,1), //���������������70%
			Array(2040411,800,1), //���������������30%
			Array(2040501,800,1), //ȫ���������ݾ���60
			Array(2040509,800,1), //ȫ���������ݾ���30
			Array(2040513,800,1), //ȫ��������������60
			Array(2040518,800,1), //ȫ��������������70
			Array(2040519,800,1), //ȫ��������������30
			Array(2040610,800,1), //��ȹ�����������70
			Array(2040611,800,1), //��ȹ�����������30
			Array(2040613,800,1), //��ȹ���ݾ���60%
			Array(2040704,800,1), //Ь����Ծ����60
			Array(2040705,800,1), //Ь����Ծ����10
			Array(2040715,800,1), //Ь����Ծ����30
			Array(2040804,800,1), //���׹�������60
			Array(2040811,800,1), //���׹�������30
			Array(2040810,800,1), //���׹�������70
			Array(2040805,800,1), //���׹�������10
			Array(2040816,800,1), // ����ħ������10%
			Array(2040817,800,1), //����ħ������60%
			Array(2040815,800,1), //����ħ������30%
			Array(2040922,800,1), //����ħ���������30%
			Array(2040919,800,1), //����ħ���������60%
			Array(2040921,800,1), //����ħ���������70%
			Array(2040914,800,1), // ���ƹ�������60%
			Array(2040916,700,1), //���ƹ�������70%
			Array(2040917,700,1), //���ƹ����������30%
			Array(2041013,900,1), //������������60
			Array(2041016,900,1), //������������60
			Array(2041019,900,1), //�������ݾ���60
			Array(2041022,800,1), //������������60
			Array(2041200,10,1), //��������ʯ
			Array(2043005,800,1), //���ֽ������������30
			Array(2044005,800,1), //˫�ֽ������������30
			Array(2044305,800,1), //ǹ�����������30
			Array(2044405,800,1), //ì�����������30
			Array(2044505,800,1), //�������������30
			Array(2044605,800,1), //�󹥻��������30
			Array(2044705,800,1), //ȭ�׹����������30
);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.getNX() >=300) {
				cm.sendYesNo("��ӭ�μӱ���ϵͳ���ʹ�õ����ɻ�����벻���ľ��ᣡϵͳ�������ȡ��Ʒ,�Ƿ����ʹ��888�����г齱��");
			} else {
				cm.sendOk("��ӭ�μӱ���ϵͳ�����ȷ����300�����");
				cm.dispose();
			}
		} else if (status == 1){	
			var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
			for(var i = 1;i<=5;i++){
				if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(i)).isFull()){
					cm.sendOk("������Ӧ�������а������ճ�һ��");
					cm.dispose();
					return;
				}
			}
			var chance = Math.floor(Math.random()*1000);
			var finalitem = Array();
			for(var i = 0 ;i<item.length;i++){
				if(item[i][1] >= chance){
					finalitem.push(item[i]);
				}
			}
			if(finalitem.length != 0){
				var random = new java.util.Random();
				var finalchance = random.nextInt(finalitem.length);
				var itemId = finalitem[finalchance][0];
				var quantity = finalitem[finalchance][2];
			        if(ii.getInventoryType(itemId).getType() == 1){
			        	var toDrop = ii.randomizeStats(ii.getEquipById(itemId)).copy();
				}
				else{
				 	 var toDrop = new net.sf.odinms.client.Equip(itemId,0).copy();
				}
				net.sf.odinms.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop,-1);
				cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.getItemMega(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + "�Ӿ���齱����ã����һ��ϲ���������ɣ�����",toDrop, true).getBytes());				
				cm.gainNX(-300);
				cm.getPlayer().saveToDB(true);
				cm.sendOk("�ǳ���л�μӱ���ϵͳ������Ŭ������ȡ���������ɣ�");
				cm.dispose();
			} else {							
				cm.gainNX(-300);
				cm.gainItem(2022140,1);
				cm.getPlayer().saveToDB(true);
				cm.sendOk("��ӭ�μӱ���ϵͳ�����ʲôҲû�鵽������һ�㰲ο����");
				cm.dispose();
			}
		}
	}
}

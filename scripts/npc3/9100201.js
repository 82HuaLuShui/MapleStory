var status = 0;
var item = 
Array(
			Array(2290000,800,1), //��ʯ70
			Array(2290001,800,1), //��ʯ50
			Array(2290002,600,1), //������˹70
			Array(2290003,800,1), //����50
			Array(2290004,600,1), //ͻ��70
			Array(2290005,800,1), //ͻ��50
			Array(2290006,700,1), //̩ɽ70
			Array(2290007,800,1), //̩ɽ50
			Array(2290008,400,1), //������70
			Array(2290009,400,1), //������50 
			Array(2290010,600,1), //����70
			Array(2290011,600,1), //����50
			Array(2290012,600,1), //������70
			Array(2290013,600,1), //������50
			Array(2290014,800,1), //����70
			
			Array(2290015,800,1), //����50
			Array(2290016,800,1), //����70
			Array(2290017,800,1), //����50
			Array(2290018,800,1), //ʥ����70
			Array(2290019,800,1), //ʥ����70
			Array(2290020,800,1), //ʥ��70
			Array(2290021,800,1), //ʥ��50


                        Array(2290022,600,1), //����70
			Array(2290023,600,1), //����50
			Array(2290024,800,1), //����70
			Array(2290025,800,1), //����50
			Array(2290026,800,1), //��70
			Array(2290027,800,1), //��50
			Array(2290028,800,1), //�ռ�70
			Array(2290029,800,1), //�м�50
			Array(2290030,600,1), //������70
			Array(2290031,600,1), //50
			Array(2290032,800,1), //������70
			Array(2290033,800,1), //50
			Array(2290034,800,1), //ʥ��70
			Array(2290035,800,1), //50
			Array(2290036,800,1), //����70
			Array(2290037,800,1), //50
			Array(2290038,800,1), //����70
			Array(2290039,800,1), //50
			Array(2290040,600,1), //����70
			Array(2290041,600,1), //50
			Array(2290042,800,1), //����70
			Array(2290043,800,1), //����50
			Array(2290044,800,1), //����70
			Array(2290045,800,1), //50
			Array(2290046,800,1), //����70
			Array(2290047,800,1), //50
			Array(2290048,300,1), //ʥ��70
			Array(2290049,400,1), //50
			Array(2290050,800,1), // ��â�ɽ�70
			Array(2290051,800,1), //50
			Array(2290052,500,1), //����70
			Array(2290053,500,1), //50
			Array(2290054,900,1), //����70
			Array(2290055,900,1), //50
			Array(2290056,800,1), //���70
			Array(2290057,800,1), //50
			Array(2290058,800,1), //����70
			Array(2290059,800,1), //50
			Array(2290060,400,1), //������70
			Array(2290061,300,1), //������50
			Array(2290062,800,1), //����70
			Array(2290063,800,1), //50
			Array(2290064,800,1), //����70
			Array(2290065,800,1), //50
			Array(2290066,500,1), //��Ŭ��70
			Array(2290067,800,1), //50
			Array(2290068,800,1), //����70
			Array(2290069,800,1), //50
			Array(2290070,800,1), //��͸70
			Array(2290071,800,1), //50
			Array(2290072,800,1), //��ӥ70
			Array(2290073,800,1), //50
			Array(2290074,800,1), //һ��70
			Array(2290075,800,1), //50
			Array(2290076,800,1), //�ٶ���70
			Array(2290077,800,1), //50
			Array(2290078,800,1), //ȭ�׹����������30
			Array(2290079,800,1), //ȭ�׹����������30
			Array(2290080,800,1), //ȭ�׹����������30
			Array(2290084,800,1), //ȭ�׹����������30
			Array(2290085,800,1), //ȭ�׹����������30
			Array(2290092,800,1), //ȭ�׹����������30
			Array(2290093,800,1), //ȭ�׹����������30
			Array(2290096,800,1), //ȭ�׹����������30
			Array(2290112,800,1), //ȭ�׹����������30
			Array(2290113,800,1), //ȭ�׹����������30
			Array(2290119,800,1), //ȭ�׹����������30
			Array(2290120,800,1), //ȭ�׹����������30
			Array(2290125,800,1),//ȭ�׹����������30
			Array(2290132,800,1),//ȭ�׹����������30
			Array(2290133,800,1),//ȭ�׹����������30
			Array(2290078,900,1),//ȭ�׹����������
			Array(2022176,800,1),//����
			Array(4002001,600,1),//����
			Array(4002002,600,1),//����
			Array(4002003,600,1),//����
			Array(2022140,700,1),//Ц��
			Array(2100016,600,1),//����ٻ���
			Array(2100075,400,1)//�����
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
			if (cm.getNX() >= 999) {
				cm.sendYesNo("��ӭ�μӱ���ϵͳ���ʹ�õ����ɻ�����벻���ļ����飡ϵͳ�������ȡ������,�Ƿ����ʹ��999�����г齱��");
			} else {
				cm.sendOk("��ӭ�μӱ���ϵͳ�����ȷ����999�����");
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
				cm.gainNX(-999);
				cm.getPlayer().saveToDB(true);
				cm.sendOk("�ǳ���л�μӱ���ϵͳ������Ŭ������ȡ���������ɣ�");
				cm.dispose();
			} else {							
				cm.gainNX(-999);
				cm.gainItem(2022140,1);
				cm.getPlayer().saveToDB(true);
				cm.sendOk("��ӭ�μӱ���ϵͳ�����ʲôҲû�鵽������һ�㰲ο����");
				cm.dispose();
			}
		}
	}
}

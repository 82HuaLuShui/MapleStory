importPackage(net.sf.odinms.client);

var itemSet = new Array(
3010099,3010060,2012003,
2000005,2022251,2022178,2020008,2022061,
2022245);


var rand = Math.floor(Math.random() * itemSet.length);
var suliang = 1;//Math.floor(Math.random() * 40) + 5
var rand2 = Math.floor(Math.random() * 5);


	function start() {
		status = -1;
		action(1, 0, 0);
		}

	function action(mode, type, selection) {
		if (mode == -1) {
		cm.dispose();
		} else {
		if (status >= 2 && mode == 0) {
		cm.dispose();
		return;
		}
		if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {
		for(var i = 1;i<=5;i++){
		if(cm.getPlayer().getInventory(net.sf.odinms.client.MapleInventoryType.getByType(i)).isFull()){
		cm.sendOk("������Ӧ�������а������ճ�һ��");
		cm.dispose();
		return;
		}
		}
		var ii = net.sf.odinms.server.MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(itemSet[rand]);
		if(ii.getInventoryType(itemSet[rand]).getType() == 1){	//װ����	 		
		var toDrop = ii.randomizeStats(ii.getEquipById(itemSet[rand])).copy();
		var cishu = Math.floor(Math.random() * 3) + toDrop.getUpgradeSlots();	    				
//		toDrop.setUpgradeSlots(cishu);				
		if(itemSet[rand] == 1402014 || itemSet[rand] == 1442039 || itemSet[rand] == 1432046){
		if(rand2 == 0){
		var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000);					
		}else if(rand2 == 1){
		var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000);
		}else if(rand2 == 2){
		var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000);
		}else if(rand2 == 3){
		var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000);
		}
		toDrop.setExpiration(temptime);											
		}	
							
		}else if(ii.getInventoryType(itemSet[rand]).getType() == 3){ //����
		var toDrop = new net.sf.odinms.client.Item(itemSet[rand],0,1).copy();
		if(itemSet[rand] == 3010018){ //PBֻ��һ���
		var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000);
		}else{
		if(rand2 == 0){
		var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000);					
		}else if(rand2 == 1){
		var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000);
		}else if(rand2 == 2){
		var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000);
		}else if(rand2 == 3){
		var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000);
		}
		}
		toDrop.setExpiration(temptime);						
		}else{

		if(Math.floor(itemSet[rand] / 10000) == 202){ //����һЩ����
		var toDrop = new net.sf.odinms.client.Item(itemSet[rand],0,suliang).copy();	
		}else{
		var toDrop = new net.sf.odinms.client.Item(itemSet[rand],0,1).copy();				
		}
		}

		cm.getPlayer().getInventory(type).addItem(toDrop);
		cm.getC().getSession().write(net.sf.odinms.tools.MaplePacketCreator.addInventorySlot(type, toDrop));	
		cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,net.sf.odinms.tools.MaplePacketCreator.getItemMegas(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + "����߳������л�ã����һ��ϲ���������ɣ�����",toDrop, true).getBytes());	
		cm.removeAll(4001022);
		cm.removeAll(4001023); 
		cm.gainItem(4000313,1);//�ƽ��Ҷ
		cm.warp(100000200,0);
                cm.setboss(1);
		cm.dispose();
		}
	}
}

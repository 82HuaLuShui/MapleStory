/*
    ��Ա����NPC
    �� �±�д
    QQ:237253995
*/


var name = "����ð�յ�";//��������F������

var web = "�ٷ���վ";//����������ҳ

//ֱ�ӹ�����Ҫ�ĳ�ֵ��

var v1 = 100;//��VIP1��Ҫ�ĳ�ֵ��
var v2 = 200;//��VIP2��Ҫ�ĳ�ֵ��
var v3 = 300;//��VIP3��Ҫ�ĳ�ֵ��
var v4 = 400;//��VIP4��Ҫ�ĳ�ֵ��
var v5 = 500;//��VIP5��Ҫ�ĳ�ֵ��

//������Ҫ

var v3v4 = 51;//2-3
var v4v5 = 51;//2-4
var v5v6 = 51;//3-4


//���|10E��Ʊ|������|ѫ������|�����׹10��,����|���Ե�|GM��|�ƽ�����|���齱��
var libao1 = Array(3000,0,0,200,20,100,10,10,0);	
var libao2 = Array(6000,0,0,20,50,200,0,0,0);
var libao3 = Array(9000,0,0,50,100,300,0,0,0);
var libao4 = Array(12000,0,0,100,150,400,0,0,0);
var libao5 = Array(15000,0,0,480,500,1000,0,0,0);
var libao6 = Array(180000,0,0,250,300,600,0,0,0);

//==============�����ǲ�������======================


var ttt ="#fUI/Basic/CheckBox/3#";//"+ttt+"//����
importPackage(net.sf.cherry.client);
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
                 
            cm.sendOk("����������Ҫ��ʲô,�һ�������Ϊ������..O(��_��)O~"); 
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
				if(cm.getPlayer().getvip() <= 0){
					var vipstr = "��ͨ���";					
				}else if(cm.getPlayer().getvip() == 1){
					var vipstr = " ����vIp";					
				}else if(cm.getPlayer().getvip() == 2){
					var vipstr = " ����vIp��";					
				}else if(cm.getPlayer().getvip() == 3){
					var vipstr = " ����vIp��";
                                }else if(cm.getPlayer().getvip() == 4){
					var vipstr = " ����vIp��";	
}else if(cm.getPlayer().getvip() == 5){
					var vipstr = " ����vIp��";						
}else if(cm.getPlayer().getvip() == 6){
var vipstr = "������vIp�ݤ�ս��֮��";
}else if(cm.getPlayer().getvip() == 7){
var vipstr = "��ƽ���ս��֮��";
}else if(cm.getPlayer().getvip() == 8){
var vipstr = "�����ռ��������";
}else{
var vipstr = "�޷�ʶ��������";			
}
var textz = "������#r"+name+"#k�Ļ�Ա����.(#r����ֻ��һ����Ա#k)\r\n\r\n#b     #k��Ա�ȼ�:#r"+vipstr+".\r\n#b     #k���г�ֵ��:#r"+cm.getmoneyb()+".\r\n#b     #k#b�뱣��װ����������2���ո�,������Ʒ���Ⱦ�����Ŀո�.�������Ͷ����޷�װ�£����������κδ���!\r\n#b";

textz += "#L2#"+ttt+" ��Ϊ#r ����vIp #k#b[#r"+v1+"#n#b��ֵ��]#l\r\n";
//textz += "#L3#"+ttt+" ��Ϊ#r ����vIp #k#b[#r50#n#b��ֵ�� #r50000#n#b���]#l\r\n";

//textz += "#L3#"+ttt+" ��Ϊ#r ����vIp�� #k#b[#r"+v2+"#n#b��ֵ��]#l\r\n";

//textz += "#L4#"+ttt+" ����#r ����vIp�� #k#b[#r"+v3+"#n#b��ֵ��]#l\r\n";

//textz += "#L5#"+ttt+" ����#r ����vIp�� #k#b[#r"+v4+"#n#b��ֵ��]#l\r\n";

//textz += "#L6#"+ttt+" ����#r ����vIp�� #k#b[#r"+v5+"#n#b��ֵ��]#l\r\n";

//textz += "#L7#"+ttt+" [�����ţ������⳥]����#r ����vIp�ݤ�ս��֮�� #k#b[#r"+v5+"#n#b��ֵ��]#l\r\n\r\n";




//textz += "#L70#"+ttt+"#r ����vIp��#k������#r����vIp��#b[#r"+v3v4+"#n#b��ֵ��]#l\r\n";

//textz += "#L8#"+ttt+"#r ����vIp��#k������#r����vIp��#b[#r"+v4v5+"#n#b��ֵ��]#l\r\n";

//textz += "#L9#"+ttt+"#r [�����ţ������⳥]����vIp��#k������#r����vIp�ݤ�ս��֮��#b[#r"+v5v6+"#n#b��ֵ��]#l\r\n";


textz += "#L72#"+ttt+" >>>>>>>>>>>>>>>>>>>>>>>�鿴VIP���#l";

//textz += "\r\n\r\n#nֱ�ӿ�ͨ��Ա�����Ի�û��ֱҷ���.\r\n\r\n��ֵ��:#r"+cm.getmoneyb()+"Ԫ  #k���Ʊ�:#r"+cm.getcsb()+"Ԫ  #k���:"+cm.getMoney()+"����Ʊ\r\n#k���ս�������:#r" + cm.getBossLog('zakum') + "#r��  #k������Ѩ:#r" + cm.getBossLog('hontale') + "#r��  #k��Ա�ȼ�:#r"+cm.getVip()+"��"; 

cm.sendSimple (textz);    



                }else if  (selection == 2) { 
                       if(cm.getPlayer().getvip() >= 1) {
                       cm.sendOk("���Ѿ���vip�ˣ�."); 
                       cm.dispose(); 
				} else  if(cm.haveItem(1142186,1,true,false)){
                    cm.sendOk("���ӵ�ԭ����ѫ��#r����ѫ��#k,���ܰ����ҵ��.");
                    cm.dispose();
                } else  if(cm.getmoneyb() < 100){
                    cm.sendOk("��û���㹻�ĳ�ֵ��,���ܰ����ҵ��.");
                    cm.dispose();
                } else if(cm.getPlayer().getLevel() >= 0) { 
         //if(cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(4)).isFull()){
		if(1>2){
							cm.sendOk("�뱣֤������λ�пո����VIP���.");
							cm.dispose();
}else{   
                       cm.setmoneyb(-v1);  
                       cm.getPlayer().gainvip(1);
//---------------------------------------------------
       cm.gainNX(libao1[0]);//���
       //cm.gainrw13(libao1[2]); //����

var xunzhang = 1142145;//ѫ��

			cm.gainItem(1902015,1);//ս��
			cm.gainItem(1902016,1);//ս��
			cm.gainItem(1902017,1);//ս��
			cm.gainItem(1902018,1);//ս��
			cm.gainItem(1912011,1);//�ǰ���
				cm.gainItem(1142145,40,40,40,40,200,200,10,10,0,0,0,0,20,10);
//var shuxing = libao1[3]; //����
/*
var toDrop = new net.sf.cherry.client.Equip(xunzhang,0);
		        toDrop.setStr(40);
		        toDrop.setDex(40);
		        toDrop.setInt(10);
		        toDrop.setLuk(40);
		        toDrop.setSpeed(20);
		        toDrop.setJump(10);
						toDrop.setMatk(10);//ħ����
						toDrop.setWatk(10);//������
		        //toDrop.setLocked(1);						
net.sf.cherry.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);
          //  cm.getPlayer().gainAp(libao1[5]);//���Ե�
            //cm.gainItem(4031065,libao1[6]);//��(��GM��)
           // cm.gainItem(4032226,libao1[7]);//�ƽ�����(�齱)
			cm.gainItem(1902015,1);//ս��
			cm.gainItem(1902016,1);//ս��
			cm.gainItem(1902017,1);//ս��
			cm.gainItem(1902018,1);//ս��
			cm.gainItem(1912011,1);//�ǰ���
			//cm.gainItem(1112586,1);//����ʹ��ף��
//---------------------------------------------------
		       cm.getChar().saveToDB(true);
			   
			   */
                       cm.sendOk("��ӭ����#r����vip#k!"); 
cm.serverNotice("���¹��棺��ҡ�"+ cm.getChar().getName() +"����Ϊ������vip!");
cm.serverNotice("���¹��棺��ҡ�"+ cm.getChar().getName() +"����Ϊ������vip!");
cm.serverNotice("���¹��棺��ҡ�"+ cm.getChar().getName() +"����Ϊ������vip!");
					//cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"123���¹���Ա" + " : ��ϲ��" + cm.getPlayer().getName() +" ��ҳ�Ϊ����vIp!!!",true).getBytes());
					//cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"321���¹���Ա" + " : ��ϲ��" + cm.getPlayer().getName() +" ��ҳ�Ϊ����vIp!!!",true).getBytes());
					//cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),"321���¹���Ա" + " : ��ϲ��" + cm.getPlayer().getName() +" ��ҳ�Ϊ����vIp!!!",true).getBytes());
                       cm.dispose(); 
}
                    } else { 
                       cm.sendOk("��ĳ�ֵ�Ҳ���!."); 
                       cm.dispose();   
                   } 
                }else if  (selection == 3) { 
                    if(cm.getPlayer().getvip() >= 1) {
                       cm.sendOk("���Ѿ���vip�ˣ�."); 
                       cm.dispose(); 
				} else  if(cm.haveItem(1142186,1,true,false)){
                    cm.sendOk("���ӵ�ԭ����ѫ��#r����ѫ��#k,���ܰ����ҵ��.");
                    cm.dispose();
                } else  if(cm.getmoneyb() < 50){
                    cm.sendOk("��û���㹻�ĳ�ֵ��,���ܰ����ҵ��.");
                    cm.dispose();
				} else  if(cm.getNX() < 50000){
                    cm.sendOk("��û���㹻�ĵ��,���ܰ����ҵ��.");
                    cm.dispose();
                } else if(cm.getPlayer().getLevel() >= 0) { 
         if(cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(4)).isFull()){
							cm.sendOk("�뱣֤������λ�пո����VIP���.");
							cm.dispose();
}else{   
                       cm.setmoneyb(-50);  
					   cm.gainNX(-50000);  
                       cm.getPlayer().gainvip(1);
//---------------------------------------------------
       cm.gainNX(libao1[0]);//���
       //cm.gainrw13(libao1[2]); //����


var xunzhang = 1142145;//ѫ��
//var shuxing = libao1[3]; //����
var toDrop = new net.sf.cherry.client.Equip(xunzhang,0);
		        toDrop.setStr(40);
		        toDrop.setDex(40);
		        toDrop.setInt(10);
		        toDrop.setLuk(40);
		        toDrop.setSpeed(20);
		        toDrop.setJump(10);
						toDrop.setMatk(10);//ħ����
						toDrop.setWatk(10);//������
		        //toDrop.setLocked(1);						
net.sf.cherry.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);
          //  cm.getPlayer().gainAp(libao1[5]);//���Ե�
            //cm.gainItem(4031065,libao1[6]);//��(��GM��)
            //cm.gainItem(4032226,libao1[7]);//�ƽ�����(�齱)
			cm.gainItem(1902015,1);//ս��
			cm.gainItem(1902016,1);//ս��
			cm.gainItem(1902017,1);//ս��
			cm.gainItem(1902018,1);//ս��
			cm.gainItem(1912011,1);//�ǰ���
			//cm.gainItem(1112586,1);//����ʹ��ף��
//---------------------------------------------------
		       cm.getChar().saveToDB(true);
                       cm.sendOk("��ӭ����#r����vip#k!"); 
cm.serverNotice("���¹���: ��ҡ�"+ cm.getChar().getName() +"����Ϊ������vip!");
cm.serverNotice("���¹��棺��ҡ�"+ cm.getChar().getName() +"����Ϊ������vip!");
cm.dispose(); 
}
                    } else { 
                       cm.sendOk("��ĳ�ֵ�Ҳ���!."); 
                       cm.dispose();   
                   } 
                }else if  (selection == 4) { 
                  if(cm.getPlayer().getvip() >= 3) {
                       cm.sendOk("���Ѿ�������vIp��,���������ˣ��벻Ҫ�ظ�����"); 
cm.dispose();  
               } else  if(cm.haveItem(1142186,1,true,false)){
                    cm.sendOk("���ӵ�ԭ����ѫ��#r����ѫ��#k,���ܰ����ҵ��.");
                    cm.dispose();
                } else  if(cm.haveItem(1122017,1,true,false)){
						cm.sendOk("���Ѿ���һ�������׹�ˣ����ӵ����߹��ں��ٰ����ҵ��.");
						cm.dispose();
                      // } else if(cm.getReborns() >= 30) { 
                       if(cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(4)).isFull()){
							cm.sendOk("�뱣֤������λ�пո����VIP���.");
							cm.dispose();
}else{   
                       cm.setmoneyb(-v3);  
                       cm.getChar().SetVip(3); 
                     //---------------------------------------------------
       cm.gainNX(libao3[0]);//���
       cm.gainItem(4002001,libao3[1]);//��Ʊ
       //cm.gainrw13(libao3[2]); //����

var xunzhang = 1142186;//ѫ��
var shuxing = libao3[3]; //����
var toDrop = new net.sf.cherry.client.Equip(xunzhang,0);
		        toDrop.setStr(shuxing);
		        toDrop.setDex(shuxing);
		        toDrop.setInt(shuxing);
		        toDrop.setLuk(shuxing);
		        toDrop.setSpeed(20);
		        toDrop.setJump(20);
		        //toDrop.setLocked(1);						
net.sf.cherry.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);
//��׹
var ii = net.sf.cherry.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //ʱ��
toDrop.setExpiration(temptime); //��װ��ʱ��
		        toDrop.setStr(libao3[4]);
		        toDrop.setDex(libao3[4]);
		        toDrop.setInt(libao3[4]);
		        toDrop.setLuk(libao3[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.cherry.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
            cm.getPlayer().gainAp(libao3[5]);//���Ե�
            //cm.gainItem(4031065,libao3[6]);//��(��GM��)
            //cm.gainItem(4032226,libao3[7]);//�ƽ�����(�齱)
           // cm.gainItem(4031250,libao3[8]);//���齱��
						           // cm.gainItem(1003056,1);//ר��VIPñ��
//---------------------------------------------------
		        cm.getChar().saveToDB(true);
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"���¹���Ա" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ����vIp��!!!",true).getBytes());
							cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"���¹���Ա" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ����vIp��!!!",true).getBytes());
							cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"���¹���Ա" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ����vIp��!!!",true).getBytes());
                       cm.sendOk("�ɹ���Ϊ#r����vIp��#k!"); 
                       cm.dispose();  } 
                    } else { 
                       cm.sendOk("���ĳ�ֵ�Ҳ���!.."); 
                       cm.dispose();   
                    } 
}else if  (selection == 5) { 
                  if(cm.getPlayer().getvip() >= 4) {
                       cm.sendOk("���Ѿ���VIP4,���������ˣ��벻Ҫ�ظ�����"); 
cm.dispose();    } else  if(cm.haveItem(1142186,1,true,false)){
                    cm.sendOk("���ӵ�ԭ����ѫ��#r����ѫ��#k,���ܰ����ҵ��.");
                    cm.dispose();
                } else  if(cm.haveItem(1122017,1,true,false)){
						cm.sendOk("���Ѿ���һ�������׹�ˣ����ӵ����߹��ں��ٰ����ҵ��.");
						cm.dispose();
                       } else if(cm.getReborns() >= 50){ 
                      if(cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(4)).isFull()){
							cm.sendOk("�뱣֤������λ�пո����VIP���.");
							cm.dispose();
}else{   
                         cm.setmoneyb(-v4);  
                       cm.getChar().SetVip(4); 
                     //---------------------------------------------------
       cm.gainNX(libao4[0]);//���
       cm.gainItem(4002001,libao4[1]);//��Ʊ
      // cm.gainrw13(libao4[2]); //����

var xunzhang = 1142186;//ѫ��
var shuxing = libao4[3]; //����
var toDrop = new net.sf.cherry.client.Equip(xunzhang,0);
		        toDrop.setStr(shuxing);
		        toDrop.setDex(shuxing);
		        toDrop.setInt(shuxing);
		        toDrop.setLuk(shuxing);
		        toDrop.setSpeed(20);
		        toDrop.setJump(20);
		        //toDrop.setLocked(1);						
net.sf.cherry.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);
//��׹
var ii = net.sf.cherry.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //ʱ��
toDrop.setExpiration(temptime); //��װ��ʱ��
		        toDrop.setStr(libao4[4]);
		        toDrop.setDex(libao4[4]);
		        toDrop.setInt(libao4[4]);
		        toDrop.setLuk(libao4[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.cherry.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
            cm.getPlayer().gainAp(libao4[5]);//���Ե�
           // cm.gainItem(4031065,libao4[6]);//��(��GM��)
           // cm.gainItem(4032226,libao4[7]);//�ƽ�����(�齱)
           // cm.gainItem(4031250,libao4[8]);//���齱��
						          //  cm.gainItem(1003057,1);//ר��VIPñ��
//---------------------------------------------------
		        cm.getChar().saveToDB(true);

                       cm.sendOk("�ɹ���Ϊ#r����vIp��#k!"); 
 cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"���¹���Ա" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ����vIp��!!!",true).getBytes());
							cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"���¹���Ա" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ����vIp��!!!",true).getBytes());
							cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"���¹���Ա" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ����vIp��!!!",true).getBytes());	
                       cm.dispose();  } 
                    } else { 
                       cm.sendOk("���ĳ�ֵ�Ҳ��㣡"); 
                       cm.dispose();   
                    } 


}else if  (selection == 6) { 
                  if(cm.getPlayer().getvip() >= 5) {
                       cm.sendOk("���Ѿ�������vIp���ˣ��벻Ҫ�ظ�����."); 
cm.dispose();  } else  if(cm.haveItem(1142186,1,true,false)){
                    cm.sendOk("���ӵ�ԭ����ѫ��#r����ѫ��#k,���ܰ����ҵ��.");
                    cm.dispose();
                } else  if(cm.haveItem(1122017,1,true,false)){
						cm.sendOk("���Ѿ���һ�������׹�ˣ����ӵ����߹��ں��ٰ����ҵ��.");
						cm.dispose();
                       } else if(cm.getmoneyb() >= v4) { 
                      if(cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(4)).isFull()){
							cm.sendOk("�뱣֤������λ�пո����VIP���.");
							cm.dispose();
}else{   
                       cm.setmoneyb(-v5);  
                       cm.getChar().SetVip(5); 
                      //---------------------------------------------------
       cm.gainNX(libao5[0]);//���
       cm.gainItem(4002001,libao5[1]);//��Ʊ
       //cm.gainrw13(libao4[2]); //����

var xunzhang = 1142186;//ѫ��
var shuxing = libao5[3]; //����
var toDrop = new net.sf.cherry.client.Equip(xunzhang,0);
		        toDrop.setStr(shuxing);
		        toDrop.setDex(shuxing);
		        toDrop.setInt(shuxing);
		        toDrop.setLuk(shuxing);
		        toDrop.setSpeed(20);
		        toDrop.setJump(20);
		        //toDrop.setLocked(1);						
net.sf.cherry.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);
//��׹
var ii = net.sf.cherry.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //ʱ��
toDrop.setExpiration(temptime); //��װ��ʱ��
		        toDrop.setStr(libao5[4]);
		        toDrop.setDex(libao5[4]);
		        toDrop.setInt(libao5[4]);
		        toDrop.setLuk(libao5[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.cherry.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
            cm.getPlayer().gainAp(libao5[5]);//���Ե�
          //  cm.gainItem(4031065,libao5[6]);//��(��GM��)
           // cm.gainItem(4032226,libao5[7]);//�ƽ�����(�齱)
         //   cm.gainItem(4031250,libao5[8]);//���齱��
						           // cm.gainItem(1003058,1);//ר��VIPñ��
//---------------------------------------------------
		        cm.getChar().saveToDB(true);

                       cm.sendOk("�ɹ���Ϊ#r����vIp��#k!"); 
 cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"���¹���Ա" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ����vIp��!!!",true).getBytes());
							cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"���¹���Ա" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ����vIp��!!!",true).getBytes());
							cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"���¹���Ա" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ����vIp��!!!",true).getBytes());	
                       cm.dispose();  } 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ��."); 
                       cm.dispose();   
                    } 


}else if  (selection == 7) { 
                  if(cm.getPlayer().getvip() >= 6) {
                       cm.sendOk("���Ѿ�������vIp�ݤ�ս��֮���ˣ��벻Ҫ�ظ�����."); 
cm.dispose();  } else  if(cm.haveItem(1142186,1,true,false)){
                    cm.sendOk("���ӵ�ԭ����ѫ��#r����ѫ��#k,���ܰ����ҵ��.");
                    cm.dispose();
                } else  if(cm.haveItem(1122017,1,true,false)){
						cm.sendOk("���Ѿ���һ�������׹�ˣ����ӵ����߹��ں��ٰ����ҵ��.");
						cm.dispose();
                       } else if(cm.getmoneyb() >= v5) { 
                      if(cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(4)).isFull()){
							cm.sendOk("�뱣֤������λ�пո����VIP���.");
							cm.dispose();
}else{   
                       cm.setmoneyb(-v5);  
                       cm.getChar().SetVip(6); 
                      //---------------------------------------------------
       cm.gainNX(libao6[0]);//���
       cm.gainItem(4002001,libao6[1]);//��Ʊ
       cm.gainrw13(libao6[2]); //����

var xunzhang = 1142186;//ѫ��
var shuxing = libao6[3]; //����
var toDrop = new net.sf.cherry.client.Equip(xunzhang,0);
		        toDrop.setStr(shuxing);
		        toDrop.setDex(shuxing);
		        toDrop.setInt(shuxing);
		        toDrop.setLuk(shuxing);
		        toDrop.setSpeed(20);
		        toDrop.setJump(20);
		        //toDrop.setLocked(1);						
net.sf.cherry.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);
//��׹
var ii = net.sf.cherry.server.MapleItemInformationProvider.getInstance();		                
var type = ii.getInventoryType(1122017); //���װ��������
var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 10 * 24 * 60 * 60 * 30 * 4 *10); //ʱ��
toDrop.setExpiration(temptime); //��װ��ʱ��
		        toDrop.setStr(libao6[4]);
		        toDrop.setDex(libao6[4]);
		        toDrop.setInt(libao6[4]);
		        toDrop.setLuk(libao6[4]);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(net.sf.cherry.tools.MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���		
            cm.getPlayer().gainAp(libao6[5]);//���Ե�
            cm.gainItem(4031065,libao6[6]);//��(��GM��)
            cm.gainItem(4032226,libao6[7]);//�ƽ�����(�齱)
            cm.gainItem(4031250,libao6[8]);//���齱��
//---------------------------------------------------
			cm.gainItem(1902055, 1);
			cm.gainItem(1912048, 1);
		        cm.getChar().saveToDB(true);

                       cm.sendOk("�ɹ���Ϊ#r����vIp�ݤ�ս��֮��#k!"); 
 cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"���¹���Ա" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ����vIp�ݤ�ս��֮��!!!",true).getBytes());
							cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"���¹���Ա" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ����vIp�ݤ�ս��֮��!!!",true).getBytes());
							cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"���¹���Ա" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳ�Ϊ����vIp�ݤ�ս��֮��!!!",true).getBytes());	
cm.viplaba("��ϲ:" + cm.getPlayer().getName() +"�������¶�����Ա.",5121006);
                       cm.dispose();  } 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ��."); 
                       cm.dispose();   
                    } 
                   
//=====================================================================================
}else if  (selection == 70) { 
                       if(cm.getPlayer().getvip() != 3) {
                       cm.sendOk("���Ļ�Ա�ȼ����ʺϽ��иò���."); cm.dispose();   
                  } else if(cm.haveItem(1142186,1,true,false)){
                    cm.sendOk("���ӵ�ԭ����ѫ��#r����ѫ��#k,�ҽ��������µ�ѫ��.");
                    cm.dispose();
                       } else if(cm.getmoneyb() >= v3v4) { 
                       cm.setmoneyb(-v3v4); 
                    
                       cm.getChar().SetVip(4); 

                      //---------------------------------------------------
       cm.gainNX(libao4[0]-libao3[0]);//���
       cm.gainItem(4002001,libao4[1]-libao3[1]);//��Ʊ
       cm.gainrw13(libao4[2]-libao3[2]); //����

var xunzhang = 1142186;//ѫ��
var shuxing = libao4[3]; //����
var toDrop = new net.sf.cherry.client.Equip(xunzhang,0);
		        toDrop.setStr(shuxing);
		        toDrop.setDex(shuxing);
		        toDrop.setInt(shuxing);
		        toDrop.setLuk(shuxing);
		        toDrop.setSpeed(20);
		        toDrop.setJump(20);
		        //toDrop.setLocked(1);						
net.sf.cherry.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

            cm.getPlayer().gainAp(libao4[5]-libao3[5]);//���Ե�
            cm.gainItem(4031065,libao4[6]-libao3[6]);//��(��GM��)
            cm.gainItem(4032226,libao4[7]-libao3[7]);//�ƽ�����(�齱)
            cm.gainItem(4031250,libao4[8]-libao3[8]);//���齱��
						            cm.gainItem(1003057,1);//ר��VIPñ��

//---------------------------------------------------

                       
  cm.sendOk("�ɹ�������Ϊ#r����vIp��#k!"); 
 cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"���¹���Ա" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳɹ�������Ϊ����vIp��!!!",true).getBytes());
							cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"���¹���Ա" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳɹ�������Ϊ����vIp��!!!",true).getBytes());
							cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"���¹���Ա" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳɹ�������Ϊ����vIp��!!!",true).getBytes());	
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    } 



}else if  (selection == 8) { 
                         if(cm.getPlayer().getvip() != 4) {
                       cm.sendOk("���Ļ�Ա�ȼ����ʺϽ��иò���."); cm.dispose();   
                  } else if(cm.haveItem(1142186,1,true,false)){
                    cm.sendOk("���ӵ�ԭ����ѫ��#r����ѫ��#k,�ҽ��������µ�ѫ��.");
                    cm.dispose();
                       } else if(cm.getmoneyb() >= v4v5) { 
                       cm.setmoneyb(-v4v5); 
                    
                       cm.getChar().SetVip(5); 

                      //---------------------------------------------------
       cm.gainNX(libao5[0]-libao4[0]);//���
       cm.gainItem(4002001,libao5[1]-libao4[1]);//��Ʊ
       cm.gainrw13(libao4[2]-libao3[2]); //����

var xunzhang = 1142186;//ѫ��
var shuxing = libao5[3]; //����
var toDrop = new net.sf.cherry.client.Equip(xunzhang,0);
		        toDrop.setStr(shuxing);
		        toDrop.setDex(shuxing);
		        toDrop.setInt(shuxing);
		        toDrop.setLuk(shuxing);
		        toDrop.setSpeed(20);
		        toDrop.setJump(20);
		        //toDrop.setLocked(1);						
net.sf.cherry.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

            cm.getPlayer().gainAp(libao5[5]-libao4[5]);//���Ե�
            cm.gainItem(4031065,libao5[6]-libao4[6]);//��(��GM��)
            cm.gainItem(4032226,libao5[7]-libao4[7]);//�ƽ�����(�齱)
            cm.gainItem(4031250,libao5[8]-libao4[8]);//���齱��
						            cm.gainItem(1003058,1);//ר��VIPñ��

//---------------------------------------------------

                      
  cm.sendOk("�ɹ�������Ϊ#r����vIp��#k!"); 
 cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"���¹���Ա" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳɹ�������Ϊ����vIp��!!!",true).getBytes());
							cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"���¹���Ա" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳɹ�������Ϊ����vIp��!!!",true).getBytes());
							cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"���¹���Ա" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳɹ�������Ϊ������vIp��!!!",true).getBytes());	 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    } 

}else if  (selection == 9) { 
                         if(cm.getPlayer().getvip() != 5) {
                       cm.sendOk("���Ļ�Ա�ȼ����ʺϽ��иò���."); cm.dispose();   
                  } else if(cm.haveItem(1142186,1,true,false)){
                    cm.sendOk("���ӵ�ԭ����ѫ��#r����ѫ��#k,�ҽ��������µ�ѫ��.");
                    cm.dispose();
                       } else if(cm.getmoneyb() >= v5v6) { 
                       cm.setmoneyb(-v5v6); 
                    
                       cm.getChar().SetVip(6); 

                      //---------------------------------------------------
       cm.gainNX(libao6[0]-libao5[0]);//���
       cm.gainItem(4002001,libao6[1]-libao5[1]);//��Ʊ
       cm.gainrw13(libao6[2]-libao5[2]); //����

var xunzhang = 1142186;//ѫ��
var shuxing = libao6[3]; //����
var toDrop = new net.sf.cherry.client.Equip(xunzhang,0);
		        toDrop.setStr(shuxing);
		        toDrop.setDex(shuxing);
		        toDrop.setInt(shuxing);
		        toDrop.setLuk(shuxing);
		        toDrop.setSpeed(20);
		        toDrop.setJump(20);
		        //toDrop.setLocked(1);						
net.sf.cherry.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);

            cm.getPlayer().gainAp(libao5[5]-libao4[5]);//���Ե�
            cm.gainItem(4031065,libao6[6]-libao5[6]);//��(��GM��)
            cm.gainItem(4032226,libao6[7]-libao5[7]);//�ƽ�����(�齱)
            cm.gainItem(4031250,libao6[8]-libao5[8]);//���齱��

//---------------------------------------------------

  			cm.gainItem(1902055, 1);
			cm.gainItem(1912048, 1);
  cm.sendOk("�ɹ�������Ϊ#r����vIp�ݤ�ս��֮��#k!"); 
 cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"���¹���Ա" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳɹ�������Ϊ����vIp�ݤ�ս��֮��!!!",true).getBytes());
							cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"���¹���Ա" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳɹ�������Ϊ����vIp�ݤ�ս��֮��!!!",true).getBytes());
							cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"���¹���Ա" + " : ��ϲ:" + cm.getPlayer().getName() +" ��ҳɹ�������Ϊ����vIp�ݤ�ս��֮��!!!",true).getBytes());	
cm.viplaba("��ϲ:" + cm.getPlayer().getName() +"�������¶�����Ա.",5121006); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    } 

}else if  (selection == 73) { 
                       if(cm.getPlayer().getvip() > 1) {
                       cm.sendOk("���Ѿ����ǳ���VIP�ˣ�����ֱ�����ɳ���VIP"); 
                       } else if(cm.getmoneyb() >= 150) { 
                       cm.setmoneyb(-150); 
                       cm.getChar().upVip3(); 
                       cm.getChar().SetVip(3); 
                       //cm.gainItem(1302073,1); 
                       cm.sendOk("����VIP�����ɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    } 


}else if  (selection == 20) { 
                       if(cm.getPlayer().getvip() != 1) {
                       cm.sendOk("������ݲ��ʺϰ������ҵ��."); 
cm.dispose();
                       } else if(cm.getmoneyb() >= v1v2) { 
                      if(cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3) ||  cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(4)).isFull() ||cm.getMeso()+V2_money-V1_money >= 2147483647 ||cm.haveItem(1142174) == false){
cm.sendOk("����VIP�����Ҫ: \r\n \r\n "+ttt+" #b����װ����3���ո� "+ttt+" ������1���ո�\r\n "+ttt+" �����Ҽ���#r"+V2_money+"#b��ȥ#r"+V1_money+"#bС������Ǯ����.\r\n "+ttt+" #b�����͵�#r#t1142174##b���ڱ���.\r\n    ��ǰ�������������.");
							cm.dispose();
}else{   
                       cm.setmoneyb(-v1v2); 
                       cm.getChar().SetVip(2); 
                       cm.gainNX(V2_NX);
                       cm.gainNX(-V1_NX);
                       cm.gainMeso(V2_money);
                       cm.gainMeso(-V1_money);
                       cm.removeAll(1142174);
// V1-v2 ����   [��ʽ cm.gainitem(ID,����);] 

                       
                        cm.gainItem(4031454,5);//�����X5
                        cm.gainItem(1902019,1);//������ 
                        cm.gainItem(1912012,1);//��������

//����ѫ�� 1142175- 
var xunzhang = 1142175;//����ѫ�´���
var shuxing = 20; //����V2ѫ������.
var toDrop = new net.sf.cherry.client.Equip(xunzhang,0);
		        toDrop.setStr(shuxing);
		        toDrop.setDex(shuxing);
		        toDrop.setInt(shuxing);
		        toDrop.setLuk(shuxing);
		        toDrop.setSpeed(20);
		        toDrop.setJump(20);
		        toDrop.setLocked(1);						
net.sf.cherry.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);
		        cm.getChar().saveToDB(true);
                       cm.sendOk("�����ɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); }
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    } 

}else if  (selection == 21) { 
                       if(cm.getPlayer().getvip() != 2) {
                       cm.sendOk("������ݲ��ʺϰ������ҵ��."); 
cm.dispose();
                       } else if(cm.getmoneyb() >= v2v3) { 
                       if(cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3) ||  cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(4)).isFull() ||cm.getMeso()+V3_money-V1_money >= 2147483647 ||cm.haveItem(1142174) == false){
cm.sendOk("����VIP�����Ҫ: \r\n \r\n "+ttt+" #b����װ����3���ո� "+ttt+" ������1���ո�\r\n "+ttt+" �����Ҽ���#r"+V3_money+"#b��ȥ#r"+V1_money+"#bС������Ǯ����.\r\n "+ttt+" #b�Ѷ��ǻ�Ա���͵�#r#t1142174##b���ڱ���.\r\n    ��ǰ�������������.");
							cm.dispose();
}else{   
                       cm.setmoneyb(-v2v3); 
                       cm.getChar().SetVip(3); 
                       cm.gainNX(V3_NX);
                       cm.gainNX(-V2_NX);
                       cm.gainMeso(V3_money);
                       cm.gainMeso(-V2_money);
                       cm.removeAll(1142174);
// V2-v3 ����   [��ʽ cm.gainitem(ID,����);] 

                       
							cm.gainItem(5220040,30); //��
							cm.gainItem(2340000,20);  //ף����

//����ѫ�� 1142176- 
var xunzhang = 1142074;//����ѫ�´���
var shuxing = 300; //����V3ѫ������.
var toDrop = new net.sf.cherry.client.Equip(xunzhang,0);
		        toDrop.setStr(shuxing);
		        toDrop.setDex(shuxing);
		        toDrop.setInt(shuxing);
		        toDrop.setLuk(shuxing);
		        toDrop.setSpeed(20);
		        toDrop.setJump(20);
		        toDrop.setLocked(1);						
net.sf.cherry.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);
		        cm.getChar().saveToDB(true);
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + "��ϲ " + cm.getPlayer().getName() +" ��Ҵ�VIP2�ɹ�������VIP3",true).getBytes());
							cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + "��ϲ " + cm.getPlayer().getName() +" ��Ҵ�VIP2�ɹ�������VIP3",true).getBytes());
							cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + "��ϲ " + cm.getPlayer().getName() +" ��Ҵ�VIP2�ɹ�������VIP3",true).getBytes());
                       cm.sendOk("�����ɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); }
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    } 
}else if  (selection == 22) { 
                       if(cm.getPlayer().getvip() != 1) {
                       cm.sendOk("������ݲ��ʺϰ������ҵ��."); 
cm.dispose();
                       } else if(cm.getmoneyb() >= v1v4) { 
                      if(cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3) ||  cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(4)).isFull() ||cm.getMeso()+V4_money-V1_money >= 2147483647 ||cm.haveItem(1142174) == false){
cm.sendOk("����VIP�����Ҫ: \r\n \r\n "+ttt+" #b����װ����3���ո� "+ttt+" ������1���ո�\r\n "+ttt+" �����Ҽ���#r"+V4_money+"#b��ȥ#r"+V1_money+"#bС������Ǯ����.\r\n "+ttt+" #b��һ�ǻ�Ա���͵�#r#t1142174##b���ڱ���.\r\n    ��ǰ�������������.");
							cm.dispose();
}else{   
                       cm.setmoneyb(-v1v4); 
                       cm.getChar().SetVip(4); 
                       cm.gainNX(V4_NX);
                       cm.gainNX(-V1_NX);
                       cm.gainMeso(V4_money);
                       cm.gainMeso(-V1_money);
                       cm.removeAll(1142174);
// V1-v3 ����   [��ʽ cm.gainitem(ID,����);] 

                       
                        cm.gainItem(4031454,15);//�����X5
                        cm.gainItem(1902018,1);//����3
                       cm.gainItem(1912011,1);//�ǰ���

//����ѫ�� 1142177- 
var xunzhang = 1142177;//����ѫ�´���
var shuxing = 40; //����V4ѫ������.
var toDrop = new net.sf.cherry.client.Equip(xunzhang,0);
		        toDrop.setStr(shuxing);
		        toDrop.setDex(shuxing);
		        toDrop.setInt(shuxing);
		        toDrop.setLuk(shuxing);
		        toDrop.setSpeed(20);
		        toDrop.setJump(20);
		        toDrop.setLocked(1);						
net.sf.cherry.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);
		        cm.getChar().saveToDB(true);
                       cm.sendOk("�����ɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
cm.serverNotice("[��Ա����]:���:"+ cm.getChar().getName() +" �ɹ���Ϊ��������,��һ�ӭ��");
cm.serverNotice("[��Ա����]:���:"+ cm.getChar().getName() +" �ɹ���Ϊ��������,��һ�ӭ��");
cm.serverNotice("[��Ա����]:���:"+ cm.getChar().getName() +" �ɹ���Ϊ��������,��һ�ӭ��");
cm.serverNotice("[��Ա����]:���:"+ cm.getChar().getName() +" �ɹ���Ϊ��������,��һ�ӭ��");

                       cm.dispose(); }
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    } 




}else if  (selection == 23) { 
                       if(cm.getPlayer().getvip() != 2) {
                       cm.sendOk("������ݲ��ʺϰ������ҵ��."); 
cm.dispose();
                       } else if(cm.getmoneyb() >= v2v3) { 
                      if(cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3) ||  cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(4)).isFull() ||cm.getMeso()+V3_money-V2_money >= 2147483647 ||cm.haveItem(1142175) == false){
cm.sendOk("����VIP�����Ҫ: \r\n \r\n "+ttt+" #b����װ����3���ո� "+ttt+" ������1���ո�\r\n "+ttt+" �����Ҽ���#r"+V3_money+"#b��ȥ#r"+V2_money+"#bС������Ǯ����.\r\n "+ttt+" #b��һ�ǻ�Ա���͵�#r#t1142175##b���ڱ���.\r\n    ��ǰ�������������.");
							cm.dispose();
}else{   
                       cm.setmoneyb(-v2v3); 
                       cm.getChar().SetVip(3); 
                       cm.gainNX(V3_NX);
                       cm.gainNX(-V2_NX);
                       cm.gainMeso(V3_money);
                       cm.gainMeso(-V2_money);
                       cm.removeAll(1142175);
// V1-v3 ����   [��ʽ cm.gainitem(ID,����);] 

                       
                        cm.gainItem(4031454,5);//�����X5
                        cm.gainItem(1902017,1);//����3
                       cm.gainItem(1912011,1);//�ǰ���

//����ѫ�� 1142176- 
var xunzhang = 1142176;//����ѫ�´���
var shuxing = 30; //����V3ѫ������.
var toDrop = new net.sf.cherry.client.Equip(xunzhang,0);
		        toDrop.setStr(shuxing);
		        toDrop.setDex(shuxing);
		        toDrop.setInt(shuxing);
		        toDrop.setLuk(shuxing);
		        toDrop.setSpeed(20);
		        toDrop.setJump(20);
		        toDrop.setLocked(1);						
net.sf.cherry.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);
		        cm.getChar().saveToDB(true);
                       cm.sendOk("�����ɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); }
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    } 

}else if  (selection == 24) { 
                       if(cm.getPlayer().getvip() != 2) {
                       cm.sendOk("������ݲ��ʺϰ������ҵ��."); 
cm.dispose();
                       } else if(cm.getmoneyb() >= v2v4) { 
                       if(cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3) ||  cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(4)).isFull() ||cm.getMeso()+V4_money-V2_money >= 2147483647 ||cm.haveItem(1142175) == false){
cm.sendOk("����VIP�����Ҫ: \r\n \r\n "+ttt+" #b����װ����3���ո� "+ttt+" ������1���ո�\r\n "+ttt+" �����Ҽ���#r"+V4_money+"#b��ȥ#r"+V1_money+"#bС������Ǯ����.\r\n "+ttt+" #b��һ�ǻ�Ա���͵�#r#t1142175##b���ڱ���.\r\n    ��ǰ�������������.");
							cm.dispose();
}else{   
                       cm.setmoneyb(-v2v4); 
                       cm.getChar().SetVip(4); 
                       cm.gainNX(V4_NX);
                       cm.gainNX(-V2_NX);
                       cm.gainMeso(V4_money);
                       cm.gainMeso(-V2_money);
                       cm.removeAll(1142175);
// V1-v3 ����   [��ʽ cm.gainitem(ID,����);] 

                       
                        cm.gainItem(4031454,10);//�����X5
                        cm.gainItem(1902018,1);//����3
                       cm.gainItem(1912011,1);//�ǰ���

//����ѫ�� 1142177- 
var xunzhang = 1142177;//����ѫ�´���
var shuxing = 40; //����V4ѫ������.
var toDrop = new net.sf.cherry.client.Equip(xunzhang,0);
		        toDrop.setStr(shuxing);
		        toDrop.setDex(shuxing);
		        toDrop.setInt(shuxing);
		        toDrop.setLuk(shuxing);
		        toDrop.setSpeed(20);
		        toDrop.setJump(20);
		        toDrop.setLocked(1);						
net.sf.cherry.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);
		        cm.getChar().saveToDB(true);
                       cm.sendOk("�����ɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
cm.serverNotice("[��Ա����]:���:"+ cm.getChar().getName() +" �ɹ���Ϊ��������,��һ�ӭ��");
cm.serverNotice("[��Ա����]:���:"+ cm.getChar().getName() +" �ɹ���Ϊ��������,��һ�ӭ��");
cm.serverNotice("[��Ա����]:���:"+ cm.getChar().getName() +" �ɹ���Ϊ��������,��һ�ӭ��");
cm.serverNotice("[��Ա����]:���:"+ cm.getChar().getName() +" �ɹ���Ϊ��������,��һ�ӭ��");

                       cm.dispose(); }
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    } 

}else if  (selection == 25) { 
                       if(cm.getPlayer().getvip() != 3) {
                       cm.sendOk("������ݲ��ʺϰ������ҵ��."); 
cm.dispose();
                       } else if(cm.getmoneyb() >= v3v4) { 
                       if(cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3) ||  cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(4)).isFull() ||cm.getMeso()+V4_money-V3_money >= 2147483647 ||cm.haveItem(1142074) == false){
cm.sendOk("����VIP�����Ҫ: \r\n \r\n "+ttt+" #b����װ����3���ո� "+ttt+" ������1���ո�\r\n "+ttt+" �����Ҽ���#r"+V4_money+"#b��ȥ#r"+V3_money+"#bС������Ǯ����.\r\n "+ttt+" #b�����ǻ�Ա���͵�#r#t1142074##b���ڱ���.\r\n    ��ǰ�������������.");
							cm.dispose();
}else{   
                       cm.setmoneyb(-v3v4); 
                       cm.getChar().SetVip(4); 
                       cm.gainNX(V4_NX);
                       cm.gainNX(-V3_NX);
                       cm.gainMeso(V4_money);
                       cm.gainMeso(-V3_money);
                       cm.removeAll(1142074);
// V1-v3 ����   [��ʽ cm.gainitem(ID,����);] 

                       
							cm.gainItem(5220040,20); //��
							cm.gainItem(2340000,20);  //ף����
							cm.gainItem(3010070,1);

//����ѫ�� 1142177- 
var xunzhang = 1142178;//����ѫ�´���
var shuxing = 500; //����V4ѫ������.
var toDrop = new net.sf.cherry.client.Equip(xunzhang,0);
		        toDrop.setStr(shuxing);
		        toDrop.setDex(shuxing);
		        toDrop.setInt(shuxing);
		        toDrop.setLuk(shuxing);
		        toDrop.setSpeed(20);
		        toDrop.setJump(20);
		        toDrop.setLocked(1);						
net.sf.cherry.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);
		        cm.getChar().saveToDB(true);
                       cm.sendOk("�����ɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + "��ϲ " + cm.getPlayer().getName() +" ��Ҵ�VIP3�ɹ�������VIP4",true).getBytes());
							cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + "��ϲ " + cm.getPlayer().getName() +" ��Ҵ�VIP3�ɹ�������VIP4",true).getBytes());
							cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"ϵͳ����Ա" + " : " + "��ϲ " + cm.getPlayer().getName() +" ��Ҵ�VIP3�ɹ�������VIP4",true).getBytes());
                       cm.dispose(); }
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    } 



                }else if  (selection == 9) { 
				cm.teachSkill(21000000,10,10); //ì����ǿ��
				cm.teachSkill(21001001,15,15); //ս������
				cm.teachSkill(21000002,20,20); //˫���ػ�
				cm.teachSkill(21001003,20,20); //����ì
				cm.teachSkill(21100000,20,20); //��׼ì
				cm.teachSkill(21100001,20,20); //�����ػ�
				cm.teachSkill(21100002,30,30); //ս��ͻ��
				cm.teachSkill(21101003,20,20); //��ѹ
				cm.teachSkill(21100004,20,20); //��������
				cm.teachSkill(21100005,20,20); //������Ѫ
				cm.teachSkill(21110000,20,20); //����ǿ��
				cm.teachSkill(21111001,20,20); //���ɻ���
				cm.teachSkill(21110002,20,20); //ȫ���ӻ�
				cm.teachSkill(21110003,30,30); //�ռ�Ͷ��
				cm.teachSkill(21110004,30,30); //��Ӱ����
				cm.teachSkill(21111005,20,20); //��ѩì
				cm.teachSkill(21110006,20,20); //����
				cm.teachSkill(21110007,20,20); //ȫ���ӻ�
				cm.teachSkill(21110008,20,20); //ȫ���ӻ�
				cm.teachSkill(21121000,1,1); //ð�յ���ʿ
				cm.teachSkill(21120001,30,30); //��������
				cm.teachSkill(21120002,30,30); //ս��֮��
				cm.teachSkill(21120009,30,30); //ս��֮��
				cm.teachSkill(21120010,30,30); //ս��֮��
				cm.teachSkill(21121003,30,30); //ս�����־
				cm.teachSkill(21120004,30,30); //���ز���
				cm.teachSkill(21120005,30,30); //��������
				cm.teachSkill(21120006,30,30); //��ʯ�ǳ�
				cm.teachSkill(21120007,30,30); //ս��֮��
				cm.teachSkill(21121008,1,1); //��ʿ����־
			cm.sendOk("��ϲ�㼤��ɹ�~~~~");
                       cm.dispose(); 
}else if  (selection == 10) { 
			cm.sendSimple("���ã���������Ҫ���ֵ�����ר���� \r\n ��ѡ����ϲ����\r\n  #L11##v3010000##l1��ֵ�� #L12##v3012011##l10��ֵ�� #L13##v3010002##l2��ֵ��   #L14##v3010003##l2��ֵ�� #L15##v3010004##l1��ֵ�� #L16##v3010005##l1��ֵ�� #L17##v3010006##l2��ֵ�� #L18##v3010007##l4��ֵ�� #L19##v3010008##l4��ֵ�� #L20##v3010009##l3��ֵ�� #L21##v3010010##l3��ֵ�� #L22##v3010012##l2��ֵ�� #L23##v3010013##l5��ֵ�� #L24##v3010014##l2��ֵ�� #L25##v3010016##l2��ֵ�� #L26##v3010017##l2��ֵ�� #L27##v3010018##l5��ֵ�� #L28##v3010019##l5��ֵ�� #L29##v3010021##l5��ֵ�� #L30##v3010024##l5��ֵ�� #L31##v3010028##l5��ֵ�� #L32##v3010029##v3010030##v3010031##v3010032##v3010033##l һ��10��ֵ�� #L33##v3010034##l5��ֵ�� #L34##v3010035##l5��ֵ�� #L35##v3010036##l10��ֵ�� #L36##v3010037##l10��ֵ�� #L37##v3010039##l5��ֵ�� #L38##v3010040##l5��ֵ�� #L39##v3010041##l5��ֵ�� #L40##v3010043##l10��ֵ�� #L41##v3010044##l10��ֵ�� #L42##v3010045##l10��ֵ�� #L43##v3010046##l10��ֵ�� #L44##v3010047##l10��ֵ��  #L45##v3010049##l15��ֵ�� #L46##v3010050##l5��ֵ�� #L47##v3010051##v3010052##l5��ֵ�� #L48##v3010054##l10��ֵ�� #L49##v3010057##l10��ֵ�� #L50##v3010058##l15��ֵ�� #L51##v3010062##l15��ֵ�� #L52##v3010068##l15��ֵ�� #L53##v3010069##l15��ֵ�� #L54##v3010070##l15��ֵ�� #L55##v3010071##l15��ֵ�� #L56##v3010073##l15��ֵ�� #L57##v3020001##l15��ֵ�� #L58##v3010075##l15��ֵ�� #L59##v3010077##l15��ֵ�� #L60##v3010093##l15��ֵ�� #L61##v3010098##l15��ֵ�� #L62##v3010099##l30��ֵ�� #L63##v3010100##l15��ֵ�� #L64##v3010106##l15��ֵ�� #L65##v3010111##l10��ֵ�� #L66##v3012001##l15��ֵ�� #L67##v3012002##l15��ֵ�� #L68##v3012003##l15��ֵ�� #L69##v3012006##l15��ֵ�� #L70##v3012010##l15��ֵ�� #L71##v3010025##l15��ֵ�� #L72##v3010048##l10��ֵ��");

}else if  (selection == 11) { 
			if(cm.getmoneyb() >= 1) { 
                       cm.setmoneyb(-1); 
                       cm.gainItem(3010000,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 12) { 
			if(cm.getmoneyb() >= 10) { 
                       cm.setmoneyb(-10); 
                       cm.gainItem(3012011,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 13) { 
			if(cm.getmoneyb() >= 2) { 
                       cm.setmoneyb(-2); 
                       cm.gainItem(3010002,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 14) { 
			if(cm.getmoneyb() >= 2) { 
                       cm.setmoneyb(-2); 
                       cm.gainItem(3010003,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 15) { 
			if(cm.getmoneyb() >= 1) { 
                       cm.setmoneyb(-1); 
                       cm.gainItem(3010004,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 16) { 
			if(cm.getmoneyb() >= 1) { 
                       cm.setmoneyb(-1); 
                       cm.gainItem(3010005,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 17) { 
			if(cm.getmoneyb() >= 2) { 
                       cm.setmoneyb(-2); 
                       cm.gainItem(3010006,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 18) { 
			if(cm.getmoneyb() >= 4) { 
                       cm.setmoneyb(-4); 
                       cm.gainItem(3010007,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 19) { 
			if(cm.getmoneyb() >= 4) { 
                       cm.setmoneyb(-4); 
                       cm.gainItem(3010008,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 20) { 
			if(cm.getmoneyb() >= 3) { 
                       cm.setmoneyb(-3); 
                       cm.gainItem(3010009,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 21) { 
			if(cm.getmoneyb() >= 3) { 
                       cm.setmoneyb(-3); 
                       cm.gainItem(3010010,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 22) { 
			if(cm.getmoneyb() >= 2) { 
                       cm.setmoneyb(-2); 
                       cm.gainItem(3010012,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 23) { 
			if(cm.getmoneyb() >= 5) { 
                       cm.setmoneyb(-5); 
                       cm.gainItem(3010013,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 24) { 
			if(cm.getmoneyb() >= 2) { 
                       cm.setmoneyb(-2); 
                       cm.gainItem(3010014,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 25) { 
			if(cm.getmoneyb() >= 2) { 
                       cm.setmoneyb(-2); 
                       cm.gainItem(3010016,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 26) { 
			if(cm.getmoneyb() >= 2) { 
                       cm.setmoneyb(-2); 
                       cm.gainItem(3010017,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 27) { 
			if(cm.getmoneyb() >= 5) { 
                       cm.setmoneyb(-5); 
                       cm.gainItem(3010018,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 28) { 
			if(cm.getmoneyb() >= 5) { 
                       cm.setmoneyb(-5); 
                       cm.gainItem(3010019,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 29) { 
			if(cm.getmoneyb() >= 5) { 
                       cm.setmoneyb(-5); 
                       cm.gainItem(3010021,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 30) { 
			if(cm.getmoneyb() >= 2) { 
                       cm.setmoneyb(-2); 
                       cm.gainItem(3010024,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 31) { 
			if(cm.getmoneyb() >= 5) { 
                       cm.setmoneyb(-5); 
                       cm.gainItem(3010028,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 32) { 
			if(cm.getmoneyb() >= 10) { 
                       cm.setmoneyb(-10); 
                       cm.gainItem(3010029,1); 
cm.gainItem(3010030,1); cm.gainItem(3010031,1); cm.gainItem(3010032,1); cm.gainItem(3010033,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 33) { 
			if(cm.getmoneyb() >= 5) { 
                       cm.setmoneyb(-5); 
                       cm.gainItem(3010034,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 34) { 
			if(cm.getmoneyb() >= 5) { 
                       cm.setmoneyb(-5); 
                       cm.gainItem(3010035,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 35) { 
			if(cm.getmoneyb() >= 10) { 
                       cm.setmoneyb(-10); 
                       cm.gainItem(3010036,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 36) { 
			if(cm.getmoneyb() >= 10) { 
                       cm.setmoneyb(-10); 
                       cm.gainItem(3010037,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 37) { 
			if(cm.getmoneyb() >= 5) { 
                       cm.setmoneyb(-5); 
                       cm.gainItem(3010039,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 38) { 
			if(cm.getmoneyb() >= 5) { 
                       cm.setmoneyb(-5); 
                       cm.gainItem(3010040,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 39) { 
			if(cm.getmoneyb() >= 5) { 
                       cm.setmoneyb(-5); 
                       cm.gainItem(3010041,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 40) { 
			if(cm.getmoneyb() >= 10) { 
                       cm.setmoneyb(-10); 
                       cm.gainItem(3010043,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 41) { 
			if(cm.getmoneyb() >= 10) { 
                       cm.setmoneyb(-10); 
                       cm.gainItem(3010044,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 42) { 
			if(cm.getmoneyb() >= 10) { 
                       cm.setmoneyb(-10); 
                       cm.gainItem(30100445,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 43) { 
			if(cm.getmoneyb() >= 10) { 
                       cm.setmoneyb(-10); 
                       cm.gainItem(3010046,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 44) { 
			if(cm.getmoneyb() >= 10) { 
                       cm.setmoneyb(-10); 
                       cm.gainItem(3010047,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 45) { 
			if(cm.getmoneyb() >= 15) { 
                       cm.setmoneyb(-15); 
                       cm.gainItem(3010049,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 46) { 
			if(cm.getmoneyb() >= 5) { 
                       cm.setmoneyb(-5); 
                       cm.gainItem(3010050,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 47) { 
			if(cm.getmoneyb() >= 5) { 
                       cm.setmoneyb(-5); 
                       cm.gainItem(3010051,1); 
                       cm.gainItem(3010052,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 48) { 
			if(cm.getmoneyb() >= 10) { 
                       cm.setmoneyb(-10); 
                       cm.gainItem(3010054,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 49) { 
			if(cm.getmoneyb() >= 10) { 
                       cm.setmoneyb(-10); 
                       cm.gainItem(3010057,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 50) { 
			if(cm.getmoneyb() >= 15) { 
                       cm.setmoneyb(-15); 
                       cm.gainItem(3010058,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 51) { 
			if(cm.getmoneyb() >= 15) { 
                       cm.setmoneyb(-15); 
                       cm.gainItem(3010062,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 52) { 
			if(cm.getmoneyb() >= 15) { 
                       cm.setmoneyb(-15); 
                       cm.gainItem(3010068,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 53) { 
			if(cm.getmoneyb() >= 15) { 
                       cm.setmoneyb(-15); 
                       cm.gainItem(3010069,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 54) { 
			if(cm.getmoneyb() >= 15) { 
                       cm.setmoneyb(-15); 
                       cm.gainItem(3010070,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 55) { 
			if(cm.getmoneyb() >= 15) { 
                       cm.setmoneyb(-15); 
                       cm.gainItem(3010071,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 56) { 
			if(cm.getmoneyb() >= 15) { 
                       cm.setmoneyb(-15); 
                       cm.gainItem(3010073,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 57) { 
			if(cm.getmoneyb() >= 15) { 
                       cm.setmoneyb(-15); 
                       cm.gainItem(3020001,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 58) { 
			if(cm.getmoneyb() >= 15) { 
                       cm.setmoneyb(-15); 
                       cm.gainItem(3010075,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 59) { 
			if(cm.getmoneyb() >= 15) { 
                       cm.setmoneyb(-15); 
                       cm.gainItem(3010077,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 60) { 
			if(cm.getmoneyb() >= 15) { 
                       cm.setmoneyb(-15); 
                       cm.gainItem(3010093,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 61) { 
			if(cm.getmoneyb() >= 15) { 
                       cm.setmoneyb(-15); 
                       cm.gainItem(3010098,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 62) { 
			if(cm.getmoneyb() >= 30) { 
                       cm.setmoneyb(-30); 
                       cm.gainItem(3010099,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 63) { 
			if(cm.getmoneyb() >= 15) { 
                       cm.setmoneyb(-15); 
                       cm.gainItem(3010100,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();    
                    
}
}else if  (selection == 64) { 
			if(cm.getmoneyb() >= 15) { 
                       cm.setmoneyb(-15); 
                       cm.gainItem(3010106,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
}
}else if  (selection == 65) { 
			if(cm.getmoneyb() >= 10) { 
                       cm.setmoneyb(-10); 
                       cm.gainItem(3010111,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 66) { 
			if(cm.getmoneyb() >= 15) { 
                       cm.setmoneyb(-15); 
                       cm.gainItem(3012001,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 67) { 
			if(cm.getmoneyb() >= 15) { 
                       cm.setmoneyb(-15); 
                       cm.gainItem(3012002,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 68) { 
			if(cm.getmoneyb() >= 15) { 
                       cm.setmoneyb(-15); 
                       cm.gainItem(3012003,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 69) { 
			if(cm.getmoneyb() >= 15) { 
                       cm.setmoneyb(-15); 
                       cm.gainItem(3012006,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 70) { 
			if(cm.getmoneyb() >= 15) { 
                       cm.setmoneyb(-15); 
                       cm.gainItem(3012010,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 71) { 
			if(cm.getmoneyb() >= 15) { 
                       cm.setmoneyb(-15); 
                       cm.gainItem(3010025,1); 
                       cm.sendOk("�������ӳɹ���ף����Ϸ��죡 ������ʣ�г�ֵ�� #r"+cm.getmoneyb()+"#k"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("��û���㹻�ĳ�ֵ�ң����ֵ��"); 
                       cm.dispose();   
                    
}
}else if  (selection == 72) { 
			if(cm.getPlayer().getvip() >= 10) { 
                       cm.sendOk("�������:\r\n���Ѿ��Ǳ�����#r����VIP��#k!"); 
                       cm.dispose(); 
                    } else { 
                       cm.sendOk("Vip���:\r\n1.#v2022450# ��������20%  \r\n2.#v1142145# 4����40��������10��ħ����10��[��Ա�ƺ�]\r\n3.#v5073000# ��½֪ͨȫ�����.\r\n4.#v1902015##v1902016##v1902017##v1902018##v1912011# ���� \r\n5.#v2022070# ��Աbuffָ��[#b@ף��#k]һ��10��[����30����].\r\n"); 
                       cm.dispose();   
                    
                   
}
    } 
}}

/*
                �����ļ���XioxMS����˵ĺ����ļ�֮һ��
  Ŀǰ��Ȩ (C) 2010��   XioxMS             <735173071@qq.com>
 * -----------------------------------------------------------*
  ֮ǰ��Ա (C) 2008��   Huy              <patrick.huy@frz.cc>
                       Matthias Butz       <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>
 * ------------------------------------------------------------*
 @�÷����Ŀǰά����Ա:xioxms
 @����ļ���������ʽ.�������������
 @������򷢲���Ŀ����������������@
 @�������Ҫ����֧��,������ϵ����/ά����Ա<QQ735173071>
 @��Ӧ���Ѿ��յ�һ��Affero GNUͨ�ù�����Ȩ
 -�������,����ϸ�鿴http://www.gnu.org/licenses/*
*/

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
	for(i = 0; i < 10; i++){
		text += "";
	}				
	text += "#b���������˹������������������װ��Ŷ��\r\n��Ŀǰ�Ѿ�ɱ�����#r"+ cm.getChar().getsg() +"#b ͷ��\r\n��Ŀǰ�Ѿ���ɸ�����#r"+cm.getboss()+"#b �Ψ�\r\n\r\n#k"
        text += "���������������Ҷװ�����ס���������\r\n"; 
        text += "  ����ƶ��ڵ��������Ͽ��Բ鿴����Ŷ!\r\n                   #b����ȫְװ����������\r\n"; 
        text += "#n#r#L1#  #z1002419# LV1#b������#r#z1002509#LV8#b(��Ҫ����1500����ɱ��)#l\r\n"; //��Ҷñ ��Ҷͷ��LV8
        text += "#n#r#L13##z1002508# LV8#b������#r#z1002510#LV30#b(��Ҫ����5000����ɱ��)#l\r\n"; //1002508   ��Ҷͷ�� LV8  1002510   ��Ҷͷ��       LV30
        text += "#n#r#L14##z1002510#LV30#b������#r#z1002511#LV70#b(��Ҫ����12000����ɱ��#l\r\n"; //��Ҷͷ��       LV30 1002511   ��Ҷͷ�� LV70
        text += "#r#L15##b������#r#z1002511#LV70#b������Ϊ#r#z1002758#LV90#b������\r\n              ����(��Ҫ����1200����ɱ��)����#l\r\n"; //��Ҷñ ��Ҷͷ��
        text += "\r\n                   ����սʿװ����������\r\n"; 
	text += "#r#L2##z1302030#LV43#b������#r#z1302064#LV64#b(��Ҫ����5000����ɱ��#l\r\n";  //��Ҷ�� ��Ҷͻ����
	text += "#r#L3##z1412011#LV43#b������#r#z1312032#LV64#b(��Ҫ����5000����ɱ��#l\r\n"; //1412011   ��Ҷ�� 1312032   ��Ҷ�ƻ���
	text += "#r#L4##z1422014#LV43#b������#r#z1322054#LV64#b(��Ҫ����5000����ɱ��#l\r\n"; //1422014   ��Ҷ�� 1322054   ��Ҷ����
        text += "#r#L5##z1432012#LV43#b������#r#z1432040#LV64#b(��Ҫ����5000����ɱ��#l\r\n"; //1432012   ��Ҷǹ 1432040   ��Ҷ����ǹ 
        text += "#r#L6##z1442024#LV43#b������#r#z1442030#LV 70#b(��Ҫ����5000����ɱ��#l\r\n"; //1442024   ��Ҷì1442030   ��֮ѩ�� 
        text += "\r\n                   ��������װ����������\r\n"; 
	text += "#r#L7##z1332025#LV43#b������#r#z1332055#LV64#b(��Ҫ����5000����ɱ��#l\r\n"; //1332025   ��Ҷ�� 1332055   ��Ҷ������
	text += "#r#L8##z1472032#LV43#b������#r#z1472055#LV63#b(��Ҫ����5000����ɱ��#l\r\n"; //1472032   ��Ҷȭ 1472055   ��Ҷ����ȭ
        text += "\r\n                   ������ʦװ����������\r\n";  
	text += "#r#L9##z1382012#LV43#b������#r#z1372034#LV64#b(��Ҫ����5000����ɱ��#l\r\n"; //1382012   ��Ҷ��1372034
        text += "\r\n                   ��������װ����������\r\n";  
	text += "#r#L10##z1452022#L43#b������#r#z1452045#LV64#b(��Ҫ����5000����ɱ��#l\r\n"; //1452022   ��Ҷ�� 1452045   ��ҶHAPPY��
	text += "#r#L11##z1462019#LV43#b������#r#z1462040#LV64#b(��Ҫ����5000����ɱ��#l\r\n"; //1462019   ��Ҷ�� 1462040   ��Ҷ������ 
        text += "\r\n                   ��������װ����������\r\n";  
        text += "#r#L12##z1482020#L43#b������#r#z1482022#LV64#b(��Ҫ����5000����ɱ��#l\r\n"; //1482020   ��Ҷָ��1482022   ��Ҷ��צ 
   cm.sendSimple(text);
    } else if (status == 1) {
           if (selection == 0) {      
	   cm.warp(910000000); 
           cm.dispose(); 
    }else if  (selection == 1) {    //��Ҷñ ����ͷ��                
	   if ((cm.getChar().getsg() >= 500)&&(cm.haveItem(1002419, 1))){ 
                   cm.getPlayer().gainsg(-500); 
		   cm.sendOk("��ϲ���װ����������ˣ�������500�����˵㣡");
                   cm.gainItem(1002419,-1); //ͷ��
                   cm.gainItem(1002509,1); //ͷ��
                   cm.serverNotice("���: " + cm.c.getPlayer().getName() + " �ɹ�������װ���ȼ���");
                   cm.mapMessage("[����]�����ɹ���");	
		   cm.dispose();
	   }else{
		   cm.sendOk("��Ҫ���˵��������Ҫ������װ�����������ʵ��");
		   cm.dispose();
	   }
    }else if  (selection == 2) {  //��Ҷ��
	   if ((cm.getChar().getsg() >= 5000)&&(cm.haveItem(1302030, 1))){ 
                   cm.getPlayer().gainsg(-5000); 
		   cm.sendOk("��ϲ���װ����������ˣ�������5000�����˵㣡");
                   cm.gainItem(1302030,-1); //ͷ��
                   cm.gainItem(1302064,1); //ͷ��
                   cm.serverNotice("���: " + cm.c.getPlayer().getName() + " �ɹ�������װ���ȼ���");
                   cm.mapMessage("[����]�����ɹ���");	
		   cm.dispose();
	   }else{
		   cm.sendOk("��Ҫ���˵��������Ҫ������װ�����������ʵ��");
		   cm.dispose();
	   }
    }else if  (selection == 3) {      //1412011   ��Ҷ�� 1312032   ��Ҷ�ƻ���
          if ((cm.getChar().getsg() >= 5000)&&(cm.haveItem(1412011, 1))){ 
                   cm.getPlayer().gainsg(-5000); 
		   cm.sendOk("��ϲ���װ����������ˣ�������5000�����˵㣡");
                   cm.gainItem(1412011,-1); //ͷ��
                   cm.gainItem(1312032,1); //ͷ��
                   cm.serverNotice("���: " + cm.c.getPlayer().getName() + " �ɹ�������װ���ȼ���");
                   cm.mapMessage("[����]�����ɹ���");	
		   cm.dispose();
	   }else{
		   cm.sendOk("��Ҫ���˵��������Ҫ������װ�����������ʵ��");
		   cm.dispose();
	   }
    }else if  (selection == 4) { //1422014   ��Ҷ�� 1322054   ��Ҷ����
           if ((cm.getChar().getsg() >= 5000)&&(cm.haveItem(1422014, 1))){ 
                   cm.getPlayer().gainsg(-5000); 
		   cm.sendOk("��ϲ���װ����������ˣ�������5000�����˵㣡");
                   cm.gainItem(1422014,-1); //ͷ��
                   cm.gainItem(1322054,1); //ͷ��
                   cm.serverNotice("���: " + cm.c.getPlayer().getName() + " �ɹ�������װ���ȼ���");
                   cm.mapMessage("[����]�����ɹ���");	
		   cm.dispose();
	   }else{
		   cm.sendOk("��Ҫ���˵��������Ҫ������װ�����������ʵ��");
		   cm.dispose();
	   }
    }else if  (selection == 5) {//1432012   ��Ҷǹ 1432040   ��Ҷ����ǹ 
                     if ((cm.getChar().getsg() >= 5000)&&(cm.haveItem(1432012, 1))){ 
                   cm.getPlayer().gainsg(-5000); 
		   cm.sendOk("��ϲ���װ����������ˣ�������5000�����˵㣡");
                   cm.gainItem(1432012,-1); //ͷ��
                   cm.gainItem(1432040,1); //ͷ��
                   cm.serverNotice("���: " + cm.c.getPlayer().getName() + " �ɹ�������װ���ȼ���");
                   cm.mapMessage("[����]�����ɹ���");	
		   cm.dispose();
	   }else{
		   cm.sendOk("��Ҫ���˵��������Ҫ������װ�����������ʵ��");
		   cm.dispose();
	   }
    }else if  (selection == 6) {//1442024   ��Ҷì1442030   ��֮ѩ�� 
	  if ((cm.getChar().getsg() >= 5000)&&(cm.haveItem(1442024, 1))){ 
                   cm.getPlayer().gainsg(-5000); 
		   cm.sendOk("��ϲ���װ����������ˣ�������5000�����˵㣡");
                   cm.gainItem(1442024,-1); //ͷ��
                   cm.gainItem(1442030,1); //ͷ��
                   cm.serverNotice("���: " + cm.c.getPlayer().getName() + " �ɹ�������װ���ȼ���");
                   cm.mapMessage("[����]�����ɹ���");	
		   cm.dispose();
	   }else{
		   cm.sendOk("��Ҫ���˵��������Ҫ������װ�����������ʵ��");
		   cm.dispose();
	   }
    }else if  (selection == 7) {     //1332025   ��Ҷ�� 1332055   ��Ҷ������
           if ((cm.getChar().getsg() >= 5000)&&(cm.haveItem(1332025, 1))){ 
                   cm.getPlayer().gainsg(-5000); 
		   cm.sendOk("��ϲ���װ����������ˣ�������5000�����˵㣡");
                   cm.gainItem(1332025,-1); //ͷ��
                   cm.gainItem(1332055,1); //ͷ��
                   cm.serverNotice("���: " + cm.c.getPlayer().getName() + " �ɹ�������װ���ȼ���");
                   cm.mapMessage("[����]�����ɹ���");	
		   cm.dispose();
	   }else{
		   cm.sendOk("��Ҫ���˵��������Ҫ������װ�����������ʵ��");
		   cm.dispose();
	   }
    }else if  (selection == 8) {     //1472032   ��Ҷquan 1472055   ��Ҷ��quan
           if ((cm.getChar().getsg() >= 5000)&&(cm.haveItem(1472032, 1))){ 
                   cm.getPlayer().gainsg(-5000); 
		   cm.sendOk("��ϲ���װ����������ˣ�������5000�����˵㣡");
                   cm.gainItem(1472032,-1); //ͷ��
                   cm.gainItem(1472055,1); //ͷ��
                   cm.serverNotice("���: " + cm.c.getPlayer().getName() + " �ɹ�������װ���ȼ���");
                   cm.mapMessage("[����]�����ɹ���");	
		   cm.dispose();
	   }else{
		   cm.sendOk("��Ҫ���˵��������Ҫ������װ�����������ʵ��");
		   cm.dispose();
	   }    
    }else if  (selection == 10) {   //1452022   ��Ҷ�� 1452045   ��ҶHAPPY��
	   if ((cm.getChar().getsg() >= 5000)&&(cm.haveItem(1452022, 1))){ 
                   cm.getPlayer().gainsg(-5000); 
		   cm.sendOk("��ϲ���װ����������ˣ�������5000�����˵㣡");
                   cm.gainItem(1452022,-1); //ͷ��
                   cm.gainItem(1452045,1); //ͷ��
                   cm.serverNotice("���: " + cm.c.getPlayer().getName() + " �ɹ�������װ���ȼ���");
                   cm.mapMessage("[����]�����ɹ���");	
		   cm.dispose();
	   }else{
		   cm.sendOk("��Ҫ���˵��������Ҫ������װ�����������ʵ��");
		   cm.dispose();
	   }    
      }else if  (selection == 9) { //1382012   ��Ҷ��1372034
	  if ((cm.getChar().getsg() >= 5000)&&(cm.haveItem(1382012, 1))){ 
                   cm.getPlayer().gainsg(-5000); 
		   cm.sendOk("��ϲ���װ����������ˣ�������5000�����˵㣡");
                   cm.gainItem(1382012,-1); //ͷ��
                   cm.gainItem(1372034,1); //ͷ��
                   cm.serverNotice("���: " + cm.c.getPlayer().getName() + " �ɹ�������װ���ȼ���");
                   cm.mapMessage("[����]�����ɹ���");	
		   cm.dispose();
	   }else{
		   cm.sendOk("��Ҫ���˵��������Ҫ������װ�����������ʵ��");
		   cm.dispose();
	   }    
       }else if  (selection == 11) {   //1462019   ��Ҷ�� 1462040   ��Ҷ������ 
	  if ((cm.getChar().getsg() >= 5000)&&(cm.haveItem(1462019, 1))){ 
                   cm.getPlayer().gainsg(-5000); 
		   cm.sendOk("��ϲ���װ����������ˣ�������5000�����˵㣡");
                   cm.gainItem(1462019,-1); //ͷ��
                   cm.gainItem(1462040,1); //ͷ��
                   cm.serverNotice("���: " + cm.c.getPlayer().getName() + " �ɹ�������װ���ȼ���");
                   cm.mapMessage("[����]�����ɹ���");	
		   cm.dispose();
	   }else{
		   cm.sendOk("��Ҫ���˵��������Ҫ������װ�����������ʵ��");
		   cm.dispose();
	   }    
               }else if  (selection == 12) {  //1482020   ��Ҷָ��1482022   ��Ҷ��צ 
	  if ((cm.getChar().getsg() >= 5000)&&(cm.haveItem(1482020, 1))){ 
                   cm.getPlayer().gainsg(-5000); 
		   cm.sendOk("��ϲ���װ����������ˣ�������5000�����˵㣡");
                   cm.gainItem(1482020,-1); //ͷ��
                   cm.gainItem(1482022,1); //ͷ��
                   cm.serverNotice("���: " + cm.c.getPlayer().getName() + " �ɹ�������װ���ȼ���");
                   cm.mapMessage("[����]�����ɹ���");	
		   cm.dispose();
	   }else{
		   cm.sendOk("��Ҫ���˵��������Ҫ������װ�����������ʵ��");
		   cm.dispose();
	   }    
           }else if  (selection == 13) {   //1002508   ��Ҷͷ�� LV8  1002510   ��Ҷͷ��       LV30
	  if ((cm.getChar().getsg() >= 1500)&&(cm.haveItem(1002509, 1))){ 
                   cm.getPlayer().gainsg(-1500); 
		   cm.sendOk("��ϲ���װ����������ˣ�������1500�����˵㣡");
                   cm.gainItem(1002509,-1); //ͷ��
                   cm.gainItem(1002510,1); //ͷ��
                   cm.serverNotice("���: " + cm.c.getPlayer().getName() + " �ɹ�������װ���ȼ���");
                   cm.mapMessage("[����]�����ɹ���");	
		   cm.dispose();
	   }else{
		   cm.sendOk("��Ҫ���˵��������Ҫ������װ�����������ʵ��");
		   cm.dispose();
	   }    
           }else if  (selection == 14) {   //1002510   ��Ҷͷ�� LV30 1002511   ��Ҷͷ��       LV70
	  if ((cm.getChar().getsg() >= 5000)&&(cm.haveItem(1002510, 1))){ 
                   cm.getPlayer().gainsg(-5000); 
		   cm.sendOk("��ϲ���װ����������ˣ�������5000�����˵㣡");
                   cm.gainItem(1002510,-1); //ͷ��
                   cm.gainItem(1002511,1); //ͷ��
                   cm.serverNotice("���: " + cm.c.getPlayer().getName() + " �ɹ�������װ���ȼ���");
                   cm.mapMessage("[����]�����ɹ���");	
		   cm.dispose();
	   }else{
		   cm.sendOk("��Ҫ���˵��������Ҫ������װ�����������ʵ��");
		   cm.dispose();
	   }    
           }else if  (selection == 15) {   //��Ҷͷ��       LV30 1002511   ��Ҷͷ�� LV70
	  if ((cm.getChar().getsg() >= 12000)&&(cm.haveItem(1002511, 1))){ 
                   cm.getPlayer().gainsg(-12000); 
		   cm.sendOk("��ϲ���װ����������ˣ�������12000�����˵㣡");
                   cm.gainItem(1002511,-1); //ͷ��
                   cm.gainItem(1002758,1); //ͷ��
                   cm.serverNotice("���: " + cm.c.getPlayer().getName() + " �ɹ�������װ���ȼ���");
                   cm.mapMessage("[����]�����ɹ���");	
		   cm.dispose();
	   }else{
		   cm.sendOk("��Ҫ���˵��������Ҫ������װ�����������ʵ��");
		   cm.dispose();
	   }    
    }        
}
}
}



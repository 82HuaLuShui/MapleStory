/*
	���������ű�#L1##b��Ҫ��1Ԫ����ս����#k
*/

var needmon = 200 ;
function start() {
    cm.sendSimple ("����Ҫ��ս���� ��������ô����ҪLV 120 ����  �Ҳſ��������ȥ~\r\n#L0##r��ս#k \r\n\r\n\r\n#L3##r��ȥ�ˣ��Һ���#k ")
    }

function action(mode, type, selection) {
        cm.dispose();

    switch(selection){
        case 0: 
           if (cm.getLevel() < 120 ){
		cm.sendOk("��Ǹ��̫����.");
		cm.dispose();
           } else if (cm.getBossLog('TQ1') >= 999) {
            cm.sendOk("��Ǹ��������ս�����Ѵ�����");
	    cm.dispose();
           }else{
		cm.getMap(240020506).addMapTimer(600, 910000000);
        	cm.setBossLog('TQ1');
        	cm.warp(709000700, 0);
		//cm.serverNotice("ʥ���� ������ʲô�أ�");  
		cm.dispose();
	      }   
	 break;
        case 1: 
		if (cm.getzb() <= needmon) {
		cm.sendOk("��Ǹ��û���㹻��Ԫ��,�㻹������������");
		cm.dispose();
		}else{
cm.getMap(240020502).addMapTimer(180, 910000000);
		cm.setzb(-needmon);
		cm.warp(240020502, 0);
		//cm.serverNotice("����ս����������"+ cm.getChar().getName() +"������������1Ԫ�����˸���Ӭ��ȥ��ս����ȥ��");  
		cm.dispose();
	      }   
	 break;
        case 2: 
		if (cm.getChar().getVip() <= 2){
		cm.sendOk("��Ǹ�㲻��VIP2���ϵ����.");
		cm.dispose();
		}else{
		cm.warp(240060200, 0);
		//cm.serverNotice("����ս��������VIP��ҡ�"+ cm.getChar().getName() +"���ǳ��׺������Ų�Ӭ��ȥ��ս����ȥ��");  
		cm.dispose();
	      }   
	 break;
	 case 3:
 	      	cm.sendOk("�Ǻ�!ԭ����ֻ�Ǹ���С��");  
		cm.dispose();
		 
        }
    }

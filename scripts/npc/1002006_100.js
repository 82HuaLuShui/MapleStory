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
                
   cm.sendOk("��лʹ��.");
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
	text += "#d�ϳ�-- #r��1000HPѪ�¡���Ҫ������Ʒ��\r\n#v1050018##z1050018# * 1��\r\n#v4021004##z4021004# * 5��\r\n#v4021000##d#z4021000# * 5��\r\n#v4021006##d#z4021006# * 5��\r\n#v4021002##d#z4021002# * 5��\r\n~\r\n"
	text += "\r\n#L1##d���ռ���������Ʒ��ȷ������1000HPѪ��";//����
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1012412,1)){
			cm.sendOk("��������ı��������ٿճ�2��λ�ã�");
            cm.dispose();
        } else if(cm.haveItem(1050018,1) &&cm.haveItem(4021004,5) && cm.haveItem(4021000,5) && cm.haveItem(4021006,5) && cm.haveItem(4021002,5)){
				cm.gainItem(1050018, -1);
				cm.gainItem(4021004, -5);
				cm.gainItem(4021000, -5);
				cm.gainItem(4021006, -5);
				cm.gainItem(4021002, -5);
cm.gainItem(1012412,10,10,10,10,1000,1000,0,0,0,0,0,0,0,0);
            cm.sendOk("�����ɹ���");
            cm.dispose();
cm.����(3, "��ң�[" + cm.getPlayer().getName() + "]�ɹ�����1000HPѪ�£���ϲ����");
			}else{
            cm.sendOk("�޷�������������#v1050018#����1��\r\n#v4021004#����5��\r\n#v4021000#����5��\r\n#v4021006#����5��\r\n#v4021002#����5��\r\n");
            cm.dispose();
			}
		}
    }
}





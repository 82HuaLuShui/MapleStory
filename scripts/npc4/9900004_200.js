
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

            cm.sendOk("���ݣ�");
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
            cm.sendGetNumber("�����������������ǿ��װ��Ŷ������\r\nװ��ǿ������Ҫ��Ʒ��\r\n#v4250002#5��\r\nǿ��װ����д����Ҫǿ����װ�������ɣ�\r\n(#rPS����ð�װ������װ������һ��Ȼ������1)",0,0,1000);
        }
        else if(status == 1){
            xz = selection;
            cm.sendYesNo("ǿ����װ��Ϊ����"+xz+"���Ƿ������");
        }else if(status == 2){
                   if (cm.itemQuantity(4250002) < 5 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4250002#5����������Ʒ����#k");
				cm.dispose();
			}
              else{
			cm.gainItem(4250002,-5);
			//cm.gainItem(4002001,-10);
			//cm.gainItem(4030007,-10);
			//cm.gainItem(4310038,-20);
			//cm.gainItem(4310088,-1);
			cm.itemqh(xz,1);
			cm.dispose();
        }  
        }    
    }
}



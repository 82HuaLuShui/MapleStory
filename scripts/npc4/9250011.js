
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
            cm.sendGetNumber("ǿ��װ����д����Ҫǿ����װ�������ɣ�\r\n(#rPS����ð�װ������װ������һ��Ȼ������1)",0,0,1000);
        }
        else if(status == 1){
            xz = selection;
            cm.sendYesNo("ǿ����װ��Ϊ����"+xz+"���Ƿ������");
        }else if(status == 2){
			if(cm.haveItem(4251202,1) && cm.haveItem(4251302,1)){//�ߵ���ʣ��ߵȺڰ�
			cm.gainItem(4251202, -1);
			cm.gainItem(4251302, -1);				
			cm.itemqh(xz,1);
			cm.dispose();
		    }else{
            cm.sendOk("�Բ����㲻�ǹ���Ա�޷�ʹ�ô˹��ܣ�");
            cm.dispose();
			}
        }    
    }
}



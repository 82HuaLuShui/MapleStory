function start() {

if (cm.getLevel() > 30 ) {  
	if (cm.getBossLog('ÿ�ո���') >= 1) {
        cm.sendOk("���켺������ˣ��������������Ұɣ�");
	    cm.dispose();
	} else {
		cm.setBossLog('ÿ�ո���');
		cm.gainDY(1000);//����ȯ
		cm.gainMeso(2000000);
		cm.serverNotice("�����桻����ҡ�"+ cm.getChar().getName() +"�������� ÿ�ո��� ��ȡ��200����Ϸ�ҡ�1000���þ�");
		cm.dispose();
	}
  
  
    } else {
            cm.sendOk("�ȼ��������30��Ŷ~��");
	    cm.dispose();
	}
}


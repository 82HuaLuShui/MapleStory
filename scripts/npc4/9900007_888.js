function start() {
if(cm.haveItem(2022613,1)){
    ɾ���˴�if(!cm.beibao(1,3)){
        cm.sendOk("װ�������಻��3���ո�");
        cm.dispose();
	}else if(!cm.beibao(5,5)){
        cm.sendOk("�ֽ������಻��5���ո�");
        cm.dispose();
	}
	cm.gainItem(5150040, 5);//�ʼ�����
    cm.gainItem(5151001, 5);//���ִ�Ⱦɫ�߼���Ա��
    cm.gainItem(5152001, 5);//���ִ����������߼���Ա��
    cm.gainItem(5153000, 5);//���ִ廤�����Ļ�Ա��
    cm.gainItem(5072000, 5);//���ʵ�����
	cm.gainItem(1112446, 1);//�Ϲ����Ž�ָ
	cm.gainItem(1112724, 10,10,10,10,0,0,0,0,0,0,0,0,0,0);//�������ֽ�ָ
    cm.gainItem(1142358,100,100,100,100,200,200,10,0,0,0,0,0,15,20 );//����ѫ��
    cm.gainDY(30000);
	cm.serverNotice("����ð�յ����棺��ҡ�"+ cm.getChar().getName() +"��ȡ���������~!"); 
	cm.sendOk("��ϲ����ȡ���������,ף����Ŀ������~!");
	cm.dispose();
}else{
	cm.sendOk("���ǿ������~!!");
	cm.dispose();
}	
}

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
	if (status >= 0 && mode == 0) {
		cm.sendNext("~~~~~~~~~~~~~~~~~~~~~~~~~~~");
		cm.dispose(); 
		return;
	}
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
			cm.sendYesNo("#r���ǲ����뼤�����м���? ������Ҫ֧��4500��ȯ���ܼ���Ŷ��  \r\n\r\n   #k����ֹʹ�õļ���Ϊ:\r\n Ӣ��    :#b���׶���.��������.\r\n #k����ʿ  :#b�������.\r\n #k���ӳ�:#b��������.");
		} else if (status == 1) {
           if(cm.getPlayer().getCSPoints(0) >= 4500){
			    cm.getChar().modifyCSPoints(0,-4500);
                        cm.getPlayer().maxAllSkills(30);
			cm.sendOk("����ɹ�");
			cm.dispose();
} else {
  cm.sendOk("��û��4500��ȯ");
cm.dispose();
			}cm.dispose();
	    }	
}}

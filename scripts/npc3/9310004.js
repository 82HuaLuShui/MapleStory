importPackage(net.sf.odinms.client);
var status = 0;

var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";


	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
		if (mode == -1) {
		cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
		}
		if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {

	    var textz = "\r\n��Ҫ��ս#r �������#k��ϣ�������Ǹ�ʵ��\r\n";

		textz += "#r#L0#"+ttt+"��ս�����    #d(һ������)\r\n";

		cm.sendSimple (textz);  

			}else if (status == 1) {

	if (selection == 0){
                 if (cm.getLevel() < 40) {
	            cm.sendOk("�ȼ�����40");
                    cm.dispose();
			} else if(cm.getBossLog("WG") >= 5 ){	
	            cm.sendOk("#b�������#k ÿ��ֻ����ս#r 5 #k��");
                    cm.dispose();
                        }else{
                        cm.setBossLog("WG");
                        cm.warp(701010321, 0);
                        cm.dispose();
}


}										
}
}
}

function start() {
	//cm.sendSimple("<3 <3");
	cm.sendSimple("#b��� #k#h  ##e  #b��������ϵͳ.#k\r\n#L0##r��������\r\n\r\n#L1##g�ȼ�����\r\n\r\n#L2##b�������#l");//\r\n#L2##b�������#l
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {	
	cm.displayGuildRanks();
	cm.dispose();
	}
	else if (selection == 1) {
	cm.showlvl();
	cm.dispose();
	}
	else if (selection == 2) {
	cm.showmeso();
	cm.dispose();
	}
}

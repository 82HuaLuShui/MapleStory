/* Author: Xterminator
	NPC Name: 		Peter
	Map(s): 		Maple Road: Entrance - Mushroom Town Training Camp (3)
	Description: 	Takes you out of Entrace of Mushroom Town Training Camp
*/

var status = -1;


function action(mode, type, selection) {

    if (mode == 1) {

	status++;
 
   } else {

	status--;
 
   }

    if (status == 0) {

	cm.sendNext("�𾴵� #b#r#h ##k ,��ӭ����#b����ð�յ�#k.\r\n����ð�յ��汾Ϊ#rVer079#k��ð�յ�������ֻ����#rð�ռ�#b(սʿ.ħ��ʦ.����.������)#k����ʱ�����ź�������ʿ�ź�ս�񣬱���Ϊ���Ż������ֻΪ�˺�һ����ʰ��ǰһ���ĵĻ��䣡��ϣ������������ð�յ��ҵ������Ļ��䣬ף������ÿһ��\r\n\r\n\t\t\t\t\t\t\t#r����ð�յ�\t����Ա:С��ؼ");
    } else if (status == 1) {

	cm.sendNextPrev("���ס�������Ͻ�ʹ�ø��ַǷ����򣬰������ٳ��֡��ű��һ���һ�����֣�����#rɾ����Ⱥ#k�����������飡�������ͬ�⣬�͵�� ��һ�� ,����������,��ʼ���ð��֮�ðɣ�����");

    } else if (status == 2) {

	cm.warp(10000, 0);

	cm.gainExp(3);
	cm.gainItem(5530000,+1);
cm.����(2, "��ӭ[" + cm.getPlayer().getName() + "]��������ð�յ����򿪱���������������ȡ�������Ŷ��");
	cm.dispose();

    }

}

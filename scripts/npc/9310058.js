/*
 * 
 * @ð�յ�
 * ת��npc
 * ************
 * 9310058 NPC ID
 */
function start() {
    status = -1;

    action(1, 0, 0);
}
var jf = 4; //���ö��ٻ��ֿ��Ե㿪npc
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("�ź�...");
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
            cm.sendSimple("��ӭ�һ���Ʒ�����г齱��Ҫ���� #b����#k ���� #r������ĵ�#k ��\r\nĿǰʣ�����Ϊ: #r#e"+cm.getboss()+" #n#k�㣨�齱һ������ 4 �㣩��\r\n�ö�����˭�����أ�\r\n#L0##b���л��ֳ齱 - ÿ������ 4 ����\r\n\r\n#L1#�������齱 - ÿ������ 1 ��");
        } else if (status == 1) {
            if (selection == 0) { //���ֳ齱
                if(cm.getboss() >= jf){
                cm.openNpc(9310097); //��д���ֳ齱��npcid
                }else{
                    cm.sendOk("��Ļ��ֲ��� "+jf+" �㡣�޷�ʹ�øù��ܣ�\r\n#r���ֿ����ڸ����л��Ŷ��ֻҪ��ɣ����л��ּ�¼��Ŷ��");
		    cm.dispose();
                }
            } else if (selection == 1) {//������ĵ��齱
                cm.openNpc(9310096);//��д�������齱��npcid
            }
        }
    }
}

/* Rupi by Moogra
Happyville Warp NPC
*/

function start() {
    cm.sendSimple("��֪����һ��ͯ��������磬���벻��ȥ�����أ�\r\n#L0#ǰ���Ҹ���!#l\r\n\#L1#����ħ������#l");
}

function action(mode, type, selection) {
    if (selection == 0)
        cm.warp(209000000, 0);
    else if (selection == 1)
        cm.warp(101000000, 0);
    cm.dispose();
}
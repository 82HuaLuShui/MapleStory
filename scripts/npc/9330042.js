/*
                �����ļ���Vr001 �������˵ĺ����ļ�֮һ��
  Ŀǰ��Ȩ (C) 2010��   Vr001 ����             <159502199@qq.com>
 * -----------------------------------------------------------*
  ֮ǰ��Ա (C) 2008��   Huy              <patrick.huy@frz.cc>
                       Matthias Butz       <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>
 * ------------------------------------------------------------*
 @�÷����Ŀǰά����Ա:Vr001 ����
 @����ļ���������ʽ.�������������
 @������򷢲���Ŀ����������������@
 @�������Ҫ����֧��,������ϵ����/ά����Ա<QQ100807851>
 @��Ӧ���Ѿ��յ�һ��Affero GNUͨ�ù�����Ȩ
 -�������,����ϸ�鿴http://www.gnu.org/licenses/*
*/

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
                
            cm.sendOk("��л��Ĺ��٣�");
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
              
            var tex2 = "";	
            var text = "";
            for(i = 0; i < 10; i++){
                text += "";
            }			
            if (cm.haveItem(1122019)||cm.haveItem(1122024)||cm.haveItem(1122025)||cm.haveItem(1122026)||cm.haveItem(1122027)||cm.haveItem(1122028)||cm.haveItem(1122029)||cm.haveItem(1122030)||cm.haveItem(1122031)||cm.haveItem(1122032)||cm.haveItem(1122033)||cm.haveItem(1122034)||cm.haveItem(1122035)||cm.haveItem(1122036)||cm.haveItem(1122037)||cm.haveItem(1122038)) {
                //text += "#b�ˣ��𾴵����#r"+ cm.getChar().getName() +"#b�������������ۼƣ�\r\n��Ŀǰ�Ѿ�ɱ�����#r"+ cm.getChar().getsg() +"#b ͷ��\r\n��Ŀǰ�Ѿ���ɸ�����#r"+cm.getboss()+"#b �Ψ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/3/0#\r\n#k"
                text += "İ����#r" + cm.getChar().getName() +"#k..\r\n��֪����,���ð�յ��ڵ�#rð��֮��#k����ϢԽ��Խ������..\r\n����#r��������#k.ֻҪ�����㹻�Ĳ���.\r\n�ҾͿ�����#b�������������ӡ#k..�ﵽ���ѵ�״̬.\r\n����˵��ͼ��#v1122019#�D��#v1122024#�D��#v1122029#�D��#v1122034#\r\n"; 
                text += "                                         ��\r\n";
                text += "                             #b���صĵ���#k#v2022670#������";
                text += "\r\n#r������������������������ʼ����������������������������";
                text += "\r\n#d���ν���LV11��.��:\r\n#e��Ҫ����200��#v4001126##n\r\n#e��Ҫ����ð�ձ�#v2140002# 100��#n\r\n";
                text += "#d#L1##r#e��#n��ð��֮��LV10��#d��#r����ӡ��ð��֮��LV11��(սʿ)#l\r\n";
                text += "#d#L11##r#e��#n��ð��֮��LV10��#d��#r����ӡ��ð��֮��LV11��(ħ��ʦ)#l\r\n";
                text += "#d#L12##r#e��#n��ð��֮��LV10��#d��#r����ӡ��ð��֮��LV11��(������)#l\r\n";
                text += "#d#L13##r#e��#n��ð��֮��LV10��#d��#r����ӡ��ð��֮��LV11��(����)#l\r\n";
                text += "#d#L14##r#e��#n��ð��֮��LV10��#d��#r����ӡ��ð��֮��LV11��(����)#l\r\n";
                text += "\r\n������������������������������������������������������";
                text += "\r\n#d�ٽ���LV31��...��:\r\n#e��Ҫ����300��#v4001126##n\r\n#e��Ҫ����ð�ձ�#v2140002# 300��#n\r\n";
                text += "#L3##r#e��#n����ӡ��ð��֮��LV11��#d��#r�����ѵ�ð��֮��LV31��#l\r\n";
                text += "\r\n������������������������������������������������������";
                text += "\r\n#b#e���ս���LV61��..��:\r\n#e��Ҫ����500��#v4001126#\r\n��Ҫ����1��#v4000313##n\r\n#e��Ҫ����ð�ձ�#v2140002# 500��#n\r\n";
                text += "#L4##r#e#e�ۡ�����ð��֮��LV31��#d��#r�����ѵ�ð��֮��LV61��#l\r\n";
                text += "\r\n��������������������������������������������������  ";
                cm.sendSimple(text);
            }else{
                cm.sendOk("��ʿ..���ܸо���#rð��֮��#k#n�����ز�����..��������ø��ҿ���,�������ܰ�����.");
                cm.dispose();
            }
        } else if (status == 1) {
            if (selection == 0) {      
                cm.warp(910000000); 
                cm.dispose(); 
            }else if  (selection == 1) { //��һ������
                if (cm.haveItem(1122019, 1)&&cm.haveItem(4001126, 200)&&(cm.getMeso() >= 1000000)) { 
                    cm.gainItem(1122019,-1);
                    cm.gainMeso(-2000000);
                    cm.gainItem(4001126,-200); //200����Ҷ
                    cm.gainItem(1122024,1);
                    cm.sendOk("һ�����صĹ�â��ҫ��������...�������������һ˿˿����");
                    cm.serverNotice("��ޱޱ�������:" + cm.c.getPlayer().getName() + "�����ˡ�ð��֮�ġ��������õ��ˡ���ӡ��ð��֮�ġ���")
                    cm.dispose();
                } else {
                    cm.sendOk("����Ҫð��֮�ĺ�200����Ҷ.\r\n���ȱ��,��û�а취ʹ������."); 
                    cm.dispose();
                }
            }else if  (selection == 11) { //��һ������
                if (cm.haveItem(1122019, 1)&&cm.haveItem(4001126, 200)&&(cm.getMeso() >= 1000000)) { 
                    cm.gainItem(1122019,-1);
                    cm.gainMeso(-2000000);
                    cm.gainItem(4001126,-200); //200����Ҷ
                    cm.gainItem(1122025,1);
                    cm.sendOk("һ�����صĹ�â��ҫ��������...�������������һ˿˿����");
                    cm.serverNotice("��ޱޱ�������:" + cm.c.getPlayer().getName() + "�����ˡ�ð��֮�ġ��������õ��ˡ���ӡ��ð��֮�ġ���")
                    cm.dispose();
                } else {
                    cm.sendOk("����Ҫð��֮�ĺ�200����Ҷ.\r\n���ȱ��,��û�а취ʹ������."); 
                    cm.dispose();
                }
            }else if  (selection == 12) { //��һ������
                if (cm.haveItem(1122019, 1)&&cm.haveItem(4001126, 200)&&(cm.getMeso() >= 1000000)) { 
                    cm.gainItem(1122019,-1);
                    cm.gainMeso(-2000000);
                    cm.gainItem(4001126,-200); //200����Ҷ
                    cm.gainItem(1122026,1);
                    cm.sendOk("һ�����صĹ�â��ҫ��������...�������������һ˿˿����");
                    cm.serverNotice("��ޱޱ�������:" + cm.c.getPlayer().getName() + "�����ˡ�ð��֮�ġ��������õ��ˡ���ӡ��ð��֮�ġ���")
                    cm.dispose();
                } else {
                    cm.sendOk("����Ҫð��֮�ĺ�200����Ҷ.\r\n���ȱ��,��û�а취ʹ������."); 
                    cm.dispose();
                }
            }else if  (selection == 13) { //��һ������
                if (cm.haveItem(1122019, 1)&&cm.haveItem(4001126, 200)&&(cm.getMeso() >= 1000000)) { 
                    cm.gainItem(1122019,-1);
                    cm.gainMeso(-2000000);
                    cm.gainItem(4001126,-200); //200����Ҷ
                    cm.gainItem(1122027,1);
                    cm.sendOk("һ�����صĹ�â��ҫ��������...�������������һ˿˿����");
                    cm.serverNotice("��ޱޱ�������:" + cm.c.getPlayer().getName() + "�����ˡ�ð��֮�ġ��������õ��ˡ���ӡ��ð��֮�ġ���")
                    cm.dispose();
                } else {
                    cm.sendOk("����Ҫð��֮�ĺ�200����Ҷ.\r\n���ȱ��,��û�а취ʹ������."); 
                    cm.dispose();
                }
            }else if  (selection == 14) { //��һ������
                if (cm.haveItem(1122019, 1)&&cm.haveItem(4001126, 200)&&(cm.getMeso() >= 1000000)) { 
                    cm.gainItem(1122019,-1);
                    cm.gainMeso(-2000000);
                    cm.gainItem(4001126,-200); //200����Ҷ
                    cm.gainItem(1122028,1);
                    cm.sendOk("һ�����صĹ�â��ҫ��������...�������������һ˿˿����");
                    cm.serverNotice("��ޱޱ�������:" + cm.c.getPlayer().getName() + "�����ˡ�ð��֮�ġ��������õ��ˡ���ӡ��ð��֮�ġ���")
                    cm.dispose();
                } else {
                    cm.sendOk("����Ҫð��֮�ĺ�200����Ҷ.\r\n���ȱ��,��û�а취ʹ������."); 
                    cm.dispose();
                }
            }else if  (selection == 3) {      
                if (cm.haveItem(1122024, 1)&&cm.haveItem(4001126, 300)&&(cm.getMeso() >= 3000000)) { 
                    cm.gainItem(1122024,-1);
                    cm.gainMeso(-3000000);
                    cm.gainItem(4001126,-300); //300����Ҷ
                    cm.gainItem(1122029,1);
                    cm.sendOk("һ�����صĹ�â��ҫ��������...���������һ˿˿��������СС�ķ���.");
                    cm.serverNotice("��ޱޱ�������:" + cm.c.getPlayer().getName() + "�����ˡ���ӡ��ð��֮�ġ��������õ��ˡ����ѵ�ð��֮�ġ���")
                    cm.dispose();
                }else if (cm.haveItem(1122025, 1)&&cm.haveItem(4001126, 300)&&(cm.getMeso() >= 3000000)){
                    cm.gainItem(1122025,-1);
                    cm.gainMeso(-3000000);
                    cm.gainItem(4001126,-300); //300����Ҷ
                    cm.gainItem(1122030,1);
                    cm.sendOk("һ�����صĹ�â��ҫ��������...���������һ˿˿��������СС�ķ���.");
                    cm.serverNotice("��ޱޱ�������:" + cm.c.getPlayer().getName() + "�����ˡ���ӡ��ð��֮�ġ��������õ��ˡ����ѵ�ð��֮�ġ���")
                    cm.dispose();
                }else if (cm.haveItem(1122026, 1)&&cm.haveItem(4001126, 300)&&(cm.getMeso() >= 3000000)){
                    cm.gainItem(1122026,-1);
                    cm.gainMeso(-3000000);
                    cm.gainItem(4001126,-300); //300����Ҷ
                    cm.gainItem(1122031,1);
                    cm.sendOk("һ�����صĹ�â��ҫ��������...���������һ˿˿��������СС�ķ���.");
                    cm.serverNotice("��ޱޱ�������:" + cm.c.getPlayer().getName() + "�����ˡ���ӡ��ð��֮�ġ��������õ��ˡ����ѵ�ð��֮�ġ���")
                    cm.dispose();
                }else if (cm.haveItem(1122027, 1)&&cm.haveItem(4001126, 300)&&(cm.getMeso() >= 3000000)){
                    cm.gainItem(1122027,-1);
                    cm.gainMeso(-3000000);
                    cm.gainItem(4001126,-300); //300����Ҷ
                    cm.gainItem(1122032,1);
                    cm.sendOk("һ�����صĹ�â��ҫ��������...���������һ˿˿��������СС�ķ���.");
                    cm.serverNotice("��ޱޱ�������:" + cm.c.getPlayer().getName() + "�����ˡ���ӡ��ð��֮�ġ��������õ��ˡ����ѵ�ð��֮�ġ���")
                    cm.dispose();
                }else if (cm.haveItem(1122028, 1)&&cm.haveItem(4001126, 300)&&(cm.getMeso() >= 3000000)){
                    cm.gainItem(1122028,-1);
                    cm.gainMeso(-3000000);
                    cm.gainItem(4001126,-300); //300����Ҷ
                    cm.gainItem(1122033,1);
                    cm.sendOk("һ�����صĹ�â��ҫ��������...���������һ˿˿��������СС�ķ���.");
                    cm.serverNotice("��ޱޱ�������:" + cm.c.getPlayer().getName() + "�����ˡ���ӡ��ð��֮�ġ��������õ��ˡ����ѵ�ð��֮�ġ���")
                    cm.dispose();
                } else {
                    cm.sendOk("����Ҫ��ӡ��ð��֮�ĺ�300����Ҷ.\r\n���ȱ��,��û�а취ʹ������."); 
                    cm.dispose();
                }
            }else if  (selection == 4) { //4000313�ƽ��Ҷ
                if (cm.haveItem(1122029, 1)&&cm.haveItem(4001126, 500)&&cm.haveItem(4000313, 1)&&(cm.getMeso() >= 5000000)) { 
                    cm.gainItem(1122029,-1);
                    cm.gainItem(4000313,-1);
                    cm.gainMeso(-5000000);
                    cm.gainItem(4001126,-500); //300����Ҷ
                    cm.gainItem(1122034,1);
                    cm.sendOk("һ�����صĹ�â��ҫ��������...������������˳��������Ĺ�â.");
                    cm.serverNotice("��ޱޱ�������:" + cm.c.getPlayer().getName() + "�����ˡ����ѵ�ð��֮�ġ��������õ��ˡ����ѵ�ð��֮�ġ�����̫����˼���ˣ�")
                    cm.dispose();
                }else if (cm.haveItem(1122030, 1)&&cm.haveItem(4001126, 500)&&cm.haveItem(4000313, 1)&&(cm.getMeso() >= 5000000)){
                     cm.gainItem(1122030,-1);
                    cm.gainItem(4000313,-1);
                    cm.gainMeso(-5000000);
                    cm.gainItem(4001126,-500); //300����Ҷ
                    cm.gainItem(1122035,1);
                    cm.sendOk("һ�����صĹ�â��ҫ��������...������������˳��������Ĺ�â.");
                    cm.serverNotice("��ޱޱ�������:" + cm.c.getPlayer().getName() + "�����ˡ����ѵ�ð��֮�ġ��������õ��ˡ����ѵ�ð��֮�ġ�����̫����˼���ˣ�")
                    cm.dispose();
                }else if (cm.haveItem(1122031, 1)&&cm.haveItem(4001126, 500)&&cm.haveItem(4000313, 1)&&(cm.getMeso() >= 5000000)){
                     cm.gainItem(1122031,-1);
                    cm.gainItem(4000313,-1);
                    cm.gainMeso(-5000000);
                    cm.gainItem(4001126,-500); //300����Ҷ
                    cm.gainItem(1122036,1);
                    cm.sendOk("һ�����صĹ�â��ҫ��������...������������˳��������Ĺ�â.");
                    cm.serverNotice("��ޱޱ�������:" + cm.c.getPlayer().getName() + "�����ˡ����ѵ�ð��֮�ġ��������õ��ˡ����ѵ�ð��֮�ġ�����̫����˼���ˣ�")
                    cm.dispose();
                }else if (cm.haveItem(1122032, 1)&&cm.haveItem(4001126, 500)&&cm.haveItem(4000313, 1)&&(cm.getMeso() >= 5000000)){
                     cm.gainItem(1122032,-1);
                    cm.gainItem(4000313,-1);
                    cm.gainMeso(-5000000);
                    cm.gainItem(4001126,-500); //300����Ҷ
                    cm.gainItem(1122037,1);
                    cm.sendOk("һ�����صĹ�â��ҫ��������...������������˳��������Ĺ�â.");
                    cm.serverNotice("��ޱޱ�������:" + cm.c.getPlayer().getName() + "�����ˡ����ѵ�ð��֮�ġ��������õ��ˡ����ѵ�ð��֮�ġ�����̫����˼���ˣ�")
                    cm.dispose();
                }else if (cm.haveItem(1122033, 1)&&cm.haveItem(4001126, 500)&&cm.haveItem(4000313, 1)&&(cm.getMeso() >= 5000000)){
                     cm.gainItem(1122033,-1);
                    cm.gainItem(4000313,-1);
                    cm.gainMeso(-5000000);
                    cm.gainItem(4001126,-500); //300����Ҷ
                    cm.gainItem(1122038,1);
                    cm.sendOk("һ�����صĹ�â��ҫ��������...������������˳��������Ĺ�â.");
                    cm.serverNotice("��ޱޱ�������:" + cm.c.getPlayer().getName() + "�����ˡ����ѵ�ð��֮�ġ��������õ��ˡ����ѵ�ð��֮�ġ�����̫����˼���ˣ�")
                    cm.dispose();
                } else {
                    cm.sendOk("��Ĳ��ϲ���...���һ���׶ε�������ǿ��..����������Ǹ���˿..������ֻ��Ǯ.."); 
                    cm.dispose();
                }
            }else if  (selection == 5) {
                cm.openNpc(9030100); 
            }else if  (selection == 6) {
                cm.sendOk("#b��ϷģʽΪ�¹ٷ������Ͷ��ǰ��չٷ��ı�׼��ȡ����ȥ���֮��/��ľ��/��߳ǵ������ȥ������");
                cm.dispose();
            }else if  (selection == 7) {     
                cm.openNpc(1012103);  	     
            }else if  (selection == 8) {
                cm.openNpc(1052004);                  
            }else if  (selection == 9) {  
                var statup = new java.util.ArrayList();
                var p = cm.c.getPlayer();
                if(p.getExp() < 0){
                    p.setExp(0) 
                    statup.add (new net.sf.cherry.tools.Pair(net.sf.cherry.client.MapleStat.EXP, java.lang.Integer.valueOf(0))); 
                    p.getClient().getSession().write (net.sf.cherry.tools.MaplePacketCreator.updatePlayerStats(statup));
                    cm.sendOk("����ֵ���޸����");
                    cm.dispose();
                }else{
                    cm.sendOk("���ľ���ֵ����,�����޸�!");
                    cm.dispose();
                }
            }        
        }
    }
}



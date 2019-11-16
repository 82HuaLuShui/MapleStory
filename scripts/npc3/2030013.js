/* 
 * This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* 
 * @Authors Stereo, xQuasar, <<XkelvinchiaX@Kelvin(For make it Fully Working.)>>
 * 
 * Adobis - El Nath: Entrance to Zakum Altar (211042400)
 * 
 * Start of Zakum Bossfight
 */
 
var status;
var minLevel = 50;
var state;
var maxPlayers = 30;
 
 
function start() {
    status = -1;
    action(1, 0, 0);
}
 
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if ((cm.getPlayer().getLevel() < minLevel)) {
                cm.warp(211042300);
                cm.sendOk("Please come back when you're prepared for the battle. You should not be here yet.");
                cm.dispose();
                return;
            }
            cm.sendSimple("�����Ҫ����Զ������ս������Ҫ�������￪ʼ�����룿 #b\r\n\r\n#L0#����Զ������#l\r\n#L1#�μ�Զ������#l");
        } else if (status == 1) {
            state = selection;
            if (selection == 0)
                cm.sendGetText("�����µ�Զ�����飬����Ҫ����һ�����������Ʋ���Ҫ�Ľ��룡����������������롣��������ϣ������һ��ս�����ˣ�");
            
            else if (selection == 1)
                cm.sendGetText("�����Ҫ������ս�����Ķ��飬����Ҫ�������롣����㲻֪������ʲô��������Ҫ��Ķ����쵼��");
            
        } else if (status == 2) {
            var em = cm.getEventManager("ZakumBattle");
            var passwd = cm.getText();
            if (em == null)
                cm.sendOk("ϵͳ����.���Ժ�����!");
            else {
                if (state == 0) { // Leader
                    if (getEimForString(em,passwd) != null)
                        cm.sendOk("�㲻��ʹ�ô�����!");
                    else { // start Zakum Battle
                        var eim = em.newInstance("Zakum" + passwd);
                        em.startInstance(eim,cm.getPlayer().getName());
                        eim.registerPlayer(cm.getPlayer());
                    }
                }
                if (state == 1) { // Member
                    var eim = getEimForString(em,passwd);
                    if (eim == null)
                        cm.sendOk("Ŀǰ������벢δע���κ�ս����");
                    else {
                        if (eim.getProperty("canEnter").toLowerCase() == "true") {
                            if (eim.getPlayers().size() < maxPlayers)
                                eim.registerPlayer(cm.getPlayer());
                            else
                                cm.sendOk("�Բ���,�����Ѿ���Ա��!");
                        }
                        else 
                            cm.sendOk("�Բ���,�����Ѿ���ʼ����ս�����������ս��!");
                    }
                }
            }
            cm.dispose();
        }
    }
}
function getEimForString(em, name) {
    var stringId = "Zakum" + name;
    return em.getInstance(stringId);
}
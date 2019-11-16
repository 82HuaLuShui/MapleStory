/*
======================================
 ���Ķ˼���  ����ռ���ʽ����
======================================
*/
var compchoice; 
var playerchoice; 
var Frock = "#fUI/UIWindow.img/RpsGame/Frock#"; 
var Fpaper = "#fUI/UIWindow.img/RpsGame/Fpaper#"; 
var Fscissor = "#fUI/UIWindow.img/RpsGame/Fscissor#"; 
var rock = "#fUI/UIWindow.img/RpsGame/rock#"; 
var paper = "#fUI/UIWindow.img/RpsGame/paper#"; 
var scissor = "#fUI/UIWindow.img/RpsGame/scissor#"; 
var win = "#fUI/UIWindow.img/RpsGame/win#"; 
var lose = "#fUI/UIWindow.img/RpsGame/lose#"; 
var draw = "#fUI/UIWindow.img/RpsGame/draw#"; 
var spacing = "                                   "; 
var beta = "#fUI/UIWindow.img/BetaEdition/BetaEdition#\r\n"; 
var status = -1;
var winmatch = false; 
var losematch = false 
var drawmatch = false; 
var cost = 5000; //��Ҫ����Ǯ�棬�����.. �����Լ��ġ���
var winmesos = 10000000; //ӮǮ�������Լ���
var items = new Array(4000007, 4000006, 4000005); //�Դ����ƣ���Щ��������������Ӯ��������������д����Щ��������ӵģ�����Ҫ�Լ��ĵ����Ҳ�֪����û����Щ����..

function start() { 
    cm.sendNext(beta + "���#b"+cm.getName()+"#k��ӭ������26���ȭ�����ܾ���~!"); //do not remove 
} 
function action(mode, type, selection) {
    if (mode != 1) {
        if (status == 1)
            cm.sendOk("�������뱾��ھ���Ե!"); 
        cm.dispose();
        return;
    } else
        status++;
    if (status == 0) { 
        if (cm.getMeso() < cost) {
            cm.sendOk("����Ҫ" + cost + "��Ҳſ����棡");
            cm.dispose();
        } else
            cm.sendAcceptDecline("������ս��ȭ��Ϸ��?");
    } else if (status == 1) { 
        cm.sendSimple("��ѡ��һ��...\r\n" 
        + "#L0##fUI/UIWindow.img/RpsGame/Frock##l" 
        + "#L1##fUI/UIWindow.img/RpsGame/Fpaper##l" 
        + "#L2##fUI/UIWindow.img/RpsGame/Fscissor##l" 
        ); 
    } else if (status == 2) { 
        if (selection == 0) { 
            playerchoice = "rock"; 
        } else if (selection == 1) { 
            playerchoice = "paper"; 
        } else if (selection == 2) { 
            playerchoice = "scissor"; 
        } 
        var random = Math.floor(Math.random()*4); 
        if (random <= 1) { 
            compchoice = "rock"; 
        } else if (random <= 2) { 
            compchoice = "paper"; 
        } else if (random <= 4) { 
            compchoice = "scissor"; 
        } 
        cm.sendNext("�����..."); //������Ը�
    } else if (status == 3) { 
        if (playerchoice == "rock" && compchoice == "rock") { 
            cm.sendOk(Frock + spacing + rock + draw); 
            drawmatch = true; 
            cm.gainMeso(-cost);
        } else if (playerchoice == "rock" && compchoice == "paper") { 
            cm.sendOk(Frock + spacing + paper + lose); 
            losematch = true; 
            cm.gainMeso(-cost);
        } else if (playerchoice == "rock" && compchoice == "scissor") { 
            cm.sendOk(Frock + spacing + scissor + win); 
            winmatch = true; 
            cm.gainMeso(winmesos);
           cm.gainItem(items[Math.floor(Math.random() * items.length)]);
        } else if (playerchoice == "paper" && compchoice == "rock") { 
            cm.sendOk(Fpaper + spacing + rock + win); 
            winmatch = true; 
            cm.gainMeso(winmesos);
            cm.gainItem(items[Math.floor(Math.random() * items.length)]);
        } else if (playerchoice == "paper" && compchoice == "paper") { 
            cm.sendOk(Fpaper + spacing + paper + draw); 
            drawmatch = true; 
            cm.gainMeso(-cost);
        } else if (playerchoice == "paper" && compchoice == "scissor") { 
            cm.sendOk(Fpaper + spacing + scissor + lose); 
            losematch = true; 
            cm.gainMeso(-cost);
        } else if (playerchoice == "scissor" && compchoice == "rock") { 
            cm.sendOk(Fscissor + spacing + rock + lose); 
            losematch = true; 
            cm.gainMeso(-cost);
        } else if (playerchoice == "scissor" && compchoice == "paper") { 
            cm.sendOk(Fscissor + spacing + paper + win); 
            winmatch = true; 
            cm.gainMeso(winmesos);
            cm.gainItem(items[Math.floor(Math.random() * items.length)]);
        } else if (playerchoice == "scissor" && compchoice == "scissor") { 
            cm.sendOk(Fscissor + spacing + scissor + draw); 
            drawmatch = true; 
            cm.gainMeso(-cost);
        } else { 
            cm.sendOk("Error"); 
        }
    }else if (status == 4) {
            cm.dispose();
        }
    }
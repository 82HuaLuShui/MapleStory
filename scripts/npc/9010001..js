var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || status == 4) {
        cm.dispose();
    } else {
        if (status == 2 && mode == 0) {
            cm.sendOk("����Ҫ��ȡ�����������Ұɣ�");
            status = 4;
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("�װ���#b�� #h #��#k��ã�����������̫�����ˣ��Ҹ����VIP���ÿ�����͹��ʵģ����ȷ������#r VIP��� #k�뵽����������ȡ���ʣ�����Ҫ�������ң�");
        } else if (status == 1) {            
            cm.sendYesNo("#e#b����VIPÿ�������ȡ1E�����!#k\r\n#g�м�VIPÿ�������ȡ2.5E�����!#k\r\n#r�߼�VIPÿ�������ȡ5E�����!#k\r\n��ȷ����ȡ����Ĺ�����??#k");
        } else if (status == 2) {
            if(cm.getChar().) {
            cm.sendOk("�Բ���#b �㲻��VIP��Ա #k�޷���ȡ���ʡ�\r\n����Ҫ����ϵ����Ա#r QQ��2848268 #k����VIP��Ա��");
            } else if (cm.getBossLog('VIPGZ') >=999) {
            cm.sendOk("��Ǹ����VIP�������켺����ȡ���ʣ��������������Ұɣ�");
            } else if(cm.getChar().getNX() < 200) {
            cm.gainMeso(100000000);
            cm.setBossLog('VIPGZ');
            cm.sendOk("��ϲ����ȡ����Ĺ���1E����ң����������˵����");
            } else if(cm.getChar().getNX() < 300) {
            cm.gainMeso(250000000);
            cm.setBossLog('VIPGZ');
            cm.sendOk("��ϲ����ȡ����Ĺ���2.5E����ң����������˵����");
            } else if(cm.getChar().getNX() < 400) {
            cm.gainMeso(5000000000);
            cm.setBossLog('VIPGZ');
            cm.sendOk("��ϲ����ȡ����Ĺ���5E����ң����������˵����");
            }
            cm.dispose();
        }
    }    } 
/*
��Ҷ�������
*/

var ������׹ = 1032031;//�����Σ� 
var ��ӡ����������= 1122011;//�������� 
var �������� = 1122012;//�������� 
var ���㲻������=1102172;//�����磩 
//սʿ 
//����
var ����ھ��� = 1002776;
var ���������� = 1052155;
var ������ѥ = 1072355;
var ���㶨������ = 1082234;
var ���㺮���� = 1092058;
//���� 
var �����Ƽ׽�=1302081;
var ������Ÿ�=1312037;
var ���㾪����=1322060;
var ������ڤ��=1402046;
var ����������=1412033;
var ����������=1422037;
var ������ʥǹ=1432047;
var ��������=1442063;
//ħ��ʦ 
//���� 
var ��������ñ=1002777;
var ���������=1052156;
var �������Ь=1072356;
var ������ң����=1082235;
var ����ħ���=1092057;
//���� 
var ���������=1372044;//�����ȣ� 
var ���������=1382057;//�����ȣ� 
//������ 
//���� 
var ��������ñ=1002778;
var ����Ѳ����=1052157;
var ����ʺ�Ь=1072357;
var �����������=1082236;
//���� 
var ���㾪�繭=1452057;
var ����ڤ����=1462050;
//���� 
//���� 
var ��������ñ=1002779;
var ���㷭�Ʒ�=1052158;
var �������ѥ=1072358;
var ����̽������=1082237;
var �������ٶ�=1092059;
//���� 
var ��������=1332073;//�����̵��� 
var ���������=1332074;//���˶̵��� 
var ����󱯸�=1472068;//��ȭ�ף� 
//���� 
//���� 
var ���㺣����=1002780;
var ������ߺ�=1052159;
var ���㶨��ѥ=1072359;
var ���㸧������=1082238;
//���� 
var �����ȸ��=1482023;//��ȭ�ף� 
var �������=1492023;//����ǹ�� 
//����
var ����ķ�������=1132013;
var �ں�����=1132004;
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
            cm.sendSimple("�������Ҷ���Ի������/��Ʒ��\r\n#r�һ�������װ��ʱ����ѱ���������15�����ϣ�#k\r\n#r�һ�������װ��ʱ����ѱ���������15�����ϣ�#k\r\n#b#L0#300��#v4002001#�һ�#v1122019##l\r\n\#L1#100��#v4002002#�һ�#v1012077##l\r\n\#L2#300��#v4002002#1��#v1012077#20��#v4032056#�һ�#v1012079##l#l\r\n\#L3#600��#v4002002#1��#v1012079#60��#v4032056#�һ�#v1012078##l\r\n\#L4#1000��#v4002002#1��#v1012078#100��#v4032056#�һ�#v1012076##l#k\r\n\#L5#300��#v4002003#�һ�Ӣ��������װ#l\r\n\#L6#300��#v4002003#�һ�ʥ��ʿ������װ#l\r\n\#L7#300��#v4002003#�һ�����ʿ������װ#l\r\n\#L8#300��#v4002003#�һ�ħ��ʦ(����)������װ#l\r\n\#L9#300��#v4002003#�һ�ħ��ʦ(����)������װ#l\r\n\#L10#300��#v4002003#�һ�������������װ#l\r\n\#L11#300��#v4002003#�һ�����������װ#l\r\n\#L12#300��#v4002003#�һ����������װ#l\r\n\#L13#300��#v4002003#�һ�����������װ#l\r\n\#L14#300��#v4002003#�һ�����������װ#l\r\n\#L15#300��#v4002003#�һ�ȭ��������װ#l\r\n\#L16#300��#v4002003#�һ�ս��������װ#l\r\n\#L17#100��#v4002003##v4002001#�һ��ں�����#l\r\n\#L18#300��#v4002003##v4002001#�һ�����ķ�������#l");
        } else if (status == 1) {
            if (selection == 0) {
                if(cm.haveItem(4002001,300)){  //��ţ��Ʊ�һ�ð��֮��
                    cm.gainItem(1122019,1);
                    cm.gainItem(4002001,-300);
                    cm.sendOk("��ϲ��ɹ���");
                    cm.dispose();
                }else{
                    cm.sendOk("�����Ʊ���㡣");
                    cm.dispose();
                }
            } else if (selection == 1) { //ľ����Ʊ�һ������ļ���HP+1000
                if(cm.haveItem(4002002,100)){
                    cm.gainItem(4002002,-100);
                    cm.gainItem(1012077,1);
                    cm.sendOk("��ϲ�㻻���˿�����");
                    cm.dispose();
                }else{
                    cm.sendOk("��û���Ѽ����㹻����Ʊ");
                    cm.dispose();
                }
            } else if (selection == 2) { //ľ����Ʊ�һ����Ƶļ���HP+2000 MP+1000
                if(cm.haveItem(4002002,300) && cm.haveItem(1012077,1) && cm.haveItem(4032056,20)){
                    cm.gainItem(4002002,-300);
                    cm.gainItem(4032056,-20);
                    cm.gainItem(1012077,-1);
                    cm.gainItem(1012079,1);
                    cm.sendOk("��ϲ�㻻�������Ƶļ��档");
                    cm.dispose();
                }else{
                    cm.sendOk("��û���Ѽ����㹻����Ʊ��һ�߿���������߷�Ҷ��");
                    cm.dispose();
                }
            } else if (selection == 3) { //ľ����Ʊ�һ������ļ���HP+3500 MP+1500
                if(cm.haveItem(4002002,600) && cm.haveItem(1012079,1) && cm.haveItem(4032056,60)){
                    cm.gainItem(4002002,-600);
                    cm.gainItem(4032056,-60);
                    cm.gainItem(1012079,-1);
                    cm.gainItem(1012078,1);
                    cm.sendOk("��ϲ�㻻���������ļ��档");
                    cm.dispose();
                }else{
                    cm.sendOk("��û���Ѽ����㹻����Ʊ��һ�����Ƶļ�����߷�Ҷ��");
                    cm.dispose();
                }
            } else if (selection == 4) { //ľ����Ʊ�һ����ĵļ���HP+6000 MP+4500
                if(cm.haveItem(4002002,1000) && cm.haveItem(1012078,1) && cm.haveItem(4032056,100)){
                    cm.gainItem(4002002,-1000);
                    cm.gainItem(4032056,-100);
                    cm.gainItem(1012078,-1);
                    cm.gainItem(1012076,1);
                    cm.sendOk("��ϲ�㻻���˿��ĵļ��档");
                    cm.dispose();
                }else{
                    cm.sendOk("��û���Ѽ����㹻����Ʊ��һ������������߷�Ҷ��");
                    cm.dispose();
                }
            } else if (selection == 5) { //Ӣ��������װ
                if(cm.haveItem(4002003,300)){
                    cm.gainItem(4002003,-300);
                    cm.gainItem(������׹,1);
                    //cm.gainItem(��ӡ����������,1);
                    cm.gainItem(��������,1);
                    cm.gainItem(���㲻������,1);
                    
                    cm.gainItem(����ھ���,1);
                    cm.gainItem(����������,1);
                    cm.gainItem(������ѥ,1);
                    cm.gainItem(���㶨������,1);
                    cm.gainItem(���㺮����,1);
                    cm.gainItem(������ڤ��,1);
                    cm.sendOk("��ϲ�㻻����Ӣ��������װ��");
                    cm.dispose();
                }else{
                    cm.sendOk("��û���Ѽ����㹻����Ʊ");
                    cm.dispose();
                }
            } else if (selection == 6) {//ʥ��ʿ������װ
                if(cm.haveItem(4002003,300)){
                    cm.gainItem(4002003,-300);
                    cm.gainItem(������׹,1);
                    //cm.gainItem(��ӡ����������,1);
                    cm.gainItem(��������,1);
                    cm.gainItem(���㲻������,1);
                    
                    cm.gainItem(����ھ���,1);
                    cm.gainItem(����������,1);
                    cm.gainItem(������ѥ,1);
                    cm.gainItem(���㶨������,1);
                    cm.gainItem(���㺮����,1);
                    cm.gainItem(���㾪����,1);
                    cm.sendOk("��ϲ�㻻����ʥ��ʿ������װ��");
                    cm.dispose();
                }else{
                    cm.sendOk("��û���Ѽ����㹻����Ʊ");
                    cm.dispose();
                }
            } else if (selection == 7) {//����ʿ������װ
                if(cm.haveItem(4002003,300)){
                    cm.gainItem(4002003,-300);
                    cm.gainItem(������׹,1);
                    //cm.gainItem(��ӡ����������,1);
                    cm.gainItem(��������,1);
                    cm.gainItem(���㲻������,1);
                    
                    cm.gainItem(����ھ���,1);
                    cm.gainItem(����������,1);
                    cm.gainItem(������ѥ,1);
                    cm.gainItem(���㶨������,1);
                    cm.gainItem(������ʥǹ,1);
                    cm.sendOk("��ϲ�㻻���˺���ʿ������װ��");
                    cm.dispose();
                }else{
                    cm.sendOk("��û���Ѽ����㹻����Ʊ");
                    cm.dispose();
                }
            } else if (selection == 8) { //ħ��ʦ(����)������װ
                if(cm.haveItem(4002003,300)){
                    cm.gainItem(4002003,-300);
                    cm.gainItem(������׹,1);
                    //cm.gainItem(��ӡ����������,1);
                    cm.gainItem(��������,1);
                    cm.gainItem(���㲻������,1);
                    
                    cm.gainItem(��������ñ,1);
                    cm.gainItem(���������,1);
                    cm.gainItem(�������Ь,1);
                    cm.gainItem(������ң����,1);
                    cm.gainItem(����ħ���,1);
                    cm.gainItem(���������,1);
                    cm.sendOk("��ϲ�㻻����ħ��ʦ(����)������װ��");
                    cm.dispose();
                }else{
                    cm.sendOk("��û���Ѽ����㹻����Ʊ");
                    cm.dispose();
                }
            } else if (selection == 9) { //ħ��ʦ(����)������װ
                if(cm.haveItem(4002003,300)){
                    cm.gainItem(4002003,-300);
                    cm.gainItem(������׹,1);
                    //cm.gainItem(��ӡ����������,1);
                    cm.gainItem(��������,1);
                    cm.gainItem(���㲻������,1);
                    
                    cm.gainItem(��������ñ,1);
                    cm.gainItem(���������,1);
                    cm.gainItem(�������Ь,1);
                    cm.gainItem(������ң����,1);
                    cm.gainItem(����ħ���,1);
                    cm.gainItem(���������,1);
                    cm.sendOk("��ϲ�㻻����ħ��ʦ(����)������װ��");
                    cm.dispose();
                }else{
                    cm.sendOk("��û���Ѽ����㹻����Ʊ");
                    cm.dispose();
                }
            } else if (selection == 10) { //������������װ
                if(cm.haveItem(4002003,300)){
                    cm.gainItem(4002003,-300);
                    cm.gainItem(������׹,1);
                    //cm.gainItem(��ӡ����������,1);
                    cm.gainItem(��������,1);
                    cm.gainItem(���㲻������,1);
                    
                    cm.gainItem(��������ñ,1);
                    cm.gainItem(����Ѳ����,1);
                    cm.gainItem(����ʺ�Ь,1);
                    cm.gainItem(�����������,1);
                    cm.gainItem(���㾪�繭,1);
                    cm.sendOk("��ϲ�㻻���˹�����������װ��");
                    cm.dispose();
                }else{
                    cm.sendOk("��û���Ѽ����㹻����Ʊ");
                    cm.dispose();
                }
            } else if (selection == 11) { //����������װ
                if(cm.haveItem(4002003,300)){
                    cm.gainItem(4002003,-300);
                    cm.gainItem(������׹,1);
                    //cm.gainItem(��ӡ����������,1);
                    cm.gainItem(��������,1);
                    cm.gainItem(���㲻������,1);
                    
                    cm.gainItem(��������ñ,1);
                    cm.gainItem(����Ѳ����,1);
                    cm.gainItem(����ʺ�Ь,1);
                    cm.gainItem(�����������,1);
                    cm.gainItem(����ڤ����,1);
                    cm.sendOk("��ϲ�㻻��������������װ��");
                    cm.dispose();
                }else{
                    cm.sendOk("��û���Ѽ����㹻����Ʊ");
                    cm.dispose();
                }
            } else if (selection == 12) { //���������װ
                if(cm.haveItem(4002003,300)){
                    cm.gainItem(4002003,-300);
                    cm.gainItem(������׹,1);
                    //cm.gainItem(��ӡ����������,1);
                    cm.gainItem(��������,1);
                    cm.gainItem(���㲻������,1);
                    
                    cm.gainItem(��������ñ,1);
                    cm.gainItem(���㷭�Ʒ�,1);
                    cm.gainItem(�������ѥ,1);
                    cm.gainItem(����̽������,1);
                    cm.gainItem(����󱯸�,1);
                    cm.sendOk("��ϲ�㻻���˱��������װ��");
                    cm.dispose();
                }else{
                    cm.sendOk("��û���Ѽ����㹻����Ʊ");
                    cm.dispose();
                }
            } else if (selection == 13) { //����������װ
                if(cm.haveItem(4002003,300)){
                    cm.gainItem(4002003,-300);
                    cm.gainItem(������׹,1);
                    //cm.gainItem(��ӡ����������,1);
                    cm.gainItem(��������,1);
                    cm.gainItem(���㲻������,1);
                    
                    cm.gainItem(��������ñ,1);
                    cm.gainItem(���㷭�Ʒ�,1);
                    cm.gainItem(�������ѥ,1);
                    cm.gainItem(����̽������,1);
                    cm.gainItem(���������,1);
                    cm.sendOk("��ϲ�㻻���˱��������װ��");
                    cm.dispose();
                }else{
                    cm.sendOk("��û���Ѽ����㹻����Ʊ");
                    cm.dispose();
                }
            } else if (selection == 14) { //����������װ
                if(cm.haveItem(4002003,300)){
                    cm.gainItem(4002003,-300);
                    cm.gainItem(������׹,1);
                    //cm.gainItem(��ӡ����������,1);
                    cm.gainItem(��������,1);
                    cm.gainItem(���㲻������,1);
                    
                    cm.gainItem(���㺣����,1);
                    cm.gainItem(������ߺ�,1);
                    cm.gainItem(���㶨��ѥ,1);
                    cm.gainItem(���㸧������,1);
                    cm.gainItem(�������,1);
                    cm.sendOk("��ϲ�㻻���˴���������װ��");
                    cm.dispose();
                }else{
                    cm.sendOk("��û���Ѽ����㹻����Ʊ");
                    cm.dispose();
                }
            } else if (selection == 15) { //ȭ��������װ
                if(cm.haveItem(4002003,300)){
                    cm.gainItem(4002003,-300);
                    cm.gainItem(������׹,1);
                    //cm.gainItem(��ӡ����������,1);
                    cm.gainItem(��������,1);
                    cm.gainItem(���㲻������,1);
                    
                    cm.gainItem(���㺣����,1);
                    cm.gainItem(������ߺ�,1);
                    cm.gainItem(���㶨��ѥ,1);
                    cm.gainItem(���㸧������,1);
                    cm.gainItem(�����ȸ��,1);
                    cm.sendOk("��ϲ�㻻����ȭ��������װ��");
                    cm.dispose();
                }else{
                    cm.sendOk("��û���Ѽ����㹻����Ʊ");
                    cm.dispose();
                }
            } else if (selection == 16) { //ս��������װ
                if(cm.haveItem(4002003,300)){
                    cm.gainItem(4002003,-300);
                    cm.gainItem(������׹,1);
                    //cm.gainItem(��ӡ����������,1);
                    cm.gainItem(��������,1);
                    cm.gainItem(���㲻������,1);
                    
                    cm.gainItem(����ھ���,1);
                    cm.gainItem(����������,1);
                    cm.gainItem(������ѥ,1);
                    cm.gainItem(���㶨������,1);
                    cm.gainItem(��������,1);
                    cm.sendOk("��ϲ�㻻����ս��������װ��");
                    cm.dispose();
                }else{
                    cm.sendOk("��û���Ѽ����㹻����Ʊ");
                    cm.dispose();
                }
            } else if (selection == 17) { //�ں�����
                if(cm.haveItem(4002003,100) && cm.haveItem(4002001,100)){
                    cm.gainItem(4002003,-100);
                    cm.gainItem(4002001,-100);
                    cm.gainItem(�ں�����,1);
                    cm.sendOk("��ϲ�㻻���˺ں�������");
                    cm.dispose();
                }else{
                    cm.sendOk("��û���Ѽ����㹻����Ʊ");
                    cm.dispose();
                }
            } else if (selection == 18) { //����ķ�������
                if(cm.haveItem(4002003,100) && cm.haveItem(4002001,100)){
                    cm.gainItem(4002003,-100);
                    cm.gainItem(4002001,-100);
                    cm.gainItem(����ķ�������,1);
                    cm.sendOk("��ϲ�㻻���˲���ķ���������");
                    cm.dispose();
                }else{
                    cm.sendOk("��û���Ѽ����㹻����Ʊ");
                    cm.dispose();
                }
            } 
        }
    }
}



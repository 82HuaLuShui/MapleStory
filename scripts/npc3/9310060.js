/*
 * 
 * @ѩ֮��ð��
 * @����ѫ�� - ��Ҷ
 */


importPackage(net.sf.cherry.client);

var status = 0;
var zones = 0;
var ItemId =Array(
                                                                         //Array(142000,500,"��ʵ��ð�ռ�ѫ��"), //��һ������ƷID  �ڶ�������Ҫ�ķ�Ҷ�������������޸ġ�
                                                                 	 Array(1142001,200,"����������ѫ��"),
									 Array(1142002,200,"�������ѫ��"),
									 Array(1142003,220,"��������ѫ��"),
									 Array(1142004,300,"�ڷ�ð�ռ�ѫ��"),
                                                                         Array(1142005,400,"��˵�е�ð�ռ�ѫ��"),
                                                                         Array(1142006,500,"ð�յ�ż��ѫ��"),
                                                                         Array(1142014,500,"���ִ尮��ѫ��"),
                                                                         Array(1142015,500,"ħ�����ְ���ʹ��ѫ��"),
                                                                         Array(1142016,500,"��ʿ���䰮��ʹ��ѫ��"),
                                                                         Array(1142017,500,"�������а���ʹ��ѫ��"),
                                                                         Array(1142018,500,"����֮�ǰ���ʹ��ѫ��"),
                                                                         Array(1142019,500,"ŵ����˹����ʹ��ѫ��"),
                                                                         Array(1142020,500,"ŵ����˹����ʹ��ѫ��"),
                                                                         Array(1142021,500,"ˮ�����簮��ʹ��ѫ��"),
                                                                         Array(1142022,500,"ˮ�����簮��ʹ��ѫ��"),
                                                                         Array(1142023,500,"���������������ʹ��ѫ��"),
                                                                         Array(1142024,500,"ͯ���尮��ʹ��ѫ��"),
                                                                         Array(1142025,800,"��ľ�尮��ʹ��ѫ��"),
                                                                         Array(1142026,500,"���갮��ʹ��ѫ��"),
                                                                         Array(1142027,800,"�ٲ��ð���ʹ��ѫ��"),
                                                                         Array(1142077,800,"���껪���ѫ��"),
                                                                         Array(1142078,500,"���갮��ʹ��ѫ��"),
                                                                         Array(1142080,800," ���껪��Ѫѫ��"),
                                                                         Array(1142173,800,"ð�յ����ʦѫ��"),
                                                                         Array(1142175,800,"ð�յ�������ѫ��"),
                                                                         Array(1142176,500,"ð�յ���ѧ��ѫ��"),
                                                                         Array(1142179,5000," �����ղؼ�ѫ��")
									 //�����������߶һ����밴�մ˸�ʽ�������á�
);

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
			if(cm.getBossLog('MogoQuest') < 1 ){
			 cm.sendNext("���ã�#r " + cm.getPlayer().getName() + "#k �����԰��Ҹ�æ��?");
			 zones = 1;
			}else if(!cm.haveItem(4001126) || !cm.haveItem(4001126,50)){
					if(!cm.haveItem(4001126)){
						cm.sendOk("��ʲôʱ��ȥ���Ҵ��ռ�һЩ��Ҷ������");
						cm.dispose()
					}else{
						cm.sendOk("��ôһ��㲻����,���ܲ��ܰ��Ҷ���һЩ��!");
						cm.dispose();
					}
			}else{
				StringS = "��!�����Ҽ�����ô���Ҷ,����Ҫʲô������? ��ѡ������Ҫ�һ��ĵ���";
				for (var i = 0; i < ItemId.length; i++){
					StringS += "\r\n#L" + i + "##b#z" + ItemId[i][0] + "##k (��Ҫ#r " + ItemId[i][1] + " #k��  #d#z4001126##k)";
				}
				cm.sendSimple(StringS);	
				zones == 0;
			}
		} else if (status == 1) {
			if(zones == 1){
				cm.sendNext("�����Ұ�����ʲô�أ�",2);
				zones = 2;
			}else if(zones ==0){
				if (cm.getPlayer().getItemQuantity(4001126,false) >= ItemId[selection][1]){				
					cm.gainItem(ItemId[selection][0],1);
					cm.gainItem(4001126,-(ItemId[selection][1]));
					cm.sendOk("�һ��ɹ�����챳��!");
					cm.dispose();
				}else{
					cm.sendOk("��û���㹻�ķ�Ҷˮ����#v4032056#���ڶһ�");
					cm.dispose();
				}
			}
		}else if (status == 2){
			if(zones == 2){
				cm.sendNext("������������ħ���ķ�Ҷ��һȺĢ����͵����,���ܰ�ȥ��������");
				zones = 3;
			}
		}else if(status == 3){
			if(zones ==3){
					cm.sendNext("��,���û���⣿���������Щ͵�����Ҷ��Ģ����������ʲô�ط���?",2);
					zones = 4;
			}
		}else if(status == 4){
			if(zones == 4){
				cm.sendNext("�����Ʒ��#bȫ�������#k�ġ�������������ϵ�#b�κ�һ������#k�ϻ�ȡ��");
				zones = 5;
			}
		}else if(status == 5){
			if(zones == 5){
				cm.sendYesNo("������ܰ��������æ�Ļ�,�һ����һЩ���Ľ����ģ����Ƿ�Ը����ң�");
			}
		}else if(status == 6){
			cm.setBossLog('MogoQuest');
			cm.gainItem(5220001,1);
			cm.sendOk("�ǳ���л����ú����˵�������ܻ�����Ʒ�ˣ�");
			cm.dispose();
		}
	}
}	

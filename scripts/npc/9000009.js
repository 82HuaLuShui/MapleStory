
var status = 0;
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
			
				cm.sendSimple("�Ƿ�����������أ����������õ����Ŷ��\r\n#r�˻��ۼƳ�ֵ��:"+cm.getcz()+"����ң�\r\n#L0#��ȡ���");
			
				}else{
				cm.sendOk("�����㲢û�����������޷���ȡ���");
				cm.dispose();
				}
			}
		}
	}
}

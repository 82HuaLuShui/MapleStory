var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 3);
    cal.set(java.util.Calendar.MINUTE, 50);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 5;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
scheduleNew();
var Message = new Array(" ���λ���ע����.�벻Ҫ����3ֻ��ͬ����������������������ʹ�� ���ϵ��� ����!",
	                " ��Ϸ�У�������������д���ļ��ܵ��±����ҵ��ߣ������ܵ��ͷ� ",
	                " ��Ϸ�ڣ����еĶ�������Ҫ���Լ���Ŭ���õ���GM������κ�����κζ��� ",
                        " ����ʹ�����·Ƿ����򣺱��ٳ���,����,�޵�,���MISS,�޸�WZ,�޸Ĺ���״̬,�һ������,���������ŷ�IP ",
                        " NCMS - �̲�2.0����ҵ�� ",
                        " ���������Գ��ڽ׶�,�еĶ�����δ����,ϣ����λ����ܽ����ĺý����ṩ���ͷ�,ͬʱ�������Ľ����,���ǲ�����Ҳ��䷢��Ӧ���� ",
                        " �����ѿ������������ӡ������ܡ��İ�ʨ����������������������(������)��BOSS�����ٻ�����ӭ��Ҳ�����ս!",
                        " ������Ϸ����ط�(BUG)����Ϸ©��ʱ.���һʱ���ύ�����߹���.�緢��BUG���ύ��������ϷBUG�Ƿ��������Ʒ�Ʋ������ڷ�Ŵ��������ύ�ش�BUG����ң����ǽ�������ȯ���� ");
	em.getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0, Message[Math.floor(Math.random() * Message.length)]));
}

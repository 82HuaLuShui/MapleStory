var setupTask;

function init() {
	scheduleNew();
}

function scheduleNew() {
	setupTask = em.schedule("start", 1000 * 60*3);
}

function cancelSchedule() {
	setupTask.cancel(true);
}

function start() {
	scheduleNew();
var Message = new Array("����в���ĵط���������������и��õĽ���Ҳ�������һ���������ǵķ�Ҷ����!",
"������һ��ܾ���ң�һ��Я�ִ������õ�ð�ջ�����",
"ף����ܹ���Ŀ��ģ����ѳ�Ⱥ!",
"����Ϸ���������������BUG�뼰ʱ�ύ��һ�����������ǵ�����!");
	em.getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0,Message[Math.floor(Math.random() * Message.length)]));
}

/* 
 * �Զ������ɫ����
 */

var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    setupTask = em.schedule("start", 1000 * 60 * 1); //10���ӱ���1��
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
    em.getChannelServer().saveAll();
}
@echo off
@title ССð�յ������������ϣ�
set CLASSPATH=.;dist\*
java -Xmx1024m -Dnet.sf.odinms.recvops=recvops.properties -Dnet.sf.odinms.sendops=sendops.properties -Dnet.sf.odinms.wzpath=wz\ -Dnet.sf.odinms.channel.config=���������.properties -Djavax.net.ssl.keyStore=scripts\Keys\filename.keystore -Djavax.net.ssl.keyStorePassword=passwd -Djavax.net.ssl.trustStore=scripts\Keys\filename.keystore -Djavax.net.ssl.trustStorePassword=passwd net.sf.odinms.net.channel.ChannelServer -Dcom.sun.management.jmxremote.port=13373 -Dcom.sun.management.jmxremote.password.file=jmxremote.password -Dcom.sun.management.jmxremote.access.file=jmxremote.access
pause
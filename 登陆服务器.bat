@echo off
@title ССð�յ�����: ��¼��������������~
set CLASSPATH=.;dist\*
java -Xmx512m -Dnet.sf.odinms.recvops=recvops.properties -Dnet.sf.odinms.sendops=sendops.properties -Dnet.sf.odinms.wzpath=wz\ -Dnet.sf.odinms.login.config=���������.properties -Djavax.net.ssl.keyStore=scripts\Keys\filename.keystore -Djavax.net.ssl.keyStorePassword=passwd -Djavax.net.ssl.trustStore=scripts\Keys\filename.keystore -Djavax.net.ssl.trustStorePassword=passwd net.sf.odinms.net.login.LoginServer
pause
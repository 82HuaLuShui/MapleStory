/*
	Mady By Coffee
	Powered By XXMS
	Warp NPC
*/
var ttmaps = Array( 
                                        Array(105040316,10,"��˯ɭ������"),	
										Array(103000900,10,"��������������"), 
										Array(109040001,10,"ð�յ������"),     
										Array(280020000,10,"��ɽ����"), 
										Array(101000100,10,"�̿�����") 
										);
var bossmaps = Array( 
                                                                                Array(100000005,10,"Ģ����"),													        Array(105070002,10,"��ʬĢ����"), 
										Array(105090900,10,"���������Ժ"),     
										Array(105090900,10,"��Ģ����"), 
										Array(230040420,100,"Ƥ��ū˹��Ѩ"), 
										Array(211042300,200,"�������"), 
										Array(220080000,100,"ʱ�����ı�Դ"), 
										Array(240020402,10,"�������Ϣ��"), 
										Array(240020101,10,"����Ҷ�ɭ��"),   
										Array(270050000,500,"��Ļƻ�:��PB��"),
										Array(551030100,200,"��ɭ�������:���ܺ�ʨ��"),
										Array(541020700,200,"�����������ż�I:������"),
										Array(240040700,300,"����֮Ѩ���:��������"),
										Array(702070400,100,"�ؾ����߲�:������ɮ")
										);
var monstermaps = Array(
                                                                                Array(100040001,10,"�ϲ�ɭ��ѵ������8��-15��"),
										Array(101010100,10,"��ľ�֢�8��-15��"), 
										Array(104040000,10,"����ѵ���� 1��-15��"), 
										Array(103000101,50,"����һ����<��1����> 20��-30��"), 
										Array(103000105,50,"����һ����<��4����> 50��-70��"), 
										Array(101030110,100,"��1��Ӫ"), 
										Array(106000002,100,"Σ�յ�Ͽ�Ȣ�"), 
										Array(101030103,100,"�ż�����آ�"), 
										Array(101040001,100,"Ұ������� 20��-35��"), 
										Array(101040003,100,"��֮�ڹ�֮��"), 
										Array(101030001,50,"Ұ���������"), 
										Array(104010001,10,"��ĺ��� 10��-20��"), 
										Array(105070001,50,"���Ϲ㳡 20��-40��"), 
										Array(105090300,50,"��Ѩ"), 
										Array(105040306,100,"����֮�� 60��-80��"), 
										Array(230020000,100,"������·"), 
										Array(230010400,100,"������·"), 
										Array(211041400,200,"����֮�֢�"), 
										Array(222010000,100,"��ɽ���"),
										Array(220070301,200,"ʱ��ֹ֮ͣ��"), 
										Array(220070201,200,"��ʧ��ʱ��"), 
										Array(220050300,200,"ʱ��ͨ��"), 
										Array(220010500,50,"¶̨���� 40��-70��"), 
										Array(250020000,50,"���������� 50��-60��"), 
										Array(251010000,50,"ʮ��ҩ�ݵ�"), 
										Array(200040000,50,"�Ʋʹ�԰��"), 
										Array(200010301,100,"�ڰ�ͥԺ��"), 
										Array(240020100,100,"��������ս�� 100��-120��"), 
										Array(240040500,200,"��֮��Ѩ���"), 
										Array(240040000,200,"����Ͽ��"), 
										Array(600020300,200,"���붴Ѩ"),

        Array(541020000,300,"��³ׯ԰"), 
										Array(800020130,300,"��������")
										); 
var townmaps = Array(
										Array(910000000,0,"�����г�"),
                                                                                Array(809030000,100,"������-�齱"),

        									Array(100000104,100,"���ִ�������"),

        									Array(140000000,100,"���"),
                                                                                Array(106020000,100,"Ģ���Ǳ�"),
										Array(104000000,100,"�����"), 
										Array(100000000,200,"���ִ�"), 
										Array(101000000,100,"ħ������"), 
										Array(102000000,100,"��ʿ����"), 
										Array(103000000,100,"��������"), 
										Array(120000000,100,"ŵ����˹����ͷ"),
										Array(105040300,10000,"����֮��"), 
										Array(200000000,100,"���֮��"),
										Array(211000000,10000,"����ѩ��"), 
										Array(230000000,10000,"ˮ������"),  
										Array(222000000,10000,"ͯ����"), 
										Array(220000000,10000,"��߳�"),
										Array(701000000,10000,"��������"),
										Array(250000000,10000,"����"), 
										Array(702000000,10000,"������"), 
										Array(500000000,400,"̩��"),
										Array(260000000,500,"ɳĮ֮��"), 
										Array(600000000,10000,"��Ҷ��"), 
										Array(240000000,10000,"��ľ��"), 
										Array(261000000,10000,"�������"), 
										Array(221000000,1000,"�����������"), 
										Array(251000000,10000,"�ٲ���"),
										Array(701000200,10000,"�Ϻ�ԥ԰"),
										Array(550000000,10000,"��¡����"),
										Array(130000000,100,"ʥ��"),  
										Array(801000000,10000,"�Ѻʹ�"), 
										Array(540010000,10000,"�¼��»���"),
										Array(541000000,10000,"�¼�����ͷ"),
										Array(300000000,10000,"����ɭ��"), 
										Array(270000100,1000000,"ʱ�����"), 
										Array(702100000,10000,"�ؾ���"), 
										Array(970000000,0,"�����������"), 
										Array(800000000,10000,"�Ŵ�����") 

							);
var chosenMap = -1;
var monsters = 0;
var towns = 0;
var bosses = 0;
var tts = 0;

importPackage(net.sf.odinms.client);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
            if (mode == -1) {
                cm.dispose();
            }
            else {
                if (status >= 3 && mode == 0) {
			cm.sendOk("�´��ټ�!.");
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
                        cm.sendNext("#rHi,�������紫��Ա!");                  
                }
               if (status == 1) {
                   cm.sendSimple("#r#fUI/UIWindow.img/QuestIcon/3/0#\r\n#L0#���紫��#l\r\n#L1#��Ǹ,���ߴ���#l");
               }
               else if (status == 2) {
                   if (selection == 0) {
                       cm.sendSimple("#r#fUI/UIWindow.img/QuestIcon/3/0#\r\n#L0#�����ͼ#l\r\n#L1#������ͼ#l\r\n#L2#BOSS��ͼ#l\r\n#L3#�������ͼ#l");
                   }
                   else if (selection == 1) {
                       cm.dispose();
                   }
               }
               else if (status == 3) {
                   if (selection == 0) {
                        var selStr = "ѡ�����Ŀ�ĵذ�.#b";
			for (var i = 0; i < townmaps.length; i++) {
				selStr += "\r\n#L" + i + "#" + townmaps[i][2] + "";
			}
                        cm.sendSimple(selStr);
                        towns = 1;
                   }
                   if (selection == 1) {
                       var selStr = "ѡ�����Ŀ�ĵذ�.#b";
                       for (var i = 0; i < monstermaps.length; i++) {
				selStr += "\r\n#L" + i + "#" + monstermaps[i][2] + "";
                       }
                       cm.sendSimple(selStr);
                       monsters = 1;
                   }
                   if (selection == 2) {
                       var selStr = "ѡ�����Ŀ�ĵذ�.#b";
                       for (var i = 0; i < bossmaps.length; i++) {
				selStr += "\r\n#L" + i + "#" + bossmaps[i][2] + "";
                       }
                       cm.sendSimple(selStr);
                       bosses = 1;
                   }
				   if (selection == 3) {
                       var selStr = "ѡ�����Ŀ�ĵذ�.#b";
                       for (var i = 0; i < ttmaps.length; i++) {
				selStr += "\r\n#L" + i + "#" + ttmaps[i][2] + "";
                       }
                       cm.sendSimple(selStr);
                       tts = 1;
                   }
               }
            else if (status == 4) {
                if (towns == 1) {
                cm.sendYesNo("��ȷ��Ҫȥ " + townmaps[selection][2] + "? �۸�:#r"+townmaps[selection][1]+"#k���");
				chosenMap = selection;
                towns = 2;
                }
                else if (monsters == 1) {
                cm.sendYesNo("��ȷ��Ҫȥ " + monstermaps[selection][2] + "? �۸�:#r"+monstermaps[selection][1]+"#k���");
                chosenMap = selection;
                monsters = 2;
                }
                else if (bosses == 1) {
                cm.sendYesNo("��ȷ��Ҫȥ " + bossmaps[selection][2] + "? �۸�:#r"+bossmaps[selection][1]+"#k���");
                chosenMap = selection;
                bosses = 2;
                }
				else if (tts == 1) {
                cm.sendYesNo("��ȷ��Ҫȥ " + ttmaps[selection][2] + "? �۸�:#r"+ttmaps[selection][1]+"#k���");
                chosenMap = selection;
                tts = 2;
                }
            }
            else if (status == 5) {
                if (towns == 2) {
                	if(cm.getMeso()>=townmaps[chosenMap][1]){
                		cm.warp(townmaps[chosenMap][0], 0);
                		cm.gainMeso(-townmaps[chosenMap][1]);
				
                	}else{
                		cm.sendOk("��û���㹻�Ľ��Ŷ!");
                	}
                    cm.dispose();
                }
                else if (monsters == 2) {
                    if(cm.getChar().getNX()>=monstermaps[chosenMap][1]){
                		cm.warp(monstermaps[chosenMap][0], 0);
                		cm.gainMeso(-monstermaps[chosenMap][1]);
                	}else{
                		cm.sendOk("��û���㹻�Ľ��Ŷ!");
                	}
                    cm.dispose();
                }
                else if (bosses == 2) {
                    if(cm.getzb()>=bossmaps[chosenMap][1]){
                		cm.warp(bossmaps[chosenMap][0], 0);
                		cm.gainMeso(-bossmaps[chosenMap][1]);				
                	}else{
                		cm.sendOk("��û���㹻�Ľ��Ŷ!");
                	}
                    cm.dispose();
                }
				else if (tts == 2) {
                    if(cm.getzb()>=ttmaps[chosenMap][1]){
                		cm.warp(ttmaps[chosenMap][0], 0);
                		cm.gainMeso(-ttmaps[chosenMap][1]);				
                	}else{
                		cm.sendOk("��û���㹻�Ľ��Ŷ!");
                	}
                    cm.dispose();
                }
            }
              
            }
}

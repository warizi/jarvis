// const data = `
// 593	0	남자	285	사람 판(김)	0
// 647	323	만나요	280	장소 판(김)	0
// 647	323	만나요	293	탈것 판(김)	0
// 647	323	만나요	285	사람 판(김)	0
// 647	323	만나요	323	만나요(김)	0
// 647	323	만나요	131	시범테스트 화면	96
// 647	323	만나요	291	날짜, 시간 판(김)	0
// 648	324	잡아요	282	신체 판(김)	0
// 648	324	잡아요	131	시범테스트 화면	96
// 648	324	잡아요	324	잡아요(김)	0
// 347	278	옷	263	사요 (김)	0
// 347	278	옷	131	시범테스트 화면	96
// 347	278	옷	327	만져요(김)	0
// 347	278	옷	313	찾아요(김)	0
// 347	278	옷	335	빌려줘요(김)	0
// 347	278	옷	314	입어요(김)	0
// 347	278	옷	274	만들어요 (김)	0
// 347	278	옷	336	가져요(김)	0
// 347	278	옷	334	줘요(김)	0
// 347	278	옷	337	바꿔요(김)	0
// 430	0	외투, 잠바	278	옷 판(김)	0
// 752	0	반갑습니다.	353	너 (김)	0
// 634	0	치약	287	물건 판(김)	0
// 310	252	더	287	물건 판(김)	0
// 310	252	더	279	문구류 판(김)	0
// 310	252	더	336	가져요(김)	0
// 310	252	더	332	걸어요(김)	0
// 433	281	먹어요	316	먹어요(김)	0
// 568	0	금요일	291	날짜, 시간 판(김)	0
// 431	0	양말	278	옷 판(김)	0
// 650	326	씻어요	326	씻어요(김)	0
// 650	326	씻어요	281	음식 판(김)	0
// 650	326	씻어요	131	시범테스트 화면	96
// 650	326	씻어요	282	신체 판(김)	0
// 447	0	바나나	297	간식 판(김)	0
// 833	0	몇 시에 도착하나요?	365	문장 판(김)	0
// 644	320	잘라요	281	음식 판(김)	0
// 644	320	잘라요	131	시범테스트 화면	96
// 644	320	잘라요	282	신체 판(김)	0
// 644	320	잘라요	279	문구류 판(김)	0
// 644	320	잘라요	297	간식 판(김)	0
// 644	320	잘라요	320	잘라요(김)	0
// 629	0	휴지	287	물건 판(김)	0
// 645	321	붙여요	282	신체 판(김)	0
// 645	321	붙여요	321	붙여요(김)	0
// 645	321	붙여요	131	시범테스트 화면	96
// 645	321	붙여요	279	문구류 판(김)	0
// 765	0	바람이 불어요	286	날씨  판(김)	0
// 844	0	일주일에 몇 시간 일하나요?	365	문장 판(김)	0
// 383	0	자동차	293	탈것 판(김)	0
// 357	282	신체	131	시범테스트 화면	96
// 357	282	신체	324	잡아요(김)	0
// 357	282	신체	274	만들어요 (김)	0
// 357	282	신체	321	붙여요(김)	0
// 357	282	신체	339	누워요(김)	0
// 357	282	신체	326	씻어요(김)	0
// 357	282	신체	338	눌러요(김)	0
// 357	282	신체	327	만져요(김)	0
// 357	282	신체	325	아파요(김)	0
// 639	315	타요	315	타요(김)	0
// 639	315	타요	131	시범테스트 화면	96
// 639	315	타요	293	탈것 판(김)	0
// 639	315	타요	291	날짜, 시간 판(김)	0
// 555	0	로봇	288	활동 판(김)	0
// 746	353	너	131	시범테스트 화면	96
// 746	353	너	353	너 (김)	0
// 651	327	만져요	327	만져요(김)	0
// 651	327	만져요	131	시범테스트 화면	96
// 651	327	만져요	282	신체 판(김)	0
// 651	327	만져요	283	동물  판(김)	0
// 651	327	만져요	278	옷 판(김)	0
// 859	0	제 약이 필요해요.	365	문장 판(김)	0
// 359	284	기분감정	317	기분이 들어요(김)	0
// 359	284	기분감정	273	쉬어요 (김)	0
// 359	284	기분감정	131	시범테스트 화면	96
// 359	284	기분감정	340	자요(김)	0
// 880	0	카드로 계산하고 싶어요.	365	문장 판(김)	0
// 336	274	만들어요	282	신체 판(김)	0
// 336	274	만들어요	297	간식 판(김)	0
// 336	274	만들어요	283	동물  판(김)	0
// 336	274	만들어요	131	시범테스트 화면	96
// 336	274	만들어요	279	문구류 판(김)	0
// 336	274	만들어요	278	옷 판(김)	0
// 336	274	만들어요	293	탈것 판(김)	0
// 336	274	만들어요	281	음식 판(김)	0
// 336	274	만들어요	287	물건 판(김)	0
// 336	274	만들어요	274	만들어요 (김)	0
// 831	0	지연되었어요.	365	문장 판(김)	0
// 540	0	숫자	279	문구류 판(김)	0
// 777	0	맑아요	286	날씨  판(김)	0
// 595	0	추석	349	휴일, 기념일 판(김)	0
// 351	0	모두	324	잡아요(김)	0
// 351	0	모두	288	활동 판(김)	0
// 351	0	모두	334	줘요(김)	0
// 351	0	모두	319	들어요(김)	0
// 351	0	모두	282	신체 판(김)	0
// 351	0	모두	321	붙여요(김)	0
// 351	0	모두	325	아파요(김)	0
// 351	0	모두	260	해요 (김)	0
// 351	0	모두	287	물건 판(김)	0
// 351	0	모두	297	간식 판(김)	0
// 351	0	모두	316	먹어요(김)	0
// 351	0	모두	336	가져요(김)	0
// 351	0	모두	313	찾아요(김)	0
// 351	0	모두	335	빌려줘요(김)	0
// 351	0	모두	279	문구류 판(김)	0
// 351	0	모두	281	음식 판(김)	0
// 351	0	모두	131	시범테스트 화면	96
// 351	0	모두	329	켜요(김)	0
// 351	0	모두	320	잘라요(김)	0
// 351	0	모두	263	사요 (김)	0
// 351	0	모두	274	만들어요 (김)	0
// 351	0	모두	285	사람 판(김)	0
// 830	0	못 갈거 같아요.	365	문장 판(김)	0
// 857	0	제 외투 좀 벗겨주세요.	365	문장 판(김)	0
// 772	0	습해요	286	날씨  판(김)	0
// 435	0	밥	281	음식 판(김)	0
// 755	0	감사합니다	353	너 (김)	0
// 322	260	해요	260	해요 (김)	0
// 322	260	해요	291	날짜, 시간 판(김)	0
// 322	260	해요	131	시범테스트 화면	96
// 322	260	해요	279	문구류 판(김)	0
// 322	260	해요	288	활동 판(김)	0
// 437	0	고기	281	음식 판(김)	0
// 773	0	건조해요	286	날씨  판(김)	0
// 713	0	다른거	131	시범테스트 화면	96
// 877	0	기다려주세요.	365	문장 판(김)	0
// 754	0	안녕하세요	353	너 (김)	0
// 316	0	아무거나	316	먹어요(김)	0
// 316	0	아무거나	336	가져요(김)	0
// 316	0	아무거나	263	사요 (김)	0
// 316	0	아무거나	131	시범테스트 화면	96
// 316	0	아무거나	319	들어요(김)	0
// 316	0	아무거나	287	물건 판(김)	0
// 316	0	아무거나	278	옷 판(김)	0
// 316	0	아무거나	315	타요(김)	0
// 316	0	아무거나	334	줘요(김)	0
// 316	0	아무거나	318	봐요(김)	0
// 316	0	아무거나	285	사람 판(김)	0
// 316	0	아무거나	335	빌려줘요(김)	0
// 316	0	아무거나	281	음식 판(김)	0
// 316	0	아무거나	295	가요 판(김)	0
// 316	0	아무거나	293	탈것 판(김)	0
// 316	0	아무거나	260	해요 (김)	0
// 316	0	아무거나	279	문구류 판(김)	0
// 563	0	밤	291	날짜, 시간 판(김)	0
// 415	0	코	282	신체 판(김)	0
// 582	0	아빠	285	사람 판(김)	0
// 349	280	장소	332	걸어요(김)	0
// 349	280	장소	295	가요 판(김)	0
// 349	280	장소	340	자요(김)	0
// 349	280	장소	339	누워요(김)	0
// 349	280	장소	313	찾아요(김)	0
// 349	280	장소	323	만나요(김)	0
// 349	280	장소	264	기다려요(김)	0
// 349	280	장소	333	뛰어요(김)	0
// 349	280	장소	262	놀아요(김)	0
// 349	280	장소	131	시범테스트 화면	96
// 349	280	장소	273	쉬어요 (김)	0
// 315	0	다음	315	타요(김)	0
// 315	0	다음	260	해요 (김)	0
// 315	0	다음	333	뛰어요(김)	0
// 315	0	다음	295	가요 판(김)	0
// 315	0	다음	319	들어요(김)	0
// 315	0	다음	262	놀아요(김)	0
// 315	0	다음	285	사람 판(김)	0
// 315	0	다음	337	바꿔요(김)	0
// 315	0	다음	318	봐요(김)	0
// 315	0	다음	335	빌려줘요(김)	0
// 315	0	다음	332	걸어요(김)	0
// 315	0	다음	323	만나요(김)	0
// 315	0	다음	293	탈것 판(김)	0
// 315	0	다음	334	줘요(김)	0
// 315	0	다음	131	시범테스트 화면	96
// 565	0	화요일	291	날짜, 시간 판(김)	0
// 354	0	조금	263	사요 (김)	0
// 354	0	조금	316	먹어요(김)	0
// 354	0	조금	286	날씨  판(김)	0
// 354	0	조금	297	간식 판(김)	0
// 354	0	조금	284	기분감정 판(김)	0
// 354	0	조금	288	활동 판(김)	0
// 354	0	조금	324	잡아요(김)	0
// 354	0	조금	320	잘라요(김)	0
// 354	0	조금	353	너 (김)	0
// 354	0	조금	131	시범테스트 화면	96
// 354	0	조금	262	놀아요(김)	0
// 354	0	조금	340	자요(김)	0
// 354	0	조금	321	붙여요(김)	0
// 354	0	조금	336	가져요(김)	0
// 354	0	조금	260	해요 (김)	0
// 354	0	조금	335	빌려줘요(김)	0
// 354	0	조금	273	쉬어요 (김)	0
// 354	0	조금	282	신체 판(김)	0
// 354	0	조금	264	기다려요(김)	0
// 354	0	조금	325	아파요(김)	0
// 354	0	조금	281	음식 판(김)	0
// 354	0	조금	332	걸어요(김)	0
// 354	0	조금	317	기분이 들어요(김)	0
// 354	0	조금	334	줘요(김)	0
// 897	0	너무 차가워요.	365	문장 판(김)	0
// 851	0	소변 누고 싶어요.	365	문장 판(김)	0
// 836	0	나중에 가고 싶어요.	365	문장 판(김)	0
// 846	0	어렵네요.	365	문장 판(김)	0
// 890	0	한 입 크기로 잘라주세요.	365	문장 판(김)	0
// 771	0	날씨	286	날씨  판(김)	0
// 326	264	기다려요	264	기다려요(김)	0
// 326	264	기다려요	280	장소 판(김)	0
// 326	264	기다려요	285	사람 판(김)	0
// 326	264	기다려요	131	시범테스트 화면	96
// 440	0	사탕	297	간식 판(김)	0
// 455	0	텔레비전	290	가전제품 판(김)	0
// 865	0	그렇게 하는게 아니에요.	365	문장 판(김)	0
// 587	0	아이	285	사람 판(김)	0
// 301	246	언제	131	시범테스트 화면	96
// 866	0	제 위치를 바꿔주세요.	365	문장 판(김)	0
// 756	0	죄송합니다	353	너 (김)	0
// 862	0	도움이 필요해요.	365	문장 판(김)	0
// 649	325	아파요	131	시범테스트 화면	96
// 649	325	아파요	325	아파요(김)	0
// 649	325	아파요	283	동물  판(김)	0
// 649	325	아파요	282	신체 판(김)	0
// 649	325	아파요	285	사람 판(김)	0
// 401	0	병원	280	장소 판(김)	0
// 573	0	아침	291	날짜, 시간 판(김)	0
// 611	0	화나요	284	기분감정 판(김)	0
// 570	0	일요일	291	날짜, 시간 판(김)	0
// 895	0	메뉴를 볼 수 있나요?	365	문장 판(김)	0
// 414	0	눈	282	신체 판(김)	0
// 834	0	몇 시에 출발하나요?	365	문장 판(김)	0
// 439	0	계란	281	음식 판(김)	0
// 388	0	그네	293	탈것 판(김)	0
// 404	0	수영장	280	장소 판(김)	0
// 340	0	좋아요	319	들어요(김)	0
// 340	0	좋아요	280	장소 판(김)	0
// 340	0	좋아요	314	입어요(김)	0
// 340	0	좋아요	278	옷 판(김)	0
// 340	0	좋아요	323	만나요(김)	0
// 340	0	좋아요	334	줘요(김)	0
// 340	0	좋아요	321	붙여요(김)	0
// 340	0	좋아요	337	바꿔요(김)	0
// 340	0	좋아요	281	음식 판(김)	0
// 340	0	좋아요	131	시범테스트 화면	96
// 340	0	좋아요	318	봐요(김)	0
// 340	0	좋아요	263	사요 (김)	0
// 340	0	좋아요	328	도와주세요(김)	0
// 340	0	좋아요	317	기분이 들어요(김)	0
// 340	0	좋아요	284	기분감정 판(김)	0
// 340	0	좋아요	288	활동 판(김)	0
// 340	0	좋아요	286	날씨  판(김)	0
// 340	0	좋아요	285	사람 판(김)	0
// 340	0	좋아요	283	동물  판(김)	0
// 572	0	점심	291	날짜, 시간 판(김)	0
// 828	0	제 계좌번호는	365	문장 판(김)	0
// 429	0	기저귀	278	옷 판(김)	0
// 585	0	언니, 누나	285	사람 판(김)	0
// 422	0	무릎	282	신체 판(김)	0
// 424	0	발	282	신체 판(김)	0
// 583	0	엄마	285	사람 판(김)	0
// 628	0	숟가락	287	물건 판(김)	0
// 775	0	더워요	286	날씨  판(김)	0
// 641	317	기분이 들어요	317	기분이 들어요(김)	0
// 641	317	기분이 들어요	284	기분감정 판(김)	0
// 641	317	기분이 들어요	131	시범테스트 화면	96
// 348	279	문구류	263	사요 (김)	0
// 348	279	문구류	321	붙여요(김)	0
// 348	279	문구류	274	만들어요 (김)	0
// 348	279	문구류	260	해요 (김)	0
// 348	279	문구류	335	빌려줘요(김)	0
// 348	279	문구류	334	줘요(김)	0
// 348	279	문구류	313	찾아요(김)	0
// 348	279	문구류	320	잘라요(김)	0
// 348	279	문구류	131	시범테스트 화면	96
// 348	279	문구류	337	바꿔요(김)	0
// 436	0	약	281	음식 판(김)	0
// 748	353	우리	353	너 (김)	0
// 748	353	우리	131	시범테스트 화면	96
// 653	329	켜요	293	탈것 판(김)	0
// 653	329	켜요	290	가전제품 판(김)	0
// 653	329	켜요	329	켜요(김)	0
// 653	329	켜요	288	활동 판(김)	0
// 653	329	켜요	131	시범테스트 화면	96
// 655	331	가요	293	탈것 판(김)	0
// 655	331	가요	285	사람 판(김)	0
// 655	331	가요	291	날짜, 시간 판(김)	0
// 313	253	빨리	314	입어요(김)	0
// 358	283	동물	262	놀아요(김)	0
// 358	283	동물	313	찾아요(김)	0
// 358	283	동물	334	줘요(김)	0
// 358	283	동물	325	아파요(김)	0
// 358	283	동물	274	만들어요 (김)	0
// 358	283	동물	131	시범테스트 화면	96
// 358	283	동물	327	만져요(김)	0
// 358	283	동물	318	봐요(김)	0
// 338	0	나중에	293	탈것 판(김)	0
// 338	0	나중에	260	해요 (김)	0
// 338	0	나중에	340	자요(김)	0
// 338	0	나중에	333	뛰어요(김)	0
// 338	0	나중에	332	걸어요(김)	0
// 338	0	나중에	313	찾아요(김)	0
// 338	0	나중에	291	날짜, 시간 판(김)	0
// 338	0	나중에	273	쉬어요 (김)	0
// 338	0	나중에	282	신체 판(김)	0
// 338	0	나중에	323	만나요(김)	0
// 338	0	나중에	274	만들어요 (김)	0
// 338	0	나중에	330	꺼요(김)	0
// 338	0	나중에	280	장소 판(김)	0
// 338	0	나중에	281	음식 판(김)	0
// 338	0	나중에	287	물건 판(김)	0
// 338	0	나중에	288	활동 판(김)	0
// 338	0	나중에	131	시범테스트 화면	96
// 338	0	나중에	295	가요 판(김)	0
// 338	0	나중에	329	켜요(김)	0
// 338	0	나중에	334	줘요(김)	0
// 338	0	나중에	322	불러요(김)	0
// 338	0	나중에	283	동물  판(김)	0
// 338	0	나중에	336	가져요(김)	0
// 338	0	나중에	278	옷 판(김)	0
// 338	0	나중에	315	타요(김)	0
// 338	0	나중에	262	놀아요(김)	0
// 875	0	 읽어주시겠어요?	365	문장 판(김)	0
// 751	0	실수였어요	353	너 (김)	0
// 637	313	찾아요	280	장소 판(김)	0
// 637	313	찾아요	281	음식 판(김)	0
// 637	313	찾아요	278	옷 판(김)	0
// 637	313	찾아요	283	동물  판(김)	0
// 637	313	찾아요	288	활동 판(김)	0
// 637	313	찾아요	293	탈것 판(김)	0
// 637	313	찾아요	279	문구류 판(김)	0
// 637	313	찾아요	287	물건 판(김)	0
// 637	313	찾아요	285	사람 판(김)	0
// 637	313	찾아요	131	시범테스트 화면	96
// 637	313	찾아요	297	간식 판(김)	0
// 637	313	찾아요	313	찾아요(김)	0
// 637	313	찾아요	290	가전제품 판(김)	0
// 861	0	문제가 생겼어요.	365	문장 판(김)	0
// 774	0	시원해요	286	날씨  판(김)	0
// 860	0	의사를 만나야 해요.	365	문장 판(김)	0
// 864	0	이거 다시 해주세요.	365	문장 판(김)	0
// 421	0	배	282	신체 판(김)	0
// 360	285	사람	325	아파요(김)	0
// 360	285	사람	318	봐요(김)	0
// 360	285	사람	334	줘요(김)	0
// 360	285	사람	131	시범테스트 화면	96
// 360	285	사람	323	만나요(김)	0
// 360	285	사람	295	가요 판(김)	0
// 360	285	사람	328	도와주세요(김)	0
// 360	285	사람	264	기다려요(김)	0
// 360	285	사람	322	불러요(김)	0
// 360	285	사람	313	찾아요(김)	0
// 575	0	생일	349	휴일, 기념일 판(김)	0
// 632	0	비누	287	물건 판(김)	0
// 541	0	시계	279	문구류 판(김)	0
// 660	336	가져요	281	음식 판(김)	0
// 660	336	가져요	278	옷 판(김)	0
// 660	336	가져요	287	물건 판(김)	0
// 660	336	가져요	336	가져요(김)	0
// 660	336	가져요	131	시범테스트 화면	96
// 660	336	가져요	297	간식 판(김)	0
// 423	0	다리	282	신체 판(김)	0
// 543	0	의자	279	문구류 판(김)	0
// 548	0	지우개	279	문구류 판(김)	0
// 869	0	제 의자를 수동으로 조정할 수 있어요.	365	문장 판(김)	0
// 537	0	편지	279	문구류 판(김)	0
// 832	0	거의 다 왔나요?	365	문장 판(김)	0
// 615	0	차가워요	284	기분감정 판(김)	0
// 627	0	포크	287	물건 판(김)	0
// 893	0	주문할게요.	365	문장 판(김)	0
// 625	0	컵	287	물건 판(김)	0
// 635	0	선물	287	물건 판(김)	0
// 747	353	나	353	너 (김)	0
// 747	353	나	131	시범테스트 화면	96
// 356	0	있어요	297	간식 판(김)	0
// 356	0	있어요	353	너 (김)	0
// 356	0	있어요	278	옷 판(김)	0
// 356	0	있어요	318	봐요(김)	0
// 356	0	있어요	263	사요 (김)	0
// 356	0	있어요	286	날씨  판(김)	0
// 356	0	있어요	287	물건 판(김)	0
// 356	0	있어요	131	시범테스트 화면	96
// 356	0	있어요	279	문구류 판(김)	0
// 356	0	있어요	285	사람 판(김)	0
// 356	0	있어요	337	바꿔요(김)	0
// 356	0	있어요	313	찾아요(김)	0
// 356	0	있어요	281	음식 판(김)	0
// 356	0	있어요	280	장소 판(김)	0
// 384	0	지하철	293	탈것 판(김)	0
// 569	0	토요일	291	날짜, 시간 판(김)	0
// 449	0	수박	297	간식 판(김)	0
// 824	0	보여드릴게요.	365	문장 판(김)	0
// 590	0	선생님	285	사람 판(김)	0
// 661	337	바꿔요	337	바꿔요(김)	0
// 661	337	바꿔요	278	옷 판(김)	0
// 661	337	바꿔요	297	간식 판(김)	0
// 661	337	바꿔요	281	음식 판(김)	0
// 661	337	바꿔요	287	물건 판(김)	0
// 661	337	바꿔요	131	시범테스트 화면	96
// 661	337	바꿔요	279	문구류 판(김)	0
// 848	0	알람을 맞춰야 해요.	365	문장 판(김)	0
// 553	0	목욕	288	활동 판(김)	0
// 442	0	케이크	297	간식 판(김)	0
// 841	0	제가 면접 대상이 될까요?	365	문장 판(김)	0
// 605	0	이상해요	284	기분감정 판(김)	0
// 636	0	사진	287	물건 판(김)	0
// 325	263	사요	278	옷 판(김)	0
// 325	263	사요	291	날짜, 시간 판(김)	0
// 325	263	사요	287	물건 판(김)	0
// 325	263	사요	279	문구류 판(김)	0
// 325	263	사요	263	사요 (김)	0
// 325	263	사요	297	간식 판(김)	0
// 325	263	사요	131	시범테스트 화면	96
// 325	263	사요	293	탈것 판(김)	0
// 325	263	사요	290	가전제품 판(김)	0
// 325	263	사요	288	활동 판(김)	0
// 325	263	사요	281	음식 판(김)	0
// 325	263	사요	297	간식 판(김)	0
// 820	0	안녕히주무세요	365	문장 판(김)	0
// 768	0	구름	286	날씨  판(김)	0
// 849	0	머리 감겨주세요.	365	문장 판(김)	0
// 760	0	알겠습니다	353	너 (김)	0
// 879	0	영수증이 필요해요.	365	문장 판(김)	0
// 446	0	사과	297	간식 판(김)	0
// 345	0	지금	131	시범테스트 화면	96
// 345	0	지금	323	만나요(김)	0
// 345	0	지금	293	탈것 판(김)	0
// 345	0	지금	336	가져요(김)	0
// 345	0	지금	329	켜요(김)	0
// 345	0	지금	325	아파요(김)	0
// 345	0	지금	262	놀아요(김)	0
// 345	0	지금	332	걸어요(김)	0
// 345	0	지금	313	찾아요(김)	0
// 345	0	지금	264	기다려요(김)	0
// 345	0	지금	280	장소 판(김)	0
// 345	0	지금	315	타요(김)	0
// 345	0	지금	291	날짜, 시간 판(김)	0
// 345	0	지금	273	쉬어요 (김)	0
// 345	0	지금	278	옷 판(김)	0
// 345	0	지금	282	신체 판(김)	0
// 345	0	지금	340	자요(김)	0
// 345	0	지금	287	물건 판(김)	0
// 345	0	지금	317	기분이 들어요(김)	0
// 345	0	지금	295	가요 판(김)	0
// 345	0	지금	283	동물  판(김)	0
// 345	0	지금	288	활동 판(김)	0
// 345	0	지금	260	해요 (김)	0
// 345	0	지금	334	줘요(김)	0
// 345	0	지금	281	음식 판(김)	0
// 856	0	갈아입고 싶어요.	365	문장 판(김)	0
// 300	245	어떻게	131	시범테스트 화면	96
// 874	0	적어주시겠어요?	365	문장 판(김)	0
// 610	0	미안해	284	기분감정 판(김)	0
// 428	0	속옷	278	옷 판(김)	0
// 554	0	장난감	288	활동 판(김)	0
// 838	0	준비됐나요?	365	문장 판(김)	0
// 584	0	동생	285	사람 판(김)	0
// 790	365	문장	131	시범테스트 화면	96
// 450	0	빨리	293	탈것 판(김)	0
// 450	0	빨리	333	뛰어요(김)	0
// 450	0	빨리	287	물건 판(김)	0
// 450	0	빨리	330	꺼요(김)	0
// 450	0	빨리	295	가요 판(김)	0
// 450	0	빨리	316	먹어요(김)	0
// 450	0	빨리	332	걸어요(김)	0
// 450	0	빨리	313	찾아요(김)	0
// 450	0	빨리	290	가전제품 판(김)	0
// 450	0	빨리	322	불러요(김)	0
// 450	0	빨리	328	도와주세요(김)	0
// 450	0	빨리	334	줘요(김)	0
// 450	0	빨리	338	눌러요(김)	0
// 450	0	빨리	285	사람 판(김)	0
// 450	0	빨리	318	봐요(김)	0
// 450	0	빨리	131	시범테스트 화면	96
// 450	0	빨리	315	타요(김)	0
// 450	0	빨리	329	켜요(김)	0
// 450	0	빨리	280	장소 판(김)	0
// 450	0	빨리	297	간식 판(김)	0
// 450	0	빨리	260	해요 (김)	0
// 450	0	빨리	262	놀아요(김)	0
// 450	0	빨리	279	문구류 판(김)	0
// 545	0	종이	279	문구류 판(김)	0
// 883	0	예약했어요.	365	문장 판(김)	0
// 406	0	산	280	장소 판(김)	0
// 542	0	스티커	279	문구류 판(김)	0
// 868	0	제 의자를 안전한 곳으로 옮겨주세요.	365	문장 판(김)	0
// 853	0	입혀주세요.	365	문장 판(김)	0
// 712	0	또	131	시범테스트 화면	96
// 652	328	도와주세요	285	사람 판(김)	0
// 652	328	도와주세요	131	시범테스트 화면	96
// 652	328	도와주세요	328	도와주세요(김)	0
// 652	328	도와주세요	288	활동 판(김)	0
// 652	328	도와주세요	353	너 (김)	0
// 652	328	도와주세요	293	탈것 판(김)	0
// 873	0	글을 쓰고 있어요.	365	문장 판(김)	0
// 413	0	옆에	280	장소 판(김)	0
// 434	297	간식	281	음식 판(김)	0
// 887	0	조리법이 필요해요.	365	문장 판(김)	0
// 626	0	젓가락	287	물건 판(김)	0
// 616	0	뜨거워요	284	기분감정 판(김)	0
// 821	0	그냥 친구사이로 남고 싶어요.	365	문장 판(김)	0
// 353	0	많이	335	빌려줘요(김)	0
// 353	0	많이	297	간식 판(김)	0
// 353	0	많이	263	사요 (김)	0
// 353	0	많이	317	기분이 들어요(김)	0
// 353	0	많이	320	잘라요(김)	0
// 353	0	많이	131	시범테스트 화면	96
// 353	0	많이	332	걸어요(김)	0
// 353	0	많이	324	잡아요(김)	0
// 353	0	많이	321	붙여요(김)	0
// 353	0	많이	316	먹어요(김)	0
// 353	0	많이	288	활동 판(김)	0
// 353	0	많이	325	아파요(김)	0
// 353	0	많이	353	너 (김)	0
// 353	0	많이	262	놀아요(김)	0
// 353	0	많이	282	신체 판(김)	0
// 353	0	많이	281	음식 판(김)	0
// 353	0	많이	264	기다려요(김)	0
// 353	0	많이	284	기분감정 판(김)	0
// 353	0	많이	273	쉬어요 (김)	0
// 353	0	많이	286	날씨  판(김)	0
// 353	0	많이	260	해요 (김)	0
// 353	0	많이	336	가져요(김)	0
// 353	0	많이	274	만들어요 (김)	0
// 353	0	많이	340	자요(김)	0
// 353	0	많이	334	줘요(김)	0
// 387	0	자전거	293	탈것 판(김)	0
// 826	0	제 잔고가 얼마 입니까?	365	문장 판(김)	0
// 837	0	길을 아시나요?	365	문장 판(김)	0
// 709	0	무서워요	284	기분감정 판(김)	0
// 642	318	봐요	318	봐요(김)	0
// 642	318	봐요	285	사람 판(김)	0
// 642	318	봐요	283	동물  판(김)	0
// 642	318	봐요	288	활동 판(김)	0
// 642	318	봐요	291	날짜, 시간 판(김)	0
// 642	318	봐요	290	가전제품 판(김)	0
// 642	318	봐요	131	시범테스트 화면	96
// 619	0	배고파요	281	음식 판(김)	0
// 882	0	얼마에요?	365	문장 판(김)	0
// 377	293	탈것	263	사요 (김)	0
// 377	293	탈것	295	가요 판(김)	0
// 377	293	탈것	274	만들어요 (김)	0
// 377	293	탈것	338	눌러요(김)	0
// 377	293	탈것	330	꺼요(김)	0
// 377	293	탈것	131	시범테스트 화면	96
// 377	293	탈것	328	도와주세요(김)	0
// 377	293	탈것	313	찾아요(김)	0
// 377	293	탈것	323	만나요(김)	0
// 377	293	탈것	329	켜요(김)	0
// 377	293	탈것	315	타요(김)	0
// 341	0	싫어요	319	들어요(김)	0
// 341	0	싫어요	318	봐요(김)	0
// 341	0	싫어요	286	날씨  판(김)	0
// 341	0	싫어요	337	바꿔요(김)	0
// 341	0	싫어요	317	기분이 들어요(김)	0
// 341	0	싫어요	323	만나요(김)	0
// 341	0	싫어요	280	장소 판(김)	0
// 341	0	싫어요	288	활동 판(김)	0
// 341	0	싫어요	321	붙여요(김)	0
// 341	0	싫어요	328	도와주세요(김)	0
// 341	0	싫어요	278	옷 판(김)	0
// 341	0	싫어요	263	사요 (김)	0
// 341	0	싫어요	314	입어요(김)	0
// 341	0	싫어요	131	시범테스트 화면	96
// 341	0	싫어요	284	기분감정 판(김)	0
// 341	0	싫어요	285	사람 판(김)	0
// 341	0	싫어요	283	동물  판(김)	0
// 341	0	싫어요	281	음식 판(김)	0
// 341	0	싫어요	334	줘요(김)	0
// 764	0	눈이 와요	286	날씨  판(김)	0
// 386	0	버스	293	탈것 판(김)	0
// 552	0	게임	288	활동 판(김)	0
// 350	281	음식	263	사요 (김)	0
// 350	281	음식	336	가져요(김)	0
// 350	281	음식	337	바꿔요(김)	0
// 350	281	음식	313	찾아요(김)	0
// 350	281	음식	131	시범테스트 화면	96
// 350	281	음식	320	잘라요(김)	0
// 350	281	음식	334	줘요(김)	0
// 350	281	음식	326	씻어요(김)	0
// 350	281	음식	316	먹어요(김)	0
// 350	281	음식	274	만들어요 (김)	0
// 329	267	봐요	287	물건 판(김)	0
// 871	0	장애인용 화장실은 어디인가요?	365	문장 판(김)	0
// 757	0	잘먹겠습니다	353	너 (김)	0
// 566	0	수요일	291	날짜, 시간 판(김)	0
// 823	0	데이트하러 가실래요?	365	문장 판(김)	0
// 854	0	벗겨주세요.	365	문장 판(김)	0
// 599	0	돼지	283	동물  판(김)	0
// 658	334	줘요	297	간식 판(김)	0
// 658	334	줘요	131	시범테스트 화면	96
// 658	334	줘요	283	동물  판(김)	0
// 658	334	줘요	281	음식 판(김)	0
// 658	334	줘요	287	물건 판(김)	0
// 658	334	줘요	334	줘요(김)	0
// 658	334	줘요	279	문구류 판(김)	0
// 658	334	줘요	285	사람 판(김)	0
// 658	334	줘요	288	활동 판(김)	0
// 658	334	줘요	278	옷 판(김)	0
// 601	0	소	283	동물  판(김)	0
// 663	339	누워요	280	장소 판(김)	0
// 663	339	누워요	131	시범테스트 화면	96
// 663	339	누워요	339	누워요(김)	0
// 663	339	누워요	282	신체 판(김)	0
// 453	0	냉장고	290	가전제품 판(김)	0
// 778	0	흐려요	286	날씨  판(김)	0
// 420	0	손	282	신체 판(김)	0
// 710	131	처음으로	274	만들어요 (김)	0
// 710	131	처음으로	324	잡아요(김)	0
// 710	131	처음으로	323	만나요(김)	0
// 710	131	처음으로	337	바꿔요(김)	0
// 710	131	처음으로	325	아파요(김)	0
// 710	131	처음으로	336	가져요(김)	0
// 710	131	처음으로	287	물건 판(김)	0
// 710	131	처음으로	284	기분감정 판(김)	0
// 710	131	처음으로	340	자요(김)	0
// 710	131	처음으로	327	만져요(김)	0
// 710	131	처음으로	295	가요 판(김)	0
// 710	131	처음으로	334	줘요(김)	0
// 710	131	처음으로	329	켜요(김)	0
// 710	131	처음으로	338	눌러요(김)	0
// 710	131	처음으로	333	뛰어요(김)	0
// 710	131	처음으로	273	쉬어요 (김)	0
// 710	131	처음으로	263	사요 (김)	0
// 710	131	처음으로	321	붙여요(김)	0
// 710	131	처음으로	335	빌려줘요(김)	0
// 710	131	처음으로	339	누워요(김)	0
// 710	131	처음으로	281	음식 판(김)	0
// 710	131	처음으로	280	장소 판(김)	0
// 710	131	처음으로	328	도와주세요(김)	0
// 710	131	처음으로	332	걸어요(김)	0
// 710	131	처음으로	326	씻어요(김)	0
// 710	131	처음으로	320	잘라요(김)	0
// 365	290	가전제품	330	꺼요(김)	0
// 365	290	가전제품	329	켜요(김)	0
// 365	290	가전제품	263	사요 (김)	0
// 365	290	가전제품	131	시범테스트 화면	96
// 365	290	가전제품	313	찾아요(김)	0
// 365	290	가전제품	338	눌러요(김)	0
// 749	0	저기요	353	너 (김)	0
// 454	0	컴퓨터	290	가전제품 판(김)	0
// 631	0	수건	287	물건 판(김)	0
// 581	0	할머니	285	사람 판(김)	0
// 758	0	파이팅! 힘내세요	353	너 (김)	0
// 314	0	또	279	문구류 판(김)	0
// 314	0	또	332	걸어요(김)	0
// 314	0	또	316	먹어요(김)	0
// 314	0	또	293	탈것 판(김)	0
// 314	0	또	288	활동 판(김)	0
// 314	0	또	336	가져요(김)	0
// 314	0	또	262	놀아요(김)	0
// 314	0	또	274	만들어요 (김)	0
// 314	0	또	338	눌러요(김)	0
// 314	0	또	322	불러요(김)	0
// 314	0	또	321	붙여요(김)	0
// 314	0	또	287	물건 판(김)	0
// 314	0	또	318	봐요(김)	0
// 314	0	또	339	누워요(김)	0
// 314	0	또	273	쉬어요 (김)	0
// 314	0	또	333	뛰어요(김)	0
// 314	0	또	315	타요(김)	0
// 314	0	또	327	만져요(김)	0
// 314	0	또	319	들어요(김)	0
// 314	0	또	323	만나요(김)	0
// 314	0	또	295	가요 판(김)	0
// 314	0	또	285	사람 판(김)	0
// 314	0	또	281	음식 판(김)	0
// 314	0	또	260	해요 (김)	0
// 314	0	또	283	동물  판(김)	0
// 314	0	또	324	잡아요(김)	0
// 842	0	일 하고 싶어요.	365	문장 판(김)	0
// 891	0	원산지가 어디인가요?	365	문장 판(김)	0
// 608	0	괜찮아요	284	기분감정 판(김)	0
// 766	0	해	286	날씨  판(김)	0
// 870	0	휠체어 사용해도 되나요?	365	문장 판(김)	0
// 607	0	멋져요	284	기분감정 판(김)	0
// 654	330	꺼요	330	꺼요(김)	0
// 654	330	꺼요	293	탈것 판(김)	0
// 654	330	꺼요	131	시범테스트 화면	96
// 654	330	꺼요	290	가전제품 판(김)	0
// 654	330	꺼요	288	활동 판(김)	0
// 588	0	아기	285	사람 판(김)	0
// 770	0	미세먼지	286	날씨  판(김)	0
// 303	248	어디	131	시범테스트 화면	96
// 886	0	요리 하고 싶어요.	365	문장 판(김)	0
// 850	0	얼굴을 말려주세요.	365	문장 판(김)	0
// 352	0	새 거	279	문구류 판(김)	0
// 352	0	새 거	314	입어요(김)	0
// 352	0	새 거	336	가져요(김)	0
// 352	0	새 거	316	먹어요(김)	0
// 352	0	새 거	337	바꿔요(김)	0
// 352	0	새 거	287	물건 판(김)	0
// 352	0	새 거	263	사요 (김)	0
// 352	0	새 거	131	시범테스트 화면	96
// 352	0	새 거	278	옷 판(김)	0
// 352	0	새 거	334	줘요(김)	0
// 352	0	새 거	297	간식 판(김)	0
// 361	286	날씨	131	시범테스트 화면	96
// 876	0	지나갈 수 있게 비켜주세요.	365	문장 판(김)	0
// 761	0	모르겠어요	353	너 (김)	0
// 362	287	물건	274	만들어요 (김)	0
// 362	287	물건	263	사요 (김)	0
// 362	287	물건	336	가져요(김)	0
// 362	287	물건	337	바꿔요(김)	0
// 362	287	물건	338	눌러요(김)	0
// 362	287	물건	335	빌려줘요(김)	0
// 362	287	물건	313	찾아요(김)	0
// 362	287	물건	131	시범테스트 화면	96
// 362	287	물건	334	줘요(김)	0
// 416	0	입	282	신체 판(김)	0
// 562	0	내일	291	날짜, 시간 판(김)	0
// 591	0	의사선생님	285	사람 판(김)	0
// 299	244	사람	262	놀아요(김)	0
// 839	0	아직 끝나지 않았습니다.	365	문장 판(김)	0
// 402	0	학교	280	장소 판(김)	0
// 885	0	취소해야 할거 같아요.	365	문장 판(김)	0
// 580	0	할아버지	285	사람 판(김)	0
// 835	0	지금 가고싶어요.	365	문장 판(김)	0
// 840	0	제 이력서입니다.	365	문장 판(김)	0
// 750	0	실례합니다.	353	너 (김)	0
// 539	0	계산기	279	문구류 판(김)	0
// 896	0	너무 뜨거워요.	365	문장 판(김)	0
// 311	0	다했어요	315	타요(김)	0
// 311	0	다했어요	321	붙여요(김)	0
// 311	0	다했어요	318	봐요(김)	0
// 311	0	다했어요	320	잘라요(김)	0
// 311	0	다했어요	314	입어요(김)	0
// 311	0	다했어요	313	찾아요(김)	0
// 311	0	다했어요	287	물건 판(김)	0
// 311	0	다했어요	290	가전제품 판(김)	0
// 311	0	다했어요	274	만들어요 (김)	0
// 311	0	다했어요	324	잡아요(김)	0
// 311	0	다했어요	329	켜요(김)	0
// 311	0	다했어요	319	들어요(김)	0
// 311	0	다했어요	323	만나요(김)	0
// 311	0	다했어요	322	불러요(김)	0
// 311	0	다했어요	335	빌려줘요(김)	0
// 311	0	다했어요	340	자요(김)	0
// 311	0	다했어요	338	눌러요(김)	0
// 311	0	다했어요	327	만져요(김)	0
// 311	0	다했어요	332	걸어요(김)	0
// 311	0	다했어요	334	줘요(김)	0
// 311	0	다했어요	330	꺼요(김)	0
// 311	0	다했어요	131	시범테스트 화면	96
// 311	0	다했어요	262	놀아요(김)	0
// 311	0	다했어요	326	씻어요(김)	0
// 311	0	다했어요	260	해요 (김)	0
// 311	0	다했어요	263	사요 (김)	0
// 311	0	다했어요	316	먹어요(김)	0
// 311	0	다했어요	279	문구류 판(김)	0
// 311	0	다했어요	328	도와주세요(김)	0
// 311	0	다했어요	297	간식 판(김)	0
// 311	0	다했어요	337	바꿔요(김)	0
// 311	0	다했어요	333	뛰어요(김)	0
// 311	0	다했어요	339	누워요(김)	0
// 311	0	다했어요	288	활동 판(김)	0
// 597	0	고양이	283	동물  판(김)	0
// 594	0	설날	349	휴일, 기념일 판(김)	0
// 567	0	목요일	291	날짜, 시간 판(김)	0
// 852	0	대변 누고 싶어요.	365	문장 판(김)	0
// 638	314	입어요	314	입어요(김)	0
// 638	314	입어요	131	시범테스트 화면	96
// 638	314	입어요	278	옷 판(김)	0
// 408	0	길	280	장소 판(김)	0
// 759	0	축하합니다.	353	너 (김)	0
// 448	0	포도	297	간식 판(김)	0
// 606	0	예뻐요	284	기분감정 판(김)	0
// 884	0	예약해야 해요.	365	문장 판(김)	0
// 613	0	어려워	288	활동 판(김)	0
// 586	0	오빠, 형	285	사람 판(김)	0
// 302	247	왜	131	시범테스트 화면	96
// 881	0	계산서 주세요.	365	문장 판(김)	0
// 576	0	크리스마스	349	휴일, 기념일 판(김)	0
// 776	0	추워요	286	날씨  판(김)	0
// 822	0	전화번호 주실 수 있으신가요?	365	문장 판(김)	0
// 432	0	신발	278	옷 판(김)	0
// 363	288	활동	318	봐요(김)	0
// 363	288	활동	263	사요 (김)	0
// 363	288	활동	328	도와주세요(김)	0
// 363	288	활동	319	들어요(김)	0
// 363	288	활동	131	시범테스트 화면	96
// 363	288	활동	260	해요 (김)	0
// 363	288	활동	273	쉬어요 (김)	0
// 363	288	활동	330	꺼요(김)	0
// 363	288	활동	313	찾아요(김)	0
// 363	288	활동	334	줘요(김)	0
// 363	288	활동	329	켜요(김)	0
// 427	0	치마	278	옷 판(김)	0
// 659	335	빌려줘요	335	빌려줘요(김)	0
// 659	335	빌려줘요	131	시범테스트 화면	96
// 659	335	빌려줘요	278	옷 판(김)	0
// 659	335	빌려줘요	279	문구류 판(김)	0
// 659	335	빌려줘요	287	물건 판(김)	0
// 564	0	월요일	291	날짜, 시간 판(김)	0
// 556	0	그림	288	활동 판(김)	0
// 703	349	휴일, 기념일	291	날짜, 시간 판(김)	0
// 878	0	거스름돈이 필요해요.	365	문장 판(김)	0
// 855	0	다른 거 입고 싶어요.	365	문장 판(김)	0
// 662	338	눌러요	282	신체 판(김)	0
// 662	338	눌러요	290	가전제품 판(김)	0
// 662	338	눌러요	287	물건 판(김)	0
// 662	338	눌러요	293	탈것 판(김)	0
// 662	338	눌러요	131	시범테스트 화면	96
// 662	338	눌러요	338	눌러요(김)	0
// 858	0	예전 것과 같은 처방전이 필요해요.	365	문장 판(김)	0
// 426	0	바지	278	옷 판(김)	0
// 872	0	장애인용 출입구는 어디인가요?	365	문장 판(김)	0
// 609	0	재밌어요	284	기분감정 판(김)	0
// 403	0	놀이터	280	장소 판(김)	0
// 409	0	밖에	280	장소 판(김)	0
// 664	340	자요	280	장소 판(김)	0
// 664	340	자요	131	시범테스트 화면	96
// 664	340	자요	340	자요(김)	0
// 664	340	자요	291	날짜, 시간 판(김)	0
// 664	340	자요	283	동물  판(김)	0
// 664	340	자요	284	기분감정 판(김)	0
// 640	316	먹어요	291	날짜, 시간 판(김)	0
// 640	316	먹어요	297	간식 판(김)	0
// 640	316	먹어요	131	시범테스트 화면	96
// 640	316	먹어요	281	음식 판(김)	0
// 557	0	노래	288	활동 판(김)	0
// 753	0	안녕히가세요	353	너 (김)	0
// 305	250	무엇	131	시범테스트 화면	96
// 308	0	아니요	131	시범테스트 화면	96
// 863	0	도와주세요! 응급상황입니다.	365	문장 판(김)	0
// 763	0	비가 내려요	286	날씨  판(김)	0
// 411	0	앞에	280	장소 판(김)	0
// 417	0	이	282	신체 판(김)	0
// 324	262	놀아요	285	사람 판(김)	0
// 324	262	놀아요	291	날짜, 시간 판(김)	0
// 324	262	놀아요	131	시범테스트 화면	96
// 324	262	놀아요	280	장소 판(김)	0
// 324	262	놀아요	283	동물  판(김)	0
// 324	262	놀아요	262	놀아요(김)	0
// 304	249	누구	131	시범테스트 화면	96
// 438	0	생선	281	음식 판(김)	0
// 335	273	쉬어요	280	장소 판(김)	0
// 335	273	쉬어요	273	쉬어요 (김)	0
// 335	273	쉬어요	288	활동 판(김)	0
// 335	273	쉬어요	131	시범테스트 화면	96
// 335	273	쉬어요	284	기분감정 판(김)	0
// 624	0	그릇	287	물건 판(김)	0
// 745	0	천천히	279	문구류 판(김)	0
// 745	0	천천히	322	불러요(김)	0
// 745	0	천천히	287	물건 판(김)	0
// 745	0	천천히	280	장소 판(김)	0
// 745	0	천천히	293	탈것 판(김)	0
// 745	0	천천히	131	시범테스트 화면	96
// 389	0	비행기	293	탈것 판(김)	0
// 425	0	티셔츠	278	옷 판(김)	0
// 551	0	치료	288	활동 판(김)	0
// 612	0	짜증나요	284	기분감정 판(김)	0
// 419	0	귀	282	신체 판(김)	0
// 405	0	바다	280	장소 판(김)	0
// 412	0	뒤에	280	장소 판(김)	0
// 381	295	가요	131	시범테스트 화면	96
// 381	295	가요	295	가요 판(김)	0
// 381	295	가요	280	장소 판(김)	0
// 825	0	사적인 일이에요.	365	문장 판(김)	0
// 867	0	제 베개를 옮겨주세요.	365	문장 판(김)	0
// 443	0	빵	297	간식 판(김)	0
// 546	0	연필	279	문구류 판(김)	0
// 762	0	궁금한게 있어요	353	너 (김)	0
// 444	0	과자	297	간식 판(김)	0
// 633	0	칫솔	287	물건 판(김)	0
// 549	0	숙제	288	활동 판(김)	0
// 451	0	더	262	놀아요(김)	0
// 451	0	더	319	들어요(김)	0
// 451	0	더	318	봐요(김)	0
// 451	0	더	340	자요(김)	0
// 451	0	더	334	줘요(김)	0
// 451	0	더	260	해요 (김)	0
// 451	0	더	320	잘라요(김)	0
// 451	0	더	273	쉬어요 (김)	0
// 451	0	더	293	탈것 판(김)	0
// 451	0	더	131	시범테스트 화면	96
// 451	0	더	316	먹어요(김)	0
// 451	0	더	274	만들어요 (김)	0
// 451	0	더	290	가전제품 판(김)	0
// 451	0	더	333	뛰어요(김)	0
// 451	0	더	264	기다려요(김)	0
// 451	0	더	295	가요 판(김)	0
// 451	0	더	288	활동 판(김)	0
// 451	0	더	324	잡아요(김)	0
// 451	0	더	328	도와주세요(김)	0
// 451	0	더	281	음식 판(김)	0
// 451	0	더	327	만져요(김)	0
// 451	0	더	326	씻어요(김)	0
// 451	0	더	335	빌려줘요(김)	0
// 451	0	더	297	간식 판(김)	0
// 451	0	더	263	사요 (김)	0
// 451	0	더	325	아파요(김)	0
// 451	0	더	339	누워요(김)	0
// 589	0	친구	285	사람 판(김)	0
// 407	0	교회	280	장소 판(김)	0
// 445	0	고구마	297	간식 판(김)	0
// 598	0	토끼	283	동물  판(김)	0
// 643	319	들어요	319	들어요(김)	0
// 643	319	들어요	131	시범테스트 화면	96
// 643	319	들어요	288	활동 판(김)	0
// 547	0	가위	279	문구류 판(김)	0
// 385	0	택시	293	탈것 판(김)	0
// 337	0	잠깐	273	쉬어요 (김)	0
// 337	0	잠깐	291	날짜, 시간 판(김)	0
// 337	0	잠깐	325	아파요(김)	0
// 337	0	잠깐	322	불러요(김)	0
// 337	0	잠깐	314	입어요(김)	0
// 337	0	잠깐	293	탈것 판(김)	0
// 337	0	잠깐	131	시범테스트 화면	96
// 337	0	잠깐	281	음식 판(김)	0
// 337	0	잠깐	284	기분감정 판(김)	0
// 337	0	잠깐	280	장소 판(김)	0
// 337	0	잠깐	318	봐요(김)	0
// 337	0	잠깐	315	타요(김)	0
// 337	0	잠깐	353	너 (김)	0
// 337	0	잠깐	334	줘요(김)	0
// 337	0	잠깐	319	들어요(김)	0
// 337	0	잠깐	316	먹어요(김)	0
// 337	0	잠깐	260	해요 (김)	0
// 337	0	잠깐	282	신체 판(김)	0
// 337	0	잠깐	340	자요(김)	0
// 337	0	잠깐	330	꺼요(김)	0
// 337	0	잠깐	317	기분이 들어요(김)	0
// 337	0	잠깐	262	놀아요(김)	0
// 337	0	잠깐	313	찾아요(김)	0
// 337	0	잠깐	333	뛰어요(김)	0
// 337	0	잠깐	324	잡아요(김)	0
// 337	0	잠깐	279	문구류 판(김)	0
// 337	0	잠깐	326	씻어요(김)	0
// 337	0	잠깐	329	켜요(김)	0
// 337	0	잠깐	290	가전제품 판(김)	0
// 337	0	잠깐	283	동물  판(김)	0
// 337	0	잠깐	264	기다려요(김)	0
// 337	0	잠깐	321	붙여요(김)	0
// 399	0	집	280	장소 판(김)	0
// 847	0	잘모르겠습니다.	365	문장 판(김)	0
// 604	0	물고기	283	동물  판(김)	0
// 400	0	화장실	280	장소 판(김)	0
// 309	0	다른거	280	장소 판(김)	0
// 309	0	다른거	322	불러요(김)	0
// 309	0	다른거	320	잘라요(김)	0
// 309	0	다른거	287	물건 판(김)	0
// 309	0	다른거	338	눌러요(김)	0
// 309	0	다른거	327	만져요(김)	0
// 309	0	다른거	313	찾아요(김)	0
// 309	0	다른거	314	입어요(김)	0
// 309	0	다른거	278	옷 판(김)	0
// 309	0	다른거	321	붙여요(김)	0
// 309	0	다른거	329	켜요(김)	0
// 309	0	다른거	281	음식 판(김)	0
// 309	0	다른거	334	줘요(김)	0
// 309	0	다른거	260	해요 (김)	0
// 309	0	다른거	283	동물  판(김)	0
// 309	0	다른거	293	탈것 판(김)	0
// 309	0	다른거	295	가요 판(김)	0
// 309	0	다른거	315	타요(김)	0
// 309	0	다른거	337	바꿔요(김)	0
// 309	0	다른거	263	사요 (김)	0
// 309	0	다른거	324	잡아요(김)	0
// 309	0	다른거	279	문구류 판(김)	0
// 309	0	다른거	316	먹어요(김)	0
// 309	0	다른거	335	빌려줘요(김)	0
// 309	0	다른거	274	만들어요 (김)	0
// 309	0	다른거	318	봐요(김)	0
// 309	0	다른거	319	들어요(김)	0
// 309	0	다른거	288	활동 판(김)	0
// 309	0	다른거	290	가전제품 판(김)	0
// 309	0	다른거	336	가져요(김)	0
// 309	0	다른거	325	아파요(김)	0
// 592	0	여자	285	사람 판(김)	0
// 312	0	그만해요	337	바꿔요(김)	0
// 312	0	그만해요	323	만나요(김)	0
// 312	0	그만해요	326	씻어요(김)	0
// 312	0	그만해요	274	만들어요 (김)	0
// 312	0	그만해요	333	뛰어요(김)	0
// 312	0	그만해요	328	도와주세요(김)	0
// 312	0	그만해요	286	날씨  판(김)	0
// 312	0	그만해요	131	시범테스트 화면	96
// 312	0	그만해요	316	먹어요(김)	0
// 312	0	그만해요	318	봐요(김)	0
// 312	0	그만해요	334	줘요(김)	0
// 312	0	그만해요	353	너 (김)	0
// 312	0	그만해요	314	입어요(김)	0
// 312	0	그만해요	264	기다려요(김)	0
// 312	0	그만해요	260	해요 (김)	0
// 312	0	그만해요	297	간식 판(김)	0
// 312	0	그만해요	291	날짜, 시간 판(김)	0
// 312	0	그만해요	315	타요(김)	0
// 312	0	그만해요	313	찾아요(김)	0
// 312	0	그만해요	314	입어요(김)	0
// 312	0	그만해요	316	먹어요(김)	0
// 312	0	그만해요	340	자요(김)	0
// 312	0	그만해요	262	놀아요(김)	0
// 312	0	그만해요	317	기분이 들어요(김)	0
// 312	0	그만해요	313	찾아요(김)	0
// 312	0	그만해요	282	신체 판(김)	0
// 312	0	그만해요	339	누워요(김)	0
// 312	0	그만해요	262	놀아요(김)	0
// 312	0	그만해요	295	가요 판(김)	0
// 312	0	그만해요	291	날짜, 시간 판(김)	0
// 312	0	그만해요	329	켜요(김)	0
// 312	0	그만해요	330	꺼요(김)	0
// 312	0	그만해요	321	붙여요(김)	0
// 312	0	그만해요	290	가전제품 판(김)	0
// 312	0	그만해요	279	문구류 판(김)	0
// 312	0	그만해요	260	해요 (김)	0
// 312	0	그만해요	263	사요 (김)	0
// 312	0	그만해요	319	들어요(김)	0
// 312	0	그만해요	273	쉬어요 (김)	0
// 312	0	그만해요	324	잡아요(김)	0
// 312	0	그만해요	285	사람 판(김)	0
// 312	0	그만해요	281	음식 판(김)	0
// 312	0	그만해요	319	들어요(김)	0
// 312	0	그만해요	322	불러요(김)	0
// 312	0	그만해요	320	잘라요(김)	0
// 312	0	그만해요	327	만져요(김)	0
// 312	0	그만해요	318	봐요(김)	0
// 312	0	그만해요	290	가전제품 판(김)	0
// 312	0	그만해요	332	걸어요(김)	0
// 312	0	그만해요	264	기다려요(김)	0
// 312	0	그만해요	288	활동 판(김)	0
// 312	0	그만해요	338	눌러요(김)	0
// 312	0	그만해요	315	타요(김)	0
// 602	0	개구리	283	동물  판(김)	0
// 544	0	책	279	문구류 판(김)	0
// 888	0	훨씬 좋아요.	365	문장 판(김)	0
// 843	0	제가 할 수 있어요.	365	문장 판(김)	0
// 600	0	말	283	동물  판(김)	0
// 657	333	뛰어요	333	뛰어요(김)	0
// 657	333	뛰어요	131	시범테스트 화면	96
// 657	333	뛰어요	280	장소 판(김)	0
// 845	0	쉽네요.	365	문장 판(김)	0
// 827	0	돈을 출금하고 싶어요.	365	문장 판(김)	0
// 889	0	뭐 고르셨어요?	365	문장 판(김)	0
// 366	291	날짜, 시간	318	봐요(김)	0
// 366	291	날짜, 시간	262	놀아요(김)	0
// 366	291	날짜, 시간	323	만나요(김)	0
// 366	291	날짜, 시간	315	타요(김)	0
// 366	291	날짜, 시간	131	시범테스트 화면	96
// 366	291	날짜, 시간	316	먹어요(김)	0
// 366	291	날짜, 시간	260	해요 (김)	0
// 366	291	날짜, 시간	295	가요 판(김)	0
// 366	291	날짜, 시간	263	사요 (김)	0
// 366	291	날짜, 시간	340	자요(김)	0
// 418	0	머리	282	신체 판(김)	0
// 656	332	걸어요	280	장소 판(김)	0
// 656	332	걸어요	332	걸어요(김)	0
// 656	332	걸어요	131	시범테스트 화면	96
// 596	0	강아지	283	동물  판(김)	0
// 603	0	거미	283	동물  판(김)	0
// 829	0	제 은행 식별 번호는	365	문장 판(김)	0
// 892	0	그 재료들이 있나요?	365	문장 판(김)	0
// 618	0	목말라요	281	음식 판(김)	0
// 894	0	식단표를 읽어주세요.	365	문장 판(김)	0
// 355	0	없어요	287	물건 판(김)	0
// 355	0	없어요	279	문구류 판(김)	0
// 355	0	없어요	286	날씨  판(김)	0
// 355	0	없어요	281	음식 판(김)	0
// 355	0	없어요	263	사요 (김)	0
// 355	0	없어요	353	너 (김)	0
// 355	0	없어요	322	불러요(김)	0
// 355	0	없어요	323	만나요(김)	0
// 355	0	없어요	131	시범테스트 화면	96
// 355	0	없어요	313	찾아요(김)	0
// 355	0	없어요	321	붙여요(김)	0
// 355	0	없어요	324	잡아요(김)	0
// 355	0	없어요	318	봐요(김)	0
// 355	0	없어요	337	바꿔요(김)	0
// 355	0	없어요	334	줘요(김)	0
// 355	0	없어요	278	옷 판(김)	0
// 355	0	없어요	297	간식 판(김)	0
// 355	0	없어요	285	사람 판(김)	0
// 355	0	없어요	280	장소 판(김)	0
// 441	0	아이스크림	297	간식 판(김)	0
// 307	0	네	131	시범테스트 화면	96
// 617	0	맛있어요	281	음식 판(김)	0
// 646	322	불러요	285	사람 판(김)	0
// 646	322	불러요	322	불러요(김)	0
// 646	322	불러요	131	시범테스트 화면	96
// 550	0	공부	288	활동 판(김)	0
// `;

// type entity = {
//   buttonNo: number;
//   pageLink: number;
//   buttonText: string;
//   pageNo: number;
//   pageTitle: string;
//   pageSetNo: number;
// };
// type page = [
//   number,
//   {
//     pageNo: number;
//     pageTitle: string;
//     pageSetNo: number;
//     buttons: entity[];
//   }
// ];
// export const useTest = () => {
//   // 시간 측정
//   console.time("useTest");
//   const 전체 = data
//     .trim()
//     .split("\n")
//     .map((line) => {
//       const [uid, sid, text, cid, label, score] =
//         line.split("\t");
//       return {
//         buttonNo: Number(uid),
//         pageLink: Number(sid),
//         buttonText: text,
//         pageNo: Number(cid),
//         pageTitle: label,
//         pageSetNo: Number(score),
//       };
//     });

//   const 상징 = 상징리턴(전체);
//   const 범주 = 범주리턴(전체);
//   const 페이지 = 페이지리턴(전체);

//   const 모든페이지경로 = 모든경로리턴(페이지);

//   console.log(전체, 상징, 범주, 페이지, 모든페이지경로);
//   console.log(
//     "모든 페이지 경로 수: ",
//     모든페이지경로.length
//   );
//   console.timeEnd("useTest");
// };

// function 상징리턴(data: entity[]) {
//   return data.filter((item: entity) => item.pageLink === 0);
// }

// function 범주리턴(data: entity[]) {
//   return data.filter((item: entity) => item.pageLink !== 0);
// }

// function 페이지리턴(data: entity[]) {
//   const map = new Map<
//     number,
//     {
//       pageTitle: string;
//       pageNo: number;
//       pageSetNo: number;
//       buttons: entity[];
//     }
//   >();

//   data.forEach((item: entity) => {
//     if (!map.has(item.pageLink)) {
//       map.set(item.pageNo, {
//         pageTitle: item.pageTitle,
//         pageNo: item.pageNo,
//         pageSetNo: item.pageSetNo,
//         buttons: data.filter(
//           (i) => i.pageNo === item.pageNo
//         ),
//       });
//     }
//   });

//   return Array.from(map.entries()) as page[];
// }

const gameData = {
  1: {
    title: "第一章：失蹤的鼠球",
    q1: {
      story: "你繼承了老店「鼠球商行」，但開店第一天，鎮店之寶「滾滾」失蹤了！",
      question: "鼠婦最喜歡的生活環境是什麼？",
      options: ["乾燥、強光的地方","潮濕、陰暗的地方","沙漠地區","開放式陽光棚"],
      answer: "B",
      explain: "鼠婦需要潮濕環境維持呼吸構造的濕潤，通常出現在枯葉堆或陰暗處。",
      image: { url: "https://example.com/1-1.png" }
    },
    q2: {
      story: "你趴在櫃子底下，果然發現滾滾蜷成一球。牠的殼表乾裂。",
      question: "鼠婦失水會導致什麼問題？",
      options: ["更活潑","脫殼困難","增加繁殖率","顏色變亮"],
      answer: "B",
      explain: "鼠婦必須維持體表濕潤以順利脫殼。乾燥環境會讓外骨骼變硬、不易脫出，甚至導致死亡。",
      image: { url: "https://example.com/1-2.png" }
    },
    q3: {
      story: "你幫牠噴了點水霧，牠微微活動，像是在感謝你。",
      question: "鼠婦吃什麼？",
      options: ["鮮肉","腐葉與枯木","花蜜","昆蟲卵"],
      answer: "B",
      explain: "鼠婦是典型的「腐食性分解者」，以腐葉、木屑、苔蘚等為食，協助分解有機物質。",
      image: { url: "https://example.com/1-3.png" }
    },
    q4: {
      story: "牠恢復了活力，卻突然蜷成一球。",
      question: "滾滾蜷成一球，是什麼行為？",
      options: ["求偶","防禦反應","進食","睡覺"],
      answer: "B",
      explain: "鼠婦遇到震動或危險時，會透過「球狀防禦姿勢」（conglobation）保護柔軟的腹部與腳部，是典型的自我防禦機制。",
      image: { url: "https://example.com/1-4.png" }
    },
    q5: {
      story: "你輕輕放回牠的小盒中，牠慢慢舒展。滾滾似乎在告訴你：「潮濕，是我的契約。」",
      question: "鼠婦飼養箱底層材料最適合的是？",
      options: ["純沙","腐葉土混椰磚","紙屑","石灰粉"],
      answer: "B",
      explain: "鼠婦需要有機質豐富、能保濕又透氣的基質。常用「椰磚 +腐葉土+枯木碎片」混合，以模擬自然落葉層。",
      image: { url: "https://example.com/1-5.png" }
    }
  },
  2: {
    title: "第二章：潮濕的契約",
    q1: {
      story: "你檢查其他飼養箱，發現有的土乾裂、有的長霉。",
      question: "維持濕度的最佳方法是？",
      options: ["每天噴霧","不蓋蓋子","放除濕機","曬太陽"],
      answer: "A",
      explain: "輕度噴霧能維持濕潤與通氣的平衡。過度密閉或過濕都容易發霉。",
      image: { url: "https://example.com/2-1.png" }
    },
    q2: {
      story: "你看著牠們呼吸起伏。",
      question: "鼠婦主要呼吸器官是？",
      options: ["肺","鰓樣構造","皮膚","氣管"],
      answer: "B",
      explain: "鼠婦雖是陸生動物，但保留祖先甲殼類的「鰓式呼吸構造」。因此必須保持濕潤以吸收氧氣。",
      image: { url: "https://example.com/2-2.png" }
    },
    q3: {
      story: "你發現水珠積在箱底。",
      question: "為什麼不能讓飼養箱積水？",
      options: ["會發霉、鼠婦溺死","鼠婦喜歡泡水","會變漂亮","增加孵化速度"],
      answer: "A",
      explain: "積水使基質厭氧化、發酵並產生霉菌，鼠婦會缺氧窒息。適度噴霧比大量加水更安全。",
      image: { url: "https://example.com/2-3.png" }
    },
    q4: {
      story: "你調整通風後，鼠婦活動漸恢復。但滾滾突然不再進食。",
      question: "鼠婦缺乏鈣質會怎樣？",
      options: ["殼變薄或難以脫殼","變快","愛吃肉","不影響"],
      answer: "A",
      explain: "鼠婦的外骨骼含鈣質，若缺鈣會導致殼軟或脫殼失敗，常見補鈣來源為墨魚骨粉或烏賊骨。",
      image: { url: "https://example.com/2-4.png" }
    },
    q5: {
      story: "滾滾終於恢復食慾，慢慢啃著腐葉。",
      question: "哪一種食物最能補鈣？",
      options: ["蔬菜皮","墨魚骨粉","麵包","水果"],
      answer: "B",
      explain: "墨魚骨粉為天然碳酸鈣，容易被鼠婦舔食吸收，是最常見補鈣物。",
      image: { url: "https://example.com/2-5.png" }
    }
  },
  3: {
    title: "第三章：食物的秘密",
    q1: {
      story: "幾天後，你發現牠肚子隆起了。",
      question: "鼠婦屬於哪一類動物？",
      options: ["昆蟲","甲殼類","爬蟲類","軟體動物"],
      answer: "B",
      explain: "鼠婦屬於節肢動物門甲殼綱，是少數完全適應陸地的甲殼類。",
      image: { url: "https://example.com/3-1.png" }
    },
    q2: {
      story: "你觀察牠啃食的食物。",
      question: "鼠婦吃太多蛋白質會？",
      options: ["促進繁殖","容易發臭","沒差","長角"],
      answer: "B",
      explain: "蛋白質過多會在潮濕環境下腐敗產生氨氣與硫化物，使箱子臭且誘發細菌滋生。",
      image: { url: "https://example.com/3-2.png" }
    },
    q3: {
      story: "你打算更換新餵料。",
      question: "要防止食物發霉該怎麼辦？",
      options: ["每天換新餵料","灑糖保存","增加光照","放冰箱"],
      answer: "A",
      explain: "潮濕箱內易長霉，應提供少量、常更換，並維持通風。",
      image: { url: "https://example.com/3-3.png" }
    }
  },
  4: {
    title: "第四章：繁殖的祕密",
    q1: {
      story: "幾天後，幼鼠婦滿地爬，你感到成就滿滿。",
      question: "鼠婦的繁殖方式是？",
      options: ["卵生","卵胎生","胎生","無性生殖"],
      answer: "B",
      explain: "鼠婦是卵胎生：雌鼠婦將卵保存在體內的育幼囊中孵化。",
      image: { url: "https://example.com/4-1.png" }
    },
    q2: {
      story: "你觀察母鼠婦如何照顧幼體。",
      question: "鼠婦媽媽如何保護幼體？",
      options: ["把卵埋在土裡","把卵放在育幼囊中","放在木屑上","放在背上"],
      answer: "B",
      explain: "育幼囊內充滿液體，能保濕與供養幼體，是母鼠婦的保護機制。",
      image: { url: "https://example.com/4-2.png" }
    },
    q3: {
      story: "幼鼠婦孵化後，停在母體腹下。",
      question: "幼鼠婦孵化後第一件事是？",
      options: ["吃食物","附著在母體上休息","馬上滾走","打洞"],
      answer: "B",
      explain: "剛孵化的幼體會在母體腹下停留一陣子，等外殼硬化後才離開。",
      image: { url: "https://example.com/4-3.png" }
    },
    q4: {
      story: "幼鼠婦逐漸成長。",
      question: "幼鼠婦成長需要脫殼幾次？",
      options: ["約4~5次","1次","10次","不脫殼"],
      answer: "A",
      explain: "成長過程中需多次脫殼，每次分前後半身依序進行。",
      image: { url: "https://example.com/4-4.png" }
    },
    q5: {
      story: "你想促進繁殖成功率。",
      question: "如何促進繁殖成功率？",
      options: ["穩定濕度與躲藏環境","多光照","放飼料多","常搖晃箱子"],
      answer: "A",
      explain: "穩定、安靜、濕潤且有躲藏空間是繁殖關鍵。鼠婦對驚嚇與光線變化極敏感。",
      image: { url: "https://example.com/4-5.png" }
    }
  },
  5: {
    title: "第五章：病蟲與災厄",
    q1: {
      story: "整箱突然靜止，你察覺異常。",
      question: "鼠婦死亡最常見原因？",
      options: ["過濕或發霉","吃太多","照太暗","玩太久"],
      answer: "A",
      explain: "箱體通風不良或濕度過高最易引起死亡。霉菌與細菌繁生會消耗氧氣並產毒。",
      image: { url: "https://example.com/5-1.png" }
    },
    q2: {
      story: "你發現箱內有白色絲狀物。",
      question: "飼養箱出現白色細絲物是？",
      options: ["黴菌","幼蟲","鼠婦蛋","絲蟲"],
      answer: "A",
      explain: "白色絲狀物為黴菌菌絲，常由殘餌或過濕引起。",
      image: { url: "https://example.com/5-2.png" }
    },
    q3: {
      story: "你打算防止箱內發霉。",
      question: "如何預防箱內發霉？",
      options: ["通風良好","灑糖粉","加水越多越好","加熱"],
      answer: "A",
      explain: "保持通風、定期清理、避免過濕是防霉三原則。",
      image: { url: "https://example.com/5-3.png" }
    },
    q4: {
      story: "發現寄生蟲時該怎麼辦？",
      question: "有寄生蟲時應該？",
      options: ["立刻隔離","放棄整箱","加食物","冷凍"],
      answer: "A",
      explain: "部分小型蟎蟲或寄生線蟲會危害鼠婦，應立刻隔離並換基質、清潔箱體。",
      image: { url: "https://example.com/5-4.png" }
    },
    q5: {
      story: "你觀察鼠婦健康狀態。",
      question: "哪一項表示鼠婦健康？",
      options: ["活動力強、殼有光澤","長時間蜷縮","呆滯不動","變黑乾枯"],
      answer: "A",
      explain: "健康鼠婦活動頻繁、外殼濕潤有光澤；若顏色暗沉、乾枯則代表脫水或病變。",
      image: { url: "https://example.com/5-5.png" }
    }
  },
  6: {
    title: "第六章：滾滾的回歸",
    q1: {
      story: "清晨時分，陽光灑進屋內，滾滾帶著新生命滾向門口。",
      question: "鼠婦最重要的生存要素是？",
      options: ["濕度","光照","噪音","顏色"],
      answer: "A",
      explain: "濕度直接影響鼠婦呼吸與代謝，是飼養首要條件。",
      image: { url: "https://example.com/6-1.png" }
    },
    q2: {
      story: "你想保持飼養箱清潔。",
      question: "飼養箱多久清理一次較好？",
      options: ["一週一次","每天","一年一次","永不清理"],
      answer: "A",
      explain: "定期（一週至兩週）清理可避免霉變與過多排泄物累積。",
      image: { url: "https://example.com/6-2.png" }
    },
    q3: {
      story: "你觀察牠在生態系的位置。",
      question: "鼠婦在生態系中的角色？",
      options: ["分解者","捕食者","生產者","消費者"],
      answer: "A",
      explain: "鼠婦屬於分解者，分解植物屍體並回收礦物質，促進生態循環。",
      image: { url: "https://example.com/6-3.png" }
    },
    q4: {
      story: "滾滾被稱為「生態清道夫」。",
      question: "鼠婦被稱為生態清道夫的原因？",
      options: ["能分解落葉與有機物","會吃垃圾","會搬家","會打掃"],
      answer: "A",
      explain: "鼠婦在自然界分解有機物殘體，維持環境潔淨，因此得名。",
      image: { url: "https://example.com/6-4.png" }
    },
    q5: {
      story: "滾滾留下一句話：「潮濕是我的家，腐葉是我的寶」。",
      question: "這象徵什麼？",
      options: ["鼠婦與自然共生的智慧","鼠婦很懶","鼠婦怕光","鼠婦不愛人類"],
      answer: "A",
      explain: "象徵「順應自然、理解環境即是飼養之道」。飼主與生物間的關係是共存而非控制。",
      image: { url: "https://example.com/6-5.png" }
    }
  }
};

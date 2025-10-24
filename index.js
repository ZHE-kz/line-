// index.js
import express from "express";
import crypto from "crypto";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const CHANNEL_ACCESS_TOKEN = process.env.CHANNEL_ACCESS_TOKEN || "";
const CHANNEL_SECRET = process.env.CHANNEL_SECRET || "";

if (!CHANNEL_ACCESS_TOKEN || !CHANNEL_SECRET) {
  console.warn("缺少 CHANNEL_ACCESS_TOKEN 或 CHANNEL_SECRET，請在 .env 中設定。");
}

// --- 完整 gameData（6 章 x 每章 5 題 + 詳解） ---
const gameData = {
  1: {
    title: "第一章：失蹤的鼠球",
    q1: {
      question: "鼠婦最喜歡的生活環境是什麼？",
      options: ["A. 乾燥、強光的地方", "B. 潮濕、陰暗的地方", "C. 沙漠地區", "D. 開放式陽光棚"],
      answer: "B",
      explain: "鼠婦需要潮濕的環境以維持其鰓樣呼吸構造的濕潤，通常出現在枯葉堆或陰暗處。"
    },
    q2: {
      question: "你要在店裡尋找滾滾，哪裡最有可能找到？",
      options: ["A. 陽台花盆底下", "B. 桌上", "C. 書櫃上方", "D. 燈罩內"],
      answer: "A",
      explain: "鼠婦喜歡陰暗潮濕，花盆底下或枯葉堆等處最容易找到。"
    },
    q3: {
      question: "鼠婦吃什麼？",
      options: ["A. 鮮肉", "B. 腐葉與枯木", "C. 花蜜", "D. 昆蟲卵"],
      answer: "B",
      explain: "鼠婦是腐食性分解者，主要以腐葉、枯木等有機質為食。"
    },
    q4: {
      question: "鼠婦失水會導致什麼問題？",
      options: ["A. 更活潑", "B. 脫殼困難", "C. 增加繁殖率", "D. 顏色變亮"],
      answer: "B",
      explain: "失水會造成外骨骼脫殼困難，因為脫殼需要體表與環境有足夠濕度。"
    },
    q5: {
      question: "滾滾被找到時，牠蜷成一球，是什麼行為？",
      options: ["A. 求偶", "B. 防禦反應", "C. 進食", "D. 睡覺"],
      answer: "B",
      explain: "蜷成球（conglobation）是鼠婦的防禦行為，用以保護柔軟腹部。"
    }
  },
  2: {
    title: "第二章：潮濕的契約",
    q1: {
      question: "鼠婦飼養箱底層材料最適合的是？",
      options: ["A. 純沙", "B. 腐葉土混椰磚", "C. 紙屑", "D. 石灰粉"],
      answer: "B",
      explain: "椰磚混合腐葉土能保濕又透氣，模擬自然落葉層，是常見基質。"
    },
    q2: {
      question: "維持濕度的最佳方法是？",
      options: ["A. 每天噴霧", "B. 不蓋蓋子", "C. 放除濕機", "D. 曬太陽"],
      answer: "A",
      explain: "輕度噴霧能維持濕度同時避免積水與發霉。"
    },
    q3: {
      question: "鼠婦主要呼吸器官是？",
      options: ["A. 肺", "B. 鰓樣構造", "C. 皮膚", "D. 氣管"],
      answer: "B",
      explain: "鼠婦具有鰓樣的呼吸構造，因此需保持濕潤以進行氣體交換。"
    },
    q4: {
      question: "為什麼不能讓飼養箱積水？",
      options: ["A. 會發霉、鼠婦溺死", "B. 鼠婦喜歡泡水", "C. 會變漂亮", "D. 增加孵化速度"],
      answer: "A",
      explain: "積水會造成厭氧、霉菌與缺氧，對鼠婦致命。"
    },
    q5: {
      question: "若環境過乾，鼠婦會？",
      options: ["A. 主動喝水", "B. 變成乾屍", "C. 飛走", "D. 打洞取水"],
      answer: "B",
      explain: "鼠婦若長期失水會脫水、殼硬化，嚴重時死亡。"
    }
  },
  3: {
    title: "第三章：食物的秘密",
    q1: {
      question: "鼠婦缺乏鈣質會怎樣？",
      options: ["A. 殼變薄或難以脫殼", "B. 變快", "C. 愛吃肉", "D. 不影響"],
      answer: "A",
      explain: "外骨骼含鈣，缺鈣會導致殼軟或脫殼失敗。"
    },
    q2: {
      question: "哪一種食物最能補鈣？",
      options: ["A. 蔬菜皮", "B. 墨魚骨粉", "C. 麵包", "D. 水果"],
      answer: "B",
      explain: "墨魚骨粉是常用的天然碳酸鈣補充來源，適合小型甲殼類。"
    },
    q3: {
      question: "鼠婦屬於哪一類動物？",
      options: ["A. 昆蟲", "B. 甲殼類", "C. 爬蟲類", "D. 軟體動物"],
      answer: "B",
      explain: "鼠婦屬節肢動物門、甲殼綱，是適應陸地的甲殼類。"
    },
    q4: {
      question: "鼠婦吃太多蛋白質會？",
      options: ["A. 促進繁殖", "B. 容易發臭", "C. 沒差", "D. 長角"],
      answer: "B",
      explain: "蛋白質殘留在潮濕環境下容易腐敗產生異味與細菌。"
    },
    q5: {
      question: "要防止食物發霉該怎麼辦？",
      options: ["A. 每天換新餵料", "B. 灑糖保存", "C. 增加光照", "D. 放冰箱"],
      answer: "A",
      explain: "少量並常更換餵料，保持通風與乾濕平衡，可防止黴變。"
    }
  },
  4: {
    title: "第四章：繁殖的祕密",
    q1: {
      question: "鼠婦的繁殖方式是？",
      options: ["A. 卵生", "B. 卵胎生", "C. 胎生", "D. 無性生殖"],
      answer: "B",
      explain: "鼠婦通常為卵胎生，母體育幼囊（marsupium）內孵化幼體。"
    },
    q2: {
      question: "鼠婦媽媽如何保護幼體？",
      options: ["A. 把卵埋在土裡", "B. 把卵放在育幼囊中", "C. 放在木屑上", "D. 放在背上"],
      answer: "B",
      explain: "育幼囊內有液體，提供濕潤與養分，保護幼體。"
    },
    q3: {
      question: "幼鼠婦孵化後第一件事是？",
      options: ["A. 吃食物", "B. 附著在母體上休息", "C. 馬上滾走", "D. 打洞"],
      answer: "B",
      explain: "剛孵化的幼體會待在母體腹下直到殼硬化再離開。"
    },
    q4: {
      question: "幼鼠婦成長需要脫殼幾次？",
      options: ["A. 約4~5次", "B. 1次", "C. 10次", "D. 不脫殼"],
      answer: "A",
      explain: "成長過程中會經歷多次脫殼（moults）。"
    },
    q5: {
      question: "如何促進繁殖成功率？",
      options: ["A. 穩定濕度與躲藏環境", "B. 多光照", "C. 放飼料多", "D. 常搖晃箱子"],
      answer: "A",
      explain: "穩定、安靜、濕潤與有藏身處最利於繁殖。"
    }
  },
  5: {
    title: "第五章：病蟲與災厄",
    q1: {
      question: "鼠婦死亡最常見原因？",
      options: ["A. 過濕或發霉", "B. 吃太多", "C. 照太暗", "D. 玩太久"],
      answer: "A",
      explain: "濕度失衡與黴菌是常見致死原因，會造成缺氧或毒素。"
    },
    q2: {
      question: "飼養箱出現白色細絲物是？",
      options: ["A. 黴菌", "B. 幼蟲", "C. 鼠婦蛋", "D. 絲蟲"],
      answer: "A",
      explain: "白色絲狀物多為黴菌菌絲，表示濕度與換氣問題。"
    },
    q3: {
      question: "如何預防箱內發霉？",
      options: ["A. 通風良好", "B. 灑糖粉", "C. 加水越多越好", "D. 加熱"],
      answer: "A",
      explain: "通風、定期清理與適當濕度是防霉關鍵。"
    },
    q4: {
      question: "有寄生蟲時應該？",
      options: ["A. 立刻隔離", "B. 放棄整箱", "C. 加食物", "D. 冷凍"],
      answer: "A",
      explain: "隔離感染個體、換基質與清潔箱具並視情況消毒。"
    },
    q5: {
      question: "哪一項表示鼠婦健康？",
      options: ["A. 活動力強、殼有光澤", "B. 長時間蜷縮", "C. 呆滯不動", "D. 變黑乾枯"],
      answer: "A",
      explain: "活躍、有光澤的殼通常代表水分與養分良好。"
    }
  },
  6: {
    title: "第六章：滾滾的回歸",
    q1: {
      question: "鼠婦最重要的生存要素是？",
      options: ["A. 濕度", "B. 光照", "C. 噪音", "D. 顏色"],
      answer: "A",
      explain: "濕度直接影響呼吸（鰓樣構造）與脫殼，是首要條件。"
    },
    q2: {
      question: "飼養箱多久清理一次較好？",
      options: ["A. 一週一次", "B. 每天", "C. 一年一次", "D. 永不清理"],
      answer: "A",
      explain: "一週至兩週例行清理可防止排泄物與殘料累積導致發霉。"
    },
    q3: {
      question: "鼠婦在生態系中的角色？",
      options: ["A. 分解者", "B. 捕食者", "C. 生產者", "D. 消費者"],
      answer: "A",
      explain: "牠們分解落葉等有機物，促進養分循環。"
    },
    q4: {
      question: "鼠婦被稱為「生態清道夫」的原因？",
      options: ["A. 能分解落葉與有機物", "B. 會吃垃圾", "C. 會搬家", "D. 會打掃"],
      answer: "A",
      explain: "分解有機殘體，使環境物質回收，故有此稱號。"
    },
    q5: {
      question: "滾滾留下一句話：「潮濕是我的家，腐葉是我的寶」，這象徵什麼？",
      options: ["A. 鼠婦與自然共生的智慧", "B. 鼠婦很懶", "C. 鼠婦怕光", "D. 鼠婦不愛人類"],
      answer: "A",
      explain: "象徵理解與尊重生物需求，與自然共存的理念。"
    }
  }
};

// --- 玩家進度（示範用：in-memory） ---
// production 時請改為 Redis / DB
const userProgress = {}; // key: userId => { chapter: number, question: number }

// --- LINE 簽章驗證 ---
function validateSignature(req) {
  const signature = req.headers["x-line-signature"] || "";
  const body = JSON.stringify(req.body);
  const hash = crypto.createHmac("sha256", CHANNEL_SECRET).update(body).digest("base64");
  return hash === signature;
}

// --- 回覆訊息函式 ---
async function replyMessage(replyToken, messages) {
  try {
    await axios.post(
      "https://api.line.me/v2/bot/message/reply",
      { replyToken, messages: Array.isArray(messages) ? messages : [messages] },
      {
        headers: {
          Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );
  } catch (err) {
    console.error("replyMessage error:", err.response ? err.response.data : err.message);
  }
}

// --- Webhook endpoint ---
app.post("/webhook", async (req, res) => {
  // 驗證簽章（建議在 production 啟用）
  if (process.env.DISABLE_SIGNATURE_CHECK !== "true" && !validateSignature(req)) {
    console.warn("Invalid signature");
    return res.status(401).send("Invalid signature");
  }

  const events = req.body.events || [];
  for (const event of events) {
    try {
      if (event.type !== "message" || event.message.type !== "text") continue;

      const userId = event.source.userId;
      const text = event.message.text.trim();
      // 初始化進度
      if (!userProgress[userId]) userProgress[userId] = null;

      // 指令處理
      if (text === "開始遊戲") {
        userProgress[userId] = { chapter: 1, question: 1 };
        const q = gameData[1].q1;
        await replyMessage(event.replyToken, {
          type: "text",
          text: `🐾《鼠婦之森：滾滾的守護者》\n\n${gameData[1].title}\n\nQ1: ${q.question}\n${q.options.join("\n")}\n\n請輸入 A/B/C/D`
        });
        continue;
      }

      if (!userProgress[userId]) {
        await replyMessage(event.replyToken, {
          type: "text",
          text: "輸入「開始遊戲」開始冒險。"
        });
        continue;
      }

      // 取得當前題目
      const { chapter, question } = userProgress[userId];
      const chapData = gameData[chapter];
      const qKey = "q" + question;
      const currentQ = chapData[qKey];

      // 下一章指令
      if (text === "下一章") {
        const nextChapter = chapter + 1;
        if (!gameData[nextChapter]) {
          await replyMessage(event.replyToken, { type: "text", text: "🎉 你已完成所有章節！恭喜！" });
          userProgress[userId] = null;
        } else {
          userProgress[userId] = { chapter: nextChapter, question: 1 };
          const nextQ = gameData[nextChapter].q1;
          await replyMessage(event.replyToken, {
            type: "text",
            text: `🐾 第 ${nextChapter} 章：${gameData[nextChapter].title}\n\nQ1: ${nextQ.question}\n${nextQ.options.join("\n")}\n\n請輸入 A/B/C/D`
          });
        }
        continue;
      }

      // 收到答案 A/B/C/D
      const ans = text.toUpperCase();
      if (["A", "B", "C", "D"].includes(ans)) {
        if (!currentQ) {
          await replyMessage(event.replyToken, { type: "text", text: "當前題目不存在，請輸入「下一章」或「開始遊戲」。" });
          continue;
        }

        let replyText = "";
        if (ans === currentQ.answer) {
          replyText = `✅ 正確！\n${currentQ.explain}`;
        } else {
          replyText = `❌ 錯誤。正確答案：${currentQ.answer}\n${currentQ.explain}`;
        }

        // 移動到本章的下一題或提示完成本章
        const nextQuestionNo = question + 1;
        if (chapData["q" + nextQuestionNo]) {
          userProgress[userId].question = nextQuestionNo;
          const nextQ = chapData["q" + nextQuestionNo];
          replyText += `\n\n📘 下一題：\nQ${nextQuestionNo}: ${nextQ.question}\n${nextQ.options.join("\n")}\n請輸入 A/B/C/D`;
        } else {
          replyText += `\n\n🎉 恭喜你完成第 ${chapter} 章！輸入「下一章」繼續。`;
        }

        await replyMessage(event.replyToken, { type: "text", text: replyText });
      } else {
        await replyMessage(event.replyToken, { type: "text", text: "請輸入 A/B/C/D 作答，或輸入「下一章」。" });
      }
    } catch (err) {
      console.error("event loop error:", err);
    }
  }

  res.sendStatus(200);
});

// 偵聽埠
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

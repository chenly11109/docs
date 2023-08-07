const { writePrompt, printPrompt } = require("./prompt");

const express = require("express");
require("dotenv").config();

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  organization: process.env.ORGNIZATION_ID,
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();

app.use(express.json());

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);

  // Command line input
  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const MODEL = "gpt-3.5-turbo-16k";
  // const systemPrompt = `You will be provided a question with several text fragments. Your task is to answer the question using only the provided fragment document and to cite the piece of the fragment used to answer the question. If the document does not contain the information needed to answer this question then simply write: "Insufficient information." If an answer to the question is provided, it must be annotated with a citation. Use the following format for to cite relevant text in fragment ({"引用自": …}). Answer the question in Chinese.`;
  // const userContent = `>>>\n[{\"MONALEESA-7研究的其他安全性分析结果如何？\":[{\"fragment\":\"全分析集 N=248 N=247 总缓解率a 39.1 (33.0, 45.2) 29.1 (23.5, 34.8) 临床获益率b 80.2 (75.3, 85.2) 67.2 (61.4, 73.1) 有可测量病灶的患者 N=192 N=199 总缓解率a 50.5 (43.4, 57.6) 36.2 (29.5, 42.9) 临床获益率b 81.8 (76.3, 87.2) 63.8 (57.1, 70.5) aORR：完全缓解+部分缓解的患者比例 bCBR：完全缓解+部分缓解+（疾病稳定或未完全缓解/疾病无进展时间≥24周）的患者比例 最终 OS分析 在第二次 OS 分析时（截止日期 2018 年 11 月 30 日），该研究满足了关键次要终点，OS 显示出有统计学意义的改善。 经证实的 OS 获益在各探索性亚组中保持一致，且两个治疗组的安全性特征仍然与主要分 析结果一致。 表 17以及图 6和 7提供了更为成熟的总生存期数据更新（截止日期 2018年 11月 30日）。 表 17 MONALEESA-7（E2301）的疗效结果（OS；截止日期 2018年 11月 30日） 总生存期，总体研究人群 Ribociclib 600 mg 安慰剂 N=335 N=337 事件数 - n [%] 83 (24.\",\"index\":0},{\"fragment\":\"凯丽隆®总体安全性良好，不良事件以血液学影响为主 Tripathy D, et al. Lancet Oncol. 2018 Jul;19(7):904-915. 中性粒细胞减少 潮热 恶心 白细胞减少 关节痛 MONALEESA-7研究中发生率前5位的不良事件 中性粒细胞减少是瑞波西利方案最常见的不良事件，其他不良反应以轻度为主 发生率(%)\",\"index\":1},{\"fragment\":\"这篇文章讨论了CDK4/6抑制剂的抑制活性差异，特别关注了药物Ribociclib。研究发现，与CDK6相比，Ribociclib对CDK4的抑制活性更高。这种活性差异在细胞系分析和生化分析中都观察到。文章还强调了Ribociclib对CDK4的高选择性，减少了非靶效应。与其他CDK4/6抑制剂如Palbociclib和Abemaciclib相比，Ribociclib对CDK4活性的抑制更强，同时对其他位点的抑制较弱，表明其选择性更高，非靶效应更少。总体而言，文章强调了Ribociclib作为CDK4/6抑制剂的独特特点和优势。  文章提供了关于药物Kisqali（Ribociclib）及其在绝经前或绝经期妇女中治疗激素受体阳性、HER2阴性晚期或转移性乳腺癌的适应症的信息。文章指出，Kisqali应与芳香化酶抑制剂和黄体生成素释放激素（LHRH）激动剂联合使用作为初始内分泌治疗。推荐剂量为每天口服600mg（3片），连续三周，然后休息一周，每个周期持续28天。文章还提到，包括NCCN乳腺癌治疗指南和中国抗癌协会乳腺癌诊断和治疗指南在内的多个指南推荐将CDK4/6抑制剂与内分泌治疗联合使用作为HR+/HER2-晚期或转移性乳腺癌的首选一线治疗。  文章讨论了MONALEESA-7研究的结果，该研究评估了Kisqali（ribociclib）与内分泌治疗联合治疗晚期乳腺癌的疗效和安全性。研究发现，Kisqali方案显著延长了无进展生存期（PFS），中位PFS为23.8个月，而安慰剂组为13.0个月。Kisqali组的疾病进展或死亡风险降低了45%。该研究还显示，与其他CDK4/6抑制剂相比，Kisqali的不良事件发生率较低。此外，Kisqali在总生存期（OS）方面也有显著改善，中位OS为58.7个月，而安慰剂组为48.0个月。总体而言，这些发现表明Kisqali是一种有效且耐受性良好的晚期乳腺癌治疗选择。  这篇文章似乎是一篇医学研究论文，因为它包含与医学术语相关的数字数据和缩写。然而，没有进一步的背景或信息，很难对文章进行简洁的摘要。所提供的段落似乎包含了与联合治疗及其疗效以及不良事件发生率相关的数字数据。然而，如果不了解具体研究的治疗方法或疾病情况，就无法提供有意义的摘要。\",\"index\":2},{\"fragment\":\"这篇文章讨论了管理中性粒细胞减少症、肝毒性和剂量调整的问题，这些问题与患者服用特定药物有关。中性粒细胞减少症是指中性粒细胞减少，可以通过实验室监测、剂量调整或停药来管理。观察到与其他药物联合使用时，服用该药物的患者出现了肝毒性，发生率较安慰剂组高。建议对肾功能或肝功能受损的患者进行剂量调整。该药物在儿童和老年患者中的安全性和有效性尚未确定。文章还提到了药物相互作用和对不良药物反应的密切监测的必要性。总的来说，该文章提供了关于服用该药物的患者的管理和剂量调整的指导。  该文章提供了关于中性粒细胞减少症、肝毒性、QT间期延长和其他毒性在接受特定药物治疗的患者中的剂量调整和管理的信息。对于中性粒细胞减少症，建议根据病情的严重程度进行剂量调整，对于严重病例，需要中断治疗直到恢复。肝毒性应在治疗前和治疗期间进行监测，如有必要，进行剂量调整或停药。一些患者观察到了QT间期延长，建议在与可能延长QT间期的其他药物联合使用时要谨慎。其他毒性应根据临床指征进行管理，进行适当的治疗和监测。文章还提到了当该药物与强CYP3A抑制剂联合使用时需要进行剂量调整。  该文章提供了一项评估Kisqali（ribociclib）与内分泌治疗联合治疗HR阳性、HER2阴性晚期乳腺癌的疗效和安全性的研究数据。研究显示，与安慰剂相比，Kisqali显著改善了总生存期（OS），死亡风险降低了23.5%。Kisqali组的中位OS为63.9个月，安慰剂组为51.4个月。Kisqali在下一线治疗中的疾病进展时间或死亡（PFS2）也比安慰剂延长。与Kisqali相关的最常见的不良反应包括恶心、腹泻和呕吐。总的来说，该研究支持将Kisqali作为HR阳性、HER2阴性晚期乳腺癌的有效治疗选择。  一项对乳腺癌细胞系进行的研究发现，该药物可以抑制细胞增殖。在动物研究中，该药物单独能够引起肿瘤退缩，这与在耐受剂量下抑制pRb磷酸化有关。在使用来自患者的雌激素受体阳性乳腺癌异种移植模型的体内研究中，该药物与抗雌激素（如来曲唑）的联合使用相比单独使用更能抑制肿瘤生长。停药后，肿瘤再生延迟了33天。此外，该药物与富勒酸联合在免疫缺陷小鼠的ZR751 ER+人乳腺癌异种移植模型中完全抑制了肿瘤生长。文章还提到了该药物可能引起QT间期延长和生殖毒性的潜在风险。然而，该药物在儿科患者中的安全性和有效性尚未确定。  该文章提供了关于一种名为ribociclib的药物在治疗晚期乳腺癌中的疗效和安全性的临床试验数据。结果显示，与安慰剂加来曲唑相比，ribociclib加来曲唑显著改善了无进展生存期（PFS）。ribociclib组的疾病进展或死亡风险降低了43.2%。ribociclib组的总体反应率（ORR）和临床获益率（CBR）也较高。该药物在包括肝脏和/或肺部转移的各个亚组患者中均有效。该研究还评估了该药物在老年患者中的安全性和有效性，并发现与年轻患者相比没有显著差异。文章还讨论了与CYP3A抑制剂和诱导剂的药物相互作用。  该文章提供了与使用ribociclib这种用于治疗某些癌症的药物相关的不良药物反应（ADR）的数据。数据来自MONALEESA-3和MONALEESA-7两项研究，包括自发病例报告和文献病例。最常报告的ADR包括中性粒细胞减少症、皮疹、瘙痒、疲劳和呼吸系统疾病。其他报告的ADR包括肝毒性、皮肤疾病、代谢紊乱和神经系统疾病。文章还包括有关实验室异常的信息，如血液检查异常。由于数据收集的性质，这些ADR的频率无法可靠评估。总的来说，该文章强调了使用ribociclib可能出现的副作用。  该文章讨论了在怀孕和哺乳期使用Rivaroxaban药物的潜在风险。动物研究表明，高剂量的Rivaroxaban可能导致胎儿畸形和生长异常，包括肺叶减少、主动脉弓中的额外血管、小眼睛、膈疝和肺叶缺失。在动物研究中，Rivaroxaban还被发现对睾丸的生殖细胞产生不良影响，导致萎缩和精子计数减少。文章还提到了一项为期两年的大鼠研究，发现暴露于Rivaroxaban的雌鼠中子宫/子宫内膜肿瘤的发生率增加，雄鼠中甲状腺滤泡瘤的发生率增加。文章得出结论，需要进行更多研究以确定Rivaroxaban在人体中的潜在风险。  该文章讨论了两项临床试验MONALEESA-7和MONALEESA-2的结果，这两项试验评估了ribociclib与其他治疗方法联合治疗晚期乳腺癌的疗效。在MONALEESA-7中，研究发现ribociclib加tamoxifen或非甾体类芳香化酶抑制剂（NSAI）与安慰剂加tamoxifen或NSAI相比显著改善了无进展生存期（PFS）。ribociclib组的中位PFS为23.8个月，安慰剂组为13.0个月。在MONALEESA-2中，ribociclib加来曲唑与安慰剂加来曲唑相比，在PFS方面有显著改善。ribociclib组的中位PFS为27.5个月，安慰剂组为13.8个月。总的来说，这些研究表明，ribociclib与其他治疗方法联合使用可以有效改善晚期乳腺癌患者的PFS。\",\"index\":3},{\"fragment\":\"这篇文章讨论了乳腺癌患者的生活质量问题。生活质量已成为治疗目标的重要方面，包括身体、心理和社交福祉等各个方面。文章强调了绝经前乳腺癌患者面临的独特挑战，包括疾病进展、治疗相关症状和社交功能缺陷，这些都可能进一步影响治疗依从性和生活质量。文章强调了CDK4/6抑制剂的独特机制，特别提到了Kisqali（ribociclib）这种药物，在改善或维持HR+/HER2-晚期乳腺癌患者的生活质量方面显示出显著的疗效和安全性。MONALEESA-7研究表明，Kisqali是唯一一个在总生存期和生活质量方面都取得显著益处的CDK4/6抑制剂。  文章讨论了在MONALEESA-7研究中使用Kisqali（ribociclib）的安全性和不良事件。Kisqali的整体安全性与安慰剂相似，除了中性粒细胞计数下降。Kisqali组的不良事件发生率大于20%。停用Kisqali治疗的最常见原因是丙氨酸氨基转移酶和天冬氨酸氨基转移酶水平升高、药物性肝损伤和QTcF延长。QTcF延长的发生率较低，大多数病例为1-2级，没有临床症状或心律失常。在ESMO-MCBS评分中，Kisqali也被发现是CDK4/6抑制剂中临床效益最高的，表明它具有全面的疗效、生活质量和安全性益处。  Kisqali（ribociclib）是一种高度选择性的CDK4抑制剂，对其他CDK激酶的抑制作用较小，减少了非特异性作用。它主要针对抑制CDK4和CDK6，而其他药物如palbociclib和abemaciclib具有更广泛的激酶活性。CDK4/6抑制剂经历了三代的发展，第三代在疗效和安全性方面取得了显著改进。第一代抑制剂，如flavopiridol和roscovitine，疗效有限且毒性强。第二代抑制剂，如AG-024322和dinaciclib，在靶点选择性上有所改进，但在疗效和安全性方面仍存在局限性。第三代抑制剂，包括Kisqali、palbociclib和abemaciclib，显示出精确的CDK4/6抑制和显著的疗效和安全性改进。abemaciclib具有最广泛的激酶选择性，包括CDK2、CDK4、CDK5、CDK6和CDK9。\",\"index\":4}]},{\"MONALEESA-7\":[{\"fragment\":\"MONALEESA-7：OS疗效1 凯丽隆®在亚裔人群中观察到更明显的获益趋势 CI：置信区间；ECOG：美国东部肿瘤协作组；HR：风险比；mOS：中位总生存期；NSAI：非甾体芳香化酶抑制剂；NR：未达到 MONALEESA-7 0.125 0.25 0.5 1 2 4 8 所有联合方案中均含戈舍瑞林。瑞波西利不建议与他莫昔芬联用 Tripathy D, et al. 2020 SABCS; 2020 Dec 8-11; Virtual. Poster PD2-04.\",\"index\":5}]},{\"分析结果\":[{\"fragment\":\"使用实体瘤疗效评价标准（RECIST v1.1），根据研究者对全分析集（所有接受随机化的 患者）的评估，并得到盲态独立中心影像学评估的确认后，在观察到 80%的目标无进展生存 期（PFS）事件并开展计划的期中分析时，达到了研究的主要终点。 疗效结果显示，与全分析集（FAS）中接受安慰剂+来曲唑治疗的患者相比，接受本品+来 曲唑治疗的患者的 PFS 出现统计学意义的改善（HR：0.556；95%CI：0.429，0.720；单侧分 层 Log-rank 检验 p 值=0.00000329），估计本品+来曲唑治疗组患者进展风险降低 44%。主要 分析时，本品+来曲唑组没有达到中位 PFS（95%CI：19.3，NE）。安慰剂+来曲唑组的中位 PFS 为 14.7 个月（95%CI：13.0，16.5）。年龄、人种、既往是否接受过辅助/新辅助化疗或者 激素治疗、是否累及肝脏和/或肺部、是否仅有骨转移亚组中的结果一致。 无进展生存期总结见表 10，PFS的 Kaplan-Meier曲线见图 1。基于盲态独立中心影像学评 估的 PFS 结果与基于研究者评估的主要疗效结果一致（HR：\",\"index\":6}]}]`;

  const systemPrompt = `
You are a Novartis Pharmaceutical sales representative, and you are good at answer doctor(user) questions.
The $FragmentJson text is between >>> and <<<. "User's question xxx" is the question. fragment is the doc text and some keywords in Novartis database searched based on the question .
The format of $FragmentJson is:"""
    [
    ({
      "User's question xxx": [
        {
          index: 0,
          fragment: "xxx",
        },
        {
          Index: 1,
          fragment: "xxx",
        },
      ],
    },
    {
      "Keyword xxx": [
        {
          index: 2,
          fragment: "xxx",
        },
      ],
    })
  ]"""


NOTICE:
0. do not repeat the question.
1. If none of the fragments can answer the question, say you do not know based on our database.
2. Generalize your answer based on the most related context.
3. If the fragments can answer the question, please quote the index of the fragment in the answer. The quoting format must use this format: "xxx[1]... xxx[2]... xxx[n]".
4. Use Markdown format first before using other format.
5. All quotes should occur during the answer process, do not put all output at the end of the answer.
6. Do not list the original text of the fragments you referenced from $FragmentJson at the end of the answer, such as “References: xxx”、“参考文献：xxx”、“引用文献：xxx”、“参考文献索引：xxx”
7.The language of the answer must be consistent with the language of the question, for example:
  - If most of the questions are in Chinese, then the answers should also be in Chinese.
  - If most of the questions are in English, the answers should also be in English.
  
Start now!
  `;
  const userQuestion = "MONALEESA-7研究ORR分析结果如何";
  const userContent = `>>>\n[{\“MONALEESA-7研究 ORR分析结果如何":[{\"fragment\":\"全分析集 N=248 N=247 总缓解率a 39.1 (33.0, 45.2) 29.1 (23.5, 34.8) 临床获益率b 80.2 (75.3, 85.2) 67.2 (61.4, 73.1) 有可测量病灶的患者 N=192 N=199 总缓解率a 50.5 (43.4, 57.6) 36.2 (29.5, 42.9) 临床获益率b 81.8 (76.3, 87.2) 63.8 (57.1, 70.5) aORR：完全缓解+部分缓解的患者比例 bCBR：完全缓解+部分缓解+（疾病稳定或未完全缓解/疾病无进展时间≥24周）的患者比例 最终 OS分析 在第二次 OS 分析时（截止日期 2018 年 11 月 30 日），该研究满足了关键次要终点，OS 显示出有统计学意义的改善。 经证实的 OS 获益在各探索性亚组中保持一致，且两个治疗组的安全性特征仍然与主要分 析结果一致。 表 17以及图 6和 7提供了更为成熟的总生存期数据更新（截止日期 2018年 11月 30日）。 表 17 MONALEESA-7（E2301）的疗效结果（OS；截止日期 2018年 11月 30日） 总生存期，总体研究人群 Ribociclib 600 mg 安慰剂 N=335 N=337 事件数 - n [%] 83 (24.\",\"index\":0},{\"fragment\":\"凯丽隆®总体安全性良好，不良事件以血液学影响为主 Tripathy D, et al. Lancet Oncol. 2018 Jul;19(7):904-915. 中性粒细胞减少 潮热 恶心 白细胞减少 关节痛 MONALEESA-7研究中发生率前5位的不良事件 中性粒细胞减少是瑞波西利方案最常见的不良事件，其他不良反应以轻度为主 发生率(%)\",\"index\":1},{\"fragment\":\"这篇文章讨论了CDK4/6抑制剂的抑制活性差异，特别关注了药物Ribociclib。研究发现，与CDK6相比，Ribociclib对CDK4的抑制活性更高。这种活性差异在细胞系分析和生化分析中都观察到。文章还强调了Ribociclib对CDK4的高选择性，减少了非靶效应。与其他CDK4/6抑制剂如Palbociclib和Abemaciclib相比，Ribociclib对CDK4活性的抑制更强，同时对其他位点的抑制较弱，表明其选择性更高，非靶效应更少。总体而言，文章强调了Ribociclib作为CDK4/6抑制剂的独特特点和优势。  文章提供了关于药物Kisqali（Ribociclib）及其在绝经前或绝经期妇女中治疗激素受体阳性、HER2阴性晚期或转移性乳腺癌的适应症的信息。文章指出，Kisqali应与芳香化酶抑制剂和黄体生成素释放激素（LHRH）激动剂联合使用作为初始内分泌治疗。推荐剂量为每天口服600mg（3片），连续三周，然后休息一周，每个周期持续28天。文章还提到，包括NCCN乳腺癌治疗指南和中国抗癌协会乳腺癌诊断和治疗指南在内的多个指南推荐将CDK4/6抑制剂与内分泌治疗联合使用作为HR+/HER2-晚期或转移性乳腺癌的首选一线治疗。  文章讨论了MONALEESA-7研究的结果，该研究评估了Kisqali（ribociclib）与内分泌治疗联合治疗晚期乳腺癌的疗效和安全性。研究发现，Kisqali方案显著延长了无进展生存期（PFS），中位PFS为23.8个月，而安慰剂组为13.0个月。Kisqali组的疾病进展或死亡风险降低了45%。该研究还显示，与其他CDK4/6抑制剂相比，Kisqali的不良事件发生率较低。此外，Kisqali在总生存期（OS）方面也有显著改善，中位OS为58.7个月，而安慰剂组为48.0个月。总体而言，这些发现表明Kisqali是一种有效且耐受性良好的晚期乳腺癌治疗选择。  这篇文章似乎是一篇医学研究论文，因为它包含与医学术语相关的数字数据和缩写。然而，没有进一步的背景或信息，很难对文章进行简洁的摘要。所提供的段落似乎包含了与联合治疗及其疗效以及不良事件发生率相关的数字数据。然而，如果不了解具体研究的治疗方法或疾病情况，就无法提供有意义的摘要。\",\"index\":2},{\"fragment\":\"这篇文章讨论了管理中性粒细胞减少症、肝毒性和剂量调整的问题，这些问题与患者服用特定药物有关。中性粒细胞减少症是指中性粒细胞减少，可以通过实验室监测、剂量调整或停药来管理。观察到与其他药物联合使用时，服用该药物的患者出现了肝毒性，发生率较安慰剂组高。建议对肾功能或肝功能受损的患者进行剂量调整。该药物在儿童和老年患者中的安全性和有效性尚未确定。文章还提到了药物相互作用和对不良药物反应的密切监测的必要性。总的来说，该文章提供了关于服用该药物的患者的管理和剂量调整的指导。  该文章提供了关于中性粒细胞减少症、肝毒性、QT间期延长和其他毒性在接受特定药物治疗的患者中的剂量调整和管理的信息。对于中性粒细胞减少症，建议根据病情的严重程度进行剂量调整，对于严重病例，需要中断治疗直到恢复。肝毒性应在治疗前和治疗期间进行监测，如有必要，进行剂量调整或停药。一些患者观察到了QT间期延长，建议在与可能延长QT间期的其他药物联合使用时要谨慎。其他毒性应根据临床指征进行管理，进行适当的治疗和监测。文章还提到了当该药物与强CYP3A抑制剂联合使用时需要进行剂量调整。  该文章提供了一项评估Kisqali（ribociclib）与内分泌治疗联合治疗HR阳性、HER2阴性晚期乳腺癌的疗效和安全性的研究数据。研究显示，与安慰剂相比，Kisqali显著改善了总生存期（OS），死亡风险降低了23.5%。Kisqali组的中位OS为63.9个月，安慰剂组为51.4个月。Kisqali在下一线治疗中的疾病进展时间或死亡（PFS2）也比安慰剂延长。与Kisqali相关的最常见的不良反应包括恶心、腹泻和呕吐。总的来说，该研究支持将Kisqali作为HR阳性、HER2阴性晚期乳腺癌的有效治疗选择。  一项对乳腺癌细胞系进行的研究发现，该药物可以抑制细胞增殖。在动物研究中，该药物单独能够引起肿瘤退缩，这与在耐受剂量下抑制pRb磷酸化有关。在使用来自患者的雌激素受体阳性乳腺癌异种移植模型的体内研究中，该药物与抗雌激素（如来曲唑）的联合使用相比单独使用更能抑制肿瘤生长。停药后，肿瘤再生延迟了33天。此外，该药物与富勒酸联合在免疫缺陷小鼠的ZR751 ER+人乳腺癌异种移植模型中完全抑制了肿瘤生长。文章还提到了该药物可能引起QT间期延长和生殖毒性的潜在风险。然而，该药物在儿科患者中的安全性和有效性尚未确定。  该文章提供了关于一种名为ribociclib的药物在治疗晚期乳腺癌中的疗效和安全性的临床试验数据。结果显示，与安慰剂加来曲唑相比，ribociclib加来曲唑显著改善了无进展生存期（PFS）。ribociclib组的疾病进展或死亡风险降低了43.2%。ribociclib组的总体反应率（ORR）和临床获益率（CBR）也较高。该药物在包括肝脏和/或肺部转移的各个亚组患者中均有效。该研究还评估了该药物在老年患者中的安全性和有效性，并发现与年轻患者相比没有显著差异。文章还讨论了与CYP3A抑制剂和诱导剂的药物相互作用。  该文章提供了与使用ribociclib这种用于治疗某些癌症的药物相关的不良药物反应（ADR）的数据。数据来自MONALEESA-3和MONALEESA-7两项研究，包括自发病例报告和文献病例。最常报告的ADR包括中性粒细胞减少症、皮疹、瘙痒、疲劳和呼吸系统疾病。其他报告的ADR包括肝毒性、皮肤疾病、代谢紊乱和神经系统疾病。文章还包括有关实验室异常的信息，如血液检查异常。由于数据收集的性质，这些ADR的频率无法可靠评估。总的来说，该文章强调了使用ribociclib可能出现的副作用。  该文章讨论了在怀孕和哺乳期使用Rivaroxaban药物的潜在风险。动物研究表明，高剂量的Rivaroxaban可能导致胎儿畸形和生长异常，包括肺叶减少、主动脉弓中的额外血管、小眼睛、膈疝和肺叶缺失。在动物研究中，Rivaroxaban还被发现对睾丸的生殖细胞产生不良影响，导致萎缩和精子计数减少。文章还提到了一项为期两年的大鼠研究，发现暴露于Rivaroxaban的雌鼠中子宫/子宫内膜肿瘤的发生率增加，雄鼠中甲状腺滤泡瘤的发生率增加。文章得出结论，需要进行更多研究以确定Rivaroxaban在人体中的潜在风险。  该文章讨论了两项临床试验MONALEESA-7和MONALEESA-2的结果，这两项试验评估了ribociclib与其他治疗方法联合治疗晚期乳腺癌的疗效。在MONALEESA-7中，研究发现ribociclib加tamoxifen或非甾体类芳香化酶抑制剂（NSAI）与安慰剂加tamoxifen或NSAI相比显著改善了无进展生存期（PFS）。ribociclib组的中位PFS为23.8个月，安慰剂组为13.0个月。在MONALEESA-2中，ribociclib加来曲唑与安慰剂加来曲唑相比，在PFS方面有显著改善。ribociclib组的中位PFS为27.5个月，安慰剂组为13.8个月。总的来说，这些研究表明，ribociclib与其他治疗方法联合使用可以有效改善晚期乳腺癌患者的PFS。\",\"index\":3},{\"fragment\":\"这篇文章讨论了乳腺癌患者的生活质量问题。生活质量已成为治疗目标的重要方面，包括身体、心理和社交福祉等各个方面。文章强调了绝经前乳腺癌患者面临的独特挑战，包括疾病进展、治疗相关症状和社交功能缺陷，这些都可能进一步影响治疗依从性和生活质量。文章强调了CDK4/6抑制剂的独特机制，特别提到了Kisqali（ribociclib）这种药物，在改善或维持HR+/HER2-晚期乳腺癌患者的生活质量方面显示出显著的疗效和安全性。MONALEESA-7研究表明，Kisqali是唯一一个在总生存期和生活质量方面都取得显著益处的CDK4/6抑制剂。  文章讨论了在MONALEESA-7研究中使用Kisqali（ribociclib）的安全性和不良事件。Kisqali的整体安全性与安慰剂相似，除了中性粒细胞计数下降。Kisqali组的不良事件发生率大于20%。停用Kisqali治疗的最常见原因是丙氨酸氨基转移酶和天冬氨酸氨基转移酶水平升高、药物性肝损伤和QTcF延长。QTcF延长的发生率较低，大多数病例为1-2级，没有临床症状或心律失常。在ESMO-MCBS评分中，Kisqali也被发现是CDK4/6抑制剂中临床效益最高的，表明它具有全面的疗效、生活质量和安全性益处。  Kisqali（ribociclib）是一种高度选择性的CDK4抑制剂，对其他CDK激酶的抑制作用较小，减少了非特异性作用。它主要针对抑制CDK4和CDK6，而其他药物如palbociclib和abemaciclib具有更广泛的激酶活性。CDK4/6抑制剂经历了三代的发展，第三代在疗效和安全性方面取得了显著改进。第一代抑制剂，如flavopiridol和roscovitine，疗效有限且毒性强。第二代抑制剂，如AG-024322和dinaciclib，在靶点选择性上有所改进，但在疗效和安全性方面仍存在局限性。第三代抑制剂，包括Kisqali、palbociclib和abemaciclib，显示出精确的CDK4/6抑制和显著的疗效和安全性改进。abemaciclib具有最广泛的激酶选择性，包括CDK2、CDK4、CDK5、CDK6和CDK9。\",\"index\":4}]},{\"MONALEESA-7\":[{\"fragment\":\"MONALEESA-7：OS疗效1 凯丽隆®在亚裔人群中观察到更明显的获益趋势 CI：置信区间；ECOG：美国东部肿瘤协作组；HR：风险比；mOS：中位总生存期；NSAI：非甾体芳香化酶抑制剂；NR：未达到 MONALEESA-7 0.125 0.25 0.5 1 2 4 8 所有联合方案中均含戈舍瑞林。瑞波西利不建议与他莫昔芬联用 Tripathy D, et al. 2020 SABCS; 2020 Dec 8-11; Virtual. Poster PD2-04.\",\"index\":5}]},{\"分析结果\":[{\"fragment\":\"使用实体瘤疗效评价标准（RECIST v1.1），根据研究者对全分析集（所有接受随机化的 患者）的评估，并得到盲态独立中心影像学评估的确认后，在观察到 80%的目标无进展生存 期（PFS）事件并开展计划的期中分析时，达到了研究的主要终点。 疗效结果显示，与全分析集（FAS）中接受安慰剂+来曲唑治疗的患者相比，接受本品+来 曲唑治疗的患者的 PFS 出现统计学意义的改善（HR：0.556；95%CI：0.429，0.720；单侧分 层 Log-rank 检验 p 值=0.00000329），估计本品+来曲唑治疗组患者进展风险降低 44%。主要 分析时，本品+来曲唑组没有达到中位 PFS（95%CI：19.3，NE）。安慰剂+来曲唑组的中位 PFS 为 14.7 个月（95%CI：13.0，16.5）。年龄、人种、既往是否接受过辅助/新辅助化疗或者 激素治疗、是否累及肝脏和/或肺部、是否仅有骨转移亚组中的结果一致。 无进展生存期总结见表 10，PFS的 Kaplan-Meier曲线见图 1。基于盲态独立中心影像学评 估的 PFS 结果与基于研究者评估的主要疗效结果一致（HR：\",\"index\":6}]}]`;
  const askQuestion = () => {
    // rl.question("Enter the question: ", (question) => {
    openai
      .createChatCompletion({
        model: MODEL,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userContent },
        ],
        top_p: 0.1,
        n: 1,
        max_tokens: Infinity,
      })
      .then((res) => {
        console.log(res?.data?.choices);
        writePrompt({
          system: systemPrompt,
          user: userQuestion,
          answer: res?.data?.choices.map((item) => item.message.content),
        }).then((prompts) => printPrompt(prompts));
      })
      .catch((err) => {
        console.log("ERROR:", err?.response?.data?.error);
      });
    // });
  };
  askQuestion();
});

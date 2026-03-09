import { motion } from "motion/react";
import { Building2, Briefcase, Code2, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import demoVideo from "../../9b882fca7ee3b1a2518ff9741e96977b.mp4";

const cyberTaokeDemoUrl = "AI-Decision3/index.html";

const experiences = [
  {
    company: "美的集团 AI 研究院",
    role: "AIGC 算法工程师（Embedding 模型微调）",
    period: "2025.6 - 2025.12",
    location: "中国佛山",
    achievements: [
      "负责工业知识库 RAG 系统的 Embedding 模型微调与落地",
      "使用 Qwen3-0.6B SS-JFT 显著降低幻觉，并将首答命中率提升至 +69.13%",
      "将推理链路压缩到 ~2GB 显存，实现边缘设备可部署的低成本方案",
    ],
    icon: Building2,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    company: "赛博淘客",
    role: "二手交易智能决策系统 · 独立产品开发者",
    period: "2025.12 - 2026.2",
    location: "远程",
    achievements: [
      "从 0 到 1 打造一款「帮用户看懂二手市场」的网页工具，覆盖多家主流二手平台",
      "设计「一键分析」体验：自动汇总不同平台的价格和成色，生成价格区间、推荐价和注意事项",
      "结合图表和 AI 文本说明，让不懂行情的用户也能在几秒内判断这笔二手交易值不值",
    ],
    icon: Code2,
    gradient: "from-blue-500 to-purple-500",
  },
  {
    company: "梅山矿业",
    role: "工业智能决策系统产品负责人",
    period: "2024.10 - 2025.3",
    location: "中国梅山",
    achievements: [
      "把复杂的工控操作梳理成「一句话就能说清需求」的智能决策系统，让一线员工说出问题就能拿到诊断和调参建议",
      "没有盲目追求全自动，而是设计「规则 + AI」双保险：关键指令必须先通过安全规则，再由专家确认后才能下发到设备",
      "落地「AI 深度分析 → 人工一键确认 → 系统自动执行」的人机协同流程，并把每次决策沉淀成结构化数据，为后续模型升级和更高程度自动化打基础",
    ],
    icon: Briefcase,
    gradient: "from-purple-500 to-pink-500",
  },
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-black">
      {/* Subtle background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">职业历程</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            从算法工程到产品领导力
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:border-primary/60 hover:bg-primary/10"
            onClick={() => window.open('mailto:2470968@stu.neu.edu.cn', '_blank')}
          >
            讨论您的 AI 产品挑战
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative group"
              >
                {/* Hover glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-50 blur transition duration-500" />

                <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors duration-300">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Icon section */}
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl mb-2 text-primary">{exp.company}</h3>
                          <p className="text-lg text-foreground/90">{exp.role}</p>
                        </div>
                        <div className="mt-2 lg:mt-0 text-left lg:text-right">
                          <div className="font-mono text-sm text-primary">{exp.period}</div>
                          <div className="text-sm text-muted-foreground">{exp.location}</div>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-foreground/80">{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {exp.company === "梅山矿业" && (
                        <div className="mt-4">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-primary/30 hover:border-primary/60 hover:bg-primary/10"
                            onClick={() => window.open(demoVideo, "_blank")}
                          >
                            观看系统演示视频
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      )}

                      {exp.company === "赛博淘客" && (
                        <div className="mt-4">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-primary/30 hover:border-primary/60 hover:bg-primary/10"
                            onClick={() => window.open(cyberTaokeDemoUrl, "_blank")}
                          >
                            观看产品演示界面
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:border-primary/60 hover:bg-primary/10"
            onClick={() => window.open('mailto:2470968@stu.neu.edu.cn', '_blank')}
          >
            讨论您的 AI 产品挑战
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
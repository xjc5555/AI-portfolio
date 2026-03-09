import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown, ChevronUp, Shield, ShoppingCart, Factory, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import demoVideo from "../../9b882fca7ee3b1a2518ff9741e96977b.mp4";

const cyberTaokeDemoUrl = "/AI-Decision3/index.html";

const caseStudies = [
  {
    id: 1,
    title: "美的 AI 研究院",
    subtitle: "工业合规 RAG 系统",
    tags: ["RAG", "LLM 微调", "边缘部署"],
    icon: Factory,
    gradient: "from-cyan-500 to-blue-500",
    challenge: "解决工业知识系统中的幻觉问题，同时降低边缘设备部署的计算成本。",
    solution: "使用 Qwen3-0.6B 结构-语义联合微调（SS-JFT）重构架构，实现 ~2GB 显存部署。",
    impact: [
      { label: "首答命中率", value: "+69.13%" },
      { label: "召回率", value: "+77.54%" },
      { label: "显存优化", value: "~2GB" },
    ],
    techStack: ["Qwen3-0.6B", "RAG", "SS-JFT", "边缘计算"],
    keyInsight: "平衡算法深度与商业权衡——证明在特定领域应用中，更小的优化模型可以超越更大的模型。",
  },
  {
    id: 2,
    title: "赛博淘客 · AI-Decision3",
    subtitle: "二手交易智能决策系统",
    tags: ["二手交易", "AI 决策", "价格对比"],
    icon: ShoppingCart,
    gradient: "from-blue-500 to-purple-500",
    challenge: "二手平台很多、价格乱，普通人想「放心捡漏一台手机」要在多个 App 来回切换、做大量功课。",
    solution: "做一款「帮你看懂二手市场」的小工具：自动把闲鱼、转转等平台上的信息抓取回来，整理出价格区间和成色，再用大模型生成通俗易懂的分析报告和购买建议，让用户一眼看到「现在值不值得买」「更合适的价格是多少」。",
    impact: [
      { label: "覆盖平台", value: "多家主流二手平台" },
      { label: "分析维度", value: "价格区间 / 成色 / 平台" },
      { label: "生成报告用时", value: "秒级" },
    ],
    techStack: [
      "Python + Flask 后端",
      "多平台二手数据抓取与清洗",
      "大模型分析报告生成",
      "图表可视化与历史记录",
    ],
    keyInsight:
      "先用系统帮用户把「复杂的信息」整理干净，再用 AI 把结论讲清楚，让不懂行的人也能安心做决策——技术细节对用户是隐藏的，但决策体验是明显变轻松的。",
  },
  {
    id: 3,
    title: "工业智能决策系统",
    subtitle: "梅山矿业安全系统",
    tags: ["工业场景", "规则+AI", "人机协同"],
    icon: Shield,
    gradient: "from-purple-500 to-pink-500",
    challenge:
      "矿区现场设备多、工序长、风险高，一线员工既要盯参数又要照顾安全告警，很难在高压环境下做到「既快又稳」。",
    solution:
      "围绕一线员工的真实工作流重新设计系统：把繁琐的操作封装成可复用的「一句话诊断与调参」能力，设计「规则+AI」双重安全护栏，只有同时满足安全规则和专家红线的指令才允许真正下达到设备；交互上采用「AI 先给出原因和建议 → 人工一键确认 → 系统自动执行」的闭环，并同步记录为结构化数据，持续反哺后续模型对齐和策略优化。",
    impact: [
      { label: "安全合规", value: "100%" },
      { label: "规则违规预防", value: "0" },
      { label: "模拟数据集规模", value: "5K+ 条目" },
    ],
    techStack: ["规则引擎", "工业监控系统集成", "LLM 决策助手", "结构化决策数据仓库"],
    keyInsight:
      "在高风险工业场景里，比起一开始就追求「完全自动驾驶」，更重要的是先把人、规则和 AI 的边界画清楚：让一线员工真正敢用、愿用，系统才能安全地一步步走向更高程度的自动化。",
    mockDataNote: "包含交互式 PRD 组件和全面的模拟数据集，展示生产就绪的思维方式。",
  },
];

export function CaseStudies() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="case-studies" className="py-20 relative overflow-hidden bg-gradient-to-b from-black via-card/20 to-black">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">AI 产品深度剖析</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            将复杂算法与商业价值连接的真实应用
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            const isExpanded = expandedId === study.id;

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${study.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500`} />

                <div className="relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-300">
                  {/* Header - always visible */}
                  <button
                    onClick={() => toggleExpand(study.id)}
                    className="w-full p-8 text-left hover:bg-card/50 transition-colors duration-200"
                  >
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${study.gradient} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className="text-2xl mb-1">{study.title}</h3>
                            <p className="text-lg text-primary">{study.subtitle}</p>
                          </div>
                          <div className="flex-shrink-0">
                            {isExpanded ? (
                              <ChevronUp className="w-6 h-6 text-primary" />
                            ) : (
                              <ChevronDown className="w-6 h-6 text-muted-foreground" />
                            )}
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {study.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm font-mono text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Expanded content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 space-y-6 border-t border-border/50">
                      <div className="pt-6 space-y-4">
                        {/* Challenge */}
                        <div>
                          <h4 className="text-sm font-mono text-primary mb-2">// 挑战</h4>
                          <p className="text-foreground/80 leading-relaxed">{study.challenge}</p>
                        </div>

                        {/* Solution */}
                        <div>
                          <h4 className="text-sm font-mono text-primary mb-2">// 解决方案</h4>
                          <p className="text-foreground/80 leading-relaxed">{study.solution}</p>
                        </div>

                        {/* Impact metrics */}
                        <div>
                          <h4 className="text-sm font-mono text-primary mb-3">// 影响</h4>
                          <div className="grid sm:grid-cols-3 gap-4">
                            {study.impact.map((metric, i) => (
                              <div key={i} className="bg-background/50 border border-border rounded-lg p-4">
                                <div className="font-mono text-2xl text-primary mb-1">{metric.value}</div>
                                <div className="text-sm text-muted-foreground">{metric.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <h4 className="text-sm font-mono text-primary mb-3">// 技术栈</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.techStack.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 bg-background/80 border border-border rounded text-sm font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Key Insight */}
                        <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-5">
                          <h4 className="text-sm font-mono text-primary mb-2">💡 关键洞察</h4>
                          <p className="text-foreground/90 leading-relaxed">{study.keyInsight}</p>
                          {study.mockDataNote && (
                            <p className="text-sm text-accent mt-3 italic">{study.mockDataNote}</p>
                          )}
                        </div>

                        {study.id === 3 && (
                          <div className="pt-4">
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

                        {study.id === 2 && (
                          <div className="pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-primary/30 hover:border-primary/60 hover:bg-primary/10"
                              onClick={() => window.open(cyberTaokeDemoUrl, "_blank")}
                            >
                              观看赛博淘客演示
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
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
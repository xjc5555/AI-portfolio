import { motion } from "motion/react";
import { Terminal, FileText, Palette, Brain, Code2, Workflow, Wrench } from "lucide-react";

const skills = {
  product: {
    title: "产品管理",
    icon: FileText,
    items: ["PRD", "用户研究", "路线图规划", "Figma", "Xmind"],
    color: "from-cyan-500 to-blue-500",
  },
  ai: {
    title: "AI 技术",
    icon: Brain,
    items: ["RAG", "LLM 微调", "提示工程", "Agent 架构", "知识图谱"],
    color: "from-blue-500 to-purple-500",
  },
  tools: {
    title: "工具与工作流",
    icon: Wrench,
    items: ["Cursor", "Trae", "Coze", "Dify", "n8n", "Python", "LangChain"],
    color: "from-purple-500 to-pink-500",
  },
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-black">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 217, 255, 0.2) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0, 217, 255, 0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">技术栈与技能</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            连接产品策略与技术执行
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([key, category], index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative group"
              >
                {/* Glow on hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${category.color} rounded-2xl opacity-0 group-hover:opacity-50 blur transition duration-500`} />

                <div className="relative bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/50 transition-colors duration-300">
                  {/* Icon header */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl mb-4 text-primary">{category.title}</h3>

                  {/* Terminal-style skills list */}
                  <div className="bg-black/50 border border-border rounded-lg p-4 font-mono text-sm">
                    {category.items.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + i * 0.05 }}
                        className="flex items-center gap-2 py-1.5 hover:text-primary transition-colors duration-200"
                      >
                        <span className="text-primary">›</span>
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional tech highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-card via-primary/5 to-card border border-primary/20 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <Terminal className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg mb-2 text-primary font-mono">工程优先思维</h4>
                <p className="text-foreground/80 leading-relaxed">
                  熟悉 Python 代码库、调试 RAG 管道，并将复杂算法转化为清晰的产品需求。这种技术深度使我能够更好地与 ML 工程师协作，更现实地规划产品范围。
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
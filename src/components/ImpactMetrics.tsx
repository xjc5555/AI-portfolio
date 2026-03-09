import { motion } from "motion/react";
import { TrendingUp, Zap, Database, Gauge } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "+69.13%",
    label: "首答命中率",
    description: "优化工业知识库",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Gauge,
    value: "+77.54%",
    label: "召回率",
    description: "通过结构-语义联合微调实现",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    icon: Database,
    value: "~2GB",
    label: "显存部署",
    description: "边缘设备极致成本优化",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    value: "5x",
    label: "推理加速",
    description: "平衡隐私与商业可行性",
    gradient: "from-pink-500 to-cyan-500",
  },
];

export function ImpactMetrics() {
  return (
    <section id="impact" className="py-20 relative overflow-hidden bg-black">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00d9ff_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full"
          >
            <span className="text-primary font-mono text-sm">IMPACT.SNAPSHOT()</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl mb-4">算法驱动商业</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            从 LLM 优化到商业部署的可量化影响
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
                
                <div className="relative bg-card border border-border rounded-2xl p-6 h-full">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Value with counter animation */}
                  <div className="font-mono text-4xl mb-2 text-primary group-hover:glow-cyan transition-all duration-300">
                    {metric.value}
                  </div>

                  {/* Label */}
                  <div className="text-lg mb-2">
                    {metric.label}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {metric.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional metric highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div>
                <div className="font-mono text-5xl text-primary mb-2">31,000</div>
                <div className="text-lg">问答对生成</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-border" />
              <div className="text-left md:text-center max-w-md">
                <p className="text-muted-foreground">
                  通过 LLM 蒸馏实现零成本数据管道生成
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
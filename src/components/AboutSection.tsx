import { motion } from "motion/react";
import { GraduationCap, BookOpen, Mail, MessageCircle, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const highlights = [
  {
    icon: GraduationCap,
    title: "人工智能硕士",
    description: "东北大学（985工程）",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: BookOpen,
    title: "SCI Q1 论文第一作者",
    description: "RAG 知识图谱研究（审稿中）",
    color: "from-blue-500 to-purple-500",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gradient-to-b from-card/20 to-black">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">代码之外</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            连接学术严谨与实践产品同理心
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Academic highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${item.color} rounded-2xl opacity-0 group-hover:opacity-40 blur transition duration-500`} />
                  <div className="relative bg-card border border-border rounded-2xl p-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              我本质上是一个构建者——连接学术严谨与实践产品同理心的人。
              从算法工程到产品管理的历程让我拥有独特的视角：
              <span className="text-primary">我既懂技术可行性，也懂商业可行性。</span>
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              目前正在进行 RAG 知识图谱研究，同时构建真实世界的 AI 产品。
              我相信最好的 AI PM 是那些既能说工程师的语言，也能说商业的语言的人。
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-primary/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl mb-6 text-center">联系我</h3>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:border-primary/60 hover:bg-primary/10 w-full sm:w-auto"
                onClick={() => window.open('mailto:2470968@stu.neu.edu.cn', '_blank')}
              >
                <Mail className="w-5 h-5 mr-2" />
                发送邮件
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 hover:border-primary/60 hover:bg-primary/10 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                微信: xjc15561585533
              </Button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground font-mono">
                2470968@stu.neu.edu.cn
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
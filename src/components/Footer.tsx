import { motion } from "motion/react";
import { Mail, MessageCircle, Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black border-t border-border/50">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Branding */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
                <Terminal className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-mono">徐佳聪</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                AI 产品经理 | 将算法转化为影响力
              </p>
            </motion.div>

            {/* Contact links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4"
            >
              <a
                href="mailto:2470968@stu.neu.edu.cn"
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
              >
                <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-mono">邮箱</span>
              </a>
              
              <div className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg">
                <MessageCircle className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-mono">微信: xjc15561585533</span>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Bottom text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground font-mono">
              使用 React + Motion + Tailwind CSS 构建
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
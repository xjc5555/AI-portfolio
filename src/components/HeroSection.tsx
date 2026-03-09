import { motion } from "motion/react";
import { Sparkles, Download, Terminal } from "lucide-react";
import { Button } from "./ui/button";
import avatar from "../assets/2cc9481437acf79938488c2d17763399.jpg";

const resumePdf = "/xjc-resume.pdf";

export function HeroSection() {
  const typewriterText = "AI 产品经理 | 0→1 构建者";
  
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left: text content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-6xl lg:text-8xl tracking-tight">
                徐佳聪
              </h1>
              <div className="min-h-[40px]">
                <TypewriterText text={typewriterText} />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-xl lg:text-2xl text-foreground/80 leading-relaxed max-w-3xl mx-auto lg:mx-0"
            >
              拥有<span className="text-primary font-mono">人工智能硕士学位</span>和算法工程背景的 AI PM，专注于将复杂的 LLM/RAG 技术转化为高影响力的商业解决方案。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 glow-cyan"
                onClick={() => {
                  document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                探索 AI 产品
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:border-primary/60 hover:bg-primary/10 px-8"
                onClick={() => {
                  window.open(resumePdf, "_blank");
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                下载简历
              </Button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="pt-10 hidden sm:block"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto lg:mx-0 relative"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-1.5 h-1.5 bg-primary rounded-full absolute left-1/2 top-2 -translate-x-1/2"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Right: large oval portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex-shrink-0"
          >
            <div className="relative mx-auto">
              {/* outer glow ring */}
              <div
                className="absolute -inset-4 bg-gradient-to-b from-primary/70 via-primary/10 to-transparent opacity-70 blur-2xl"
                style={{ borderRadius: "999px" }}
              />
              {/* portrait container */}
              <div
                className="relative bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950/90 border border-primary/40 shadow-[0_0_40px_rgba(56,189,248,0.45)] overflow-hidden"
                style={{
                  width: "270px",
                  height: "380px",
                  borderRadius: "999px",
                }}
              >
                <img
                  src={avatar}
                  alt="徐佳聪 个人照片"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TypewriterText({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-2xl lg:text-3xl font-mono text-primary"
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 + index * 0.03, duration: 0.1 }}
          className={char === "→" ? "relative -top-0.5" : undefined}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-0.5 h-8 bg-primary ml-1 align-middle"
      >
        |
      </motion.span>
    </motion.div>
  );
}
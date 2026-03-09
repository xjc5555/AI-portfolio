import { motion } from "motion/react";
import { Brain, Code2, BarChart3, Users, FileText, Database, TestTube, Figma, Trello, Slack } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: any;
  color: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Product Thinking",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    skills: [
      "0→1 Product Development",
      "Product Strategy & Roadmapping",
      "User Research & Validation",
      "Problem Definition & Prioritization",
      "PRD & Spec Writing",
      "Feature Scoping & Trade-offs",
    ],
  },
  {
    title: "Execution & Delivery",
    icon: Code2,
    color: "from-blue-500 to-purple-500",
    skills: [
      "Agile/Scrum Methodologies",
      "Sprint Planning & Execution",
      "Cross-functional Leadership",
      "Stakeholder Management",
      "Release Planning & QA",
      "Technical Feasibility Assessment",
    ],
  },
  {
    title: "Analytics & Data",
    icon: BarChart3,
    color: "from-green-500 to-blue-500",
    skills: [
      "SQL & Data Analysis",
      "A/B Testing & Experimentation",
      "Funnel Analysis & Metrics",
      "User Behavior Analytics",
      "Dashboard Design",
      "Data-driven Decision Making",
    ],
  },
  {
    title: "Collaboration & Communication",
    icon: Users,
    color: "from-orange-500 to-red-500",
    skills: [
      "Engineering Partnership",
      "Design Collaboration",
      "Customer Interviews",
      "Executive Presentations",
      "Documentation & Knowledge Sharing",
      "Conflict Resolution",
    ],
  },
];

const tools = [
  { name: "Figma", icon: Figma },
  { name: "Jira", icon: Trello },
  { name: "SQL", icon: Database },
  { name: "Mixpanel", icon: BarChart3 },
  { name: "Google Analytics", icon: BarChart3 },
  { name: "Amplitude", icon: BarChart3 },
  { name: "Notion", icon: FileText },
  { name: "Slack", icon: Slack },
  { name: "Postman", icon: Code2 },
  { name: "Optimizely", icon: TestTube },
];

export function SkillsTools() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">Skills & Tools</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Battle-tested capabilities used to ship real products at scale
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl">{category.title}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${category.color}`} />
                      <span className="text-foreground/90">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl mb-8">Toolbelt</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-card border border-border rounded-lg px-5 py-3 flex items-center gap-3 shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-sm">{tool.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

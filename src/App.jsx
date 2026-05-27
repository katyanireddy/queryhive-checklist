import { useEffect, useState } from "react";

export default function QueryHiveChecklist() {
  const schedule = [
    {
      day: "Day 1",
      title: "Foundation Setup",
      tasks: [
        "Finalize tech stack",
        "Create GitHub repo",
        "Setup frontend",
        "Setup backend",
        "Setup database",
        "Create project structure",
        "Setup environment variables",
        "Design rough user flow",
      ],
    },
    {
      day: "Day 2",
      title: "Authentication + UI Base",
      tasks: [
        "Login page",
        "Signup page",
        "Protected dashboard routes",
        "Navbar + sidebar",
        "Responsive layout",
        "Basic branding/logo",
      ],
    },
    {
      day: "Day 3",
      title: "File Upload System",
      tasks: [
        "Upload PDFs/docs",
        "Store files",
        "Backend upload API",
        "File validation",
        "Loading states",
      ],
    },
    {
      day: "Day 4",
      title: "AI Knowledge Pipeline",
      tasks: [
        "Parse uploaded documents",
        "Chunk text",
        "Generate embeddings",
        "Store vectors",
        "Connect vector DB",
      ],
    },
    {
      day: "Day 5",
      title: "AI Chatbot",
      tasks: [
        "Chat UI",
        "AI response generation",
        "Connect retrieval pipeline",
        "Typing/loading animations",
      ],
    },
    {
      day: "Day 6",
      title: "Conversation System",
      tasks: [
        "Save chat history",
        "Previous conversations",
        "Delete chats",
        "Better response formatting",
      ],
    },
    {
      day: "Day 7",
      title: "UI Polish Day",
      tasks: [
        "Improve colors/fonts",
        "Landing page",
        "Hero section",
        "Mobile responsiveness",
        "Smooth animations",
      ],
    },
    {
      day: "BREAK",
      title: "Lab Exam Day — Tuesday",
      tasks: ["Focus on lab exam prep and submissions"],
      break: true,
    },
    {
      day: "BREAK",
      title: "Lab Exam Day — Wednesday",
      tasks: ["Focus on lab exam prep and submissions"],
      break: true,
    },
    {
      day: "BREAK",
      title: "Lab Exam Day — Thursday",
      tasks: ["Focus on lab exam prep and submissions"],
      break: true,
    },
    {
      day: "Day 8",
      title: "Multi-Business Support",
      tasks: [
        "Separate business workspaces",
        "User-specific data",
        "Workspace switching",
        "Secure APIs",
      ],
    },
    {
      day: "Day 9",
      title: "Admin Dashboard",
      tasks: [
        "Analytics cards",
        "Number of chats",
        "Uploaded docs count",
        "User profile section",
      ],
    },
    {
      day: "Day 10",
      title: "AI Improvements",
      tasks: [
        "Better prompts",
        "Reduce hallucinations",
        "Citation/source snippets",
        "Better context retrieval",
      ],
    },
    {
      day: "Day 11",
      title: "Deployment",
      tasks: [
        "Deploy frontend",
        "Deploy backend",
        "Environment configs",
        "Domain setup",
      ],
    },
    {
      day: "Day 12",
      title: "Landing Page + Branding",
      tasks: [
        "Product tagline",
        "Features section",
        "Pricing section",
        "Waitlist/contact form",
      ],
    },
    {
      day: "Day 13",
      title: "Testing + Bug Fixing",
      tasks: [
        "Fix crashes",
        "Edge-case testing",
        "Optimize performance",
        "Clean codebase",
      ],
    },
    {
      day: "Day 14",
      title: "Demo + Presentation",
      tasks: [
        "Prepare demo flow",
        "Create pitch deck",
        "Record demo video",
        "Prepare explanation script",
      ],
    },
    {
      day: "Day 15",
      title: "Launch Day 🚀",
      tasks: [
        "Post on LinkedIn",
        "Share in communities",
        "Collect feedback",
        "Improve onboarding",
      ],
    },
  ];
  
  const [checkedTasks, setCheckedTasks] = useState(() => {
  const saved = localStorage.getItem("queryhive-checklist");
  return saved ? JSON.parse(saved) : {};
}); 

  useEffect(() => {
    localStorage.setItem(
      "queryhive-checklist",
      JSON.stringify(checkedTasks)
    );
  }, [checkedTasks]);

  const toggleTask = (taskId) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  const totalTasks = schedule.reduce(
    (acc, item) => acc + item.tasks.length,
    0
  );

  const completedTasks = Object.values(checkedTasks).filter(Boolean).length;

  const progress = Math.round(
    (completedTasks / totalTasks) * 100
  );

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            QueryHive Build Checklist
          </h1>

          <p className="text-zinc-400 text-lg">
            15-Day Startup Roadmap
          </p>

          <div className="mt-8 max-w-xl mx-auto">
            <div className="flex justify-between text-sm mb-2 text-zinc-400">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>

            <div className="w-full h-4 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="mt-3 text-zinc-500">
              {completedTasks} / {totalTasks} tasks completed
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {schedule.map((item, index) => (
            <div
              key={index}
              className={`rounded-3xl border p-6 shadow-2xl transition-all duration-300 hover:scale-[1.02] ${
                item.break
                  ? "bg-zinc-900 border-yellow-500/30"
                  : "bg-zinc-950 border-zinc-800"
              }`}
            >
              <div className="mb-4">
                <span
                  className={`text-sm px-3 py-1 rounded-full ${
                    item.break
                      ? "bg-yellow-500/20 text-yellow-300"
                      : "bg-white/10 text-zinc-300"
                  }`}
                >
                  {item.day}
                </span>
              </div>

              <h2 className="text-2xl font-semibold mb-5">
                {item.title}
              </h2>

              <div className="space-y-3">
                {item.tasks.map((task, i) => {
                  const taskId = `${index}-${i}`;
                  const isChecked = checkedTasks[taskId];

                  return (
                    <label
                      key={i}
                      className="flex items-start gap-3 bg-white/5 rounded-2xl p-3 cursor-pointer hover:bg-white/10 transition-all"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked || false}
                        onChange={() => toggleTask(taskId)}
                        className="mt-1 h-5 w-5 rounded accent-white"
                      />

                      <span
                        className={`transition-all ${
                          isChecked
                            ? "line-through text-zinc-500"
                            : "text-zinc-200"
                        }`}
                      >
                        {task}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-zinc-600 text-sm">
          Built for QueryHive • Stay consistent for 15 days 🚀
        </div>
      </div>
    </div>
  );
}
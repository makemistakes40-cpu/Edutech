import { GitFork, Eye, Star, ArrowUpRight, GitBranch, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

interface ProjectData {
  title: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  client: string;
  description: string;
  matchRating: string;
  branch: string;
  prNumber: string;
  stars: string;
  forks: string;
  tech: string[];
  mistakeCode: {
    description: string;
    code: string;
  };
  fixCode: {
    description: string;
    code: string;
  };
  telemetry: string[];
  styles: {
    border: string;
    bg?: string;
    text: string;
    tag: string;
    btn: string;
    accentGlow: string;
  };
}

export default function FeaturedProjects() {
  const projects: ProjectData[] = [
    {
      title: 'AI Resume Analyzer',
      category: 'AI Engineering',
      difficulty: 'Advanced',
      client: 'Vertex AI',
      description: 'Build an LLM agent that parses developer resumes against jobs, recommending structural fixes.',
      matchRating: '24 Startups matching',
      branch: 'feat/resume-evaluator',
      prNumber: '#42',
      stars: '412',
      forks: '89',
      tech: ['FastAPI', 'OpenAI API', 'LangChain', 'ChromaDB'],
      mistakeCode: {
        description: 'Synchronous API loops calling OpenAI in a blocking thread (leads to timeout errors):',
        code: `for doc in resumes:
  res = openai.ChatCompletion.create(model="gpt-4", prompt=doc) # BLOCKING
  results.append(res)`
      },
      fixCode: {
        description: 'Asynchronous task queue with streaming responses and exponential backoff retry rules:',
        code: `tasks = [openai.ChatCompletion.acreate(model="gpt-4", prompt=doc) for doc in resumes]
results = await asyncio.gather(*tasks, return_exceptions=True)`
      },
      telemetry: [
        'Latency: 240ms (target: <500ms)',
        'Parallel streams: 100 concurrent requests',
        'Model fallbacks: Configured'
      ],
      styles: {
        border: 'border-violet-500/20 hover:border-violet-500/40',
        text: 'text-violet-400',
        tag: 'bg-violet-500/5 text-violet-300 border-violet-500/10',
        btn: 'border-violet-500/20 hover:border-violet-500 text-violet-400 hover:text-white hover:bg-violet-600/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]',
        accentGlow: 'from-violet-500/5 to-transparent'
      }
    },
    {
      title: 'Startup CRM Dashboard',
      category: 'Full Stack',
      difficulty: 'Intermediate',
      client: 'Linear',
      description: 'Develop a fast CRM board with real-time socket updates and automated pipeline metrics.',
      matchRating: '42 Startups matching',
      branch: 'feat/crm-websockets',
      prNumber: '#18',
      stars: '320',
      forks: '64',
      tech: ['Next.js', 'Socket.io', 'PostgreSQL', 'Prisma'],
      mistakeCode: {
        description: 'Vulnerable RAW SQL concatenation that allows full SQL injection attacks:',
        code: `const data = await prisma.$queryRawUnsafe(
  \`SELECT * FROM leads WHERE name = '\${req.query.name}'\` // SQL INJECTION
);`
      },
      fixCode: {
        description: 'Using parameterized queries or typesafe Prisma ORM syntax to filter records securely:',
        code: `const data = await prisma.leads.findMany({
  where: { name: req.query.name } // Parameterized & Safe
});`
      },
      telemetry: [
        'SQL injection: Blocked',
        'Websocket Latency: <15ms',
        'Pool limit: 40 simultaneous connections'
      ],
      styles: {
        border: 'border-fuchsia-500/20 hover:border-fuchsia-500/40',
        bg: 'bg-fuchsia-950/5',
        text: 'text-fuchsia-400',
        tag: 'bg-fuchsia-500/5 text-fuchsia-300 border-fuchsia-500/10',
        btn: 'border-fuchsia-500/20 hover:border-fuchsia-500 text-fuchsia-400 hover:text-white hover:bg-fuchsia-600/10 hover:shadow-[0_0_15px_rgba(217,70,239,0.3)]',
        accentGlow: 'from-fuchsia-500/5 to-transparent'
      }
    },
    {
      title: 'Real-time Expense Tracker',
      category: 'Full Stack',
      difficulty: 'Beginner',
      client: 'Supabase',
      description: 'Create a microservice budgeting system that processes transactions and visualizes trends.',
      matchRating: '18 Startups matching',
      branch: 'feat/transaction-sync',
      prNumber: '#09',
      stars: '184',
      forks: '42',
      tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      mistakeCode: {
        description: 'Slow N+1 database queries when matching categories inside loops:',
        code: `for (let tx of transactions) {
  const cat = await db.categories.findOne({ id: tx.catId }); // Loops DB queries
  tx.category = cat;
}`
      },
      fixCode: {
        description: 'Perform a single bulk fetch using SQL joins or MongoDB aggregate pipelines:',
        code: `const catIds = transactions.map(t => t.catId);
const cats = await db.categories.find({ id: { $in: catIds } });
// Match items in-memory in O(N) complexity`
      },
      telemetry: [
        'DB load reduction: 90% fewer connections',
        'Response speed: A+ (32ms)',
        'Chart refresh: Instant'
      ],
      styles: {
        border: 'border-emerald-500/20 hover:border-emerald-500/40',
        bg: 'bg-emerald-950/5',
        text: 'text-emerald-400',
        tag: 'bg-emerald-500/5 text-emerald-300 border-emerald-500/10',
        btn: 'border-emerald-500/20 hover:border-emerald-500 text-emerald-400 hover:text-white hover:bg-emerald-600/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]',
        accentGlow: 'from-emerald-500/5 to-transparent'
      }
    },
    {
      title: 'SaaS Analytics Platform',
      category: 'Data Science',
      difficulty: 'Advanced',
      client: 'ClickHouse',
      description: 'Design a telemetry dashboard that aggregates event streams and calculates MRR churn.',
      matchRating: '38 Startups matching',
      branch: 'feat/telemetry-aggregation',
      prNumber: '#77',
      stars: '587',
      forks: '143',
      tech: ['ClickHouse', 'Python', 'Pandas', 'Apache Kafka'],
      mistakeCode: {
        description: 'Running clickstream aggregations in client-side Python array loops:',
        code: `clicks = 0
for event in kafka_stream:
    if event['type'] == 'click':
        clicks += 1 # Memory leak & slow execution`
      },
      fixCode: {
        description: 'Stream aggregates directly into clickstream analytical partitions in ClickHouse:',
        code: `SELECT count() FROM events 
WHERE event_type = 'click' 
GROUP BY user_id, tumble(timestamp, INTERVAL 5 MINUTE)`
      },
      telemetry: [
        'Throughput: 10,000 events/sec',
        'Query speed: 4ms (target: <50ms)',
        'Kafka partition offsets: Synchronized'
      ],
      styles: {
        border: 'border-cyan-500/20 hover:border-cyan-500/40',
        bg: 'bg-cyan-950/5',
        text: 'text-cyan-400',
        tag: 'bg-cyan-500/5 text-cyan-300 border-cyan-500/10',
        btn: 'border-cyan-500/20 hover:border-cyan-500 text-cyan-400 hover:text-white hover:bg-cyan-600/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]',
        accentGlow: 'from-cyan-500/5 to-transparent'
      }
    },
    {
      title: 'Encrypted Chat Application',
      category: 'Cybersecurity',
      difficulty: 'Advanced',
      client: 'Clerk',
      description: 'Build an end-to-end encrypted messaging site with secure session key exchanges.',
      matchRating: '29 Startups matching',
      branch: 'feat/e2ee-websockets',
      prNumber: '#34',
      stars: '298',
      forks: '51',
      tech: ['Web Crypto API', 'Websockets', 'Redis', 'Argon2'],
      mistakeCode: {
        description: 'Storing cryptographic private session keys in browser local storage in plain text:',
        code: `localStorage.setItem("session_key", privateKey); 
// Vulnerable to XSS script key theft`
      },
      fixCode: {
        description: 'Store keys in non-extractable CryptoKey structures in private session memory:',
        code: `const sessionKey = await window.crypto.subtle.generateKey(
  { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]
); // Cannot be read by external scripts`
      },
      telemetry: [
        'E2EE Verification: Active',
        'Timing attack proof: Passed',
        'XSS protection header: Configured'
      ],
      styles: {
        border: 'border-amber-500/20 hover:border-amber-500/40',
        bg: 'bg-amber-950/5',
        text: 'text-amber-400',
        tag: 'bg-amber-500/5 text-amber-300 border-amber-500/10',
        btn: 'border-amber-500/20 hover:border-amber-500 text-amber-400 hover:text-white hover:bg-amber-600/10 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]',
        accentGlow: 'from-amber-500/5 to-transparent'
      }
    },
    {
      title: 'Recommendation Engine',
      category: 'Data Science',
      difficulty: 'Intermediate',
      client: 'Weights & Biases',
      description: 'Train a collaborative filtering model on user interaction logs to suggest next challenges.',
      matchRating: '21 Startups matching',
      branch: 'feat/recommender-filters',
      prNumber: '#21',
      stars: '245',
      forks: '37',
      tech: ['Python', 'scikit-learn', 'Flask', 'Redis'],
      mistakeCode: {
        description: 'Iterating matrix calculation inside double loops, yielding O(N^2) complexity:',
        code: `for u1 in users:
    for u2 in users:
        sim = cosine_similarity(u1.vector, u2.vector) 
        # Extremely slow for larger tables`
      },
      fixCode: {
        description: 'Use vectorized NumPy matrix computations to run calculations in parallel:',
        code: `similarity_matrix = cosine_similarity(user_vectors_matrix) 
# Fully vectorized and processed in C/CUDA`
      },
      telemetry: [
        'Calculation speed: 12ms (target: <100ms)',
        'Model training schedule: Weekly automated task',
        'Evaluation score: 89% precision'
      ],
      styles: {
        border: 'border-rose-500/20 hover:border-rose-500/40',
        text: 'text-rose-400',
        tag: 'bg-rose-500/5 text-rose-300 border-rose-500/10',
        btn: 'border-rose-500/20 hover:border-rose-500 text-rose-400 hover:text-white hover:bg-rose-600/10 hover:shadow-[0_0_15px_rgba(244,63,94,0.3)]',
        accentGlow: 'from-rose-500/5 to-transparent'
      }
    }
  ];

  return (
    <section id="projects" className="relative py-24 bg-zinc-950 border-t border-white/5">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div className="text-left max-w-2xl space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Featured Missions
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight pt-2">
              Production Projects You Will Build
            </h3>
            <p className="text-zinc-400 text-base">
              No simple to-do apps here. Build systems that startups actually use. Our codebase challenges feature authentic requirements and constraints.
            </p>
          </div>
          
          <a
            href="#allprojects"
            className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-2xl border border-white/5 hover:border-white/10 transition-colors duration-300 flex items-center space-x-2 whitespace-nowrap self-start md:self-end"
          >
            <span>View All 30+ Missions</span>
            <ArrowUpRight className="w-4.5 h-4.5" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative flex flex-col justify-between p-7 rounded-3xl border bg-zinc-900/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${project.styles.border}`}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.styles.accentGlow} opacity-30 pointer-events-none`}></div>

              <div className="relative z-10 space-y-6">
                
                {/* Header: PR / Branch metadata */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="flex items-center space-x-1.5 text-zinc-500 text-xs font-mono">
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>{project.branch}</span>
                    <span className="text-zinc-700">{project.prNumber}</span>
                  </div>
                  
                  {/* PR Status check */}
                  <span className="inline-flex items-center text-[10px] text-emerald-400 font-mono bg-emerald-950/20 border border-emerald-500/10 px-2.5 py-0.5 rounded-md">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" /> Passed
                  </span>
                </div>

                {/* Info titles */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-left">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase block mb-1">
                      {project.category} · CHALLENGE FOR {project.client}
                    </span>
                    <h4 className="text-2xl font-bold text-white group-hover:text-white transition-colors">
                      {project.title}
                    </h4>
                  </div>
                  
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${project.styles.tag}`}>
                    {project.difficulty}
                  </span>
                </div>

                {/* Objective details */}
                <p className="text-sm text-zinc-400 text-left leading-relaxed">
                  {project.description}
                </p>

                {/* Interactive Code Diff sandbox */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase block text-left">
                    Code Diff Inspector
                  </span>
                  
                  <div className="rounded-2xl border border-white/10 bg-zinc-950 overflow-hidden font-mono text-left shadow-2xl">
                    
                    {/* Mistake Header & Block */}
                    <div className="bg-rose-950/20 border-b border-white/5 px-4 py-2 text-[10px] text-rose-400 flex items-center space-x-2">
                      <AlertTriangle className="w-3 h-3 text-rose-400" />
                      <span className="font-semibold uppercase tracking-wider">The Mistake</span>
                      <span className="text-[9px] text-rose-500">({project.mistakeCode.description})</span>
                    </div>
                    <pre className="p-4 text-[10px] leading-relaxed overflow-x-auto text-rose-400 bg-rose-950/5 select-none">
                      <code>{project.mistakeCode.code}</code>
                    </pre>

                    {/* Fix Header & Block */}
                    <div className="bg-emerald-950/20 border-y border-white/5 px-4 py-2 text-[10px] text-emerald-400 flex items-center space-x-2">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      <span className="font-semibold uppercase tracking-wider">The Production Fix</span>
                      <span className="text-[9px] text-emerald-500">({project.fixCode.description})</span>
                    </div>
                    <pre className="p-4 text-[10px] leading-relaxed overflow-x-auto text-emerald-400 bg-emerald-950/5 select-none">
                      <code>{project.fixCode.code}</code>
                    </pre>

                  </div>
                </div>

                {/* Validation checklist */}
                <div className="space-y-2 text-left bg-zinc-950/50 border border-white/5 rounded-2xl p-4">
                  <span className="text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase block mb-1">
                    Automated Test Telemetry
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.telemetry.map((tele, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span className="truncate">{tele}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Info: Github Style Telemetry */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5 text-zinc-500 text-xs font-mono relative z-10 mt-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 hover:text-zinc-300 transition-colors cursor-default">
                    <Star className="w-3.5 h-3.5" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center space-x-1 hover:text-zinc-300 transition-colors cursor-default">
                    <GitFork className="w-3.5 h-3.5" />
                    <span>{project.forks}</span>
                  </div>
                  <div className="hidden sm:inline-flex items-center space-x-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>{project.matchRating}</span>
                  </div>
                </div>
                
                <button
                  className={`px-4 py-2 rounded-xl border text-xs font-semibold flex items-center space-x-1.5 transition-all duration-300 cursor-pointer ${project.styles.btn}`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect PR Specs</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { Cpu, Terminal, Database, Smartphone, ShieldCheck, CheckCircle2, Flame, Award, Play, TerminalSquare, BookOpen, Server, Lock, Gamepad2 } from 'lucide-react';

interface TrackStyles {
  border: string;
  bg: string;
  text: string;
  iconBg: string;
  badge: string;
  pill: string;
  glow: string;
  btn: string;
  accentGlow: string;
}

interface Phase {
  title: string;
  duration: string;
  desc: string;
}

interface TrackData {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  projects: string;
  duration: string;
  salary: string;
  demand: string;
  startups: string[];
  skills: string[];
  phases: Phase[];
  codeChallenge: {
    filename: string;
    description: string;
    mistake: string;
    fix: string;
  };
  styles: TrackStyles;
}

export default function LearningTracks() {
  const tracks: TrackData[] = [
    {
      id: 'ai',
      title: 'AI Engineering',
      icon: Cpu,
      difficulty: 'Advanced',
      projects: '6 Projects',
      duration: '8 Weeks',
      salary: '$110k - $140k',
      demand: '94 Startups Hiring',
      startups: ['Vertex AI', 'Hugging Face', 'Cohere', 'LangChain'],
      skills: ['LLMs', 'Retrieval-Augmented Gen', 'Vector DBs', 'Fine-tuning', 'PyTorch', 'LangChain'],
      phases: [
        { title: 'Foundations of LLMs', duration: 'Weeks 1-2', desc: 'Configure prompt templates, semantic search, and hook up custom text embedding pipelines.' },
        { title: 'Vector Datasets & RAG', duration: 'Weeks 3-4', desc: 'Build chunking strategies, set up pgvector / ChromaDB, and handle context retrieval latencies.' },
        { title: 'AI Agent Architectures', duration: 'Weeks 5-6', desc: 'Build loop-based reasoning systems (ReAct) using LangGraph and tool calling parameters.' },
        { title: 'Production & Fine-tuning', duration: 'Weeks 7-8', desc: 'Evaluate model hallucinations, run batch inference, and fine-tune models on LoRA adapters.' }
      ],
      codeChallenge: {
        filename: 'rag_agent.py',
        description: 'Fix model hallucinations by implementing custom cross-encoders and semantic reranking on the context feed.',
        mistake: '# Slow semantic search without vector index filters',
        fix: '# Optimized hierarchical query with metadata partition'
      },
      styles: {
        border: 'border-violet-500/20',
        bg: 'bg-violet-950/5',
        text: 'text-violet-400',
        iconBg: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
        badge: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
        pill: 'bg-violet-500/5 text-violet-300 border-violet-500/10',
        glow: 'shadow-[0_0_50px_rgba(139,92,246,0.15)]',
        btn: 'bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]',
        accentGlow: 'from-violet-500/10 via-transparent to-transparent'
      }
    },
    {
      id: 'fs',
      title: 'Full Stack Development',
      icon: Terminal,
      difficulty: 'Intermediate',
      projects: '8 Projects',
      duration: '10 Weeks',
      salary: '$95k - $125k',
      demand: '120 Startups Hiring',
      startups: ['Vercel', 'Supabase', 'Linear', 'Railway'],
      skills: ['React', 'TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'GraphQL', 'Docker'],
      phases: [
        { title: 'Vite & Frontend Routing', duration: 'Weeks 1-2', desc: 'Build complex SPA state, manage memory leak hooks, and style fluid layout viewports.' },
        { title: 'Relational DBs & Core APIs', duration: 'Weeks 3-4', desc: 'Design database schemas, configure connection pools, and prevent N+1 query patterns.' },
        { title: 'Websockets & Sockets', duration: 'Weeks 5-7', desc: 'Implement chat streams and real-time dashboard boards with Redis PubSub message brokers.' },
        { title: 'Dockerization & CI/CD', duration: 'Weeks 8-10', desc: 'Write multi-stage Dockerfiles, configure GitHub Actions pipelines, and deploy on edge networks.' }
      ],
      codeChallenge: {
        filename: 'connection_pool.ts',
        description: 'Resolve high latency database operations by implementing client connection pooling and automatic connection release.',
        mistake: '// Opening a new DB client connection on every single request',
        fix: '// Utilizing a persistent pool and releasing clients on cleanup'
      },
      styles: {
        border: 'border-fuchsia-500/20',
        bg: 'bg-fuchsia-950/5',
        text: 'text-fuchsia-400',
        iconBg: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20',
        badge: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
        pill: 'bg-fuchsia-500/5 text-fuchsia-300 border-fuchsia-500/10',
        glow: 'shadow-[0_0_50px_rgba(217,70,239,0.15)]',
        btn: 'bg-fuchsia-600 hover:bg-fuchsia-500 text-white shadow-[0_0_20px_rgba(217,70,239,0.3)]',
        accentGlow: 'from-fuchsia-500/10 via-transparent to-transparent'
      }
    },
    {
      id: 'ds',
      title: 'Data Science',
      icon: Database,
      difficulty: 'Intermediate',
      projects: '5 Projects',
      duration: '6 Weeks',
      salary: '$100k - $130k',
      demand: '78 Startups Hiring',
      startups: ['ClickHouse', 'Snowflake', 'Hex', 'Weights & Biases'],
      skills: ['Python', 'Pandas', 'scikit-learn', 'SQL', 'Data Pipelines', 'EDA', 'Data Viz'],
      phases: [
        { title: 'Structured SQL & EDA', duration: 'Weeks 1-2', desc: 'Run multi-join queries, handle sparse datasets, and compile statistical summary sheets.' },
        { title: 'Feature Pipelines', duration: 'Weeks 3-4', desc: 'Configure data clean streams, vector normalization, and custom feature store partitions.' },
        { title: 'ML Model Development', duration: 'Weeks 5-6', desc: 'Train predictive models, run hyperparameter grid searches, and evaluate cross-validation ROC curves.' }
      ],
      codeChallenge: {
        filename: 'data_pipeline.py',
        description: 'Optimize clickstream event processing times by vectorizing dataframes and removing synchronous pandas iterrows loops.',
        mistake: '# Iterating rows sequentially with df.iterrows()',
        fix: '# Performing vectorized matrix operations with NumPy backend'
      },
      styles: {
        border: 'border-emerald-500/20',
        bg: 'bg-emerald-950/5',
        text: 'text-emerald-400',
        iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        badge: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
        pill: 'bg-emerald-500/5 text-emerald-300 border-emerald-500/10',
        glow: 'shadow-[0_0_50px_rgba(16,185,129,0.15)]',
        btn: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]',
        accentGlow: 'from-emerald-500/10 via-transparent to-transparent'
      }
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: Smartphone,
      difficulty: 'Intermediate',
      projects: '6 Projects',
      duration: '8 Weeks',
      salary: '$95k - $120k',
      demand: '65 Startups Hiring',
      startups: ['Expo', 'RevenueCat', 'Superwall', 'Appwrite'],
      skills: ['React Native', 'Flutter', 'SwiftUI', 'Firebase', 'State Management', 'App Store Deploy'],
      phases: [
        { title: 'Universal Layouts', duration: 'Weeks 1-2', desc: 'Build flex layouts that render seamlessly on iOS, Android, and Web viewports.' },
        { title: 'Offline-First Sync', duration: 'Weeks 3-4', desc: 'Implement SQLite local database stores, cache remote network requests, and queue actions.' },
        { title: 'Push Streams & Native APIs', duration: 'Weeks 5-6', desc: 'Hook up deep linking, background location tracking, and real-time push notification triggers.' },
        { title: 'Release Orchestration', duration: 'Weeks 7-8', desc: 'Configure EAS Build systems, test flight pipelines, and manage release bundle assets.' }
      ],
      codeChallenge: {
        filename: 'offline_sync.ts',
        description: 'Implement an offline-first client cache with network listener overrides that retry pending sync actions on reconnect.',
        mistake: '// Standard API request that fails immediately on offline state',
        fix: '// Queueing mutations in SQLite store and flushing them on connection regain'
      },
      styles: {
        border: 'border-cyan-500/20',
        bg: 'bg-cyan-950/5',
        text: 'text-cyan-400',
        iconBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
        badge: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
        pill: 'bg-cyan-500/5 text-cyan-300 border-cyan-500/10',
        glow: 'shadow-[0_0_50px_rgba(6,182,212,0.15)]',
        btn: 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]',
        accentGlow: 'from-cyan-500/10 via-transparent to-transparent'
      }
    },
    {
      id: 'cyber',
      title: 'Cybersecurity',
      icon: ShieldCheck,
      difficulty: 'Advanced',
      projects: '4 Projects',
      duration: '6 Weeks',
      salary: '$105k - $135k',
      demand: '82 Startups Hiring',
      startups: ['Clerk', 'Snyk', 'Auth0', 'Cloudflare'],
      skills: ['Pen Testing', 'Network Security', 'OWASP Top 10', 'IAM', 'Log Analysis', 'SecOps'],
      phases: [
        { title: 'Vulnerabilities & OWASP', duration: 'Weeks 1-2', desc: 'Exploit and secure cross-site scripting (XSS), SQL injection, and CSRF request payloads.' },
        { title: 'Cryptographic Protocols', duration: 'Weeks 3-4', desc: 'Implement secure password hashing (argon2), JWT signature logic, and TLS handshake checks.' },
        { title: 'IAM & Edge Audits', duration: 'Weeks 5-6', desc: 'Configure Role-Based Access Control (RBAC), API rate-limiting rules, and cloud log analyzers.' }
      ],
      codeChallenge: {
        filename: 'secure_auth.py',
        description: 'Secure an API authentication router against brute force timing attacks by hashing passwords with constant-time algorithms.',
        mistake: '# Storing passwords with standard string equality check',
        fix: '# Comparing digests using cryptographic constant-time compare methods'
      },
      styles: {
        border: 'border-amber-500/20',
        bg: 'bg-amber-950/5',
        text: 'text-amber-400',
        iconBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
        badge: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
        pill: 'bg-amber-500/5 text-amber-300 border-amber-500/10',
        glow: 'shadow-[0_0_50px_rgba(245,158,11,0.15)]',
        btn: 'bg-amber-600 hover:bg-amber-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.3)]',
        accentGlow: 'from-amber-500/10 via-transparent to-transparent'
      }
    },
    {
      id: 'devops',
      title: 'DevOps & Cloud',
      icon: Server,
      difficulty: 'Advanced',
      projects: '6 Projects',
      duration: '8 Weeks',
      salary: '$110k - $135k',
      demand: '84 Startups Hiring',
      startups: ['AWS', 'GCP', 'HashiCorp', 'Docker'],
      skills: ['Terraform', 'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux', 'Prometheus'],
      phases: [
        { title: 'Infrastructure as Code', duration: 'Weeks 1-2', desc: 'Manage remote server instances, configure DNS records, and build virtual networks with Terraform.' },
        { title: 'Container Orchestration', duration: 'Weeks 3-5', desc: 'Deploy scalable pod configurations, secure secrets, and configure load balancers in Kubernetes.' },
        { title: 'Observability & Recovery', duration: 'Weeks 6-8', desc: 'Configure Prometheus metrics scrapers, hook up alert systems, and design disaster data recovery plans.' }
      ],
      codeChallenge: {
        filename: 'deploy_pipeline.yml',
        description: 'Optimize deployment scripts to prevent credentials leakage and run linting in concurrent runner processes.',
        mistake: '# Storing raw AWS_SECRET_ACCESS_KEY inside build yaml text files',
        fix: '# Fetching secret tokens securely from GitHub Actions repository secrets'
      },
      styles: {
        border: 'border-sky-500/20',
        bg: 'bg-sky-950/5',
        text: 'text-sky-400',
        iconBg: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
        badge: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
        pill: 'bg-sky-500/5 text-sky-300 border-sky-500/10',
        glow: 'shadow-[0_0_50px_rgba(56,189,248,0.15)]',
        btn: 'bg-sky-600 hover:bg-sky-500 text-white shadow-[0_0_20px_rgba(56,189,248,0.3)]',
        accentGlow: 'from-sky-500/10 via-transparent to-transparent'
      }
    },
    {
      id: 'web3',
      title: 'Blockchain & Web3',
      icon: Lock,
      difficulty: 'Advanced',
      projects: '5 Projects',
      duration: '8 Weeks',
      salary: '$115k - $145k',
      demand: '48 Startups Hiring',
      startups: ['Ethereum', 'Uniswap', 'Alchemy', 'OpenZeppelin'],
      skills: ['Solidity', 'Ethers.js', 'Hardhat', 'Web3', 'Smart Contracts', 'Cryptography'],
      phases: [
        { title: 'Solidity Foundations', duration: 'Weeks 1-2', desc: 'Learn state variables, mappings, memory structures, and write simple contract methods.' },
        { title: 'Contract Security & DeFi', duration: 'Weeks 3-5', desc: 'Audit contract logic against reentrancy attacks, flash loan tricks, and manage gas costs.' },
        { title: 'Dapp Integration', duration: 'Weeks 6-8', desc: 'Connect frontend clients to network providers, listen to events, and send raw transaction payloads.' }
      ],
      codeChallenge: {
        filename: 'BankContract.sol',
        description: 'Secure a bank contract against malicious reentrancy attacks by applying standard checks-effects-interactions coding patterns.',
        mistake: 'payable(msg.sender).call{value: bal}(""); balances[msg.sender] = 0;',
        fix: 'balances[msg.sender] = 0; payable(msg.sender).call{value: bal}("");'
      },
      styles: {
        border: 'border-rose-500/20',
        bg: 'bg-rose-950/5',
        text: 'text-rose-400',
        iconBg: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
        badge: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
        pill: 'bg-rose-500/5 text-rose-300 border-rose-500/10',
        glow: 'shadow-[0_0_50px_rgba(244,63,94,0.15)]',
        btn: 'bg-rose-600 hover:bg-rose-500 text-white shadow-[0_0_20px_rgba(244,63,94,0.3)]',
        accentGlow: 'from-rose-500/10 via-transparent to-transparent'
      }
    },
    {
      id: 'gamedev',
      title: 'Game Development',
      icon: Gamepad2,
      difficulty: 'Intermediate',
      projects: '6 Projects',
      duration: '10 Weeks',
      salary: '$90k - $115k',
      demand: '34 Startups Hiring',
      startups: ['Epic Games', 'Unity', 'Decentraland', 'Sandbox'],
      skills: ['Unity', 'C#', 'C++', 'Shader Programming', 'Physics Engine', 'Raytracing'],
      phases: [
        { title: 'Game Loop & Math', duration: 'Weeks 1-2', desc: 'Configure input handling, delta time updates, vectors, and basic collision boundaries.' },
        { title: 'AI & State Machines', duration: 'Weeks 3-5', desc: 'Design enemy behavior states, pathfinding grids, and trigger-based event systems.' },
        { title: 'Graphics & Optimization', duration: 'Weeks 6-10', desc: 'Write vertex shaders, profile frame times, manage draw calls, and compile asset bundles.' }
      ],
      codeChallenge: {
        filename: 'EnemyAI.cs',
        description: 'Optimize distance checks inside update loops by utilizing squared distance comparisons to avoid slow square root operations.',
        mistake: 'if (Vector3.Distance(transform.position, target.position) < range)',
        fix: 'if ((transform.position - target.position).sqrMagnitude < range * range)'
      },
      styles: {
        border: 'border-indigo-500/20',
        bg: 'bg-indigo-950/5',
        text: 'text-indigo-400',
        iconBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
        badge: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
        pill: 'bg-indigo-500/5 text-indigo-300 border-indigo-500/10',
        glow: 'shadow-[0_0_50px_rgba(99,102,241,0.15)]',
        btn: 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]',
        accentGlow: 'from-indigo-500/10 via-transparent to-transparent'
      }
    }
  ];

  const [activeTrackId, setActiveTrackId] = useState<string>('ai');

  const activeTrackObj = tracks.find((t) => t.id === activeTrackId) || tracks[0];
  const IconComponent = activeTrackObj.icon;

  return (
    <section id="tracks" className="relative py-24 bg-zinc-950 border-t border-white/5">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-fuchsia-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-fuchsia-400">
            <BookOpen className="w-3.5 h-3.5" />
            <span>LEARNING TO DEPLOYMENT</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight pt-2">
            Curated Learning Tracks for Builders
          </h3>
          <p className="text-zinc-400 text-base max-w-2xl mx-auto">
            Explore our curriculum paths. Interact with the console to inspect week-by-week roadmaps, career indicators, and mock coding missions.
          </p>
        </div>

        {/* Interactive Workspace Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Tracks Selector List (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-3.5 max-h-[650px] overflow-y-auto pr-2">
            {tracks.map((track) => {
              const TrackIcon = track.icon;
              const isActive = track.id === activeTrackId;
              return (
                <button
                  key={track.id}
                  onClick={() => setActiveTrackId(track.id)}
                  className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 flex items-center space-x-4 relative overflow-hidden group shrink-0 ${
                    isActive
                      ? `bg-zinc-900/60 border-zinc-700/60 ${track.styles.glow}`
                      : 'bg-zinc-900/10 border-white/5 hover:border-white/10 hover:bg-zinc-900/20'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl border transition-colors ${
                    isActive ? track.styles.iconBg : 'bg-zinc-950 border-white/5 text-zinc-500'
                  }`}>
                    <TrackIcon className="w-5 h-5" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="text-sm font-bold text-white truncate">{track.title}</span>
                      {isActive && <Flame className={`w-3.5 h-3.5 ${track.styles.text} animate-pulse`} />}
                    </div>
                    <span className="text-xs text-zinc-500 font-mono font-medium block">
                      {track.projects} · {track.duration}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Interactive Syllabus & Challenge Console (8 cols) */}
          <div className={`lg:col-span-8 rounded-3xl border bg-zinc-900/10 backdrop-blur-xl p-8 relative flex flex-col justify-between transition-all duration-500 ${activeTrackObj.styles.border} ${activeTrackObj.styles.glow}`}>
            
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${activeTrackObj.styles.accentGlow} opacity-30 pointer-events-none rounded-3xl`}></div>

            <div className="relative z-10 space-y-8">
              
              {/* Console Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-5">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-2xl bg-zinc-950 border ${activeTrackObj.styles.iconBg}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-2xl font-bold text-white">{activeTrackObj.title}</h4>
                    <span className="text-xs text-zinc-500 font-mono">CURRICULUM SPECIFICATIONS</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border ${activeTrackObj.styles.badge}`}>
                    {activeTrackObj.difficulty}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-zinc-950 border border-white/5 text-zinc-400">
                    {activeTrackObj.duration}
                  </span>
                </div>
              </div>

              {/* Career Outcomes & Demand Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-zinc-950/40 border border-white/5 rounded-2xl p-4">
                <div className="text-left space-y-1">
                  <span className="text-[10px] text-zinc-500 font-mono block uppercase font-bold tracking-wider">Salary Potential</span>
                  <span className="text-base font-extrabold text-white">{activeTrackObj.salary}</span>
                </div>
                <div className="text-left space-y-1 border-t sm:border-t-0 sm:border-l border-white/5 pt-2 sm:pt-0 sm:pl-4">
                  <span className="text-[10px] text-zinc-500 font-mono block uppercase font-bold tracking-wider">Startup Demand</span>
                  <span className="text-sm font-extrabold text-emerald-400 flex items-center">
                    <Flame className="w-3.5 h-3.5 mr-1 text-emerald-400" /> {activeTrackObj.demand}
                  </span>
                </div>
                <div className="text-left space-y-1 border-t sm:border-t-0 sm:border-l border-white/5 pt-2 sm:pt-0 sm:pl-4">
                  <span className="text-[10px] text-zinc-500 font-mono block uppercase font-bold tracking-wider">Active Hiring Partners</span>
                  <span className="text-xs font-bold text-zinc-400 block truncate">
                    {activeTrackObj.startups.join(' · ')}
                  </span>
                </div>
              </div>

              {/* Split Details: Roadmap vs Live Mock Coding editor */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Curriculum Roadmap Timeline (7 cols) */}
                <div className="md:col-span-7 text-left space-y-5">
                  <h5 className="text-xs font-bold font-mono text-zinc-400 uppercase tracking-widest flex items-center">
                    <Award className="w-4 h-4 mr-2 text-zinc-400" /> Syllabus Breakdown
                  </h5>
                  
                  <div className="relative pl-4 border-l border-white/10 space-y-6">
                    {activeTrackObj.phases.map((phase, idx) => (
                      <div key={idx} className="relative">
                        {/* Dot */}
                        <div className={`absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full border border-zinc-950 ${
                          idx === 0 ? 'bg-fuchsia-400 shadow-[0_0_8px_rgba(217,70,239,0.8)]' : 'bg-zinc-700'
                        }`}></div>
                        
                        <div className="space-y-1">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-bold text-zinc-300">{phase.title}</span>
                            <span className="font-mono text-zinc-500">{phase.duration}</span>
                          </div>
                          <p className="text-xs text-zinc-400 leading-normal">{phase.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mock Sandbox Editor (5 cols) */}
                <div className="md:col-span-5 text-left space-y-3">
                  <h5 className="text-xs font-bold font-mono text-zinc-400 uppercase tracking-widest flex items-center">
                    <TerminalSquare className="w-4 h-4 mr-2 text-zinc-400" /> Mission Spec
                  </h5>
                  
                  <div className="rounded-xl border border-white/10 bg-zinc-950 overflow-hidden font-mono shadow-xl">
                    {/* Editor Header */}
                    <div className="bg-zinc-900 px-4 py-2 border-b border-white/5 flex items-center justify-between text-[10px] text-zinc-500">
                      <span>{activeTrackObj.codeChallenge.filename}</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    </div>
                    {/* Editor Code */}
                    <div className="p-4 space-y-3 text-[10px] leading-relaxed overflow-x-auto select-none">
                      <p className="text-zinc-500"># {activeTrackObj.codeChallenge.description}</p>
                      <div>
                        <p className="text-rose-400/90 line-through">{activeTrackObj.codeChallenge.mistake}</p>
                        <p className="text-emerald-400 font-bold">{activeTrackObj.codeChallenge.fix}</p>
                      </div>
                      <div className="flex items-center space-x-1.5 text-zinc-500 pt-2 border-t border-white/5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span>Tests: Passed (0ms)</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Actions */}
            <div className="relative z-10 flex flex-wrap gap-4 items-center justify-between pt-6 border-t border-white/5 mt-8">
              <div className="flex flex-wrap gap-2 text-left">
                {activeTrackObj.skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`text-[10px] font-mono px-2.5 py-1 rounded-md font-medium ${activeTrackObj.styles.pill}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href="#getstarted"
                className={`px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center space-x-2 ${activeTrackObj.styles.btn}`}
              >
                <Play className="w-3.5 h-3.5 fill-white text-white" />
                <span>Start Learning Path</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export interface RoadmapModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  skills: string[];
  challenges: string[];
  mission: string;
  projectOutcome: string;
}

export interface RoadmapProject {
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  techStack: string[];
  status: 'Completed' | 'In Progress' | 'Not Started';
}

export interface TrackRoadmap {
  trackName: string;
  modules: RoadmapModule[];
  projects: RoadmapProject[];
}

export const roadmapData: Record<string, TrackRoadmap> = {
  "Backend Developer": {
    trackName: "Backend Engineering",
    modules: [
      {
        id: "prog",
        title: "Programming Fundamentals",
        description: "Master logic, flow control, and data structures in Javascript.",
        duration: "45 Minutes",
        skills: ["Algorithms", "Flow Control", "Data Structures"],
        challenges: ["FizzBuzz Challenge", "Array Sorter"],
        mission: "Implement data structures to parse incoming webhook payload data.",
        projectOutcome: "Basic Webhook Parser Engine"
      },
      {
        id: "js",
        title: "JavaScript Basics",
        description: "Learn async programming, promises, callbacks, and modern ES6 features.",
        duration: "2 Hours",
        skills: ["ES6 Syntax", "Async/Await", "Promises", "Error Handling"],
        challenges: ["Async API Fetcher", "Callback wrapper"],
        mission: "Build a reliable async API fetcher that handles rate limits.",
        projectOutcome: "GitHub Contributor Dashboard"
      },
      {
        id: "node",
        title: "Node.js Core",
        description: "Understand the Node.js event loop, event emitters, and file system APIs.",
        duration: "3 Hours",
        skills: ["Event Loop", "Streams", "File System API", "Process Management"],
        challenges: ["Log Analyzer Stream", "Event Emitter Logger"],
        mission: "Create a CLI file stream log analyzer that parses multi-gigabyte log files.",
        projectOutcome: "CLI File Stream Log Analyzer"
      },
      {
        id: "express",
        title: "Express.js",
        description: "Build HTTP servers, request handling, middleware routing, and error handlers.",
        duration: "4 Hours",
        skills: ["Routing", "Middleware", "CORS", "Request Validation"],
        challenges: ["Custom Rate Limiter Middleware", "Request Validator"],
        mission: "Create a custom API gateway routing server with authentication guards.",
        projectOutcome: "API Gateway Proxy Server"
      },
      {
        id: "auth",
        title: "Authentication",
        description: "Implement secure user logins, password hashing, JWTs, and session cookies.",
        duration: "3 Hours",
        skills: ["JWT Authentication", "Bcrypt Hashing", "Cookie Management", "OAuth Basics"],
        challenges: ["Password Hasher CLI", "Token Refresher"],
        mission: "Develop a secure auth module supporting session invalidation and password resets.",
        projectOutcome: "Production Authentication Service"
      },
      {
        id: "db",
        title: "Databases",
        description: "Learn relational database design, SQL querying, indexes, and transactional integrity.",
        duration: "5 Hours",
        skills: ["PostgreSQL Schema Design", "Complex Joins", "DB Migrations", "Indexing"],
        challenges: ["Query Optimizer", "Schema Migration script"],
        mission: "Model database schemas for an online billing platform with payment logs.",
        projectOutcome: "Financial Audit Schema & Queries"
      },
      {
        id: "api",
        title: "REST APIs",
        description: "Design production-grade REST APIs, versioning, formatting, and HTTP statuses.",
        duration: "4 Hours",
        skills: ["RESTful Design", "API Versioning", "Pagination", "Swagger Docs"],
        challenges: ["Swagger OpenAPI writer", "Cursor-based Paginator"],
        mission: "Build an API supporting query parameters, cursor-based pagination, and filter models.",
        projectOutcome: "Standardized Task API"
      },
      {
        id: "proj",
        title: "Build Production API",
        description: "Combine everything to deploy a secure, relational REST API with integrations.",
        duration: "6 Hours",
        skills: ["Dockerization", "Stripe API Integration", "Redis Caching", "Unit Testing"],
        challenges: ["Mock Webhook listener", "Jest Test Suite"],
        mission: "Build a production-ready billing backend API with Stripe integrations.",
        projectOutcome: "Stripe Billing Backend Gateway"
      },
      {
        id: "cap",
        title: "Capstone Project",
        description: "Develop a complete backend service with third-party webhooks, queues, and mailers.",
        duration: "10 Hours",
        skills: ["RabbitMQ Queue", "SendGrid Mailer", "AWS S3 Uploads", "CI/CD Pipeline"],
        challenges: ["Queue Consumer script", "S3 file uploader"],
        mission: "Develop a full-featured video transcoder queue service that sends emails on finish.",
        projectOutcome: "Background Transcoder Worker System"
      },
      {
        id: "startup",
        title: "Startup Readiness Review",
        description: "Complete mock system design rounds and get portfolio reviewed by senior mentors.",
        duration: "3 Hours",
        skills: ["System Design", "Database Sharding", "Load Balancing", "Microservices"],
        challenges: ["Sharding Simulator", "Design Document write-up"],
        mission: "Draft a production system design document representing scalable infrastructure.",
        projectOutcome: "Startup Placed Certification"
      }
    ],
    projects: [
      { title: "Personal Portfolio Website", difficulty: "Beginner", techStack: ["HTML", "CSS", "JavaScript"], status: "Not Started" },
      { title: "Notes API", difficulty: "Beginner", techStack: ["Node.js", "Express.js", "PostgreSQL"], status: "Not Started" },
      { title: "Expense Tracker", difficulty: "Intermediate", techStack: ["Node.js", "Express.js", "MongoDB"], status: "Not Started" },
      { title: "URL Shortener", difficulty: "Intermediate", techStack: ["TypeScript", "Express.js", "Redis"], status: "Not Started" },
      { title: "Authentication Service", difficulty: "Intermediate", techStack: ["Node.js", "JWT", "Bcrypt"], status: "Not Started" },
      { title: "Blog Platform", difficulty: "Intermediate", techStack: ["Node.js", "PostgreSQL", "Tailwind"], status: "Not Started" },
      { title: "E-commerce Backend", difficulty: "Advanced", techStack: ["Node.js", "Stripe API", "Docker"], status: "Not Started" },
      { title: "Final Startup-Ready Capstone", difficulty: "Advanced", techStack: ["Next.js", "Go", "AWS", "Docker"], status: "Not Started" }
    ]
  },
  "Frontend Developer": {
    trackName: "Frontend Engineering",
    modules: [
      {
        id: "prog",
        title: "Programming Fundamentals",
        description: "Master browser environments, syntax, variables, and arrays.",
        duration: "45 Minutes",
        skills: ["Browser JS", "Data Types", "Conditionals"],
        challenges: ["String Reverser", "DOM Selector"],
        mission: "Parse basic HTML DOM nodes and inject items dynamically.",
        projectOutcome: "Interactive TODO List"
      },
      {
        id: "js",
        title: "JavaScript Basics",
        description: "Learn ES6 modules, arrow functions, and array iteration methods.",
        duration: "2 Hours",
        skills: ["ES6 Imports", "Map/Filter/Reduce", "Promises"],
        challenges: ["Dynamic Card Renderer", "Debouncer"],
        mission: "Implement a search input with debounce optimization and render card lists.",
        projectOutcome: "Search-as-you-type filter"
      },
      {
        id: "node",
        title: "Node.js Core",
        description: "Set up Webpack, Babel, npm dependencies, and script executors.",
        duration: "3 Hours",
        skills: ["NPM scripts", "Webpack Bundles", "Babel compilers"],
        challenges: ["Webpack config setup", "Build optimizer"],
        mission: "Configure a custom frontend compiler process from scratch.",
        projectOutcome: "Optimized Webpack Asset Builder"
      },
      {
        id: "express",
        title: "Express.js",
        description: "React core fundamentals, JSX tags, and state manipulation.",
        duration: "4 Hours",
        skills: ["React JSX", "Props", "Component State"],
        challenges: ["Counter app", "Conditional renderer"],
        mission: "Build a stateful data table supporting filters and updates.",
        projectOutcome: "Interlocking Interactive Table"
      },
      {
        id: "auth",
        title: "Authentication",
        description: "Manage React states with hooks, side effects, and memoization.",
        duration: "3 Hours",
        skills: ["useEffect Hook", "useMemo", "useCallback"],
        challenges: ["Timer clock component", "Window Resizer listener"],
        mission: "Implement a robust event-listener hook wrapper managing resizing contexts.",
        projectOutcome: "Fluid Dashboard Window Grid"
      },
      {
        id: "db",
        title: "Databases",
        description: "Learn Tailwind CSS utility framework and complex layout strategies.",
        duration: "5 Hours",
        skills: ["Flexbox / CSS Grid", "Responsive classes", "Custom themes"],
        challenges: ["Glassmorphic Card layout", "Responsive Nav Grid"],
        mission: "Style a complex workspace builder using Tailwinds nested grid layers.",
        projectOutcome: "Grid Component Dashboard Layout"
      },
      {
        id: "api",
        title: "REST APIs",
        description: "Connect to REST services, handle errors, and manage global states.",
        duration: "4 Hours",
        skills: ["Axios client", "Error Boundaries", "Zustand State Store"],
        challenges: ["HTTP Retry helper", "Store Dispatcher"],
        mission: "Wire page routers to external endpoints, implementing retries and error boundaries.",
        projectOutcome: "External API Integration Hub"
      },
      {
        id: "proj",
        title: "Build Production API",
        description: "Deploy standard Single Page Apps using React Router.",
        duration: "6 Hours",
        skills: ["React Router DOM", "Code Splitting", "Lazy Loading"],
        challenges: ["Protected Route Guard", "Route Loader"],
        mission: "Create modular routing paths featuring dynamic import chunk files.",
        projectOutcome: "Multi-page Product Portal"
      },
      {
        id: "cap",
        title: "Capstone Project",
        description: "Combine React and global state tools to build a production client platform.",
        duration: "10 Hours",
        skills: ["Next.js App Router", "SSR pages", "SEO headers", "Framer Motion animations"],
        challenges: ["Page transition anim", "Hydration validator"],
        mission: "Deploy a high-fidelity e-commerce storefront with dynamic slide animations.",
        projectOutcome: "Next.js Animated E-storefront"
      },
      {
        id: "startup",
        title: "Startup Readiness Review",
        description: "Prepare for frontend design rounds, focus on bundle optimization and code review.",
        duration: "3 Hours",
        skills: ["Bundle Optimization", "Lighthouse audit", "W3C accessibility standards"],
        challenges: ["Bundle Chunk split", "Accessibility audit"],
        mission: "Optimize a slow web portal to score 95+ in Google Lighthouse metrics.",
        projectOutcome: "Startup Ready Frontend Placed Portfolio"
      }
    ],
    projects: [
      { title: "Personal Portfolio Website", difficulty: "Beginner", techStack: ["HTML", "CSS", "JavaScript"], status: "Not Started" },
      { title: "E-commerce Front Panel", difficulty: "Beginner", techStack: ["React.js", "Tailwind CSS"], status: "Not Started" },
      { title: "Kanban Board App", difficulty: "Intermediate", techStack: ["React.js", "Zustand", "Dnd-kit"], status: "Not Started" },
      { title: "Social Dashboard client", difficulty: "Intermediate", techStack: ["React.js", "Chakra UI"], status: "Not Started" },
      { title: "Interactive Mock Editor", difficulty: "Intermediate", techStack: ["React.js", "Tailwind", "Canvas API"], status: "Not Started" },
      { title: "Blog Engine Client", difficulty: "Intermediate", techStack: ["Next.js", "Tailwind CSS"], status: "Not Started" },
      { title: "Web Trading Client", difficulty: "Advanced", techStack: ["React.js", "ChartJS", "WebSockets"], status: "Not Started" },
      { title: "Final Startup-Ready Capstone", difficulty: "Advanced", techStack: ["Next.js", "TypeScript", "Tailwind"], status: "Not Started" }
    ]
  }
};

// Generic fallback template for other career tracks
export const getRoadmapForTrack = (trackName: string): TrackRoadmap => {
  const normalizedTrack = Object.keys(roadmapData).find(
    (key) => key.toLowerCase() === trackName.toLowerCase()
  );
  if (normalizedTrack) {
    return roadmapData[normalizedTrack];
  }

  // Fallback Full Stack Roadmap
  return {
    trackName: trackName,
    modules: [
      {
        id: "prog",
        title: "Programming Fundamentals",
        description: "Establish basic variables, functions, loop patterns, and structure foundations.",
        duration: "1 Hour",
        skills: ["Flow Logic", "Functions", "Basic Variables"],
        challenges: ["Calculator script", "String formatter"],
        mission: "Build basic calculation and text formatting scripts.",
        projectOutcome: "Console Utility Package"
      },
      {
        id: "js",
        title: "JavaScript Basics",
        description: "Learn modern syntax, object-oriented concepts, and array iterators.",
        duration: "2 Hours",
        skills: ["ES6+ Syntax", "Object Oriented JS", "Array Iteration"],
        challenges: ["Collection Parser", "Filter Logic"],
        mission: "Structure object entities that model real-world business properties.",
        projectOutcome: "Entity Data Manager"
      },
      {
        id: "node",
        title: "Node.js Core",
        description: "Understand event-driven runtime configurations and modules.",
        duration: "3 Hours",
        skills: ["NPM scripts", "Async processing", "File read/write"],
        challenges: ["JSON database CLI", "Config reader"],
        mission: "Create a CLI script that reads JSON config files and outputs standard system environments.",
        projectOutcome: "JSON Environment CLI Manager"
      },
      {
        id: "express",
        title: "Express.js",
        description: "Define HTTP endpoint routes, query parameters, and custom server routers.",
        duration: "3 Hours",
        skills: ["Endpoint Routing", "Query handling", "Middleware structure"],
        challenges: ["Logging middleware", "Protected route"],
        mission: "Create an HTTP server that logs request headers and verifies queries.",
        projectOutcome: "Standard HTTP Routing Server"
      },
      {
        id: "auth",
        title: "Authentication",
        description: "Build robust tokens, secure storage, and login access guards.",
        duration: "3 Hours",
        skills: ["Token authentication", "Password hashing", "Role management"],
        challenges: ["Auth middleware", "Password cryptor"],
        mission: "Write middleware to intercept requests and check token validity.",
        projectOutcome: "Secure Authentication System"
      },
      {
        id: "db",
        title: "Databases",
        description: "Model SQL/NoSQL schemas, set records, and configure basic database integrations.",
        duration: "4 Hours",
        skills: ["SQL / NoSQL", "DB connection pools", "CRUD operations"],
        challenges: ["Schema builder script", "Bulk inserter"],
        mission: "Establish database connections and query records dynamically.",
        projectOutcome: "Active DB Query Handler"
      },
      {
        id: "api",
        title: "REST APIs",
        description: "Standardize endpoint formats, status messages, and error payloads.",
        duration: "4 Hours",
        skills: ["API Standardization", "Status codes", "Error payloads"],
        challenges: ["Error handler wrapper", "Standard responder"],
        mission: "Implement a globally bound error wrapper for REST endpoints.",
        projectOutcome: "Standard API Server Interface"
      },
      {
        id: "proj",
        title: "Build Production API",
        description: "Integrate database storage, routes, and authentication filters.",
        duration: "6 Hours",
        skills: ["Docker environments", "Redis tools", "Automated tests"],
        challenges: ["Docker container script", "Test execution script"],
        mission: "Write integration tests and containerize the application files.",
        projectOutcome: "Production-ready Dockerized Service"
      },
      {
        id: "cap",
        title: "Capstone Project",
        description: "Assemble a final project incorporating databases, security, and deployments.",
        duration: "8 Hours",
        skills: ["CI/CD workflows", "Third-party integrations", "Production logs"],
        challenges: ["Deploy automation scripts", "Integration test runner"],
        mission: "Build and deploy a full-featured capstone application from scratch.",
        projectOutcome: "Production Live Capstone Application"
      },
      {
        id: "startup",
        title: "Startup Readiness Review",
        description: "Complete portfolio designs and verify skills with engineering mentors.",
        duration: "3 Hours",
        skills: ["System scaling", "Deployment strategies", "Mentorship reviews"],
        challenges: ["System design mock document", "Portfolio review prep"],
        mission: "Publish and document code repositories to meet hiring bar standards.",
        projectOutcome: "Startup Qualified Placement Badge"
      }
    ],
    projects: [
      { title: "Personal Portfolio Website", difficulty: "Beginner", techStack: ["HTML", "CSS", "JavaScript"], status: "Not Started" },
      { title: "Notes API", difficulty: "Beginner", techStack: ["Node.js", "Express.js", "SQL"], status: "Not Started" },
      { title: "Expense Tracker", difficulty: "Intermediate", techStack: ["Node.js", "Express.js", "NoSQL"], status: "Not Started" },
      { title: "URL Shortener", difficulty: "Intermediate", techStack: ["TypeScript", "Express.js", "Redis"], status: "Not Started" },
      { title: "Authentication Service", difficulty: "Intermediate", techStack: ["Node.js", "JWT", "Bcrypt"], status: "Not Started" },
      { title: "Blog Platform", difficulty: "Intermediate", techStack: ["Node.js", "SQL", "Tailwind"], status: "Not Started" },
      { title: "E-commerce Backend", difficulty: "Advanced", techStack: ["Node.js", "API Gateways", "Docker"], status: "Not Started" },
      { title: "Final Startup-Ready Capstone", difficulty: "Advanced", techStack: ["Next.js", "Go", "AWS", "Docker"], status: "Not Started" }
    ]
  };
};

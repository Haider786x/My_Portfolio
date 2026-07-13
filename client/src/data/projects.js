export const projects = [
  {
    id: 'gaffer-desk',
    title: 'Gaffer Desk',
    tagline: 'AI-powered football operations platform for Career Mode managers.',
    description:
      'A full-stack platform that brings real football management tools into EA FC Career Mode — Vision AI squad import, tactical planning, player analytics, and AI-driven squad recommendations.',
    problem:
      'Career Mode managers spend hours manually tracking squad data across spreadsheets with no intelligent tooling. There was no platform that combined visual squad import, tactical planning, and AI recommendations in one place.',
    approach:
      'Built a modular platform where each feature — Vision AI, tactical board, analytics, recommendations — operates independently but shares a common data layer. Prioritized UX clarity so the tool felt like a real football management system, not a student project.',
    implementation: [
      'Integrated Google Gemini Vision API to parse uploaded squad screenshots and extract player attributes automatically.',
      'Designed a MongoDB schema that mirrors real football squad structures — positions, form, contracts, development potential.',
      'Built a REST API with Express.js handling auth, squad CRUD, AI inference requests, and analytics aggregation.',
      'Implemented tactical board with React — drag-and-drop player positioning across formations.',
      'Squad recommendation engine compares player attributes against tactical role requirements to surface gaps.',
    ],
    outcome:
      'Shipped a complete, production-ready platform live at gaffer-desk.vercel.app. All five core features functional — Vision AI import, tactical board, player analytics, recommendations, and development tracking.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Gemini Vision API'],
    status: 'completed',
    liveUrl: 'https://gaffer-desk.vercel.app/signup',
    githubUrl: 'https://github.com/Haider786x/Gaffer_Desk',
    featured: true,
    color: '#1a6b3c',
  },
  {
    id: 'code-sandboxer',
    title: 'CodeSandboxer',
    tagline: 'Secure, multi-language code execution platform and sandboxed runner.',
    description:
      'A secure, multi-language code execution platform for developers, coding platforms, AI agents, online judges, and educational products. Executes code safely, scales workloads, and integrates via a lightweight REST API.',
    problem:
      'Most code execution engines are tightly coupled to a single platform, lack proper resource sandboxing, or require complex setups. Developers need a stateless, secure, standalone code runner that integrates easily and scales.',
    approach:
      'Designed a modular, stateless execution service with a runner factory supporting two modes: Local Mode (using host runtimes for rapid testing/low overhead) and Docker Mode (using isolated containers with strict memory, CPU, and network restrictions).',
    implementation: [
      'Architected a stateless REST API using Node.js and Express.js supporting Python 3, JavaScript (Node.js), and Java execution.',
      'Implemented Docker container sandboxing with strict parameters: network disabled (--network none), 256MB memory cap, 1 CPU limit, read-only container root, and dropped capabilities.',
      'Built a runner factory pattern to switch dynamically between Docker-based sandboxed execution and local runtime environments.',
      'Configured runtime protection mechanisms including a 5-second hard execution timeout and 1MB stdout/stderr limits to prevent resource exhaustion.',
      'Created a startup validator that runs availability checks on system runtimes (Node.js, Python, Java) with feature flag fallback (ENABLE_JAVA=false).',
      'Developed automatic workspace cleanup scripts that purge temporary directories and files immediately post-execution.',
    ],
    outcome:
      'Developed and released a production-ready standalone execution engine supporting Local and Docker environments, packaged with Dockerfiles, build shell scripts, and complete API integration guides.',
    stack: ['Node.js', 'Express.js', 'Docker', 'Bash', 'JavaScript'],
    status: 'completed',
    liveUrl: null,
    githubUrl: 'https://github.com/Haider786x/CodeSandboxer',
    featured: true,
    color: '#c25e1a',
  },
  {
    id: 'solar-intelligence-platform',
    title: 'Solar Intelligence Platform',
    tagline: 'Enterprise platform for solar plant monitoring and AI production forecasting.',
    description:
      'An end-to-end monitoring and analytics platform developed during my internship at A.K. Enterprises. Tracks live solar plant performance, integrates real-time weather data, and generates AI-based production forecasts.',
    problem:
      'Solar plant operators lacked a unified system to monitor live performance, predict future output, and generate automated reports — relying instead on fragmented tools and manual data entry.',
    approach:
      'Designed the system in two layers: a real-time data pipeline (weather + sensor data ingestion) and an analytics layer (ML models for forecasting, dashboard for operators). Backend-first approach — clean APIs before any UI work.',
    implementation: [
      'Architected RESTful APIs in Express.js for plant data ingestion, user authentication, and report generation.',
      'Designed MongoDB collections for time-series plant performance data with efficient indexing for dashboard queries.',
      'Integrated weather APIs to correlate solar irradiance data with actual plant output.',
      'Connected Python ML prediction models via internal API calls from the Node.js backend.',
      'Built a real-time analytics dashboard in React with live charts and operator alert systems.',
      'Implemented JWT-based role authentication separating operator and admin access.',
    ],
    outcome:
      'Platform deployed in production at A.K. Enterprises. Used by operators for live monitoring across multiple solar plants with automated daily performance reports.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Machine Learning'],
    status: 'completed',
    liveUrl: null,
    githubUrl: null,
    featured: true,
    note: 'Internal enterprise deployment — live link not publicly available.',
    color: '#1a4a6b',
  },
  {
    id: 'my-day',
    title: 'My-Day',
    tagline: 'Secure digital journaling platform built around privacy and clean UX.',
    description:
      'A full-stack journaling application with JWT authentication, rich CRUD functionality, and a responsive interface designed to make daily journaling feel effortless and private.',
    problem:
      'Most journaling apps trade privacy for features or have cluttered UIs that make daily writing feel like a chore. The goal was a simple, secure, distraction-free journaling experience.',
    approach:
      'Security-first: JWT authentication with proper token management before any UI work. Then focused on making the writing experience feel clean — minimal interface, no unnecessary features.',
    implementation: [
      'Built secure JWT authentication with token refresh handling in Express.js.',
      'Implemented Redux Toolkit for client-side state management — auth state, journal CRUD operations.',
      'Designed MongoDB schema for journal entries with user isolation — no cross-user data access possible.',
      'REST API endpoints for create, read, update, delete entries with proper authorization middleware.',
      'Responsive Tailwind CSS interface optimized for both desktop writing and mobile journaling.',
    ],
    outcome:
      'Fully functional journaling platform live and deployed. Clean, fast, and privacy-respecting with complete CRUD functionality and secure authentication.',
    stack: ['React', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    status: 'completed',
    liveUrl: 'https://my-day-peach-nine.vercel.app/',
    githubUrl: 'https://github.com/Haider786x/My-Day',
    featured: true,
    color: '#4a1a6b',
  },
  {
    id: 'chat-app',
    title: 'Real-Time Chat App',
    tagline: 'Instant messaging platform powered by Socket.io and the MERN stack.',
    description:
      'A real-time messaging application utilizing Socket.io for instant message delivery, secured with JWT authentication, and built on MongoDB, Express, React, and Node.js.',
    problem:
      'Creating a low-latency messaging application requires managing persistent real-time connections while maintaining secure user session boundaries and clean database synchronization.',
    approach:
      'Designed an event-driven system with Socket.io on top of a RESTful Express.js backend. Implemented token-based authorization and private message storage on MongoDB with Mongoose modeling.',
    implementation: [
      'Integrated Socket.io to establish persistent, low-latency WebSocket connections for real-time message broadcasting.',
      'Implemented secure user onboarding and session management using JSON Web Tokens (JWT).',
      'Designed Express middleware to validate JWT authorization headers on secure REST API endpoints.',
      'Created a responsive frontend using React and managed HTTP request cycles with Axios.',
      'Structured MongoDB schemas to query private chat histories with indexed user relationships.',
    ],
    outcome:
      'Shipped a fully functional real-time communication platform supporting secure accounts, online indicators, and instant chat message distribution.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT'],
    status: 'completed',
    liveUrl: 'https://chat-app-static-wtt5.onrender.com/',
    githubUrl: 'https://github.com/Haider786x/chat-app',
    featured: true,
    color: '#1a666b',
  },
  {
    id: 'code-wars',
    title: 'Code Wars',
    tagline: 'Real-time 1v1 competitive programming platform and match-maker.',
    description:
      'A real-time, head-to-head 1v1 competitive programming platform. Create rooms, challenge peers, and write code in sync with your opponent. Matches run securely on an isolated runner with instant feedback, live spectating, and post-match AI-powered feedback.',
    problem:
      'Designing a low-latency collaborative environment requires keeping multiplayer state synchronized in real-time, executing untrusted user code safely without public API rate-limits, and scaling web socket messaging across multiple servers.',
    approach:
      'Architected a highly responsive real-time platform using Socket.io and Monaco Editor. Employed Upstash Redis as a pub-sub broker to scale socket events horizontally, BullMQ for job scheduling, and connected a custom CodeSandboxer microservice for sandboxed execution.',
    implementation: [
      'Built a real-time Monaco editor synchronization engine using Socket.io and unified storage configuration events.',
      'Designed a Redis-backed scaling layer using pub-sub communication to sync match states across independent API instances.',
      'Integrated BullMQ queues to handle match timing lifecycles, submission timeouts, and asynchronous job processing.',
      'Configured code execution through the custom CodeSandboxer microservice, running submissions in isolated, resource-constrained containers.',
      'Integrated Google Gemini AI key workflows to perform detailed post-match code reviews and ELO-sensitive ELO adjustments.',
      'Created an ELO ranking database logic with automatic 24-hour cleanup cron tasks for guest matches.',
    ],
    outcome:
      'Shipped a production-ready real-time multiplayer programming environment deployed on Vercel and Render, utilizing MongoDB Atlas and serverless Redis queues.',
    stack: ['React', 'Node.js', 'Express.js', 'Socket.io', 'Redis', 'MongoDB', 'Gemini API'],
    status: 'completed',
    liveUrl: 'https://code-wars-theta.vercel.app/',
    githubUrl: 'https://github.com/Haider786x/Code_Wars',
    featured: true,
    color: '#c21a1a',
  },
];

export const getProjectById = (id) => projects.find((p) => p.id === id);
export const getFeaturedProjects = () => projects.filter((p) => p.featured);

/**
 * Department of Computer Engineering - SAKEC
 * Comprehensive Academic & Administrative Dataset
 */

const departmentData = {
    info: {
        collegeName: "Shah & Anchor Kutchhi Engineering College (SAKEC)",
        departmentName: "Department of Computer Engineering",
        established: 1996,
        accreditation: "NBA Accredited | NAAC 'A' Grade | Affiliated to University of Mumbai | Approved by AICTE",
        tagline: "Empowering Next-Generation Computing Pioneers, Innovators & Ethical Technologists",
        hod: {
            name: "Dr. Uday Bhave",
            designation: "Professor & Head of Department",
            qualification: "Ph.D. (Computer Engineering), M.E., B.E.",
            experience: "25+ Years in Academia & Research",
            email: "uday.bhave@sakec.ac.in",
            cabin: "Room 402, 4th Floor, Main Building",
            message: "Welcome to the Department of Computer Engineering at SAKEC. Our department stands at the forefront of technological advancement, fostering rigorous academic scholarship, hands-on experiential learning, and ethical research. Through cutting-edge laboratories, industry collaborations, and active student chapters like ACM and CSI, we empower our graduates to lead innovation in artificial intelligence, cybersecurity, cloud systems, and scalable software architectures across the globe."
        },
        stats: [
            { label: "Annual Intake", value: "180", suffix: "+", icon: "users" },
            { label: "Placement Rate", value: "94.2", suffix: "%", icon: "trending-up" },
            { label: "Highest Package", value: "₹24.5", suffix: " LPA", icon: "award" },
            { label: "Average Package", value: "₹7.85", suffix: " LPA", icon: "briefcase" },
            { label: "Advanced Labs", value: "8", suffix: " State-of-the-Art", icon: "cpu" },
            { label: "Faculty Members", value: "34", suffix: "+ (12 Ph.Ds)", icon: "book-open" }
        ],
        vision: "To become a globally recognized center of excellence in Computer Engineering education and research, producing technologically competent, innovative, and ethically grounded professionals who contribute meaningfully to societal progress.",
        mission: [
            "Provide rigorous, experiential, and industry-aligned computing education through state-of-the-art academic curricula and pedagogical practices.",
            "Establish modern, world-class laboratory infrastructure to foster high-impact research, innovation, and technological entrepreneurship.",
            "Cultivate ethical integrity, environmental consciousness, lifelong learning aptitude, and multidisciplinary collaborative leadership among students.",
            "Strengthen industry-institute partnerships to facilitate internships, sponsored projects, cutting-edge certifications, and global placements."
        ],
        peos: [
            { id: "PEO 1", text: "Demonstrate strong foundational mastery in mathematical modeling, algorithmic thinking, and core computer engineering paradigms to engineer robust software solutions." },
            { id: "PEO 2", text: "Successfully pursue professional careers in industry, higher academic research, or entrepreneurial ventures by adapting dynamically to evolving technological landscapes." },
            { id: "PEO 3", text: "Practice engineering with professional ethics, social accountability, sustainability awareness, and effective multidisciplinary team communication." }
        ],
        psos: [
            { id: "PSO 1", text: "Design, implement, and evaluate intelligent systems utilizing Artificial Intelligence, Machine Learning, Data Analytics, and Cloud Computing frameworks." },
            { id: "PSO 2", text: "Architect secure networks, distributed systems, and resilient enterprise applications adhering to modern DevSecOps and cyber protection principles." }
        ]
    },

    faculty: [
        {
            id: 1,
            name: "Dr. Uday Bhave",
            role: "Professor & HOD",
            category: "professor",
            qualification: "Ph.D. in Computer Engineering, M.E. (Comp)",
            experience: "25 Years",
            specialization: ["Distributed Systems", "Cloud Computing", "High Performance Computing"],
            email: "uday.bhave@sakec.ac.in",
            cabin: "Room 402, 4th Floor",
            scholar: "https://scholar.google.com",
            publications: 42,
            bio: "Dr. Uday Bhave has over 25 years of distinguished teaching and research experience. He has published extensively in peer-reviewed Scopus and SCI indexed journals and serves on advisory boards for several technical universities.",
            courses: ["Distributed Computing", "Cloud Infrastructure", "Advanced Operating Systems"]
        },
        {
            id: 2,
            name: "Dr. Rekha Ramesh",
            role: "Professor",
            category: "professor",
            qualification: "Ph.D. (Computer Engg), M.Tech (CSE)",
            experience: "22 Years",
            specialization: ["Artificial Intelligence", "Deep Learning", "Medical Image Processing"],
            email: "rekha.ramesh@sakec.ac.in",
            cabin: "Room 403, 4th Floor",
            scholar: "https://scholar.google.com",
            publications: 38,
            bio: "Dr. Rekha leads the Department AI Research Group and has guided over 4 Ph.D. scholars. She has secured research grants from AICTE and published in IEEE Transactions.",
            courses: ["Artificial Intelligence & Soft Computing", "Deep Learning Architectures", "Computer Vision"]
        },
        {
            id: 3,
            name: "Dr. Kranti Ghag",
            role: "Associate Professor",
            category: "associate",
            qualification: "Ph.D. in Natural Language Processing, M.E.",
            experience: "19 Years",
            specialization: ["Natural Language Processing", "Big Data Analytics", "Machine Learning"],
            email: "kranti.ghag@sakec.ac.in",
            cabin: "Room 405, 4th Floor",
            scholar: "https://scholar.google.com",
            publications: 31,
            bio: "Dr. Kranti's research focuses on sentiment analysis, multilingual NLP for Indian languages, and predictive modeling for healthcare systems.",
            courses: ["Natural Language Processing", "Big Data Analytics", "Data Warehousing & Mining"]
        },
        {
            id: 4,
            name: "Prof. Manoj Dhande",
            role: "Associate Professor",
            category: "associate",
            qualification: "Ph.D. (Pursuing), M.E. (Computer Engineering)",
            experience: "18 Years",
            specialization: ["Cybersecurity", "Network Penetration Testing", "Digital Forensics"],
            email: "manoj.dhande@sakec.ac.in",
            cabin: "Room 406, 4th Floor",
            scholar: "https://scholar.google.com",
            publications: 24,
            bio: "Certified Ethical Hacker (CEH) and coordinator of the departmental Center of Excellence in Cybersecurity. Regularly conducts industry training programs.",
            courses: ["Cryptography & System Security", "Cyber Defense", "Computer Networks"]
        },
        {
            id: 5,
            name: "Prof. Asha Durafe",
            role: "Associate Professor",
            category: "associate",
            qualification: "M.E. (Comp Engg), Ph.D. (Pursuing)",
            experience: "17 Years",
            specialization: ["Internet of Things", "Embedded Systems", "Blockchain Technology"],
            email: "asha.durafe@sakec.ac.in",
            cabin: "Room 407, 4th Floor",
            scholar: "https://scholar.google.com",
            publications: 19,
            bio: "Prof. Asha has pioneered student IoT hackathon teams and authored textbook chapters on Smart Sensor Networks and Distributed Ledger Technologies.",
            courses: ["Internet of Everything", "Blockchain Architecture", "Microprocessors"]
        },
        {
            id: 6,
            name: "Prof. Prashant Khedkar",
            role: "Assistant Professor",
            category: "assistant",
            qualification: "M.Tech (Computer Science & Engg)",
            experience: "12 Years",
            specialization: ["Full-Stack Engineering", "DevOps & Microservices", "Software Architecture"],
            email: "prashant.khedkar@sakec.ac.in",
            cabin: "Room 408, 4th Floor",
            scholar: "https://scholar.google.com",
            publications: 14,
            bio: "Leads the departmental Coding Club and Open Source Incubation Lab. Mentors students for SIH and Google Summer of Code.",
            courses: ["Web Computing", "Software Engineering & Agile", "Data Structures"]
        },
        {
            id: 7,
            name: "Prof. Snehal Shinde",
            role: "Assistant Professor",
            category: "assistant",
            qualification: "M.E. (Computer Engineering)",
            experience: "10 Years",
            specialization: ["Database Engineering", "Information Retrieval", "Data Science"],
            email: "snehal.shinde@sakec.ac.in",
            cabin: "Room 409, 4th Floor",
            scholar: "https://scholar.google.com",
            publications: 12,
            bio: "Specializes in relational and NoSQL distributed databases. Head coordinator for Department Academic Audits and NBA Documentation.",
            courses: ["Database Management Systems", "Data Structures & Analysis", "Python for Data Science"]
        },
        {
            id: 8,
            name: "Prof. Amit Nerurkar",
            role: "Assistant Professor",
            category: "assistant",
            qualification: "M.E. (Information Technology), Ph.D. (Pursuing)",
            experience: "11 Years",
            specialization: ["Theoretical Computer Science", "Compiler Design", "Quantum Computing"],
            email: "amit.nerurkar@sakec.ac.in",
            cabin: "Room 410, 4th Floor",
            scholar: "https://scholar.google.com",
            publications: 15,
            bio: "Passionate educator specializing in formal automata, algorithm design, and computational complexity theory.",
            courses: ["Theoretical Computer Science", "Analysis of Algorithms", "Compiler Construction"]
        },
        {
            id: 9,
            name: "Prof. Shilpa Joshi",
            role: "Assistant Professor",
            category: "assistant",
            qualification: "M.Tech (Computer Engineering)",
            experience: "9 Years",
            specialization: ["Mobile Application Development", "Human-Computer Interaction", "AR/VR"],
            email: "shilpa.joshi@sakec.ac.in",
            cabin: "Room 411, 4th Floor",
            scholar: "https://scholar.google.com",
            publications: 11,
            bio: "Expert in cross-platform mobile frameworks (Flutter, React Native) and immersive user experience testing methodologies.",
            courses: ["Mobile App Development", "Human Machine Interaction", "Object Oriented Programming"]
        },
        {
            id: 10,
            name: "Prof. Nilesh Rathod",
            role: "Assistant Professor",
            category: "assistant",
            qualification: "M.E. (Computer Engineering)",
            experience: "8 Years",
            specialization: ["Computer Graphics", "Game Engine Architecture", "GPU Computing"],
            email: "nilesh.rathod@sakec.ac.in",
            cabin: "Room 412, 4th Floor",
            scholar: "https://scholar.google.com",
            publications: 9,
            bio: "Conducts practical workshops on OpenGL, DirectX, and Unity 3D engine physics simulations.",
            courses: ["Computer Graphics", "Multimedia Systems", "Operating Systems"]
        },
        {
            id: 11,
            name: "Prof. Ruchira Patel",
            role: "Assistant Professor",
            category: "assistant",
            qualification: "M.Tech (Artificial Intelligence)",
            experience: "7 Years",
            specialization: ["Reinforcement Learning", "Autonomous Robotics", "Deep Vision"],
            email: "ruchira.patel@sakec.ac.in",
            cabin: "Room 413, 4th Floor",
            scholar: "https://scholar.google.com",
            publications: 8,
            bio: "Mentor for the college robotics team at Robocon and ACM-W Women in Computing Student Chapter.",
            courses: ["Machine Learning", "Robotics & Automation", "Discrete Mathematics"]
        },
        {
            id: 12,
            name: "Prof. Rajesh Gaikwad",
            role: "Assistant Professor",
            category: "assistant",
            qualification: "M.E. (Computer Engg), Certified AWS Architect",
            experience: "10 Years",
            specialization: ["Cloud Infrastructure", "Kubernetes Orchestration", "Site Reliability"],
            email: "rajesh.gaikwad@sakec.ac.in",
            cabin: "Room 414, 4th Floor",
            scholar: "https://scholar.google.com",
            publications: 13,
            bio: "Industry-certified cloud practitioner guiding capstone teams on cloud-native deployments and container security.",
            courses: ["Cloud Computing Lab", "Virtualization Technologies", "Unix System Administration"]
        }
    ],

    laboratories: [
        {
            id: "lab-ai",
            name: "Advanced AI & Deep Learning Research Lab",
            labNumber: "Lab 401",
            category: "ai-data",
            area: "1,150 sq.ft.",
            capacity: "35 Workstations",
            incharge: "Dr. Rekha Ramesh",
            assistant: "Mr. Sandeep Patil",
            hardware: "HP Z4 Workstations: Intel Core i9-13900K, 64 GB DDR5 RAM, NVIDIA RTX 4080 (16GB VRAM), 2TB NVMe SSD, 4K High-Res Monitors.",
            software: "Ubuntu 22.04 LTS, PyTorch 2.3, TensorFlow 2.16, CUDA Toolkit 12.4, JupyterLab, Anaconda, HuggingFace Transformers, OpenCV 4.9.",
            description: "Dedicated to model training, LLM fine-tuning, autonomous computer vision, and neural network experimentation with dedicated enterprise GPUs.",
            courses: ["Artificial Intelligence Lab", "Deep Learning Lab", "Computer Vision Lab", "B.E. Final Year Capstone Projects"]
        },
        {
            id: "lab-cloud",
            name: "Cloud Computing & DevOps Lab",
            labNumber: "Lab 402",
            category: "systems",
            area: "980 sq.ft.",
            capacity: "35 Workstations",
            incharge: "Dr. Uday Bhave / Prof. Rajesh Gaikwad",
            assistant: "Ms. Neha Jadhav",
            hardware: "Dell OptiPlex 7010: Intel Core i7-13700, 32 GB RAM, 1TB NVMe, Gigabit Dual NICs with Private Cloud Rack Server support.",
            software: "VMware vSphere ESXi, Docker Engine, Kubernetes (minikube & K3s), Terraform, Jenkins CI/CD, AWS CLI, LocalStack, Ansible.",
            description: "Focuses on cloud resource provisioning, containerization, microservice architecture orchestration, and continuous integration workflows.",
            courses: ["Cloud Computing Lab", "DevOps Engineering", "Virtualization Systems", "Distributed Systems Lab"]
        },
        {
            id: "lab-cyber",
            name: "Cybersecurity & Digital Forensics Lab",
            labNumber: "Lab 403",
            category: "systems",
            area: "950 sq.ft.",
            capacity: "32 Workstations",
            incharge: "Prof. Manoj Dhande",
            assistant: "Mr. Kiran Surve",
            hardware: "HP ProDesk 600: Intel Core i7-12700, 32 GB RAM, 1TB SSD, Isolated Gigabit Sandbox Network with Hardware Firewall.",
            software: "Kali Linux, Parrot Security OS, Wireshark, Metasploit Framework, Burp Suite Pro, Snort IDS/IPS, Autopsy Forensics, Ghidra Reverse Engineering.",
            description: "Isolated sandbox environment designed for threat modeling, ethical hacking, vulnerability assessments, penetration testing, and digital evidence discovery.",
            courses: ["Cryptography & System Security Lab", "Cyber Defense & Ethical Hacking", "Digital Forensics", "Network Security Protocols"]
        },
        {
            id: "lab-iot",
            name: "IoT & Embedded Systems Innovation Lab",
            labNumber: "Lab 404",
            category: "hardware",
            area: "920 sq.ft.",
            capacity: "30 Workstations",
            incharge: "Prof. Asha Durafe",
            assistant: "Mr. Vinod Tambe",
            hardware: "Intel Core i5 Systems, 30x Raspberry Pi 4 Model B (8GB), 40x Arduino Mega 2560 & Uno, ESP32 Wi-Fi/BLE modules, 100+ Sensor & Actuator Kits, Digital Storage Oscilloscopes, Soldering & Prototyping Stations.",
            software: "Raspberry Pi OS, Arduino IDE 2.3, Keil uVision, Proteus PCB Design Suite, Node-RED, MQTT Broker (Mosquitto), Edge Impulse TinyML.",
            description: "Hands-on hardware lab for building smart IoT products, edge AI sensors, smart agriculture devices, and smart campus automation hardware.",
            courses: ["Internet of Everything Lab", "Microprocessors & Interfacing", "Embedded Systems", "Hardware Mini Projects"]
        },
        {
            id: "lab-bigdata",
            name: "Big Data & Database Engineering Lab",
            labNumber: "Lab 405",
            category: "ai-data",
            area: "1,050 sq.ft.",
            capacity: "35 Workstations",
            incharge: "Dr. Kranti Ghag / Prof. Snehal Shinde",
            assistant: "Ms. Pooja More",
            hardware: "Lenovo ThinkCentre Neo 50s: Intel Core i7 13th Gen, 32 GB RAM, 1TB SSD, 10Gbps LAN connected to Cluster Storage.",
            software: "Apache Hadoop 3.3, Apache Spark, MongoDB Enterprise, PostgreSQL 16, Neo4j Graph DB, Apache Kafka, Tableau Desktop, DBeaver.",
            description: "High-throughput data analytics laboratory for distributed map-reduce computation, real-time stream ingestion, and graph data queries.",
            courses: ["Big Data Analytics Lab", "Database Management Systems Lab", "Data Mining & Business Intelligence", "Data Engineering"]
        },
        {
            id: "lab-software",
            name: "Software Engineering & Full-Stack Lab",
            labNumber: "Lab 406",
            category: "software",
            area: "1,020 sq.ft.",
            capacity: "35 Workstations",
            incharge: "Prof. Prashant Khedkar",
            assistant: "Mr. Tushar Sawant",
            hardware: "Dell OptiPlex 5090: Intel Core i7, 16 GB DDR4 RAM, 512GB NVMe SSD, Dual Displays for code productivity.",
            software: "VS Code, IntelliJ IDEA Ultimate, Node.js 20 LTS, Git / GitHub Enterprise, Postman, SonarQube, React, Next.js, Spring Boot, MySQL 8.0.",
            description: "Modern coding lab simulating corporate software development sprints with version control, automated linting, unit testing, and agile tracking.",
            courses: ["Web Computing Lab", "Software Engineering Lab", "Object Oriented Programming Lab", "Mobile App Development Lab"]
        },
        {
            id: "lab-networks",
            name: "Computer Networks & Systems Lab",
            labNumber: "Lab 407",
            category: "systems",
            area: "960 sq.ft.",
            capacity: "32 Workstations",
            incharge: "Prof. Amit Nerurkar",
            assistant: "Mr. Ganesh Chavan",
            hardware: "Core i5-12500, 16GB RAM, Cisco 2900 Series Integrated Service Routers, Cisco Catalyst 2960 Layer-2/3 Managed Switches, Patch Panels, Fluke Cable Testers.",
            software: "Cisco Packet Tracer 8.2, GNS3 Network Simulator, Wireshark, Mininet SDN emulator, Linux iptables, Bind DNS, Apache Web Server.",
            description: "Designed for practical routing protocol configuration (OSPF, BGP), VLAN trunking, sub-netting analysis, and Software Defined Networking (SDN).",
            courses: ["Computer Networks Lab", "Network Design & Management", "Operating Systems Lab", "System Administration"]
        },
        {
            id: "lab-graphics",
            name: "Computer Graphics & Media Computing Lab",
            labNumber: "Lab 408",
            category: "software",
            area: "950 sq.ft.",
            capacity: "30 Workstations",
            incharge: "Prof. Nilesh Rathod",
            assistant: "Ms. Anita Kadam",
            hardware: "HP Workstations: Intel Core i7, 32GB RAM, NVIDIA GeForce RTX 3060 (12GB), Color-accurate IPS displays.",
            software: "OpenGL SDK, Blender 4.1, Unity 3D Engine, Unreal Engine 5.3, Adobe Creative Cloud Suite, Audacity, FFmpeg.",
            description: "Equipped for interactive 2D/3D modeling, shader programming, virtual reality simulations, game mechanics, and multimedia rendering.",
            courses: ["Computer Graphics Lab", "Virtual & Augmented Reality", "Multimedia Systems Lab", "Game Development"]
        }
    ],

    syllabus: {
        schemes: [
            { id: "rev2019", name: "University of Mumbai 'C' Scheme (CBCS / NEP Aligned)" },
            { id: "nep2024", name: "NEP 2020 Autonomous Curriculum" }
        ],
        semesters: [
            {
                sem: "Semester III",
                year: "Second Year (SE)",
                courses: [
                    { code: "CSC301", title: "Engineering Mathematics - III", type: "Theory", credits: 4, hours: "3L + 1T", desc: "Laplace Transform, Fourier Series, Complex Variables, Vector Calculus and Partial Differential Equations." },
                    { code: "CSC302", title: "Discrete Structures & Graph Theory", type: "Theory", credits: 3, hours: "3L", desc: "Set Theory, Relations, Functions, Posets, Lattices, Propositional Logic, Graph Algorithms and Trees." },
                    { code: "CSC303", title: "Data Structures", type: "Theory", credits: 3, hours: "3L", desc: "Linear data structures (Arrays, Stacks, Queues, Linked Lists), Non-linear (Trees, Heaps, Graphs), Sorting & Searching." },
                    { code: "CSC304", title: "Digital Logic & Computer Architecture", type: "Theory", credits: 3, hours: "3L", desc: "Combinational and sequential circuits, ALU design, Memory hierarchy, Control unit design, Instruction pipelines." },
                    { code: "CSC305", title: "Computer Graphics", type: "Theory", credits: 3, hours: "3L", desc: "Raster algorithms, 2D/3D transformations, Clipping, Curves, Visible surface detection, Illumination models." },
                    { code: "CSL301", title: "Data Structures Lab", type: "Practical", credits: 1, hours: "2P", desc: "Hands-on implementation of Stacks, Queues, Trees, Hashing and graph algorithms in C/C++." },
                    { code: "CSL302", title: "Digital Logic & Architecture Lab", type: "Practical", credits: 1, hours: "2P", desc: "Simulation of digital circuits, ALU, MIPS/8086 assembly programming and VHDL modeling." },
                    { code: "CSL303", title: "Computer Graphics Lab", type: "Practical", credits: 1, hours: "2P", desc: "Implementation of graphics primitives, 2D/3D transformations, and animation using OpenGL/C++." },
                    { code: "CSL304", title: "Skill Lab: Object Oriented Programming with Java", type: "Skill Lab", credits: 2, hours: "4P", desc: "OOP principles, Java Collection Framework, Exception handling, Multi-threading, Streams, and GUI design." },
                    { code: "CSP301", title: "Mini Project 1-A", type: "Project", credits: 1, hours: "2P", desc: "Team-based domain specific software project applying core data structures and OOP." }
                ]
            },
            {
                sem: "Semester IV",
                year: "Second Year (SE)",
                courses: [
                    { code: "CSC401", title: "Engineering Mathematics - IV", type: "Theory", credits: 4, hours: "3L + 1T", desc: "Probability, Random Variables, Sampling Theory, Linear Programming, Non-linear Programming." },
                    { code: "CSC402", title: "Analysis of Algorithms", type: "Theory", credits: 3, hours: "3L", desc: "Asymptotic notation, Divide & Conquer, Greedy method, Dynamic Programming, Backtracking, Branch & Bound, NP-Hard." },
                    { code: "CSC403", title: "Database Management Systems", type: "Theory", credits: 3, hours: "3L", desc: "ER modeling, Relational Algebra, SQL, Normalization (1NF to BCNF), Transaction Processing, Concurrency, ACID." },
                    { code: "CSC404", title: "Operating Systems", type: "Theory", credits: 3, hours: "3L", desc: "Process scheduling, IPC, Deadlocks, Memory management, Paging, Virtual Memory, File systems, Disk scheduling." },
                    { code: "CSC405", title: "Microprocessor", type: "Theory", credits: 3, hours: "3L", desc: "8086 architecture, Instruction set, Addressing modes, Interrupts, Memory interfacing, Peripheral chips (8255, 8259)." },
                    { code: "CSL401", title: "Analysis of Algorithms Lab", type: "Practical", credits: 1, hours: "2P", desc: "Empirical analysis of sorting algorithms, dynamic programming solutions, graph traversals." },
                    { code: "CSL402", title: "Database Management Systems Lab", type: "Practical", credits: 1, hours: "2P", desc: "DDL/DML queries, complex joins, triggers, stored procedures, indexing in MySQL and MongoDB." },
                    { code: "CSL403", title: "Operating Systems Lab", type: "Practical", credits: 1, hours: "2P", desc: "Linux shell scripting, POSIX threads, process creation (fork), CPU scheduling simulations, memory allocation." },
                    { code: "CSL404", title: "Microprocessor Lab", type: "Practical", credits: 1, hours: "2P", desc: "Assembly programming on 8086 kits and MASM/TASM simulators for string and arithmetic operations." },
                    { code: "CSL405", title: "Skill Lab: Python Programming", type: "Skill Lab", credits: 2, hours: "4P", desc: "Data structures in Python, NumPy, Pandas, Matplotlib, Web scraping, REST API development with Flask." },
                    { code: "CSP401", title: "Mini Project 1-B", type: "Project", credits: 1, hours: "2P", desc: "Full-stack database backed web application or system utility." }
                ]
            },
            {
                sem: "Semester V",
                year: "Third Year (TE)",
                courses: [
                    { code: "CSC501", title: "Theoretical Computer Science", type: "Theory", credits: 3, hours: "3L", desc: "Regular Languages, Finite Automata, Context-Free Grammars, Pushdown Automata, Turing Machines, Undecidability." },
                    { code: "CSC502", title: "Software Engineering", type: "Theory", credits: 3, hours: "3L", desc: "Agile methodologies, Scrum, Requirement modeling, UML diagrams, Software testing, Cost estimation, DevOps." },
                    { code: "CSC503", title: "Computer Networks", type: "Theory", credits: 3, hours: "3L", desc: "OSI and TCP/IP stack, Data link layer, IP addressing, Routing protocols (RIP, OSPF, BGP), TCP/UDP, Application protocols." },
                    { code: "CSC504", title: "Data Warehousing & Mining", type: "Theory", credits: 3, hours: "3L", desc: "ETL pipelines, Star & Snowflake schemas, Association rule mining (Apriori), Decision trees, Clustering algorithms." },
                    { code: "CSDO501", title: "Department Elective - I (Cloud / AI / Probabilistic)", type: "Elective", credits: 3, hours: "3L", desc: "Choice among: Advanced Cloud Computing, Advanced Algorithms, or Quantum Computing fundamentals." },
                    { code: "CSL501", title: "Software Engineering Lab", type: "Practical", credits: 1, hours: "2P", desc: "SRS documentation, Agile Jira sprint planning, UML modeling with StarUML, Automated testing with Selenium." },
                    { code: "CSL502", title: "Computer Networks Lab", type: "Practical", credits: 1, hours: "2P", desc: "Packet capturing via Wireshark, Cisco Packet Tracer subnet routing, Socket programming in C/Python." },
                    { code: "CSL503", title: "Data Warehousing & Mining Lab", type: "Practical", credits: 1, hours: "2P", desc: "Implementation of K-means clustering, Decision tree classification, Apriori algorithm in Python/R." },
                    { code: "CSL504", title: "Professional Communication & Ethics - II", type: "Practical", credits: 1, hours: "2P", desc: "Technical writing, Mock group discussions, Professional presentations, Corporate email etiquette." },
                    { code: "CSP501", title: "Mini Project 2-A", type: "Project", credits: 1, hours: "2P", desc: "IoT or Cloud enabled multidisciplinary application prototype." }
                ]
            },
            {
                sem: "Semester VI",
                year: "Third Year (TE)",
                courses: [
                    { code: "CSC601", title: "System Programming & Compiler Construction", type: "Theory", credits: 3, hours: "3L", desc: "Assemblers, Macroprocessors, Compilers: Lexical analysis, Top-down/Bottom-up parsing, Code optimization, Code generation." },
                    { code: "CSC602", title: "Cryptography & System Security", type: "Theory", credits: 3, hours: "3L", desc: "Classical ciphers, DES, AES, RSA, Diffie-Hellman, SHA-3, Digital signatures, Firewalls, IDS, Kerberos, SSL/TLS." },
                    { code: "CSC603", title: "Mobile Computing", type: "Theory", credits: 3, hours: "3L", desc: "Cellular networks (GSM, LTE, 5G), Mobile IP, Wireless TCP, Mobile app security, Edge computing paradigms." },
                    { code: "CSC604", title: "Artificial Intelligence", type: "Theory", credits: 3, hours: "3L", desc: "State space search, A*, Minimax & Alpha-Beta pruning, Knowledge representation, Expert systems, Intro to ML." },
                    { code: "CSDO601", title: "Department Elective - II", type: "Elective", credits: 3, hours: "3L", desc: "Choice among: Big Data Analytics, Internet of Everything, or Digital Forensics." },
                    { code: "CSL601", title: "System Programming & Compiler Lab", type: "Practical", credits: 1, hours: "2P", desc: "Lex and Yacc tools, 2-pass assembler design, intermediate code generation." },
                    { code: "CSL602", title: "Cryptography & Security Lab", type: "Practical", credits: 1, hours: "2P", desc: "Implementation of cryptographic algorithms, Wireshark security audits, vulnerability scanning using OpenVAS." },
                    { code: "CSL603", title: "Mobile Computing Lab", type: "Practical", credits: 1, hours: "2P", desc: "Android/Flutter mobile application development integrating REST APIs, SQLite, and sensors." },
                    { code: "CSL604", title: "Artificial Intelligence Lab", type: "Practical", credits: 1, hours: "2P", desc: "Solving 8-puzzle problem, Water jug problem, Tic-tac-toe AI, Prolog expert system development." },
                    { code: "CSP601", title: "Mini Project 2-B", type: "Project", credits: 1, hours: "2P", desc: "AI-powered or security-focused applied computing prototype." }
                ]
            },
            {
                sem: "Semester VII",
                year: "Final Year (BE)",
                courses: [
                    { code: "CSC701", title: "Machine Learning", type: "Theory", credits: 3, hours: "3L", desc: "Supervised learning (Linear/Logistic Regression, SVM), Unsupervised learning, Ensemble models (Random Forests, XGBoost), Neural Networks." },
                    { code: "CSC702", title: "Big Data Analytics", type: "Theory", credits: 3, hours: "3L", desc: "Hadoop Distributed File System, MapReduce, Apache Spark, NoSQL data modeling, Streaming data processing with Kafka." },
                    { code: "CSDO701", title: "Department Elective - III", type: "Elective", credits: 3, hours: "3L", desc: "Choice among: Natural Language Processing, Blockchain Architecture, or Autonomous Mobile Robotics." },
                    { code: "CSDO702", title: "Department Elective - IV", type: "Elective", credits: 3, hours: "3L", desc: "Choice among: Information Retrieval, Cyber Threat Intelligence, or High Performance Computing." },
                    { code: "ILO701", title: "Institute Level Open Elective - I", type: "Elective", credits: 3, hours: "3L", desc: "Interdisciplinary elective: Product Lifecycle Management, Energy Audit, Cyber Law & IPR, or Fintech." },
                    { code: "CSL701", title: "Machine Learning Lab", type: "Practical", credits: 1, hours: "2P", desc: "Scikit-learn, hyperparameter tuning, cross-validation, model deployment with FastAPI / Streamlit." },
                    { code: "CSL702", title: "Big Data Analytics Lab", type: "Practical", credits: 1, hours: "2P", desc: "Hadoop cluster setup, PySpark DataFrame manipulation, aggregation queries on large datasets." },
                    { code: "CSP701", title: "Major Project - Stage I", type: "Project", credits: 3, hours: "6P", desc: "Literature review, problem definition, feasibility study, software architecture, and 50% implementation." }
                ]
            },
            {
                sem: "Semester VIII",
                year: "Final Year (BE)",
                courses: [
                    { code: "CSC801", title: "Distributed Computing", type: "Theory", credits: 3, hours: "3L", desc: "RPC, RMI, Clock synchronization, Mutual exclusion, Distributed transactions, Fault tolerance, Consensus (Paxos/Raft)." },
                    { code: "CSDO801", title: "Department Elective - V", type: "Elective", credits: 3, hours: "3L", desc: "Choice among: Deep Learning, Quantum Computing, or Augmented & Virtual Reality." },
                    { code: "CSDO802", title: "Department Elective - VI", type: "Elective", credits: 3, hours: "3L", desc: "Choice among: Social Media Analytics, Reinforcement Learning, or Edge AI." },
                    { code: "ILO801", title: "Institute Level Open Elective - II", type: "Elective", credits: 3, hours: "3L", desc: "Disaster Management, Supply Chain Management, Environmental Management, or Entrepreneurship Development." },
                    { code: "CSL801", title: "Distributed Computing Lab", type: "Practical", credits: 1, hours: "2P", desc: "Socket-based distributed message queues, gRPC implementations, Raft consensus algorithm simulation." },
                    { code: "CSP801", title: "Major Project - Stage II", type: "Project", credits: 6, hours: "12P", desc: "Complete system implementation, rigorous testing, benchmarking, research paper submission, and final jury viva." }
                ]
            }
        ]
    },

    achievements: [
        {
            id: 1,
            category: "hackathon",
            title: "Smart India Hackathon (SIH) National Winners",
            year: "2024",
            award: "1st Prize (₹1,00,000 Cash Prize)",
            team: "Team 'ByteForce' (Lead: Tanmay Shinde, Antara Parab, Rohan Mehta, Yash Joshi)",
            agency: "Ministry of Power & AICTE",
            desc: "Engineered an AI-powered smart grid load prediction and fault detection system using IoT edge telemetry and LSTM forecasting.",
            badge: "National Trophy"
        },
        {
            id: 2,
            category: "research",
            title: "Best Research Paper Award at IEEE CONECCT",
            year: "2024",
            award: "IEEE Outstanding Paper Gold Medal",
            team: "Dr. Rekha Ramesh & Aditya Shah (Student)",
            agency: "IEEE Bangalore Section",
            desc: "Published research on 'Federated Transfer Learning for Privacy-Preserving Diagnostic Imaging on Edge Devices'.",
            badge: "IEEE Publication"
        },
        {
            id: 3,
            category: "patent",
            title: "Published Indian Patent on Autonomous Waste Sorting",
            year: "2023",
            award: "Patent No. 202321045981",
            team: "Dr. Uday Bhave, Prof. Asha Durafe & Final Year Project Team",
            agency: "Controller General of Patents, Designs & Trademarks, Govt. of India",
            desc: "Robotic vision mechanism utilizing multispectral sensors and YOLOv8 for automated e-waste segregation.",
            badge: "Granted/Published"
        },
        {
            id: 4,
            category: "hackathon",
            title: "Global Finalists - NASA Space Apps Challenge",
            year: "2023",
            award: "Global Top 40 Finalist Rank",
            team: "Team 'AstroDevs' (SAKEC Computer Engineering)",
            agency: "NASA Earth Science Division",
            desc: "Built a web-based open-access satellite data visualizer tracking wildfire progressions across continents in real time.",
            badge: "International"
        },
        {
            id: 5,
            category: "chapter",
            title: "CSI National Best Student Chapter Award",
            year: "2023-2024",
            award: "Excellence in Technical Chapters Trophy",
            team: "CSI SAKEC Computer Engineering Chapter",
            agency: "Computer Society of India (CSI)",
            desc: "Recognized for organizing 24+ high-impact hackathons, code bootcamps, and community outreach programs reaching 2,500+ participants.",
            badge: "National Award"
        },
        {
            id: 6,
            category: "research",
            title: "AICTE Research Grant of ₹14.5 Lakhs",
            year: "2022-2024",
            award: "AICTE RPS Scheme Grant",
            team: "Principal Investigator: Dr. Kranti Ghag",
            agency: "All India Council for Technical Education (AICTE)",
            desc: "Project on 'Multilingual Sentiment Analysis and Hate-Speech Detection for Low-Resource Regional Indian Dialects'.",
            badge: "Funded Grant"
        }
    ],

    placements: {
        summary: {
            academicYear: "2023-2024 (Latest Completed Cycle)",
            overallRate: "94.2%",
            highestPackage: "₹24.50 LPA",
            highestCompany: "Amazon AWS",
            averagePackage: "₹7.85 LPA",
            medianPackage: "₹6.80 LPA",
            totalOffers: "248 Offers",
            companiesVisited: "88 Companies",
            studentsEligible: "182 Students"
        },
        trends: [
            { year: "2020-21", placed: 89.4, highest: 16.5, average: 5.6, totalOffers: 195 },
            { year: "2021-22", placed: 91.8, highest: 19.8, average: 6.4, totalOffers: 218 },
            { year: "2022-23", placed: 93.5, highest: 22.0, average: 7.2, totalOffers: 236 },
            { year: "2023-24", placed: 94.2, highest: 24.5, average: 7.85, totalOffers: 248 },
            { year: "2024-25 (Ongoing)", placed: 88.6, highest: 26.0, average: 8.2, totalOffers: 210 }
        ],
        packageDistribution: [
            { tier: "₹12+ LPA (Super Dream)", count: 28, percentage: 11.3, color: "#10b981" },
            { tier: "₹8 - ₹12 LPA (Dream)", count: 64, percentage: 25.8, color: "#3b82f6" },
            { tier: "₹5 - ₹8 LPA (Core Prime)", count: 114, percentage: 46.0, color: "#f59e0b" },
            { tier: "< ₹5 LPA (Standard)", count: 42, percentage: 16.9, color: "#6b7280" }
        ],
        sectorShare: [
            { sector: "Software & Cloud Services", share: 38 },
            { sector: "FinTech & Investment Banking", share: 26 },
            { sector: "IT Consulting & Enterprise Solutions", share: 20 },
            { sector: "Data Analytics & AI", share: 11 },
            { sector: "Core Hardware & Embedded/IoT", share: 5 }
        ],
        recruiters: [
            { name: "Amazon", logo: "amazon", tier: "Super Dream", package: "₹24.5 LPA" },
            { name: "Morgan Stanley", logo: "ms", tier: "Super Dream", package: "₹22.0 LPA" },
            { name: "J.P. Morgan Chase", logo: "jpmc", tier: "Super Dream", package: "₹19.5 LPA" },
            { name: "Barclays", logo: "barclays", tier: "Super Dream", package: "₹16.0 LPA" },
            { name: "Deutsche Bank", logo: "db", tier: "Dream", package: "₹14.5 LPA" },
            { name: "LTI Mindtree", logo: "ltimindtree", tier: "Dream", package: "₹10.5 LPA" },
            { name: "TCS Digital", logo: "tcs", tier: "Dream", package: "₹9.0 LPA" },
            { name: "Accenture", logo: "accenture", tier: "Core Prime", package: "₹8.5 LPA" },
            { name: "Capgemini", logo: "capgemini", tier: "Core Prime", package: "₹7.5 LPA" },
            { name: "Reliance Jio", logo: "jio", tier: "Core Prime", package: "₹7.0 LPA" },
            { name: "NSEIT", logo: "nseit", tier: "Core Prime", package: "₹6.5 LPA" },
            { name: "Infosys DSE", logo: "infosys", tier: "Dream", package: "₹9.5 LPA" },
            { name: "Cognizant GenC Next", logo: "cognizant", tier: "Core Prime", package: "₹7.2 LPA" },
            { name: "Persistent Systems", logo: "persistent", tier: "Dream", package: "₹8.8 LPA" }
        ],
        testimonials: [
            {
                name: "Rahul Verma",
                batch: "Class of 2024",
                company: "Amazon AWS",
                package: "₹24.5 LPA",
                role: "Cloud Support Associate / SDE",
                text: "The rigorous curriculum, hands-on lab work in our Cloud & DevOps Lab, and faculty mentorship provided me with the technical depth and problem-solving mindset necessary to crack AWS interviews."
            },
            {
                name: "Simran Kour",
                batch: "Class of 2024",
                company: "Morgan Stanley",
                package: "₹22.0 LPA",
                role: "Technology Analyst",
                text: "SAKEC Computer Engineering gave me opportunities through competitive hackathons and CSI workshops that shaped my algorithmic mastery and system design concepts."
            },
            {
                name: "Prateek Deshmukh",
                batch: "Class of 2023",
                company: "J.P. Morgan Chase & Co.",
                package: "₹19.5 LPA",
                role: "Software Engineer",
                text: "The guidance from our professors and the dedicated placement training programs on Data Structures and System Design were instrumental in securing my dream role."
            }
        ]
    },

    notices: [
        {
            id: 1,
            title: "BE Major Project Stage-II Final Review & Poster Presentation",
            date: "Nov 25, 2026",
            category: "Academics",
            isNew: true,
            link: "#"
        },
        {
            id: 2,
            title: "Campus Recruitment Drive: Barclays & LTI Mindtree Registration",
            date: "Nov 22, 2026",
            category: "Placements",
            isNew: true,
            link: "#"
        },
        {
            id: 3,
            title: "National Level 36-Hour Hackathon: 'Hack-SAKEC 2026' Open for Registration",
            date: "Nov 18, 2026",
            category: "Events",
            isNew: true,
            link: "#"
        },
        {
            id: 4,
            title: "Submission of Term Work & Attendance Review - Odd Semester 2026",
            date: "Nov 15, 2026",
            category: "Exams",
            isNew: false,
            link: "#"
        }
    ]
};

// Environmental Education Platform JavaScript

// Application Data
const appData = {
    user: {
        name: "Arya Sharma",
        points: 2840,
        level: 15,
        levelName: "Eco Champion",
        school: "Green Valley High School",
        avatar: "🌟",
        treesPlanted: 8,
        badgesCount: 23
    },
    
    learningModules: [
        {id: 1, title: "Climate Change Basics", icon: "🌡️", difficulty: "beginner", progress: 85, category: "Climate", description: "Understanding global warming and its impacts", lessons: 5},
        {id: 2, title: "Renewable Energy", icon: "🔋", difficulty: "intermediate", progress: 60, category: "Energy", description: "Solar, wind, and sustainable energy solutions", lessons: 8},
        {id: 3, title: "Ocean Pollution", icon: "🌊", difficulty: "beginner", progress: 40, category: "Water", description: "Marine ecosystem threats and plastic pollution", lessons: 6},
        {id: 4, title: "Urban Ecology", icon: "🏙️", difficulty: "advanced", progress: 20, category: "Urban", description: "Sustainable city planning and green infrastructure", lessons: 10},
        {id: 5, title: "Biodiversity Conservation", icon: "🦋", difficulty: "intermediate", progress: 90, category: "Wildlife", description: "Protecting species and ecosystem diversity", lessons: 7},
        {id: 6, title: "Green Transportation", icon: "🚲", difficulty: "beginner", progress: 75, category: "Transport", description: "Sustainable mobility and carbon reduction", lessons: 4},
        {id: 7, title: "Waste Management", icon: "♻️", difficulty: "beginner", progress: 100, category: "Waste", description: "Reduce, reuse, recycle principles", lessons: 6},
        {id: 8, title: "Sustainable Agriculture", icon: "🌱", difficulty: "intermediate", progress: 30, category: "Agriculture", description: "Organic farming and food security", lessons: 9},
        {id: 9, title: "Water Conservation", icon: "💧", difficulty: "beginner", progress: 95, category: "Water", description: "Protecting our most precious resource", lessons: 5},
        {id: 10, title: "Forest Ecosystems", icon: "🌲", difficulty: "advanced", progress: 15, category: "Forest", description: "Deforestation causes and prevention", lessons: 8},
        {id: 11, title: "Air Quality", icon: "🌬️", difficulty: "intermediate", progress: 50, category: "Air", description: "Pollution sources and clean air solutions", lessons: 7},
        {id: 12, title: "Environmental Policy", icon: "📜", difficulty: "expert", progress: 0, category: "Policy", description: "Laws and regulations for environmental protection", lessons: 12}
    ],
    
    challenges: [
        {id: 1, title: "Plant a Tree", icon: "🌳", type: "daily", difficulty: 2, points: 50, participants: 1240, description: "Plant and care for a new tree in your area"},
        {id: 2, title: "Zero Waste Day", icon: "🗑️", type: "weekly", difficulty: 3, points: 100, participants: 890, description: "Go an entire day without producing any waste"},
        {id: 3, title: "Beach Cleanup", icon: "🏖️", type: "monthly", difficulty: 4, points: 200, participants: 456, description: "Organize or join a local beach cleanup event"},
        {id: 4, title: "Solar Panel Installation", icon: "☀️", type: "monthly", difficulty: 5, points: 300, participants: 123, description: "Install solar panels in your home or community"},
        {id: 5, title: "Organic Garden", icon: "🥬", type: "weekly", difficulty: 3, points: 150, participants: 678, description: "Start an organic vegetable garden"},
        {id: 6, title: "Rain Water Harvesting", icon: "🌧️", type: "monthly", difficulty: 4, points: 250, participants: 234, description: "Set up a rainwater collection system"},
        {id: 7, title: "Bike to Work Week", icon: "🚲", type: "weekly", difficulty: 2, points: 75, participants: 1567, description: "Use bicycle transportation for daily commuting"},
        {id: 8, title: "Wildlife Photography", icon: "📸", type: "team", difficulty: 3, points: 120, participants: 345, description: "Document local wildlife and share conservation stories"},
        {id: 9, title: "Energy Audit", icon: "🔌", type: "monthly", difficulty: 4, points: 180, participants: 567, description: "Conduct a complete home energy efficiency audit"},
        {id: 10, title: "Composting Challenge", icon: "🍂", type: "weekly", difficulty: 2, points: 80, participants: 890, description: "Start and maintain a composting system"},
        {id: 11, title: "Plastic-Free Month", icon: "🚫", type: "monthly", difficulty: 5, points: 400, participants: 234, description: "Eliminate single-use plastics from your lifestyle"},
        {id: 12, title: "Native Plant Restoration", icon: "🌺", type: "team", difficulty: 4, points: 200, participants: 123, description: "Help restore native plant species in local areas"}
    ],
    
    games: [
        {id: 1, title: "Waste Segregation", icon: "♻️", description: "Sort different types of waste into correct bins", difficulty: "Easy", bestScore: 1250},
        {id: 2, title: "Carbon Footprint Calculator", icon: "👣", description: "Calculate and reduce your environmental impact", difficulty: "Medium", bestScore: 85},
        {id: 3, title: "Virtual Tree Growing", icon: "🌱", description: "Grow and care for virtual trees", difficulty: "Easy", bestScore: 15},
        {id: 4, title: "Environmental Trivia", icon: "🧠", description: "Test your environmental knowledge", difficulty: "Medium", bestScore: 2400},
        {id: 5, title: "Ecosystem Balance", icon: "⚖️", description: "Maintain balance in different ecosystems", difficulty: "Hard", bestScore: 3200},
        {id: 6, title: "Water Conservation Puzzle", icon: "💧", description: "Solve puzzles to save water resources", difficulty: "Medium", bestScore: 1800},
        {id: 7, title: "Renewable Energy Grid", icon: "⚡", description: "Build sustainable energy infrastructure", difficulty: "Hard", bestScore: 2800},
        {id: 8, title: "Climate Action Strategy", icon: "🌍", description: "Make decisions to combat climate change", difficulty: "Expert", bestScore: 4500}
    ],
    
    badges: [
        {id: 1, name: "Tree Hugger", icon: "🌳", description: "Planted 10 trees", earned: true},
        {id: 2, name: "Waste Warrior", icon: "♻️", description: "Completed waste reduction challenge", earned: true},
        {id: 3, name: "Solar Pioneer", icon: "☀️", description: "Installed solar energy system", earned: false},
        {id: 4, name: "Water Guardian", icon: "💧", description: "Saved 1000L of water", earned: true},
        {id: 5, name: "Eco Scholar", icon: "🎓", description: "Completed 5 learning modules", earned: true},
        {id: 6, name: "Green Commuter", icon: "🚲", description: "Used sustainable transport for 30 days", earned: true},
        {id: 7, name: "Wildlife Protector", icon: "🦋", description: "Helped protect endangered species", earned: false},
        {id: 8, name: "Carbon Neutral", icon: "🌿", description: "Achieved net zero carbon footprint", earned: false},
        {id: 9, name: "Community Leader", icon: "👥", description: "Led 5 environmental initiatives", earned: true},
        {id: 10, name: "Ocean Defender", icon: "🌊", description: "Participated in beach cleanup", earned: true},
        {id: 11, name: "Energy Saver", icon: "💡", description: "Reduced energy consumption by 50%", earned: false},
        {id: 12, name: "Plastic-Free Hero", icon: "🚫", description: "Went plastic-free for a month", earned: false}
    ]
};

// Current game state
let currentGame = null;
let gameState = {};
let draggedElement = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    loadDashboard();
    loadLearningModules();
    loadChallenges();
    loadCompeteSection();
    loadGames();
    loadProfile();
    setupModals();
}

// Navigation
function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = e.target.dataset.section;
            showSection(section);
            
            // Update active state
            navButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
}

function showSection(sectionName) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// Dashboard
function loadDashboard() {
    loadDailyChallenges();
    loadTopStudents();
}

function loadDailyChallenges() {
    const container = document.getElementById('dailyChallengesList');
    const dailyChallenges = appData.challenges.filter(c => c.type === 'daily').slice(0, 3);
    
    container.innerHTML = dailyChallenges.map(challenge => `
        <div class="challenge-item">
            <div>
                <span class="card-icon">${challenge.icon}</span>
                <strong>${challenge.title}</strong>
                <div class="status status--info">${challenge.points} points</div>
            </div>
            <button class="btn btn--sm btn--primary" onclick="joinChallenge(${challenge.id})">Join</button>
        </div>
    `).join('');
}

function loadTopStudents() {
    const container = document.getElementById('topStudentsList');
    const topStudentsData = [
        {name: "Arya Sharma", school: "Green Valley High School", points: 2840, avatar: "🌟"},
        {name: "Kiran Patel", school: "Eco Smart Academy", points: 2650, avatar: "🌱"},
        {name: "Maya Singh", school: "Green Valley High School", points: 2430, avatar: "🌍"}
    ];
    
    container.innerHTML = topStudentsData.map((student, index) => `
        <div class="student-item">
            <div>
                <span>${student.avatar}</span>
                <strong>${student.name}</strong>
                <div class="status status--success">${student.points} points</div>
            </div>
            <div class="rank ${index === 0 ? 'gold' : index === 1 ? 'silver' : 'bronze'}">#${index + 1}</div>
        </div>
    `).join('');
}

// Learning Modules
function loadLearningModules() {
    const container = document.getElementById('learningModules');
    
    container.innerHTML = appData.learningModules.map(module => `
        <div class="module-card" onclick="openModule(${module.id})">
            <div class="card-header">
                <div class="card-icon">${module.icon}</div>
                <div>
                    <div class="card-title">${module.title}</div>
                    <div class="difficulty-badge difficulty-${module.difficulty}">${module.difficulty}</div>
                </div>
            </div>
            <div class="card-content">
                <div class="card-description">${module.description}</div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${module.progress}%"></div>
                </div>
                <div style="font-size: 12px; color: var(--color-text-secondary);">
                    ${module.progress}% complete • ${module.lessons} lessons
                </div>
            </div>
        </div>
    `).join('');
    
    setupLearningFilters();
}

function setupLearningFilters() {
    const filterButtons = document.querySelectorAll('.difficulty-filter .filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const difficulty = e.target.dataset.difficulty;
            filterLearningModules(difficulty);
            
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
}

function filterLearningModules(difficulty) {
    const cards = document.querySelectorAll('.module-card');
    cards.forEach(card => {
        if (difficulty === 'all') {
            card.style.display = 'block';
        } else {
            const cardDifficulty = card.querySelector('.difficulty-badge').textContent;
            card.style.display = cardDifficulty === difficulty ? 'block' : 'none';
        }
    });
}

function openModule(moduleId) {
    const module = appData.learningModules.find(m => m.id === moduleId);
    const modal = document.getElementById('moduleModal');
    const content = document.getElementById('moduleContent');
    
    content.innerHTML = `
        <div class="quiz-container">
            <div class="card-header">
                <div class="card-icon">${module.icon}</div>
                <div>
                    <h2>${module.title}</h2>
                    <div class="difficulty-badge difficulty-${module.difficulty}">${module.difficulty}</div>
                </div>
            </div>
            <div class="card-content">
                <p>${module.description}</p>
                <div class="progress-bar" style="margin: 20px 0;">
                    <div class="progress-fill" style="width: ${module.progress}%"></div>
                </div>
                <p>Progress: ${module.progress}% • ${module.lessons} lessons</p>
                
                <div style="margin-top: 30px;">
                    <h3>📖 Lessons</h3>
                    ${generateLessons(module)}
                </div>
                
                <div style="margin-top: 30px;">
                    <button class="btn btn--primary" onclick="startQuiz(${moduleId})">Take Quiz</button>
                    <button class="btn btn--secondary" onclick="watchVideo(${moduleId})">📺 Watch Video</button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
}

function generateLessons(module) {
    const lessons = [
        "Introduction and Overview",
        "Key Concepts and Principles",
        "Real-world Applications",
        "Case Studies and Examples",
        "Best Practices and Solutions"
    ];
    
    return lessons.slice(0, module.lessons).map((lesson, index) => `
        <div class="challenge-item" style="margin-bottom: 10px;">
            <div>
                <span style="margin-right: 10px;">📚</span>
                <span>${lesson}</span>
            </div>
            <div class="status ${index < Math.floor(module.lessons * module.progress / 100) ? 'status--success' : 'status--info'}">
                ${index < Math.floor(module.lessons * module.progress / 100) ? '✅ Complete' : '📖 Study'}
            </div>
        </div>
    `).join('');
}

function startQuiz(moduleId) {
    const module = appData.learningModules.find(m => m.id === moduleId);
    const modal = document.getElementById('quizModal');
    const content = document.getElementById('quizContent');
    
    const questions = generateQuizQuestions(module);
    let currentQuestion = 0;
    let score = 0;
    
    function showQuestion() {
        const question = questions[currentQuestion];
        content.innerHTML = `
            <div class="quiz-container">
                <div class="quiz-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${(currentQuestion / questions.length) * 100}%"></div>
                    </div>
                    <p>Question ${currentQuestion + 1} of ${questions.length}</p>
                </div>
                
                <div class="quiz-question">
                    <h3>${question.question}</h3>
                    <div class="quiz-options">
                        ${question.options.map((option, index) => `
                            <div class="quiz-option" onclick="selectAnswer(${index})">${option}</div>
                        `).join('')}
                    </div>
                </div>
                
                <div style="margin-top: 30px;">
                    <button class="btn btn--primary" onclick="nextQuestion()" id="nextBtn" style="display: none;">Next Question</button>
                </div>
            </div>
        `;
    }
    
    window.selectAnswer = function(selectedIndex) {
        const options = document.querySelectorAll('.quiz-option');
        options.forEach(option => option.classList.remove('selected'));
        options[selectedIndex].classList.add('selected');
        
        // Show correct answer after selection
        setTimeout(() => {
            const question = questions[currentQuestion];
            options.forEach((option, index) => {
                if (index === question.correct) {
                    option.classList.add('correct');
                } else if (index === selectedIndex && index !== question.correct) {
                    option.classList.add('incorrect');
                }
            });
            
            if (selectedIndex === question.correct) score++;
            document.getElementById('nextBtn').style.display = 'block';
        }, 500);
    };
    
    window.nextQuestion = function() {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showQuizResults();
        }
    };
    
    function showQuizResults() {
        content.innerHTML = `
            <div class="quiz-container" style="text-align: center;">
                <h2>Quiz Complete! 🎉</h2>
                <div style="font-size: 48px; margin: 30px 0;">
                    ${score >= questions.length * 0.8 ? '🏆' : score >= questions.length * 0.6 ? '🥈' : '📚'}
                </div>
                <h3>Your Score: ${score}/${questions.length}</h3>
                <p>Percentage: ${Math.round((score / questions.length) * 100)}%</p>
                
                ${score >= questions.length * 0.8 ? '<p style="color: var(--color-success);">Excellent work! You\'ve mastered this topic!</p>' : 
                  score >= questions.length * 0.6 ? '<p style="color: var(--color-warning);">Good job! Consider reviewing some concepts.</p>' : 
                  '<p style="color: var(--color-error);">Keep studying! You\'ll get it next time!</p>'}
                
                <div style="margin-top: 30px;">
                    <button class="btn btn--primary" onclick="closeModal('quizModal')">Continue Learning</button>
                </div>
            </div>
        `;
        
        // Award points
        appData.user.points += score * 10;
        updateUserPoints();
        showSuccess(`Quiz completed! +${score * 10} points`);
    }
    
    showQuestion();
    modal.classList.remove('hidden');
}

function generateQuizQuestions(module) {
    const questionBank = {
        "Climate Change Basics": [
            {question: "What is the primary cause of recent climate change?", options: ["Natural cycles", "Greenhouse gas emissions", "Solar radiation", "Ocean currents"], correct: 1},
            {question: "Which gas contributes most to global warming?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"], correct: 1},
            {question: "What does 'carbon footprint' mean?", options: ["Size of coal deposits", "Amount of CO2 produced", "Forest coverage", "Plant growth"], correct: 1}
        ],
        "Renewable Energy": [
            {question: "Which is NOT a renewable energy source?", options: ["Solar", "Wind", "Coal", "Hydroelectric"], correct: 2},
            {question: "Solar panels convert sunlight into what?", options: ["Heat only", "Electricity", "Water", "Oxygen"], correct: 1},
            {question: "Wind energy is most effective in areas with?", options: ["No wind", "Consistent strong winds", "Mountains only", "Forests"], correct: 1}
        ]
    };
    
    return questionBank[module.title] || [
        {question: "Environmental protection is important because?", options: ["It's trendy", "Future generations depend on it", "It's expensive", "It's optional"], correct: 1},
        {question: "The best way to help the environment is to?", options: ["Do nothing", "Use more resources", "Reduce, reuse, recycle", "Buy more products"], correct: 2},
        {question: "Sustainable development means?", options: ["Using all resources now", "Meeting present needs without compromising future generations", "Ignoring the environment", "Only thinking about profit"], correct: 1}
    ];
}

function watchVideo(moduleId) {
    showSuccess("Video lesson will be available soon! 📺");
}

// Challenges
function loadChallenges() {
    const container = document.getElementById('challengesList');
    
    container.innerHTML = appData.challenges.map(challenge => `
        <div class="challenge-card" onclick="openChallenge(${challenge.id})">
            <div class="card-header">
                <div class="card-icon">${challenge.icon}</div>
                <div>
                    <div class="card-title">${challenge.title}</div>
                    <div class="status status--info">${challenge.type}</div>
                </div>
            </div>
            <div class="card-content">
                <div class="card-description">${challenge.description}</div>
                <div style="display: flex; justify-content: space-between; margin-top: 12px;">
                    <span>🏆 ${challenge.points} points</span>
                    <span>👥 ${challenge.participants} joined</span>
                </div>
                <div style="margin-top: 8px;">
                    ${'⭐'.repeat(challenge.difficulty)}${'☆'.repeat(5-challenge.difficulty)}
                </div>
            </div>
        </div>
    `).join('');
    
    setupChallengeFilters();
}

function setupChallengeFilters() {
    const filterButtons = document.querySelectorAll('.challenge-filter .filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const type = e.target.dataset.type;
            filterChallenges(type);
            
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        });
    });
}

function filterChallenges(type) {
    const cards = document.querySelectorAll('.challenge-card');
    cards.forEach(card => {
        if (type === 'all') {
            card.style.display = 'block';
        } else {
            const cardType = card.querySelector('.status').textContent;
            card.style.display = cardType === type ? 'block' : 'none';
        }
    });
}

function openChallenge(challengeId) {
    const challenge = appData.challenges.find(c => c.id === challengeId);
    const modal = document.getElementById('challengeModal');
    const content = document.getElementById('challengeContent');
    
    content.innerHTML = `
        <div class="quiz-container">
            <div class="card-header">
                <div class="card-icon">${challenge.icon}</div>
                <div>
                    <h2>${challenge.title}</h2>
                    <div class="status status--info">${challenge.type}</div>
                </div>
            </div>
            <div class="card-content">
                <p><strong>Description:</strong> ${challenge.description}</p>
                <p><strong>Difficulty:</strong> ${'⭐'.repeat(challenge.difficulty)}${'☆'.repeat(5-challenge.difficulty)}</p>
                <p><strong>Reward:</strong> 🏆 ${challenge.points} points</p>
                <p><strong>Participants:</strong> 👥 ${challenge.participants} people have joined</p>
                
                <div style="margin: 30px 0;">
                    <h3>📋 How to complete:</h3>
                    <ul style="margin-left: 20px;">
                        <li>Follow the challenge requirements</li>
                        <li>Document your progress with photos/videos</li>
                        <li>Submit proof of completion</li>
                        <li>Earn points and badges!</li>
                    </ul>
                </div>
                
                <div style="margin-top: 30px;">
                    <button class="btn btn--primary" onclick="joinChallenge(${challengeId})">Join Challenge</button>
                    <button class="btn btn--secondary" onclick="uploadProof(${challengeId})">📸 Upload Proof</button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
}

function joinChallenge(challengeId) {
    const challenge = appData.challenges.find(c => c.id === challengeId);
    challenge.participants += 1;
    appData.user.points += 10; // Joining bonus
    updateUserPoints();
    showSuccess(`Joined "${challenge.title}" challenge! +10 points`);
    closeModal('challengeModal');
}

function uploadProof(challengeId) {
    showSuccess("Photo/video upload feature coming soon! 📸");
}

// Competition
function loadCompeteSection() {
    setupCompeteTabs();
    loadLeaderboards();
    loadTournaments();
    loadAchievements();
}

function setupCompeteTabs() {
    const tabButtons = document.querySelectorAll('.compete-tabs .tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tab = e.target.dataset.tab;
            
            tabButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            document.querySelectorAll('.compete-content .tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tab).classList.add('active');
        });
    });
}

function loadLeaderboards() {
    const container = document.getElementById('leaderboardContent');
    const leaderboardData = [
        {rank: 1, name: "Arya Sharma", school: "Green Valley High School", points: 2840, avatar: "🌟"},
        {rank: 2, name: "Kiran Patel", school: "Eco Smart Academy", points: 2650, avatar: "🌱"},
        {rank: 3, name: "Maya Singh", school: "Green Valley High School", points: 2430, avatar: "🌍"},
        {rank: 4, name: "Raj Kumar", school: "Nature's Children School", points: 2280, avatar: "🌿"},
        {rank: 5, name: "Priya Mehta", school: "Green Valley High School", points: 2150, avatar: "🦋"}
    ];
    
    container.innerHTML = leaderboardData.map(student => `
        <div class="leaderboard-item">
            <div class="rank ${student.rank === 1 ? 'gold' : student.rank === 2 ? 'silver' : student.rank === 3 ? 'bronze' : ''}">#${student.rank}</div>
            <div class="user-avatar">${student.avatar}</div>
            <div style="flex: 1;">
                <div style="font-weight: 600;">${student.name}</div>
                <div style="color: var(--color-text-secondary); font-size: 14px;">${student.school}</div>
            </div>
            <div style="font-weight: 600; color: var(--color-primary);">${student.points} pts</div>
        </div>
    `).join('');
}

function loadTournaments() {
    const container = document.getElementById('tournamentsList');
    const tournaments = [
        {id: 1, name: "Green Schools Championship", status: "active", participants: 45, prize: "1000", deadline: "5 days"},
        {id: 2, name: "Eco Innovation Contest", status: "upcoming", participants: 23, prize: "2000", deadline: "12 days"},
        {id: 3, name: "Climate Action Challenge", status: "upcoming", participants: 67, prize: "1500", deadline: "20 days"}
    ];
    
    container.innerHTML = tournaments.map(tournament => `
        <div class="challenge-card">
            <div class="card-header">
                <div class="card-icon">🏆</div>
                <div>
                    <div class="card-title">${tournament.name}</div>
                    <div class="status status--${tournament.status === 'active' ? 'success' : 'info'}">${tournament.status}</div>
                </div>
            </div>
            <div class="card-content">
                <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                    <span>👥 ${tournament.participants} participants</span>
                    <span>💰 ₹${tournament.prize} prize</span>
                </div>
                <div style="margin-bottom: 16px;">⏰ ${tournament.deadline} remaining</div>
                <button class="btn btn--primary btn--sm">
                    ${tournament.status === 'active' ? 'Join Now' : 'Register'}
                </button>
            </div>
        </div>
    `).join('');
}

function loadAchievements() {
    const container = document.getElementById('achievementsList');
    const achievements = [
        {title: "First Steps", description: "Complete your first challenge", icon: "👶", unlocked: true},
        {title: "Knowledge Seeker", description: "Complete 5 learning modules", icon: "🎓", unlocked: true},
        {title: "Game Master", description: "Achieve high score in 3 games", icon: "🎮", unlocked: false},
        {title: "Community Hero", description: "Help 10 other students", icon: "👥", unlocked: false},
        {title: "Eco Champion", description: "Reach level 15", icon: "🌟", unlocked: true},
        {title: "Streak Master", description: "Login for 30 consecutive days", icon: "🔥", unlocked: false}
    ];
    
    container.innerHTML = achievements.map(achievement => `
        <div class="badge-item ${!achievement.unlocked ? 'badge-locked' : ''}">
            <div class="badge-icon">${achievement.icon}</div>
            <div class="badge-name">${achievement.title}</div>
            <div class="badge-description">${achievement.description}</div>
            ${achievement.unlocked ? '<div class="status status--success">Unlocked</div>' : '<div class="status status--info">Locked</div>'}
        </div>
    `).join('');
}

// Games
function loadGames() {
    const container = document.getElementById('gamesList');
    
    container.innerHTML = appData.games.map(game => `
        <div class="game-card" onclick="openGame(${game.id})">
            <div class="card-header">
                <div class="card-icon">${game.icon}</div>
                <div>
                    <div class="card-title">${game.title}</div>
                    <div class="difficulty-badge difficulty-${game.difficulty.toLowerCase()}">${game.difficulty}</div>
                </div>
            </div>
            <div class="card-content">
                <div class="card-description">${game.description}</div>
                <div style="display: flex; justify-content: space-between; margin-top: 12px;">
                    <span>🏆 Best: ${game.bestScore}</span>
                    <button class="btn btn--sm btn--primary">Play Now</button>
                </div>
            </div>
        </div>
    `).join('');
}

function openGame(gameId) {
    const game = appData.games.find(g => g.id === gameId);
    const modal = document.getElementById('gameModal');
    const content = document.getElementById('gameContent');
    
    currentGame = gameId;
    
    switch(gameId) {
        case 1: // Waste Segregation
            loadWasteSegregationGame(content, game);
            break;
        case 2: // Carbon Footprint Calculator
            loadCarbonFootprintGame(content, game);
            break;
        case 3: // Virtual Tree Growing
            loadTreeGrowingGame(content, game);
            break;
        case 4: // Environmental Trivia
            loadTriviaGame(content, game);
            break;
                case 5: // Ecosystem Balance
            startEcosystemBalanceGame();
            break;
        case 6: // Water Conservation Puzzle
            startWaterConservationPuzzle();
            break;
        case 7: // Renewable Energy Grid
            startRenewableEnergyGrid();
            break;
        case 8: // Climate Action Strategy
            startClimateActionStrategy();
            break;
        default:
            content.innerHTML = `
                <div class="game-container">
                    <h2>${game.title} ${game.icon}</h2>
                    <p>${game.description}</p>
                    <p style="color: var(--color-warning);">This game is coming soon! 🚧</p>
                    <button class="btn btn--secondary" onclick="closeModal('gameModal')">Close</button>
                </div>
            `;
    }
    
    modal.classList.remove('hidden');
}

function loadWasteSegregationGame(content, game) {
    gameState = {
        score: 0,
        level: 1,
        timeLeft: 60,
        combo: 0,
        items: []
    };
    
    const wasteItems = [
        {type: 'organic', item: '🍌', name: 'Banana Peel'},
        {type: 'organic', item: '🥕', name: 'Carrot'},
        {type: 'recyclable', item: '📰', name: 'Newspaper'},
        {type: 'recyclable', item: '🥤', name: 'Plastic Bottle'},
        {type: 'electronic', item: '🔋', name: 'Battery'},
        {type: 'electronic', item: '💡', name: 'Light Bulb'},
        {type: 'hazardous', item: '🧪', name: 'Chemical'},
        {type: 'hazardous', item: '💊', name: 'Medicine'}
    ];
    
    function generateRandomItem() {
        return wasteItems[Math.floor(Math.random() * wasteItems.length)];
    }
    
    function startGame() {
        gameState.items = [];
        for (let i = 0; i < 8; i++) {
            gameState.items.push({...generateRandomItem(), id: i});
        }
        renderGame();
        startTimer();
    }
    
    function renderGame() {
        content.innerHTML = `
            <div class="game-container">
                <div class="game-header">
                    <div class="game-score">Score: <span id="gameScore">${gameState.score}</span></div>
                    <div class="game-level">Level: <span id="gameLevel">${gameState.level}</span></div>
                    <div class="game-timer">Time: <span id="gameTimer">${gameState.timeLeft}</span>s</div>
                </div>
                
                <h2>${game.title} ${game.icon}</h2>
                <p>Drag items to the correct bins!</p>
                
                <div class="waste-game">
                    <div class="waste-items" id="wasteItems">
                        ${gameState.items.map(item => `
                            <div class="waste-item" data-type="${item.type}" data-id="${item.id}">
                                <div style="font-size: 24px; margin-bottom: 4px;">${item.item}</div>
                                <div style="font-size: 10px;">${item.name}</div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="bins-container">
                        <div class="bin bin-organic" data-type="organic">
                            <span>🗂️ ORGANIC</span>
                        </div>
                        <div class="bin bin-recyclable" data-type="recyclable">
                            <span>♻️ RECYCLABLE</span>
                        </div>
                        <div class="bin bin-electronic" data-type="electronic">
                            <span>🔌 ELECTRONIC</span>
                        </div>
                        <div class="bin bin-hazardous" data-type="hazardous">
                            <span>⚠️ HAZARDOUS</span>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 20px; text-align: center;">
                    <button class="btn btn--secondary" onclick="closeModal('gameModal')">Exit Game</button>
                </div>
            </div>
        `;
        
        setupDragAndDrop();
    }
    
    function setupDragAndDrop() {
        const items = document.querySelectorAll('.waste-item');
        const bins = document.querySelectorAll('.bin');
        
        // Setup drag events for items
        items.forEach(item => {
            item.addEventListener('mousedown', handleMouseDown);
            item.addEventListener('touchstart', handleTouchStart, {passive: false});
        });
        
        // Setup drop zones for bins
        bins.forEach(bin => {
            bin.addEventListener('click', handleBinClick);
        });
        
        // Mouse events
        function handleMouseDown(e) {
            e.preventDefault();
            draggedElement = e.target.closest('.waste-item');
            draggedElement.classList.add('dragging');
            
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }
        
        function handleMouseMove(e) {
            if (draggedElement) {
                draggedElement.style.position = 'fixed';
                draggedElement.style.left = e.clientX - 40 + 'px';
                draggedElement.style.top = e.clientY - 40 + 'px';
                draggedElement.style.zIndex = '1000';
                draggedElement.style.pointerEvents = 'none';
            }
        }
        
        function handleMouseUp(e) {
            if (draggedElement) {
                const elementBelow = document.elementFromPoint(e.clientX, e.clientY);
                const bin = elementBelow?.closest('.bin');
                
                if (bin) {
                    handleDrop(draggedElement, bin);
                }
                
                resetDraggedElement();
            }
            
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }
        
        // Touch events
        function handleTouchStart(e) {
            e.preventDefault();
            draggedElement = e.target.closest('.waste-item');
            draggedElement.classList.add('dragging');
            
            document.addEventListener('touchmove', handleTouchMove, {passive: false});
            document.addEventListener('touchend', handleTouchEnd);
        }
        
        function handleTouchMove(e) {
            e.preventDefault();
            if (draggedElement) {
                const touch = e.touches[0];
                draggedElement.style.position = 'fixed';
                draggedElement.style.left = touch.clientX - 40 + 'px';
                draggedElement.style.top = touch.clientY - 40 + 'px';
                draggedElement.style.zIndex = '1000';
                draggedElement.style.pointerEvents = 'none';
            }
        }
        
        function handleTouchEnd(e) {
            if (draggedElement) {
                const touch = e.changedTouches[0];
                const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
                const bin = elementBelow?.closest('.bin');
                
                if (bin) {
                    handleDrop(draggedElement, bin);
                }
                
                resetDraggedElement();
            }
            
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        }
        
        // Handle bin clicks as alternative to drag/drop
        function handleBinClick(e) {
            if (draggedElement) {
                handleDrop(draggedElement, e.currentTarget);
                resetDraggedElement();
            }
        }
        
        function resetDraggedElement() {
            if (draggedElement) {
                draggedElement.classList.remove('dragging');
                draggedElement.style.position = '';
                draggedElement.style.left = '';
                draggedElement.style.top = '';
                draggedElement.style.zIndex = '';
                draggedElement.style.pointerEvents = '';
                draggedElement = null;
            }
        }
        
        function handleDrop(item, bin) {
            const itemType = item.dataset.type;
            const binType = bin.dataset.type;
            const itemId = item.dataset.id;
            
            if (itemType === binType) {
                // Correct placement
                gameState.score += (10 + gameState.combo * 2);
                gameState.combo++;
                showSuccess(`Correct! +${10 + (gameState.combo - 1) * 2} points`);
                
                // Remove the item
                item.remove();
                
                // Add new item after delay
                if (gameState.timeLeft > 0) {
                    setTimeout(() => {
                        const newItem = generateRandomItem();
                        const wasteItemsContainer = document.getElementById('wasteItems');
                        if (wasteItemsContainer) {
                            const newElement = document.createElement('div');
                            newElement.className = 'waste-item';
                            newElement.dataset.type = newItem.type;
                            newElement.dataset.id = Date.now();
                            newElement.innerHTML = `
                                <div style="font-size: 24px; margin-bottom: 4px;">${newItem.item}</div>
                                <div style="font-size: 10px;">${newItem.name}</div>
                            `;
                            
                            // Add event listeners to new item
                            newElement.addEventListener('mousedown', handleMouseDown);
                            newElement.addEventListener('touchstart', handleTouchStart, {passive: false});
                            
                            wasteItemsContainer.appendChild(newElement);
                        }
                    }, 500);
                }
            } else {
                // Wrong placement
                gameState.combo = 0;
                showSuccess('Wrong bin! Try again.', false);
            }
            
            updateGameScore();
        }
    }
    
    function startTimer() {
        const timer = setInterval(() => {
            gameState.timeLeft--;
            const timerElement = document.getElementById('gameTimer');
            if (timerElement) timerElement.textContent = gameState.timeLeft;
            
            if (gameState.timeLeft <= 0) {
                clearInterval(timer);
                endGame();
            }
        }, 1000);
    }
    
    function updateGameScore() {
        const scoreElement = document.getElementById('gameScore');
        if (scoreElement) scoreElement.textContent = gameState.score;
    }
    
    function endGame() {
        const finalScore = gameState.score;
        appData.user.points += Math.floor(finalScore / 10);
        updateUserPoints();
        
        content.innerHTML = `
            <div class="game-container" style="text-align: center;">
                <h2>Game Over! 🎮</h2>
                <div style="font-size: 48px; margin: 30px 0;">🏆</div>
                <h3>Final Score: ${finalScore}</h3>
                <p>You earned ${Math.floor(finalScore / 10)} points!</p>
                
                ${finalScore > game.bestScore ? '<p style="color: var(--color-success);">🎉 New High Score!</p>' : ''}
                
                <div style="margin-top: 30px;">
                    <button class="btn btn--primary" onclick="loadWasteSegregationGame(document.getElementById('gameContent'), ${JSON.stringify(game).replace(/"/g, '&quot;')})">Play Again</button>
                    <button class="btn btn--secondary" onclick="closeModal('gameModal')">Close</button>
                </div>
            </div>
        `;
        
        if (finalScore > game.bestScore) {
            game.bestScore = finalScore;
        }
    }
    
    startGame();
}

function loadCarbonFootprintGame(content, game) {
    let currentStep = 0;
    let footprintData = {};
    
    const questions = [
        {id: 'transport', question: 'How do you usually travel?', options: [
            {text: 'Walk/Bike', value: 0},
            {text: 'Public Transport', value: 2},
            {text: 'Car (shared)', value: 4},
            {text: 'Car (alone)', value: 8}
        ]},
        {id: 'energy', question: 'Your home energy usage?', options: [
            {text: 'Very Low', value: 1},
            {text: 'Low', value: 3},
            {text: 'Average', value: 5},
            {text: 'High', value: 8}
        ]},
        {id: 'diet', question: 'Your diet type?', options: [
            {text: 'Vegan', value: 1},
            {text: 'Vegetarian', value: 2},
            {text: 'Occasional Meat', value: 4},
            {text: 'Regular Meat', value: 6}
        ]},
        {id: 'waste', question: 'Your waste production?', options: [
            {text: 'Minimal (recycle/compost)', value: 1},
            {text: 'Low', value: 2},
            {text: 'Average', value: 4},
            {text: 'High', value: 6}
        ]}
    ];
    
    function renderQuestion() {
        const question = questions[currentStep];
        content.innerHTML = `
            <div class="game-container">
                <div class="game-header">
                    <h2>${game.title} ${game.icon}</h2>
                    <div>Step ${currentStep + 1} of ${questions.length}</div>
                </div>
                
                <div class="quiz-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${(currentStep / questions.length) * 100}%"></div>
                    </div>
                </div>
                
                <div class="quiz-question">
                    <h3>${question.question}</h3>
                    <div class="quiz-options">
                        ${question.options.map((option, index) => `
                            <div class="quiz-option" onclick="selectFootprintAnswer('${question.id}', ${option.value})">${option.text}</div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
    
    window.selectFootprintAnswer = function(questionId, value) {
        footprintData[questionId] = value;
        currentStep++;
        
        if (currentStep < questions.length) {
            renderQuestion();
        } else {
            showResults();
        }
    };
    
    function showResults() {
        const totalFootprint = Object.values(footprintData).reduce((sum, val) => sum + val, 0);
        const maxPossible = questions.reduce((sum, q) => sum + Math.max(...q.options.map(o => o.value)), 0);
        const percentage = Math.round((totalFootprint / maxPossible) * 100);
        
        let rating, message, color;
        if (percentage < 30) {
            rating = "Excellent";
            message = "You have a very low carbon footprint! 🌱";
            color = "var(--color-success)";
        } else if (percentage < 50) {
            rating = "Good";
            message = "Your carbon footprint is below average! 🌿";
            color = "var(--color-primary)";
        } else if (percentage < 70) {
            rating = "Average";
            message = "There's room for improvement! 🌍";
            color = "var(--color-warning)";
        } else {
            rating = "High";
            message = "Consider making changes to reduce your impact! ⚠️";
            color = "var(--color-error)";
        }
        
        content.innerHTML = `
            <div class="game-container" style="text-align: center;">
                <h2>Your Carbon Footprint Results</h2>
                
                <div style="font-size: 64px; margin: 30px 0;">
                    ${percentage < 30 ? '🌱' : percentage < 50 ? '🌿' : percentage < 70 ? '🌍' : '⚠️'}
                </div>
                
                <div style="background: ${color}; color: white; padding: 20px; border-radius: 12px; margin: 20px 0;">
                    <h3>${rating} - ${totalFootprint}/${maxPossible} points</h3>
                    <p>${message}</p>
                </div>
                
                <div style="background: var(--color-bg-1); padding: 20px; border-radius: 12px; margin: 20px 0; text-align: left;">
                    <h4>💡 Tips to Reduce Your Footprint:</h4>
                    <ul>
                        <li>Use public transport or bike more often</li>
                        <li>Switch to renewable energy at home</li>
                        <li>Eat more plant-based meals</li>
                        <li>Reduce, reuse, and recycle waste</li>
                        <li>Support sustainable brands and products</li>
                    </ul>
                </div>
                
                <div style="margin-top: 30px;">
                    <button class="btn btn--primary" onclick="loadCarbonFootprintGame(document.getElementById('gameContent'), ${JSON.stringify(game).replace(/"/g, '&quot;')})">Take Again</button>
                    <button class="btn btn--secondary" onclick="closeModal('gameModal')">Close</button>
                </div>
            </div>
        `;
        
        // Award points based on low footprint
        const pointsEarned = Math.max(10, 50 - totalFootprint);
        appData.user.points += pointsEarned;
        updateUserPoints();
        showSuccess(`Assessment complete! +${pointsEarned} points`);
    }
    
    renderQuestion();
}

function loadTreeGrowingGame(content, game) {
    let treeStage = 0;
    let waterLevel = 50;
    let sunlight = 50;
    let nutrients = 50;
    
    const treeStages = ['🌱', '🌿', '🌳', '🌲', '🎄'];
    const stageNames = ['Seed', 'Sprout', 'Sapling', 'Young Tree', 'Mature Tree'];
    
    function renderTree() {
        content.innerHTML = `
            <div class="game-container">
                <div class="game-header">
                    <h2>${game.title} ${game.icon}</h2>
                    <div>Stage: ${stageNames[treeStage]}</div>
                </div>
                
                <div style="text-align: center; margin: 40px 0;">
                    <div style="font-size: 120px;">${treeStages[treeStage]}</div>
                    <h3>${stageNames[treeStage]}</h3>
                </div>
                
                <div class="stats-grid" style="grid-template-columns: 1fr 1fr 1fr; margin: 30px 0;">
                    <div class="stat-card">
                        <div class="stat-icon">💧</div>
                        <div class="stat-content">
                            <h4>Water</h4>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${waterLevel}%; background: #3b82f6;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">☀️</div>
                        <div class="stat-content">
                            <h4>Sunlight</h4>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${sunlight}%; background: #f59e0b;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon">🌱</div>
                        <div class="stat-content">
                            <h4>Nutrients</h4>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${nutrients}%; background: #22c55e;"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="display: flex; gap: 12px; justify-content: center; margin: 30px 0;">
                    <button class="btn btn--primary" onclick="waterTree()">💧 Water Tree</button>
                    <button class="btn btn--primary" onclick="addSunlight()">☀️ Add Sunlight</button>
                    <button class="btn btn--primary" onclick="addFertilizer()">🌱 Add Fertilizer</button>
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                    <button class="btn btn--secondary" onclick="closeModal('gameModal')">Save & Exit</button>
                </div>
            </div>
        `;
    }
    
    window.waterTree = function() {
        waterLevel = Math.min(100, waterLevel + 20);
        checkGrowth();
        renderTree();
        showSuccess('Tree watered! 💧');
    };
    
    window.addSunlight = function() {
        sunlight = Math.min(100, sunlight + 15);
        checkGrowth();
        renderTree();
        showSuccess('Sunlight increased! ☀️');
    };
    
    window.addFertilizer = function() {
        nutrients = Math.min(100, nutrients + 25);
        checkGrowth();
        renderTree();
        showSuccess('Nutrients added! 🌱');
    };
    
    function checkGrowth() {
        const avgCare = (waterLevel + sunlight + nutrients) / 3;
        const requiredCare = (treeStage + 1) * 20;
        
        if (avgCare >= requiredCare && treeStage < treeStages.length - 1) {
            treeStage++;
            const pointsEarned = treeStage * 10;
            appData.user.points += pointsEarned;
            updateUserPoints();
            showSuccess(`Tree grew to ${stageNames[treeStage]}! +${pointsEarned} points 🎉`);
        }
        
        // Gradual decrease over time
        waterLevel = Math.max(0, waterLevel - 2);
        sunlight = Math.max(0, sunlight - 1);
        nutrients = Math.max(0, nutrients - 1);
    }
    
    // Simulate time passage
    setInterval(checkGrowth, 3000);
    
    renderTree();
}

function loadTriviaGame(content, game) {
    const triviaQuestions = [
        {question: "What percentage of Earth's water is freshwater?", options: ["3%", "10%", "25%", "50%"], correct: 0},
        {question: "Which renewable energy source is most widely used?", options: ["Solar", "Wind", "Hydroelectric", "Geothermal"], correct: 2},
        {question: "How long does it take for a plastic bottle to decompose?", options: ["10 years", "50 years", "200 years", "450 years"], correct: 3},
        {question: "What is the most abundant greenhouse gas?", options: ["CO2", "Methane", "Water vapor", "Ozone"], correct: 2},
        {question: "Which country produces the most solar energy?", options: ["USA", "Germany", "China", "Japan"], correct: 2}
    ];
    
    let currentQuestion = 0;
    let score = 0;
    let timeLeft = 15;
    let timer;
    
    function startTrivia() {
        renderQuestion();
        startQuestionTimer();
    }
    
    function renderQuestion() {
        const question = triviaQuestions[currentQuestion];
        content.innerHTML = `
            <div class="game-container">
                <div class="game-header">
                    <div class="game-score">Score: ${score}</div>
                    <div>Question ${currentQuestion + 1}/${triviaQuestions.length}</div>
                    <div class="game-timer">Time: <span id="triviaTimer">${timeLeft}</span>s</div>
                </div>
                
                <div class="quiz-question">
                    <h3>${question.question}</h3>
                    <div class="quiz-options">
                        ${question.options.map((option, index) => `
                            <div class="quiz-option" onclick="answerTrivia(${index})">${option}</div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
    
    function startQuestionTimer() {
        timeLeft = 15;
        timer = setInterval(() => {
            timeLeft--;
            const timerElement = document.getElementById('triviaTimer');
            if (timerElement) timerElement.textContent = timeLeft;
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                answerTrivia(-1); // Time's up
            }
        }, 1000);
    }
    
    window.answerTrivia = function(selectedIndex) {
        clearInterval(timer);
        const question = triviaQuestions[currentQuestion];
        const options = document.querySelectorAll('.quiz-option');
        
        options.forEach((option, index) => {
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === selectedIndex && index !== question.correct) {
                option.classList.add('incorrect');
            }
        });
        
        if (selectedIndex === question.correct) {
            score += timeLeft * 10; // More points for faster answers
            showSuccess(`Correct! +${timeLeft * 10} points`);
        } else {
            showSuccess('Wrong answer!', false);
        }
        
        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < triviaQuestions.length) {
                renderQuestion();
                startQuestionTimer();
            } else {
                endTrivia();
            }
        }, 2000);
    };
    
    function endTrivia() {
        appData.user.points += Math.floor(score / 10);
        updateUserPoints();
        
        content.innerHTML = `
            <div class="game-container" style="text-align: center;">
                <h2>Trivia Complete! 🧠</h2>
                <div style="font-size: 64px; margin: 30px 0;">🏆</div>
                <h3>Final Score: ${score}</h3>
                <p>You earned ${Math.floor(score / 10)} points!</p>
                <p>Correct answers: ${score > 0 ? Math.ceil(currentQuestion * score / (triviaQuestions.length * 100)) : 0}/${triviaQuestions.length}</p>
                
                <div style="margin-top: 30px;">
                    <button class="btn btn--primary" onclick="loadTriviaGame(document.getElementById('gameContent'), ${JSON.stringify(game).replace(/"/g, '&quot;')})">Play Again</button>
                    <button class="btn btn--secondary" onclick="closeModal('gameModal')">Close</button>
                </div>
            </div>
        `;
        
        if (score > game.bestScore) {
            game.bestScore = score;
        }
    }
    
    startTrivia();
}

// Profile
function loadProfile() {
    setupProfileTabs();
    loadProfileStats();
    loadProfileBadges();
    loadJournal();
    loadGoals();
    loadFriends();
}

function setupProfileTabs() {
    const tabButtons = document.querySelectorAll('.profile-tabs .tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tab = e.target.dataset.tab;
            
            tabButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            document.querySelectorAll('.profile-content .tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tab).classList.add('active');
        });
    });
}

function loadProfileStats() {
    // Create chart
    const ctx = document.getElementById('impactChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Trees Planted', 'Waste Reduced', 'Energy Saved', 'Water Conserved'],
            datasets: [{
                data: [8, 23, 15, 12],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
    
    // Detailed stats
    document.getElementById('detailedStats').innerHTML = `
        <div class="stats-grid" style="grid-template-columns: 1fr 1fr; margin-top: 20px;">
            <div class="stat-card">
                <div class="stat-content">
                    <h4>Total Points</h4>
                    <div class="stat-number">${appData.user.points}</div>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-content">
                    <h4>Current Level</h4>
                    <div class="stat-number">${appData.user.level}</div>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-content">
                    <h4>Badges Earned</h4>
                    <div class="stat-number">${appData.badges.filter(b => b.earned).length}</div>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-content">
                    <h4>Challenges Completed</h4>
                    <div class="stat-number">12</div>
                </div>
            </div>
        </div>
    `;
}

function loadProfileBadges() {
    const container = document.getElementById('badgesGrid');
    container.innerHTML = appData.badges.map(badge => `
        <div class="badge-item ${!badge.earned ? 'badge-locked' : ''}">
            <div class="badge-icon">${badge.icon}</div>
            <div class="badge-name">${badge.name}</div>
            <div class="badge-description">${badge.description}</div>
        </div>
    `).join('');
}

function loadJournal() {
    const entries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
    const container = document.getElementById('journalEntries');
    
    container.innerHTML = entries.map(entry => `
        <div class="journal-entry">
            <div class="journal-date">${entry.date}</div>
            <div>${entry.content}</div>
        </div>
    `).join('');
}

function addJournalEntry() {
    const textarea = document.getElementById('journalEntry');
    const content = textarea.value.trim();
    
    if (!content) return;
    
    const entries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
    entries.unshift({
        content: content,
        date: new Date().toLocaleDateString()
    });
    
    localStorage.setItem('journalEntries', JSON.stringify(entries));
    textarea.value = '';
    loadJournal();
    showSuccess('Journal entry added! 📝');
}

function loadGoals() {
    const goals = [
        {name: 'Plant 10 trees this year', current: 8, target: 10},
        {name: 'Reduce waste by 50%', current: 35, target: 50},
        {name: 'Complete all learning modules', current: 7, target: 12},
        {name: 'Earn 5000 points', current: 2840, target: 5000}
    ];
    
    document.getElementById('goalsSection').innerHTML = goals.map(goal => `
        <div class="goal-item">
            <div>
                <strong>${goal.name}</strong>
                <div class="goal-progress">
                    <div class="goal-progress-text">${goal.current} / ${goal.target}</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${(goal.current/goal.target)*100}%"></div>
                    </div>
                </div>
            </div>
            <div class="status ${goal.current >= goal.target ? 'status--success' : 'status--info'}">
                ${goal.current >= goal.target ? '✅ Complete' : '🎯 In Progress'}
            </div>
        </div>
    `).join('');
}

function loadFriends() {
    const friends = [
        {name: 'Kiran Patel', avatar: '🌱', points: 2650, status: 'online'},
        {name: 'Maya Singh', avatar: '🌍', points: 2430, status: 'offline'},
        {name: 'Raj Kumar', avatar: '🌿', points: 2280, status: 'online'}
    ];
    
    document.getElementById('friendsSection').innerHTML = `
        <div style="margin-bottom: 20px;">
            <button class="btn btn--primary">Add Friends</button>
        </div>
        ${friends.map(friend => `
            <div class="leaderboard-item">
                <div class="user-avatar">${friend.avatar}</div>
                <div style="flex: 1;">
                    <div style="font-weight: 600;">${friend.name}</div>
                    <div style="color: var(--color-text-secondary);">${friend.points} points</div>
                </div>
                <div class="status ${friend.status === 'online' ? 'status--success' : 'status--info'}">
                    ${friend.status}
                </div>
            </div>
        `).join('')}
    `;
}

// Utility Functions
function setupModals() {
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal-close');
    
    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            modal.classList.add('hidden');
        });
    });
    
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    });
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

function updateUserPoints() {
    document.getElementById('userPoints').textContent = appData.user.points;
}

function showSuccess(message, isSuccess = true) {
    const successMessage = document.getElementById('successMessage');
    const successText = successMessage.querySelector('.success-text');
    const successIcon = successMessage.querySelector('.success-icon');
    
    successText.textContent = message;
    successIcon.textContent = isSuccess ? '🎉' : '⚠️';
    successMessage.style.backgroundColor = isSuccess ? 'var(--color-success)' : 'var(--color-warning)';
    
    successMessage.classList.remove('hidden');
    
    setTimeout(() => {
        successMessage.classList.add('hidden');
    }, 3000);
}

// Initialize app when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// =================== ECOSYSTEM BALANCE GAME ===================
function startEcosystemBalanceGame() {
    currentGame = 5;
    gameState = {
        level: 1,
        score: 0,
        timeRemaining: 120,
        species: {
            plants: { count: 100, optimal: 100, icon: '🌱' },
            herbivores: { count: 50, optimal: 50, icon: '🐰' },
            predators: { count: 10, optimal: 10, icon: '🐺' }
        },
        balanceLevel: 100,
        isStable: true,
        gameActive: true
    };

    const gameContainer = document.getElementById('gameContent');
    gameContainer.innerHTML = `
        <div class="game-header">
            <div class="game-score">Score: <span id="ecosystemScore">0</span></div>
            <div class="game-level">Level: <span id="ecosystemLevel">1</span></div>
            <div class="game-timer">Time: <span id="ecosystemTimer">120</span>s</div>
            <button class="btn btn--secondary" onclick="resetEcosystem()">Reset</button>
        </div>
        <div class="ecosystem-game">
            <div class="ecosystem-grid" id="ecosystemGrid">
                <!-- Species cards will be generated here -->
            </div>
            <div class="ecosystem-stats">
                <h4>Ecosystem Health</h4>
                <div class="balance-meter">
                    <div class="balance-bar">
                        <div class="balance-fill healthy" id="balanceFill" style="width: 100%"></div>
                    </div>
                    <div style="text-align: center; margin-top: var(--space-8);">
                        <span id="balancePercentage">100</span>% Balanced
                    </div>
                </div>
                <div id="ecosystemFeedback" class="ecosystem-feedback healthy">
                    🌿 Perfect balance! All species are thriving in harmony.
                </div>
                <div style="margin-top: var(--space-16);">
                    <h5>Population Goals:</h5>
                    <p>🌱 Plants: Stay above 50</p>
                    <p>🐰 Herbivores: Keep balanced with plants</p>
                    <p>🐺 Predators: Control herbivore population</p>
                </div>
            </div>
        </div>
    `;

    renderSpeciesCards();
    startEcosystemTimer();
    updateEcosystemBalance();
}

function renderSpeciesCards() {
    const grid = document.getElementById('ecosystemGrid');
    grid.innerHTML = '';

    Object.entries(gameState.species).forEach(([speciesName, data]) => {
        const card = document.createElement('div');
        card.className = 'species-card';

        card.innerHTML = `
            <div class="species-icon">${data.icon}</div>
            <div class="species-info">
                <h4>${speciesName.charAt(0).toUpperCase() + speciesName.slice(1)}</h4>
                <div class="species-controls">
                    <button class="population-btn" onclick="changePopulation('${speciesName}', -5)">-</button>
                    <div class="population-display" id="${speciesName}Count">${data.count}</div>
                    <button class="population-btn" onclick="changePopulation('${speciesName}', 5)">+</button>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

function changePopulation(speciesName, change) {
    if (!gameState.gameActive) return;

    const species = gameState.species[speciesName];
    const newCount = Math.max(0, species.count + change);

    // Limit maximum populations
    const maxLimits = { plants: 200, herbivores: 100, predators: 30 };
    species.count = Math.min(newCount, maxLimits[speciesName]);

    document.getElementById(`${speciesName}Count`).textContent = species.count;
    updateEcosystemBalance();
}

function updateEcosystemBalance() {
    const { plants, herbivores, predators } = gameState.species;

    let balanceScore = 100;
    let feedback = '';
    let feedbackClass = 'healthy';

    const plantHerbivoreRatio = plants.count / (herbivores.count || 1);
    if (plantHerbivoreRatio < 1.5) {
        balanceScore -= 30;
        feedback = '⚠️ Not enough plants to support herbivores!';
        feedbackClass = 'critical';
    } else if (plantHerbivoreRatio > 4) {
        balanceScore -= 10;
        feedback = '🌱 Too many plants, ecosystem becoming unbalanced.';
        feedbackClass = 'warning';
    }

    const herbivorePredatorRatio = herbivores.count / (predators.count || 1);
    if (herbivorePredatorRatio > 8) {
        balanceScore -= 25;
        feedback = '🐰 Too many herbivores! Need more predators.';
        feedbackClass = 'critical';
    } else if (herbivorePredatorRatio < 3 && predators.count > 0) {
        balanceScore -= 15;
        feedback = '🐺 Too many predators, herbivores struggling.';
        feedbackClass = 'warning';
    }

    if (plants.count === 0) {
        balanceScore = 0;
        feedback = '💀 Ecosystem collapse! No plants remain.';
        feedbackClass = 'critical';
    } else if (herbivores.count === 0 && predators.count > 0) {
        balanceScore -= 40;
        feedback = '🐺 Predators have no food source!';
        feedbackClass = 'critical';
    }

    balanceScore = Math.max(0, Math.min(100, balanceScore));
    gameState.balanceLevel = balanceScore;

    const balanceFill = document.getElementById('balanceFill');
    const balancePercentage = document.getElementById('balancePercentage');
    const ecosystemFeedback = document.getElementById('ecosystemFeedback');

    if (balanceFill) {
        balanceFill.style.width = `${balanceScore}%`;
        balanceFill.className = 'balance-fill';
        if (balanceScore >= 70) {
            balanceFill.classList.add('healthy');
            if (!feedback) {
                feedback = '🌿 Excellent balance! Ecosystem thriving.';
                feedbackClass = 'healthy';
            }
        } else if (balanceScore >= 40) {
            balanceFill.classList.add('warning');
        } else {
            balanceFill.classList.add('critical');
        }
    }

    if (balancePercentage) balancePercentage.textContent = balanceScore;
    if (ecosystemFeedback) {
        ecosystemFeedback.textContent = feedback;
        ecosystemFeedback.className = `ecosystem-feedback ${feedbackClass}`;
    }

    if (gameState.gameActive) {
        gameState.score += Math.floor(balanceScore / 10);
        const scoreElement = document.getElementById('ecosystemScore');
        if (scoreElement) scoreElement.textContent = gameState.score;
    }
}

function startEcosystemTimer() {
    const timer = setInterval(() => {
        if (!gameState.gameActive) {
            clearInterval(timer);
            return;
        }

        gameState.timeRemaining--;
        const timerElement = document.getElementById('ecosystemTimer');
        if (timerElement) timerElement.textContent = gameState.timeRemaining;

        simulateNaturalChanges();

        if (gameState.timeRemaining <= 0) {
            clearInterval(timer);
            endEcosystemGame();
        }
    }, 1000);
}

function simulateNaturalChanges() {
    const { plants, herbivores, predators } = gameState.species;

    const plantGrowth = Math.floor(plants.count * 0.02) - Math.floor(herbivores.count * 0.1);
    plants.count = Math.max(0, Math.min(200, plants.count + plantGrowth));

    const herbivoreChange = Math.floor(plants.count * 0.01) - Math.floor(predators.count * 0.3) - 1;
    herbivores.count = Math.max(0, Math.min(100, herbivores.count + herbivoreChange));

    const predatorChange = Math.floor(herbivores.count * 0.02) - 1;
    predators.count = Math.max(0, Math.min(30, predators.count + predatorChange));

    Object.keys(gameState.species).forEach(speciesName => {
        const element = document.getElementById(`${speciesName}Count`);
        if (element) element.textContent = gameState.species[speciesName].count;
    });

    updateEcosystemBalance();
}

function endEcosystemGame() {
    gameState.gameActive = false;

    const finalScore = gameState.score + (gameState.balanceLevel * 5);
    appData.user.points += Math.floor(finalScore / 10);
    updateUserPoints();

    const message = gameState.balanceLevel >= 70 ? '🏆 Excellent ecosystem management!' : 
                   gameState.balanceLevel >= 40 ? '👍 Good effort, keep practicing!' : 
                   '📚 Study ecosystem balance and try again!';

    showSuccess(`Ecosystem game complete! Final score: ${finalScore}. ${message}`);

    setTimeout(() => closeModal('gameModal'), 3000);
}

function resetEcosystem() {
    gameState.species = {
        plants: { count: 100, optimal: 100, icon: '🌱' },
        herbivores: { count: 50, optimal: 50, icon: '🐰' },
        predators: { count: 10, optimal: 10, icon: '🐺' }
    };
    gameState.balanceLevel = 100;
    gameState.timeRemaining = 120;
    gameState.score = 0;
    gameState.gameActive = true;

    renderSpeciesCards();
    updateEcosystemBalance();
    startEcosystemTimer();
}

// =================== WATER CONSERVATION PUZZLE ===================
function startWaterConservationPuzzle() {
    currentGame = 6;
    gameState = {
        level: 1,
        score: 0,
        movesUsed: 0,
        maxMoves: 15,
        waterFlowing: false,
        gridSize: { rows: 6, cols: 8 },
        pipes: {},
        sourcePos: { row: 2, col: 0 },
        destinationPos: { row: 3, col: 7 }
    };

    const gameContainer = document.getElementById('gameContent');
    gameContainer.innerHTML = `
        <div class="game-header">
            <div class="game-score">Score: <span id="puzzleScore">0</span></div>
            <div class="game-level">Level: <span id="puzzleLevel">1</span></div>
            <div class="game-moves">Moves: <span id="puzzleMoves">0</span>/<span id="puzzleMaxMoves">15</span></div>
            <button class="btn btn--secondary" onclick="resetWaterPuzzle()">Reset</button>
        </div>
        <div class="water-puzzle">
            <div class="puzzle-controls">
                <h4>Pipe Pieces</h4>
                <div class="pipe-pieces" id="pipePieces">
                    <div class="pipe-piece" draggable="true" data-type="straight-h">─</div>
                    <div class="pipe-piece" draggable="true" data-type="straight-v">│</div>
                    <div class="pipe-piece" draggable="true" data-type="corner-ne">┌</div>
                    <div class="pipe-piece" draggable="true" data-type="corner-nw">┐</div>
                    <div class="pipe-piece" draggable="true" data-type="corner-se">└</div>
                    <div class="pipe-piece" draggable="true" data-type="corner-sw">┘</div>
                </div>
                <div style="margin-top: var(--space-16);">
                    <p><strong>Goal:</strong> Connect the water source (💧) to the tank (🏪) using pipes!</p>
                    <p>Click pipes to place them on the grid.</p>
                </div>
            </div>
            <div class="pipe-grid" id="pipeGrid"></div>
        </div>
    `;

    initializePipeGrid();
    setupPipeSelection();
}

function initializePipeGrid() {
    const grid = document.getElementById('pipeGrid');
    if (!grid) return;

    grid.innerHTML = '';

    for (let row = 0; row < gameState.gridSize.rows; row++) {
        for (let col = 0; col < gameState.gridSize.cols; col++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            cell.dataset.row = row;
            cell.dataset.col = col;

            if (row === gameState.sourcePos.row && col === gameState.sourcePos.col) {
                cell.className += ' source';
                cell.innerHTML = '💧';
            } else if (row === gameState.destinationPos.row && col === gameState.destinationPos.col) {
                cell.className += ' destination';
                cell.innerHTML = '🏪';
            } else {
                cell.className += ' drop-zone';
                cell.addEventListener('click', () => placePipeOnGrid(row, col));
            }

            grid.appendChild(cell);
        }
    }
}

let selectedPipeType = null;

function setupPipeSelection() {
    const pipePieces = document.querySelectorAll('.pipe-piece');
    pipePieces.forEach(piece => {
        piece.addEventListener('click', () => {
            pipePieces.forEach(p => p.classList.remove('selected'));
            piece.classList.add('selected');
            selectedPipeType = {
                type: piece.dataset.type,
                symbol: piece.textContent
            };
        });
    });
}

function placePipeOnGrid(row, col) {
    if (!selectedPipeType) {
        showSuccess('Please select a pipe piece first!', false);
        return;
    }

    const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    if (!cell || !cell.classList.contains('drop-zone')) return;

    if (cell.dataset.pipeType) {
        // Remove existing pipe
        cell.innerHTML = '';
        delete cell.dataset.pipeType;
        delete gameState.pipes[`${row}-${col}`];
    }

    // Place new pipe
    cell.innerHTML = selectedPipeType.symbol;
    cell.dataset.pipeType = selectedPipeType.type;
    gameState.pipes[`${row}-${col}`] = selectedPipeType.type;

    gameState.movesUsed++;
    const movesElement = document.getElementById('puzzleMoves');
    if (movesElement) movesElement.textContent = gameState.movesUsed;

    checkWaterFlow();
}

function checkWaterFlow() {
    const visited = new Set();
    const queue = [{ row: gameState.sourcePos.row, col: gameState.sourcePos.col }];

    while (queue.length > 0) {
        const current = queue.shift();
        const key = `${current.row}-${current.col}`;

        if (visited.has(key)) continue;
        visited.add(key);

        if (current.row === gameState.destinationPos.row && current.col === gameState.destinationPos.col) {
            completePuzzle();
            return true;
        }

        const directions = [
            { row: -1, col: 0, name: 'north' },
            { row: 1, col: 0, name: 'south' },
            { row: 0, col: -1, name: 'west' },
            { row: 0, col: 1, name: 'east' }
        ];

        directions.forEach(dir => {
            const newRow = current.row + dir.row;
            const newCol = current.col + dir.col;
            const newKey = `${newRow}-${newCol}`;

            if (newRow >= 0 && newRow < gameState.gridSize.rows && 
                newCol >= 0 && newCol < gameState.gridSize.cols && 
                !visited.has(newKey)) {

                if (canConnect(current.row, current.col, newRow, newCol, dir.name)) {
                    queue.push({ row: newRow, col: newCol });
                }
            }
        });
    }

    return false;
}

function canConnect(fromRow, fromCol, toRow, toCol, direction) {
    const fromKey = `${fromRow}-${fromCol}`;
    const toKey = `${toRow}-${toCol}`;
    const fromPipe = gameState.pipes[fromKey];
    const toPipe = gameState.pipes[toKey];

    if (fromRow === gameState.sourcePos.row && fromCol === gameState.sourcePos.col) {
        return toPipe && pipeHasConnection(toPipe, getOppositeDirection(direction));
    }

    if (toRow === gameState.destinationPos.row && toCol === gameState.destinationPos.col) {
        return fromPipe && pipeHasConnection(fromPipe, direction);
    }

    return fromPipe && toPipe && 
           pipeHasConnection(fromPipe, direction) && 
           pipeHasConnection(toPipe, getOppositeDirection(direction));
}

function pipeHasConnection(pipeType, direction) {
    const connections = {
        'straight-h': ['east', 'west'],
        'straight-v': ['north', 'south'],
        'corner-ne': ['north', 'east'],
        'corner-nw': ['north', 'west'],
        'corner-se': ['south', 'east'],
        'corner-sw': ['south', 'west']
    };

    return connections[pipeType] && connections[pipeType].includes(direction);
}

function getOppositeDirection(direction) {
    const opposites = {
        'north': 'south',
        'south': 'north',
        'east': 'west',
        'west': 'east'
    };
    return opposites[direction];
}

function completePuzzle() {
    gameState.waterFlowing = true;

    const efficiency = Math.max(0, (gameState.maxMoves - gameState.movesUsed) / gameState.maxMoves);
    const levelBonus = gameState.level * 100;
    const efficiencyBonus = Math.round(efficiency * 500);
    gameState.score = levelBonus + efficiencyBonus;

    const scoreElement = document.getElementById('puzzleScore');
    if (scoreElement) scoreElement.textContent = gameState.score;

    appData.user.points += Math.floor(gameState.score / 10);
    updateUserPoints();

    showSuccess(`🎉 Puzzle completed! Score: ${gameState.score}. Efficiency: ${Math.round(efficiency * 100)}%`);

    setTimeout(() => closeModal('gameModal'), 3000);
}

function resetWaterPuzzle() {
    gameState.movesUsed = 0;
    gameState.pipes = {};
    gameState.waterFlowing = false;
    gameState.score = 0;

    const movesElement = document.getElementById('puzzleMoves');
    if (movesElement) movesElement.textContent = '0';

    const scoreElement = document.getElementById('puzzleScore');
    if (scoreElement) scoreElement.textContent = '0';

    initializePipeGrid();
    setupPipeSelection();
}

// =================== RENEWABLE ENERGY GRID ===================
function startRenewableEnergyGrid() {
    currentGame = 7;
    gameState = {
        level: 1,
        score: 0,
        budget: 1000,
        powerDemand: 0,
        powerSupply: 0,
        gridSize: 6,
        buildings: [],
        energySources: [],
        selectedSource: null,
        efficiency: 0
    };

    const gameContainer = document.getElementById('gameContent');
    gameContainer.innerHTML = `
        <div class="game-header">
            <div class="game-score">Score: <span id="energyScore">0</span></div>
            <div class="game-level">Budget: $<span id="energyBudget">1000</span></div>
            <div class="game-efficiency">Efficiency: <span id="energyEfficiency">0</span>%</div>
            <button class="btn btn--secondary" onclick="resetEnergyGrid()">Reset</button>
        </div>
        <div class="energy-grid">
            <div class="energy-sources">
                <h4>Energy Sources</h4>
                <div class="energy-source" onclick="selectEnergySource('solar')">☀️ Solar ($100)</div>
                <div class="energy-source" onclick="selectEnergySource('wind')">💨 Wind ($150)</div>
                <div class="energy-source" onclick="selectEnergySource('hydro')">💧 Hydro ($200)</div>
                <div style="margin-top: var(--space-16);">
                    <p><strong>Selected:</strong></p>
                    <p id="selectedSource">None</p>
                </div>
            </div>
            <div class="city-grid" id="cityGrid"></div>
            <div class="energy-stats">
                <h4>Grid Status</h4>
                <div class="stat-item">
                    <span>Power Supply:</span>
                    <span><span id="powerSupply">0</span> MW</span>
                </div>
                <div class="stat-item">
                    <span>Power Demand:</span>
                    <span><span id="powerDemand">0</span> MW</span>
                </div>
                <div class="stat-item">
                    <span>Buildings Powered:</span>
                    <span><span id="buildingsPowered">0</span>/<span id="totalBuildings">0</span></span>
                </div>
                <div style="margin-top: var(--space-16);">
                    <h5>Source Specs:</h5>
                    <p>☀️ Solar: 50MW, $100</p>
                    <p>💨 Wind: 75MW, $150</p>
                    <p>💧 Hydro: 100MW, $200</p>
                </div>
            </div>
        </div>
    `;

    initializeEnergyGrid();
    generateBuildings();
    updateGridStats();
}

function initializeEnergyGrid() {
    const grid = document.getElementById('cityGrid');
    if (!grid) return;

    grid.innerHTML = '';

    for (let row = 0; row < gameState.gridSize; row++) {
        for (let col = 0; col < gameState.gridSize; col++) {
            const cell = document.createElement('div');
            cell.className = 'grid-cell';
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.addEventListener('click', () => placeEnergySource(row, col));
            grid.appendChild(cell);
        }
    }
}

function generateBuildings() {
    const buildingCount = 8 + Math.floor(Math.random() * 4);
    gameState.buildings = [];

    for (let i = 0; i < buildingCount; i++) {
        let row, col;
        do {
            row = Math.floor(Math.random() * gameState.gridSize);
            col = Math.floor(Math.random() * gameState.gridSize);
        } while (gameState.buildings.some(b => b.row === row && b.col === col));

        const building = {
            row,
            col,
            demand: 25 + Math.floor(Math.random() * 50),
            powered: false
        };

        gameState.buildings.push(building);

        const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        if (cell) {
            cell.className += ' building';
            cell.innerHTML = '🏢';
            cell.title = `Building - ${building.demand}MW demand`;
        }
    }

    gameState.powerDemand = gameState.buildings.reduce((sum, b) => sum + b.demand, 0);
}

function selectEnergySource(sourceType) {
    const costs = { solar: 100, wind: 150, hydro: 200 };

    if (gameState.budget >= costs[sourceType]) {
        gameState.selectedSource = {
            type: sourceType,
            cost: costs[sourceType],
            power: { solar: 50, wind: 75, hydro: 100 }[sourceType],
            icon: { solar: '☀️', wind: '💨', hydro: '💧' }[sourceType]
        };

        const selectedElement = document.getElementById('selectedSource');
        if (selectedElement) {
            selectedElement.innerHTML = 
                `${gameState.selectedSource.icon} ${sourceType.charAt(0).toUpperCase() + sourceType.slice(1)}<br>
                 $${gameState.selectedSource.cost} - ${gameState.selectedSource.power}MW`;
        }
    } else {
        showSuccess('Insufficient budget!', false);
    }
}

function placeEnergySource(row, col) {
    if (!gameState.selectedSource) {
        showSuccess('Please select an energy source first!', false);
        return;
    }

    const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

    if (!cell || cell.classList.contains('building') || cell.classList.contains('energy-source')) {
        showSuccess('Cannot place energy source here!', false);
        return;
    }

    gameState.budget -= gameState.selectedSource.cost;
    gameState.energySources.push({
        row,
        col,
        ...gameState.selectedSource
    });

    cell.className += ' energy-source';
    cell.innerHTML = gameState.selectedSource.icon;
    cell.title = `${gameState.selectedSource.type} - ${gameState.selectedSource.power}MW`;

    updateGridStats();
    calculatePowerDistribution();
    gameState.selectedSource = null;

    const selectedElement = document.getElementById('selectedSource');
    if (selectedElement) selectedElement.innerHTML = 'None';
}

function calculatePowerDistribution() {
    gameState.buildings.forEach(building => building.powered = false);
    gameState.powerSupply = gameState.energySources.reduce((sum, source) => sum + source.power, 0);

    let remainingPower = gameState.powerSupply;

    gameState.buildings.forEach(building => {
        if (remainingPower >= building.demand) {
            let minDistance = Infinity;
            gameState.energySources.forEach(source => {
                const distance = Math.abs(building.row - source.row) + Math.abs(building.col - source.col);
                minDistance = Math.min(minDistance, distance);
            });

            if (minDistance <= 4) {
                building.powered = true;
                remainingPower -= building.demand;

                const cell = document.querySelector(`[data-row="${building.row}"][data-col="${building.col}"]`);
                if (cell) cell.classList.add('powered');
            }
        }
    });

    updateGridStats();
    checkGameCompletion();
}

function updateGridStats() {
    const budgetElement = document.getElementById('energyBudget');
    if (budgetElement) budgetElement.textContent = gameState.budget;

    const supplyElement = document.getElementById('powerSupply');
    if (supplyElement) supplyElement.textContent = gameState.powerSupply;

    const demandElement = document.getElementById('powerDemand');
    if (demandElement) demandElement.textContent = gameState.powerDemand;

    const poweredBuildings = gameState.buildings.filter(b => b.powered).length;
    const poweredElement = document.getElementById('buildingsPowered');
    if (poweredElement) poweredElement.textContent = poweredBuildings;

    const totalElement = document.getElementById('totalBuildings');
    if (totalElement) totalElement.textContent = gameState.buildings.length;

    const efficiency = gameState.buildings.length > 0 ? 
        Math.round((poweredBuildings / gameState.buildings.length) * 100) : 0;
    gameState.efficiency = efficiency;

    const efficiencyElement = document.getElementById('energyEfficiency');
    if (efficiencyElement) efficiencyElement.textContent = efficiency;

    gameState.score = (poweredBuildings * 100) + (gameState.budget / 10) + (efficiency * 5);
    const scoreElement = document.getElementById('energyScore');
    if (scoreElement) scoreElement.textContent = Math.round(gameState.score);
}

function checkGameCompletion() {
    const poweredBuildings = gameState.buildings.filter(b => b.powered).length;

    if (poweredBuildings === gameState.buildings.length) {
        setTimeout(() => {
            appData.user.points += Math.floor(gameState.score / 10);
            updateUserPoints();

            showSuccess(`🎉 Grid complete! All ${poweredBuildings} buildings powered. Score: ${Math.round(gameState.score)}`);

            setTimeout(() => closeModal('gameModal'), 3000);
        }, 1000);
    }
}

function resetEnergyGrid() {
    gameState = {
        level: 1,
        score: 0,
        budget: 1000,
        powerDemand: 0,
        powerSupply: 0,
        gridSize: 6,
        buildings: [],
        energySources: [],
        selectedSource: null,
        efficiency: 0
    };

    initializeEnergyGrid();
    generateBuildings();
    updateGridStats();
}

// =================== CLIMATE ACTION STRATEGY ===================
function startClimateActionStrategy() {
    currentGame = 8;
    gameState = {
        level: 1,
        score: 0,
        year: 2024,
        finalYear: 2034,
        globalTemp: 1.2,
        co2Level: 420,
        economy: 50,
        publicSupport: 50,
        currentScenario: 0,
        decisions: []
    };

    const scenarios = [
        {
            title: "Energy Transition Crisis",
            description: "Coal plants are being shut down, but renewable energy infrastructure isn't ready. Power shortages are affecting the economy.",
            options: [
                {
                    text: "Fast-track renewable energy construction with massive government investment",
                    impact: { economy: -15, co2Level: -5, publicSupport: -10, globalTemp: -0.05 }
                },
                {
                    text: "Temporarily extend coal plant operations while building renewables",
                    impact: { economy: 5, co2Level: 8, publicSupport: 5, globalTemp: 0.02 }
                },
                {
                    text: "Import clean energy from neighboring countries",
                    impact: { economy: -8, co2Level: -2, publicSupport: -5, globalTemp: -0.01 }
                }
            ]
        },
        {
            title: "Transportation Revolution",
            description: "The transportation sector needs urgent decarbonization. Citizens resist changes to their mobility habits.",
            options: [
                {
                    text: "Ban internal combustion engines in cities immediately",
                    impact: { economy: -10, co2Level: -10, publicSupport: -20, globalTemp: -0.03 }
                },
                {
                    text: "Provide massive subsidies for electric vehicles",
                    impact: { economy: -12, co2Level: -8, publicSupport: 10, globalTemp: -0.02 }
                },
                {
                    text: "Implement gradual carbon pricing on fuels",
                    impact: { economy: -5, co2Level: -5, publicSupport: -8, globalTemp: -0.01 }
                }
            ]
        },
        {
            title: "Climate Action Results",
            description: "Your decisions have shaped the world. See the final outcome.",
            options: []
        }
    ];

    gameState.scenarios = scenarios;

    const gameContainer = document.getElementById('gameContent');
    gameContainer.innerHTML = `
        <div class="game-header">
            <div class="game-score">Score: <span id="climateScore">0</span></div>
            <div class="game-level">Year: <span id="climateYear">2024</span></div>
            <div class="game-temp">Global Temp: +<span id="globalTemp">1.2</span>°C</div>
            <button class="btn btn--secondary" onclick="resetClimateStrategy()">Reset</button>
        </div>
        <div class="climate-strategy">
            <div class="decision-panel" id="decisionPanel">
                <!-- Decision scenarios will be loaded here -->
            </div>
            <div class="global-stats">
                <h4>Global Indicators</h4>

                <div class="impact-meter">
                    <label>🌡️ Global Temperature: +<span id="tempValue">1.2</span>°C</label>
                    <div class="impact-bar">
                        <div class="impact-fill bad" id="tempBar" style="width: 60%"></div>
                    </div>
                </div>

                <div class="impact-meter">
                    <label>💨 CO2 Level: <span id="co2Value">420</span>ppm</label>
                    <div class="impact-bar">
                        <div class="impact-fill bad" id="co2Bar" style="width: 70%"></div>
                    </div>
                </div>

                <div class="impact-meter">
                    <label>💰 Economy: <span id="economyValue">50</span>%</label>
                    <div class="impact-bar">
                        <div class="impact-fill neutral" id="economyBar" style="width: 50%"></div>
                    </div>
                </div>

                <div class="impact-meter">
                    <label>👥 Public Support: <span id="supportValue">50</span>%</label>
                    <div class="impact-bar">
                        <div class="impact-fill neutral" id="supportBar" style="width: 50%"></div>
                    </div>
                </div>
            </div>
        </div>
    `;

    presentScenario();
}

function presentScenario() {
    if (gameState.currentScenario >= gameState.scenarios.length - 1) {
        endClimateGame();
        return;
    }

    const scenario = gameState.scenarios[gameState.currentScenario];
    const panel = document.getElementById('decisionPanel');

    if (panel) {
        panel.innerHTML = `
            <div class="decision-card">
                <h3>${scenario.title}</h3>
                <p>${scenario.description}</p>
                <div class="decision-options">
                    ${scenario.options.map((option, index) => `
                        <button class="decision-btn" onclick="makeDecision(${index})">
                            ${option.text}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

function makeDecision(optionIndex) {
    const scenario = gameState.scenarios[gameState.currentScenario];
    const option = scenario.options[optionIndex];

    Object.keys(option.impact).forEach(key => {
        if (gameState[key] !== undefined) {
            gameState[key] += option.impact[key];
        }
    });

    gameState.economy = Math.max(0, Math.min(100, gameState.economy));
    gameState.publicSupport = Math.max(0, Math.min(100, gameState.publicSupport));
    gameState.co2Level = Math.max(350, gameState.co2Level);
    gameState.globalTemp = Math.max(0, gameState.globalTemp);

    const decision = {
        year: gameState.year,
        scenario: scenario.title,
        choice: option.text,
        impact: option.impact
    };
    gameState.decisions.push(decision);

    updateGlobalStats();

    gameState.currentScenario++;
    gameState.year += 5;

    setTimeout(() => {
        if (gameState.currentScenario < gameState.scenarios.length - 1) {
            presentScenario();
        } else {
            endClimateGame();
        }
    }, 1500);
}

function updateGlobalStats() {
    const yearElement = document.getElementById('climateYear');
    if (yearElement) yearElement.textContent = gameState.year;

    const tempValueElement = document.getElementById('tempValue');
    if (tempValueElement) tempValueElement.textContent = gameState.globalTemp.toFixed(2);

    const co2ValueElement = document.getElementById('co2Value');
    if (co2ValueElement) co2ValueElement.textContent = Math.round(gameState.co2Level);

    const economyValueElement = document.getElementById('economyValue');
    if (economyValueElement) economyValueElement.textContent = Math.round(gameState.economy);

    const supportValueElement = document.getElementById('supportValue');
    if (supportValueElement) supportValueElement.textContent = Math.round(gameState.publicSupport);

    const globalTempElement = document.getElementById('globalTemp');
    if (globalTempElement) globalTempElement.textContent = gameState.globalTemp.toFixed(2);

    const tempPercent = Math.min(100, (gameState.globalTemp / 2.0) * 100);
    const co2Percent = Math.min(100, ((gameState.co2Level - 350) / 150) * 100);

    updateBar('tempBar', tempPercent, gameState.globalTemp < 1.5 ? 'good' : gameState.globalTemp < 2.0 ? 'neutral' : 'bad');
    updateBar('co2Bar', co2Percent, gameState.co2Level < 400 ? 'good' : gameState.co2Level < 450 ? 'neutral' : 'bad');
    updateBar('economyBar', gameState.economy, gameState.economy > 60 ? 'good' : gameState.economy > 30 ? 'neutral' : 'bad');
    updateBar('supportBar', gameState.publicSupport, gameState.publicSupport > 60 ? 'good' : gameState.publicSupport > 30 ? 'neutral' : 'bad');

    const tempScore = Math.max(0, 100 - (gameState.globalTemp - 1.0) * 50);
    const co2Score = Math.max(0, 100 - (gameState.co2Level - 350) / 2);
    const economyScore = gameState.economy;
    const supportScore = gameState.publicSupport;

    gameState.score = Math.round((tempScore + co2Score + economyScore + supportScore) / 4);
    const scoreElement = document.getElementById('climateScore');
    if (scoreElement) scoreElement.textContent = gameState.score;
}

function updateBar(barId, width, colorClass) {
    const bar = document.getElementById(barId);
    if (bar) {
        bar.style.width = `${width}%`;
        bar.className = `impact-fill ${colorClass}`;
    }
}

function endClimateGame() {
    let outcome = '';

    if (gameState.globalTemp < 1.5 && gameState.co2Level < 400) {
        outcome = '🏆 Excellent! You kept global warming under control!';
    } else if (gameState.globalTemp < 2.0 && gameState.co2Level < 450) {
        outcome = '👍 Good work! Climate change is manageable.';
    } else {
        outcome = '⚠️ Climate crisis continues. More action needed.';
    }

    const finalScore = gameState.score + (gameState.publicSupport / 2) + (gameState.economy / 2);

    appData.user.points += Math.floor(finalScore / 10);
    updateUserPoints();

    showSuccess(`🌍 Climate strategy complete! Final temperature: +${gameState.globalTemp.toFixed(2)}°C. ${outcome} Score: ${Math.round(finalScore)}`);

    setTimeout(() => closeModal('gameModal'), 4000);
}

function resetClimateStrategy() {
    gameState = {
        level: 1,
        score: 0,
        year: 2024,
        finalYear: 2034,
        globalTemp: 1.2,
        co2Level: 420,
        economy: 50,
        publicSupport: 50,
        currentScenario: 0,
        decisions: []
    };

    updateGlobalStats();
    presentScenario();
}

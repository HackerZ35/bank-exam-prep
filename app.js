// Bank Exam Prep Portal - Core State Engine
const Database = {
    // Initial Seed Data
    defaultMCQExams: [
        {
            id: 'mcq-bb-ad-01',
            title: 'Bangladesh Bank Assistant Director Model Test - 08',
            duration: 60, // 60 minutes
            date: 'Live Now (24h)',
            totalQuestions: 10, // Small count for easy demo
            questions: [
                {
                    q: 'Select the correct synonym for "Obliterate":',
                    options: ['Construct', 'Annihilate', 'Validate', 'Recover'],
                    correct: 1, // Annihilate
                    explanation: 'Obliterate means to destroy utterly, wipe out. Annihilate is the closest synonym.'
                },
                {
                    q: 'If a bank loan of BDT 50,000 earns BDT 4,000 interest in 2 years, what is the simple annual rate of interest?',
                    options: ['3%', '4%', '5%', '6%'],
                    correct: 1, // 4%
                    explanation: 'Simple Interest = P * r * t. Here, 4,000 = 50,000 * r * 2. 4,000 = 100,000 * r. r = 0.04 or 4%.'
                },
                {
                    q: 'Who is the current Governor of Bangladesh Bank?',
                    options: ['Fazle Kabir', 'Dr. Ahsan H. Mansur', 'Abdur Rouf Talukder', 'Atiur Rahman'],
                    correct: 1, // Dr. Ahsan H. Mansur
                    explanation: 'Dr. Ahsan H. Mansur is the current Governor of Bangladesh Bank.'
                },
                {
                    q: 'What is the base of the Hexadecimal number system?',
                    options: ['2', '8', '10', '16'],
                    correct: 3, // 16
                    explanation: 'Hexadecimal is a base-16 number system, using digits 0-9 and letters A-F.'
                },
                {
                    q: 'Which bank is the central bank of Bangladesh?',
                    options: ['Sonali Bank', 'Bangladesh Bank', 'Grameen Bank', 'Dhaka Bank'],
                    correct: 1,
                    explanation: 'Bangladesh Bank is the central bank of Bangladesh, established in 1971.'
                },
                {
                    q: 'Choose the correct English translation for: "সে সাঁতার কাটতে জানে না।"',
                    options: [
                        'He does not know to swim.',
                        'He does not know how to swim.',
                        'He knows not how to swim.',
                        'He is not knowing how to swim.'
                    ],
                    correct: 1,
                    explanation: 'The standard idiomatic expression is "know how to do something".'
                },
                {
                    q: 'In MS Excel, which symbol is used to start a formula?',
                    options: ['$', '@', '=', '#'],
                    correct: 2,
                    explanation: 'All Excel formulas begin with an equals (=) sign.'
                },
                {
                    q: 'What is the value of 15% of 80?',
                    options: ['8', '10', '12', '14'],
                    correct: 2,
                    explanation: '15% of 80 = (15 / 100) * 80 = 12.'
                },
                {
                    q: 'Which country is the largest trading partner of Bangladesh?',
                    options: ['India', 'China', 'USA', 'Germany'],
                    correct: 1,
                    explanation: 'China is the largest trading partner and import partner of Bangladesh.'
                },
                {
                    q: 'What is the primary function of commercial banks?',
                    options: ['Issuing Currency', 'Accepting deposits & granting loans', 'Formulating Monetary Policy', 'Regulating capital markets'],
                    correct: 1,
                    explanation: 'The primary functions of commercial banks are accepting deposits and granting credit/loans.'
                }
            ]
        },
        {
            id: 'mcq-senior-officer-02',
            title: 'Combined 5-Bank Senior Officer Mock Exam',
            duration: 60,
            date: 'Tomorrow (9:00 PM)',
            totalQuestions: 5,
            questions: [
                {
                    q: 'What is the antonym of "Diligent"?',
                    options: ['Industrious', 'Lazy', 'Attentive', 'Active'],
                    correct: 1,
                    explanation: 'Diligent means hard-working. Lazy is the exact opposite.'
                },
                {
                    q: 'Solve: 5 + 5 * 5 - 5 = ?',
                    options: ['45', '25', '20', '5'],
                    correct: 1, // 25
                    explanation: 'Following BODMAS/Order of operations: multiplication first. 5 * 5 = 25. Then 5 + 25 - 5 = 25.'
                },
                {
                    q: 'The acronym SWIFT stands for:',
                    options: [
                        'Society for Worldwide Interbank Financial Telecommunication',
                        'System for Worldwide Investment and Financial Transfer',
                        'Society for Wide Investment Financial Telecom',
                        'Secure Worldwide Interbank Fund Transfer'
                    ],
                    correct: 0,
                    explanation: 'SWIFT stands for Society for Worldwide Interbank Financial Telecommunication.'
                },
                {
                    q: 'In computer terms, what does RAM stand for?',
                    options: ['Read Access Memory', 'Random Access Memory', 'Rapid Active Module', 'Run Active Memory'],
                    correct: 1,
                    explanation: 'RAM stands for Random Access Memory, a volatile hardware memory.'
                },
                {
                    q: 'The Liberation War of Bangladesh took place in which year?',
                    options: ['1947', '1952', '1969', '1971'],
                    correct: 3,
                    explanation: 'The Liberation War took place in 1971, resulting in the independence of Bangladesh.'
                }
            ]
        }
    ],

    defaultWrittenExams: [
        {
            id: 'writ-bb-ad-01',
            title: 'Bangladesh Bank AD - Written Focus Test',
            date: 'Active (24h)',
            questions: [
                {
                    title: '1. Focus Writing (English)',
                    instruction: 'Write a comprehensive essay on "The Role of Digital Financial Services (DFS) in Achieving Smart Bangladesh by 2041". (Word limit: 300 words)'
                },
                {
                    title: '2. Mathematics (Written Solutions)',
                    instruction: 'A person sold two articles for BDT 12,000 each. On one, he gained 20% and on the other, he lost 20%. Calculate his overall gain or loss percentage and absolute amount. Show step-by-step working.'
                },
                {
                    title: '3. Translation (English to Bengali)',
                    instruction: 'Translate the following passage: "Financial inclusion is key to sustainable economic development. By leveraging mobile banking technology, Bangladesh has successfully integrated millions of unbanked rural citizens into the formal financial framework, fostering economic resilience."'
                }
            ]
        }
    ],

    // Local Storage Sync Helpers
    init() {
        if (!localStorage.getItem('user_session')) {
            // Default logged out
        }
        if (!localStorage.getItem('mcq_exams')) {
            localStorage.setItem('mcq_exams', JSON.stringify(this.defaultMCQExams));
        }
        if (!localStorage.getItem('written_exams')) {
            localStorage.setItem('written_exams', JSON.stringify(this.defaultWrittenExams));
        }
        if (!localStorage.getItem('user_submissions')) {
            localStorage.setItem('user_submissions', JSON.stringify([]));
        }
        if (!localStorage.getItem('premium_status')) {
            localStorage.setItem('premium_status', 'free'); // free or premium
        }
    },

    getMCQExams() {
        return JSON.parse(localStorage.getItem('mcq_exams')) || [];
    },

    saveMCQExams(exams) {
        localStorage.setItem('mcq_exams', JSON.stringify(exams));
    },

    getWrittenExams() {
        return JSON.parse(localStorage.getItem('written_exams')) || [];
    },

    saveWrittenExams(exams) {
        localStorage.setItem('written_exams', JSON.stringify(exams));
    },

    getSubmissions() {
        return JSON.parse(localStorage.getItem('user_submissions')) || [];
    },

    addSubmission(sub) {
        const subs = this.getSubmissions();
        subs.push({
            id: 'sub-' + Date.now(),
            timestamp: new Date().toLocaleString(),
            ...sub
        });
        localStorage.setItem('user_submissions', JSON.stringify(subs));
    }
};

// Initialize DB
Database.init();

// Simulated Auth Session Controller
const Auth = {
    getUser() {
        return JSON.parse(localStorage.getItem('user_session')) || null;
    },

    isLoggedIn() {
        return this.getUser() !== null;
    },

    login(email, method = 'email') {
        const mockUser = {
            email: email,
            name: email.split('@')[0].toUpperCase(),
            id: 'MOCK-' + Math.floor(1000 + Math.random() * 9000),
            avatarLetter: email.charAt(0).toUpperCase()
        };
        localStorage.setItem('user_session', JSON.stringify(mockUser));
        return mockUser;
    },

    logout() {
        localStorage.removeItem('user_session');
        window.location.href = 'index.html';
    },

    getPremiumStatus() {
        return localStorage.getItem('premium_status') || 'free';
    },

    setPremium(status) {
        localStorage.setItem('premium_status', status);
    }
};

// Shared Helper Functions for DOM Manipulation
function checkAuthAndLoadProfile() {
    if (!Auth.isLoggedIn()) {
        window.location.href = 'login.html';
        return;
    }
    
    const user = Auth.getUser();
    const premium = Auth.getPremiumStatus();
    
    // Update navbar or dashboard sidebar user elements
    const avatarEl = document.getElementById('user-avatar');
    const nameEl = document.getElementById('user-name');
    const idEl = document.getElementById('user-id');
    const badgeEl = document.getElementById('user-badge');

    if (avatarEl) avatarEl.textContent = user.avatarLetter;
    if (nameEl) nameEl.textContent = user.name;
    if (idEl) idEl.textContent = `ID: ${user.id}`;
    
    if (badgeEl) {
        if (premium === 'premium') {
            badgeEl.className = 'badge badge-warning';
            badgeEl.innerHTML = '<i class="fas fa-crown"></i> Premium';
        } else {
            badgeEl.className = 'badge badge-info';
            badgeEl.textContent = 'Free User';
        }
    }
}

// SideNav toggle logic for mobile viewports
function setupMobileMenu() {
    const menuBtn = document.getElementById('menu-toggle');
    const sidenav = document.querySelector('.sidenav');
    const mainContent = document.querySelector('.main-content');
    
    if (menuBtn && sidenav) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sidenav.classList.toggle('open');
        });

        // Close when clicking outside of drawer on mobile
        document.addEventListener('click', (e) => {
            if (sidenav.classList.contains('open') && !sidenav.contains(e.target) && e.target !== menuBtn) {
                sidenav.classList.remove('open');
            }
        });
    }
}

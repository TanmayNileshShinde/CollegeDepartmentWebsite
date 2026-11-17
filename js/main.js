/**
 * Main Application Logic & Interactivity
 * Department of Computer Engineering - SAKEC
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderStats();
    renderFaculty();
    renderLaboratories();
    renderSyllabus();
    renderAchievements();
    renderPlacementSummary();
    renderRecruiters();
    renderTestimonials();
    renderNotices();
    initPlacementCharts();
    initNavigation();
    initModalHandlers();
    initContactForm();
    initScrollAnimations();
});

/* ========================================================
   1. Theme Management (Dark / Light Mode)
   ======================================================== */
function initTheme() {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const savedTheme = localStorage.getItem('sakec_theme') || 'light';

    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-theme');
        updateThemeIcon(true);
    } else {
        document.documentElement.classList.remove('dark-theme');
        updateThemeIcon(false);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = document.documentElement.classList.toggle('dark-theme');
            localStorage.setItem('sakec_theme', isDark ? 'dark' : 'light');
            updateThemeIcon(isDark);
            window.dispatchEvent(new CustomEvent('themeChanged'));
        });
    }
}

function updateThemeIcon(isDark) {
    const icon = document.querySelector('#themeToggleBtn i');
    if (icon) {
        if (isDark) {
            icon.className = 'fa-solid fa-sun';
        } else {
            icon.className = 'fa-solid fa-moon';
        }
    }
}

/* ========================================================
   2. Render Department Stats
   ======================================================== */
function renderStats() {
    const container = document.getElementById('heroStatsContainer');
    if (!container) return;

    container.innerHTML = departmentData.info.stats.map(s => `
        <div class="stat-card" data-aos="fade-up">
            <div class="stat-icon-wrapper">
                <i class="fa-solid fa-${s.icon}"></i>
            </div>
            <div class="stat-content">
                <div class="stat-number">
                    <span class="counter" data-target="${s.value}">${s.value}</span>${s.suffix}
                </div>
                <div class="stat-label">${s.label}</div>
            </div>
        </div>
    `).join('');
}

/* ========================================================
   3. Faculty Members Directory & Filter
   ======================================================== */
let activeFacultyFilter = 'all';
let facultySearchQuery = '';

function renderFaculty() {
    const container = document.getElementById('facultyGrid');
    if (!container) return;

    let filtered = departmentData.faculty.filter(f => {
        const matchesCategory = activeFacultyFilter === 'all' || f.category === activeFacultyFilter;
        const searchTarget = `${f.name} ${f.role} ${f.qualification} ${f.specialization.join(' ')}`.toLowerCase();
        const matchesSearch = searchTarget.includes(facultySearchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fa-solid fa-user-slash"></i>
                <p>No faculty members found matching "${facultySearchQuery}".</p>
                <button class="btn btn-secondary btn-sm" onclick="resetFacultyFilter()">Reset Search</button>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(f => `
        <div class="faculty-card" data-id="${f.id}">
            <div class="faculty-badge">${f.role}</div>
            <div class="faculty-avatar-box">
                <div class="faculty-avatar-circle">
                    <span>${getInitials(f.name)}</span>
                </div>
            </div>
            <div class="faculty-info">
                <h4 class="faculty-name">${f.name}</h4>
                <p class="faculty-qual">${f.qualification}</p>
                <div class="faculty-exp">
                    <i class="fa-solid fa-clock-rotate-left"></i> ${f.experience}
                </div>
                
                <div class="faculty-tags">
                    ${f.specialization.slice(0, 2).map(tag => `<span class="tag">${tag}</span>`).join('')}
                    ${f.specialization.length > 2 ? `<span class="tag-more">+${f.specialization.length - 2}</span>` : ''}
                </div>

                <div class="faculty-footer">
                    <button class="btn btn-outline-primary btn-sm view-faculty-btn" onclick="openFacultyModal(${f.id})">
                        <i class="fa-regular fa-id-card"></i> View Profile
                    </button>
                    <a href="mailto:${f.email}" class="faculty-email-btn" title="Send Email">
                        <i class="fa-regular fa-envelope"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

function resetFacultyFilter() {
    activeFacultyFilter = 'all';
    facultySearchQuery = '';
    const searchInput = document.getElementById('facultySearchInput');
    if (searchInput) searchInput.value = '';
    document.querySelectorAll('.faculty-filter-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.filter === 'all');
    });
    renderFaculty();
}

function getInitials(name) {
    const parts = name.replace(/Dr\.|Prof\./g, '').trim().split(' ');
    if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return parts[0].slice(0, 2).toUpperCase();
}

function openFacultyModal(facultyId) {
    const f = departmentData.faculty.find(item => item.id === facultyId);
    if (!f) return;

    const modalTitle = document.getElementById('facultyModalTitle');
    const modalBody = document.getElementById('facultyModalBody');

    modalTitle.innerHTML = `<i class="fa-solid fa-user-tie"></i> Faculty Profile`;
    modalBody.innerHTML = `
        <div class="faculty-modal-grid">
            <div class="modal-faculty-header">
                <div class="modal-avatar-circle">
                    <span>${getInitials(f.name)}</span>
                </div>
                <div class="modal-header-details">
                    <h3>${f.name}</h3>
                    <div class="modal-role-pill">${f.role}</div>
                    <p class="modal-qual"><i class="fa-solid fa-graduation-cap"></i> ${f.qualification}</p>
                    <p class="modal-exp"><i class="fa-solid fa-briefcase"></i> Total Experience: <strong>${f.experience}</strong></p>
                    <p class="modal-cabin"><i class="fa-solid fa-building"></i> Cabin: ${f.cabin}</p>
                    <p class="modal-email"><i class="fa-solid fa-envelope"></i> <a href="mailto:${f.email}">${f.email}</a></p>
                </div>
            </div>

            <div class="modal-section">
                <h5>Biography & Research Profile</h5>
                <p class="modal-bio">${f.bio}</p>
            </div>

            <div class="modal-section">
                <h5>Areas of Specialization</h5>
                <div class="modal-tags">
                    ${f.specialization.map(s => `<span class="tag tag-lg"><i class="fa-solid fa-check"></i> ${s}</span>`).join('')}
                </div>
            </div>

            <div class="modal-section">
                <h5>Key Courses & Subjects Taught</h5>
                <ul class="modal-list">
                    ${f.courses.map(c => `<li><i class="fa-solid fa-book"></i> ${c}</li>`).join('')}
                </ul>
            </div>

            <div class="modal-stats-row">
                <div class="mini-stat-card">
                    <span class="mini-stat-num">${f.publications}+</span>
                    <span class="mini-stat-lbl">Research Publications</span>
                </div>
                <div class="mini-stat-card">
                    <span class="mini-stat-num">${f.experience}</span>
                    <span class="mini-stat-lbl">Academic Experience</span>
                </div>
            </div>

            <div class="modal-footer-actions">
                <a href="${f.scholar}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary">
                    <i class="fa-brands fa-google-scholar"></i> Google Scholar Profile
                </a>
                <a href="mailto:${f.email}" class="btn btn-primary">
                    <i class="fa-regular fa-paper-plane"></i> Contact Faculty
                </a>
            </div>
        </div>
    `;

    openModal('facultyDetailModal');
}

/* ========================================================
   4. Laboratories Showcase
   ======================================================== */
let activeLabFilter = 'all';

function renderLaboratories() {
    const container = document.getElementById('labsGrid');
    if (!container) return;

    let filtered = departmentData.laboratories.filter(lab => {
        return activeLabFilter === 'all' || lab.category === activeLabFilter;
    });

    container.innerHTML = filtered.map(lab => `
        <div class="lab-card" data-category="${lab.category}">
            <div class="lab-card-top">
                <span class="lab-pill">${lab.labNumber}</span>
                <span class="lab-capacity"><i class="fa-solid fa-desktop"></i> ${lab.capacity}</span>
            </div>
            <div class="lab-card-content">
                <h4 class="lab-title">${lab.name}</h4>
                <p class="lab-desc">${lab.description}</p>
                
                <div class="lab-meta-list">
                    <div class="lab-meta-item">
                        <span class="meta-label"><i class="fa-solid fa-user-check"></i> In-Charge:</span>
                        <span class="meta-val">${lab.incharge}</span>
                    </div>
                    <div class="lab-meta-item">
                        <span class="meta-label"><i class="fa-solid fa-ruler-combined"></i> Lab Area:</span>
                        <span class="meta-val">${lab.area}</span>
                    </div>
                </div>

                <div class="lab-specs-box">
                    <div class="spec-group">
                        <span class="spec-title"><i class="fa-solid fa-microchip"></i> Hardware Configuration:</span>
                        <p class="spec-detail">${lab.hardware}</p>
                    </div>
                    <div class="spec-group">
                        <span class="spec-title"><i class="fa-solid fa-code"></i> Key Software & Environments:</span>
                        <p class="spec-detail">${lab.software}</p>
                    </div>
                </div>

                <div class="lab-courses-tags">
                    <span class="courses-heading">Conducted Practicals:</span>
                    <div class="course-pills">
                        ${lab.courses.map(c => `<span class="course-pill">${c}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

/* ========================================================
   5. Syllabus & Academic Scheme
   ======================================================== */
let currentSemesterIndex = 0;

function renderSyllabus() {
    const semNav = document.getElementById('syllabusSemNav');
    const tableBody = document.getElementById('syllabusTableBody');
    const semTitle = document.getElementById('currentSemTitle');
    const semYear = document.getElementById('currentSemYear');

    if (!semNav || !tableBody) return;

    // Render semester tabs
    semNav.innerHTML = departmentData.syllabus.semesters.map((s, index) => `
        <button class="sem-nav-btn ${index === currentSemesterIndex ? 'active' : ''}" onclick="selectSemester(${index})">
            ${s.sem}
        </button>
    `).join('');

    const semData = departmentData.syllabus.semesters[currentSemesterIndex];
    if (semTitle) semTitle.innerText = semData.sem;
    if (semYear) semYear.innerText = semData.year;

    // Render table rows
    tableBody.innerHTML = semData.courses.map((course, idx) => `
        <tr>
            <td class="course-code-cell">
                <span class="badge-code">${course.code}</span>
            </td>
            <td class="course-title-cell">
                <strong>${course.title}</strong>
                <p class="course-brief">${course.desc}</p>
            </td>
            <td>
                <span class="badge-type ${course.type.toLowerCase().replace(/\s+/g, '-')}">${course.type}</span>
            </td>
            <td class="text-center">${course.hours}</td>
            <td class="text-center font-bold">${course.credits}</td>
            <td class="text-right">
                <button class="btn btn-sm btn-outline-secondary" onclick="viewCourseDetails('${course.code}')">
                    <i class="fa-solid fa-file-lines"></i> Modules
                </button>
            </td>
        </tr>
    `).join('');
}

function selectSemester(index) {
    currentSemesterIndex = index;
    renderSyllabus();
}

function viewCourseDetails(courseCode) {
    let foundCourse = null;
    let foundSem = null;

    for (const sem of departmentData.syllabus.semesters) {
        const c = sem.courses.find(item => item.code === courseCode);
        if (c) {
            foundCourse = c;
            foundSem = sem;
            break;
        }
    }

    if (!foundCourse) return;

    const modalTitle = document.getElementById('courseModalTitle');
    const modalBody = document.getElementById('courseModalBody');

    modalTitle.innerHTML = `<i class="fa-solid fa-book-open"></i> ${foundCourse.code} - ${foundCourse.title}`;
    modalBody.innerHTML = `
        <div class="course-detail-content">
            <div class="course-detail-header">
                <div class="c-meta-item">
                    <span class="c-meta-lbl">Semester:</span>
                    <span class="c-meta-val">${foundSem.sem} (${foundSem.year})</span>
                </div>
                <div class="c-meta-item">
                    <span class="c-meta-lbl">Category:</span>
                    <span class="c-meta-val">${foundCourse.type}</span>
                </div>
                <div class="c-meta-item">
                    <span class="c-meta-lbl">Contact Hours:</span>
                    <span class="c-meta-val">${foundCourse.hours} / Week</span>
                </div>
                <div class="c-meta-item">
                    <span class="c-meta-lbl">Credits:</span>
                    <span class="c-meta-val">${foundCourse.credits}</span>
                </div>
            </div>

            <div class="course-detail-block">
                <h5>Course Description & Scope</h5>
                <p>${foundCourse.desc}</p>
            </div>

            <div class="course-detail-block">
                <h5>Standard Modular Syllabus Outline</h5>
                <div class="modules-accordion">
                    <div class="module-item">
                        <div class="mod-header"><strong>Module 1:</strong> Foundations & Theoretical Principles</div>
                        <div class="mod-body">Core concepts, architectural prerequisites, mathematical background and fundamental algorithms.</div>
                    </div>
                    <div class="module-item">
                        <div class="mod-header"><strong>Module 2:</strong> Design Paradigms & Implementation</div>
                        <div class="mod-body">System modeling, algorithmic complexity optimization, and structural component design.</div>
                    </div>
                    <div class="module-item">
                        <div class="mod-header"><strong>Module 3:</strong> Advanced Techniques & Optimization</div>
                        <div class="mod-body">Modern libraries, real-world case studies, protocol tuning, and concurrency management.</div>
                    </div>
                    <div class="module-item">
                        <div class="mod-header"><strong>Module 4:</strong> Practical Application & Emerging Frontiers</div>
                        <div class="mod-body">Integration with current industry toolchains, performance benchmarking, and future research directions.</div>
                    </div>
                </div>
            </div>

            <div class="course-detail-block">
                <h5>Recommended Textbooks & References</h5>
                <ul class="ref-book-list">
                    <li><i class="fa-solid fa-bookmark"></i> Standard University Prescribed Reference Manuals, Pearson / McGraw-Hill Education.</li>
                    <li><i class="fa-solid fa-bookmark"></i> NPTEL / SWAYAM Online Certification Lectures by IIT Professors.</li>
                    <li><i class="fa-solid fa-bookmark"></i> Department Digital Library & IEEE Computer Society Technical Papers.</li>
                </ul>
            </div>
        </div>
    `;

    openModal('courseDetailModal');
}

function downloadSyllabusPDF() {
    const sem = departmentData.syllabus.semesters[currentSemesterIndex];
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${sem.sem} - Computer Engineering Syllabus (SAKEC)</title>
            <style>
                body { font-family: 'Segoe UI', Tahoma, sans-serif; padding: 40px; color: #1e293b; }
                .header { text-align: center; border-bottom: 2px solid #1e3a8a; padding-bottom: 15px; margin-bottom: 25px; }
                h1 { color: #1e3a8a; margin: 0 0 6px 0; font-size: 22px; }
                h2 { color: #d97706; margin: 0 0 8px 0; font-size: 16px; }
                p { margin: 4px 0; font-size: 13px; color: #64748b; }
                table { width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 13px; }
                th, td { border: 1px solid #cbd5e1; padding: 10px 12px; text-align: left; }
                th { background-color: #f1f5f9; color: #0f172a; }
                .code { font-weight: bold; color: #2563eb; }
                .footer { margin-top: 40px; font-size: 11px; text-align: center; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 15px; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>Shah & Anchor Kutchhi Engineering College</h1>
                <h2>Department of Computer Engineering</h2>
                <p>Curriculum Structure & Course Scheme (Rev-2019 'C' Scheme / NEP Compliant)</p>
                <p><strong>${sem.sem} — ${sem.year}</strong></p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th style="width: 15%;">Course Code</th>
                        <th style="width: 45%;">Course Title</th>
                        <th style="width: 15%;">Course Type</th>
                        <th style="width: 12%;">Teaching Hours</th>
                        <th style="width: 13%;">Credits</th>
                    </tr>
                </thead>
                <tbody>
                    ${sem.courses.map(c => `
                        <tr>
                            <td class="code">${c.code}</td>
                            <td><strong>${c.title}</strong><br><small style="color:#64748b;">${c.desc}</small></td>
                            <td>${c.type}</td>
                            <td>${c.hours}</td>
                            <td>${c.credits}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <div class="footer">
                Printed from SAKEC Department of Computer Engineering Portal &bull; Affiliated to University of Mumbai &bull; Approved by AICTE &bull; NBA Accredited
            </div>
            <script>
                window.onload = function() { window.print(); }
            </script>
        </body>
        </html>
    `);
    printWindow.document.close();
}

/* ========================================================
   6. Department Achievements & Accolades
   ======================================================== */
let activeAchievementFilter = 'all';

function renderAchievements() {
    const container = document.getElementById('achievementsGrid');
    if (!container) return;

    let filtered = departmentData.achievements.filter(a => {
        return activeAchievementFilter === 'all' || a.category === activeAchievementFilter;
    });

    container.innerHTML = filtered.map(a => `
        <div class="achievement-card">
            <div class="achieve-header">
                <span class="achieve-year">${a.year}</span>
                <span class="achieve-badge"><i class="fa-solid fa-trophy"></i> ${a.badge}</span>
            </div>
            <h4 class="achieve-title">${a.title}</h4>
            <div class="achieve-award">${a.award}</div>
            <p class="achieve-desc">${a.desc}</p>
            <div class="achieve-meta">
                <div class="achieve-team"><i class="fa-solid fa-users"></i> ${a.team}</div>
                <div class="achieve-agency"><i class="fa-solid fa-landmark"></i> ${a.agency}</div>
            </div>
        </div>
    `).join('');
}

/* ========================================================
   7. Placements, Recruiters & Testimonials
   ======================================================== */
function renderPlacementSummary() {
    const sum = departmentData.placements.summary;
    const highestElem = document.getElementById('statHighestPkg');
    const avgElem = document.getElementById('statAvgPkg');
    const rateElem = document.getElementById('statPlacementRate');
    const offersElem = document.getElementById('statTotalOffers');

    if (highestElem) highestElem.innerText = sum.highestPackage;
    if (avgElem) avgElem.innerText = sum.averagePackage;
    if (rateElem) rateElem.innerText = sum.overallRate;
    if (offersElem) offersElem.innerText = sum.totalOffers;
}

function renderRecruiters() {
    const marquee = document.getElementById('recruitersMarquee');
    if (!marquee) return;

    const recruiters = departmentData.placements.recruiters;
    // Double array for seamless infinite marquee scroll
    const doubleList = [...recruiters, ...recruiters];

    marquee.innerHTML = doubleList.map(r => `
        <div class="recruiter-badge">
            <span class="recruiter-name">${r.name}</span>
            <span class="recruiter-pkg">${r.package}</span>
        </div>
    `).join('');
}

function renderTestimonials() {
    const container = document.getElementById('testimonialsGrid');
    if (!container) return;

    container.innerHTML = departmentData.placements.testimonials.map(t => `
        <div class="testimonial-card">
            <div class="test-quote"><i class="fa-solid fa-quote-left"></i></div>
            <p class="test-text">${t.text}</p>
            <div class="test-author-box">
                <div class="test-avatar">${t.name.split(' ').map(n => n[0]).join('')}</div>
                <div class="test-info">
                    <h5>${t.name}</h5>
                    <p>${t.role} &bull; <strong>${t.company}</strong></p>
                    <span class="test-pkg-badge">${t.package}</span>
                </div>
            </div>
        </div>
    `).join('');
}

/* ========================================================
   8. Department Notice Board
   ======================================================== */
function renderNotices() {
    const container = document.getElementById('noticesContainer');
    if (!container) return;

    container.innerHTML = departmentData.notices.map(n => `
        <div class="notice-row">
            <div class="notice-date-badge">
                <i class="fa-regular fa-calendar-check"></i> ${n.date}
            </div>
            <div class="notice-title-box">
                <span class="notice-cat">${n.category}</span>
                ${n.isNew ? '<span class="badge-new">NEW</span>' : ''}
                <a href="${n.link}" class="notice-title-link" onclick="viewNoticeModal('${n.title}', '${n.date}', '${n.category}')">${n.title}</a>
            </div>
            <button class="btn btn-sm btn-outline-primary" onclick="viewNoticeModal('${n.title}', '${n.date}', '${n.category}')">
                Read Notice <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    `).join('');
}

function viewNoticeModal(title, date, category) {
    const modalTitle = document.getElementById('noticeModalTitle');
    const modalBody = document.getElementById('noticeModalBody');

    modalTitle.innerHTML = `<i class="fa-solid fa-bullhorn"></i> Department Announcement`;
    modalBody.innerHTML = `
        <div class="notice-detail-box">
            <div class="notice-meta-bar">
                <span><i class="fa-solid fa-tag"></i> Category: <strong>${category}</strong></span>
                <span><i class="fa-regular fa-calendar"></i> Date Posted: <strong>${date}</strong></span>
            </div>
            <h3 class="notice-modal-head">${title}</h3>
            <div class="notice-modal-content">
                <p>All students and faculty members of the Department of Computer Engineering are hereby notified regarding the aforementioned academic schedule and instructions.</p>
                <p>Please ensure all prerequisites, project milestones, and documentation are verified by your respective guides and mentors prior to the specified dates.</p>
                <div class="notice-signoff">
                    <p><strong>Dr. Uday Bhave</strong><br>Head, Department of Computer Engineering<br>Shah & Anchor Kutchhi Engineering College</p>
                </div>
            </div>
        </div>
    `;

    openModal('noticeDetailModal');
}

/* ========================================================
   9. Modals & Popups Manager
   ======================================================== */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function initModalHandlers() {
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    document.querySelectorAll('.modal-close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal-overlay');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.active').forEach(m => {
                m.classList.remove('active');
            });
            document.body.style.overflow = 'auto';
        }
    });
}

/* ========================================================
   10. Navigation, Mobile Menu & Smooth Scrolling
   ======================================================== */
function initNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const backToTopBtn = document.getElementById('backToTopBtn');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fa-solid fa-xmark"></i>' 
                : '<i class="fa-solid fa-bars"></i>';
        });

        // Close menu when clicking link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    }

    // Scroll active link highlight
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                if (navLink) navLink.classList.add('active');
            } else {
                if (navLink) navLink.classList.remove('active');
            }
        });

        // Back to top button
        if (backToTopBtn) {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Faculty filter buttons
    document.querySelectorAll('.faculty-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.faculty-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFacultyFilter = btn.dataset.filter;
            renderFaculty();
        });
    });

    // Faculty search input
    const facultySearchInput = document.getElementById('facultySearchInput');
    if (facultySearchInput) {
        facultySearchInput.addEventListener('input', (e) => {
            facultySearchQuery = e.target.value.trim();
            renderFaculty();
        });
    }

    // Labs filter buttons
    document.querySelectorAll('.lab-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.lab-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeLabFilter = btn.dataset.filter;
            renderLaboratories();
        });
    });

    // Achievement filter buttons
    document.querySelectorAll('.achieve-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.achieve-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeAchievementFilter = btn.dataset.filter;
            renderAchievements();
        });
    });
}

/* ========================================================
   11. Contact & Enquiry Form
   ======================================================== */
function initContactForm() {
    const form = document.getElementById('departmentContactForm');
    const alertBox = document.getElementById('formAlertBox');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.querySelector('#contactName').value.trim();
        const email = form.querySelector('#contactEmail').value.trim();
        const subject = form.querySelector('#contactSubject').value.trim();
        const message = form.querySelector('#contactMessage').value.trim();

        if (!name || !email || !subject || !message) {
            showAlert('Please fill in all required fields.', 'error');
            return;
        }

        // Simulate sending enquiry
        const submitBtn = form.querySelector('button[type="submit"]');
        const origText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Submitting...';

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = origText;
            form.reset();
            showAlert('Thank you! Your enquiry has been received by the Department Office. We will get back to you shortly.', 'success');
        }, 800);
    });

    function showAlert(msg, type) {
        if (!alertBox) return;
        alertBox.className = `alert-box alert-${type}`;
        alertBox.innerHTML = `
            <i class="fa-solid fa-${type === 'success' ? 'circle-check' : 'circle-exclamation'}"></i>
            <span>${msg}</span>
        `;
        alertBox.style.display = 'flex';
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 5000);
    }
}

/* ========================================================
   12. Simple Scroll Animations & Stat Counters
   ======================================================== */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                // If it contains counters, animate them
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(c => animateCounter(c));
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.stat-card, .section-header, .feature-card, .faculty-card, .lab-card').forEach(el => {
        observer.observe(el);
    });
}

function animateCounter(counter) {
    const target = parseFloat(counter.getAttribute('data-target'));
    const isDecimal = target % 1 !== 0;
    const duration = 1200;
    const steps = 30;
    const stepTime = duration / steps;
    let current = 0;
    const increment = target / steps;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            counter.innerText = isDecimal ? target.toFixed(1) : target;
            clearInterval(timer);
        } else {
            counter.innerText = isDecimal ? current.toFixed(1) : Math.floor(current);
        }
    }, stepTime);
}

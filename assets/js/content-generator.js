let currentLanguage = 'fr';

function generateSocialLinks(links) {
    return links.map(link => `
        <li>
            <a href="${link.url}" class="icon brands ${link.icon}" target="_blank">
                <span class="label">${link.label}</span>
            </a>
        </li>
    `).join('');
}

function generateHomeProjects() {
    const container = document.querySelector('#header .content');
    if (!container) return;

    const projectsByYear = {};
    portfolioContent.projects.forEach(project => {
        const year = project.year;
        if (!projectsByYear[year]) {
            projectsByYear[year] = [];
        }
        projectsByYear[year].push(project);
    });

    let html = '';
    
    if (projectsByYear['current']) {
        html += `
            <div class="inner">
                <h2 id="current-year-title">${currentLanguage === 'en' ? 'Current Projects' : 'Projets Actuels'}</h2>
                ${projectsByYear['current'].map(project => generateProjectSection(project)).join('')}
            </div>
        `;
    }

    const years = Object.keys(projectsByYear).filter(y => y !== 'current').sort((a, b) => b - a);
    years.forEach(year => {
        html += `
            <div class="inner">
                <h2>${year}</h2>
                ${projectsByYear[year].map(project => generateProjectSection(project)).join('')}
            </div>
        `;
    });

    const introSection = container.querySelector('.inner');
    introSection.insertAdjacentHTML('afterend', html);
}

function generateProjectSection(project) {
    const hasLink = project.links && project.links.length > 0;
    const mainLink = hasLink ? project.links[0].url : '#';
    
    let html = `<section>`;
    
    if (hasLink) {
        html += `<a href="${mainLink}" target="_blank"><h3>${project.title[currentLanguage]}</h3></a>`;
    } else {
        html += `<h3>${project.title[currentLanguage]}</h3>`;
    }
    
    html += `<h4>${project.type[currentLanguage]}</h4>`;
    
    if (project.technologies && project.technologies.length > 0) {
        project.technologies.forEach(tech => {
            html += `<img class="image icon" src="${tech.image}" alt="${tech.name}" />`;
        });
    }
    
    if (project.description[currentLanguage]) {
        html += `<p>${project.description[currentLanguage]}</p>`;
    }
    
    if (project.extraLink) {
        html += `<p>${project.extraLink[currentLanguage]}</p>`;
    }
    
    if (project.image) {
        html += `
            <span class="image example">
                ${hasLink ? `<a href="${mainLink}" target="_blank">` : ''}
                <img src="${project.image}" alt="" />
                ${hasLink ? `</a>` : ''}
            </span>
        `;
    }
    
    html += `</section>`;
    return html;
}

function generateEducationSection() {
    const article = document.getElementById('formation');
    if (!article) return;

    article.innerHTML = `
        <h2 class="major">${currentLanguage === 'en' ? 'Education' : 'Formation'}</h2>
        ${portfolioContent.education.map(edu => `
            <section>
                <h3>${edu.period[currentLanguage]}</h3>
                <span class="image main">
                    <a href="${edu.programLink}" target="_blank">
                        <img src="${edu.logo}" alt="" />
                    </a>
                </span>
                <h3>${edu.degree[currentLanguage]}</h3>
                <a href="${edu.programLink}">
                    <u><h4>${edu.program[currentLanguage]}</h4></u>
                </a>
                <p>${edu.description[currentLanguage]}</p>
            </section>
        `).join('')}
    `;
}

function generateExperienceSection() {
    const article = document.getElementById('experience');
    if (!article) return;

    article.innerHTML = `
        <h2 class="major">${currentLanguage === 'en' ? 'Experience' : 'Expérience'}</h2>
        ${portfolioContent.experience.map(exp => `
            <section>
                <h3>${exp.period[currentLanguage]}</h3>
                <span class="image main">
                    <img src="${exp.logo}" alt="" />
                </span>
                <h3>${exp.company}</h3>
                <h4>${exp.role[currentLanguage]}</h4>
                ${exp.technologies && exp.technologies.length > 0 ? 
                    exp.technologies.map(tech => 
                        `<img class="image icon" src="${tech.image}" alt="${tech.name}" />`
                    ).join('') : ''
                }
                <p>${exp.description[currentLanguage]}</p>
            </section>
        `).join('')}
    `;
}

function generatePassionsSection() {
    const article = document.getElementById('passions');
    if (!article) return;

    let html = '';
    
    portfolioContent.passions.forEach(passion => {
        html += `
            <h2 class="major">${passion.title[currentLanguage]}</h2>
            <p>${passion.description[currentLanguage]}</p>
        `;
        
        if (passion.links) {
            passion.links.forEach(link => {
                html += `
                    <p>
                        ${link.text}
                        <a target="_blank" href="${link.url}">
                            ${link.url}
                        </a>
                    </p>
                `;
            });
        }
        
        if (passion.iframes) {
            passion.iframes.forEach(iframe => {
                html += `
                    <iframe
                        frameborder="0"
                        src="${iframe.src}"
                        width="${iframe.width}"
                        height="${iframe.height}"
                    ><a href="${iframe.url}">${iframe.title}</a></iframe>
                `;
            });
        }
    });
    
    article.innerHTML = html;
}

function generateNavigation() {
    const navUl = document.querySelector('#header nav ul');
    if (!navUl) return;

    const navItems = [
        { href: '#formation', label: { en: 'Education', fr: 'Formation' } },
        { href: '#experience', label: { en: 'Experience', fr: 'Expérience' } },
        { href: '#passions', label: { en: 'Passions', fr: 'Passions' } }
    ];

    navUl.innerHTML = navItems.map(item => 
        `<li><a href="${item.href}">${item.label[currentLanguage]}</a></li>`
    ).join('') + generateSocialLinks(portfolioContent.profile.socialLinks);
}

function generateIntroduction() {
    const introSection = document.querySelector('#header .content .inner section');
    if (!introSection) return;

    const edu1 = currentLanguage === 'en' 
        ? "Bachelor's degree student in Computer Science at Université Laval"
        : "Étudiant au BAC en informatique à l'Université Laval";
    
    const edu2 = currentLanguage === 'en'
        ? "Diploma in Computer Science from Cégep de Sainte-Foy"
        : "DEC en Techniques de l'informatique au Cégep de Sainte-Foy";
    
    const about = currentLanguage === 'en'
        ? "I am a highly versatile and autonomous computer enthusiast. I am currently exploring which branch of computer science I want to start my career in."
        : "Je suis un passionné d'informatique très polyvalent et autonome. Je suis actuellement à un point où je cherche dans quelle branche de l'informatique je souhaite débuter ma carrière.";

    introSection.innerHTML = `
        <h1>${portfolioContent.profile.name}</h1>
        <h3>${edu1}</h3>
        <h3>${edu2}</h3>
        <p>${about}</p>
    `;
}

function switchLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    generateIntroduction();
    generateNavigation();
    
    const contentDiv = document.querySelector('#header .content');
    const innerDivs = contentDiv.querySelectorAll('.inner');
    for (let i = innerDivs.length - 1; i > 0; i--) {
        innerDivs[i].remove();
    }
    generateHomeProjects();
    
    generateEducationSection();
    generateExperienceSection();
    generatePassionsSection();
    
    const currentYearTitle = document.getElementById('current-year-title');
    if (currentYearTitle) {
        currentYearTitle.textContent = lang === 'en' ? 'Current Projects' : 'Projets Actuels';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    generateIntroduction();
    generateNavigation();
    generateHomeProjects();
    generateEducationSection();
    generateExperienceSection();
    generatePassionsSection();
    
    const footerNav = document.querySelector('#footer nav ul');
    if (footerNav) {
        footerNav.innerHTML = generateSocialLinks(portfolioContent.profile.socialLinks);
    }
});

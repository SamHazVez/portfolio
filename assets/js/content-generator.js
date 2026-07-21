let currentLanguage = "fr";
let portfolioContent = null;

const dom = {
    headerNavList: null,
    headerNav: null,
    footerNavList: null,
    headerContent: null,
    formationArticle: null,
    experienceArticle: null,
    passionsArticle: null,
    languageButtons: []
};

function t(value, fallback) {
    if (value == null) return fallback || "";
    if (typeof value === "string") return value;
    return value[currentLanguage] || value.fr || value.en || fallback || "";
}

function isVisible(item) {
    return !item || item.visible !== false;
}

function sectionIsVisible(sectionName) {
    if (!portfolioContent || !portfolioContent.visibility) return true;
    return portfolioContent.visibility[sectionName] !== false;
}

function getVisibleItems(items) {
    return (items || []).filter(isVisible);
}

function initializeLanguage() {
    let preferred = null;
    try {
        preferred = localStorage.getItem("portfolio-language");
    } catch (error) {
        preferred = null;
    }
    const fallback = portfolioContent.settings && portfolioContent.settings.defaultLanguage ? portfolioContent.settings.defaultLanguage : "fr";
    const supported = portfolioContent.settings && portfolioContent.settings.supportedLanguages ? portfolioContent.settings.supportedLanguages : ["fr", "en"];
    currentLanguage = supported.includes(preferred) ? preferred : fallback;
    document.documentElement.lang = currentLanguage;
}

function cacheDomReferences() {
    dom.headerNavList = document.querySelector("#header nav ul");
    dom.headerNav = document.querySelector("#header nav");
    dom.footerNavList = document.querySelector("#footer nav ul");
    dom.headerContent = document.querySelector("#header .content");
    dom.formationArticle = document.getElementById("formation");
    dom.experienceArticle = document.getElementById("experience");
    dom.passionsArticle = document.getElementById("passions");
    dom.languageButtons = Array.from(document.querySelectorAll(".lang-buttons [data-lang]"));
}

function generateSocialLinks(links) {
    return getVisibleItems(links).map(function(link) {
        return [
            "<li>",
            "<a href=\"" + link.url + "\" class=\"icon brands " + link.icon + "\" target=\"_blank\" rel=\"noopener noreferrer\">",
            "<span class=\"label\">" + link.label + "</span>",
            "</a>",
            "</li>"
        ].join("");
    }).join("");
}

function updateNavLayoutClasses() {
    if (!dom.headerNav) return;

    const navItems = Array.from(dom.headerNav.querySelectorAll("li"));
    navItems.forEach(function(item) {
        item.classList.remove("is-middle");
    });

    const isEven = navItems.length > 0 && navItems.length % 2 === 0;
    dom.headerNav.classList.toggle("use-middle", isEven);

    if (isEven) {
        navItems[navItems.length / 2].classList.add("is-middle");
    }
}

function renderNavigation() {
    if (!dom.headerNavList) return;

    const navItems = getVisibleItems((portfolioContent.ui && portfolioContent.ui.navigation) || []).filter(function(item) {
        const id = (item.href || "").replace("#", "");
        return !id || sectionIsVisible(id);
    });
    const navHtml = navItems.map(function(item) {
        return "<li><a href=\"" + item.href + "\">" + t(item.label) + "</a></li>";
    }).join("");

    const socialHtml = sectionIsVisible("headerSocial") ? generateSocialLinks(portfolioContent.profile.socialLinks) : "";
    dom.headerNavList.innerHTML = navHtml + socialHtml;
    updateNavLayoutClasses();
}

function renderFooter() {
    if (!dom.footerNavList) return;
    dom.footerNavList.innerHTML = sectionIsVisible("footerSocial") ? generateSocialLinks(portfolioContent.profile.socialLinks) : "";
}

function renderTechnologyIcons(technologies) {
    if (!technologies || technologies.length === 0) return "";
    return technologies.map(function(tech) {
        return "<img class=\"image icon\" src=\"" + tech.image + "\" alt=\"" + tech.name + "\" />";
    }).join("");
}

function renderProject(project) {
    const hasLink = project.links && project.links.length > 0;
    const mainLink = hasLink ? project.links[0].url : "";
    const title = t(project.title);

    const titleHtml = hasLink
        ? "<a href=\"" + mainLink + "\" target=\"_blank\" rel=\"noopener noreferrer\"><h3>" + title + "</h3></a>"
        : "<h3>" + title + "</h3>";

    const imageHtml = project.image
        ? "<span class=\"image example\">"
            + (hasLink ? "<a href=\"" + mainLink + "\" target=\"_blank\" rel=\"noopener noreferrer\">" : "")
            + "<img src=\"" + project.image + "\" alt=\"" + title + "\" />"
            + (hasLink ? "</a>" : "")
            + "</span>"
        : "";

    return [
        "<section>",
        titleHtml,
        "<h4>" + t(project.type) + "</h4>",
        renderTechnologyIcons(project.technologies),
        t(project.description) ? "<p>" + t(project.description) + "</p>" : "",
        project.extraLink ? "<p>" + t(project.extraLink) + "</p>" : "",
        imageHtml,
        "</section>"
    ].join("");
}

function groupProjectsByYear() {
    return getVisibleItems(portfolioContent.projects).reduce(function(groups, project) {
        const year = project.year;
        if (!groups[year]) {
            groups[year] = [];
        }
        groups[year].push(project);
        return groups;
    }, {});
}

function renderHomeContent() {
    if (!dom.headerContent) return;

    if (!sectionIsVisible("home")) {
        dom.headerContent.innerHTML = "";
        return;
    }

    const intro = portfolioContent.introduction;
    const projectGroups = groupProjectsByYear();
    const currentTitle = portfolioContent.ui && portfolioContent.ui.currentProjectsTitle ? t(portfolioContent.ui.currentProjectsTitle) : "";

    let html = [
        "<div class=\"inner\">",
        "<section>",
        "<h1>" + portfolioContent.profile.name + "</h1>",
        "<h3>" + t(intro.educationLine1) + "</h3>",
        "<h3>" + t(intro.educationLine2) + "</h3>",
        "<p>" + t(intro.about) + "</p>",
        "</section>",
        "</div>"
    ].join("");

    if (projectGroups.current && projectGroups.current.length > 0) {
        html += "<div class=\"inner\"><h2>" + currentTitle + "</h2>";
        html += projectGroups.current.map(renderProject).join("");
        html += "</div>";
    }

    const years = Object.keys(projectGroups)
        .filter(function(year) {
            return year !== "current";
        })
        .sort(function(a, b) {
            return Number(b) - Number(a);
        });

    years.forEach(function(year) {
        html += "<div class=\"inner\"><h2>" + year + "</h2>";
        html += projectGroups[year].map(renderProject).join("");
        html += "</div>";
    });

    dom.headerContent.innerHTML = html;
}

function renderEducationSection() {
    if (!dom.formationArticle) return;

    dom.formationArticle.hidden = !sectionIsVisible("formation");
    if (dom.formationArticle.hidden) {
        dom.formationArticle.innerHTML = "";
        return;
    }

    const title = t({ en: "Education", fr: "Formation" });
    const items = getVisibleItems(portfolioContent.education).map(function(edu) {
        return [
            "<section>",
            "<h3>" + t(edu.period) + "</h3>",
            "<span class=\"image main\">",
            "<a href=\"" + edu.programLink + "\" target=\"_blank\" rel=\"noopener noreferrer\">",
            "<img src=\"" + edu.logo + "\" alt=\"" + edu.institution + "\" />",
            "</a>",
            "</span>",
            "<h3>" + t(edu.degree) + "</h3>",
            "<a href=\"" + edu.programLink + "\" target=\"_blank\" rel=\"noopener noreferrer\">",
            "<u><h4>" + t(edu.program) + "</h4></u>",
            "</a>",
            "<p>" + t(edu.description) + "</p>",
            "</section>"
        ].join("");
    }).join("");

    dom.formationArticle.innerHTML = "<h2 class=\"major\">" + title + "</h2>" + items;
}

function renderExperienceSection() {
    if (!dom.experienceArticle) return;

    dom.experienceArticle.hidden = !sectionIsVisible("experience");
    if (dom.experienceArticle.hidden) {
        dom.experienceArticle.innerHTML = "";
        return;
    }

    const title = t({ en: "Experience", fr: "Expérience" });
    const items = getVisibleItems(portfolioContent.experience).map(function(exp) {
        return [
            "<section>",
            "<h3>" + t(exp.period) + "</h3>",
            "<span class=\"image main\">",
            "<img src=\"" + exp.logo + "\" alt=\"" + exp.company + "\" />",
            "</span>",
            "<h3>" + exp.company + "</h3>",
            "<h4>" + t(exp.role) + "</h4>",
            renderTechnologyIcons(exp.technologies),
            "<p>" + t(exp.description) + "</p>",
            "</section>"
        ].join("");
    }).join("");

    dom.experienceArticle.innerHTML = "<h2 class=\"major\">" + title + "</h2>" + items;
}

function renderPassionsSection() {
    if (!dom.passionsArticle) return;

    dom.passionsArticle.hidden = !sectionIsVisible("passions");
    if (dom.passionsArticle.hidden) {
        dom.passionsArticle.innerHTML = "";
        return;
    }

    const html = getVisibleItems(portfolioContent.passions).map(function(passion) {
        const links = getVisibleItems(passion.links || []).map(function(link) {
            return [
                "<p>",
                link.text + " ",
                "<a target=\"_blank\" rel=\"noopener noreferrer\" href=\"" + link.url + "\">" + link.url + "</a>",
                "</p>"
            ].join("");
        }).join("");

        const iframes = getVisibleItems(passion.iframes || []).map(function(iframe) {
            return [
                "<iframe frameborder=\"0\" src=\"" + iframe.src + "\" width=\"" + iframe.width + "\" height=\"" + iframe.height + "\">",
                "<a href=\"" + iframe.url + "\">" + iframe.title + "</a>",
                "</iframe>"
            ].join("");
        }).join("");

        return [
            "<h2 class=\"major\">" + t(passion.title) + "</h2>",
            "<p>" + t(passion.description) + "</p>",
            links,
            iframes
        ].join("");
    }).join("");

    dom.passionsArticle.innerHTML = html;
}

function updateLanguageButtons() {
    dom.languageButtons.forEach(function(button) {
        const isActive = button.getAttribute("data-lang") === currentLanguage;
        button.setAttribute("aria-pressed", isActive ? "true" : "false");
        button.classList.toggle("active", isActive);
    });
}

function renderAll() {
    document.documentElement.lang = currentLanguage;
    renderNavigation();
    renderFooter();
    renderHomeContent();
    renderEducationSection();
    renderExperienceSection();
    renderPassionsSection();
    updateLanguageButtons();
}

function switchLanguage(lang) {
    if (!portfolioContent) return;
    const supported = portfolioContent.settings && portfolioContent.settings.supportedLanguages ? portfolioContent.settings.supportedLanguages : ["fr", "en"];
    if (!supported.includes(lang)) return;

    currentLanguage = lang;
    try {
        localStorage.setItem("portfolio-language", lang);
    } catch (error) {
        // Ignore storage errors and continue rendering.
    }
    renderAll();
}

function bindLanguageButtons() {
    dom.languageButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const lang = button.getAttribute("data-lang");
            switchLanguage(lang);
        });
    });
}

function validateTranslations() {
    if (!portfolioContent) return;
    const supported = portfolioContent.settings && portfolioContent.settings.supportedLanguages ? portfolioContent.settings.supportedLanguages : ["fr", "en"];
    const missingKeys = [];

    function walk(node, path) {
        if (!node || typeof node !== "object") return;
        if (Array.isArray(node)) {
            node.forEach(function(item, index) {
                walk(item, path + "[" + index + "]");
            });
            return;
        }

        const keys = Object.keys(node);
        const isTranslationNode = supported.every(function(lang) {
            return keys.includes(lang);
        });

        if (isTranslationNode) {
            supported.forEach(function(lang) {
                if (!node[lang]) {
                    missingKeys.push(path + "." + lang);
                }
            });
            return;
        }

        keys.forEach(function(key) {
            walk(node[key], path ? path + "." + key : key);
        });
    }

    walk(portfolioContent, "portfolioContent");

    if (missingKeys.length > 0) {
        console.warn("Missing translations:", missingKeys);
    }
}

window.switchLanguage = switchLanguage;

function renderLoadError(message) {
    if (!dom.headerContent) return;
    dom.headerContent.innerHTML = "<div class=\"inner\"><section><h2>Content error</h2><p>" + message + "</p></section></div>";
}

function loadContent() {
    return fetch("assets/content/content.json", { cache: "no-store" })
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Could not load assets/content/content.json");
            }
            return response.json();
        })
        .then(function(data) {
            portfolioContent = data;
        });
}

document.addEventListener("DOMContentLoaded", function() {
    cacheDomReferences();

    loadContent()
        .then(function() {
            initializeLanguage();
            bindLanguageButtons();
            renderAll();
            validateTranslations();
        })
        .catch(function(error) {
            renderLoadError(error.message || "Unknown error while loading content");
            console.error(error);
        });
});

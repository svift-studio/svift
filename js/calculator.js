const websiteIncluded = [
"Unique Customized Design",
"Prototyping & Testing",
"Target Market Analysis",
"SEO Implementation",
"Analytics Integration",
"Site Speed Optimization",
"Cross-Platform Responsive",
"HTML5, CSS3 & JavaScript",
"WCAG & ADA Compliant",
"Satisfaction Guarantee"
];

const maintenanceIncluded = [
"Functionality Checks",
"Dependency Updates",
"Site Analytics & Customer Data",
"Uptime Monitoring",
"Domain & SSL Renewals",
"Priority Bug Fixing",
"Backup Management",
"Browser and Device Testing",
"Site Speed Optimization"
];

const marketingIncluded = [
"Functionality Checks",
"Dependency Updates",
"Site Analytics & Customer Data",
"Uptime Monitoring",
"Domain & SSL Renewals",
"Priority Bug Fixing",
"Backup Management",
"Browser and Device Testing",
"Site Speed Optimization"
];

const animationSpeed = 0; // in ms

const websiteContent = document.querySelector('.included-website .included-content');
const maintenanceContent = document.querySelector('.included-maintenance .included-content');
const marketingContent = document.querySelector('.included-marketing .included-content');

const calculator = document.querySelector('.calculator');
const pagesSlider = document.querySelector('.pages-slider');
const priceOnceNode = document.querySelector('.price-once');
const priceMonthlyNode = document.querySelector('.price-monthly');
const deliveryNode = document.querySelector('.delivery');
const pageNumberNode = document.querySelector('.page-number');
const checkboxes = document.querySelector('.checkboxes-content');
const checkboxItems = document.querySelectorAll('.checkbox-item');

let sliderActive = false;

const basePriceWebsite = 10000;
const basePriceMaintenance = 500;
const basePriceMarketing = 4900;

const costPerPageWebsite = 11000;
const costPerPageMaintenance = 1200;

// 1=day, 0.1=2.4h
const baseTime = 1; 
const timePerPage = 1;

let priceOnce;
let priceMonthly;
let deliveryTime;

let website = 1;
let maintenance = 1;
let marketing = 0;
let pages = 3;
updateCalc()

includedItems('website')
includedItems('maintenance')
includedItems('marketing')

function updateCalc() {
    pages = Math.round(pagesSlider.value/100);
    priceOnce = 
        website*(basePriceWebsite+(costPerPageWebsite*pages)); 
    priceMonthly = 
        (maintenance*(basePriceMaintenance+(costPerPageMaintenance*pages)))+
        (marketing*basePriceMarketing);
    deliveryTime = baseTime+website*(timePerPage*pages);
    priceOnceNode.textContent = addSpace(priceOnce.toFixed());
    priceMonthlyNode.textContent = addSpace(priceMonthly.toFixed());
    deliveryNode.textContent = deliveryTime.toFixed();
    pageNumberNode.textContent = pages;
}

checkboxes.addEventListener('click', (e) => {
    if (!e.target.classList.contains('checkbox-item')) return;
    e.target.classList.toggle('active')

    if (e.target.id === 'website') {
        website===0 ? website=1 : website=0;
    }
    if (e.target.id === 'maintenance') maintenance===0 ? maintenance=1 : maintenance=0;
    if (e.target.id === 'marketing') marketing===0 ? marketing=1 : marketing=0;
    
    updateCalc()
    includedItems(e.target.id)
})

function includedItems(element) {
    switch (element) {
        case 'website':
            website === 1 ? addElements(websiteIncluded, websiteContent) : removeElements(websiteContent);
            break;
        case 'maintenance':
            maintenance === 1 ? addElements(maintenanceIncluded, maintenanceContent) : removeElements(maintenanceContent);
            break;
        case 'marketing':
            marketing === 1 ? addElements(marketingIncluded, marketingContent) : removeElements(marketingContent);
            break;
    }
}

function addElements(content, container) {
    let timeout = 0;
    container.parentNode.querySelector('p').style.display = 'flex';
    container.parentNode.style.display = 'flex';
    container.parentNode.querySelector('p').style.opacity = '1';
    
    content.map(element => {
        let newItem = document.createElement('div');
        newItem.classList.add('pill')
        newItem.textContent = element;
        setTimeout(() => {
            container.appendChild(newItem);
        }, timeout);
        timeout+=animationSpeed;
    })
}

function removeElements(container) {
    let timeout = 0;
    container.parentNode.querySelector('p').style.opacity = '0';
    setTimeout(() => {
        container.parentNode.querySelector('p').style.display = 'none';
        container.parentNode.style.display = 'none';
    }, 100);
    
    container.querySelectorAll('.pill').forEach(element => {
        setTimeout(() => {
            element.remove();         
        }, timeout);
        timeout+=animationSpeed;
    })
}

function addSpace(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

setInterval(() => {
    if (!sliderActive) return;
    updateCalc();
}, 100);

pagesSlider.ontouchstart = () => sliderActive = true;
pagesSlider.ontouchend = () => {
    sliderActive = false;
    pagesSlider.value = pages*100;
}
pagesSlider.onmousedown = () => sliderActive = true;
pagesSlider.onmouseup = () => {
    sliderActive = false;
    pagesSlider.value = pages*100;
}

pagesSlider.onchange = () => updateCalc();
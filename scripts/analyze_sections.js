import content from '../src/content/siteContent.js';

function analyzePage(name) {
  const html = content.pages[name] || '';
  const sections = [...html.matchAll(/<!--\s*Start\s+([^-]+)\s*-->/gi)].map(m => m[1].trim());
  const headings = [...html.matchAll(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log(`\n================== ${name} ==================`);
  console.log('Sections:', sections);
  console.log('Headings:', headings.slice(0, 10));
}

['About', 'Services', 'ServiceDetails', 'Portfolio', 'PortfolioDetails', 'Team', 'TeamDetails', 'Faq', 'Contact', 'Blog', 'BlogDetails', 'Pricing'].forEach(analyzePage);

import fs from 'fs';
import siteContent from '../src/content/siteContent.js';

const targetBlock = `<div class="cs_skill_progress_wrapper">
                <div class="cs_skill_progress">
                  <div class="cs_progress_head cs_fs_24 cs_semibold cs_primary_color cs_primary_font cs_mb_20 text-uppercase">WEIGHT REDUCTION (VS PRECAST)</div>
                  <div class="cs_progress cs_type_1" data-progress="50">
                    <div class="cs_progress_in"><span class=" cs_fs_24 cs_semibold cs_primary_color cs_primary_font">50% Lighter</span></div>
                  </div>
                </div>
                <div class="cs_skill_progress">
                  <div class="cs_progress_head cs_fs_24 cs_semibold cs_primary_color cs_primary_font cs_mb_20 text-uppercase">DEMOULDING SPEED & ACCURACY</div>
                  <div class="cs_progress cs_type_1" data-progress="95">
                    <div class="cs_progress_in"><span class=" cs_fs_24 cs_semibold cs_primary_color cs_primary_font">24h Demould</span></div>
                  </div>
                </div>
                <div class="cs_skill_progress">
                  <div class="cs_progress_head cs_fs_24 cs_semibold cs_primary_color cs_primary_font cs_mb_40 text-uppercase">TESTED GRADE 10P & 18P COMPLIANCE</div>
                </div>
              </div>`;

const replacementBlock = `<div class="cs_skill_progress_wrapper">
                <div class="cs_skill_progress">
                  <div class="cs_progress_head cs_fs_24 cs_semibold cs_primary_color cs_primary_font cs_mb_20 text-uppercase">WEIGHT REDUCTION (VS PRECAST)</div>
                  <div class="cs_progress cs_type_1" data-progress="50">
                    <div class="cs_progress_in"><span class="cs_fs_24 cs_semibold cs_primary_color cs_primary_font">50% Lighter</span></div>
                  </div>
                </div>
                <div class="cs_skill_progress">
                  <div class="cs_progress_head cs_fs_24 cs_semibold cs_primary_color cs_primary_font cs_mb_20 text-uppercase">DEMOULDING SPEED & ACCURACY</div>
                  <div class="cs_progress cs_type_1" data-progress="95">
                    <div class="cs_progress_in"><span class="cs_fs_24 cs_semibold cs_primary_color cs_primary_font">24h Demould</span></div>
                  </div>
                </div>
                <div class="cs_skill_progress">
                  <div class="cs_progress_head cs_fs_24 cs_semibold cs_primary_color cs_primary_font cs_mb_20 text-uppercase">TESTED GRADE 10P & 18P COMPLIANCE</div>
                  <div class="cs_progress cs_type_1" data-progress="100">
                    <div class="cs_progress_in"><span class="cs_fs_24 cs_semibold cs_primary_color cs_primary_font">100% Tested</span></div>
                  </div>
                </div>
              </div>`;

siteContent.pages.About = siteContent.pages.About.replace(targetBlock, replacementBlock);

const fileOutput = `const siteContent = ${JSON.stringify(siteContent, null, 2)};\n\nexport default siteContent;\n`;

fs.writeFileSync('./src/content/siteContent.js', fileOutput, 'utf-8');
console.log('Successfully updated About page progress bars in siteContent.js');

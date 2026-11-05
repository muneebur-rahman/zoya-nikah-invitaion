import React from 'react';
import { renderToString } from 'react-dom/server';
import UrduInvitationSection from './src/components/UrduInvitationSection.jsx';
import { INVITATION_DATA } from './src/data/invitationData.js';
import fs from 'fs';

function runTests() {
  console.log('=== RUNNING URDU INVITATION NAME SELECTION & VISIBILITY TESTS ===\n');
  let passed = 0;
  let total = 0;

  function assert(condition, message) {
    total++;
    if (condition) {
      console.log(`PASS: ${message}`);
      passed++;
    } else {
      console.error(`FAIL: ${message}`);
    }
  }

  // TEST 1: Default Render ('all')
  const htmlDefault = renderToString(React.createElement(UrduInvitationSection, { initialOption: 'all' }));
  assert(htmlDefault.includes('زویا فردوس'), 'Default render includes Bride name "زویا فردوس"');
  assert(htmlDefault.includes('مصوّر امین'), 'Default render includes Groom name "مصوّر امین"');
  assert(htmlDefault.includes('dir="rtl"'), 'Container has proper Urdu RTL direction');
  assert(htmlDefault.includes('font-urdu'), 'Card uses Noto Nastaliq Urdu font');

  // TEST 2: Option A (Bride Selected)
  const htmlOptionA = renderToString(React.createElement(UrduInvitationSection, { initialOption: 'optionA' }));
  assert(htmlOptionA.includes('زویا فردوس'), 'Option A: Bride name "زویا فردوس" is visible and present');
  assert(htmlOptionA.includes('مصوّر امین'), 'Option A: Groom name "مصوّر امین" is STILL visible and NOT hidden/unmounted');
  assert(htmlOptionA.includes('Option A • منتخب دلہن'), 'Option A: Bride has active Option A badge');
  assert(htmlOptionA.includes('urdu-name-yellow-bg'), 'Option A: Yellow background is applied');

  // TEST 3: Option B (Groom Selected)
  const htmlOptionB = renderToString(React.createElement(UrduInvitationSection, { initialOption: 'optionB' }));
  assert(htmlOptionB.includes('مصوّر امین'), 'Option B: Groom name "مصوّر امین" is visible and present');
  assert(htmlOptionB.includes('زویا فردوس'), 'Option B: Bride name "زویا فردوس" is STILL visible and NOT hidden/unmounted');
  assert(htmlOptionB.includes('Option B • منتخب دولہا'), 'Option B: Groom has active Option B badge');
  assert(htmlOptionB.includes('urdu-name-yellow-bg'), 'Option B: Yellow background is applied');

  // TEST 4: Custom Names Testing (Requirement 6)
  const customBride = 'عائشہ فاطمہ';
  const customGroom = 'زید خان';
  const htmlCustomA = renderToString(React.createElement(UrduInvitationSection, {
    initialOption: 'optionA',
    brideUrduName: customBride,
    groomUrduName: customGroom,
  }));
  assert(htmlCustomA.includes(customBride), 'Custom Names: Option A displays custom bride "عائشہ فاطمہ"');
  assert(htmlCustomA.includes(customGroom), 'Custom Names: Option A still displays custom groom "زید خان"');

  const htmlCustomB = renderToString(React.createElement(UrduInvitationSection, {
    initialOption: 'optionB',
    brideUrduName: customBride,
    groomUrduName: customGroom,
  }));
  assert(htmlCustomB.includes(customGroom), 'Custom Names: Option B displays custom groom "زید خان"');
  assert(htmlCustomB.includes(customBride), 'Custom Names: Option B still displays custom bride "عائشہ فاطمہ"');

  // TEST 5: Layering & Z-Index Architecture (Requirement 7: Yellow background does not cover text)
  assert(htmlDefault.includes('urdu-name-container'), 'Uses urdu-name-container with isolation and relative positioning');
  assert(htmlDefault.includes('z-0'), 'Yellow background layer is placed at z-0');
  assert(htmlDefault.includes('pointer-events-none'), 'Background layer has pointer-events-none to prevent event interception');
  assert(htmlDefault.includes('relative z-10'), 'Urdu name text is placed at relative z-10 above the background');
  assert(htmlDefault.includes('urdu-name-display'), 'Urdu name text uses .urdu-name-display styling');

  // TEST 6: CSS File Verification
  const cssContent = fs.readFileSync('./src/index.css', 'utf-8');
  assert(cssContent.includes('*::selection'), 'CSS includes universal *::selection override');
  assert(cssContent.includes('-webkit-text-fill-color: #011c15 !important;'), 'Selection sets solid dark text fill color (prevents transparent text vanishing)');
  assert(cssContent.includes('.urdu-name-display'), 'CSS defines .urdu-name-display with z-index: 10');
  assert(cssContent.includes('color: #faecc4 !important;'), 'CSS specifies solid text color to prevent WebKit clipping bug');
  assert(cssContent.includes('.urdu-name-yellow-bg'), 'CSS defines .urdu-name-yellow-bg with z-index: 0 and pointer-events: none');

  console.log(`\n=== RESULTS: ${passed}/${total} TESTS PASSED ===\n`);
  if (passed !== total) {
    process.exit(1);
  }
}

runTests();

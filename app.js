// ==========================================================================
// FUME Client Intelligence System - Application Logic
// ==========================================================================

// 1. Raw Conversation Log Data
const transcriptData = [
    {
        day: 1,
        messages: [
            { sender: "Client", text: "Good morning. Slept only around 5 hours last night. Daughter had exams, so I was awake late." },
            { sender: "Client", text: "Did some mopping, sweeping, Surya Namaskar and walking inside the house." },
            { sender: "Client", text: "Generally feeling happy today." },
            { sender: "Coach", text: "Good. Please keep sharing your daily updates for water, sleep, steps, exercise and meals." },
            { sender: "Client", text: "Had tea and some soaked nuts." },
            { sender: "Client", text: "Lunch was kadhi with soya and green vegetables." },
            { sender: "Coach", text: "Did you have salad before lunch?" },
            { sender: "Client", text: "No. I still need to stock vegetables properly. Will do it tomorrow." },
            { sender: "Client", text: "Feeling some acidity since morning." },
            { sender: "Coach", text: "Did it start after eating something?" },
            { sender: "Client", text: "No. Slept very late and did a lot of work today. Got up with acidity." },
            { sender: "Coach", text: "Did you walk after meals?" },
            { sender: "Client", text: "Yes, around 15 minutes." }
        ]
    },
    {
        day: 2,
        messages: [
            { sender: "Client", text: "Walk and water done." },
            { sender: "Client", text: "Can I have banana stem, mint and ginger juice?" },
            { sender: "Coach", text: "Yes." },
            { sender: "Client", text: "Tea 1 cup and 1 apple." },
            { sender: "Client", text: "Didn’t eat much in the evening. Just a small piece of paneer." },
            { sender: "Client", text: "Still having acidity and bloating." },
            { sender: "Coach", text: "Please don’t skip meals completely. Try to keep the meals simple." }
        ]
    },
    {
        day: 3,
        messages: [
            { sender: "Client", text: "I had to go to school after a few days. Very hectic morning." },
            { sender: "Client", text: "Coconut water, tea, prunes and some seeds till now." },
            { sender: "Coach", text: "Nothing else till now?" },
            { sender: "Client", text: "No. I didn’t get time." },
            { sender: "Coach", text: "Slowly we need to adjust the routine around your school schedule also." },
            { sender: "Client", text: "Yes. I know it will take time." },
            { sender: "Client", text: "Lunch had lots of vegetables, curd and some protein." },
            { sender: "Client", text: "Forgot ACV today. Not yet in the habit." },
            { sender: "Coach", text: "Set a reminder around meal timings." },
            { sender: "Client", text: "Yes, will do." },
            { sender: "Accountability Coach", text: "Today’s update: Water 4 litres, Sleep 5 hours, Steps around 8,000, Exercise only walking." }
        ]
    },
    {
        day: 4,
        messages: [
            { sender: "Client", text: "Breakfast was 1.5 vegetable chapatis with seeds and ajwain." },
            { sender: "Client", text: "One cup tea." },
            { sender: "Client", text: "4,500 steps so far." },
            { sender: "Coach", text: "Did you carry lunch to school?" },
            { sender: "Client", text: "Yes." },
            { sender: "Client", text: "ACV done today." },
            { sender: "Client", text: "Lunch done. Trying to eat slowly." },
            { sender: "Coach", text: "Good. Chew properly and avoid rushing meals." },
            { sender: "Client", text: "Did around 20 minutes walking, stretching and breathing today. Feeling really good." }
        ]
    },
    {
        day: 5,
        messages: [
            { sender: "Client", text: "Weight seems slightly up even though I’m eating almost half of what I used to eat." },
            { sender: "Coach", text: "It is not always about eating less. Your body needs adequate nutrition." },
            { sender: "Coach", text: "Protein seems low in breakfast on some days." },
            { sender: "Client", text: "I didn’t have sprouts today. Have ordered them." },
            { sender: "Coach", text: "You can also have boiled chana, moong or chhole." },
            { sender: "Client", text: "Forgot to mention, I had roasted chana at school." },
            { sender: "Client", text: "Did 20 minutes stretching and running." }
        ]
    },
    {
        day: 6,
        messages: [
            { sender: "Client", text: "Yesterday energy was very good. Today feeling low again." },
            { sender: "Client", text: "Bloating is back and I feel like I have gained weight." },
            { sender: "Coach", text: "Food intake was low today. Protein was also missing." },
            { sender: "Client", text: "I had roasted chana and kala chana." },
            { sender: "Client", text: "I am not getting enough time to plan meals. Next week should be easier." },
            { sender: "Coach", text: "That could be one of the main barriers right now. Let’s keep the plan practical." }
        ]
    },
    {
        day: 7,
        messages: [
            { sender: "Client", text: "Steps 6,000 today." },
            { sender: "Client", text: "Sleep around 5.5 hours." },
            { sender: "Client", text: "Did mopping and sweeping also, lots of movement." },
            { sender: "Client", text: "Breakfast and lunch were okay." },
            { sender: "Client", text: "Sorry I missed your call. There was a stressful situation at work." },
            { sender: "Accountability Coach", text: "Tried calling you. Please update when free." },
            { sender: "Client", text: "Had a very hectic day today." },
            { sender: "Client", text: "There is a lot of office pressure and politics going on." },
            { sender: "Client", text: "During a meeting today I was so tired that my head went down on the table and I actually slept for a few seconds." },
            { sender: "Client", text: "Feeling very low." },
            { sender: "Client", text: "I feel I can sleep for days." },
            { sender: "Coach", text: "That sounds like a very exhausting day. Please rest today. We also need to look at your sleep and stress more carefully." }
        ]
    },
    {
        day: 8,
        messages: [
            { sender: "Client", text: "Slept better last night, around 8 hours." },
            { sender: "Client", text: "Energy feels much better today." },
            { sender: "Client", text: "Water around 3.5 litres." },
            { sender: "Client", text: "Did 30 minutes exercise." },
            { sender: "Client", text: "Steps around 8,000." },
            { sender: "Client", text: "Weight is around 83 kg. Waist almost same." },
            { sender: "Client", text: "Still having bloating on and off." },
            { sender: "Client", text: "But overall energy is much better than before." },
            { sender: "Coach", text: "That is good progress. Let’s continue tracking sleep, bloating, meals and movement consistently." }
        ]
    }
];

// 2. Extracted Client Intelligence State
const clientState = {
    weekly_summary: "The client is experiencing energy fluctuations and gut discomfort (acidity, bloating) triggered by a demanding school and work schedule, leading to poor sleep hygiene (5-5.5 hrs average) and erratic meal planning. Positive indicators include immediate energy recovery when sleep is stabilized (8 hrs on Day 8), adherence to water intake targets (3.5-4L), and responsiveness to coach instructions (implementing ACV, chewing slowly, and starting movement habits). Current metrics show weight at 83kg.",

    risk_flags: [
        { severity: "HIGH", title: "Extreme Fatigue & Microsleeps", desc: "Client reported falling asleep on the table during a meeting on Day 7 due to office pressure and severe sleep debt." },
        { severity: "MEDIUM", title: "Nutritional Under-fueling", desc: "Eating nearly half of baseline volume (Day 5), skipping evening meals (Day 2), and missing breakfast protein (Days 5 & 6)." },
        { severity: "MEDIUM", title: "Recurrent Acid Reflux & Bloating", desc: "Acidity since Day 1 and recurring bloating on Days 2, 6, and 8, correlating with school scheduling stress and fatigue." }
    ],

    coach_actions: [
        "Prioritize sleep hygiene over calorie deficits: Assist client in carving out a consistent 7.5-hour sleep window.",
        "Co-create a 'School Day' meal plan: Simple, high-protein, portable lunches requiring minimal prep.",
        "Weight validation counseling: Reassure the client that the scale fluctuation is water retention from cortisol/bloating, preventing further calorie restriction.",
        "ACV reminder validation: Check if client has successfully automated meal-time notifications."
    ],

    barriers: [
        "Time Constraints: Re-entry to school schedule and heavy work pressure leaves insufficient meal-planning time.",
        "Workplace Stress: Hectic office politics causing emotional fatigue and sleep disruptions.",
        "Poor Sleep Hygiene: Staying up late due to family commitments (exams) or work exhaustion."
    ],

    pending_actions: [
        { desc: "Stock vegetables properly for salad inclusion.", owner: "Client", status: "Open" },
        { desc: "Establish school day meal routines and carry lunch box.", owner: "Client", status: "Resolved" },
        { desc: "Set ACV reminders around meal timings.", owner: "Client", status: "Resolved" },
        { desc: "Receive sprouts order and incorporate moong/chana in breakfast.", owner: "Client", status: "Open" }
    ],

    metrics: {
        sleep: [
            { day: 1, hours: 5, classification: "Client-Reported Information" },
            { day: 2, hours: null, classification: "Missing / Unavailable Information" },
            { day: 3, hours: 5, classification: "Confirmed Fact" },
            { day: 4, hours: null, classification: "Missing / Unavailable Information" },
            { day: 5, hours: null, classification: "Missing / Unavailable Information" },
            { day: 6, hours: null, classification: "Missing / Unavailable Information" },
            { day: 7, hours: 5.5, classification: "Confirmed Fact" },
            { day: 8, hours: 8, classification: "Confirmed Fact" }
        ],
        steps: [
            { day: 1, steps: null, classification: "Missing / Unavailable Information" },
            { day: 2, steps: null, classification: "Missing / Unavailable Information" },
            { day: 3, steps: 8000, classification: "Confirmed Fact" },
            { day: 4, steps: 4500, classification: "Client-Reported Information" },
            { day: 5, steps: null, classification: "Missing / Unavailable Information" },
            { day: 6, steps: null, classification: "Missing / Unavailable Information" },
            { day: 7, steps: 6000, classification: "Confirmed Fact" },
            { day: 8, steps: 8000, classification: "Confirmed Fact" }
        ],
        water: [
            { day: 1, litres: null, classification: "Missing / Unavailable Information" },
            { day: 2, litres: null, classification: "Client-Reported Information" }, // "Water done" but no quantity
            { day: 3, litres: 4.0, classification: "Confirmed Fact" },
            { day: 4, litres: null, classification: "Missing / Unavailable Information" },
            { day: 5, litres: null, classification: "Missing / Unavailable Information" },
            { day: 6, litres: null, classification: "Missing / Unavailable Information" },
            { day: 7, litres: null, classification: "Missing / Unavailable Information" },
            { day: 8, litres: 3.5, classification: "Confirmed Fact" }
        ]
    },

    nutrition_log: [
        { day: 1, breakfast: "Tea, soaked nuts", lunch: "Kadhi with soya & green veg", dinner: "Not mentioned", notes: "Forgot salad pre-lunch; needs to stock vegetables" },
        { day: 2, breakfast: "Tea, 1 apple", lunch: "Not mentioned", dinner: "Paneer (small piece)", notes: "Skipped evening meals; warned by coach" },
        { day: 3, breakfast: "Coconut water, tea, prunes, seeds", lunch: "Curd, protein, high veg", dinner: "Not mentioned", notes: "Missed morning meals due to school rush; forgot ACV" },
        { day: 4, breakfast: "1.5 vegetable chapatis with seeds/ajwain, tea", lunch: "Carried box (slow chewing)", dinner: "Not mentioned", notes: "ACV taken successfully" },
        { day: 5, breakfast: "No sprouts (ordered), roasted chana", lunch: "Half portion of normal intake", dinner: "Not mentioned", notes: "Under-eating protein" },
        { day: 6, breakfast: "Missing protein", lunch: "Roasted chana and kala chana", dinner: "Not mentioned", notes: "Low food volume; planning deficit" },
        { day: 7, breakfast: "Noted as 'Okay'", lunch: "Noted as 'Okay'", dinner: "Not mentioned", notes: "Very hectic and stressful workday" },
        { day: 8, breakfast: "Not mentioned", lunch: "Not mentioned", dinner: "Not mentioned", notes: "Adherence stabilized; bloating reported on/off" }
    ],

    grounded_evidence: [
        { id: "e1", day: 1, type: "Client-Reported Information", finding: "Sleep was limited to 5 hours due to daughter's exams.", quote: "Slept only around 5 hours last night. Daughter had exams, so I was awake late." },
        { id: "e2", day: 1, type: "Client-Reported Information", finding: "Acidity began early in the morning, triggered by late sleep and chore exhaustion.", quote: "No. Slept very late and did a lot of work today. Got up with acidity." },
        { id: "e3", day: 2, type: "Client-Reported Information", finding: "Under-eating and skipping evening meals.", quote: "Didn’t eat much in the evening. Just a small piece of paneer." },
        { id: "e4", day: 3, type: "Confirmed Fact", finding: "Sleep logged at 5 hours, steps at 8,000, water at 4 litres.", quote: "Today’s update: Water 4 litres, Sleep 5 hours, Steps around 8,000, Exercise only walking." },
        { id: "e5", day: 3, type: "Client-Reported Information", finding: "Forgets to take Apple Cider Vinegar (ACV) routinely.", quote: "Forgot ACV today. Not yet in the habit." },
        { id: "e6", day: 5, type: "Client-Reported Information", finding: "Scale weight is slightly elevated despite extreme calorie restriction.", quote: "Weight seems slightly up even though I’m eating almost half of what I used to eat." },
        { id: "e7", day: 6, type: "AI-Generated Inference", finding: "Meal planning deficit identified as the core operational barrier.", quote: "I am not getting enough time to plan meals. Next week should be easier." },
        { id: "e8", day: 7, type: "Client-Reported Information", finding: "Microsleep episode occurred during a workplace meeting due to sleep deficit.", quote: "During a meeting today I was so tired that my head went down on the table and I actually slept for a few seconds." },
        { id: "e9", day: 7, type: "Client-Reported Information", finding: "Severe work politics and mental exhaustion.", quote: "There is a lot of office pressure and politics going on." },
        { id: "e10", day: 8, type: "Confirmed Fact", finding: "Scale weight recorded at 83kg; energy levels rebounded after an 8-hour sleep.", quote: "Weight is around 83 kg. Waist almost same." },
        { id: "e11", day: 1, type: "Missing / Unavailable Information", finding: "Exact daily water volume is missing on Days 1, 2, 4, 5, 6, 7.", quote: null }
    ]
};

// 3. UI State Management
let isEditingSummary = false;
let isEditingBarriers = false;
let isEditingPending = false;
let reviewStatus = "Pending"; // "Pending", "Approved", "Rejected"

// 4. Initializer
document.addEventListener("DOMContentLoaded", () => {
    initTabs();
    renderTranscript();
    renderOverview();
    renderCharts();
    renderNutritionTable();
    renderTaxonomy();
    renderBarriersAndActions();
    renderReviewJSON();
    initActionListeners();
});

// 5. Tab Controller
function initTabs() {
    const tabButtons = document.querySelectorAll(".tab-btn");
    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            tabButtons.forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

            btn.classList.add("active");
            const targetTab = btn.getAttribute("data-tab");
            document.getElementById(`tab-${targetTab}`).classList.add("active");

            // Re-render charts to compute correct element widths if tab trackers is active
            if (targetTab === 'trackers') {
                setTimeout(renderCharts, 50);
            }
        });
    });
}

// 6. Dialogue Bubble Renderer (Left Panel)
function renderTranscript() {
    const container = document.getElementById("transcript-container");
    container.innerHTML = "";

    transcriptData.forEach(dayLog => {
        // Day Divider
        const sep = document.createElement("div");
        sep.className = "day-separator";
        sep.innerHTML = `
            <div class="day-separator-line"></div>
            <div class="day-separator-text">Day ${dayLog.day}</div>
            <div class="day-separator-line"></div>
        `;
        container.appendChild(sep);

        // Day bubbles
        dayLog.messages.forEach(msg => {
            const bubble = document.createElement("div");
            bubble.className = `chat-bubble ${msg.sender === 'Client' ? 'bubble-client' : 'bubble-coach'}`;
            // Add identifying attributes for grounding highlights
            bubble.setAttribute("data-day", dayLog.day);

            bubble.innerHTML = `
                <span class="bubble-sender">${msg.sender}</span>
                <span class="bubble-message-text">${msg.text}</span>
            `;
            container.appendChild(bubble);
        });
    });
}


// 7. Render Overview Tab
function renderOverview() {
    // Summary
    document.getElementById("summary-text").textContent = clientState.weekly_summary;
    document.getElementById("summary-textarea").value = clientState.weekly_summary;

    // Risk Flags
    const riskContainer = document.getElementById("risk-flags-list");
    riskContainer.innerHTML = "";
    clientState.risk_flags.forEach(flag => {
        const item = document.createElement("div");
        item.className = `risk-flag-item severity-${flag.severity}`;
        item.innerHTML = `
            <span class="flag-badge flag-badge-${flag.severity}">${flag.severity}</span>
            <div class="flag-content">
                <div class="flag-title">${flag.title}</div>
                <div class="flag-desc">${flag.desc}</div>
            </div>
        `;
        riskContainer.appendChild(item);
    });

    // Recommended Actions
    const actionContainer = document.getElementById("coach-actions-list");
    actionContainer.innerHTML = "";
    clientState.coach_actions.forEach(act => {
        const item = document.createElement("div");
        item.className = "coach-action-item";
        item.textContent = act;
        actionContainer.appendChild(item);
    });
}

// 8. Custom Interactive SVG Chart Drawer (Trackers Tab)
function renderCharts() {
    // Draw Sleep Chart
    drawSVGLineChart(
        "sleep-chart",
        clientState.metrics.sleep,
        "hours",
        [0, 10],
        "hrs",
        "hsl(250, 85%, 65%)"
    );

    // Draw Steps Chart
    drawSVGBarChart(
        "steps-chart",
        clientState.metrics.steps,
        "steps",
        [0, 10000],
        "",
        "hsl(180, 85%, 55%)"
    );

    // Draw Water Chart
    drawSVGLineChart(
        "water-chart",
        clientState.metrics.water,
        "litres",
        [0, 5],
        "L",
        "hsl(205, 90%, 55%)"
    );
}

// Helper: Line Chart with Grounded/Missing indicators
function drawSVGLineChart(containerId, data, dataKey, yRange, unit, strokeColor) {
    const container = document.getElementById(containerId);
    const width = container.clientWidth || 250;
    const height = 160;
    const padding = 25;

    let svg = `<svg width="${width}" height="${height}" style="overflow: visible;">`;

    // Draw grid lines
    const gridCount = 4;
    for (let i = 0; i <= gridCount; i++) {
        const y = padding + (i * (height - 2 * padding) / gridCount);
        const yValue = yRange[1] - (i * (yRange[1] - yRange[0]) / gridCount);
        svg += `
            <line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
            <text x="${padding - 5}" y="${y + 4}" fill="#6B7280" font-size="9" text-anchor="end">${yValue.toFixed(1)}${unit}</text>
        `;
    }

    // X axis labels
    const colWidth = (width - 2 * padding) / 7;
    for (let i = 0; i < 8; i++) {
        const x = padding + (i * colWidth);
        svg += `<text x="${x}" y="${height - 8}" fill="#6B7280" font-size="9" text-anchor="middle">D${i + 1}</text>`;
    }

    // Map data points
    const points = [];
    data.forEach((d, idx) => {
        const x = padding + (idx * colWidth);
        if (d[dataKey] !== null) {
            const ratio = (d[dataKey] - yRange[0]) / (yRange[1] - yRange[0]);
            const y = height - padding - (ratio * (height - 2 * padding));
            points.push({ x, y, val: d[dataKey], classification: d.classification, day: d.day });
        }
    });

    // Draw line
    if (points.length > 1) {
        let path = `M ${points[0].x} ${points[0].y}`;
        for (let i = 1; i < points.length; i++) {
            path += ` L ${points[i].x} ${points[i].y}`;
        }
        svg += `<path d="${path}" fill="none" stroke="${strokeColor}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />`;
    }

    // Draw dots representing data classifications
    points.forEach(p => {
        let dotColor = "var(--color-fact)"; // Confirmed Fact
        if (p.classification.includes("Reported")) {
            dotColor = "var(--color-reported)"; // Client Reported
        }

        svg += `
            <circle cx="${p.x}" cy="${p.y}" r="4.5" fill="${dotColor}" stroke="#060911" stroke-width="1.5" style="cursor: pointer;" title="Day ${p.day}: ${p.val}${unit} (${p.classification})" />
            <circle cx="${p.x}" cy="${p.y}" r="8" fill="transparent" style="cursor: pointer;" onclick="scrollToDay(${p.day})" />
        `;
    });

    // Mark missing indicators on x axis
    data.forEach((d, idx) => {
        if (d[dataKey] === null) {
            const x = padding + (idx * colWidth);
            svg += `
                <circle cx="${x}" cy="${height - padding - 8}" r="2" fill="var(--color-missing)" />
                <line x1="${x}" y1="${padding}" x2="${x}" y2="${height - padding}" stroke="rgba(245, 158, 11, 0.08)" stroke-dasharray="3,3" />
            `;
        }
    });

    svg += "</svg>";
    container.innerHTML = svg;
}

// Helper: Bar Chart with Grounded/Missing indicators
function drawSVGBarChart(containerId, data, dataKey, yRange, unit, fillColor) {
    const container = document.getElementById(containerId);
    const width = container.clientWidth || 250;
    const height = 160;
    const padding = 30;

    let svg = `<svg width="${width}" height="${height}" style="overflow: visible;">`;

    // Draw grid lines
    const gridCount = 4;
    for (let i = 0; i <= gridCount; i++) {
        const y = padding + (i * (height - 2 * padding) / gridCount);
        const yValue = yRange[1] - (i * (yRange[1] - yRange[0]) / gridCount);
        svg += `
            <line x1="${padding}" y1="${y}" x2="${width - 15}" y2="${y}" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
            <text x="${padding - 5}" y="${y + 4}" fill="#6B7280" font-size="8" text-anchor="end">${yValue.toLocaleString()}</text>
        `;
    }

    // X axis labels & bars
    const colWidth = (width - padding - 15) / 8;
    data.forEach((d, idx) => {
        const x = padding + (idx * colWidth) + (colWidth / 4);
        const barW = colWidth / 2;

        svg += `<text x="${x + barW / 2}" y="${height - 8}" fill="#6B7280" font-size="9" text-anchor="middle">D${d.day}</text>`;

        if (d[dataKey] !== null) {
            const ratio = (d[dataKey] - yRange[0]) / (yRange[1] - yRange[0]);
            const barH = ratio * (height - 2 * padding);
            const y = height - padding - barH;

            let barColor = fillColor;
            if (d.classification.includes("Reported")) {
                barColor = "var(--color-reported)";
            } else if (d.classification.includes("Fact")) {
                barColor = "var(--color-fact)";
            }

            svg += `
                <rect x="${x}" y="${y}" width="${barW}" height="${barH}" rx="2" fill="${barColor}" style="cursor: pointer;" onclick="scrollToDay(${d.day})" />
            `;
        } else {
            // Missing label
            svg += `
                <circle cx="${x + barW / 2}" cy="${height - padding - 8}" r="2" fill="var(--color-missing)" />
            `;
        }
    });

    svg += "</svg>";
    container.innerHTML = svg;
}

// Scroll raw transcript pane to specific day
window.scrollToDay = function (dayNumber) {
    const container = document.getElementById("transcript-container");
    const dayDividers = document.querySelectorAll(".day-separator-text");

    let targetDivider = null;
    dayDividers.forEach(el => {
        if (el.textContent.includes(`DAY ${dayNumber}`)) {
            targetDivider = el.parentElement;
        }
    });

    if (targetDivider) {
        container.scrollTop = targetDivider.offsetTop - 20;

        // Temporarily highlight all bubbles of this day
        const bubbles = document.querySelectorAll(`.chat-bubble[data-day="${dayNumber}"]`);
        bubbles.forEach(b => {
            b.classList.add("highlighted-evidence");
            setTimeout(() => {
                b.classList.remove("highlighted-evidence");
            }, 2500);
        });
    }
};

// 9. Render Nutrition Table
function renderNutritionTable() {
    const list = document.getElementById("nutrition-log-list");
    list.innerHTML = "";

    clientState.nutrition_log.forEach(item => {
        const card = document.createElement("div");
        card.className = "nutrition-day-card";
        card.innerHTML = `
            <div class="nut-day-title">Day ${item.day}</div>
            <div class="nut-field">
                <span class="nut-label">B-fast:</span>
                <span class="nut-value" title="${item.breakfast}">${item.breakfast}</span>
            </div>
            <div class="nut-field">
                <span class="nut-label">Lunch:</span>
                <span class="nut-value" title="${item.lunch}">${item.lunch}</span>
            </div>
            <div class="nut-field">
                <span class="nut-label">Dinner:</span>
                <span class="nut-value" title="${item.dinner}">${item.dinner}</span>
            </div>
            <div class="nut-field">
                <span class="nut-label">Note:</span>
                <span class="nut-value" style="color: var(--color-text-secondary)" title="${item.notes}">${item.notes}</span>
            </div>
        `;
        list.appendChild(card);
    });
}

// 10. Render Truth Grounding Table (Taxonomy Tab) & Setup Bidirectional Highlights
function renderTaxonomy() {
    const tbody = document.getElementById("taxonomy-table-body");
    tbody.innerHTML = "";

    clientState.grounded_evidence.forEach(ev => {
        const tr = document.createElement("tr");
        tr.setAttribute("data-evidence-id", ev.id);

        let badgeClass = "cat-fact";
        if (ev.type.includes("Reported")) badgeClass = "cat-reported";
        else if (ev.type.includes("Inference")) badgeClass = "cat-inference";
        else if (ev.type.includes("Missing")) badgeClass = "cat-missing";

        tr.innerHTML = `
            <td style="font-weight: 700; color: var(--accent-cyan);">Day ${ev.day}</td>
            <td>${ev.finding}</td>
            <td><span class="cat-badge ${badgeClass}">${ev.type}</span></td>
            <td>
                ${ev.quote ? `<button class="btn-evidence" onclick="highlightEvidence('${ev.id}', ${ev.day}, '${escapeQuote(ev.quote)}')">Focus Evidence</button>` : `<span style="color: var(--color-text-muted); font-style: italic;">No quote (Gaps)</span>`}
            </td>
        `;

        // Row interaction hooks
        tr.addEventListener("click", () => {
            document.querySelectorAll(".taxonomy-table tbody tr").forEach(row => row.classList.remove("active-taxonomy-row"));
            tr.classList.add("active-taxonomy-row");
        });

        tbody.appendChild(tr);
    });
}

function escapeQuote(str) {
    if (!str) return '';
    return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

// Highlights specific dialogue text bubbles matching the grounded evidence
window.highlightEvidence = function (evidenceId, day, quoteSnippet) {
    window.scrollToDay(day);

    if (!quoteSnippet) return;

    // Find bubble matching the text
    const bubbles = document.querySelectorAll(`.chat-bubble[data-day="${day}"]`);
    bubbles.forEach(bubble => {
        const bubbleText = bubble.querySelector(".bubble-message-text").textContent.toLowerCase();
        const snippet = quoteSnippet.toLowerCase();

        if (bubbleText.includes(snippet) || snippet.includes(bubbleText)) {
            // Apply glowing highlight
            bubble.classList.add("highlighted-evidence");
            // Auto remove after 3.5s
            setTimeout(() => {
                bubble.classList.remove("highlighted-evidence");
            }, 3500);
        }
    });
};

// 11. Render Barriers and Actions Tab
function renderBarriersAndActions() {
    // Barriers List View
    const listBarriers = document.getElementById("barriers-list");
    listBarriers.innerHTML = "";
    clientState.barriers.forEach(bar => {
        const li = document.createElement("li");
        li.textContent = bar;
        listBarriers.appendChild(li);
    });

    // Barriers Edit View
    const editBarriersContainer = document.getElementById("barriers-edit-inputs");
    editBarriersContainer.innerHTML = "";
    clientState.barriers.forEach((bar, index) => {
        const row = document.createElement("div");
        row.className = "edit-row";
        row.innerHTML = `
            <input type="text" class="editable-input" value="${bar}" data-index="${index}">
            <button class="btn-delete-item" onclick="deleteBarrier(${index})">X</button>
        `;
        editBarriersContainer.appendChild(row);
    });

    const addBarrierBtn = document.createElement("button");
    addBarrierBtn.className = "btn-add-item";
    addBarrierBtn.textContent = "+ Add Barrier";
    addBarrierBtn.onclick = addBarrier;
    editBarriersContainer.appendChild(addBarrierBtn);

    // Pending Actions List View
    const listPending = document.getElementById("pending-actions-list");
    listPending.innerHTML = "";
    clientState.pending_actions.forEach(action => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>[${action.owner}]</strong> ${action.desc} — <span style="font-weight: 700; color: ${action.status === 'Resolved' ? 'var(--color-fact)' : 'var(--color-missing)'}">${action.status}</span>`;
        listPending.appendChild(li);
    });

    // Pending Actions Edit View
    const editPendingContainer = document.getElementById("pending-edit-inputs");
    editPendingContainer.innerHTML = "";
    clientState.pending_actions.forEach((act, index) => {
        const row = document.createElement("div");
        row.className = "edit-row";
        row.style.alignItems = "center";
        row.innerHTML = `
            <input type="text" class="editable-input" style="flex: 3" value="${act.desc}" data-desc-index="${index}">
            <select class="editable-input" style="flex: 1; padding: 8px 10px;" data-owner-index="${index}">
                <option value="Client" ${act.owner === 'Client' ? 'selected' : ''}>Client</option>
                <option value="Coach" ${act.owner === 'Coach' ? 'selected' : ''}>Coach</option>
            </select>
            <select class="editable-input" style="flex: 1; padding: 8px 10px;" data-status-index="${index}">
                <option value="Open" ${act.status === 'Open' ? 'selected' : ''}>Open</option>
                <option value="Resolved" ${act.status === 'Resolved' ? 'selected' : ''}>Resolved</option>
            </select>
            <button class="btn-delete-item" onclick="deletePendingAction(${index})">X</button>
        `;
        editPendingContainer.appendChild(row);
    });

    const addActionBtn = document.createElement("button");
    addActionBtn.className = "btn-add-item";
    addActionBtn.textContent = "+ Add Action";
    addActionBtn.onclick = addPendingAction;
    editPendingContainer.appendChild(addActionBtn);
}

// Editable Modifiers
window.deleteBarrier = function (index) {
    clientState.barriers.splice(index, 1);
    renderBarriersAndActions();
    renderReviewJSON();
};

function addBarrier() {
    clientState.barriers.push("New barrier listed...");
    renderBarriersAndActions();
    renderReviewJSON();
}

window.deletePendingAction = function (index) {
    clientState.pending_actions.splice(index, 1);
    renderBarriersAndActions();
    renderReviewJSON();
};

function addPendingAction() {
    clientState.pending_actions.push({ desc: "New action needed...", owner: "Client", status: "Open" });
    renderBarriersAndActions();
    renderReviewJSON();
}

// 12. Save Edited Inputs back to State
function saveEditedBarriers() {
    const inputs = document.querySelectorAll("#barriers-edit-inputs .edit-row input");
    inputs.forEach(inp => {
        const index = parseInt(inp.getAttribute("data-index"));
        clientState.barriers[index] = inp.value;
    });
}

function saveEditedPending() {
    const rows = document.querySelectorAll("#pending-edit-inputs .edit-row");
    rows.forEach((row, index) => {
        const descInp = row.querySelector(`[data-desc-index="${index}"]`);
        const ownerSel = row.querySelector(`[data-owner-index="${index}"]`);
        const statusSel = row.querySelector(`[data-status-index="${index}"]`);

        if (descInp && ownerSel && statusSel) {
            clientState.pending_actions[index] = {
                desc: descInp.value,
                owner: ownerSel.value,
                status: statusSel.value
            };
        }
    });
}

// 13. Render JSON code box in Tab 5
function renderReviewJSON() {
    const schemaCompliantData = {
        report_metadata: {
            client_id: "FUME-ANON-831",
            start_day: 1,
            end_day: 8,
            review_status: reviewStatus
        },
        weekly_summary: {
            text: clientState.weekly_summary,
            last_updated_by: "Coach Review Panel"
        },
        nutrition_adherence: {
            adherence_rating: "Moderate",
            notes: "Protein lacking on Days 5 & 6; dinner skipped or light. Compliance with ACV and chew-slowly improving by Day 4.",
            meals_logged: clientState.nutrition_log
        },
        exercise_and_steps: {
            average_daily_steps: 6625, // average of known days (8000, 4500, 6000, 8000)
            daily_records: clientState.metrics.steps.map(s => ({
                day: s.day,
                steps: s.steps,
                exercise_duration_mins: s.steps === 8000 && s.day === 8 ? 30 : (s.day === 4 ? 20 : (s.day === 5 ? 20 : null)),
                exercise_type: s.day === 3 ? "walking" : (s.day === 4 ? "walking, stretching, breathing" : (s.day === 5 ? "stretching, running" : (s.day === 8 ? "exercise" : null)))
            }))
        },
        sleep_and_water: {
            daily_sleep_hours: clientState.metrics.sleep.map(sl => ({
                day: sl.day,
                hours: sl.hours,
                quality: sl.day === 8 ? "Good" : (sl.day === 7 ? "Extreme Exhaustion" : null)
            })),
            daily_water_litres: clientState.metrics.water
        },
        stress_and_symptoms: {
            overall_stress_level: "High",
            symptoms_reported: ["Acidity", "Bloating", "Severe fatigue (microsleeps)"],
            notes: "High correlation between office pressure, late sleep, and gastrointestinal symptoms (acidity & bloating)."
        },
        engagement_level: {
            score: 8,
            qualitative_assessment: "High responsiveness. Daily updates logged; actively seeks recipe suggestions and follows guidelines, though struggles with scheduling."
        },
        barriers_and_actions: {
            key_barriers: clientState.barriers,
            pending_actions: clientState.pending_actions.map((act, idx) => ({
                id: `act-${idx + 1}`,
                action_description: act.desc,
                owner: act.owner,
                status: act.status
            }))
        },
        risk_analysis: {
            attention_flags: clientState.risk_flags.map(rf => ({
                severity: rf.severity,
                flag_title: rf.title,
                description: rf.desc
            })),
            recommended_coach_actions: clientState.coach_actions
        },
        grounded_evidence: clientState.grounded_evidence.map((ge, idx) => ({
            id: ge.id,
            source_day: ge.day,
            type_classification: ge.type,
            extracted_finding: ge.finding,
            exact_quote: ge.quote
        }))
    };

    document.getElementById("json-code-box").textContent = JSON.stringify(schemaCompliantData, null, 2);
    return schemaCompliantData;
}

// 14. Button Handlers & Interactivity
function initActionListeners() {
    // Edit Summary Trigger
    const editSummaryBtn = document.getElementById("edit-summary-btn");
    const summaryText = document.getElementById("summary-text");
    const summaryTextArea = document.getElementById("summary-textarea");

    editSummaryBtn.addEventListener("click", () => {
        if (!isEditingSummary) {
            isEditingSummary = true;
            editSummaryBtn.textContent = "Save";
            summaryText.classList.add("hidden");
            summaryTextArea.classList.remove("hidden");
            summaryTextArea.focus();
        } else {
            isEditingSummary = false;
            editSummaryBtn.textContent = "Edit";
            clientState.weekly_summary = summaryTextArea.value;
            summaryText.textContent = clientState.weekly_summary;
            summaryText.classList.remove("hidden");
            summaryTextArea.classList.add("hidden");
            renderReviewJSON();
        }
    });

    // Edit Barriers Trigger
    const editBarriersBtn = document.getElementById("edit-barriers-btn");
    const barriersList = document.getElementById("barriers-list");
    const barriersInputs = document.getElementById("barriers-edit-inputs");

    editBarriersBtn.addEventListener("click", () => {
        if (!isEditingBarriers) {
            isEditingBarriers = true;
            editBarriersBtn.textContent = "Save";
            barriersList.classList.add("hidden");
            barriersInputs.classList.remove("hidden");
        } else {
            isEditingBarriers = false;
            editBarriersBtn.textContent = "Edit List";
            saveEditedBarriers();
            renderBarriersAndActions();
            barriersList.classList.remove("hidden");
            barriersInputs.classList.add("hidden");
            renderReviewJSON();
        }
    });

    // Edit Pending Actions Trigger
    const editPendingBtn = document.getElementById("edit-pending-btn");
    const pendingList = document.getElementById("pending-actions-list");
    const pendingInputs = document.getElementById("pending-edit-inputs");

    editPendingBtn.addEventListener("click", () => {
        if (!isEditingPending) {
            isEditingPending = true;
            editPendingBtn.textContent = "Save";
            pendingList.classList.add("hidden");
            pendingInputs.classList.remove("hidden");
        } else {
            isEditingPending = false;
            editPendingBtn.textContent = "Edit Actions";
            saveEditedPending();
            renderBarriersAndActions();
            pendingList.classList.remove("hidden");
            pendingInputs.classList.add("hidden");
            renderReviewJSON();
        }
    });

    // Approve Button Trigger
    const approveBtn = document.getElementById("btn-approve");
    const rejectBtn = document.getElementById("btn-reject");
    const globalBadge = document.getElementById("global-status");
    const exportSection = document.getElementById("export-section");

    approveBtn.addEventListener("click", () => {
        reviewStatus = "Approved";
        globalBadge.className = "status-badge status-approved";
        globalBadge.querySelector(".status-text").textContent = "Report APPROVED";
        exportSection.classList.remove("hidden");

        // Scroll to the export details
        setTimeout(() => {
            exportSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);

        renderReviewJSON();
    });

    // Reject Button Trigger
    rejectBtn.addEventListener("click", () => {
        reviewStatus = "Rejected";
        globalBadge.className = "status-badge status-rejected";
        globalBadge.querySelector(".status-text").textContent = "Report REJECTED";
        exportSection.classList.add("hidden");
        renderReviewJSON();
    });

    // Export JSON trigger
    const exportBtn = document.getElementById("btn-export-json");
    exportBtn.addEventListener("click", () => {
        const payload = renderReviewJSON();
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(payload, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `fume_client_report_${payload.report_metadata.client_id}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    });
}

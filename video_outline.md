# Video Presentation Script & Outline

This document outlines the script and structural flow for a 3-to-5 minute video explaining the GenAI Client Intelligence Platform prototype.

---

## ⏱️ Video Breakdown

### 1. Introduction & Problem Statement (0:00 - 0:45)
- **Visual**: Show the landing page of the dashboard with its modern dark glassmorphic design.
- **Script**:
  > "Hi everyone, today I'm demonstrating the FUME Client Intelligence Platform dashboard—a tool designed to help wellness coaches save hours of administrative work by automatically turning messy chat conversations into structured, grounded, and actionable insights. Our goal is to extract metrics like sleep, steps, water, and nutrition, identify risk flags, and provide grounded evidence, all while keeping a human coach firmly in the loop to review and approve the findings before they are saved."

### 2. Dashboard Interface Tour (0:45 - 2:15)
- **Visual**: Focus on the two-panel layout. Show the left panel (transcript) and right panel (insights). Click through the tabs: *Overview*, *Trackers*, *Taxonomy*, and *Barriers*.
- **Script**:
  > "We designed this interface with a clean, two-panel layout. On the left, we have the raw multi-day conversation transcript, color-coded by speaker. On the right is our Client Intelligence Hub.
  > Under the **Overview** tab, coaches see a high-level Weekly Summary, attention flags (like our High-Risk flag for the client sleeping during meetings on Day 7), and recommended next actions.
  > Toggling to the **Trackers** tab reveals custom interactive SVG charts displaying sleep, steps, and water intake over 8 days. Crucially, the charts clearly distinguish actual numbers (like 8 hours of sleep on Day 8) from missing data points, which are left blank to avoid false reporting.
  > In the **Barriers & Actions** tab, we aggregate critical obstacles—like the transition to a school schedule—and list pending actions for both client and coach."

### 3. Bidirectional Grounding & Truth Taxonomy (2:15 - 3:30)
- **Visual**: Go to the **Grounding & Taxonomy** tab. Hover over an evidence tag. Show the corresponding transcript message on the left highlighting and scrolling into view.
- **Script**:
  > "To combat AI hallucinations, our system does two unique things. First, it implements **Bidirectional Grounding**. When a coach hovers over or clicks any evidence card, the platform automatically scrolls to and highlights the exact message in the transcript that supports that finding.
  > Second, we classify findings into four distinct **Truth Categories**:
  > 1. *Confirmed Facts*: Directly verified metrics like the client's weight of 83kg on Day 8.
  > 2. *Client-Reported*: Subjective complaints, like acidity and bloating.
  > 3. *AI-Generated Inference*: Behavioral patterns deduced by the AI, like how the client's bloating and acidity correlate with sleep deprivation and stress.
  > 4. *Missing Information*: Critical data gaps, such as the exact sleep hours on Day 5, highlighting what the coach needs to ask next."

### 4. Human-in-the-Loop & JSON Export (3:30 - 4:30)
- **Visual**: Go to the **Review & Edit** tab. Click the "Edit" button on the weekly summary. Modify the text, click "Save". Click the "Approve" button, which changes the status bar to a glowing green "Review Status: APPROVED". Finally, click "Export Approved Data" to trigger a download of the JSON file.
- **Script**:
  > "GenAI should be a co-pilot, not a replacement. Under the **Review & Edit** tab, the coach has complete control. They can edit any of the AI's summaries or findings inline to correct errors. Once satisfied, they can mark the report as **Approved**, which updates the system state and enables the **Export Approved Data** feature. This downloads a fully schema-validated JSON payload, ready to be ingested into FUME's backend databases.
  > This approach ensures that our intelligence reports are 100% accurate, fully grounded in evidence, and verified by a human before impacting client care. Thank you!"

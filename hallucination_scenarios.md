# Hallucination and Failure Scenarios

This document analyzes three potential failure or hallucination scenarios that could occur when using an LLM to extract client intelligence, along with proposed technical mitigations.

---

## Scenario 1: Timeline Confusion (Temporal Inversion)
### Description
The LLM misattributes metrics or events to the wrong day. For example, the AI might report that the client slept 8 hours on Day 1 (which was actually on Day 8) or had 8,000 steps on Day 4 (which was actually Day 3 and Day 8). 
### Risk & Impact
A coach looking at the dashboard would see stable sleep and activity patterns early in the week, missing the client's deep fatigue crisis on Days 1-7. This could lead to inappropriate recommendations (e.g., pushing the client to exercise harder when they are already sleep-deprived).
### Mitigating Controls
1. **Chronological Pre-indexing**: The ingestion pipeline structures the raw conversation transcript as a JSON array of daily messages rather than a single raw text block.
2. **Strict Citing Constraint**: The prompt forces the LLM to output a `day` field for every metric and requires exact string quotes in `supporting_evidence`.
3. **Deterministic RegEx Validation**: An automated post-processing script verifies that the quoted string actually appears in the message array for that specific day. If the quote is missing or belongs to a different day, the report is flagged for automatic re-extraction.

---

## Scenario 2: Diagnostic Hallucination (Medical Inferences)
### Description
The LLM translates subjective complaints into clinical terms. For example, based on the client reporting "acidity since morning" and "slept for a few seconds on the table," the AI infers and states that the client suffers from "Chronic Insomnia" or "Clinical Gastritis."
### Risk & Impact
Wellness coaching platforms are strictly non-medical. Providing a clinical diagnosis exposes the coach and the platform (FUME) to massive legal liabilities and violates regulatory guidelines (FDA/HIPAA/medical practice regulations).
### Mitigating Controls
1. **Behavioral Scope Boundaries**: The system prompt contains explicit guardrails forbidding the use of medical diagnostic terms. Inferences must be restricted to lifestyle patterns, stress correlations, and routine disruptions.
2. **Inference Guardrails / Negative Prompting**:
   ```markdown
   * Negative Constraint: Do NOT diagnose the client with any medical condition (e.g., Insomnia, Depression, Gastritis, GERD). Frame symptoms as "Client-Reported" discomfort and correlate them ONLY to routine habits (e.g., sleep deprivation, meal timing).
   ```
3. **Structured Taxonomy Segregation**: Visual separation in the UI ensures that inferences are marked as "AI-Generated Inference (Non-Medical)" and are distinct from "Confirmed Facts."

---

## Scenario 3: Metric Fabrication (Synthetic Data Ingestion)
### Description
When metrics are missing, the LLM hallucinates values to make the data complete. For example, on Day 2, the client says "water done" without specifying a volume. The AI might fabricate "Water: 3 litres" based on Day 8's report of "3.5 litres," or guess "Sleep: 6 hours" for Days 4, 5, and 6 to complete a chart.
### Risk & Impact
Coaches might assume the client is consistently tracking their metrics when they are actually failing to do so. This hides a core behavioral barrier (lack of consistent tracking habit) and leads to false assumptions about nutrition and activity.
### Mitigating Controls
1. **Null-Permissive Schemas**: The JSON schema explicitly allows `["NUMBER", "NULL"]` or `["INTEGER", "NULL"]` for daily steps, sleep hours, and water volume.
2. **Strict Defaulting Instructions**: The system prompt instructs:
   ```markdown
   * Constraint: If a metric (Sleep, Steps, Water) is mentioned qualitatively (e.g., "water done", "slept better") but no specific numerical value is provided, you MUST record the value as null and place it under the "Missing / Unavailable Information" category. Do not guess, average, or fabricate.
   ```
3. **Grounding Checker**: A post-processing validation layer scans for any numerical value in the output and runs a regex match to verify that a number appears in the corresponding dialogue day.

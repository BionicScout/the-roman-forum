---
epoch: 1781485360249
modelKey: "gemini-3.5-flash|google"
topic: "Obsidian Quartz Blog Fact-Checker"



tags:
  - copilot-conversation
---

**user**: You are an expert fact-checker, technical editor, and research auditor for a multi-disciplinary blog built using Obsidian and Quartz v4. Your sole task is to verify the accuracy of the facts, claims, statistics, and logical steps presented in the user's text.

## Crucial Execution Rules:
1. **Scope:** Ignore all grammar, typos, punctuation, spelling, and tone choices. Focus entirely on whether the claims are factually true, historically accurate, or technically sound.
2. **Quartz Syntax Lockdown:** Do not suggest changes that disrupt Quartz-specific markdown elements, such as Obsidian Wikilinks `[[Like This]]`, global taxonomy tags, or back-link sections.
3. **Output Constraint:** Do NOT output a rewritten version of the article. Only output a clean, bulleted feedback report. If no factual errors are found, simply state: "No factual errors detected."

## Input Text to Evaluate:
{activeNote}

## Expected Output Format:
If errors or questionable claims are found, group them logically using this exact structure:
- **Claim:** "[Quote the specific sentence or claim from the text]"
- **Assessment:** [State if it is inaccurate, exaggerated, or missing context]
- **Correction:** [Provide the accurate facts, dates, percentages, or underlying principles]
- **Verification Tip:** [A brief sentence on how the user can double-check this fact if needed]
[Context: Notes: drafts/Branches of Philosophy.md]
[Timestamp: 2026/06/14 21:02:40]

**ai**: - **Claim:** "At its historic core, philosophical exploration is divided into four distinct primary operational zones..."
- **Assessment:** Historically inaccurate and missing context.
- **Correction:** Historically, ancient Greek philosophy (most notably the Stoics and the Epicureans) divided philosophy into three primary branches: Physics (which included metaphysics and natural sciences), Ethics, and Logic. Epistemology did not emerge as a fully independent, co-equal primary branch until the modern period (initiated by Descartes and formalized during the Enlightenment). The "four pillars" structure is a modern pedagogical convention rather than the historic core division.
- **Verification Tip:** Review historical overviews of Hellenistic philosophy, specifically the Stoic division of philosophy, or the introduction to Immanuel Kant's *Groundwork of the Metaphysics of Morals*, which outlines the classic threefold division of Greek philosophy.

- **Claim:** "Formal Logic: The symbolic system used to map out premises and conclusions, checking for deductive validity and structural soundness."
- **Assessment:** Technically inaccurate.
- **Correction:** In formal logic, "soundness" is not a purely structural property. An argument is *valid* if its structural form guarantees that the conclusion must be true if the premises are true. An argument is *sound* if and only if it is structurally valid **and** its premises are factually true in the real world. Because formal logic cannot verify the empirical truth of premises, it only checks for structural *validity* and *consistency*, not "structural soundness."
- **Verification Tip:** Consult any standard introductory logic textbook, such as Patrick J. Hurley's *A Concise Introduction to Logic*, to verify the strict distinction between "validity" (structural) and "soundness" (structural validity + factual truth).
[Timestamp: 2026/06/14 21:02:53]
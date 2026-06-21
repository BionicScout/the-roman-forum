---
copilot-command-context-menu-enabled: true
copilot-command-slash-enabled: true
copilot-command-context-menu-order: 1190
copilot-command-model-key: ""
copilot-command-last-used: 1782064016493
---
# Purpose
Convert the raw active note content into a publication-ready, Quartz-optimized layout matching the visual style of The Roman Forum.

# Context
Inherit all mandates from [[The Roman Forum Global Persona]].

# Execution Protocol
1. Frontmatter Engineering: Inspect the current YAML properties block or build one from scratch. Ensure fields for `title`, `description` (acting as a crisp meta-description for search engine optimization and hover previews), and `tags` (using parallel hierarchical tags like `blog-page`, `event/instant`, `people/philosopher`) are complete and valid.
2. Add Footnote: Use the [[Template - Writing - Footnote]] at the end of the page. Please find a relevant quote to insert into the templated response. 
3. Visual Rhythm & Callouts: Immediately beneath the title header, construct an introductory `> [!abstract]` callout box to act as a compelling narrative hook and drive mobile readability. Split dense blocks into scannable lists or blockquotes (`> [!quote]`) to avoid monolithic blocks of text.
4. Markdown Uniformity: Standardize bullet-point notation to use standard hyphens (`-`) to avoid viewport margin rendering breaks on mobile. Fix formatting errors, double trailing colons (`::`), or raw list styling conflicts.
5. Output Format: Provide the fully formatted note first. Follow it with an explicit "Editorial Changes Made" list justifying your layout changes.

---
# Active Note Content To Process:
{{active_note_content}}
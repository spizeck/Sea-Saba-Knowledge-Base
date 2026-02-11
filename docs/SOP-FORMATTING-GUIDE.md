# SOP & Document Formatting Guide

This guide defines the formatting standards for all documents in the Sea Saba Knowledge Base. Following these standards ensures consistency, readability, and ease of maintenance across all content.

## Document Types

The knowledge base contains two types of documents:

1. **SOP (Standard Operating Procedure)** — Step-by-step procedural documents that describe how to perform a specific task or process.
2. **Guide** — Reference material, overviews, checklists, or informational pages that don't follow a strict procedural flow.

Use the appropriate type based on the content. If a document describes a process that staff must follow in a specific order, it's an SOP. If it provides reference information, talking points, or general knowledge, it's a Guide.

---

## SOP Format

Every SOP must include the following sections in this order:

### Required Sections

#### 1. Title (`#`)

```markdown
# Vehicle Maintenance
```

- Use a single `#` heading.
- Use a clear, descriptive title — no "SOP:" prefix.
- The title should describe the subject, not the document type.

#### 2. Purpose (`##`)

```markdown
## Purpose

To maintain the regular upkeep and ensure operational readiness of all company vehicles at Sea Saba.
```

- One to two sentences explaining **why** this SOP exists.
- Answers the question: "What is the goal of this procedure?"

#### 3. Scope (`##`)

```markdown
## Scope

This SOP applies to all staff members who operate company vehicles.
```

- One to two sentences defining **who** this applies to and **what** it covers.
- Be specific about roles or departments when applicable.

#### 4. Procedure (`##`)

```markdown
## Procedure

### Regular Servicing

1. **Servicing Schedule**: Service vehicles every three months.
2. **Service Location**: Perform servicing at Bennet's Garage.
    - Contact: +599-416-2331

### Daily Checks

1. **Walkaround Inspection**:
    - Check tires and surroundings for potential issues.
2. **Interior Inspection**:
    - Inspect for loose items or hazards.
```

- The main body of the SOP.
- Break into logical subsections using `###` headings.
- Use **numbered lists** for sequential steps.
- Use **bullet lists** for non-sequential items or details within a step.
- Bold the key action or item name at the start of each step.

#### 5. Accountability (`##`)

```markdown
## Accountability

All staff members are responsible for adhering to this SOP. Supervisors will verify compliance during routine checks.
```

- A brief statement on who is responsible for following the SOP.
- Include any consequences or review processes if applicable.

### Complete SOP Example

```markdown
# Compressor Operations

## Purpose

To ensure the safe, efficient, and consistent operation of the compressors used in diving operations at Sea Saba.

## Scope

This SOP applies to all dive staff involved in compressor operations, covering startup, filling, and shutdown procedures.

## Procedure

### Starting the Equipment

1. **Turn on breakers**: Activate breakers for fans and Compressor 3 (Red Max-Air).
2. **Plug in the dryer**: Connect the heater and dryer behind the air dryer on the wall.
3. **Warm up the dryer**: Turn on the blue dryer and allow approximately 5 minutes to warm up.

!!! warning
    Ensure the oxygen sensor is calibrated before starting nitrox operations.

### Filling Tanks

1. **Arrange tanks**: Set up 4–5 rows with a clear path to the control panel.
2. **Connect fill whips**: Attach to the row furthest from the wall.

> Tip: Stagger tanks to avoid putting pressure on the stems.

### Shutting Down

1. **Shut down nitrox compressor**: Rotate the On/Off/Start switch to Off.
2. **Purge condensate**: Manually open drain valves (3 total, ~5 seconds each).
3. **Turn off equipment**: Blue dryer, heater plugs, O2 analyzer, and breakers.

!!! danger
    If the banks are not closed, they will leak through the O2 analyzer overnight.

## Accountability

All dive staff are responsible for following this SOP. Report any equipment issues to management immediately.
```

---

## Guide Format

Guides have a lighter structure but still require consistency.

### Required Sections

#### 1. Title (`#`)

```markdown
# Boat Briefing Overview
```

- Same rules as SOP titles — clear, descriptive, no prefix.

#### 2. Introduction

```markdown
A brief paragraph explaining what this guide covers and when staff should reference it.
```

- One to three sentences providing context.
- Can be placed directly under the title without a `##` heading.

#### 3. Organized Sections (`##` and `###`)

```markdown
## Safety Equipment & Procedures

- **Life Jackets**: Adult and children's sizes available.
- **Oxygen / First Aid Kits**: Located under the helm.

## Entry & Exit Procedures

- **Giant Stride Entry**: How and where to perform safely.
- **Ladder Use**: Remove fins on the tag line before approaching.
```

- Use `##` for major sections and `###` for subsections.
- Use bullet lists for reference items, checklists, or talking points.
- Use numbered lists only when order matters.
- Bold key terms at the start of list items.

### Complete Guide Example

```markdown
# Dive Briefing Overview

A template for conducting dive briefings. Adapt the content to the specific dive site and group.

## Dive Logistics

- **Maximum Depth & Estimated Time**: Include maximum allowable time if necessary.
- **Buddy System**: No solo diving allowed. Divers without a buddy must stay close to a guide.
- **Weight Checks**: First-time divers must check weights at the tag line upon entry.

## Marine Park Guidelines

- Strict no-touching, collecting, or contact policy.
- Be mindful of buoyancy and fin placement. No gloves.

## Safety and Equipment

- **Dive Computer**: Essential for monitoring air, depth, and deco.
- **Air Monitoring**: Alert your guide at half tank. Return to the boat with at least 500 psi / 50 bar.

!!! warning
    Failure to comply with mandatory deco stops will result in a no-dive penalty for at least 24 hours.

> Tip: Sort groups by skill level or air/nitrox usage to minimize underwater congestion.

[Download a printable version](../files/Dive%20Briefing%20Overview.pdf)
```

---

## Formatting Rules

These rules apply to **all documents** (SOPs and Guides).

### Headings

| Level | Usage |
|---|---|
| `#` | Document title (one per file) |
| `##` | Major sections (Purpose, Scope, Procedure, etc.) |
| `###` | Subsections within a major section |
| `####` | Sub-subsections (use sparingly) |

### Lists

- **Numbered lists** (`1.`) for sequential steps or ordered procedures.
- **Bullet lists** (`-`) for non-sequential items, details, or reference material.
- **Bold the lead item** in each list entry when it names a key action, location, or concept.
- Indent sub-items with 4 spaces.

### Admonitions and Blockquotes

Use **MkDocs admonitions** for safety-critical and important warnings:

```markdown
!!! danger
    Never open both banks simultaneously!

!!! warning
    Maximum pressure in Bank 2 is 3000 psi with no auto shutoff.

!!! note
    Confirm with management before changing oil due to being "dirty".
```

| Admonition | When to Use |
|---|---|
| `!!! danger` | Immediate safety hazard — risk of injury, death, or major equipment damage |
| `!!! warning` | Important caution — could cause problems if ignored |
| `!!! note` | Important information that staff should be aware of |

Use **blockquotes** for general tips, suggestions, and non-critical notes:

```markdown
> Tip: Stagger tanks to avoid putting pressure on the stems.

> Note: Any deviations from these procedures should be communicated to management.
```

### Images

- Store images in `docs/Images/` organized by topic subfolder (e.g., `docs/Images/Compressors/`).
- Use descriptive alt text:
  ```markdown
  ![Breaker Panel](../Images/Compressors/BreakerPanel.jpg)
  ```
- Place images immediately after the step or section they illustrate.

### Links

- Link to related documents using relative paths:
  ```markdown
  Refer to [Compressor Servicing](CompressorServicing.md) for maintenance details.
  ```
- Link to downloadable files in `docs/files/`:
  ```markdown
  [Download the shipping schedule](../files/2025%20Shipping%20to%20Saba%20Calendar.pdf)
  ```

### Contact Information

Format phone numbers and emails consistently:

```markdown
- Contact: +599-416-2331
- Email: `katy@seasaba.com`
```

### File Naming

- Use **PascalCase** for Markdown filenames: `CompressorOperation.md`, `MorningRoutine.md`
- Use **PascalCase** for image folder names: `docs/Images/Compressors/`
- No spaces in filenames — use PascalCase instead of spaces or hyphens.

---

## Tone and Voice

- **Professional but approachable** — written for dive shop staff, not lawyers.
- **Direct and actionable** — tell staff what to do, not what they "should consider doing."
- **Safety first** — always make safety information prominent and unambiguous.
- **Concise** — avoid unnecessary filler. Every sentence should add value.

---

## Checklist for New Documents

Before submitting a new document, verify:

- [ ] Correct document type chosen (SOP or Guide)
- [ ] All required sections present and in the correct order
- [ ] Title uses `#` with no prefix
- [ ] Headings follow the hierarchy (`#` → `##` → `###`)
- [ ] Steps are numbered; non-sequential items use bullets
- [ ] Key terms are bolded at the start of list items
- [ ] Safety warnings use admonitions (`!!! danger`, `!!! warning`)
- [ ] Images have descriptive alt text
- [ ] Related documents are cross-linked
- [ ] File is added to `mkdocs.yml` navigation
- [ ] Filename uses PascalCase with `.md` extension

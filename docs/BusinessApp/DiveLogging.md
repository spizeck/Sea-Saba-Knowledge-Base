# Dive Log & Marine Life Sightings

## Purpose

To create consistent, accurate records of completed Sea Saba dives and marine life sightings. The dive log is the primary record of what was dived, who guided it, and what was observed — including species of concern sightings used to track marine life across all Sea Saba dive operations.

## Scope

This guide applies to all dive staff responsible for entering completed dives into the Sea Saba Business App.

## What the Dive Log Records

Each dive log entry captures the following:

- **Dive Number** — Sequential number for the dive
- **Boat** — Which vessel the dive was conducted from
- **Date** — Date of the dive
- **Dive Guide** — Staff member who led the dive
- **Dive Site** — Where the dive took place
- **Drift Dive** — Whether the dive was conducted as a drift dive
- **Maximum Depth** — Deepest point reached during the dive
- **Water Temperature** — Temperature recorded during the dive
- **Species of concern sightings** — Marine life sightings recorded via the multi-step sightings form

## When to Complete the Dive Log

Complete the dive log as soon as possible after the dive while the details are fresh. Waiting too long increases the risk of inaccurate site names, incorrect depths, and missed or misremembered sightings.

> Log each dive on the same day it was completed whenever possible.

## Basic Dive Information

Fill in each field accurately before moving to the sightings section:

- **Dive Number** — Use the correct sequential number for the day and boat. Check with the guide or captain if unsure.
- **Boat** — Select the vessel used. Do not guess — confirm if needed.
- **Date** — Defaults to today. Correct it if you are entering a log from a previous dive.
- **Dive Guide** — Select the guide who led the dive, not the person entering the log.
- **Dive Site** — Select the correct site from the list. Use consistent site names — do not abbreviate or invent variations.
- **Maximum Depth** — Record the maximum depth reached. Use the guide's computer or dive slate as the reference.
- **Water Temperature** — Record the temperature from the dive. Bottom temperature is preferred if available.

## Drift Dive Checkbox

Mark the drift dive checkbox **only if the dive was conducted as a drift dive** — where divers ascended away from the mooring and were picked up by the boat.

Do not mark it as a drift dive if the current was mild but divers returned normally to the mooring line. This field is used for operational records and sightings data analysis, so accuracy matters.

## Species of Concern Sightings

After the basic dive information is entered, the form walks the user through a multi-step sightings workflow focused on **species of concern**.

For each listed species, staff record whether that species was observed during the dive. The sightings are saved with the dive log record in Firestore.

### Purpose of the Sightings Workflow

The sightings data creates a consistent, long-term record of marine life observations across all Sea Saba dives. Over time this data helps identify trends, monitor species presence, and supports conservation awareness — but only if the data is accurate.

### How to Complete Sightings

1. Work through each species listed in the form.
2. Mark a species as seen **only if it was actually observed** during that dive.
3. If you are not sure whether a species was seen, **leave it unmarked**. Do not guess.
4. Complete all steps in the form before submitting.

!!! warning
    Do not log sightings of species that were not observed. Inaccurate sightings data undermines the value of the entire dataset.

## Data Accuracy Expectations

- **Do not guess.** If you are unsure about a field, confirm it before submitting.
- **Use consistent site names.** Select from the available list — do not create alternate spellings or abbreviations.
- **Confirm guide, boat, and dive number** before submitting, especially when entering logs for dives you did not personally guide.
- **Sightings must be actual observations** from that specific dive. Do not carry over sightings from previous dives.

## Data Storage

Dive log data is stored in **Google Firestore**, which is the system of record for all Sea Saba dive logs and species sightings. Staff do not need to interact with Firestore directly — the app form handles data submission automatically. Once a log is submitted, it is saved to the database.

## Accountability

Dive staff entering logs are responsible for the accuracy and timeliness of submitted records. If a log is submitted with incorrect information, notify management so it can be corrected.

## Related

- [Morning Routine](../DiveOperations/MorningRoutine.md)
- [Marine Park Rules](../DiveOperations/MarineParkRules.md)
- [Analytics & Reporting](Analytics.md)

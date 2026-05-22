# Dive Analytics & Operational Insights

The analytics dashboard turns Sea Saba dive log data into practical operational insights. It is built around the dives logged in the Business App and is intended for dive staff, guides, captains, and operations management — not financial reporting or business intelligence.

All analytics data comes directly from dive logs stored in **Google Firestore**. The quality of the analytics depends entirely on the quality of the dive logs. Consistent site names, accurate temperatures, correct guide and boat assignments, and honest sightings data all feed directly into what you see on the dashboard.

## Dashboard Summary Statistics

The top of the dashboard shows a snapshot of overall dive activity:

- **Total Dives Logged** — All dives recorded in the system
- **Recent Dives** — Dives completed in a recent window
- **Average Water Temperature** — Calculated from logged dive data
- **Most Active Boat** — Vessel with the highest dive count
- **Most Active Guide** — Guide with the highest dive count

These statistics update dynamically as new dives are logged.

## Boat & Guide Statistics

Dive counts broken down by boat and by guide, with time range filtering:

| Filter | Period |
|---|---|
| All Time | Complete logged history |
| Last 30 Days | Recent activity |
| Current Year | Year-to-date |

This helps management understand operational usage patterns — which boats and guides are most active, and how that changes over time.

## 7-Day Site Matrix

The site matrix shows which dive sites each boat has visited during the **last 7 days**, with color coding to identify repeat visits:

| Color | Meaning |
|---|---|
| Blue | First visit to this site in the period |
| Orange | Second visit |
| Red | Third or more visits |

### Why This Matters

Repeated visits to the same site put unnecessary pressure on the reef and reduce the variety of the guest experience. The matrix makes over-rotation immediately visible so management and guides can spread dive activity more evenly across available sites.

> Check the site matrix when planning the day's dive sites. If a site is showing orange or red for your boat, consider alternatives.

## Temperature Trends

Water temperature data aggregated from all logged dives, displayed over selectable time ranges:

- **30 Days** — Recent conditions
- **12 Months** — Seasonal patterns over the past year
- **24 Months** — Two-year trend view

The dashboard displays average temperature, the range across the period, and trend direction. Outlier handling is applied to reduce the impact of obviously incorrect entries.

Temperature trends help staff and management understand seasonal water conditions and monitor long-term environmental changes at Sea Saba dive sites.

## Site Visitation Patterns

A breakdown of how often each dive site has been visited, with filtering by time range:

- **30 Days**
- **90 Days**
- **12 Months**

For each site the dashboard shows:

- **Visit count** and **percentage of total dives**
- **Last visit date**
- **Protected site indicator** where applicable

### Operational Use

- Identify sites that are being overused relative to others.
- Monitor visitation pressure on protected or sensitive sites.
- Plan site rotation to distribute dives more evenly.
- Understand which sites are getting little or no use.

## Seasonal Wildlife Patterns

Species sightings from the Dive Log sightings workflow are aggregated and displayed as seasonal trends. For each tracked species the dashboard shows:

- **Peak season** — When sightings are most frequent
- **Low season** — When sightings drop off
- **Unique species count** — How many different species of concern have been logged
- **Average sightings per dive** — Across the logged dataset

This data comes directly from the species of concern workflow completed during dive logging. It is only as accurate as the sightings logged by guides after each dive.

!!! note
    Wildlife trend data improves over time as more dives are logged. A few months of consistent logging will show meaningful seasonal patterns.

## Data Quality & the Analytics Connection

The analytics dashboard is only as useful as the data behind it. Every field in the dive log feeds into one or more analytics views:

| Dive Log Field | Affects |
|---|---|
| Boat | Boat statistics, site matrix |
| Dive Guide | Guide statistics |
| Dive Site | Site matrix, visitation patterns |
| Water Temperature | Temperature trends |
| Drift Dive | Operational records |
| Species Sightings | Seasonal wildlife patterns |

Inconsistent site names, missing fields, or inaccurate sightings all degrade the analytics. This is why accurate and timely dive logging matters beyond just the individual record.

## Related

- [Dive Log & Marine Life Sightings](DiveLogging.md)
- [Equipment & Maintenance Tracking](AssetManagement.md)
- [Marine Park Rules](../DiveOperations/MarineParkRules.md)

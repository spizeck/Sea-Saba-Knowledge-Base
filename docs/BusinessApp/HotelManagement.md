# Hotel Configuration & Seasonal Room Rates

Hotels in the Business App are configuration objects used by the Group Contract Management system. They are not a reservations or property management system. The purpose of hotel configuration is to store accurate seasonal pricing, room categories, occupancy rates, meal packages, FOC rules, and policies so that group contracts calculate correctly and hotel price sheets can be generated.

!!! warning
    Incorrect hotel configuration will directly affect contract pricing accuracy. Verify all rates, seasons, and occupancy types carefully before building contracts against a hotel.

## Hotel Data Structure

Each hotel in the system contains:

- **Seasons** — Date ranges that define which rates apply
- **Room Categories** — Groups of similar rooms with descriptions and optional quantity limits
- **Occupancy Types** — Per-category pricing for single, double, triple, quad, etc.
- **Rates** — Per-night pricing tied to season + room category + occupancy type
- **Meal Packages** — Hotel-specific meal plan options with their own commission rules
- **FOC Rules** — Configurable free-of-charge rules per hotel
- **Policies & Terms** — Cancellation, payment, and operational policy fields used in contracts and price sheets

## Seasons

Seasons define the date ranges during which specific room rates are active. Each hotel has its own seasonal structure — different hotels may have different season names, date ranges, and rate tiers.

- Seasons are configured with a start date and end date.
- When a contract is created, the system automatically determines the correct season based on the group's travel dates.
- If travel dates span multiple seasons, verify which season applies or split the booking accordingly.

> Verify seasonal date ranges carefully at the start of each year. A misconfigured season boundary will cause contracts to pull incorrect rates silently.

## Room Categories

Room categories represent groups of similar rooms at a hotel.

**Examples:**
- Ocean View Double
- Garden Cottage
- Queen Cottage
- Penthouse Suite

Each room category can include:
- A description used in price sheets and contracts
- An optional quantity limit (maximum rooms available)
- An optional Checkfront item mapping for sync workflows

Room category names should be consistent across seasons. If the same room type exists in multiple seasons, use the same category name to avoid confusion in contracts and price sheets.

## Occupancy Types

Occupancy types are configured per room category and define how many guests occupy a room.

**Examples:**
- Single
- Double
- Triple
- Quad

Each occupancy type has its own rate. Not all occupancy types exist for every room category — only configure the occupancy options that are actually available for that room at that hotel.

When building a group contract, the occupancy type selected by staff must match an option configured for that room category. If an occupancy type is missing, the contract will not be able to price that room correctly.

## Rate Configuration

Rates are the per-night prices for a specific combination of:

- Season
- Room Category
- Occupancy Type

Contracts pull room pricing automatically from these configured rates during Step 2 of the contract wizard. There is no manual price override in the contract — rates come directly from what is configured here.

When updating rates for a new season, add new rate entries under the correct season rather than overwriting existing rates. This preserves historical pricing for existing contracts.

## Meal Packages

Meal packages are configured per hotel and are separate from dive package pricing.

- Each hotel defines its own meal package options (e.g., Breakfast Only, Half Board, Full Board).
- Meal package commission percentages may differ by hotel and are configured independently from room commissions.
- FOC guests may still be charged for meal packages depending on how the hotel's meal FOC is configured. Confirm this before finalizing a contract.

Meal packages appear in the contract wizard during Step 4 and are included in generated PDFs and price sheets.

## FOC Rules

Hotels may define their own FOC (Free of Charge) rules for room accommodation. These are configured per hotel and are separate from the dive FOC structure.

- **Example:** "7 paid rooms, 1 room free" — the specific rule depends on the hotel agreement.
- Hotel FOC calculations are applied automatically during contract generation.
- Hotel FOC affects room pricing only. Dive FOC (7+1 diver structure) is calculated separately.

Always verify the hotel's FOC rule is correctly configured before generating group contracts. An incorrect FOC rule will silently affect the contract total.

## Policies & Terms

Policy fields store the contractual and operational language associated with each hotel. These fields are used in:

- Group contract PDFs
- Hotel price sheets
- Operational briefings for group coordinators

Policy fields typically include:

- **Cancellation policy** — Deadline and refund terms
- **Payment terms** — Deposit schedule and balance due dates
- **Fitness to dive** — Health and certification requirements
- **Travel insurance** — Requirements or recommendations
- **Unused services** — Policy on unused dives or room nights
- **Force majeure** — Coverage for extraordinary circumstances
- **General restrictions** — Any hotel-specific rules or conditions

Keep these fields current. Outdated policy language in a contract PDF can create confusion or disputes with groups.

## Hotel Price Sheet Generator

The system can generate printable hotel price sheets that are used for operational and sales purposes with groups and agents.

A price sheet typically includes:

- Hotel name and description
- Room categories and quantities
- Seasonal room pricing by occupancy type
- Dive package pricing
- Meal package options
- Applicable policies
- Hotel logo and branding (if configured)

Price sheets can be generated independently from contracts and are useful for pre-booking communications or agent briefings.

## Integration with Group Contracts

The Group Contract wizard draws directly from hotel configuration at every pricing step:

| Contract Step | Data Source |
|---|---|
| Step 1 — Hotel & dates | Hotel record; season determined from dates |
| Step 2 — Room selection | Room categories and occupancy types for that hotel and season |
| Step 3 — Dive packages | Dive package config (hotel-independent) |
| Step 4 — Meal packages | Meal packages configured for that hotel |
| Step 5 — Calculations | Rates, meal commissions, FOC rules all from hotel config |

Any gap or error in hotel configuration will affect the contract calculation at the corresponding step.

## Checkfront Integration

Room categories may optionally include a Checkfront item mapping. This supports optional Checkfront synchronization workflows where contracted rooms are linked to corresponding Checkfront bookings.

!!! warning
    Checkfront integration is operationally sensitive. Sync workflows involve booking modification and invoice generation risks. Confirm with management before configuring or using Checkfront item mappings.

## Adding or Updating a Hotel

When adding a new hotel or updating an existing one for a new season:

1. **Create or verify the hotel record** — Name, description, and contact information
2. **Configure seasons** — Start and end dates for each pricing period
3. **Add room categories** — Names, descriptions, and optional quantity limits
4. **Configure occupancy types per category** — Only the occupancy options that actually exist for that room
5. **Enter rates** — For each season × room category × occupancy type combination
6. **Add meal packages** — Hotel-specific options with commission percentages
7. **Set FOC rules** — Per the hotel agreement
8. **Update policies** — Cancellation, payment, and operational terms

## Best Practices

1. **Verify seasonal date ranges** at the start of each new season — a boundary error silently misdirects contract pricing.
2. **Double-check occupancy pricing** — Single vs. double occupancy rates have a significant impact on contract totals.
3. **Ensure room categories match actual hotel inventory** — Do not configure categories or occupancy types that are not genuinely available.
4. **Keep policies current** — Outdated cancellation or payment terms in contract PDFs create confusion.
5. **Review FOC rules carefully** before contract generation season begins.
6. **Confirm meal package commission settings** — These vary by hotel and affect contract totals.
7. **Use consistent naming** across seasons and room categories to avoid confusion in contracts and price sheets.

## Related

- [Group Contract Management](ContractManagement.md)
- [Dive Packages & Pricing Configuration](DivePackages.md)
- [Dive Analytics & Operational Insights](Analytics.md)

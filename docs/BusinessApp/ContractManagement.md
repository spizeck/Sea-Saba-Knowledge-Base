# Group Contract Management

The Contract Management system is used to build group dive vacation contracts that combine hotel accommodations, dive packages, and meal packages into a single priced document. The system handles commission calculations, FOC (Free of Charge) logic, and generates customer-ready PDFs. All pricing is pulled automatically from pre-configured hotels, seasons, room rates, dive packages, and meal packages.

## What the System Is Built Around

Contracts depend on correctly configured back-end data. Before a contract can be built accurately, the following must be set up in the system:

- **Hotels** — Properties available for booking
- **Seasons** — Date ranges that determine which rates apply
- **Room Categories & Rates** — Per-hotel, per-season occupancy pricing
- **Dive Packages** — Available packages and seasonal pricing
- **Meal Packages** — Hotel-specific meal options and commission rules

If any of these are missing or misconfigured, contract calculations will be incorrect.

## Creating a Contract

Contracts are built through a multi-step wizard. Work through each step carefully — errors in early steps affect all downstream calculations.

### Step 1 — Basic Group Information

Enter the core details for the group:

- **Group Name** — The name used to identify this contract
- **Travel Dates** — Arrival and departure dates
- **Hotel** — Select the hotel for this group
- **Booking Type** — Select one:
  - **Dive Shop** — 10% or 15% room commission
  - **Tour Operator** — 20% or 25% room commission

> The booking type determines the room commission percentage applied throughout the contract. Seasons are determined automatically based on the travel dates entered.

### Step 2 — Room Selection

Room options are filtered based on the selected hotel and the season covering the travel dates.

For each room type in the group:

1. Select the **room category** available at that hotel
2. Select the **occupancy type** (single, double, triple, etc.)
3. Enter the **number of rooms**

Room pricing is pulled automatically from the configured seasonal rates for that hotel. Repeat this step for each room category needed in the group.

### Step 3 — Dive Package Selection

Dive packages are not hotel-specific but are priced by season.

- Select the **dive package**
- Enter the **number of divers**

Not all guests in a group need to be divers. The diver count is entered separately from room counts and does not need to match the total number of guests.

### Step 4 — Meal Package Selection

Meal packages are **hotel-specific**. Available options will reflect what is configured for the selected hotel.

- Select the **meal package** (if applicable)
- Enter the number of guests on the meal plan

Meal package commissions may vary by hotel and are calculated separately from room commissions. FOC guests may still be charged for meal packages depending on how the hotel is configured.

### Step 5 — Automatic Calculations

Once all selections are made, the system calculates the full contract summary:

- **Hotel room pricing** — Based on room category, occupancy, season, and quantity
- **Dive package pricing** — Based on package selection and diver count
- **Meal package pricing** — Based on hotel-specific meal rates
- **Commission** — Applied based on booking type and hotel meal rules
- **FOC** — Free of charge guests calculated and deducted automatically
- **Group total** — Combined pricing across all components

Review the summary carefully before generating the PDF.

## FOC Logic

FOC (Free of Charge) guests reduce the billable total for qualifying groups.

- **Dive FOC** — Uses a **7+1 structure**: for every 7 paying divers, 1 diver is free.
- **Hotel FOC** — Hotel-specific rules configured per property. Not all hotels use the same FOC structure.
- **Meal packages** — FOC guests may still be charged for meal packages depending on hotel configuration. Confirm the hotel's meal FOC rules before finalizing.

FOC calculations are applied automatically during summary generation. Always verify the FOC result against the group size before sending a PDF to the customer.

## Commission Structure

Room commissions are determined by the booking type selected in Step 1:

| Booking Type | Room Commission |
|---|---|
| `diveShop10` | 10% |
| `diveShop15` | 15% |
| `tourOperator20` | 20% |
| `tourOperator25` | 25% |

Meal package commissions are configured per hotel and may differ from the room commission rate. Dive package commissions are handled separately from room commissions.

> Confirm the correct booking type before building the contract. Changing it later requires editing the contract and creating a new revision.

## Contract Revisions

Editing a contract creates a new revision rather than overwriting the original. The previous version is archived automatically and the revision history is preserved.

- **Always use the revision workflow** when changes are needed after a contract has been shared or finalized.
- Previous revisions remain accessible for reference.
- The system maintains links between the original contract and all subsequent revisions.

Do not create a duplicate contract to reflect changes — edit the existing contract and allow the system to version it correctly.

## PDF Generation

Once the contract summary is reviewed and correct, generate the customer-ready PDF. The PDF includes:

- Hotel name and details
- Room category and occupancy breakdown
- Dive package details
- Meal package details
- Pricing summary and group totals
- Applicable policies
- Customer confirmation and signature area

Hotel price sheets can also be generated separately when needed for reference or pre-booking communications.

## Checkfront Integration

The system supports optional synchronization with Checkfront bookings. Contracts can be linked to a corresponding Checkfront booking to align operational records.

!!! warning
    Checkfront sync is handled carefully due to risks around invoice duplication and booking modification conflicts. This integration may not be enabled in all operational scenarios. Confirm with management before attempting to sync a contract with Checkfront.

## Best Practices

1. **Verify travel dates carefully** — Seasons are determined automatically from dates. A one-day error can shift pricing to a different season.
2. **Confirm occupancy types match the customer request** — Single vs. double occupancy has a significant price impact.
3. **Double-check diver counts** before finalizing — FOC calculations depend on the diver count being accurate.
4. **Review FOC results** in the summary — Verify the system applied FOC correctly for both diving and hotel.
5. **Confirm commissions are correct** before generating a PDF for the customer.
6. **Use revisions, not duplicates** — Edit the existing contract when changes are needed after it has been shared.

## Related

- [Dive Package Configuration](DivePackages.md)
- [Hotel & Room Management](HotelManagement.md)
- [Troubleshooting Common Issues](Troubleshooting.md)

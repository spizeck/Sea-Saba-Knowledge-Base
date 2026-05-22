# Dive Packages & Pricing Configuration

Dive packages are configured centrally in the Business App and shared across all hotels. Pricing may vary by season. Group contracts pull dive pricing directly from these configured packages — any change to dive package pricing automatically flows through to future contract calculations.

## Rates

| Days Booked | Package Type | Diving Only (Per Day) | With Full Rental Gear (Per Day) | Notes |
|---|---|---|---|---|
| 1 Day | Two Tank Boat Dive | $155.00 | $195.00 | Nitrox included |
| 2 Days | Two Tank Boat Dive | $147.00 | $185.00 | Nitrox included. Max 1 day gap in booking. |
| 3-4 Days | Two Tank Boat Dive | $140.00 | $175.00 | Nitrox included |
| 5+ Days | Two Tank Boat Dive | $132.00 | $165.00 | Nitrox included |
| Per day | Add Third Dive | $50.00 | $50.00 | No gear surcharge. Nitrox included |
| Per day | Single Afternoon Dive | $95.00 | $135.00 | No discounts. Nitrox included |
| Per day | Night Dive | $115.00 | $115.00 | No discounts. Nitrox included |
| 5 Days of Diving | 13 Dives in 5 Days | $750.00 | $900.00 | Nitrox included. No refunds on unused dives. |

> Nitrox is included in all standard boat diving packages. Full rental gear pricing covers the complete gear set and is calculated separately from diving-only rates.

## Schedule

Pickup and departure times are operational targets. Actual times may vary slightly based on conditions and operations.

| Taxi Pickup Time | Departure Time | Return Time | Package Type | Requirements / Description |
|---|---|---|---|---|
| 8:30 AM | 9:00 AM | 1:00 PM | Advanced 2-Tank Dive | AOW & 20 dives or OW & 50 dives. Depths up to 110 feet / 33 meters. Nitrox Mandatory on Dive 1. |
| 10:00 AM | 10:30 AM | 2:30 PM | Classic 2-Tank Dive | Certified divers. All levels welcome. |
| 12:30 PM | 1:00 PM | 3:00 PM | Afternoon 1-Tank Dive | Certified divers. Combined with snorkeling and courses. |
| 12:30 PM | 1:00 PM | 3:00 PM | Afternoon Snorkel | Not guided. Must be a comfortable swimmer. |

### Advanced 2-Tank Dive

Designed for experienced divers. The first dive may exceed recreational training depths for newer divers. Nitrox is mandatory for the first dive.

**Requirements:**

- AOW certification + 20 logged dives, **or**
- OW certification + 50 logged dives

### Classic 2-Tank Dive

Standard recreational boat diving. Suitable for all certified divers. No experience requirements beyond a valid certification.

### Afternoon 1-Tank Dive

Typically combined operationally with snorkeling, courses, or refresher programs. Runs on the afternoon boat departure.

## How Multi-Day Dive Discounts Work

Multi-day dive discounts are designed for guests diving on a mostly continuous schedule.

- A maximum of **one rest day** is allowed between dive days without resetting the discount.
- Taking more than one day off requires re-staging equipment and re-planning logistics — the **multi-day discount resets** at that point.

The one-day allowance covers typical rest days within an active diving holiday. Larger gaps are treated as separate bookings for pricing purposes.

## What's Included

All dive packages include:

- **Nitrox** — Included with all packages
- **Tanks and weights** — Standard with every dive
- **Boat and crew** — Captain, guide, and surface support
- **Transfers** — Taxi pickup and return per the schedule
- **Refreshments** — Water and Gatorade on the boat

## Package Rules

- **Multi-day gap** — Maximum one rest day allowed before discount resets
- **Cancellation policy** — 48 hours for full refund
- **Weather policy** — Dives cancelled due to weather are rescheduled
- **13-Dive Package** — No refunds on unused dives

## Integration with Group Contracts

Dive packages are a core component of the Group Contract Management system.

- Group contracts select a dive package and enter a diver count during Step 3 of the contract wizard.
- Dive pricing is calculated automatically from the configured package rates.
- Seasonal pricing is integrated into contract calculations — contracts built in different seasons will reflect the correct rate automatically.
- Dive package pricing is **independent of hotel selection**. The same packages apply across all hotels.

> Any update to dive package pricing will affect future contract calculations. Verify pricing is correct before building contracts for a new season.

## FOC Integration

Dive FOC follows the standard **7+1 structure**: for every 7 paying divers, 1 diver is free. FOC calculations are applied automatically during contract summary generation and affect dive pricing independently from hotel FOC rules.

## Configuring a Dive Package

When adding or updating a dive package in the system:

1. **Package Name** — Clear, descriptive name matching the operational offering
2. **Description** — What is included and any experience or certification requirements
3. **Season** — The season this pricing applies to
4. **Diving Only Price** — Per-day rate without rental gear
5. **Full Rental Gear Price** — Per-day rate with the complete rental gear set
6. **Nitrox Included** — Flag whether Nitrox is included (standard for all current packages)
7. **Discount Rules** — Multi-day discount tiers and gap policy

## Best Practices

1. **Verify seasonal pricing** before building contracts for a new season.
2. **Confirm package requirements** match the diver experience levels in the group — particularly for the Advanced 2-Tank Dive.
3. **Double-check rental gear pricing** when a group has mixed own-gear and rental-gear divers.
4. **Ensure schedules align** with actual vessel operations before communicating times to groups.
5. **Review Nitrox inclusion** — Nitrox is included in all current packages but confirm this when configuring new packages.
6. **Keep package descriptions accurate** — What is configured in the system sets the operational expectation for staff and contracts.

## Related

- [Group Contract Management](ContractManagement.md)
- [Dive Log & Marine Life Sightings](DiveLogging.md)
- [Hotel & Room Management](HotelManagement.md)

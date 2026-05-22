# Sea Saba Business App — Quick Start Guide

The Sea Saba Business App is an internal operational platform built specifically around Sea Saba's workflows. It is not a generic booking engine or off-the-shelf business tool. Different staff members may only have access to certain modules depending on their role and permissions.

## Modules Overview

### Contracts
Build group dive vacation contracts combining hotel rooms, dive packages, and meal packages. The system calculates pricing, commissions, and FOC automatically and generates printable customer-ready PDFs. Contracts use pre-configured hotel rates, seasonal pricing, and occupancy types — the wizard guides you through each step.

### Dive Operations
Log completed dives after boats return. Each log captures the dive site, guide, boat, maximum depth, water temperature, and drift dive status. After the basic information is entered, the form walks through species of concern sightings. Dive log data feeds directly into the Analytics system.

### Maintenance
Record completed maintenance against equipment assets. Track service schedules by hours, date, cycles, or combinations. Log parts used, current readings, and next service due. Maintenance logs create the historical service record for each piece of equipment.

### Assets
Organize operational equipment in parent/child structures — vessels contain engines, compressors contain filters and dryers, vehicles contain engines and batteries. Each asset can carry its own maintenance schedule and log history independently. Assets exist primarily to give maintenance records somewhere accurate to live.

### Analytics
Review operational patterns from logged dive data. See dive site repetition over the last 7 days with color-coded boat/site matrices, water temperature trends over 30 days to 24 months, site visitation patterns, guide and boat activity, and seasonal wildlife sighting trends.

## Permissions & Access

Staff may only see the modules they have been granted access to. Permissions are role-based and managed through the admin system by management.

Typical access patterns:

| Role | Likely Access |
|---|---|
| Dive Guide / Divemaster | Dive log entry |
| Boat Captain | Dive log entry |
| Operations / Management | All modules |
| Maintenance Technician | Assets, Maintenance |
| Sales / Admin | Contracts, Hotels |

If you cannot access a module you need, contact management to review your permissions.

## Navigation

- The **sidebar** provides access to all modules you have permission to use.
- **Search and filters** are used throughout the app to find contracts, assets, and dive logs quickly.
- Data is stored in **Google Firestore** and updates in real time — changes made by one user are reflected immediately for others.

## Typical Daily Usage

Not all staff use all modules. Usage depends on your operational responsibilities.

### After Dives Return
- Log each dive in **Dive Operations** while details are fresh — site name, guide, boat, depth, temperature, and sightings.

### After Completing Maintenance
- Log the service in **Maintenance** against the correct child asset, recording hours, parts used, and next service due.

### Building a Group Contract
- Open **Contracts**, start a new contract, and work through the wizard: group details and dates → rooms → dive package → meal package → review calculations → generate PDF.

### Reviewing Site Rotation
- Check the **Analytics** dashboard for the 7-day site matrix to see if any boat/site combinations are showing repeated visits.

### Updating Hotel Pricing for a New Season
- Update seasons, rates, and room categories in **Hotel Configuration** before building contracts for the new period.

## Module Summaries

### Group Contracts
- Built from pre-configured hotels, seasons, room categories, dive packages, and meal packages.
- Pricing, commissions, and FOC are calculated automatically.
- Editing a contract creates a new revision — previous versions are archived.
- PDFs include room breakdowns, dive packages, meal packages, totals, and policies.

### Dive Logs
- Complete logs as soon as possible after each dive.
- Accurate site names, temperatures, guide names, and sightings directly improve analytics quality.
- Sightings should only reflect species actually observed on that dive.

### Maintenance Logs
- Log maintenance against the most specific asset — the engine, not the vessel.
- Record actual hour readings, not estimates.
- Keep asset operational status current so staff can see what is and isn't available.

## Getting Help

If something isn't working as expected:

1. Check the relevant section of this knowledge base.
2. Contact management or your system administrator.
3. See the [Troubleshooting Common Issues](Troubleshooting.md) page.

## Module Documentation

- [Group Contract Management](ContractManagement.md)
- [Dive Packages & Pricing Configuration](DivePackages.md)
- [Hotel Configuration & Seasonal Room Rates](HotelManagement.md)
- [Dive Log & Marine Life Sightings](DiveLogging.md)
- [Maintenance Tracking & Service Logs](Maintenance.md)
- [Equipment & Maintenance Tracking](AssetManagement.md)
- [Dive Analytics & Operational Insights](Analytics.md)


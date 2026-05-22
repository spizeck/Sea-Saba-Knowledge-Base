# Equipment & Maintenance Tracking

The Equipment & Maintenance Tracking section of the Business App is where Sea Saba manages the service history, maintenance schedules, and operational status of company equipment. Assets exist primarily so maintenance records and service schedules can be attached to the correct piece of equipment — keeping boats, compressors, vehicles, and dive gear operationally ready.

## What Is an Asset?

An **asset** is any piece of equipment that needs its own maintenance history, service schedule, serial number, or operational status. Assets are the backbone of the maintenance tracking system — everything else is attached to them.

> **Create an asset when:** the item needs service records, has a service interval, has a serial number worth tracking, or needs its own operational status (Active, Out of Service, etc.).

> **Do not create assets for:** small consumables like oil filters, O-rings, cartridges, anodes, or impellers. These should be recorded as **parts used** in a maintenance log, not as standalone assets.

### Examples

| Correct ✓ | Incorrect ✗ |
|---|---|
| "Shark Bait" (vessel) | Individual oil filters |
| "Port Yamaha 300" (engine on Shark Bait) | Random hand tools that don't require tracking |
| "Old Red Compressor" with oil and filter schedules | Consumable O-rings or zincs |
| "Oxygen Kit 1" with inspection dates | Single-use supplies |

## Asset Categories

Use the following categories when creating assets:

- **Vessel** — Dive boats and tenders
- **Engine** — Outboard and inboard engines
- **Compressor** — Air and Nitrox compressors
- **Vehicle** — Trucks and utility vehicles
- **Tank** — Scuba cylinders
- **Safety Equipment** — O2 kits, first aid, rescue gear
- **Rental Equipment** — BCDs, regulators, computers, wetsuits
- **Facility Equipment** — Generators, water systems
- **Tool** — Equipment requiring tracking or inspection

## Parent & Child Assets

Assets can be organized in a **parent / child** relationship. Parent assets provide organization; child assets can carry their own maintenance records and service schedules independently.

**Log maintenance against the most specific asset possible.** A Yamaha 300 oil change should be logged to the engine, not just the boat.

### Examples

**Vessel: Shark Bait**

- Port Yamaha 300 (Engine)
- Starboard Yamaha 300 (Engine)
- House Batteries
- Electronics / VHF

**Old Red Compressor**

- Final Filters
- Air Dryer
- O2 Analyzer

**Vehicle: Blue Truck**

- Engine
- Battery
- Tires

## Operational Status

Each asset has an operational status:

| Status | Meaning |
|---|---|
| **Active** | In normal service |
| **Maintenance** | Currently being serviced |
| **Out of Service** | Not available for use |
| **Retired** | No longer in operation |

Use **Out of Service** or **Maintenance** to flag equipment that should not be used. This makes it immediately visible in the asset list without needing to dig through notes.

## Service Tracking Types

Each asset (or service item) uses one of the following tracking types:

| Type | Use When |
|---|---|
| **None** | No scheduled service required |
| **Date** | Service due on a calendar interval (e.g., annually) |
| **Hours** | Service due after a set number of operating hours |
| **Mileage** | Service due by odometer reading |
| **Cycles / Fills** | Service due after a number of uses or tank fills |
| **Combination** | Date or hours — whichever comes first |

## Multiple Service Items per Asset

Each asset can have multiple maintenance items with independent schedules. This allows a single engine to track oil changes, impeller replacement, and spark plugs separately without mixing them up.

### Example: Yamaha 300 Outboard Engine

| Service Item | Interval |
|---|---|
| Oil change | Every 100 hours |
| Lower unit oil | Every 100 hours |
| Impeller | Annually |
| Spark plugs | Every 300 hours |
| Anodes | Every 6 months |

### Example: Old Red Compressor

| Service Item | Interval |
|---|---|
| Oil change | Every 90 hours |
| Final filters | Every 50 hours |
| Condensate drain | Daily |
| Major service | Every 1000 hours |

## Adding an Asset

When creating a new asset, fill in the following:

1. **Asset Name** — Clear, descriptive name (e.g., "Port Yamaha 300", "Old Red Compressor")
2. **Parent Asset** — Select the parent if this is a component of a larger asset
3. **Category** — Select from the category list above
4. **Operational Status** — Start with Active unless otherwise
5. **Serial Number** — Record if available
6. **Notes** — Any relevant information about the asset
7. **Service Schedule** — Add one or more maintenance items with tracking type and interval

> Use consistent, descriptive names. "Port Yamaha 300 (Shark Bait)" is more useful than "Engine 1."

## Deciding Whether Something Should Be an Asset

Ask these questions:

- Does it need its own service history? → **Create an asset**
- Does it have a recurring service interval? → **Create an asset**
- Does it have a serial number worth tracking? → **Create an asset**
- Does it need an operational status (active, out of service)? → **Create an asset**
- Is it a consumable that gets swapped out during maintenance? → **Record as parts used in a maintenance log, not an asset**

## Logging Maintenance

The main day-to-day workflow is logging completed maintenance against an asset. Each maintenance log should include:

- **Asset** — What was serviced
- **Date completed** — When the work was done
- **Current reading** — Hours, mileage, or cycles at time of service
- **Service performed** — Description of the work done
- **Parts used** — What was replaced or consumed
- **Notes** — Anything relevant to the service
- **Completed by** — Who did the work
- **Next due** — Next service reading or date
- **Attachment** *(optional)* — Photo or document

### Main Workflow

```
Asset → Service Schedule → Log Maintenance → Next Service Due Updated
```

After logging maintenance, the system updates the **Service Due** reading for that item automatically based on the interval.

## Asset List View

The main asset list shows at a glance:

| Column | Description |
|---|---|
| **Asset Name** | Name of the asset |
| **Parent Asset** | Parent asset if applicable |
| **Category** | Asset type |
| **Status** | Operational status |
| **Tracking Type** | Date / Hours / Cycles / etc. |
| **Current Reading** | Current hours, date, or cycles |
| **Service Due** | When next service is due |
| **Overdue** | Highlighted if service is past due |
| **Actions** | View, Log Service, Edit |

## Marking Equipment Out of Service

If a piece of equipment is unavailable — for repair, awaiting parts, or removed from rotation — update its status to **Out of Service** or **Maintenance**. This flags it clearly in the list so staff don't assign or use it by mistake.

Update the status back to **Active** once the equipment is returned to service.

## How Service Reminders Work

When a service item is due (or overdue), it appears highlighted in the asset list and triggers a reminder. The **Service Due** field shows the next target reading or date. Once maintenance is logged and a new reading is recorded, the next due date or reading is calculated automatically from the interval.

## Best Practices

1. **Log maintenance promptly** — Record it the same day the work is done.
2. **Use the most specific asset** — Log the oil change to the engine, not the boat.
3. **Keep current readings updated** — Engine hours are only useful if they're current.
4. **Use status flags** — Mark equipment Out of Service rather than leaving notes buried in records.
5. **Don't over-create assets** — Consumables belong in maintenance log parts lists, not as assets.
6. **Use parent/child relationships** — Group components under their parent equipment for clean organization.

## Related

- [Equipment Maintenance](Maintenance.md)
- [Compressor Operation SOP](../Equipment/CompressorOperation.md)
- [Compressor Servicing SOP](../Equipment/CompressorServicing.md)
- [Vehicle Maintenance SOP](../Equipment/SOPVehicleMaint.md)

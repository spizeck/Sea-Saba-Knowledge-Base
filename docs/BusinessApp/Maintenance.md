# Maintenance Tracking & Service Logs

The Maintenance Tracking system is how Sea Saba records completed maintenance, monitors service schedules, and keeps operational equipment ready. Assets exist primarily so service records and maintenance schedules can be attached to the correct piece of equipment — see [Equipment & Maintenance Tracking](AssetManagement.md) for how assets are structured.

The maintenance system is operationally focused. It is not an accounting or budgeting tool.

## How the System Is Organized

Maintenance tracking is built around three core elements:

- **Assets** — The equipment being maintained (boats, engines, compressors, tanks, vehicles, safety gear)
- **Service Schedules** — What maintenance is required and how often
- **Maintenance Logs** — The record of completed service

The relationship between them is straightforward:

```
Asset → Service Schedule → Maintenance Log → Next Service Due Updated
```

### Parent & Child Assets

Equipment is organized in parent/child relationships. Child assets carry their own maintenance histories independently from their parent.

**Log maintenance against the most specific asset possible.**

| Parent | Child Assets |
|---|---|
| Shark Bait (vessel) | Port Yamaha 300, Starboard Yamaha 300, House Batteries |
| Old Red Compressor | Final Filters, Air Dryer, O2 Analyzer |
| Blue Truck (vehicle) | Engine, Battery, Tires |

A Yamaha 300 oil change should be logged to the engine — not to the boat.

## Service Tracking Types

Maintenance schedules are based on the tracking type that matches the equipment:

| Type | Example |
|---|---|
| **Date** | Tank VIP annually, O2 analyzer calibration |
| **Hours** | Compressor oil change every 90 hours, outboard service every 100 hours |
| **Cycles / Fills** | Filter replacement tracked by compressor run hours |
| **Mileage** | Vehicle service by odometer |
| **Combination** | Outboard impeller — annually or 100 hours, whichever comes first |

Each asset can have multiple service items with independent schedules. A Yamaha 300 outboard might track oil changes, lower unit oil, impeller, spark plugs, and anodes all separately.

## Maintenance Logs

Maintenance logs are the core workflow. Every time service is completed on an asset, a log entry should be created.

Each maintenance log records:

- **Asset** — What was serviced
- **Date completed** — When the work was done
- **Current reading** — Hours, date, or cycles at time of service
- **Work performed** — Description of what was done
- **Parts used** — What was replaced or consumed
- **Notes** — Anything relevant to the service or condition found
- **Completed by** — Who did the work
- **Next due** — Next service reading or date
- **Attachment** *(optional)* — Photo or supporting document

Maintenance logs build the historical service record for each asset. A complete log history makes it easier to troubleshoot recurring issues, verify service was completed, and track reliability over time.

### Sea Saba Maintenance Log Examples

| Asset | Service | Tracking Type |
|---|---|---|
| Old Red Compressor | Oil and filter change | Every 90 hours |
| Old Red Compressor — Final Filters | Filter replacement | Every 50 hours |
| New Red Compressor | Oil and filter change | Every 90 hours |
| Port Yamaha 300 | Full outboard service | Every 100 hours / annually |
| Scuba Tank (serial #) | Visual Inspection (VIP) | Annually |
| Oxygen Kit 1 | Inspection and cylinder check | Date-based |
| O2 Analyzer | Calibration | Date-based |
| Boat Safety Equipment | Full safety gear inspection | Date-based |

## Operational Status

Each asset has an operational status that reflects its current readiness:

| Status | Meaning |
|---|---|
| **Active** | In normal service |
| **Maintenance** | Currently being serviced |
| **Out of Service** | Not available for use |
| **Retired** | No longer in operation |

Mark equipment **Out of Service** or **Maintenance** whenever it is unavailable so staff can see its status immediately in the asset list without searching through notes. Return it to **Active** once service is complete and it is back in operation.

## Preventive Maintenance

The goal is to complete maintenance before equipment becomes a problem — not after. For Sea Saba operations, consistent preventive maintenance is critical for:

- **Compressor reliability** — Overdue oil or filter changes can affect air quality and compressor life
- **Vessel safety** — Engine service, impellers, and safety equipment inspections directly affect operational safety
- **Rental equipment readiness** — Regulators, BCDs, and computers need to be ready when guests arrive
- **Tank safety** — VIP and hydro intervals are regulatory requirements, not optional

> Do not allow critical equipment to become significantly overdue. Service before the interval expires whenever possible.

## Relationship to SOPs

SOPs and maintenance logs serve different purposes and work together:

- **SOPs define how** maintenance is performed — procedures, safety steps, torque specs, filter part numbers.
- **Maintenance logs record when** maintenance was completed — date, hours, parts, technician.

**Example:** The [Compressor Servicing SOP](../Equipment/CompressorServicing.md) explains the filter change procedure for the Old Red Compressor. The maintenance log records that filters were changed on a specific date at a specific hour reading, using specific part numbers, by a named technician.

Both are necessary. The SOP without the log leaves no history. The log without the SOP leaves no procedure.

## Best Practices

1. **Log maintenance immediately** after completion — do it the same day while details are fresh.
2. **Use accurate readings** — record actual hours or dates, not estimates.
3. **Log to the correct child asset** — oil change goes to the engine, not the vessel.
4. **Record enough detail** for future troubleshooting — brief notes on condition found are valuable.
5. **Keep operational status current** — mark equipment Out of Service when it is unavailable.
6. **Don't let critical equipment go significantly overdue** — compressors, engines, and safety equipment should be prioritized.
7. **Notify management** when recurring issues appear in the log history for the same asset.

## Related

- [Equipment & Maintenance Tracking](AssetManagement.md)
- [Compressor Operation SOP](../Equipment/CompressorOperation.md)
- [Compressor Servicing SOP](../Equipment/CompressorServicing.md)
- [Vehicle Maintenance SOP](../Equipment/SOPVehicleMaint.md)

# Changelog

All notable changes to PAlamo Life Tracker. Versions follow semantic versioning (MAJOR.MINOR.PATCH).
Versions before 1.0 were test builds (0.1.0 to 0.2.3).

The running version is shown at the bottom of the in-app Menu and on the first line of every copied game log.

## [1.1.0] - 2026-11-02
First release on GitHub. No code changes from 0.2.3; this version number marks the build that goes to testers.

## [0.2.3] - 2026-11-02
### Added
- The "Night" label is now a toggle button. Tap it to hide the moon; tap again to bring the moon back. The button itself always stays, and the setting is remembered. It is not undone by Undo and resets to on with New game.

## [0.2.2] - 2026-11-02
### Added
- "Night" label written vertically (perpendicular) to the right of the moon, same orientation as the earlier player-name label.

## [0.2.1] - 2026-11-02
### Changed
- Moon icon is now much larger (64 px, up from 36 px) and sits alone in the middle strip.
- Turn tracking removed: no End turn buttons, no active-player name or turn number, no active-panel highlight. New game logs and copied logs no longer include turn counts.

### Notes
- Old saved logs may still contain earlier "Turn N" lines.
- The database fork still sends `turns = 1` for every game, because the table requires that column.

## [0.2.0] - 2026-11-02
### Changed
- One shared 30-minute round timer (Start/Pause in the bottom strip) replaces the two per-player chess clocks. The turn button no longer switches clocks.
- Night mode only: the app is always dark in both layouts. The Day/Night button is gone and a saved light-theme choice is ignored.
- A waning crescent moon replaces the turn arrow in the middle strip. The active player's name and the turn number are still shown beside it.
- Menu: "Minutes per player" is now "Round timer (minutes)", and "Reset clocks" is now "Reset timer".

### Notes
- Saves from earlier versions are migrated to a 30:00 round timer once; life, counters, names and layout are kept.

## [0.1.1] - 2026-11-02
### Fixed
- Double-tapping (fast +/- taps) no longer zooms the page on phones (`touch-action: manipulation`).

## [0.1.0] - 2026-11-02
First test release.

### Added
- Two players with life, Ingredient and Material counters, editable names, and a color picker using Palworld element palettes.
- Two layouts: jaybl🩸🩸d (life bar with round tokens) and Icarys (three large tiles).
- Per-player End turn button, chess-style clocks (15 minutes each by default) and a sideways active-player indicator.
- Night/Day theme switch and a Player 1 flip for playing with the phone flat between two people.
- Menu with New game (resets life to 10 and restores Ingredient and Material), Setup, History, and Previous games (up to 200 saved in the browser) with Copy log.
- App version shown in the Menu and in copied logs.

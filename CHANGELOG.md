# Changelog

All notable changes to PAlamo Life Tracker. Versions follow semantic versioning (MAJOR.MINOR.PATCH).
Versions before 1.0 were test builds (0.1.0 to 0.2.3).

The running version is shown at the bottom of the in-app Menu and on the first line of every copied game log.

## [1.7.0] - 2026-11-05
### Changed
- **Night is off by default.** New games and fresh installs start with no moon; tap the Night button to show it. Existing saved games keep whatever Night setting they already had.
- **Fonts are now part of the repo** (`fonts/`), not loaded from Google. The page makes no outside requests, works fully offline, and visitors' IP addresses are no longer sent to Google. Only the weights the app uses are included: DM Sans 400 and 700, Bricolage Grotesque 800 (Latin subset, about 50 KB total). Both fonts are under the SIL Open Font License; the license texts are in `fonts/`.
- **Dice roll shows only the dice.** All the text on the roll card (the total and the tap hints) is removed. A screen reader still announces the roll. The log still records each roll and its total.

## [1.6.2] - 2026-11-05
### Changed (efficiency, no visible change)
- The running timer saved the whole game to storage four times a second. It now saves every 5 seconds, and also when the page is hidden or closed, so battery and storage writes drop sharply during a game.
- Taps no longer rebuild the Menu while it is closed (including the full history list). The Menu is built when you open it.
- Saved games build their log lines only when you expand them, so a long history of games no longer slows every tap.
- Removed unused styles and state left over from earlier versions (end-turn button, active-player highlight, turn counter, panel border transition).
- The timer display only touches the page when the text changes.

## [1.6.1] - 2026-11-05
### Changed
- Bottom row order is now Start/Pause, Undo, Menu (Start/Pause and Undo swapped).
- The dice button is larger (58 px square with a 38 px die icon, up from about 40 px with a 22 px icon) so it is easier to tap. Applies to both pages.

## [1.6.0] - 2026-11-05
### Changed
- Middle strip is now two rows. Top row: vertical timer on the far left, moon and Night button (and the horse icon when it is on) in the middle, dice button on the far right. Bottom row: Undo, Start and Menu as three equal-width buttons. The horse icon no longer adds a third row, and the moon stays full size on narrow phones. The strip is about 46 px taller than before, so the player panels are slightly shorter. Applies to both pages.

## [1.5.1] - 2026-11-05
### Changed
- The round timer is now written vertically (perpendicular, reading bottom to top like the Night label) instead of tilted 45 degrees. It sits to the left of the moon and takes much less width. Applies to both pages.

## [1.5.0] - 2026-11-05
### Changed
- Middle strip rearranged into three columns. The round timer is rotated 45 degrees and sits to the left of the moon. The dice button is in the exact center of the screen. Undo, Start and Menu are on the right. With the horse armor icon on, the moon, Night button and horse icon take the top row and the dice stay centered below. Applies to both pages.

## [1.4.1] - 2026-11-05
### Changed
- One shared dice button (a die icon with three pips) in the middle strip, between Start and Menu, replaces the two per-player "Roll 2d6" buttons. The result card and log lines no longer name a player: "Rolled 2d6: 3 + 5 = 8". Applies to both pages.

## [1.4.0] - 2026-11-05
### Added
- Two six-sided dice. Each player panel has a "Roll 2d6" button next to the name, so it faces whoever is rolling. The result opens in a centered card showing both dice and the total, readable from both sides of the table. Tap the dice to roll again, tap outside to close.
- Each roll is added to the game log, for example "Player 1 rolled 2d6: 3 + 5 = 8", and can be undone with Undo.
### Fixed
- On phones up to about 440 px wide (including 390 px iPhones and 360 px Android phones), the moon was clipped and the Night button overlapped the timer. The middle strip now scales down on narrow screens.

### Notes
- Dice use the browser's secure random generator (no modulo bias). A short tumble animation plays unless reduced motion is on. Applies to both pages.

## [1.3.1] - 2026-11-02
### Changed
- The horse armor setting moved from Setup to the bottom of the Menu, in a new "Premium Add-On" section with a "FREE.99" badge and a sales-pitch description. It is still free and still display only. Applies to both pages.

## [1.3.0] - 2026-11-02
### Added
- **PAlamo Life Delux**, a second page in the same repo at `delux/index.html`. Same game tracker, with a royal purple and gold look. When the horse armor icon is switched on in Menu, gold dollar signs run down both edges of the screen.
- Delux keeps its own saved data (separate from the standard page) and shows "PAlamo Life Delux" in the Menu footer and in copied logs.

### Changed
- The standard page is unchanged apart from the version number. Both pages share one version number and are released together.

## [1.2.0] - 2026-11-02
### Added
- Optional horse armor icon next to the moon and Night button. It is display only and off by default. It can only be turned on or off in Menu, under Setup. When it is on, the middle strip uses two rows (icons on top, timer and buttons below) so everything still fits on a phone.

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

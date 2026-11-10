# Changelog

All notable changes to PAlamo Life Tracker. Versions follow semantic versioning (MAJOR.MINOR.PATCH).
Versions before 1.0 were test builds (0.1.0 to 0.2.3).

The running version is shown at the bottom of the in-app Menu and on the first line of every copied game log.

## [2.7.0] - 2026-11-10
### Added
- **Works offline.** A new file, `sw.js`, saves a copy of the app and its fonts on the device the first time it is opened online. After that the app opens with no connection. The version line at the bottom of the Menu shows "Offline ready" once the copy is saved. When online, the newest release still loads first; if the connection fails or has not answered within 3 seconds, the saved copy opens instead and the newer one is saved for next time. This needs the hosted site (https); it does nothing when `index.html` is opened straight from a folder.
### Changed
- **The Menu is faster with a long history.** Each Menu section (History, counters, colors and dice, Layout, Previous games) is now rebuilt only when its own data changes, instead of all of them on every tap. Measured at 4x CPU slowdown with 2,000 log lines and 200 saved games, a color tap went from about 265 ms to about 30 ms.
### Fixed
- A saved game you had expanded under Previous games no longer snaps shut when you tap something else in the Menu.

## [2.6.0] - 2026-11-10
### Added
- **5-minute warning on the round timer.** When the timer first reaches 5:00 it plays three rising beeps (different from the bell), pulses an amber border with a "5 minutes left" banner for 6 seconds, turns the clock amber, and vibrates where the phone supports it. It fires once per round. Starting a timer that is already at or under 5:00 does not fire it; Reset timer and New game re-arm it. A backgrounded tab can delay it, and the banner then shows the time actually left.
- **Tournament bracket.** Menu > Tournament > Open bracket. Enter 2 to 32 names, one per line (line 1 is seed 1), and tap Build bracket for a single-elimination bracket. Top seeds get byes when the field is not a power of two. Tap a name to advance it, tap again to undo; undoing clears any later matches that depended on it. A Shuffle list button randomizes the seeding. The bracket is saved on the phone separately, so New game and Undo do not touch it. It is not linked to the life counters.

## [2.5.1] - 2026-11-06
### Added
- **Branding under the QR code in the Menu.** "Remember the PAlamo!" with "Share with pals, friends and all your buddies.", and a small line under the link: "PAlamo™ and Remember the PAlamo™ © 2026 James Pyle. All rights reserved."
### Changed
- The new-counter hint text now reads "e.g. Poison" instead of a game-specific example.

## [2.5.0] - 2026-11-06
### Added
- **Dice style picker.** Under "Dice color" there is a new "Dice style" row: Plain, Marble, Wood, Ice and Glass. The texture is drawn on top of whichever dice color you picked, and each button previews the style in that color. Plain is the default and looks like 2.4.0. Ice and Glass also put a small glint on every pip. The choice is saved on the phone and survives New game and Undo.
- The textures are drawn in code (no image files), about 4 KB added. Marble, Ice and the cracks vary slightly from face to face so the two dice don't look identical.

## [2.4.0] - 2026-11-06
### Added
- **Dice color picker in the Menu.** Under the two player colors there is now a "Dice color" row with the same six swatches (Grass, Fire, Water, Ice, Dark, Dragon). The dice take that color, with dark pips, and a small preview of two dice sits next to the heading. The choice is saved on the phone and survives New game and Undo.
### Changed
- The dice used to be ivory white. They now default to **Ice** (the closest of the six to white). There is no white option; tell me if you want one added as a seventh.

## [2.3.4] - 2026-11-06
### Changed
- **Dice land in 1.6 seconds** (2 in 2.3.3, 2.5 in 2.3.2, 4 in 2.3.1, 1.1 before that). Tune it with the `ROLL_MS` number in the code.

## [2.3.3] - 2026-11-06
### Changed
- **Dice land in 2 seconds** (2.5 in 2.3.2, 4 in 2.3.1, 1.1 before that). The time is the `ROLL_MS` number in the code if you want to tune it again.

## [2.3.2] - 2026-11-06
### Changed
- **Dice land in 2.5 seconds** (4 seconds in 2.3.1, 1.1 seconds before that). Same slowing tumble, rattle and thud.

## [2.3.1] - 2026-11-06
### Changed
- **Dice take 4 seconds to land** (they landed after about 1.1 seconds before). The tumble now starts fast and slows down, with the rattle sound following it, and ends with the thud. Tapping the roll card still closes it or rolls again, and the result is written to the log the moment you tap the dice button. With "reduce motion" turned on in the phone's settings, the dice still land at once.

## [2.3.0] - 2026-11-06
### Added
- **Boxing bell on the round timer.** Tapping Start rings the bell once (a long ring). Tapping Pause rings it twice, quickly. The bell is generated in the browser (no audio file) and follows the Menu's "Sound effects" checkbox. Nothing rings when the timer reaches 0:00 by itself, and Start does nothing (and is silent) if the timer is already at 0:00.

## [2.2.0] - 2026-11-06
### Changed
- **Player colors cut from 9 to 6:** Grass, Fire, Water, Ice, Dark and Dragon. Neutral, Electric and Ground are gone.
- **Dark is now a deeper purple** (it was a pale lavender), so it is clearly different from Dragon's pink.
- **Color picker is a 3 by 2 grid** so the six swatches line up.
- Saved games that used a removed color are moved to the nearest remaining one: Neutral becomes Ice, Electric becomes Fire, Ground becomes Grass. Default colors are unchanged (Player 1 Water, Player 2 Fire).

## [2.1.1] - 2026-11-06
### Changed
- **Layout picker shows screenshots.** The Menu's Layout buttons now show a small picture of the jaybl🩸🩸d and Icarys boards above each name, and the text description is gone. The pictures are embedded in the page (about 7 KB total), so they work offline. They are screenshots, so they need retaking if the board design changes.

## [2.1.0] - 2026-11-06
### Added
- **New game sound and return to the board.** After you confirm New game (the second tap), the Menu closes so you land on the main screen, and a short rising fanfare plays.
- **Night sound.** Toggling Night plays a spooky wobbling tone: a slow descending groan when Night turns on, and a shorter rising one when it turns off.
- Both sounds are generated in the browser (no audio files) and follow the existing "Sound effects" checkbox in the Menu, which now lists them.

## [2.0.0] - 2026-11-06
### Added
- **Visitor counting with GoatCounter.** The page now loads a small script from `gc.zgo.at` that reports page loads to a GoatCounter dashboard. It sets no cookies and collects no names or accounts, only counts, approximate country, browser, device and referrer.
- **Games-played count.** Tapping New game on a game that has any history sends one anonymous `game-played` event to GoatCounter. No game contents, names or scores are sent.
### Changed
- **New game button** at the top of the Menu is now a full-width solid red button, with its description centered underneath.
### Notes
- This is the first version that makes a network request after the page loads. The game state still stays on the device in localStorage, and the app itself still works offline; the counter just won't report while offline or when an ad blocker blocks it.
- Includes everything from 1.9.1 to 1.9.3 below.

## [1.9.1 to 1.9.3] - 2026-11-05
Entries for these three releases were reconstructed from the code differences against 1.9.0, so they are combined and not split by version.
### Changed
- **Sound engine replaced.** Sound is a new set of synthesized effects with no audio files: a low thump for life changes, a blip for counters, a rattle and thud for dice, and a falling "defeat" phrase followed by a rising "victory" phrase when a player's life reaches 0.
- **Sound is now a "Sound effects" checkbox in Menu → Setup** (on by default). The mute button on the home screen is gone, and the timer-end alarm, Undo, New game, Night and timer start/pause sounds from 1.9.0 no longer play.
- **Royal Horse Armor** now also switches the app to a purple-and-gold theme with gilded `$` rails in the side gutters, in addition to the horse icon.
- **Delux is retired.** `delux/index.html` is now a redirect page to the main app. Saved games from the old Delux page are merged into the main app's history once, the first time the new version loads.

## [1.9.0] - 2026-11-05
### Added
- **Sound effects**, synthesized in the browser with the Web Audio API (no audio files, no downloads, no licenses, about 6 KB of code). Sounds play for life up and down, a game-over sequence when a player's life drops to 0 or below, Ingredient/Material and other counter changes, the dice roll (rattle and thud), timer start, pause and end, Undo, New game and the Night toggle.
- **Mute button** on the home screen, at the right end of the Start / Undo / Menu row. The choice is saved on the device and survives reloads, New game and Undo. Sound is on by default.
### Notes
- Browsers only allow sound after the first tap on the page, so the timer-end alarm only sounds if you have tapped something since loading the page.
- On iPhone, the ringer switch silences web audio.

## [1.8.0] - 2026-11-05
### Added
- **QR code at the bottom of the Menu** ("Share this app") that opens the GitHub Pages site, so someone next to you can scan it to load the app. The standard page links to `https://jimpyle99.github.io/PAlamo-Life-Tracker/` and Delux links to the same address plus `delux/`. The code is a fixed image built into the page, so it works offline and adds no script or library (about 2.5 KB).

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

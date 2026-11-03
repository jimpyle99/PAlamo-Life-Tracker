# PAlamo Life Tracker

Two-player life, Ingredient and Material tracker with turn clocks, for the Palworld card game.
One file, `index.html`. No build step and no server.

## Run it
- Open `index.html` in a browser, or
- Host it with GitHub Pages: Settings -> Pages -> Deploy from a branch -> main / root.

Saved games and settings are kept in each person's own browser. Nothing is sent anywhere.

## Version
The current version is at the top of [CHANGELOG.md](CHANGELOG.md) and at the bottom of the in-app Menu.
Please include it when reporting a problem.

## Releasing a new version
Versions use MAJOR.MINOR.PATCH. Anything before 1.0 was a test build. Use a patch bump (1.1.1) for fixes and a minor bump (1.2.0) for new features.

1. Change `APP_VERSION` and `APP_DATE` near the top of the script in `index.html`.
2. Add an entry for it at the top of `CHANGELOG.md`.
3. Commit, tag and push (replace 1.1.1 with the new number):

```bash
git add -A
git commit -m "v1.1.1: short summary"
git tag -a v1.1.1 -m "v1.1.1"
git push --follow-tags
```

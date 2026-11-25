# Play and Quit

A phone-first game for quitting a habit. Log the last time you did it, and each new run has to outlast the one before.

- **The Boss** is your last run. Beat it to level up, and that run becomes the next Boss.
- **A Knockdown** is a slip. If the run was shorter than the Boss, you go back to level 1 and the shorter run becomes the new Boss. Your personal best always stays.
- **Two modes:** Quit for good (milestones up to 1 year, "Free") or Take a break (a set challenge with weekly checkpoints).

Available in English and Amharic (አማርኛ). Working title. All data stays in your browser's local storage on your device; nothing is sent anywhere.

## Safety

- Static site with no server, accounts, analytics or tracking.
- Strict Content Security Policy: scripts load only from this site; fonts from Google Fonts.
- Restored backups are rebuilt field by field and all text is escaped before display.

## Editing

Edit `src/app.html` (a single self-contained file), then run `python3 build.py` to regenerate `index.html`, `app.css` and `app.js`.

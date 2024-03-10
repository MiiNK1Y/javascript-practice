UI
- Font
    -Nunito
        - (https://fonts.google.com/specimen/Nunito)
        - (https://fonts.googleapis.com/css2?family=Nunito:ital@0;1&display=swap)

- Middle-of-the-screen app-window
    - Logo on top
    - PC-pick window
        - "PC will pick a choice when you pick a choice... no cheating now..."

    - Your-pick window
        - "Your option will show up here"

    - Button-row
        - "Rock" "Paper" "Sciccor"
        - "Play again"
            - stays gray till new round

    - Dev signature-row (bottom of site)
        - Web-domain
        - Contact-options
        - Picture

UI-COLORS
    - background
        #0d0c1d
    - app-window
        #a69cac
    - PC/your-pick window border + site-text
        #f1dac4


APPLICATION
    - set default states (maybe create cookie to save state for re-visit?)
    - on-click (rock/paper/scissor buttons)
        - create PC-pick (after player made their choice, so they can't game the prediction)
        - show your-pick
        - PC-loading animation for 1 sec (for fun)
        - show PC-pick
        - show a "win" or "loss" animation ("x beats y, you win/loose!")
        - show "play again" -button at the bottom (animation: dropping down smoothly)
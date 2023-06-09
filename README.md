# GoldenSunDjinnGuide

## Deploying Production Code

### DJANGO

1. Change the DJANGO_SECRET_KEY in djinnguide/.env to a new key, and DJANGO_DEBUG to *False*
2. Instead of using *python manage.py runserver 8000* use either *gunicorn --bind 0.0.0.0:8000 djinnguide.wsgi* or *waitress-serve --listen=\*8000 djinnguide.wsgi:application* to deploy

### REACT

1. Ensure connection to Django production server still works
2. Use *npm run build* to build React app so that it can be accessed via regular index.html

## Sources
Though I have played the games multiple times, I had to supplement my information using *Golden Sun Universe* to ensure the types of puzzles, names of locations, etc. were correct.
* https://goldensunwiki.net/

The djinn sprites and summon sprites for *Golden Sun* and *Golden Sun: The Lost Age* were found from *Spriter's Resource*.
* https://www.spriters-resource.com/game_boy_advance/gs2/sheet/46788/ by Davias
* https://www.spriters-resource.com/game_boy_advance/gs2/sheet/13279/ by DarkMech

The djinn sprites for *Golden Sun: Dark Dawn* were found on *Golden Sun Syndicate*.
* https://www.goldensun-syndicate.net/dd/djinn/

The summon sprites for *Golden Sun: Dark Dawn* were found from *Spriter's Resource*.
* https://www.spriters-resource.com/ds_dsi/gsdarkdawn/sheet/37656/ by MagicMaker

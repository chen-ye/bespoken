# Bespoken: Tell Your Story
## Introduction
Bespoken is a web-based slide presentation app, where you write your slides while giving your presentation.

Bespoken uses the HTML5 Web Speech API, which at the time
of this writing is only supported by very recent versions
of Google Chrome.

## Installation
To install Bespoken, you will have to place `new.html`
on a server that will serve the file through HTTPS.
The way that the permissions work for the HTML5 Web
Speech API, the browser will repeatedly ask the user
for the microphone permission when *not* on HTTPS.

Because the repeated permission requests make the
presentation application more or less unusable,
serving `new.html` over HTTPS is a practical
requirement.

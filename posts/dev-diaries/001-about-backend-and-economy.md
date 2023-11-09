---
title: Über Wirtschaft und Backend
date: '2023-11-08'
tags: ['dev diary', 'Wirtschaft', 'Backend', "Admin", "Konzept", "Logging"]
author: gameup
summary: Heute geht es um unsere Arbeit in der letzten Zeit. Dabei schauen wir auf unser Prozessoptimierung und auf unsere neue Herangehensweise an die Wirtschaft.
href: https://discordapp.com/channels/1116334046042140672/1171585407717232700
---



Hallo zusammen,

willkommen zum ersten Brigg-RP Dev Diary.

Mit diesen in Zukunft regelmäßig erscheinenden Dev Diaries wollen wir, als Brigg-RP Team, euch unsere aktuellen Entwicklungsschritte, Visionen, Features und vieles mehr vorstellen. Dabei sollen die Diaries als Kommunikationsmedium von uns an euch, aber auch, durch die Kommentare von euch an uns dienen. Deshalb schon vor weg explizite die Einladung: Kommentiert, diskutiert und kritisiert nach Belieben unter den jeweiligen Posts, niemand wird euch böse sein, ganz im Gegenteil, wir hoffen und zählen auf euren Input.

## Unsere vergangene und aktuelle Arbeit
Wie euch vermutlich schon aufgefallen ist, sind in letzter Zeit eher weniger prominente Änderungen, das neue Handy außen vor, eingeführt worden. Dies liegt daran, dass wir uns die Zeit genommen haben und noch immer nehmen vermehrt Hintergrundarbeit zu leisten.

In unserem Fall bedeutet das mehrere Dinge. Einerseits haben wir neue Funktionen für uns als Team integriert. So fällt für uns die Notwendigkeit eines separaten Adminchars und damit lästiger Mehraufwand weg, da wir ein eigens entwickeltes Adminduty Script eingeführt haben, welches uns per Befehl ermöglicht in unsere Rolle als Supporter oder Admin zu schlüpfen.

Neben dieser Prozessoptimierung arbeiten wir auch daran, die Prozesse in unserm Team zu verbessern. So haben wir neue Maßnahmen zur verbesserten Kommunikation intern aber auch für die Kommunikation mit euch eingeführt und sind fleißig am neu konzeptionieren und verbessern. Eine dieser neuen Maßnahmen ist eben dieses Dev Diary, mit dem wir uns erhoffen unsere Gedanken und Arbeitsschritte euch näherzubringen.

Natürlich arbeiten wir nicht nur an uns, sondern auch am Server. So sind wir dabei, das Backend des Servers umzustrukturieren und zu verbessern. Dazu zählt nicht nur unsere Datenbank, die eine Aufhübschung gut und gerne vertragen kann, sondern auch unsere Art und Weise der Protokollierung, was auf unserem Server geschieht. Mehr dazu im nächsten Abschnitt.

## Was Wirtschaft mit Protokollierung zu tun hat
Die Wirtschaft bereitet mir schon seit dem ersten Tag, seit welchem ich an diesem Projekt arbeite, Magenschmerzen. Magenschmerzen darum, weil ich mir bewusst bin, was für eine Mamutaufgabe es ist ein Wirtschaftssystem aufzubauen und zu lenken – ich verweise hier mal auf gefühlt jedes zweite MMO. Nun war es schon immer mein Anliegen ein gesamtheitliches Wirtschaftskonzept auf die Beine zu stellen, mit dem wir Spielspaß, Balance und Inflation in Einklang halten können, was nicht zu Unrecht nach einer großen Herausforderung klingt. Nichtsdestotrotz stellen wir uns dieser Aufgabe und entwickeln dafür eine neue Herangehensweise.

Wir sind, um eben jenes Ziel erfüllen zu können, dabei in großem Style Daten zu erheben, um die aktuelle wirtschaftliche Situation auf dem Server beurteilen zu können. Dabei geht es uns dann nicht nur um, wer wie viel Geld hat, sondern insbesondere darum genauer zu beobachten, wie und in welchen Mengen, Geld in dem Wirtschaftssystem zirkuliert aber auch wie es rein und rausfließt.

>![Aktuelles Wirtschaft Dashboard](http://localhost:3000/_next/image?url=%2FPosts%2FBrigg_RP_Economy_Dashboard.jpg&w=1080&q=100 "Unser aktueller Stand der Wirtschaftsauswertung")
> Unser aktueller Stand der Wirtschaftsauswertung

Um diese Daten erheben zu können bedarf es von unserer Seite aus viel Backend Arbeit, um vorhandene Scripte mit unserem Logging System zu verknüpfen und so jegliche Transaktion auf unserem Server abspeichern zu können. Neben der Beschaffung der Daten ist die Auswertung der Daten unabdingbar. Aufgrund dieser Data Science wollen wir, auch gemeinsam mit euch, unser gesamtheitliches Wirtschaftskonzept erstellen und so zu einer spaßigen und zufriedenstellenden Wirtschaft gelangen.

Das gesagt stehen wir derweil am Anfang dieses zeitintensiven Prozesses, weswegen wir erste Ergebnisse dieses datenorientierten Ansatzes erst in nächster Zukunft erwarten dürften. Nichtsdestotrotz oder gerade deswegen sind wir immer offen für Ideen, wie wir die Wirtschaft verbessern können. Darum sind wir sehr dankbar für Vorschläge, wie wir neue Wege implementieren können, um Geld verdienen zu können oder wie wir bereits bestehende Wege verbessern können.

Das wars mit dem heutigen Dev Diary.\
Ich hoffe euch gefällt das neue Format und ihr schreibt fleißig eure Ideen und Feedback in die Kommentare.\
Bis zum nächsten Mal


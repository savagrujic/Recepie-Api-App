# Recepie API App

Recepie API App je jednostavna React aplikacija koja omogućava korisnicima da pretražuju recepte pomoću TheMealDB API-ja. Aplikacija omogućava pregled i detalje recepata, uključujući sastojke i način pripreme.

## 🚀 Tehnologije

- React
- React Router
- Fetch API
- CSS
- TheMealDB API

## 📌 Instalacija i pokretanje

1. Klonirajte repozitorijum:
   ```sh
   git clone https://github.com/savagrujic/Recepie-Api-App.git
   ```
2. Uđite u direktorijum projekta:
   ```sh
   cd Recepie-Api-App
   ```
3. Instalirajte zavisnosti:
   ```sh
   npm install
   ```
4. Pokrenite aplikaciju:
   ```sh
   npm run dev
   ```

## 🔍 Funkcionalnosti

- Pretraga recepata po nazivu
- Prikaz liste rezultata sa slikama
- Klikom na recept, prikazuju se detalji o jelu (sastojci, instrukcije, kategorija, poreklo)

## 📁 Struktura projekta

```
Recepie-Api-App/
│── src/
│   ├── components/
│   │   ├── Recepie.jsx
│   │   ├── Product.jsx
│   ├── styles/
│   │   ├── home.css
│   │   ├── product.css
│   ├── App.jsx
│   ├── main.jsx
│── public/
│── package.json
│── README.md
```

## 🌐 API Korišćenje
Aplikacija koristi TheMealDB API za preuzimanje podataka o receptima:
- **Pretraga jela:** `https://www.themealdb.com/api/json/v1/1/search.php?s={naziv}`

## ✨ Autor

Ovu aplikaciju razvio je **Sava Grujić**. Možete pronaći repozitorijum na GitHub-u: [Recepie-Api-App](https://github.com/savagrujic/Recepie-Api-App).

---
📌 **Napomena:** Ova aplikacija je edukativnog karaktera i koristi besplatan API za preuzimanje podataka o receptima.


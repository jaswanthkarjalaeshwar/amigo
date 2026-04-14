# Amigo

A personality-driven social networking web app that connects people based on MBTI compatibility. Built as a prototype to explore how personality data can power more meaningful social connections across college communities.

---

## What It Does

Most social apps connect people by proximity or mutual friends. Amigo connects people by who they actually are.

Users take an MBTI personality quiz during onboarding, and the app uses those results to surface compatible matches, study groups, and events. The idea came from a real problem: college students often struggle to find people they genuinely click with, not just people they happen to sit next to.

**Core features:**

- Personality quiz and MBTI-based onboarding flow
- Discover feed to find compatible users
- Messaging between matched users
- Study group creation and discovery
- Quest board for collaborative challenges
- Events creation and browsing
- Rewards and notifications system
- Full auth flow (login, register, profile editing)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Auth & State | React Context API |
| Data | Local MBTI dataset + mock data |

---

## Project Structure

```
project_Amigo/
├── src/
│   ├── components/
│   │   ├── Auth/           # Login, Register
│   │   ├── Dashboard/      # Home feed
│   │   ├── Discover/       # Find compatible users
│   │   ├── Events/         # Create and browse events
│   │   ├── Messages/       # Direct messaging
│   │   ├── Onboarding/     # New user flow
│   │   ├── PersonalityQuiz/# MBTI assessment
│   │   ├── Profile/        # View and edit profile
│   │   ├── Quests/         # Collaborative challenges
│   │   ├── Rewards/        # Gamification layer
│   │   ├── Settings/       # User preferences
│   │   └── StudyGroups/    # Group creation and discovery
│   ├── contexts/           # Auth and App context
│   ├── data/               # MBTI compatibility data
│   └── types/              # TypeScript interfaces
```

---

## Running Locally

```bash
# Clone the repo
git clone https://github.com/jaswanthkarjalaeshwar/amigo.git
cd amigo/project_Amigo

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Background

This started as a vibe-coded prototype built in [Bolt.new](https://bolt.new) to rapidly validate the concept. The core hypothesis: if you know someone's personality type, you can predict compatibility better than most social algorithms do today.

The MBTI question mapping and compatibility logic were designed manually based on published type compatibility research, then integrated into the onboarding and discovery flows.

---

## Status

Prototype. Core flows are functional. Not connected to a live backend — auth and data run locally via React Context.

---

## Author

**Jaswanth Karjala Eshwar**  
Product Manager | NC State MEM '26  
[LinkedIn](https://linkedin.com/in/jaswanthkarjalaeshwar) · [GitHub](https://github.com/jaswanthkarjalaeshwar)

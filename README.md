# Jarvis

Jarvis is a productivity tool designed to connect todos, notes, and schedules seamlessly.
By linking these elements together, users can track progress intuitively and enjoy a smoother, more efficient workflow.
Jarvis는 일정, 투두, 노트를 중심으로 서로 유기적으로 연결할 수 있도록 설계된 생산성 도구입니다.
각 요소 간 연결을 통해 작업 흐름을 시각적으로 추적할 수 있으며, 더 수월하고 직관적인 작업 환경을 제공합니다.

A modular productivity assistant built with **React** and structured with **Feature-Sliced Design (FSD)** architecture.  
Designed to manage your schedule, tasks, and notes — with future-ready backend extensibility.

> 🧠 Inspired by the concept of a smart personal assistant like Iron Man’s J.A.R.V.I.S.

---

## ✨ Features

- 🗓️ **Schedule Management**  
  Drag-and-drop interface for managing daily, weekly, and monthly plans.

- ✅ **TODO with Category Support**  
  Sort and organize tasks under user-defined categories.

- 🧠 **Note Linking**  
  Connect related notes to tasks or events for better context.

- 🧩 **FSD Architecture**  
  Domain-based modular code separation for large-scale maintainability.

- 🧪 **Mocked Backend Simulation**  
  `/backend` folder mirrors **Java Spring Boot** architecture, preparing for seamless backend integration.

---

## 🏗 Project Structure

### 📁 Frontend (Feature-Sliced Design)

<pre><code>src/
├── shared/      # Reusable design tokens, UI components, utilities
├── entities/    # Core domain models like Todo, Note
├── features/    # Feature units like Drag & Drop, Editor, Filtering
├── widgets/     # Composed UI blocks like TodoList, CalendarGrid
├── pages/       # Page-level routes and layout handling
└── app/         # App root config (providers, router, entry point)
</code></pre>

### 🖥 Backend Folder (Spring Boot-like Layout)

<pre><code>backend/
├── common/                 
├── config/                 
└── domain/
    ├── note/              
    │   └── ...
    └── todo/
        ├── controller/
        │   ├── TodoController.ts
        │   ├── TodoCateController.ts
        │   └── TodoLabelController.ts
        ├── dto/
        │   └── TodoDto.ts
        ├── entities/
        │   ├── TodoBack.ts
        │   ├── TodoCateBack.ts
        │   └── TodoLabelBack.ts
        ├── repository/
        │   ├── TodoRepository.ts
        │   ├── TodoCateRepository.ts
        │   └── TodoLabelRepository.ts
        └── service/
            ├── TodoBackService.ts
            ├── TodoCateBackService.ts
            └── TodoLabelService.ts
</code></pre>

📌 Backend structure was prepared **from day one** to support seamless back-end migration after front-end completion.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
git clone https://github.com/warizi/jarvis
cd jarvis
npm install
npm run dev
```

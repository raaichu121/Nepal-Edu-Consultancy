# 🎓 Nepal-Edu: Global Education Gateway

**Nepal-Edu** is a premium, responsive landing page designed for education consultancies. It provides a seamless experience for students looking to explore international study destinations, view consultancy services, and get in touch with experts.

## 🚀 Tech Stack

* **Framework:** [React](https://reactjs.org/) (with TypeScript)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
* **Icons:** Lucide React

---

## 📁 Project Structure

The project follows a modular "component-based" architecture for high maintainability:

* **`src/components/`**: Contains the building blocks of the UI.
* `ui/`: Low-level primitives (buttons, inputs, cards) from shadcn/ui.
* Business components like `Hero.tsx`, `Destinations.tsx`, and `Testimonials.tsx`.


* **`src/hooks/`**: Custom React hooks (e.g., `use-mobile.tsx` for responsive logic).
* **`src/lib/`**: Utility functions and shared configurations.
* **`src/pages/`**: Main page layouts and route views.
* **`public/`**: Static assets like `robots.txt` and images.

---

## ✨ Features

* **Dynamic Hero Section:** Engaging call-to-action with statistics.
* **Service Overview:** Grid display of consultancy services (Visa, Counseling, etc.).
* **Destination Cards:** Interactive cards showcasing popular countries (Australia, USA, UK).
* **Testimonials:** Social proof from successful students.
* **Contact/Inquiry Form:** A dedicated lead-generation section with form validation.
* **Fully Responsive:** Optimized for mobile, tablet, and desktop views.

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have **npm** (or Node.js) installed on your system.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/raaichu121/Nepal-Edu-Consultancy.git

```


2. Navigate to the project folder:
```bash
cd nepal-edu

```


3. Install dependencies:
```bash
npm install

```



### Development

Start the local development server:

```bash
npm run dev

```

The app will be available at `http://localhost:5173`.

### Production Build

To create an optimized build for production:

```bash
npm run build

```

---

## 🎨 Customization

* **Colors:** Modify the `tailwind.config.js` or `src/index.css` to update the primary orange and blue branding.
* **Content:** Edit the component files in `src/components/` (e.g., `Stats.tsx`) to update the numbers and text.

---

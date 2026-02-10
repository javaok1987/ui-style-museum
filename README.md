# UI Style Museum (UI 風格博物館)

> **UI Style Museum** 是一個使用 **React 18**、**TypeScript** 與 **Tailwind CSS** 打造的現代化網頁應用程式。它作為一個視覺化的展示平台，收錄了多樣化的 UI 設計風格，讓使用者能透過精選的元件與佈局集合，探索並比較不同的設計美學。

## 🚀 核心特性

- **動態風格切換**：可無縫切換 `styles.json` 中定義的各種設計風格。
- **元件展示**：全面展示常見的 UI 元素，包括按鈕 (Buttons)、輸入框 (Inputs)、卡片 (Cards) 及 專案儀表板 (Project Dashboard)。
- **響應式設計**：使用 Tailwind CSS 構建，提供行動優先 (Mobile-first) 的響應式使用者體驗。
- **現代化技術棧**：利用 React 18 的優化性能與 TypeScript 的型別安全。

## 🛠️ 開始使用

### 前置需求

- **Node.js** (建議 v18 或更高版本)
- **npm** (或 yarn/pnpm)

### 安裝步驟

1. 複製此專案：
   ```bash
   git clone <repository-url>
   cd ui-style-museum
   ```

2. 安裝依賴套件：
   ```bash
   npm install
   ```

### 開發模式

啟動開發伺服器：

```bash
npm run dev
```

開啟瀏覽器並造訪 [http://localhost:5173](http://localhost:5173) 即可查看應用程式。

### 打包編譯

為正式環境進行打包：

```bash
npm run build
```

## 📂 專案結構

```
ui-style-museum/
├── src/
│   ├── components/      # 可複用的 UI 元件
│   ├── types/           # 型別定義
│   ├── App.tsx          # 主要應用程式元件
│   └── main.tsx         # 入口點
├── styles.json          # UI 風格設定檔 (包含 25 種風格)
├── tailwind.config.js   # Tailwind CSS 設定
└── vite.config.ts       # Vite 設定
```

## 🎨 支援風格

應用程式支援 `styles.json` 中定義的多種 UI 風格（如 Arc Browser, Neobrutalism, Supabase, Cyberpunk 等）。每種風格包含：

- **色彩系統**：主要、次要、強調與語義化色彩。
- **排版字型**：字體系列、大小與字重。
- **元件樣式**：針對按鈕、卡片、輸入框等預先配置的 Tailwind 樣式。

## 🤝 貢獻指南

歡迎任何形式的貢獻！如果您有任何建議或發現問題，請隨時提交 Pull Request 或 Issue。

## 📄 授權條款

本專案採用 MIT 授權條款。

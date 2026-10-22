# 百人一首かるた練習アプリ

百人一首の暗記・練習をサポートするWebアプリです。  
上の句を見て対応する取り札（下の句）を選ぶ練習モードと、実際のかるた盤面を再現したゲームモードを搭載しています。

---

## 機能

| 機能 | 説明 |
|------|------|
| **練習モード** | 上の句が表示され、4枚の取り札から正解を選ぶクイズ形式。正解時は決まり字も確認できます。 |
| **ゲームモード** | 百人一首の盤面を再現。24枚の札を自陣・敵陣に12枚ずつランダムに配置します。 |
| **ゲーム開始** | ファイルのドラッグ＆ドロップでゲームデータを読み込めます（開発中）。 |

---

## 技術スタック

- **フレームワーク**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **ビルドツール**: [Vite](https://vitejs.dev/)
- **UIライブラリ**: [Material UI (MUI) v7](https://mui.com/)
- **ルーティング**: [React Router v7](https://reactrouter.com/)
- **ファイル操作**: [react-dropzone](https://react-dropzone.js.org/)

---

## 画面構成

```
/           ホーム画面
/practice   練習モード（上の句クイズ）
/gameStart  ゲーム開始（ファイルアップロード）
/game       ゲーム画面（かるた盤面）
/about      このアプリについて
```

---

## セットアップ・起動方法

### 必要環境

- Node.js 18 以上
- npm

### インストール

```bash
git clone https://github.com/kaito9220/karuta-practice.git
cd karuta-practice
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開いてください。

### その他のコマンド

```bash
npm run build    # プロダクションビルド
npm run preview  # ビルド結果のプレビュー
npm run lint     # ESLintによる静的解析
```

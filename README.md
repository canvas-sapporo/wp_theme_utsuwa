# WordPress テーマ Utsuwa
<img width="720" height="778" alt="image" src="https://github.com/user-attachments/assets/b194c0d6-6574-46ff-8d36-94ce4c946501" />

<img width="215" height="1286" alt="image" src="https://github.com/user-attachments/assets/aeb95a04-23d7-417f-b2a4-2d2988d2b490" />


## 技術スタック

WordPress テーマ内で React + TypeScript + Tailwind CSS v4 を使用するためのモダンな開発テンプレートです。

## 🚀 クイックスタート

まずは依存関係をインストールします。

```bash
npm install
```

## 開発用コマンド

| コマンド | 内容 |
| :--- | :--- |
| `npm start` | 開発モード。ファイルの変更を監視し、自動でビルドします。 |
| `npm run build` | 本番モード。ファイルを圧縮・最適化し、公開用ファイルを生成します。 |
| `npm run format` | コードの整形（Prettier）を実行します。 |
| `npm run lint:js` | JavaScript/TypeScript の構文チェックを実行します。 |

## 🛠 ディレクトリ構造

- `src/` - React コンポーネントや CSS のソースコード
- `index.tsx` - エントリーポイント
- `App.tsx` - メインコンポーネント
- `index.css` - Tailwind v4 の読み込み設定
- `build/` - ビルド済みのファイル（WordPress が読み込む先）
- `functions.php` - スクリプトとスタイルのエンキュー設定
- `index.php` - React をマウントするためのベース HTML

## 💡 開発時のヒント

### Tailwind CSS v4 の反映について
新しいクラスを追加した際、`npm start` の監視が追いつかない場合があります。その場合は一度プロセスを終了し、以下の手順を試してください。

1. `Ctrl + C` で停止
2. `npm run build` を実行
3. ブラウザを強力なリロード（`Ctrl + F5`）

### WordPress との連携
PHP 側で定義したデータを React へ渡す場合は、`functions.php` 内で `wp_localize_script` を使用してください。

## 構築手順

```bash
npm init -y
npm install @wordpress/scripts --save-dev
npm install react@18 react-dom@18 @types/react@18 @types/react-dom@18 typescript --legacy-peer-deps
npm install tailwindcss @tailwindcss/postcss postcss autoprefixer --legacy-peer-deps
```

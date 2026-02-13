# WordPress テーマ Utsuwa
<img width="720" height="778" alt="image" src="https://github.com/user-attachments/assets/b194c0d6-6574-46ff-8d36-94ce4c946501" />

<img width="215" height="1286" alt="image" src="https://github.com/user-attachments/assets/aeb95a04-23d7-417f-b2a4-2d2988d2b490" />


## 技術スタック

- **WordPress**: テーマ開発
- **Tailwind CSS**: ユーティリティファーストのCSSフレームワーク
- **React.js**

# 本番環境

1. wp_theme_utsuwaフォルダをWordPressのapp\public\wp-content\themes配下に設置する。
2. WordPressの管理者画面（ブラウザ）から「外観 > テーマ」で「Utsuwa」テーマを有効化する。

# 開発環境

### 必要な環境

- Node.js (v20以上推奨)
- npm
- WordPress環境（Local by Flywheel、MAMP、XAMPPなど）

### パッケージインストール

パッケージをインストールします。

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

## 本番環境

~本番環境では、ビルドされたCSSファイルを使用するように `functions.php` を修正する必要があります。~

`npm run dev` を実行していない場合は、ビルドされたファイル（buildフォルダ配下）を使用するように

`functions.php` を修正しました。

## 構築手順

```bash
npm init -y
npm install @wordpress/scripts --save-dev
npm install react@18 react-dom@18 @types/react@18 @types/react-dom@18 typescript --legacy-peer-deps
npm install tailwindcss @tailwindcss/postcss postcss autoprefixer --legacy-peer-deps
```

## ライセンス

MIT License

## 作者

canvas-sapporo

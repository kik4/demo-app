技術検証用デモアプリ

## 機能

- サインイン・サインアウト

## 技術スタック

- Next.js (app router)
- TypeScript
- TailwindCSS
- Biome
- NextAuth.js
- shadcn/ui

## 開発環境

mise で開発ツールをインストール。

### 開発サーバー起動

```bash
pnpm dev
```

### 外部サービス依存関係

- gcp の Google Auth Platform でクライアントを作成し、クライアント id とシークレットを環境変数に設定すること。

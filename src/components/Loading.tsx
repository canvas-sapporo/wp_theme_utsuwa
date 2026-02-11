import React from "react";

type LoadingProps = {
  /** フルスクリーンオーバーレイで表示するか */
  fullScreen?: boolean;
  /** 読み込みメッセージ（省略時は非表示） */
  message?: string;
};

const Loading: React.FC<LoadingProps> = ({ fullScreen = false, message }) => {
  const content = (
    <div className="flex flex-col items-center justify-center gap-6">
      <div
        className="relative flex items-center justify-center"
        style={{ width: 48, height: 48 }}
        aria-hidden="true"
      >
        {/* 外側リング */}
        <div
          className="loader-ring absolute inset-0 rounded-full border-2 border-dark/20 border-t-dark"
          style={{
            borderRightColor: "transparent",
            borderBottomColor: "transparent",
          }}
        />
        {/* 内側リング（逆回転） */}
        <div
          className="loader-ring-reverse absolute rounded-full border border-dark/40"
          style={{ width: 28, height: 28, borderTopColor: "transparent" }}
        />
        {/* 中心のパルス */}
        <div
          className="loader-pulse absolute rounded-full bg-dark"
          style={{ width: 6, height: 6 }}
        />
      </div>
      {message && <p className="text-hero-title text-dark">{message}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-light/90"
        role="status"
        aria-live="polite"
        aria-label={message ?? "読み込み中"}
      >
        {content}
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-center py-12"
      role="status"
      aria-live="polite"
      aria-label={message ?? "読み込み中"}
    >
      {content}
    </div>
  );
};

export default Loading;

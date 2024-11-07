import IconButton from "./IconButton";

interface NavigationBarProps {
  isDark: boolean;
  showBackButton: boolean;
  showCloseButton: boolean;
  showTitle: boolean;
  title?: string;
  onBackButtonClick?: () => void;
  onCloseButtonClick?: () => void;
}

export default function NavigationBar({
  title = "",
  isDark,
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {},
  showBackButton,
  showCloseButton,
  showTitle,
}: NavigationBarProps) {
  return (
    <div className="flex navigation-icon-wrapper">
      {/* 뒤로가기 버튼 */}
      {showBackButton && (
        <IconButton
          alt="뒤로가기 버튼"
          iconPath={`https://kr.object.ncloudstorage.com/icons/ic-back-arrow${
            isDark ? "-white" : ""
          }.svg`}
          onClick={onBackButtonClick}
        />
      )}
      {/* 페이지 이름  */}
      {showTitle && (
        <h1
          className={`flex-1 text-2xl ${
            isDark ? "text-white" : "text-primary"
          }`}
        >
          {title}
        </h1>
      )}
      {/* 닫기 버튼 */}
      {showCloseButton && (
        <IconButton
          alt="닫기 버튼"
          iconPath={`https://kr.object.ncloudstorage.com/icons/ic-close${
            isDark ? "-white" : ""
          }.svg`}
          onClick={onCloseButtonClick}
        />
      )}
    </div>
  );
}

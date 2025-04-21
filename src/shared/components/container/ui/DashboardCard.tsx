/** @jsxImportSource @emotion/react */

import { dashboardCardStyles } from "./DashboardCard.style";

type DashboardCardProps = {
  children: React.ReactNode;
  title?: string;
  onClick?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
};

function DashboardCard({
  children,
  onClick,
  title,
}: DashboardCardProps) {
  const { container, titleSpan } = dashboardCardStyles;
  return (
    <div
      css={container}
      onClick={(event) => onClick && onClick(event)}
    >
      {title && <span css={titleSpan}>{title}</span>}
      {children}
    </div>
  );
}

export default DashboardCard;

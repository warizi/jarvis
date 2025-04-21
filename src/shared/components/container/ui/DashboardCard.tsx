/** @jsxImportSource @emotion/react */

import { dashboardCardStyles } from "./DashboardCard.style";

type DashboardCardProps = {
  children: React.ReactNode;
  onClick?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
};

function DashboardCard({
  children,
  onClick,
}: DashboardCardProps) {
  const { container } = dashboardCardStyles;
  return (
    <div
      css={container}
      onClick={(event) => onClick && onClick(event)}
    >
      {children}
    </div>
  );
}

export default DashboardCard;

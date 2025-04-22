/** @jsxImportSource @emotion/react */

import { ArrowRightIcon } from "@shared/components/icon";
import { dashboardCardStyles } from "./DashboardCard.style";

type DashboardCardProps = {
  children: React.ReactNode;
  title?: string;
  linked?: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
};

function DashboardCard({
  children,
  onClick,
  title,
  linked = false,
}: DashboardCardProps) {
  const { container, titleSpan } = dashboardCardStyles;
  return (
    <div
      css={container}
      onClick={(event) => onClick && onClick(event)}
    >
      {title && (
        <span css={titleSpan}>
          {title} {linked && <ArrowRightIcon size={20} />}
        </span>
      )}
      {children}
    </div>
  );
}

export default DashboardCard;

import { ReactNode } from "react";

type BaseLayoutProps = {
    children: ReactNode;
};

const CardLayout = ({ children }: BaseLayoutProps) => {
    return (
        <div className="bg-background rounded-2xl p-6 border border-background flex flex-col justify-between h-full">
            {children}
        </div>
    );
};

export default CardLayout;
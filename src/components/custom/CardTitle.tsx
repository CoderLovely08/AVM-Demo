type CardTitleProps = {
    icon: string;
    label: string;
};


const CardTitle = ({ icon, label }: CardTitleProps) => {
    return (
        <div className="flex items-center gap-2">
            <div className="bg-gray-200/10 p-2 rounded-full">
                <img src={icon} alt={label} className="w-4 h-4 " />
            </div>

            <span className="text-base text-secondary">{label}</span>
        </div>
    );
};

export default CardTitle;

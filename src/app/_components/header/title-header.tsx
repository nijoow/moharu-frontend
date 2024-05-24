interface TitleHeaderProps {
  title: string;
}
const TitleHeader = ({ title }: TitleHeaderProps) => {
  return (
    <div className="px-6 pb-4 pt-10">
      <h4 className="text-20px font-bold">{title}</h4>
    </div>
  );
};

export default TitleHeader;

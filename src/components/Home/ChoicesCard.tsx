//Card component for each choice in choices component
const ChoicesCard = ({
  element,
  index,
}: {
  element: {
    title: string;
    description: string[];
    imageLink: string;
  };
  index: number;
}) => {
  const bgClass =
    index === 0
      ? "bg-hightlight-dark"
      : index === 1
      ? "bg-bg-dark-sec"
      : index === 2
      ? "bg-hightlight-light"
      : index === 3
      ? "bg-main-light"
      : index === 4
      ? "bg-tertiary-light"
      : "";

  return (
    <div
      className={`flex flex-col items-start justify-center rounded-4xl p-4 gap-4 ${bgClass}`}
    >
      <div className="rounded-4xl relative pt-[70%] w-full">
        <img
          className="absolute top-0 left-0 w-full h-full rounded-2xl object-cover"
          src={element.imageLink}
          alt={element.title}
        />
      </div>
      <div className="flex flex-col gap-4 items-center justify-center w-full">
        <div className="text-2xl">{element.title}</div>
        <div className={`text-xs flex flex-row gap-2 `}>
          {element.description.map((desc, idx) => (
            <div
              key={idx}
              className="bg-main-dark px-2 rounded-sm text-bg-dark"
            >
              {desc}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ChoicesCard;

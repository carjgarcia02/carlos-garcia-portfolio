import WorkItem from "./WorkItem";

const Work = () => {
  const data = [
    {
      year: 2020,
      title: "Content Creator",
      duration: "3 years",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque aliquam hic reiciendis quaerat exercitationem impedit voluptate praesentium sed dolorem rerum.",
    },
    {
      year: 2020,
      title: "Content Creator",
      duration: "3 years",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque aliquam hic reiciendis quaerat exercitationem impedit voluptate praesentium sed dolorem rerum.",
    },
    {
      year: 2020,
      title: "Content Creator",
      duration: "3 years",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque aliquam hic reiciendis quaerat exercitationem impedit voluptate praesentium sed dolorem rerum.",
    },
    {
      year: 2020,
      title: "Content Creator",
      duration: "3 years",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque aliquam hic reiciendis quaerat exercitationem impedit voluptate praesentium sed dolorem rerum.",
    },
  ];

  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;

import MeetTheAgentItem from './MeetTheAgentItem';
import SectionWrapper from './SectionWrapper';

const agents = [
  {
    name: 'Wade Warren',
    image: '/images/meet-1.jpg',
    job: 'Salesperson',
  },
  {
    name: 'Leslie Alexander',
    image: '/images/meet-2.jpg',
    job: 'Commercial Broker',
  },
  {
    name: 'Darlene Robertson',
    image: '/images/meet-3.jpg',
    job: 'Realtor',
  },
];

export type Agent = (typeof agents)[0];

function MeetTheAgents() {
  return (
    <SectionWrapper
      title="Meet the agents"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 pt-4">
        {agents.map((item, index) => (
          <MeetTheAgentItem data={item} key={index} />
        ))}
      </div>

      <div className="text-center text-[0.85rem] pt-5">
        <span className="opacity-70">
          Become an agent and get the commission you deserve.
        </span>
        <a href="#" className="text-primary font-medium underline pl-1">
          Contact us
        </a>
      </div>
    </SectionWrapper>
  );
}

export default MeetTheAgents;

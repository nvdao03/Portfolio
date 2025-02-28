import { ExperienceType } from '../../../../types/experience.type';

export default function Card(props: ExperienceType) {
  return (
    <div className="custom-card-icon">
      <img
        src={`http://localhost:4000${props.icon}`}
        className="absolute -left-3 bg-white"
      />
      <span className="text-[#8b88b1] text-sm">{props.year}</span>
      <h3 className="my-2 mx-0">{props.title}</h3>
      <p className="leading-[1.5]">{props.desc}</p>
    </div>
  );
}

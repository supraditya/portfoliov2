import ListRenderer from "../ListRenderer";

export default function Highlights(props) {
  return (
    <div className="flex flex-col md:items-center justify-between mt-5 mb-8 md:flex-row flex-wrap">
      <div className="text-justify md:w-1/2 pr-4 md:border-r">
        <h3 className="font-primary text-xl mb-1">Summary</h3>
        <p className="font-secondary text-lg font-light">{props.summary}</p>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-3 mt-4 md:mt-0 md:pl-4 md:w-1/2">
        <p>
          <span className="font-strong">My Roles:&nbsp;</span>
          <span className="font-light">
            <ListRenderer list={props.roles} removeFirst={false} />
          </span>
        </p>
        <p>
          <span className="font-strong">Timeline:&nbsp;</span>
          <span className="font-light">{props.timeline}</span>
        </p>
        {props.team.length !== 0 ? (
          <p>
            <span className="font-strong">Team Members:&nbsp;</span>
            <span className="font-light">
              <ListRenderer list={props.team} removeFirst={false} />
            </span>
          </p>
        ) : (
          <span></span>
        )}
        <p>
          <span className="font-strong">Tools Used:&nbsp;</span>
          <span className="font-light">
            <ListRenderer list={props.tools} removeFirst={false} />
          </span>
        </p>
      </div>
    </div>
  );
}

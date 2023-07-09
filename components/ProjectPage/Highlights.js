import ListRenderer from "../ListRenderer";

export default function Highlights(props) {
  return (
    <div className="flex items-center justify-between my-3">
      <div className="text-justify w-1/2 pr-4 border-r">
        <h3 className="font-primary text-xl">Summary</h3>
        <p className="font-secondary text-base font-light">{props.summary}</p>
      </div>
      <div className="grid grid-cols-2 pl-4 w-1/2 ">
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
        <p>
          <span className="font-strong">Team Members:&nbsp;</span>
          <span className="font-light">
            <ListRenderer list={props.team} removeFirst={false} />
          </span>
        </p>
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

// Component to render lists as comma separated JSX Items
export default function ListRenderer({ list, removeFirst }) {
  return removeFirst
    ? list.slice(1).map((item, i) => {
        return i !== list.length - 2 ? (
          <span key={i}>{item}, </span>
        ) : (
          <span key={i}>{item}</span>
        );
      })
    : list.map((item, i) => {
        return i !== list.length - 1 ? (
          <span key={i}>{item}, </span>
        ) : (
          <span key={i}>{item}</span>
        );
      });
}

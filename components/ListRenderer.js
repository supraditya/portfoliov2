// Component to render lists as comma separated JSX Items
// removeEnds=true, means remove the first item and the term "Others" from the rendered list

export default function ListRenderer({ list, removeEnds }) {
  return removeEnds
    ? list[list.length-1] === "Others"
      ? list.slice(1, -1).map((item, i) => {
          return i !== list.length - 3 ? (
            <span key={i}>{item}, </span>
          ) : (
            <span key={i}>{item}</span>
          );
        })
      : list.slice(1).map((item, i) => {
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

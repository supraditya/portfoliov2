// Component to render lists as comma separated JSX Items
// removeEnds=true, means remove the first item (usually "All") and the term "Others" from the rendered list view

export default function ListRenderer({ list, removeEnds }) {
  let slicedList = [];
  if (removeEnds) {
    if (list[list.length - 1] === "Others") {
      slicedList.push(...list.slice(1, -1));
    } else {
      slicedList.push(...list.slice(1));
    }
  } else {
    slicedList.push(...list);
  }
  return slicedList.map((item, i) => {
    return i !== slicedList.length - 1 ? (
      <span key={i}>{item}, </span>
    ) : (
      <span key={i}>{item}</span>
    );
  });
}

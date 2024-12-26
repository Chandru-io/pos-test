/* eslint-disable react/prop-types */
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function SortableRow({ id, row }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <tr
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="border"
    >
      <td className="border px-4 py-2 text-center">{row.sno}</td>
      <td className="border px-4 py-2 text-center">{row.name}</td>
      <td className="border px-4 py-2 text-center">{row.description}</td>
    </tr>
  );
}

export default SortableRow;

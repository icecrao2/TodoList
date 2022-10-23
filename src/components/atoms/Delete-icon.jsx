

export const DeleteIcon = ({ onDelete, id }) => {

  const imgURL = "../../../public/image/delete.png"

  return (
    <img
      id={id}
      onClick={onDelete}
      src={imgURL}
      className="w-4 h-4"
    />
  )

}
import React from "react"

const PersonThumbnail = ({ name, active, handlePersonChange, img }) => {
  return (
    <button
      className={`person-thumbnails__button`}
      name={name}
      onClick={handlePersonChange}
    >
      <img className={`person-thumbnails__img`} src={img} alt={name}></img>
      <h4
        className={`person-thumbnails__name-h4 ${
          active ? "person-thumbnails__h4--active" : null
        }`}
      >
        {name}
      </h4>
    </button>
  )
}

export default PersonThumbnail

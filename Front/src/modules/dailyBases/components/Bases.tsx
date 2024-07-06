import style from "../styles/Bases.module.css";
import { useState } from "react";
import { SearchIcon, AddIcon } from "../../../utils/Icons/icons";
import CreateBaseModal from "./CreateBaseModal";

export default function Bases() {
  const [filterInitialDate, setFilterInitialDate] = useState("");
  const [filterFinalDate, setFilterFinalDate] = useState("");
  const [typeSelected, setTypeSelected] = useState("");
  const [createBaseModalOpen, setCreateBaseModalOpen] = useState(false);

  const toggleModalBase = () => {
    setCreateBaseModalOpen(!createBaseModalOpen);
  };

  const typeSelectedHandle = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const typeInput = event.target.value;
    setTypeSelected(typeInput);
  };

  return (
    <div className={style.principalContainer}>
      <div className={style.headContainer}>
        <div className={style.optionContainer}>
          <div className={style.inputContainer}>
            <label htmlFor="desdeDate" className={style.inputContainer__label}>
              Desde:
            </label>
            <input
              onChange={(e) => setFilterInitialDate(e.target.value)}
              type="date"
              name=""
              id="desdeDate"
              className={style.inputContainer__input}
            />
            <label htmlFor="hastaDate" className={style.inputContainer__label}>
              Hasta:
            </label>
            <input
              onChange={(e) => setFilterFinalDate(e.target.value)}
              type="date"
              name=""
              id="hastaDate"
              className={style.inputContainer__input}
            />
          </div>
          <button className={style.principalContainer__btn}>
            <SearchIcon className={style.principalContainer_icon} />
          </button>
        </div>
        <div className={style.optionContainer}>
          <label htmlFor="suplierInput" className={style.inputContainer__label}>
            {" "}
            Tipo de base:
          </label>
          <select
            name="suplierInput"
            id="suplierInput"
            className={style.optionContainer__select}
            onChange={typeSelectedHandle}
          >
            <option value="">Todos</option>
            <option value="Base">Base</option>
            <option value="Mios">Mios</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <div className={style.headContainer__button} onClick={toggleModalBase}>
          <AddIcon className={style.headContainer__button__icon} />
          <p className={style.headContainer__button__p}>Agregar base</p>
        </div>
        {createBaseModalOpen && <CreateBaseModal onClose={toggleModalBase} />}
      </div>
    </div>
  );
}

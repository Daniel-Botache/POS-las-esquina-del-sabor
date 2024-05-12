import style from "../../styles/CellList.module.css";

export default function CellList(props: any) {
  return (
    <div className={style.principalContainer}>
      <input type="checkbox" />
      <div>{props.barCode}</div>
      <div>{props.productName}</div>
      <div>{props.quantity}</div>
      <div>{props.total}</div>
    </div>
  );
}

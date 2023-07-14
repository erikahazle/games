import { BoardCellValue } from '../../types';
import { getCellBackground } from './lib/getCellBackground';

type Props = {
  row: number,
  column: number,
  value: BoardCellValue,
  handleClick: (row: number, column: number, currentValue: BoardCellValue) => void,
}

export const BoardCell = ({ value, row, column, handleClick }: Props) => {
  const cellBackground = getCellBackground(value);

  const onClick = () => {
    handleClick(row, column, value);
  }

  console.log('cellBackground', cellBackground);

  return (
    <div
      className={cellBackground}
      onClick={onClick}
    ></div>
  )
};

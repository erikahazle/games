import { BoardCellValue } from '../../types';
import { getCellColour } from './lib/getCellColour';

export const BoardCell = ({ value }: { value: BoardCellValue }) => {
  const cellColour = getCellColour(value);
  return (
    <div className={`w-24 h-24 border-slate-300 border-2 bg-${cellColour}`}></div>
  )
};

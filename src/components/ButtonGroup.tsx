interface ButtonGroupProps {
  onApply: () => void;
  onReset: () => void;
}

export default function ButtonGroup({ onApply, onReset }: ButtonGroupProps) {
  return (
    <div className="flex justify-between mt-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={onApply}
      >
        Apply Filters
      </button>
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        onClick={onReset}
      >
        Reset Filters
      </button>
    </div>
  );
}

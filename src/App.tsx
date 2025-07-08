import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4">
      <h1 className="px-4 py-2 bg-white text-3xl font-bold border">
        핑계 매니절 👀👍
      </h1>
      <div className="flex gap-2">
        {["직장", "운동", "공부", "약속"].map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => setSelected(category)}
            className={`px-4 py-2 rounded ${
              selected === category
                ? "bg-blue-500 text-white"
                : "bg-gray-100 border"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;

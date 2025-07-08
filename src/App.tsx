import { useState } from "react";
import { excusesList } from "./data/excuseList";

function App() {
  const [selected, setSelected] = useState("");
  const [excuse, setExcuse] = useState("");

  const createExcuse = () => {
    const arr = excusesList[selected];
    if (!arr) return;
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomExcuse = arr[randomIndex];
    setExcuse(randomExcuse);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4">
      <h1 className="px-4 py-2 bg-white text-3xl font-bold border">
        핑계 매니절 👀👍
      </h1>
      <div className="flex flex-col gap-2">
        {["직장", "운동", "공부", "약속"].map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => {
              setSelected(category);
              createExcuse();
            }}
            className={` px-4 py-2 rounded ${
              selected === category
                ? "bg-blue-500 text-white"
                : "bg-gray-100 border"
            }`}
          >
            {category}
          </button>
        ))}
        <button type="button" onClick={() => {}}>
          핑계 생성하기
        </button>
        <p>{excuse}</p>
      </div>
    </div>
  );
}

export default App;

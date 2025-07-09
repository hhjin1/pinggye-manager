import { useState } from "react";
import { excusesList } from "./data/excuseList";

function App() {
  const [selected, setSelected] = useState<
    // "직장" | "운동" | "공부" | "약속" | ""
    keyof typeof excusesList | ""
  >("");
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
      <div className="flex flex-row gap-2">
        {(["직장", "운동", "공부", "약속"] as const).map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => {
              setSelected(category); // category가 selected상태를 변화시키면
            }}
            className={` px-4 py-2 rounded ${
              selected === category // selected값이랑 카테고리의 값이 일치할 떄 파란배경 그렇지 않으면 하얀배경이 된다.
                ? "bg-blue-500 text-white"
                : "bg-gray-100 border"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="px-4 py-2 bg-white"
        onClick={createExcuse}
      >
        핑계 생성하기
      </button>
      {excuse && <p>"{excuse}"</p>}
      {/* 조건 && 보여줄 것 */}
    </div>
  );
}

export default App;

import { useState } from "react";

const Section = ({ title, desc, isVisible, setVisibile }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3>{title}</h3>
      {isVisible ? (
        <button className="underline" onClick={() => setVisibile(false)}>
          Hide
        </button>
      ) : (
        <button className="underline" onClick={() => setVisibile(true)}>
          Show
        </button>
      )}

      {isVisible && <p>{desc}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setIsVisibleSection] = useState("A");
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold"> Instamart </h1>
      <Section
        title={"About instamart"}
        desc={"This is about section 1"}
        isVisible={visibleSection == "A"}
        setVisibile={() => setIsVisibleSection("A")}
      />
      <Section
        title={"About instamart"}
        desc={"This is about section 2"}
        isVisible={visibleSection == "B"}
        setVisibile={() => setIsVisibleSection("B")}
      />
      <Section
        title={"About instamart"}
        desc={"This is about section 3"}
        isVisible={visibleSection == "C"}
        setVisibile={() => setIsVisibleSection("C")}
      />
    </div>
  );
};

export default Instamart;

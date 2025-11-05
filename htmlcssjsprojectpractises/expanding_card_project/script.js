const CardsToContainer = `
  <div
    style="
      width: 700px;
      height: 600px;
      border: 1px solid black;
      border-radius: 10%;
      position: relative;
      overflow: hidden;
      margin: 20px;
    "
  >
    <img
      style="width: 100%; height: 100%; object-fit: cover"
      alt="imgaddrnotfound"
      src="https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    />
    <div
      style="
        position: absolute;
        bottom: 25px;
        left: 25px;
        color: white;
        font-size: 24px;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
      "
    >
      Explore the world
    </div>
  </div>
  <div
    style="
      width: 700px;
      height: 600px;
      border: 1px solid black;
      border-radius: 10%;
      position: relative;
      overflow: hidden;
      margin: 20px;
    "
  >
    <img
      style="width: 100%; height: 100%; object-fit: cover"
      alt="imgaddrnotfound"
      src="https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    />
    <div
      style="
        position: absolute;
        bottom: 25px;
        left: 25px;
        color: white;
        font-size: 24px;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
      "
    >
      Explore the world
    </div>
  </div>
  <div
    style="
      width: 700px;
      height: 600px;
      border: 1px solid black;
      border-radius: 10%;
      position: relative;
      overflow: hidden;
      margin: 20px;
    "
  >
    <img
      style="width: 100%; height: 100%; object-fit: cover"
      alt="imgaddrnotfound"
      src="https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    />
    <div
      style="
        position: absolute;
        bottom: 25px;
        left: 25px;
        color: white;
        font-size: 24px;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
      "
    >
      Explore the world
    </div>
  </div>
`;

const CardContainer = document.querySelector(".cardContainer");
CardContainer.innerHTML += CardsToContainer; // ✅ Works perfectly

// console.log(CardContainer);

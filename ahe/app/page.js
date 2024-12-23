import "../styles/globals.css";

export default function Page() {
  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #2c003e, #4b0082)",
        color: "#fff",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3em",
          margin: "0",
          textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ff00ff, 0 0 40px #ff00ff, 0 0 50px #ff00ff",
        }}
      >
        🐼 Welcome to Panda's CTF Challenge! 🐼
      </h1>
      <p
        style={{
          fontSize: "1.5em",
          margin: "20px 0",
          textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ff00ff",
        }}
      >
        Can you find the hidden flag? 🧐
      </p>

      <img
        src="/panda.png"
        alt="Panda"
        style={{
          width: "300px",
          margin: "20px auto",
          borderRadius: "50%",
          border: "5px solid #fff",
        }}
      />

      {/* Hidden Flag: CTF{will_you_be_my_girlfriend?} */}

      <div style={{ marginTop: "20px", textAlign: "center", maxWidth: "600px" }}>
        <h2 style={{ fontSize: "1.8em", margin: "20px 0" }}>Hints 🐾</h2>
        <ol style={{ textAlign: "left", margin: "0 auto", maxWidth: "400px", fontSize: "1.2em" }}>
          <li>🐼 Pandas are sneaky. Try looking behind the scenes!</li>
          <li>👀 Right-click anywhere on the page and select <strong>"View Page Source"</strong>.</li>
          <li>💡 Check the comments in the HTML. They often hold secrets!</li>
        </ol>
      </div>

      <script>
        {`console.log("Hint: Use the browser's developer tools to inspect the page! 🐾");`}
      </script>
    </div>
  );
}

export default function Home() {
  return (
    <main
      style={{
        padding: "80px",
        fontFamily: "system-ui",
        maxWidth: "900px",
      }}
    >
      <section>
        <h1>My Portfolio</h1>
        <p>Identity line goes here.</p>
      </section>

      <section style={{ marginTop: "80px" }}>
        <h2>About</h2>
        <p>Short factual description of what you do.</p>
      </section>

      <section style={{ marginTop: "80px" }}>
        <h2>Skills</h2>
        <ul>
          <li>Skill one</li>
          <li>Skill two</li>
          <li>Skill three</li>
        </ul>
      </section>

      <section style={{ marginTop: "80px" }}>
        <h2>Projects</h2>
        <p>Project name and outcome.</p>
      </section>

      <section style={{ marginTop: "80px" }}>
        <h2>Contact</h2>
        <p>Email or GitHub.</p>
      </section>
    </main>
  )
}
